# pandoc

* [官网](https://pandoc.org/)
* https://pandoc.org/demos.html
* [Customizing pandoc to generate beautiful pdfs from markdown](https://dev.to/learnbyexample/customizing-pandoc-to-generate-beautiful-pdfs-from-markdown-3lbj)

## 安装

```sh
brew update
brew install pandoc
brew install mactex --cask

```

## pandoc

```sh
pandoc -D latex > template.latex 

#通过变量代入参数
pandoc ch.md --pdf-engine=xelatex -V documentclass=ctexart -o ch.pdf 

#直接生成pdf
xelatex contact.tex
```

## 生成pdf时中文处理

* 修改\documentclass{ctexart}
* 通过参数传入 -V documentclass=ctexart

## 生成docx

```sh
#查数据data-dir
pandoc -v 

#输出word模板样式
pandoc --print-default-data-file reference.docx > custom-reference.docx

#word 选项
--toc # 生成目录
--toc-depth=NUMBER # 生成的目录深度
--wrap=auto|none|preserve # 文字换行方式
--reference-doc=FILE # 指定模板

```

## yaml

Extension: yaml_metadata_block
A YAML metadata block is a valid YAML object, delimited by a line of three hyphens (---) at the top and a line of three hyphens (---) or three dots (...) at the bottom. A YAML metadata block may occur anywhere in the document, but if it is not at the beginning, it must be preceded by a blank line. (Note that, because of the way pandoc concatenates input files when several are provided, you may also keep the metadata in a separate YAML file and pass it to pandoc as an argument, along with your Markdown files:

pandoc chap1.md chap2.md chap3.md metadata.yaml -s -o book.html
Just be sure that the YAML file begins with --- and ends with --- or ....) Alternatively, you can use the --metadata-file option. Using that approach however, you cannot reference content (like footnotes) from the main markdown input document.