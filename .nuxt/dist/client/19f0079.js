(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{334:function(t,e,n){var content=n(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("723d5b54",content,!0,{sourceMap:!1})},347:function(t,e,n){"use strict";n(334)},348:function(t,e,n){var o=n(32)(!1);o.push([t.i,".invaild[data-v-b4bc428c]{border-color:red}.pagination li[data-v-b4bc428c]{cursor:pointer}.disabled[data-v-b4bc428c]{cursor:auto!important}.page-item.active .page-link[data-v-b4bc428c]{background-color:#66c;border-color:#66c}",""]),t.exports=o},361:function(t,e,n){"use strict";n.r(e);n(39),n(31),n(24),n(30),n(13),n(40),n(26),n(41);var o=n(16),l=(n(221),n(21));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function r(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={layout:"app",name:"surename",data:function(){return{current:1,page:window.localStorage.getItem("page")||Number(1),load:!1,load2:!1,put:!1,invit:!1,invaild:!1,formData:{id:null,name:"",lang:"Ar"}}},head:function(){return{title:"الألقاب",meta:[{hid:"الألقاب",name:"الألقاب",content:"الألقاب"}]}},components:{},computed:r({},Object(l.c)({titles:"titles",categoriesInvit:"categoriesInvit",total_page:"total_page"})),methods:r(r({getPage:function(i){this.page=i,localStorage.setItem("page",i),this.fetchTitles(i)},Next:function(){localStorage.getItem("page")<this.total_page&&(this.page++,localStorage.setItem("page",this.page),this.fetchTitles(this.page))},Previous:function(){localStorage.getItem("page")>1&&(this.page--,localStorage.setItem("page",this.page),this.fetchTitles(this.page))}},Object(l.b)(["fetchTitles","fetchCategoriesInvit"])),{},{add:function(){var t=this;t.load=!0,document.getElementById("invitations").checkValidity()?t.$axios.post("titles",t.formData,{}).then((function(e){201==e.status||200==e.status?(t.invit=!1,t.load=!1,t.fetchTitles()):(t.invit=!0,t.load=!1)})).catch((function(e){e.response&&(t.load=!1,console.log(e.response))})):(t.invaild=!0,t.load=!1)},showPut:function(t){var e=this;e.put=!0,e.formData.id=t.id,e.formData.name=t.name,e.formData.lang=t.lang},edit:function(){var t=this;t.load=!0,document.getElementById("invitations").checkValidity()?t.$axios.put("titles/".concat(t.formData.id),t.formData,{}).then((function(e){201==e.status||200==e.status?(t.invit=!1,t.load=!1,t.fetchTitles()):(t.invit=!0,t.load=!1)})).catch((function(e){e.response&&(t.load=!1,console.log(e.response))})):t.invaild=!0},delet:function(t){var e=this;e.load2=t,e.$axios.delete("titles/".concat(t)).then((function(){e.fetchTitles(),e.load2=!1})).catch((function(t){t.response&&(e.load2=!1,console.log(t.response))}))}}),created:function(){this.fetchTitles(this.page),this.fetchCategoriesInvit(this.page)}},v=(n(347),n(22)),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("form",{staticClass:"profile"},[e("div",{staticClass:"col-12 top"},[e("div",{staticClass:"add"},[e("span",{staticClass:"add-but",on:{click:function(e){t.invit=!0,t.put=!1}}},[e("i",{staticClass:"fa-sharp fa-solid fa-circle-plus"}),t._v("\n            "+t._s(t.$t("Add"))+"\n            ")]),t._v(" "),t.invit?e("div",{staticClass:"overlay",on:{click:function(e){t.invit=!1}}}):t._e(),t._v(" "),t.invit?e("form",{staticClass:"invitations surename",attrs:{id:"invitations"}},[e("div",{staticClass:"head"},[0!=t.put?e("h4",[t._v(t._s(t.$t("Edit")))]):e("h4",[t._v(t._s(t.$t("Add")))]),t._v(" "),e("i",{staticClass:"fa-solid fa-circle-xmark fa-lg",on:{click:function(e){t.invit=!1}}})]),t._v(" "),e("div",{staticClass:"body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[t.invaild?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("\n                      "+t._s(t.$t("alert_name"))+"\n                    ")]):t._e()]),t._v(" "),e("div",{staticClass:"col-md-12 mt-3"},[e("label",{staticClass:"mb-1",attrs:{for:"full_name"}},[e("i",{staticClass:"fa-regular fa-square-check"}),t._v("\n                          "+t._s(t.$t("Title"))+"\n                          ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"form-control",class:t.invaild?"invaild":"",attrs:{type:"text",name:"full_name",required:""},domProps:{value:t.formData.name},on:{input:[function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)},function(e){t.invaild=!1}]}})]),t._v(" "),e("div",{staticClass:"col-md-12 mt-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("label",{staticClass:"mb-1",attrs:{for:"lang"}},[t._v(t._s(t.$t("Invitation_Language")))]),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.lang,expression:"formData.lang"}],staticClass:"btn-check",attrs:{type:"radio",value:"Ar",name:"lang",id:"option5",autocomplete:"off",checked:""},domProps:{checked:t._q(t.formData.lang,"Ar")},on:{change:function(e){return t.$set(t.formData,"lang","Ar")}}}),t._v(" "),e("label",{staticClass:"btn btn-radio",attrs:{for:"option5"}},[t._v(t._s(t.$t("Arabic")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.lang,expression:"formData.lang"}],staticClass:"btn-check",attrs:{type:"radio",value:"En",name:"lang",id:"option6",autocomplete:"off"},domProps:{checked:t._q(t.formData.lang,"En")},on:{change:function(e){return t.$set(t.formData,"lang","En")}}}),t._v(" "),e("label",{staticClass:"btn btn-radio",attrs:{for:"option6"}},[t._v(t._s(t.$t("English")))])])])])]),t._v(" "),e("div",{staticClass:"col-md-12 mt-3"},[e("hr"),t._v(" "),0!=t.load?e("button",{staticClass:"btn btn-send"},[t._m(0)]):e("div",[0!=t.put?e("button",{staticClass:"btn btn-send",on:{click:function(e){return e.preventDefault(),t.edit.apply(null,arguments)}}},[t._v(t._s(t.$t("Save")))]):e("button",{staticClass:"btn btn-send",on:{click:function(e){return e.preventDefault(),t.add.apply(null,arguments)}}},[t._v(t._s(t.$t("Save")))])])])])])]):t._e()])]),t._v(" "),e("div",{staticClass:"col-12 list mt-3"},[e("table",[e("tr",[e("th",[t._v(t._s(t.$t("m")))]),t._v(" "),e("th",[t._v(t._s(t.$t("Name")))]),t._v(" "),e("th",[t._v(t._s(t.$t("lang")))]),t._v(" "),t._m(1),t._v(" "),e("th",[t._v(t._s(t.$t("Actions")))])]),t._v(" "),t._l(t.titles,(function(n,o){return e("tr",{key:n.id},[e("td",[t._v(t._s(o+1))]),t._v(" "),e("td",[t._v(t._s(n.name))]),t._v(" "),e("td",[t._v(t._s("Ar"==n.lang?"عربي":"انكليزي"))]),t._v(" "),e("td",[e("input",{attrs:{type:"checkbox",name:n.id}})]),t._v(" "),e("td",{staticClass:"action"},[e("i",{staticClass:"fa-solid fa-pen-to-square fa-lg",attrs:{title:"تحرير"},on:{click:function(e){t.invit=!0,t.showPut(n)}}}),t._v(" "),t.load2==n.id?e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])]):e("i",{staticClass:"fa-solid fa-xmark fa-lg",attrs:{title:"حذف"},on:{click:function(e){return t.delet(n.id)}}})])])}))],2)])]),t._v(" "),e("ul",{staticClass:"pagination",staticStyle:{"justify-content":"center","margin-top":"30px"}},[e("li",{staticClass:"page-item",class:{disabled:1==t.page},on:{click:t.Previous}},[e("span",{staticClass:"page-link"},[t._v(t._s(t.$t("Previous")))])]),t._v(" "),t._l(t.total_page,(function(n){return e("li",{key:n,staticClass:"page-item",class:[n==t.page?"active":""]},[e("span",{staticClass:"page-link",on:{click:function(e){return t.getPage(n)}}},[t._v(" "+t._s(n))])])})),t._v(" "),e("li",{staticClass:"page-item",class:{disabled:t.page==t.total_page},on:{click:t.Next}},[e("span",{staticClass:"page-link"},[t._v(t._s(t.$t("Next")))])])],2)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"spinner-border",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[this._v("Loading...")])])},function(){var t=this._self._c;return t("th",[t("input",{attrs:{type:"checkbox",disabled:""}})])}],!1,null,"b4bc428c",null);e.default=component.exports}}]);