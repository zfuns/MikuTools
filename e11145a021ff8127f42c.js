(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{305:function(t,e,o){var content=o(692);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("575cafae",content,!0,{sourceMap:!1})},691:function(t,e,o){"use strict";var r=o(305);o.n(r).a},692:function(t,e,o){(t.exports=o(8)(!1)).push([t.i,".rich_text_editor .ql-editor{min-height:300px;min-height:18.75rem;max-height:600px;max-height:37.5rem}.rich_text_editor .ql-toolbar{border-color:var(--t1)}.rich_text_editor .ql-toolbar .ql-formats .ql-fill{fill:var(--t1)}.rich_text_editor .ql-toolbar .ql-formats .ql-stroke{stroke:var(--t1)}.rich_text_editor .ql-toolbar .ql-formats .ql-picker{color:var(--t1)}.rich_text_editor .ql-toolbar .ql-formats .ql-active{color:#00adb5;color:var(--theme)}.rich_text_editor .ql-toolbar .ql-formats .ql-active .ql-fill{fill:#00adb5;fill:var(--theme)}.rich_text_editor .ql-toolbar .ql-formats .ql-active .ql-stroke{stroke:#00adb5;stroke:var(--theme)}.rich_text_editor .ql-container.ql-snow{border-color:var(--t1)}.rich_text_editor .nya-btn{margin:.9375rem 0}.rich_text_editor .quill-code{width:100%;border:none;height:auto}.rich_text_editor .quill-code>code{box-sizing:border-box;display:block;width:100%;margin:0;padding:1rem;border:.0625rem solid var(--t1);border-radius:0;min-height:10rem;overflow-y:auto;resize:vertical}",""])},760:function(t,e,o){"use strict";o.r(e);o(681),o(683),o(685);var r=o(263),l=o.n(r),n=(o(687),{name:"RichTextEditor",head:function(){return this.$store.state.currentTool.head},components:{quillEditor:o(689).quillEditor},data:function(){return{showCode:!1,content:'<h2 class="ql-align-center"><span class="ql-font-serif">Text content loading..</span></h2>',editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{color:[]},{background:[]}],[{align:[]}],["clean"],["link","image","video"]],syntax:{highlight:function(text){return l.a.highlightAuto(text).value}}}}}},computed:{editor:function(){return this.$refs.myTextEditor.quill},contentCode:function(){return l.a.highlightAuto(this.content).value}},mounted:function(){this.content="<h2>MikuTools - 一个轻量的工具集合</h2>"},methods:{}}),c=(o(691),o(2)),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"rich_text_editor"},[o("no-ssr",[o("quill-editor",{ref:"myTextEditor",attrs:{options:t.editorOption},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),o("button",{staticClass:"nya-btn",on:{click:function(e){t.showCode=!t.showCode}}},[t._v("\n            "+t._s(t.showCode?"隐藏":"显示")+" HTML 代码\n        ")]),t._v(" "),t.showCode?o("div",{staticClass:"quill-code"},[o("code",{staticClass:"hljs xml",domProps:{innerHTML:t._s(t.contentCode)}})]):t._e()],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);