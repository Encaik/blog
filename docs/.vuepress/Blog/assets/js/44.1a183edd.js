(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{548:function(t,s,e){"use strict";e.r(s);var a=e(20),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"经验总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#经验总结"}},[t._v("#")]),t._v(" 经验总结")]),t._v(" "),e("h2",{attrs:{id:"框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#框架"}},[t._v("#")]),t._v(" 框架")]),t._v(" "),e("h3",{attrs:{id:"vuepress-中使用-emoji"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-中使用-emoji"}},[t._v("#")]),t._v(" Vuepress 中使用 emoji")]),t._v(" "),e("p",[t._v("可以通过 Shortcodes 直接写在文档中，Shortcodes 可在"),e("a",{attrs:{href:"https://emojipedia.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("emojipedia"),e("OutboundLink")],1),t._v("查找")]),t._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[t._v("    :heart:\n")])])]),e("p",[t._v("显示效果：❤️")]),t._v(" "),e("h3",{attrs:{id:"vue-set及vue-delete"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-set及vue-delete"}},[t._v("#")]),t._v(" vue.$set及vue.$delete")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#Vue-set",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网示例"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("在我们使用 vue 进行开发的过程中，可能会遇到一种情况：当生成 vue 实例后，当再次给数据赋值时，有时候并不会自动更新到视图上去；\n当我们去看 vue 文档的时候，会发现有这么一句话：如果在实例创建之后添加新的属性到实例上，它不会触发视图更新。")]),t._v(" "),e("p",[t._v("如下代码，给 student 对象新增 age 属性")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        student"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            sex"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("原因是：受 ES5 的限制，Vue.js 不能检测到对象属性的添加或删除。因为 Vue.js 在初始化实例时将属性转为 getter/setter，所以属性必须在 data 对象上才能让 Vue.js 转换它，才能让它是响应的。")]),t._v(" "),e("p",[t._v("要处理这种情况，我们可以使用$set()方法，既可以新增属性,又可以触发视图更新。")]),t._v(" "),e("p",[t._v("this.$set(this.data,”key”,value’)")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"age"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"flutter-中-textfield-光标和-hinttext-底边不对齐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flutter-中-textfield-光标和-hinttext-底边不对齐"}},[t._v("#")]),t._v(" Flutter 中 TextField 光标和 hintText 底边不对齐")]),t._v(" "),e("p",[t._v("原因是：不同文本的 baselines 不一样，中文 hinttext 比光标要大，所以 baselines 更低")]),t._v(" "),e("p",[t._v("解决方法：在 TextField 中添加 style 配置 baselines")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("TextStyle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  textBaseline"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TextBaseline"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alphabetic\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"elementui-无法覆盖样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elementui-无法覆盖样式"}},[t._v("#")]),t._v(" ElementUI 无法覆盖样式")]),t._v(" "),e("p",[t._v("可以在样式前面加"),e("code",[t._v("/deep/")]),t._v("即可覆盖")]),t._v(" "),e("h2",{attrs:{id:"工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[t._v("#")]),t._v(" 工具")]),t._v(" "),e("h3",{attrs:{id:"navicat-导出-excel-格式表结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#navicat-导出-excel-格式表结构"}},[t._v("#")]),t._v(" Navicat 导出 Excel 格式表结构")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("\nCOLUMN_NAME 字段名称"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nCOLUMN_TYPE 数据类型"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("IS_NULLABLE"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NO'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'是'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'否'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'必填'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nCOLUMN_COMMENT 注释\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("\nINFORMATION_SCHEMA"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLUMNS")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- db_name为数据库名称，到时候只需要修改成你要导出表结构的数据库即可")]),t._v("\ntable_schema "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'db_name'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- table_name为表名，到时候换成你要导出的表的名称")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 如果不写的话，默认会查询出所有表中的数据，这样可能就分不清到底哪些字段是哪张表中的了")]),t._v("\ntable_name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table_name'")]),t._v("\n")])])]),e("h2",{attrs:{id:"破解-office"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#破解-office"}},[t._v("#")]),t._v(" 破解 office")]),t._v(" "),e("p",[t._v("将下面的代码保存成 bat 文件，管理员运行，即可破解")]),t._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('@echo off\ntitle Activate Office 365 ProPlus for FREE - MSGuides.com&cls&echo ============================================================================&echo #Project: Activating Microsoft software products for FREE without software&echo ============================================================================&echo.&echo #Supported products: Office 365 ProPlus (x86-x64)&echo.&echo.&(if exist "%ProgramFiles%\\Microsoft Office\\Office16\\ospp.vbs" cd /d "%ProgramFiles%\\Microsoft Office\\Office16")&(if exist "%ProgramFiles(x86)%\\Microsoft Office\\Office16\\ospp.vbs" cd /d "%ProgramFiles(x86)%\\Microsoft Office\\Office16")&(for /f %%x in (\'dir /b ..\\root\\Licenses16\\proplusvl_kms*.xrm-ms\') do cscript ospp.vbs /inslic:"..\\root\\Licenses16\\%%x" >nul)&(for /f %%x in (\'dir /b ..\\root\\Licenses16\\proplusvl_mak*.xrm-ms\') do cscript ospp.vbs /inslic:"..\\root\\Licenses16\\%%x" >nul)&echo.&echo ============================================================================&echo Activating your Office...&cscript //nologo ospp.vbs /unpkey:WFG99 >nul&cscript //nologo ospp.vbs /unpkey:DRTFM >nul&cscript //nologo ospp.vbs /unpkey:BTDRB >nul&cscript //nologo ospp.vbs /inpkey:XQNVK-8JYDB-WJ9W3-YJ8YR-WFG99 >nul&set i=1\n:server\nif %i%==1 set KMS_Sev=kms7.MSGuides.com\nif %i%==2 set KMS_Sev=kms8.MSGuides.com\nif %i%==3 set KMS_Sev=kms9.MSGuides.com\nif %i%==4 goto notsupported\ncscript //nologo ospp.vbs /sethst:%KMS_Sev% >nul&echo ============================================================================&echo.&echo.\ncscript //nologo ospp.vbs /act | find /i "successful" && (echo.&echo ============================================================================&echo.&echo #My official blog: MSGuides.com&echo.&echo #How it works: bit.ly/kms-server&echo.&echo #Please feel free to contact me at msguides.com@gmail.com if you have any questions or concerns.&echo.&echo #Please consider supporting this project: donate.msguides.com&echo #Your support is helping me keep my servers running everyday!&echo.&echo ============================================================================&choice /n /c YN /m "Would you like to visit my blog [Y,N]?" & if errorlevel 2 exit) || (echo The connection to my KMS server failed! Trying to connect to another one... & echo Please wait... & echo. & echo. & set /a i+=1 & goto server)\nexplorer "http://MSGuides.com"&goto halt\n:notsupported\necho.&echo ============================================================================&echo Sorry! Your version is not supported.&echo Please try installing the latest version here: bit.ly/odt2k16\n:halt\npause\n')])])])])}),[],!1,null,null,null);s.default=n.exports}}]);