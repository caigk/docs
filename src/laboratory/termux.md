# termux

[官网](https://termux.com/)

主要管理两个目录 home usr

## zsh

```sh
pkg install zsh

chsh -s zsh

```

## ssh

[ssh](https://wiki.termux.com/wiki/Remote_Access)

```sh

pkg install openssh

#启动,后台运行
termux-wake-lock
sshd

#关闭
pkill sshd

#证书登录
ssh-copy-id -p 8022 -i .ssh/id_rsa 192.168.8.128

ssh -p 8022 192.168.8.128

~~~

## reinstall

```sh

rm -rf $PREFIX

```

## 其它命令

```sh

ls ../usr/bin/termux-*

termux-info

termux-wake-lock
termux-wake-unlock

```

## script

```sh

#.shortcuts/
#.shortcuts/tasks

chmod +x .shortcuts/startSSHD.sh

```

## code server

[github code server doc](https://github.com/cdr/code-server/tree/v3.8.0/doc)
[github code server install](https://github.com/cdr/code-server/blob/v3.8.0/doc/install.md)

```sh

pkg install yarn

npm install -g cnpm --registry=https://registry.npm.taobao.org
npm install -g tyarn --registry=https://registry.npm.taobao.org


tyarn global add code-server

export PASSWORD=123456 
code-server --auth password --bind-addr 192.168.8.128:8080

```

# gitbook

错误：/usr/lib/node_modules/gitbook-cli/node_modules/npm/node_modules/graceful-fs/polyfills.js:287
解决

```sh
vi /data/data/com.termux/files/usr/lib/node_modules/gitbook-cli/node_modules/npm/node_modules/graceful-fs/polyfills.js
#62-64 行注释
#//fs.stat = statFix(fs.stat)
#//fs.fstat = statFix(fs.fstat)
#//fs.lstat = statFix(fs.lstat)

cd /data/data/com.termux/files/usr/lib/node_modules/gitbook-cli/node_modules/npm/node_modules/
npm install graceful-fs@latest --save

```

## 服务

[Termux-services](https://wiki.termux.com/wiki/Termux-services)
[runit](http://smarden.org/runit/)

```sh
pkg install termux-services
```

### mariadb

```sh
pkg install mariadb

#启动
source $PREFIX/etc/profile.d/start-services.sh
sv-enable mysqld
sv up mysqld

sv down mysqld

```

## api

[api](https://wiki.termux.com/wiki/Termux:API)

* 安装app termux-api
* 安将包 pkg install termux-api,并授权
