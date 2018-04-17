# Node 调试工具
1.先需要一个node项目
    mkdir debug-demo
    cd debug-demo

    npm init -y
    npm install --save koa koa-route
    再新建app.js文件
2.启动开发者工具
    node --inspect app.js
    (--inspect参数是启动调试模式必需的)
    在谷歌上访问localhost:8888
3.若忘记写inspect参数，可以在另一个命令行窗口输入一下命令查询node app.js的脚本进程号
    ps ax | grep app.js

    然后执行
    node -e 'process._debugProcess(进程号)'

    还有一种方法，就是向脚本进程发送 SIGUSR1 信号，也可以建立调试连接。

    kill -SIGUSR1 30464
