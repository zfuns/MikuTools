(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{275:function(o,t,c){var content=c(574);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,c(9).default)("0276aec2",content,!0,{sourceMap:!1})},573:function(o,t,c){"use strict";var r=c(275);c.n(r).a},574:function(o,t,c){(o.exports=c(8)(!1)).push([o.i,".color .nya-input{width:100%;margin-bottom:.9375rem}",""])},752:function(o,t,c){"use strict";c.r(t);var r={name:"Color",head:function(){return this.$store.state.currentTool.head},components:{"chrome-picker":c(274).Chrome},data:function(){return{colors:{hsl:{h:182.65193370165744,s:1,l:.35490196078431374,a:1},hex:"#00ADB5",hex8:"#00ADB5FF",rgba:{r:0,g:173,b:181,a:1},hsv:{h:182.65193370165744,s:1,v:.7098039215686275,a:1},oldHue:182.65193370165744,source:"hex",a:1},results:"",requestIn:!1}},computed:{handleColor:function(){return{RGB:"".concat(this.colors.rgba.r,",").concat(this.colors.rgba.g,",").concat(this.colors.rgba.b),RGBA:"".concat(this.colors.rgba.r,",").concat(this.colors.rgba.g,",").concat(this.colors.rgba.b,",").concat(this.colors.rgba.a),HSLA:"".concat(this.colors.hsl.h.toFixed(0),",").concat((100*this.colors.hsl.s).toFixed(0),"%,").concat((100*this.colors.hsl.l).toFixed(0),"%,").concat(this.colors.hsl.a),HSVA:"".concat(this.colors.hsv.h.toFixed(0),",").concat((100*this.colors.hsv.s).toFixed(0),"%,").concat((100*this.colors.hsv.v).toFixed(0),"%,").concat(this.colors.hsv.a)}}},methods:{updateColor:function(o){this.colors=o}}},n=(c(573),c(2)),component=Object(n.a)(r,function(){var o=this,t=o.$createElement,c=o._self._c||t;return c("div",{staticClass:"color"},[c("nya-container",{attrs:{title:"颜色转换"}},[c("no-ssr",[c("chrome-picker",{attrs:{value:o.colors},on:{input:o.updateColor}})],1)],1),o._v(" "),o.colors.hex?c("nya-container",{attrs:{title:"结果"}},[c("div",{staticClass:"text",style:{color:o.colors.hex8}},[o._v("\n            文字效果\n        ")]),o._v(" "),c("p",[o._v("HEX："),c("b",[o._v(o._s(""+o.colors.hex))])]),o._v(" "),c("p",[o._v("HEX8："),c("b",[o._v(o._s(""+o.colors.hex8))])]),o._v(" "),c("p",[o._v("RGB："),c("b",[o._v(o._s(o.handleColor.RGB))])]),o._v(" "),c("p",[o._v("RGBA："),c("b",[o._v(o._s(o.handleColor.RGBA))])]),o._v(" "),c("p",[o._v("HSLA："),c("b",[o._v(o._s(o.handleColor.HSLA))])]),o._v(" "),c("p",[o._v("HSVA："),c("b",[o._v(o._s(o.handleColor.HSVA))])])]):o._e()],1)},[],!1,null,null,null);t.default=component.exports}}]);