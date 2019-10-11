import Uploader from './Uploader'
import refreshCDN from './refresh-cdn'

const env = require('../env')

const { oss, cdn } = env

const upload = async () => {
  const uploader = new Uploader({
    uploadPath: '../build',
    targetPath: '/target',
    region: 'oss-cn-beijing',
    bucket: 'tp-hansel-dev',
    removeHtmlSuffix: true,
    removeHtmlSuffixIgnore: [],
    cleanTargetPath: false,
  })
  await uploader.upload()
}

const process = async () => {
  await upload()
  await refreshCDN({
    enabled: true,
    paths: [
      'http://www.baidu.com/public/',
      'https://www.baidu.com/public/'
    ]
  })
}

process()
