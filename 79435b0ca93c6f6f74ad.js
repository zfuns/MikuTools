(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{317:function(t,e,n){var content=n(713);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("039e2181",content,!0,{sourceMap:!1})},712:function(t,e,n){"use strict";var o=n(317);n.n(o).a},713:function(t,e,n){(t.exports=n(8)(!1)).push([t.i,".tpwthwidt.hide{display:none}",""])},731:function(t,e,n){"use strict";n.r(e);var o=n(70),c={name:"Weather",head:function(){return this.$store.state.currentTool.head},data:function(){return{location:"",data:{},requestIn:!1}},mounted:function(){this.initWidget()},methods:{initWidget:function(){var t=document.querySelector(".tpwthwidt");if(t)return t.classList.remove("hide"),!1;var script=document.createElement("script");script.src="//widget.seniverse.com/widget/chameleon.js",script.charset="utf-8",script.async=1,document.body.appendChild(script),window.ThinkPageWeatherWidgetObject="tpwidget",window.tpwidget=function(){(window.tpwidget.q=window.tpwidget.q||[]).push(arguments)},window.tpwidget.l=+new Date,window.tpwidget("init",{flavor:"bubble",location:"WX4FBXXFKE4F",geolocation:"enabled",position:"top-left",margin:"10px 10px",language:"zh-chs",unit:"c",theme:"chameleon",uid:"U5C7722107",hash:"12a1cca4c3584a7aea9bc6c8e4befebb"}),window.tpwidget("show")},formatDate:function(t){return o(t).format("YYYY年MM月DD日")},getWeather:function(){var t=this;if(this.requestIn)return!1;/[\u4e00-\u9fa5]|\w+/.test(this.location)?(this.requestIn=!0,this.data={},this.$axios.post("/weather",{location:this.location}).then(function(e){t.requestIn=!1,t.data=e.data.data}).catch(function(e){t.requestIn=!1,t.$modal.show("dialog",{title:"查询失败",text:"ERROR: ".concat(e)})})):this.$modal.show("dialog",{title:"查询失败",text:"ERROR: 请输入正确的城市名称，支持中文和拼音"})}},beforeRouteLeave:function(t,e,n){document.querySelector(".tpwthwidt").classList.add("hide"),n()}},r=(n(712),n(2)),component=Object(r.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weather"},[n("nya-container",{attrs:{title:"实时天气查询"}},[n("div",{staticClass:"inputbtn"},[n("nya-input",{attrs:{label:"请输入城市名称（中文/拼音）",placeholder:"昆明",autocomplete:"off",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getWeather(e)}},model:{value:t.location,callback:function(e){t.location="string"==typeof e?e.trim():e},expression:"location"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.getWeather}},[t._v("\n                "+t._s(t.requestIn?"查询中":"开始查询")+"\n            ")])],1)]),t._v(" "),t.data.now?n("nya-container",{attrs:{title:"查询成功"}},[n("div",{staticClass:"result"},[n("img",{attrs:{src:"https://s2.sencdn.com/web/icons/3d_50/"+t.data.now.code+".png",alt:"天气"}}),t._v(" "),n("p",[n("b",[t._v("天气：")]),t._v(t._s(t.data.now.text))]),t._v(" "),n("p",[n("b",[t._v("地区：")]),t._v(t._s(t.data.location.path))]),t._v(" "),n("p",[n("b",[t._v("时区：")]),t._v(t._s(t.data.location.timezone))]),t._v(" "),n("p",[n("b",[t._v("最后更新于：")]),t._v(t._s(t.formatDate(t.data.last_update)))])])]):t._e(),t._v(" "),n("nya-container",{attrs:{title:"Explain"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("数据仅供参考，出门记得带伞")]),t._v(" "),n("li",[t._v("数据来自：心知天气")])])])],1)},[],!1,null,null,null);e.default=component.exports}}]);