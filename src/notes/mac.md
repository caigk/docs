# mac 常用

## shell用法

```sh
#用法1
echo $(date '+%Y%m%d%H%M%S') 

rm -rf $(xcode-select -p)

find _dist -name ".DS_Store" -depth -exec rm {} \;

```

参考例

```sh
# docker images导出与导入
reload() {
  source ${BASH_SOURCE[0]}
}
alias r=reload

getImageField() {
  local imageId=$1
  local field=$2
  : ${imageId:? reuired}
  : ${field:? required}
  
  docker images --no-trunc|sed -n "/${imageId}/s/ \{1,\}/ /gp"|cut -d" " -f $field
}

getImageName() {
  getImageField $1 1
}

getImageTag() {
  getImageField $1 2
}

saveAllImage() {
  local ids=$(docker images -q)
  local name safename tag

  for id in $ids; do
    name=$(getImageName $id)
    tag=$(getImageTag $id)
    if [[  $name =~ / ]] ; then
       dir=${name%/*}
       mkdir -p $dir
    fi
    echo [DEBUG] save $name:$tag ...
    (time  docker save -o $name.$tag.dim $name:$tag) 2>&1|grep real
  done
}

loadAllImage() {
  local name safename noextension tag

  for image in $(find . -name \*.dim); do
    echo [DEBUG] load
    tar -Oxf $image repositories

    docker load -i $image
  done
}

#saveAllImage
loadAllImage


```

## 系统清理

* [Docker for Mac: reducing disk space](https://djs55.github.io/jekyll/update/2017/11/27/docker-for-mac-disk-space.html)

```sh

# brew
# -------------
# ~/Library/Containers
# ~/Library/Caches


# brew
# -------------
brew cleanup
#rm -rf $(brew --cache) #彻底

# docker
# -------------
#ls -s /Users/caigangkun/Library/Containers/com.docker.docker/Data/vms/0/Docker.raw
#du /Users/caigangkun/Library/Containers/com.docker.docker/Data/vms/0/Docker.raw

docker system prune
#后工触发
docker run --rm -it --privileged --pid=host walkerlee/nsenter -t 1 -m -u -i -n fstrim /var/lib/docker

# npm
# -------------
npm cache clean --force

# yarn
# -------------
yarn cache clean

```

## sed

[Linux sed命令完全攻略](http://c.biancheng.net/view/4028.html)
[sed命令](https://man.linuxde.net/sed)\

```sh

#找到包含67fa590cfc1c的行，替换多空格为单空格
sed -n "/67fa590cfc1c/s/ \{1,\}/ /gp"

```

## Remove .DS_Store from git repository

Remove existing .DS_Store files from the repository:

```sh
find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch
```

Add the .DS_Store line to the file .gitignore, this file can be found at the top level of your repository, if not created it with the following command:

```sh
echo .DS_Store >> .gitignore
```

Then add the changes and commit them:

```sh
git add .gitignore
git commit -m '.DS_Store banished!' 
```

Then push:

```sh
git push 
```

## 分区exFAT 指定unit size

* [Default cluster size for NTFS, FAT, and exFAT](https://support.microsoft.com/en-us/topic/default-cluster-size-for-ntfs-fat-and-exfat-9772e6f1-e31a-00d7-e18f-73169155af95)

```sh
df
sudo newfs_exfat -b 1024 -v exFAT /dev/disk2s5
```
