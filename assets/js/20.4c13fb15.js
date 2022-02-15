(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{524:function(a,n,e){a.exports=e.p+"assets/img/79596653-38f81200-80e1-11ea-98cd-1c6a3bb5de51.d0b5c1e5.png"},584:function(a,n,e){"use strict";e.r(n);var t=e(14),s=Object(t.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"lerna-简单入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-简单入门"}},[a._v("#")]),a._v(" lerna 简单入门")]),a._v(" "),t("p",[t("img",{attrs:{src:e(524),alt:""}})]),a._v(" "),t("p",[a._v("本篇将围绕"),t("strong",[a._v("为什么要使用 lerna")]),a._v("以及"),t("strong",[a._v("如何使用 lerna")]),a._v(" 两个方面来认识 lerna。")]),a._v(" "),t("h2",{attrs:{id:"为什么要使用-lerna"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用-lerna"}},[a._v("#")]),a._v(" 为什么要使用 lerna")]),a._v(" "),t("p",[a._v("先来看下官方的解释：")]),a._v(" "),t("blockquote",[t("ul",[t("li",[a._v("Splitting up large codebases into separate independently versioned packages is extremely useful for code sharing. However, making changes across many repositories is messy and difficult to track, and testing across repositories becomes complicated very quickly.")]),a._v(" "),t("li",[a._v("To solve these (and many other) problems, some projects will organize their codebases into multi-package repositories (sometimes called monorepos). Projects like Babel, React, Angular, Ember, Meteor, Jest, and many others develop all of their packages within a single repository.")]),a._v(" "),t("li",[a._v("Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.")]),a._v(" "),t("li",[a._v("Lerna can also reduce the time and space requirements for numerous copies of packages in development and build environments - normally a downside of dividing a project into many separate NPM packages. See the hoist documentation for details.")])])]),a._v(" "),t("p",[a._v("意思就是说我们开发的一些项目存在相互依赖的情况，同时呢这些项目又是在不同的仓库里面，这就给开发、维护和测试带来了极大的困难。\n为了解决这些问题，一些项目就把这些相互依赖的项目组织成多包的形式放在同一个代码仓库里面（俗称 monorepos）。\nBabel, React, Angular, Ember, Meteor, Jest 等都是将它们的包放在同一个仓库中来维护的。\nLerna干的事情就是使用 git 和 npm 来优化多包库的管理工作流程。")]),a._v(" "),t("h2",{attrs:{id:"如何使用-lerna"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何使用-lerna"}},[a._v("#")]),a._v(" 如何使用 Lerna")]),a._v(" "),t("h3",{attrs:{id:"lerna-管理项目的模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-管理项目的模式"}},[a._v("#")]),a._v(" Lerna 管理项目的模式")]),a._v(" "),t("p",[a._v("Lerna 有两种管理项目的模式：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Fixed/Locked 模式 (默认)： 所有的包共用一个版本号。")])]),a._v(" "),t("li",[t("p",[a._v("Independent mode： 在初始化的时候指定 --independent 参数：")])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("lerna init --independent\n")])])]),t("p",[a._v("这种模式下，可以单独的为每个包指定版本号。")]),a._v(" "),t("p",[a._v("learn为我们提供了以下命令：")]),a._v(" "),t("ul",[t("li",[a._v("lerna publish")]),a._v(" "),t("li",[a._v("lerna version")]),a._v(" "),t("li",[a._v("lerna bootstrap")]),a._v(" "),t("li",[a._v("lerna list")]),a._v(" "),t("li",[a._v("lerna changed")]),a._v(" "),t("li",[a._v("lerna diff")]),a._v(" "),t("li",[a._v("lerna exec")]),a._v(" "),t("li",[a._v("lerna run")]),a._v(" "),t("li",[a._v("lerna init")]),a._v(" "),t("li",[a._v("lerna add")]),a._v(" "),t("li",[a._v("lerna clean")]),a._v(" "),t("li",[a._v("lerna import")]),a._v(" "),t("li",[a._v("lerna link")]),a._v(" "),t("li",[a._v("lerna create")]),a._v(" "),t("li",[a._v("lerna info")])]),a._v(" "),t("p",[a._v("下面通过具体的demo来使用一下这些命令。")]),a._v(" "),t("h3",{attrs:{id:"lerna-init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-init"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/init#readme",target:"_blank",rel:"noopener noreferrer"}},[a._v("lerna init"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("作用：初始化项目")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 采用独立模式")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" lerna-example "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$_")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" lerna -D "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" npx lerna init --independent\n")])])]),t("p",[a._v("生成的项目目录如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("lerna-example/\n  packages/\n  package.json\n  lerna.json\n")])])]),t("p",[a._v("lerna.json 各个字段的含义：")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.1.3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"npmClient"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"npm"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"command"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"publish"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"ignoreChanges"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ignored-file"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"*.md"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"message"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"chore(release): publish"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"registry"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://npm.pkg.github.com"')]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"bootstrap"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"ignore"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"component-*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"npmClientArgs"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"--no-package-lock"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"packages"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"packages/*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("ul",[t("li",[a._v('version: 当前项目的版本，如果是independent模式的话这里是 "independent" 字符串')]),a._v(" "),t("li",[a._v("npmClient: 默认是 npm，可以使用yarn")]),a._v(" "),t("li",[a._v("command.publish.ignoreChanges: 指定哪些文件的更新不需要发布，例如修改 README。")]),a._v(" "),t("li",[a._v("command.publish.message: 在发版更新 version 的时候指定自定义 commit message")]),a._v(" "),t("li",[a._v("command.publish.registry: 指定远程仓库")]),a._v(" "),t("li",[a._v("command.bootstrap.ignore: 执行 lerna bootstrap 时忽略的文件")]),a._v(" "),t("li",[a._v("command.bootstrap.npmClientArgs: 执行 lerna bootstrap 命令会去执行 npm install 这里的参数就是传递给 npm install 的。")]),a._v(" "),t("li",[a._v("command.bootstrap.scope: 决定在执行 lerna bootstrap 的时候哪些 package 需要 bootstrap")]),a._v(" "),t("li",[a._v("packages: 指定 package 存放的位置")])]),a._v(" "),t("p",[a._v("现在我们的 packages 下面什么都还没有，下面我们来创建一些包。")]),a._v(" "),t("h3",{attrs:{id:"lerna-create"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-create"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/create#readme",target:"_blank",rel:"noopener noreferrer"}},[a._v("lerna create"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("作用：通过 lerna create 创建一个新的包，当然你也可以手动创建")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("lerna create animal\nlerna create "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" \nlerna create dog\n")])])]),t("p",[a._v("这里我们创建了animal cat dog 三个包项目结构如下:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(".\n├── lerna.json\n├── package.json\n└── packages\n    ├── animal\n    │   ├── README.md\n    │   ├── __tests__\n    │   │   └── animal.test.js\n    │   ├── lib\n    │   │   └── animal.js\n    │   └── package.json\n    ├── cat\n    │   ├── README.md\n    │   ├── __tests__\n    │   │   └── cat.test.js\n    │   ├── lib\n    │   │   └── cat.js\n    │   └── package.json\n    └── dog\n        ├── README.md\n        ├── __tests__\n        │   └── dog.test.js\n        ├── lib\n        │   └── dog.js\n        └── package.json\n")])])]),t("h3",{attrs:{id:"lerna-add"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-add"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/add#readme",target:"_blank",rel:"noopener noreferrer"}},[a._v("lerna add"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("作用：learn add 添加本地包或者远程包作为包的依赖")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 向名字以 prefix- 为前缀的文件夹里面添加 module-1 作为依赖\n$ lerna add module-1 packages/prefix-*\n\n# 向 module-2 中添加 module-1 作为依赖\n$ lerna add module-1 --scope=module-2\n\n# 向 module-2 中添加 module-1 作为开发依赖（devDependencies）\n$ lerna add module-1 --scope=module-2 --dev\n\n# 向 module-2 中添加 module-1 作为peerDependencies\n$ lerna add module-1 --scope=module-2 --peer\n\n# 向除了module-1（因为 module-1 是本地包）的所有包中添加 module-1 作为依赖\n$ lerna add module-1\n\n# 向所有的包中添加 babel-core 作为依赖（ babel-core 是远程包）\n$ lerna add babel-core\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 添加的 animal 作为 dog、cat 的依赖\n$ lerna add animal \n")])])]),t("p",[a._v("查看 dog 或者 cat 的 dependencies 会看到加入的依赖 animal。")]),a._v(" "),t("h3",{attrs:{id:"lerna-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-version"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/version#readme",target:"_blank",rel:"noopener noreferrer"}},[a._v("lerna version"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("作用：发布前更新包的版本 （lerna publish 包含这一步）")]),a._v(" "),t("p",[a._v("用法：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("lerna version "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v(".1 "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 直接指定特定的版本")]),a._v("\nlerna version patch "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用语义关键字")]),a._v("\nlerna version       "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 通过交互式命令选择")]),a._v("\n")])])]),t("p",[a._v("lerna version 在背后为我们做了这些事：")]),a._v(" "),t("ol",[t("li",[a._v("识别出自上次发布以后更新过的包；")]),a._v(" "),t("li",[a._v("提示选择新版本；")]),a._v(" "),t("li",[a._v("修改包的元数据来反映最新发版（修改包的版本号），在根目录和每个包里面运行生命周期脚本；")]),a._v(" "),t("li",[a._v("对提交打 tag；")]),a._v(" "),t("li",[a._v("推送到远程代码仓库。")])]),a._v(" "),t("p",[a._v("先 commit 本地的改动，然后执行 lerna version，默认情况下 lerna version 会将本地的 commit 和 tag 推送到远程仓库，这里只是本地演示可以通过指定 --no-push 参数来禁止推送。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ lerna version --no-push\ninfo cli using "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" version of lerna\nlerna notice cli v4.0.0\nlerna info versioning independent\nlerna info Looking "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" changed packages since animal@1.0.1\n? Select a new version "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("currently "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v(".0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Use arrow keys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n❯ Patch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v(".1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n  Minor "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.1")]),a._v(".0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n  Major "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.0")]),a._v(".0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n  Prepatch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v(".1-alpha.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n  Preminor "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.1")]),a._v(".0-alpha.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n  Premajor "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.0")]),a._v(".0-alpha.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n  Custom Prerelease \n  Custom Version \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),t("h3",{attrs:{id:"lerna-publish"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-publish"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/publish#readme",target:"_blank",rel:"noopener noreferrer"}},[a._v("lerna publish"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("作用： 发布本地包")]),a._v(" "),t("p",[a._v("用法：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#发布自上次发布过后更新过的包 （背后会执行 lerna version）")]),a._v("\n$ lerna publish \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#发布当前通过 lerna version 打好 tag 的包，需要先使用 lerna version 更新版本")]),a._v("\n$ lerna publish from-git\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#只发布远程 npm 仓库中没有的版本，适用于 lerna publish 没有全部发布成功的场景。")]),a._v("\n$ lerna publish from-package\n")])])]),t("p",[a._v("为了真实地模拟发包过程这里我们使用 "),t("a",{attrs:{href:"https://verdaccio.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Verdaccio"),t("OutboundLink")],1),a._v(" 搭建一个本地 npm 仓库")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 全局安装")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g verdaccio\n$ verdaccio\n")])])]),t("p",[a._v("访问 "),t("code",[a._v("http://localhost:4873/")]),a._v(" 可以看到启动界面。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("将每个包 package.json 中的 publishConfig.registry 改为 "),t("code",[a._v("http://localhost:4873/")])])]),a._v(" "),t("li",[t("p",[a._v("或者在项目的根目录创建 .npmrc 文件，将 npm 仓库地址改写为本地仓库地址： "),t("code",[a._v('registry="http://localhost:4873/"')]),a._v("，注意将每个包 package.json 中的 publishConfig 字段去掉")])])]),a._v(" "),t("p",[a._v("在 dog.js 中添加一行 "),t("code",[a._v('console.log("bark")')]),a._v(",准备就绪后 commit 提交本地的修改，然后执行：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ lerna publish --no-push\ninfo cli using "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" version of lerna\nlerna notice cli v4.0.0\nlerna info versioning independent\nlerna info Looking "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" changed packages since cat@1.0.3\n? Select a new version "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" dog "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("currently "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v(".4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Use arrow keys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n❯ Patch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v(".5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n  Minor "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.1")]),a._v(".0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n  Major "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.0")]),a._v(".0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n  Prepatch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v(".5-alpha.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n  Preminor "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.1")]),a._v(".0-alpha.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n  Premajor "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.0")]),a._v(".0-alpha.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n  Custom Prerelease \n  Custom Version \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),t("p",[a._v("命令行中会让我们进行版本的选择和确认，确认完毕后就会将我们的包发布到 npm 仓库中。")]),a._v(" "),t("p",[a._v("刷新 "),t("code",[a._v("http://localhost:4873/")]),a._v(" 就可以看到我们刚刚发布的包了。")]),a._v(" "),t("h3",{attrs:{id:"lerna-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-list"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/list#readme",target:"_blank",rel:"noopener noreferrer"}},[a._v("lerna list"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("作用：列出所有的本地包")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ lerna list      \ninfo cli using "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" version of lerna\nlerna notice cli v4.0.0\nlerna info versioning independent\nanimal\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v("\ndog\nlerna success found "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" packages\n")])])]),t("h3",{attrs:{id:"lerna-info"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-info"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/info#readme",target:"_blank",rel:"noopener noreferrer"}},[a._v("lerna info"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("作用：打印出本地环境信息")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ lerna info   \ninfo cli using "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" version of lerna\nlerna notice cli v4.0.0\nlerna info versioning independent\n\n Environment info:\n\n  System:\n    OS: macOS "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("11.5")]),a._v(".2\n    CPU: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" x64 Intel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("R"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" Core"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("TM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" i7-7920HQ CPU @ "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(".10GHz\n  Binaries:\n    Node: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("14.16")]),a._v(".0 - ~/.nvm/versions/node/v14.16.0/bin/node\n    Yarn: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.22")]),a._v(".4 - ~/.yarn/bin/yarn\n    npm: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6.14")]),a._v(".11 - ~/.nvm/versions/node/v14.16.0/bin/npm\n  Utilities:\n    Git: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.24")]),a._v(".3 - /usr/bin/git\n  npmPackages:\n    lerna: ^4.0.0 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.0")]),a._v(".0 \n")])])]),t("h3",{attrs:{id:"lerna-changed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-changed"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/changed#readme",target:"_blank",rel:"noopener noreferrer"}},[a._v("lerna changed"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("作用：列出自上一次发布过后修改过的包")]),a._v(" "),t("p",[a._v("修改文件，执行命令：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ lerna changed   \ninfo cli using "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" version of lerna\nlerna notice cli v4.0.0\nlerna info versioning independent\nlerna info Assuming all packages changed\nanimal\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v("\ndog\nlerna success found "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" packages ready to publish\n")])])]),t("h3",{attrs:{id:"lerna-clean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-clean"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/clean#readme",target:"_blank",rel:"noopener noreferrer"}},[a._v("lerna clean"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("作用：移除所有 package 下的 node_modules，除了根目录下的 node_modules")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ lerna clean               \ninfo cli using "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" version of lerna\nlerna notice cli v4.0.0\nlerna info versioning independent\nlerna info Removing the following directories:\nlerna info clean packages/animal/node_modules\nlerna info clean packages/cat/node_modules\nlerna info clean packages/dog/node_modules\n? Proceed? Yes\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),t("h3",{attrs:{id:"lerna-bootstrap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-bootstrap"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/bootstrap#readme",target:"_blank",rel:"noopener noreferrer"}},[a._v("lerna bootstrap"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("作用：建立相互依赖的包之间的软连接并安装其他的依赖")]),a._v(" "),t("p",[a._v("这个命令在背后执行了以下步骤:")]),a._v(" "),t("ul",[t("li",[a._v("安装所有包的外部依赖")]),a._v(" "),t("li",[a._v("建立存在依赖关系的包之间的依赖")]),a._v(" "),t("li",[a._v("在 bootstrapped 的包中执行 npm run prepublish （没有指定 --ignore-prepublish 的情况下）")]),a._v(" "),t("li",[a._v("在 bootstrapped 的包中执行npm run prepare")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ lerna bootstrap\ninfo cli using "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" version of lerna\nlerna notice cli v4.0.0\nlerna info versioning independent\nlerna info Bootstrapping "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" packages\nlerna info Symlinking packages and binaries\nlerna success Bootstrapped "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" packages\n")])])]),t("h3",{attrs:{id:"lerna-diff"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-diff"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/diff#readme",target:"_blank",rel:"noopener noreferrer"}},[a._v("lerna diff"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("作用：列出包自上一次发版以来做出的修改。")]),a._v(" "),t("p",[a._v("用法：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 列出所有包的改动")]),a._v("\n$ lerna "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("diff")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 列出具体某个包的改动")]),a._v("\n$ lerna "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("diff")]),a._v(" package-name\n")])])]),t("h3",{attrs:{id:"lerna-exec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-exec"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/exec#readme",target:"_blank",rel:"noopener noreferrer"}},[a._v("lerna exec"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("作用：使用 lerna exec 可以在所有的包目录下执行任意的命令。")]),a._v(" "),t("p",[a._v("用法：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("lerna "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -- "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("command"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# runs the command in all packages")]),a._v("\nlerna "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -- "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf ./node_modules "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除所有包下面的 node_modules")]),a._v("\n")])])]),t("h3",{attrs:{id:"lerna-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-run"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/run#readme",target:"_blank",rel:"noopener noreferrer"}},[a._v("lerna run"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("作用：使用 lerna run 可以在所有的包目录下执行对应的脚本。")]),a._v(" "),t("p",[a._v("用法：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("lerna run "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 执行所有包的 test 命令")]),a._v("\n")])])]),t("h3",{attrs:{id:"lerna-import"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-import"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/import#readme",target:"_blank",rel:"noopener noreferrer"}},[a._v("lerna import"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("作用：将已经存在的项目作为一个包导入到现有的lerna项目中，同时项目的 commit 历史记录会被一并导入。")]),a._v(" "),t("p",[a._v("用法：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("lerna "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path-to-external-repository"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"lerna-link"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-link"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/link#readme",target:"_blank",rel:"noopener noreferrer"}},[a._v("lerna link"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("作用：建立存在依赖关系的包之间的软连接")]),a._v(" "),t("p",[a._v("用法：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("lerna "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v("\n")])])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("本篇对 lerna 管理多包项目的实践过程做了一些简单的讲解，做到基本入门应该问题不大，剩下的就自由发挥了 😊。")]),a._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/398080866",target:"_blank",rel:"noopener noreferrer"}},[a._v("Lerna工作流探索"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://fed.taobao.org/blog/taofed/do71ct/uihagy/",target:"_blank",rel:"noopener noreferrer"}},[a._v("All in one：项目级 monorepo 策略最佳实践"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.cn/post/6844903856153821198",target:"_blank",rel:"noopener noreferrer"}},[a._v("Lerna 中文教程详解"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/35237759",target:"_blank",rel:"noopener noreferrer"}},[a._v("使用lerna优雅地管理多个package"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=s.exports}}]);