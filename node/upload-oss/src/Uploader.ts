import path from 'path'
import fs from 'fs'
import OSS  from 'ali-oss'
import ProgressBar from 'progress'
import { getEnv, getFileMd5 } from './utils'

// const PUBLIC_PATH = path.resolve(__dirname, '../build')
interface UploadConfig {
  removeHtmlSuffix: boolean //
  removeHtmlSuffixIgnore: string[]
  cleanTargetPath: boolean // 清空上传目标文件夹
  uploadPath: string, // 本地待上传文件夹
  targetPath: string, // 上传目标文件夹
  bucket: string, //
  region: string, // 外网 oss-cn-hangzhou 内网 oss-cn-hangzhou-internal
}

interface uploadFolderOptions {
  uploadPath: string,
  targetPath: string
}

class Uploader {
  store: any
  uploadWorker: (() => any)[]
  bar?: ProgressBar
  uploadConfig: UploadConfig

  constructor(uploadConfig: UploadConfig) {
    const { bucket, region } = uploadConfig

    this.uploadConfig = uploadConfig
    this.uploadWorker = []

    this.store = new OSS({
      accessKeyId: getEnv('ALI_ACCESS_ID'),
      accessKeySecret: getEnv('ALI_ACCESS_KEY'),
      bucket,
      region,
      internal: false
    })
  }

  async isExist(path: string, md5: string) {
    let isExist = true

    try {
      const { res } = await this.store.head(path)
      const { headers } = res
      const { etag } = headers
      const ossMd5 = etag.replace(/"/g, '')
      if (ossMd5 !== md5) {
        isExist = false
      }
    } catch (error) {
      isExist = false
    }

    return isExist
  }

  getFileName (path: string) {
    const { removeHtmlSuffixIgnore } = this.uploadConfig
    if (removeHtmlSuffixIgnore.includes(path)) {
      return path
    }
    return path.replace('.html', '')
  }

  async getUploadOption (originName: string, originPath: string) {
    const { removeHtmlSuffix } = this.uploadConfig
    if (removeHtmlSuffix && originName.match(/.html$/)) {
      const fileName = this.getFileName(originName)
      return {
        fileName,
        filePath: originPath,
        option: {
          headers: {
            'Content-Type': 'text/html'
          }
        },
        md5: await getFileMd5(originPath)
      }
    } else {
      return {
        fileName: originName,
        filePath: originPath,
        md5: await getFileMd5(originPath)
      }
    }
  }

  async uploadFolder(options: uploadFolderOptions) {
    const { uploadPath, targetPath } = options

    const names = fs.readdirSync(uploadPath)
    for (const name of names) {
      const filepath = path.resolve(uploadPath, name)
      const suffixPath = `${targetPath}/${name}`

      if (fs.statSync(filepath).isFile()) {
        const uploadOption = await this.getUploadOption(suffixPath, filepath)
        const { fileName, filePath, option, md5 } = uploadOption

        const isExist = await this.isExist(suffixPath, md5)

        if (!isExist) {
          const worker = () => this.store.put(fileName, filePath, option)
          this.uploadWorker.push(worker)
        }
      } else {
        await this.uploadFolder({ uploadPath: filepath, targetPath: suffixPath })
      }
    }
  }

  async upload() {
    const { uploadPath, targetPath } = this.uploadConfig
    const absoluteUploadPath = path.resolve(__dirname, uploadPath)

    console.log(`Upload new static resource to ${JSON.stringify(this.uploadConfig)}`)
    console.log(`Folder path: ${absoluteUploadPath}`)

    await this.uploadFolder({
      uploadPath: absoluteUploadPath,
      targetPath
    })
    this.bar = new ProgressBar(':bar :current /:total :percent', {
      total: this.uploadWorker.length
    })
    await Promise.all(
      this.uploadWorker.map(worker => {
        return worker().then(() => {
          this.bar.tick()
        })
      })
    )
    console.log('\nUpload complete !')
  }

  clean() {
    console.log('Clean OSS files...')
    console.log('Clean complete')
  }
}

export default Uploader
