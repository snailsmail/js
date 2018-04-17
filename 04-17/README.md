# 升级node版本

第一步，先查看本机node.js版本：

    $ node -v

第二步，清除node.js的cache：

    $ sudo npm cache clean -f

第三步，安装 n 工具，这个工具是专门用来管理node.js版本的，别怀疑这个工具的名字，是他是他就是他，他的名字就是 “n”

    $ sudo npm install -g n
   （安装后进行软链接，目前这样安装不是全局的）
    sudo ln -s ~/Tools/node-v6.11.2-linux-x64/bin/npm /usr/local/bin/npm      //软连接node

第四步，安装最新版本的node.js

    $ sudo n stable

第五步，再次查看本机的node.js版本：

    $ node -v

#  Koa
 koa是一种简单好用的web端框架，特点优雅、简洁、表达力强、自由度高，本省只用1000行代码，
 所有功能都通过插件实现，很符合Unix哲学。
 koa必需使用node 7.6以上版本。

然后，克隆本文的配套示例库。（如果不方便使用 Git，也可以下载 zip 文件解压。）

    $ git clone https://github.com/ruanyf/koa-demos.git

接着，进入示例库，安装依赖。

    $ cd koa-demos
    $ npm install


# BABEL
Babel的配置文件是.babelrc，存放在项目的根目录下

presets字段设定转码规则

    # ES2015转码规则
    $ npm install --save-dev babel-preset-es2015

    # react转码规则
    $ npm install --save-dev babel-preset-react

    # ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
    $ npm install --save-dev babel-preset-stage-0
    $ npm install --save-dev babel-preset-stage-1
    $ npm install --save-dev babel-preset-stage-2
    $ npm install --save-dev babel-preset-stage-3
























