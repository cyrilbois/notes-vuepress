# Git

## 目录
* [使用命令](#使用命令)
  * [把空文件夹提交到仓库](#把空文件夹提交到仓库)
  * [更换项目远程地址](#更换项目远程地址)
  * [未push之前更改提交](#未push之前更改提交)
  * [强制push本地仓库到远程](#强制push本地仓库到远程)
  * [pull强制覆盖本地文件](#pull强制覆盖本地文件)
  * [清除用户名密码](#清除用户名密码)
  * [git恢复指定文件到指定版本](#git恢复指定文件到指定版本)
  * [统计](#统计)
* [常见问题](#常见问题)
  * [项目过大clone报错](#项目过大clone报错)
  * [提交本地文件失败](#提交本地文件失败)
  * [远端与本地代码冲突](#远端与本地代码冲突)
* [批量更新本地项目](#批量更新本地项目)
  * [Windows](#windows)
  * [Linux](#linux)
* [Git服务器](#git服务器)
  * [GitLab](#gitlab)
  * [Gogs](#gogs)
  * [Gitea](#gitea)
* [GitHub访问速度过慢](#github访问速度过慢)


## 使用命令

### 把空文件夹提交到仓库

> 这个只能说是技巧不能说是方法，原理是在每个空文件夹新建一个.gitignore文件

```bash
find . -type d -empty -exec touch {}/.gitignore \;
```
### 更换项目远程地址
> 见`项目目录/.git/config`中的`remote`节点

```bash
# 查看当前的远程地址
git remote -v   
# 删除当前的远程地址
git remote rm origin
# 或者
git remote remove origin
# 添加远程地址
git remote add origin 远程地址

# 或者直接修改
git remote set-url origin 远程地址

# 或者为origin添加一个远程地址，一条命令拉取或推送多个项目地址
git remote set-url --add origin 地址

# 把当前分支与远程分支进行关联
git push --set-upstream origin 分支名称

```


### 未push之前更改提交

> 如果提交了代码到本地，还没push，发现同步时提交的变更内容的注释填写有误。

```bash
# 查看提交文件，里面包含注释和变更内容
git commit --amend
# 按v进入编辑模式，更改完成后按esc然后输入:qw! 保存
```
### 强制push本地仓库到远程

> 这种情况不会进行merge, 强制push后远程文件可能会丢失,不建议使用此方法

```bash
# 将本地仓库文件push到远程仓库（-f代表强制）
git push -u -f origin master
```
### pull强制覆盖本地文件

> 如果有任何本地更改，将会丢失。无论是否有--hard选项，任何未被推送的本地提交都将丢失。
> 如果您有任何未被Git跟踪的文件(例如上传的用户内容)，这些文件将不会受到影响。

#### 在重置之前可以通过从master创建一个分支来维护当前的本地提交
```bash
git checkout master
git branch new-branch
```
> 在此之后，所有旧的提交都将保存在`new-branch`中。然而，没有提交的更改(即使staged)将会丢失。确保存储和提交任何你需要的东西。

#### 执行重置
```bash
# 从远程下载最新的，而不尝试合并或rebase任何东西
git fetch --all
# reset将主分支重置为您刚刚获取的内容。 --hard选项更改工作树中的所有文件以匹配origin/<branch_name>中的文件
git reset --hard origin/<branch_name>
```
### 清除用户名密码
```bash
git config --system --unset credential.helper
```

### git恢复指定文件到指定版本
#### 查看commit历史，并复制需要回退版本的hash
```bash
git log 文件名
```
#### 恢复
```bash
git checkout 复制的hash值 文件名
```

### 统计

#### 查看git上的个人代码量
```bash
git log --author="用户名" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -
```

#### 统计每个人增删行数
```bash
git log --format='%aN' | sort -u | while read name; do echo -en "$name\t"; git log --author="$name" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -; done
```

#### 查看仓库提交者排名前五
```bash
git log --pretty='%aN' | sort | uniq -c | sort -k1 -n -r | head -n 5
```
#### 贡献值统计
```bash
git log --pretty='%aN' | sort -u | wc -l
```
#### 提交数统计
```bash
git log --oneline | wc -l
```
#### 添加或修改的代码行数
```bash
git log --stat|perl -ne 'END { print $c } $c += $1 if /(\d+) insertions/'
```










-----------------------------------------------------------------------------

## 常见问题


### 项目过大clone报错
https://vnzmi.com/2017/01/08/git-early-eof-index-pack-failed/
#### git 由于提交了比较大的文件，在服务端一直无法拉下来，错误如下
```diff
Cloning into 'E:\soft'...
POST git-upload-pack (175 bytes)
remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (6/6), done.
fatal: early EOF
fatal: the remote end hung up unexpectedly
fatal: index-pack failed
```

#### 执行命令
```bash
# 修改压缩的程度
git config --global core.compression 0

# 解决内存不够问题
git config --global pack.deltaCacheSize 2047m
git config --global pack.packSizeLimit 2047m
git config --global pack.windowMemory 2047m
git config --global core.packedGitWindowSize 512m
git config --global core.packedGitLimit 512m

# 调整缓存大小（单位为字节）为1G
git config --global http.postBuffer 1073741824

# 最低速度限制
git config --global http.lowSpeedLimit 0
# 最低速度时间
git config --global http.lowSpeedTime 999999
```
> compression 是压缩的意思，从 clone 的终端输出就知道，服务器会压缩目标文件，然后传输到客户端，客户端再解压。
取值为 [-1, 9]，-1 以 zlib 为默认压缩库，0 表示不进行压缩，1..9 是压缩速度与最终获得文件大小的不同程度的权衡，数字越大，压缩越慢，当然得到的文件会越小。

### 提交本地文件失败

> 在github远程创建仓库后, 利用gitbash进行提交本地文件的时候出现如下错误

```diff
[root@foundation38 demo]# git push -u origin master
Username for 'https://github.com': woytu
Password for 'https://woytu@github.com': 
To https://github.com/woytu/test.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'https://github.com/woytu/test.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Merge the remote changes (e.g. 'git pull')
hint: before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```
#### 解决方式
##### 第一种：进行push前先将远程仓库pull到本地仓库
```bash
# git pull --rebase origin master
git pull origin master
git push -u origin master

```
##### 第二种：强制push本地仓库到远程
```bash
git push -u origin master -f
```
##### 第三种：避开解决冲突, 将本地文件暂时提交到远程新建的分支中
```bash
git branch [name]
# 创建完branch后, 再进行push
git push -u origin [name] 
```

### 远端与本地代码冲突
#### 1、先将本地修改存储起来
```bash
# 暂存修改,这样本地的所有修改就都被暂时存储起来
git stash
# 看到保存的信息,其中stash@{0}就是刚才保存的标记。
git stash list
```
#### 2、暂存了本地修改之后，pull内容
#### 3、还原暂存的内容
```bash
git stash popstash@{0}
```
#### 系统提示如下类似的信息：
```diff
Auto-mergingc/environ.c
CONFLICT(content): Merge conflict in c/environ.c
```
> 意思就是系统自动合并修改的内容，但是其中有冲突，需要解决其中的冲突。

#### 解决文件中冲突的的部分
> 打开冲突的文件，其中`Updatedupstream` 和`=====`之间的内容就是pull下来的内容，`====`和`stashed changes`之间的内容就是本地修改的内容。
碰到这种情况，git也不知道哪行内容是需要的，所以要自行确定需要的内容。








***********************************************************************************


## 批量更新本地项目
### Windows
```batch
@echo off
:: 遍历当前目录下的子目录
for /f "delims=" %%i in ('dir /ad/b') do (
    :: 切换到子目录
    cd %%i
    :: 判断文件夹是否存在
    if exist ".git" (
        :: 列出远程仓库地址
        git remote -v
        echo ******** 开始更新 %%i **********
        :: 更新
        git pull
        echo -----------------------------------------------------------
    )
    cd ..
)

pause
```

### Linux
```bash
#!/bin/bash
function readdir() {
    # awk中有RS,ORS,FS,OFS 4个可以定义分隔符的变量
    # 保存原有的IFS（内部域分隔符）
    SAVEIFS=$IFS
    # 设置带有空格的文件名的处理方式
    IFS=$(echo -en "\n\b")
    # 切换到指定目录
    cd $*
    # 循环参数中指定目录的子目录
    for file in $(ls -F | grep /$); do
        # 切换到子目录
        cd $file
        # 设置执行结果变量
        dir_variable=$?
        # 如果切换到子目录失败
        if [ "$dir_variable" != "0" ]; then
            echo $dir_variable
            echo $*$file
        fi
        # 判断是否是git项目
        if [ -d ".git" ]; then
            # 列出git远端仓库路径
            git remote -v
            echo 开始更新： $file
            git pull
            echo -----------------------------------------------------------
        fi
        cd ..
        # 循环当前子目录下的子目录
        #readdir $1$file
    done
    # 恢复原有的IFS
    IFS=$SAVEIFS
}
# 调用shell函数并传参
readdir $(pwd)

```

## Git服务器

### GitLab

[https://hub.docker.com/r/bensonfx/gitlab-ce-zh](https://hub.docker.com/r/bensonfx/gitlab-ce-zh)

[https://github.com/bensonfx/codeserver](https://github.com/bensonfx/codeserver)

[https://hub.docker.com/r/benyoo/gitlab](https://hub.docker.com/r/benyoo/gitlab)

[https://hub.docker.com/r/imleafz/gitlab-ce-zh](https://hub.docker.com/r/imleafz/gitlab-ce-zh)

[GitLab Community Edition (中文社区版)](https://github.com/twang2218/gitlab-ce-zh)

[汉化的 GitLab 社区版 Docker Image ](https://hub.docker.com/r/twang2218/gitlab-ce-zh)
```bash
version: '2'
services:
    gitlab:
      image: 'twang2218/gitlab-ce-zh:11.1.4'
      restart: unless-stopped
      hostname: 'git.woetu.com'
      environment:
        TZ: 'Asia/Shanghai'
        GITLAB_OMNIBUS_CONFIG: |
          external_url 'http://git.woetu.com'
          gitlab_rails['time_zone'] = 'Asia/Shanghai'
          # 需要配置到 gitlab.rb 中的配置可以在这里配置，每个配置一行，注意缩进。
          # 比如下面的电子邮件的配置：
          # gitlab_rails['smtp_enable'] = true
          # gitlab_rails['smtp_address'] = "smtp.exmail.qq.com"
          # gitlab_rails['smtp_port'] = 465
          # gitlab_rails['smtp_user_name'] = "xxxx@xx.com"
          # gitlab_rails['smtp_password'] = "password"
          # gitlab_rails['smtp_authentication'] = "login"
          # gitlab_rails['smtp_enable_starttls_auto'] = true
          # gitlab_rails['smtp_tls'] = true
          # gitlab_rails['gitlab_email_from'] = 'xxxx@xx.com'
      ports:
        - '8099:80'
        - '442:443'
        - '22:22'
      volumes:
        # - /home/gitlab/config:/home/gitlab/config
        # - /home/gitlab/data:/home/gitlab/data
        # - /home/gitlab/logs:/home/gitlab/logs
        - config:/etc/gitlab
        - data:/var/opt/gitlab
        - logs:/var/log/gitlab
volumes:
    config:
    data:
    logs:
```


### Gogs

[Gogs-DockerHub](https://hub.docker.com/r/gogs/gogs)

[Gogs-GitHub](https://github.com/gogs/gogs/blob/master/README_ZH.md)

[Gogs官方文档](https://gogs.io/)

[安装教程](https://www.jianshu.com/p/86c385682ac8)

### Gitea
[Gitea-DockerHub](https://hub.docker.com/r/gitea/gitea)

[Gitea-GitHub](https://github.com/go-gitea/gitea/blob/master/README_ZH.md)

[Gitea官方文档](https://gitea.io/zh-cn/)



## GitHub访问速度过慢



### 打开以下网页

[https://myssl.com/dns_check.html](https://myssl.com/dns_check.html)

[http://tool.chinaz.com/dns](http://tool.chinaz.com/dns)

### 搜索以下域名并复制`TTL`值最小的IP
```bash
assets-cdn.github.com
avatars.githubusercontent.com
avatars0.githubusercontent.com
avatars1.githubusercontent.com
codeload.github.com
documentcloud.github.com
gist.github.com
github.com
github.global.ssl.fastly.net
github.io
github-cloud.s3.amazonaws.com
global-ssl.fastly.net
help.github.com
nodeload.github.com
raw.github.com
status.github.com
training.github.com
www.github.com
```

### 添加到`C:\Windows\System32\drivers\etc\hosts`
#### 示例
```bash
185.199.111.153 assets-cdn.github.com
185.199.110.153 assets-cdn.github.com
185.199.108.153 assets-cdn.github.com
185.199.109.153 assets-cdn.github.com
151.101.200.133 avatars.githubusercontent.com
151.101.200.133 avatars0.githubusercontent.com
151.101.200.133 avatars1.githubusercontent.com
185.199.110.153 documentcloud.github.com
185.199.111.153 documentcloud.github.com
185.199.108.153 documentcloud.github.com
185.199.109.153 documentcloud.github.com
192.30.253.119  gist.github.com
140.82.114.3    github.com
151.101.249.194 github.global.ssl.fastly.net
185.199.108.153 github.io
185.199.111.153 github.io
185.199.110.153 github.io
185.199.109.153 github.io
52.216.233.35   github-cloud.s3.amazonaws.com
151.101.248.249 global-ssl.fastly.net
185.199.108.154 help.github.com
185.199.110.154 help.github.com
185.199.109.154 help.github.com
185.199.111.154 help.github.com
140.82.113.9    nodeload.github.com
151.101.248.133 raw.github.com
18.214.129.83   status.github.com
18.211.136.12   status.github.com
18.204.240.114  status.github.com
192.30.253.167  training.github.com
```

### 刷新DNS缓存
#### macOS
```bash
killall -HUP mDNSResponder
dscacheutil -flushcache
```

#### Windows
```bash
ipconfig /flushdns
```
#### Linux
```bash
service nscd restart
```
#### Ubuntu
```bash
sudo /etc/init.d/dns-clean start
```

### 克隆代理地址

> 替换`https://github.com`为`https://github.com.cnpmjs.org`
