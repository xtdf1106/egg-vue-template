(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard-index","dashboard-editor-index"],{"5a12":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-container"},[e(t.currentRole,{tag:"component"})],1)},s=[],r=(e("6762"),e("2fdb"),e("cebc")),c=e("2f62"),i=e("6624"),o=e("7ca4"),d={name:"Dashboard",components:{adminDashboard:i["default"],editorDashboard:o["default"]},data:function(){return{currentRole:"adminDashboard"}},computed:Object(r["a"])({},Object(c["b"])(["roles"])),created:function(){this.roles.includes("admin")||(this.currentRole="editorDashboard")}},l=d,u=e("2877"),b=Object(u["a"])(l,n,s,!1,null,null,null);a["default"]=b.exports},"75c3":function(t,a,e){},"7ca4":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-editor-container"},[e("div",{staticClass:" clearfix"},[e("pan-thumb",{staticStyle:{float:"left"},attrs:{image:t.avatar}},[t._v("\n      Your roles:\n      "),t._l(t.roles,function(a){return e("span",{key:a,staticClass:"pan-info-roles"},[t._v(t._s(a))])})],2),t._v(" "),e("github-corner",{staticStyle:{position:"absolute",top:"0px",border:"0",right:"0"}}),t._v(" "),e("div",{staticClass:"info-container"},[e("span",{staticClass:"display_name"},[t._v(t._s(t.name))]),t._v(" "),e("span",{staticStyle:{"font-size":"20px","padding-top":"20px",display:"inline-block"}},[t._v("Editor's Dashboard")])])],1),t._v(" "),e("div",[e("img",{staticClass:"emptyGif",attrs:{src:t.emptyGif}})])])},s=[],r=e("cebc"),c=e("2f62"),i=e("eac1"),o=e("ba87"),d={name:"DashboardEditor",components:{PanThumb:i["a"],GithubCorner:o["a"]},data:function(){return{emptyGif:"https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3"}},computed:Object(r["a"])({},Object(c["b"])(["name","avatar","roles"]))},l=d,u=(e("c4ce"),e("2877")),b=Object(u["a"])(l,n,s,!1,null,"2cc98a48",null);a["default"]=b.exports},c4ce:function(t,a,e){"use strict";var n=e("75c3"),s=e.n(n);s.a}}]);