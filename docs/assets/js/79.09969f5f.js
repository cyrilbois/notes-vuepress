(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{289:function(s,a,t){"use strict";t.r(a);var e=t(3),n=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"webssh2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webssh2","aria-hidden":"true"}},[s._v("#")]),s._v(" WebSSH2")]),s._v(" "),t("h2",{attrs:{id:"安装-nvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-nvm","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装 NVM")]),s._v(" "),t("h4",{attrs:{id:"nodejs版本管理工具-管理nodejs版本和npm版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodejs版本管理工具-管理nodejs版本和npm版本","aria-hidden":"true"}},[s._v("#")]),s._v(" nodeJs版本管理工具,管理nodejs版本和npm版本")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o- https://raw.githubusercontent.com/creationix/nvm/master/install.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("source")]),s._v(" ~/.bashrc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"安装稳定版-nodejs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装稳定版-nodejs","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装稳定版 Nodejs")]),s._v(" "),t("h3",{attrs:{id:"查询最新版本号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询最新版本号","aria-hidden":"true"}},[s._v("#")]),s._v(" 查询最新版本号")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("nvm ls-remote --lts\nnvm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("最新的版本号"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"或者以下方式安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#或者以下方式安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 或者以下方式安装")]),s._v(" "),t("h5",{attrs:{id:"npm与node-js一起存在，这意味着当您下载并安装node-js时，您会自动在计算机上安装npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm与node-js一起存在，这意味着当您下载并安装node-js时，您会自动在计算机上安装npm","aria-hidden":"true"}},[s._v("#")]),s._v(" npm与Node.js一起存在，这意味着当您下载并安装Node.js时，您会自动在计算机上安装npm")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("https://rpm.nodesource.com/setup_11.x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y nodejs\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查Node.js和NPM版本")]),s._v("\nnode -v "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -v\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"下载-webssh2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载-webssh2","aria-hidden":"true"}},[s._v("#")]),s._v(" 下载 Webssh2")]),s._v(" "),t("div",{staticClass:"language-sehll line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git clone https://github.com/billchurch/WebSSH2\ncd WebSSH2\nnpm install --production\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"修改-webssh-源码使其支持-秘钥登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改-webssh-源码使其支持-秘钥登录","aria-hidden":"true"}},[s._v("#")]),s._v(" 修改 webssh 源码使其支持 秘钥登录")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" app/server/socket.js\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件开头添加")]),s._v("\nvar fs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 conn.connect 方法")]),s._v("\nusername: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v(",\nprivateKey: fs.readFileSync"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/root/.ssh/id_rsa'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"运行-webssh2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行-webssh2","aria-hidden":"true"}},[s._v("#")]),s._v(" 运行 Webssh2")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("screen")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("screen")]),s._v(" -S Webssh2\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"使用浏览器打开http-webssh服务器ip-webssh端口-ssh-host-ssh服务器ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用浏览器打开http-webssh服务器ip-webssh端口-ssh-host-ssh服务器ip","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用浏览器打开"),t("code",[s._v("http://Webssh服务器IP:Webssh端口/ssh/host/SSH服务器IP")])]),s._v(" "),t("h4",{attrs:{id:"默认端口号是2222"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认端口号是2222","aria-hidden":"true"}},[s._v("#")]),s._v(" 默认端口号是2222")]),s._v(" "),t("h4",{attrs:{id:"可以通过修改app-config-json中的listen-port修改端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可以通过修改app-config-json中的listen-port修改端口","aria-hidden":"true"}},[s._v("#")]),s._v(" 可以通过修改"),t("code",[s._v("app/config.json")]),s._v("中的"),t("code",[s._v("listen.port")]),s._v("修改端口")])])},[],!1,null,null,null);a.default=n.exports}}]);