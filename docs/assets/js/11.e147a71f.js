(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{291:function(s,a,t){"use strict";t.r(a);var e=t(3),n=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git服务器搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git服务器搭建","aria-hidden":"true"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"/VPS/Docker"}},[s._v("Git服务器搭建")])]),s._v(" "),t("h1",{attrs:{id:"目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4"}},[s._v("使用命令")])]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E6%8A%8A%E7%A9%BA%E6%96%87%E4%BB%B6%E5%A4%B9%E6%8F%90%E4%BA%A4%E5%88%B0%E4%BB%93%E5%BA%93"}},[s._v("把空文件夹提交到仓库")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E6%9B%B4%E6%8D%A2%E9%A1%B9%E7%9B%AE%E5%9C%B0%E5%9D%80"}},[s._v("更换项目地址")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E6%9C%AApush%E4%B9%8B%E5%89%8D%E6%9B%B4%E6%94%B9%E6%8F%90%E4%BA%A4%E7%9A%84%E6%B3%A8%E9%87%8A"}},[s._v("未push之前更改提交的注释")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%BC%BA%E5%88%B6push%E6%9C%AC%E5%9C%B0%E4%BB%93%E5%BA%93%E5%88%B0%E8%BF%9C%E7%A8%8B"}},[s._v("强制push本地仓库到远程")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#pull%E5%BC%BA%E5%88%B6%E8%A6%86%E7%9B%96%E6%9C%AC%E5%9C%B0%E6%96%87%E4%BB%B6"}},[s._v("pull强制覆盖本地文件")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E6%B8%85%E9%99%A4%E7%94%A8%E6%88%B7%E5%90%8D%E5%AF%86%E7%A0%81"}},[s._v("清除用户名密码")])])])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"#%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3"}},[s._v("问题解决")])]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E9%A1%B9%E7%9B%AE%E8%BF%87%E5%A4%A7clone%E6%8A%A5%E9%94%99"}},[s._v("项目过大clone报错")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E6%8F%90%E4%BA%A4%E6%9C%AC%E5%9C%B0%E6%96%87%E4%BB%B6%E5%A4%B1%E8%B4%A5"}},[s._v("提交本地文件失败")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E8%BF%9C%E7%AB%AF%E4%B8%8E%E6%9C%AC%E5%9C%B0%E4%BB%A3%E7%A0%81%E5%86%B2%E7%AA%81"}},[s._v("远端与本地代码冲突")])])])])]),s._v(" "),t("hr"),s._v(" "),t("h1",{attrs:{id:"使用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用命令")]),s._v(" "),t("h2",{attrs:{id:"把空文件夹提交到仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#把空文件夹提交到仓库","aria-hidden":"true"}},[s._v("#")]),s._v(" 把空文件夹提交到仓库")]),s._v(" "),t("blockquote",[t("p",[s._v("这个只能说是技巧不能说是方法，原理是在每个空文件夹新建一个.gitignore文件")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type d -empty -exec "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/.gitignore \\"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"更换项目地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更换项目地址","aria-hidden":"true"}},[s._v("#")]),s._v(" 更换项目地址")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前的远程地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v   \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除当前的远程地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" origin\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加远程地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n或者直接修改\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote origin set-url （此处未更新后的新地址）\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把当前分支与远程分支进行关联(branchname要改成你的当前分支名称)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --set-upstream origin branchname\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"未push之前更改提交的注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#未push之前更改提交的注释","aria-hidden":"true"}},[s._v("#")]),s._v(" 未push之前更改提交的注释")]),s._v(" "),t("blockquote",[t("p",[s._v("如果提交了代码到本地，还没push，发现同步时提交的变更内容的注释填写有误。")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看提交文件，里面包含注释和变更内容")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按v进入编辑模式，更改完成后按esc然后输入:qw! 保存")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"强制push本地仓库到远程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强制push本地仓库到远程","aria-hidden":"true"}},[s._v("#")]),s._v(" 强制push本地仓库到远程")]),s._v(" "),t("blockquote",[t("p",[s._v("这种情况不会进行merge, 强制push后远程文件可能会丢失,不建议使用此方法")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master -f\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"pull强制覆盖本地文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pull强制覆盖本地文件","aria-hidden":"true"}},[s._v("#")]),s._v(" pull强制覆盖本地文件")]),s._v(" "),t("blockquote",[t("p",[s._v("如果有任何本地更改，将会丢失。无论是否有--hard选项，任何未被推送的本地提交都将丢失。\n如果您有任何未被Git跟踪的文件(例如上传的用户内容)，这些文件将不会受到影响。")])]),s._v(" "),t("h3",{attrs:{id:"在重置之前可以通过从master创建一个分支来维护当前的本地提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在重置之前可以通过从master创建一个分支来维护当前的本地提交","aria-hidden":"true"}},[s._v("#")]),s._v(" 在重置之前可以通过从master创建一个分支来维护当前的本地提交")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch new-branch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[s._v("在此之后，所有旧的提交都将保存在"),t("code",[s._v("new-branch")]),s._v("中。然而，没有提交的更改(即使staged)将会丢失。确保存储和提交任何你需要的东西。")])]),s._v(" "),t("h3",{attrs:{id:"执行重置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行重置","aria-hidden":"true"}},[s._v("#")]),s._v(" 执行重置")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从远程下载最新的，而不尝试合并或rebase任何东西")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch --all\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# reset将主分支重置为您刚刚获取的内容。 --hard选项更改工作树中的所有文件以匹配origin/<branch_name>中的文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard origin/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"清除用户名密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清除用户名密码","aria-hidden":"true"}},[s._v("#")]),s._v(" 清除用户名密码")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --system --unset credential.helper\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("hr"),s._v(" "),t("h1",{attrs:{id:"问题解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题解决","aria-hidden":"true"}},[s._v("#")]),s._v(" 问题解决")]),s._v(" "),t("h2",{attrs:{id:"项目过大clone报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目过大clone报错","aria-hidden":"true"}},[s._v("#")]),s._v(" 项目过大clone报错")]),s._v(" "),t("p",[s._v("https://vnzmi.com/2017/01/08/git-early-eof-index-pack-failed/")]),s._v(" "),t("h3",{attrs:{id:"git-由于提交了比较大的文件，在服务端一直无法拉下来，错误如下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-由于提交了比较大的文件，在服务端一直无法拉下来，错误如下","aria-hidden":"true"}},[s._v("#")]),s._v(" git 由于提交了比较大的文件，在服务端一直无法拉下来，错误如下")]),s._v(" "),t("div",{staticClass:"language-diff line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[s._v("Cloning into 'E:\\soft'...\nPOST git-upload-pack (175 bytes)\nremote: Enumerating objects: 6, done.\nremote: Counting objects: 100% (6/6), done.\nremote: Compressing objects: 100% (6/6), done.\nfatal: early EOF\nfatal: the remote end hung up unexpectedly\nfatal: index-pack failed\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"执行命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 执行命令")]),s._v(" "),t("div",{staticClass:"language-sehll line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 修改压缩的程度\ngit config --global core.compression 0\n\n# 解决内存不够问题\ngit config --global pack.deltaCacheSize 2047m\ngit config --global pack.packSizeLimit 2047m\ngit config --global pack.windowMemory 2047m\ngit config --global core.packedGitWindowSize 512m\ngit config --global core.packedGitLimit 512m\n\n# 调整缓存大小（单位为字节）为1G\ngit config --global http.postBuffer 1073741824\n\n# 最低速度限制\ngit config --global http.lowSpeedLimit 0\n# 最低速度时间\ngit config --global http.lowSpeedTime 999999\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("blockquote",[t("p",[s._v("compression 是压缩的意思，从 clone 的终端输出就知道，服务器会压缩目标文件，然后传输到客户端，客户端再解压。\n取值为 [-1, 9]，-1 以 zlib 为默认压缩库，0 表示不进行压缩，1..9 是压缩速度与最终获得文件大小的不同程度的权衡，数字越大，压缩越慢，当然得到的文件会越小。")])]),s._v(" "),t("h2",{attrs:{id:"提交本地文件失败"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交本地文件失败","aria-hidden":"true"}},[s._v("#")]),s._v(" 提交本地文件失败")]),s._v(" "),t("blockquote",[t("p",[s._v("在github远程创建仓库后, 利用gitbash进行提交本地文件的时候出现如下错误")])]),s._v(" "),t("div",{staticClass:"language-diff line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[s._v("[root@foundation38 demo]# git push -u origin master\nUsername for 'https://github.com': woytu\nPassword for 'https://woytu@github.com': \nTo https://github.com/woytu/test.git\n ! [rejected]        master -> master (non-fast-forward)\nerror: failed to push some refs to 'https://github.com/woytu/test.git'\nhint: Updates were rejected because the tip of your current branch is behind\nhint: its remote counterpart. Merge the remote changes (e.g. 'git pull')\nhint: before pushing again.\nhint: See the 'Note about fast-forwards' in 'git push --help' for details.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"解决方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方式","aria-hidden":"true"}},[s._v("#")]),s._v(" 解决方式")]),s._v(" "),t("h4",{attrs:{id:"第一种：进行push前先将远程仓库pull到本地仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一种：进行push前先将远程仓库pull到本地仓库","aria-hidden":"true"}},[s._v("#")]),s._v(" 第一种：进行push前先将远程仓库pull到本地仓库")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git pull --rebase origin master")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h4",{attrs:{id:"第二种：强制push本地仓库到远程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二种：强制push本地仓库到远程","aria-hidden":"true"}},[s._v("#")]),s._v(" 第二种：强制push本地仓库到远程")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master -f\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"第三种：避开解决冲突-将本地文件暂时提交到远程新建的分支中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三种：避开解决冲突-将本地文件暂时提交到远程新建的分支中","aria-hidden":"true"}},[s._v("#")]),s._v(" 第三种：避开解决冲突, 将本地文件暂时提交到远程新建的分支中")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建完branch后, 再进行push")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"远端与本地代码冲突"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远端与本地代码冲突","aria-hidden":"true"}},[s._v("#")]),s._v(" 远端与本地代码冲突")]),s._v(" "),t("h3",{attrs:{id:"_1、先将本地修改存储起来"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、先将本地修改存储起来","aria-hidden":"true"}},[s._v("#")]),s._v(" 1、先将本地修改存储起来")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暂存修改,这样本地的所有修改就都被暂时存储起来")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 看到保存的信息,其中stash@{0}就是刚才保存的标记。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_2、暂存了本地修改之后，pull内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、暂存了本地修改之后，pull内容","aria-hidden":"true"}},[s._v("#")]),s._v(" 2、暂存了本地修改之后，pull内容")]),s._v(" "),t("h3",{attrs:{id:"_3、还原暂存的内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、还原暂存的内容","aria-hidden":"true"}},[s._v("#")]),s._v(" 3、还原暂存的内容")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash popstash@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"系统提示如下类似的信息："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统提示如下类似的信息：","aria-hidden":"true"}},[s._v("#")]),s._v(" 系统提示如下类似的信息：")]),s._v(" "),t("div",{staticClass:"language-diff line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[s._v("Auto-mergingc/environ.c\nCONFLICT(content): Merge conflict in c/environ.c\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[s._v("意思就是系统自动合并修改的内容，但是其中有冲突，需要解决其中的冲突。")])]),s._v(" "),t("h3",{attrs:{id:"解决文件中冲突的的部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决文件中冲突的的部分","aria-hidden":"true"}},[s._v("#")]),s._v(" 解决文件中冲突的的部分")]),s._v(" "),t("blockquote",[t("p",[s._v("打开冲突的文件，其中Updatedupstream 和=====之间的内容就是pull下来的内容，====和stashed changes之间的内容就是本地修改的内容。\n碰到这种情况，git也不知道哪行内容是需要的，所以要自行确定需要的内容。")])])])},[],!1,null,null,null);a.default=n.exports}}]);