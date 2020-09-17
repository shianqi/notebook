# 根据不同的文件夹使用不同的 email 提交 git commit

在用户目录下创建如下文件：

## .gitconfig

```
[includeIf "gitdir:~/workspace/**"]
	path = ~/.gitconfig-workspace

[includeIf "gitdir:~/workspace2/**"]
	path = ~/.gitconfig-workspace2
```

## .gitconfig-workspace

```
[user]
	email = mail@shianqi.com
	name = shianqi
```

## .gitconfig-workspace2

```
[user]
	email = mail2@shianqi.com
	name = shianqi2
```
