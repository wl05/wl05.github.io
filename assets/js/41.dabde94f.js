(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{560:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git-命令总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-命令总结"}},[t._v("#")]),t._v(" git 命令总结")]),t._v(" "),s("h2",{attrs:{id:"git-cherry-pick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-cherry-pick"}},[t._v("#")]),t._v(" git cherry-pick")]),t._v(" "),s("ul",[s("li",[t._v("基本用法")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cherry-pick 单条commit")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commitHash"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cherry-pick feature分支的最新一次提交")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("feature 分支"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cherry-pick 多个commit")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HashA"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HashB"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cherry-pick 连续的多个commit，这个命令不包含commit A")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".B \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cherry-pick 连续的多个commit，这个命令包含commit A")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick A^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".B \n")])])]),s("ul",[s("li",[t._v("cherry-pick 有冲突解决")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解决冲突后执行执行")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 然后")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick --continue\n")])])]),s("ul",[s("li",[t._v("丢弃修改")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick --abort\n")])])]),s("h2",{attrs:{id:"批量处理冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#批量处理冲突"}},[t._v("#")]),t._v(" 批量处理冲突")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 采用当前的")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout --ours filepath\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 采用传入的")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout --theirs filepath\n")])])]),s("h2",{attrs:{id:"git-reset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-reset"}},[t._v("#")]),t._v(" git reset")]),t._v(" "),s("p",[t._v("例如有 A -> B -> C -> D 次提交，当前在D这个commit，现在想回退到B这个commit，使用命令：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard B\n")])])]),s("p",[t._v("这里要特别注意的是这个操作是回退到B,意思就是执行完这个操作以后B之后的提交都没了。\n如果远程分支是领先于reset过后的本地分支，此时push是会报错的。这里只有使用git push -f 覆盖远程分支提交，\n"),s("em",[t._v("所以如果你不确定是否会覆盖别人的提交，最好不要执行这个命令。")])]),t._v(" "),s("h2",{attrs:{id:"git-revert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-revert"}},[t._v("#")]),t._v(" git revert")]),t._v(" "),s("h3",{attrs:{id:"revert普通提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#revert普通提交"}},[t._v("#")]),t._v(" revert普通提交")]),t._v(" "),s("p",[t._v("例如有 A -> B -> C -> D 次提交，当前在D这个commit，现在想回退B这个commit，使用命令：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert B\n")])])]),s("p",[t._v("执行完命令后提交记录变成： A -> B -> C -> D -> E， E会保存D，E 的修改撤销B的修改，\n这里就能看出 "),s("code",[t._v("git revert")]),t._v("和"),s("code",[t._v("git reset")]),t._v("的区别了。")]),t._v(" "),s("h3",{attrs:{id:"revert合并"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#revert合并"}},[t._v("#")]),t._v(" revert合并")]),t._v(" "),s("p",[t._v("相对于revert 普通提交，revert merge提交会稍微麻烦些。")]),t._v(" "),s("p",[t._v("我们来看一个例子：")]),t._v(" "),s("p",[t._v("这里将dev合并到了master生成了一个merge提交，")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("A -> B -> C -> D --  merge  (master)\n      \\            /\n      A'  --\x3e  B'  (dev)\n")])])]),s("p",[t._v("然后又有一个feature分支做完了一些开发，合并到了master分支，\nmaster分支部署后，发现在merge那个点引入了bug，现在想撤销merge那个commit，\n但是又不想影响其他的commit，此时revert就可以派上用场了。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("A -> B -> C -> D --  merge -> E -> F(master)\n     \\ \\            /                   /\n      \\ A'  --\x3e  B' -> D' -> E'(dev)   /\n       \\                              /\n        A'' --\x3e B'' --- D''（feature）/ \n")])])]),s("p",[t._v("我们先执行git log 查看一下merge 的commit id，")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("commit 3fd41a0027820066a4f07876ee3905ef5704d98b\nMerge: 8506600c9 4cffdcd01\nAuthor: ant\nDate:   Wed Mar 10 18:59:43 2021 +0800\n\n    Merge branch 'dev' into master\n")])])]),s("p",[t._v("这里merge 的 commit id是 "),s("code",[t._v("3fd41a")]),t._v(",执行 "),s("code",[t._v("git revert 3fd41a")]),t._v(",\n然后报错了:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git revert faulty merge\nerror: Commit faulty merge is a merge but no -m option was given.\nfatal: revert failed\n")])])]),s("p",[t._v("报错原因是git 不知道保留哪一个分支的修改，是保留"),s("code",[t._v("dev")]),t._v("还是"),s("code",[t._v("master")]),t._v("呢？ 怎么区分？\n这里我们需要使用-m参数指定"),s("code",[t._v("parant number")]),t._v("，-m后面的值可以"),s("code",[t._v("1")]),t._v("或者"),s("code",[t._v("2")]),t._v("，看上面的"),s("code",[t._v("merge log")]),t._v(" "),s("code",[t._v("Merge: 8506600c9 4cffdcd01")]),t._v(" 这里"),s("code",[t._v("8506600c9")]),t._v("是"),s("code",[t._v("master")]),t._v("的"),s("code",[t._v("commit id")]),t._v(",\n"),s("code",[t._v("4cffdcd01")]),t._v(" 是"),s("code",[t._v("dev")]),t._v("的"),s("code",[t._v("commit id")]),t._v(", 这里"),s("code",[t._v("1")]),t._v("，"),s("code",[t._v("2")]),t._v("分别就对应"),s("code",[t._v("8506600c9,4cffdcd01")]),t._v(",也就是分别对应"),s("code",[t._v("master、dev")])]),t._v(" "),s("p",[t._v("这里我们想保留master分支上的修改所以我们执行命令：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ git revert 3fd41a -m 1\n")])])]),s("p",[t._v("执行完后的分支")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("A -> B -> C -> D --  merge -> E --------\x3e F ---- G(master)\n     \\ \\            /                   /\n      \\ A'  --\x3e  B' -> D' -> E'(dev)   /\n       \\                              /\n        A'' --\x3e B'' --- D''（feature）/ \n")])])]),s("p",[t._v("此时生成一个新的"),s("code",[t._v("commit G")]),t._v("，这里"),s("code",[t._v("G")]),t._v("是包含"),s("code",[t._v("E")]),t._v("，"),s("code",[t._v("F")]),t._v("不包含"),s("code",[t._v("merge")]),t._v("的。")]),t._v(" "),s("h2",{attrs:{id:"git-stash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-stash"}},[t._v("#")]),t._v(" git stash")]),t._v(" "),s("p",[t._v("git stash 使用场景，比如正在feature分支上开发，然后遇到一个bug需要从master 切出分支修改，\n此时我们功能开发到一半不想commit，这个时候就可以使用git stash来操作了。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将工作区和暂存区的进度保存下来")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看保存的进度列表")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将进度恢复到工作区")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将原来在工作区的改动恢复到工作区，将原来在暂存区的改动恢复到暂存区")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("–index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 恢复指定的进度到工作区")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("stash_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 和git stash pop使用方式一样，区别是git stash pop执行完后会删除当前的保存的进度，而git stash apply不会")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除指定的进度")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash drop "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("stash_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除保存的所有进度")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"git-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-log"}},[t._v("#")]),t._v(" git log")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看某一个文件的提交记录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline 文件名\n")])])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("cherry-pick"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.cn/post/6844903647390744589#heading-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("revert"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/yxlshk/article/details/79944535",target:"_blank",rel:"noopener noreferrer"}},[t._v("revert"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);