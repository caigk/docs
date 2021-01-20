# vscode source

## 

* [Glob 模式](https://www.cnblogs.com/savorboard/p/glob.html)

* [从 VSCode 看大型 IDE 技术架构](https://zhuanlan.zhihu.com/p/96041706)

* [Source Code Organization](https://github.com/microsoft/vscode/wiki/Source-Code-Organization)

## build and run

~~~sh
cd vscode
yarn

# task Build VS Code

#macOS and Linux
./scripts/code.sh

#Web (Chromium, Firefox or Safari only)
yarn web
~~~

## 相关技术

### dep

* [xterm.js](https://xtermjs.org/) : 终端工具
* [yauzl](https://github.com/thejoshwolfe/yauzl) : yet another unzip library for node
* [yazl](https://github.com/thejoshwolfe/yazl) : yet another zip library for node. For unzipping, see yauzl.
* [applicationinsights](https://github.com/Microsoft/ApplicationInsights-JS) : Application Insights 遥测
* [Chokidar](https://github.com/paulmillr/chokidar) : Minimal and efficient cross-platform file watching library
* [graceful-fs](https://github.com/isaacs/node-graceful-fs#readme) : graceful-fs functions as a drop-in replacement for the fs module, making various improvements.
* [http-proxy-agent](https://github.com/TooTallNate/node-http-proxy-agent) : This module provides an http.Agent implementation that connects to a specified HTTP or HTTPS proxy server, and can be used with the built-in http module.
* [https-proxy-agent]()
* [iconv-lite-umd]() : 
* [jschardet](https://github.com/chardet/chardet) : Port of python's chardet 检测字符编码Port of python's chardet
* [keytar](https://atom.github.io/node-keytar/) : Node module to manage system keychain
* [minimist](https://github.com/substack/minimist) : parse argument options
* [native-is-elevated](https://github.com/arkon/native-is-elevated) : Checks if the process is running with elevated privileges (as root on Unix systems, and as Administrator on Windows) 检测是否管理员权限
* [native-keymap](github.com/Microsoft/node-native-keymap) : Returns what characters are produced by pressing keys with different modifiers on the current system keyboard layout.
* [native-watchdog](https://github.com/Microsoft/node-native-watchdog) : Kills the current process when another process is no longer running. This helps when the JavaScript event loop might be busy and never recovering e.g. an accidental while true loop.
* [node-pty](github.com/Tyriar/node-pty) : This allows you to fork processes with pseudoterminal file descriptors. It returns a terminal object which allows reads and writes.
* [spdlog](github.com/Microsoft/node-spdlog) : Spdlog bindings for Node.JS
* [sudo-prompt](https://github.com/jorangreef/sudo-prompt) : Useful for background Node.js applications or native Electron apps that need sudo.
* [tas-client-umd](https://www.npmjs.com/package/tas-client) : 电话应答服务
* [v8-inspect-profiler](github.com/jrieken/v8-inspect-profiler) : This node module offers v8 cpu profiling via the Chrome DevTools protocol.
* [vscode-nsfw](https://github.com/axosoft/node-simple-file-watcher) : node-sentinel-file-watcher
* [vscode-oniguruma](github.com/microsoft/vscode-oniguruma) : oniguruma(正则表达式)
* [vscode-proxy-agent](https://github.com/Microsoft/vscode-proxy-agent) : Adaption of the electron-proxy-agent for Visual Studio Code.
* [vscode-regexpp](https://github.com/mysticatea/regexpp) : A regular expression parser for ECMAScript.
* [vscode-ripgrep](https://github.com/BurntSushi/ripgrep) : ripgrep is a line-oriented search tool that recursively searches your current directory for a regex pattern. 
* [vscode-sqlite3](https://github.com/mapbox/node-sqlite3) : Asynchronous, non-blocking SQLite3 bindings for Node.js.
* [vscode-textmate](https://github.com/microsoft/vscode-textmate) : An interpreter for grammar files as defined by TextMate.

### dev

* [7zip](https://github.com/fritx/win-7zip) : And the goal is to bring users a different and easy way to access 7zip.Being used at library cross-unzip.
* [ansi-colors](https://github.com/doowb/ansi-colors) : the fastest Node.js library for terminal styling. 
* [asar](https://github.com/electron/asar) : Asar is a simple extensive archive format
* [chromium-pickle-js](https://github.com/electron/node-chromium-pickle-js) : This class provides facilities for basic binary value packing and unpacking.
* [gulp-atom-electron](https://github.com/joaomoreno/gulp-atom-electron) : You can use this module in two distinct ways: to package your application and/or to download a version of Electron to disk.
* [gulp-azure-storage](https://github.com/joaomoreno/gulp-azure-storage) : download and upload files to/from the Azure blob storage.
* [gulp-bom](https://github.com/sindresorhus/gulp-bom) : Add a UTF-8 BOM to files。BOM——Byte Order Mark，就是字节序标记。UTF-8不需要BOM来表明字节顺序，但可以用BOM来表明编码方式。字符”ZERO WIDTH NO-BREAK SPACE“的UTF-8编码是EF BB BF。所以如果接收者收到以EF BB BF开头的字节流，就知道这是UTF-8编码了。通常把文件保存为不带BOM的UTF-8文件。
* [gulp-rename](https://github.com/hparra/gulp-rename) : a gulp plugin to rename files easily.
* [gulp-replace](https://github.com/lazd/gulp-replace) : A string replace plugin
* [gulp-shell](https://github.com/sun-zheng-an/gulp-shell) : A handy command line interface for gulp
* [gulp-sourcemaps](http://github.com/gulp-sourcemaps/gulp-sourcemaps) : Sourcemap support for gulpjs.
* [gulp-tsb](https://github.com/jrieken/gulp-tsb) : A gulp plugin for very fast TypeScript compilation. 
* [gulp-uglify](https://github.com/terinjokes/gulp-uglify/) : Minify JavaScript with UglifyJS3.
* [gulp-untar](https://github.com/jmerrifield/gulp-untar) : Extract tarballs in your gulp build pipeline
* [gulp-vinyl-zip](github.com/joaomoreno/gulp-vinyl-zip) : A library for creating and extracting ZIP archives from/to streams.
* [husky](github.com/typicode/husky) : Husky can prevent bad git commit, git push and more 🐶 woof!
* [innosetup](https://github.com/felicienfrancois/node-innosetup-compiler) : Node module to compile inno setup scripts (.iss)
* [is](https://github.com/enricomarino/is) : The definitive JavaScript type testing library
* [istanbul-lib-coverage](https://github.com/istanbuljs/istanbuljs) : An API that provides a read-only view of coverage information with the ability to merge and summarize coverage info.
* [istanbul-lib-instrument]() : 
* [istanbul-lib-report]() : 
* [istanbul-lib-source-maps]() : 
* [istanbul-reports]() : 
* [jsdom-no-contextify](https://github.com/crealogix/jsdom) : A JavaScript implementation of the WHATWG DOM and HTML standards.
* [lazy.js](https://github.com/dtao/lazy.js) : Lazy.js is a functional utility library for JavaScript, similar to Underscore and Lodash, but with a lazy engine under the hood that strives to do as little work as possible while being as flexible as possible.
* [merge-options](https://github.com/schnittstabil/merge-options) : merge-options considers plain objects as Option Objects, everything else as Option Values.
* [mime](https://github.com/broofa/mime) : A comprehensive, compact MIME type module.
* [minimatch](https://github.com/isaacs/minimatch) : glob 是一种文件匹配模式，全称 global，它起源于 Unix 的 bash shell 中，比如在 linux 中常用的 mv *.txt tmp/ 中，*.txt 就使用到了这种模式。注意 Glob 不匹配任何隐藏文件或文件夹。
* [minimist](https://github.com/substack/minimist) : parse argument options
* [mkdirp](https://github.com/isaacs/node-mkdirp) : Like mkdir -p, but in Node.js!不存在就建一个
* [mocha](https://mochajs.org/) : Simple, flexible, fun JavaScript test framework for Node.js & The Browser
* [npm-run-all](https://github.com/mysticatea/npm-run-all) : A CLI tool to run multiple npm-scripts in parallel or sequential.
* [opn]() : open Open stuff like URLs, files, executables. Cross-platform.
* [p-all](https://github.com/sindresorhus/p-all) : Run promise-returning & async functions concurrently with optional limited concurrency
* [playwright](https://github.com/Microsoft/playwright) : Playwright is a Node.js library to automate Chromium, Firefox and WebKit with a single API.
* [pump](https://github.com/mafintosh/pump) : pump is a small node module that pipes streams together and destroys all of them if one of them closes.
* [queue](https://github.com/jessetane/queue) : Asynchronous function queue with adjustable concurrency.
* [rcedit](https://github.com/electron/node-rcedit) : Node module to edit resources of Windows executables.
* [request]() : 
* [rimraf](github.com/isaacs/rimraf) : The UNIX command rm -rf for node.
* [sinon](https://github.com/sinonjs/sinon) : Standalone and test framework agnostic JavaScript test spies, stubs and mocks 
* [terser](https://github.com/terser/terser) : A JavaScript parser and mangler/compressor toolkit for ES6+.
* [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) : Simple XML to JavaScript object converter. It supports bi-directional conversion.
* [yaserver](https://github.com/alexdima/yaserver) : 
  
