(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{738:function(t,n,e){"use strict";e.r(n);e(134),e(39);var o={name:"NiconicoVideoDownloader",head:function(){return this.$store.state.currentTool.head},data:function(){return{niconicoLink:"",videoData:{},requestIn:!1}},computed:{handleSize:function(){return function(t){return t?t.replace(/ \(.+\)/,""):""}}},methods:{download:function(){var t=this;if(this.requestIn)return!1;var n=/(https?:\/\/)(www\.)?(sp\.)?(nicovideo\.jp)\/watch\/(so|sm)[0-9]+/;n.test(this.niconicoLink)?(this.requestIn=!0,this.videoData={},this.$axios.post("/niconico_video_downloader",{url:this.niconicoLink.match(n)[0]}).then(function(n){t.requestIn=!1,t.videoData=n.data.data}).catch(function(n){t.requestIn=!1,t.$modal.show("dialog",{title:"获取失败",text:"ERROR: ".concat(n)})})):this.$modal.show("dialog",{title:"获取失败",text:"ERROR: 请输入正确的链接"})}}},c=e(2),component=Object(c.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"niconico_video_downloader"},[e("nya-container",{attrs:{title:"niconico 视频下载"}},[e("div",{staticClass:"inputbtn"},[e("nya-input",{attrs:{label:"输入链接开始下载",placeholder:"https://www.nicovideo.jp/watch/sm34547383",autocomplete:"off",autofocus:""},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.download(n)}},model:{value:t.niconicoLink,callback:function(n){t.niconicoLink="string"==typeof n?n.trim():n},expression:"niconicoLink"}}),t._v(" "),e("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.download}},[t._v("\n                "+t._s(t.requestIn?"获取中":"开始获取")+"\n            ")])],1)]),t._v(" "),t.videoData.title?e("nya-container",{attrs:{title:"获取视频信息成功"}},[e("h2",[t._v("标题："+t._s(t.videoData.title))]),t._v(" "),e("h2",[t._v("下载链接")]),t._v(" "),t._l(t.videoData.formats,function(n,o){return e("div",{key:o},[e("p",[e("span",[t._v(t._s(n.format_id)+"：")]),t._v(" "),e("a",{attrs:{href:n.url,target:"_blank",title:"右键另存为下载或长按保存",rel:"noopener noreferrer"}},[t._v("\n                    "+t._s(n.url)+"\n                ")])])])})],2):t._e(),t._v(" "),e("nya-container",{attrs:{title:"Explain"}},[e("ul",{staticClass:"nya-list"},[e("li",[t._v("暂不支持番剧下载")]),t._v(" "),e("li",[t._v("注意："),e("b",[t._v("由于niconico限制，周一至周五 01.00 到 17.00、周六和节假日 01.00 至 11.00 可下载高画质视频，其余时间段只能下载最高360p的画质")])])])])],1)},[],!1,null,null,null);n.default=component.exports}}]);