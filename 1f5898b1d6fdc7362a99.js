(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{301:function(t,n,e){var content=e(675);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(9).default)("816a5fee",content,!0,{sourceMap:!1})},674:function(t,n,e){"use strict";var r=e(301);e.n(r).a},675:function(t,n,e){(t.exports=e(8)(!1)).push([t.i,".pinyin .nya-input{width:100%}",""])},772:function(t,n,e){"use strict";e.r(n);var r={name:"Pinyin",head:function(){return this.$store.state.currentTool.head},data:function(){return{word:"",result:[],resultWord:"",requestIn:!1}},computed:{format:function(){var t=this;if(!this.result.length)return"";var n=[],e=this.result.map(function(n,e){return{word:t.resultWord[e],pinyin:n}});return n[0]=e.map(function(t){return t.pinyin[0]}).join(" "),n[1]=e.map(function(t){var text="".concat(t.word,"：");return t.pinyin.forEach(function(t){text+="（".concat(t,"）")}),text}).join("\n"),n}},methods:{conversion:function(){var t=this;if(this.requestIn)return!1;/[\u4e00-\u9fa5]/.test(this.word)?(this.requestIn=!0,this.result=[],this.$axios.post("/pinyin",{word:this.word}).then(function(n){t.requestIn=!1,t.result=n.data.data,t.resultWord=t.word}).catch(function(n){t.requestIn=!1,t.$modal.show("dialog",{title:"查询失败",text:"ERROR: ".concat(n)})})):this.$modal.show("dialog",{title:"查询失败",text:"ERROR: 请输入至少一个汉字"})}}},o=(e(674),e(2)),component=Object(o.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pinyin"},[e("nya-container",{attrs:{title:"汉字转拼音"}},[e("div",{staticClass:"inputbtn"},[e("nya-input",{attrs:{label:"请输入要转换的内容",placeholder:"我们所度过的每个平凡的日常，也许就是连续发生的奇迹。",autocomplete:"off",autofocus:""},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.conversion(n)}},model:{value:t.word,callback:function(n){t.word="string"==typeof n?n.trim():n},expression:"word"}}),t._v(" "),e("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.conversion}},[t._v("\n                "+t._s(t.requestIn?"转换中":"开始转换")+"\n            ")])],1)]),t._v(" "),t.format?e("nya-container",{attrs:{title:"转换成功"}},[e("pre",[t._v(t._s(t.format[0]))]),t._v(" "),e("pre",[t._v(t._s(t.format[1]))])]):t._e()],1)},[],!1,null,null,null);n.default=component.exports}}]);