(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-21e8480d":"b978c517","chunk-07e9a757":"47caf0a6","chunk-5c879559":"4e7b520b","chunk-1e5899b2":"a10fd0ed","chunk-9defc848":"d5e04508","chunk-2d0c2652":"0cb82827","chunk-721cb19e":"728a1a02","chunk-7978d11a":"41f31a39","chunk-d2c2427c":"dcae2c58"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-21e8480d":1,"chunk-07e9a757":1,"chunk-5c879559":1,"chunk-1e5899b2":1,"chunk-9defc848":1,"chunk-721cb19e":1,"chunk-7978d11a":1,"chunk-d2c2427c":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-21e8480d":"d90f03bd","chunk-07e9a757":"8689fec2","chunk-5c879559":"7d3958a8","chunk-1e5899b2":"820c41fd","chunk-9defc848":"f6a2fb60","chunk-2d0c2652":"31d6cfe0","chunk-721cb19e":"878d2637","chunk-7978d11a":"a71da351","chunk-d2c2427c":"2ac3644f"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],f.parentNode.removeChild(f),n(i)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},2:function(t,e){},"233f":function(t,e,n){"use strict";n("351a")},3:function(t,e){},"351a":function(t,e,n){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("navBar"),n("appBar"),n("v-main",[n("vue-confirm-dialog"),n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),n("v-footer",{attrs:{padless:""}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Made with computer science 60")])])],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{"mini-variant":t.mini,app:""},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}},model:{value:t.draw,callback:function(e){t.draw=e},expression:"draw"}},[a("v-card",{staticClass:"mx-auto",attrs:{width:"300"}},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:n("880c")}})],1),a("v-list-item-title",[t._v(" ระบบสมาร์ทฟาร์ม ")]),a("v-btn",{staticStyle:{"box-shadow":"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",height:"30px",width:"30px","margin-right":"8px"},attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[a("v-icon",[t._v("mdi-chevron-left")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{"active-class":"light-green--text",to:"/home",link:""}},[a("v-icon",[t._v("mdi-monitor-dashboard")]),a("v-list-item-title",{staticClass:"ml-3"},[t._v("Dashboard ")])],1),a("v-list-group",{attrs:{value:!0,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-icon",[t._v("mdi-home-assistant")]),a("v-list-item-title",{staticClass:"ml-3"},[t._v("สถานี")])]},proxy:!0}])},t._l(t.stations,(function(e,n){return a("v-list-item",{key:n,attrs:{"active-class":"light-green--text",to:e.link,link:""}},[a("v-list-item-title",{domProps:{textContent:t._s(e.text)}}),a("v-list-item-icon",[a("v-icon",{attrs:{color:"blue-grey",dark:""},domProps:{textContent:t._s(e.icon)}})],1)],1)})),1),t.showAdminBoard?a("v-list-group",{attrs:{value:!0,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-icon",[t._v("mdi-account-edit")]),a("v-list-item-title",{staticClass:"ml-3"},[t._v("จัดการผู้ใช้งานระบบ")])]},proxy:!0}],null,!1,3838255630)},t._l(t.items,(function(e,n){return a("v-list-item",{key:n,attrs:{"active-class":"light-green--text",to:e.link,link:""}},[a("v-list-item-title",{domProps:{textContent:t._s(e.text)}}),a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1)],1)})),1):t._e(),!t.showAdminBoard&&t.currentUser?a("v-list-group",{attrs:{value:!0,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-icon",[t._v("mdi-home-group")]),a("v-list-item-title",{staticClass:"ml-3"},[t._v("จัดการข้อมูลสถานี")])]},proxy:!0}],null,!1,4035119305)},t._l(t.EditSt1,(function(e,n){return a("v-list-item",{key:n,attrs:{"active-class":"light-green--text",to:e.link,link:""}},[a("v-list-item-title",{domProps:{textContent:t._s(e.text)}}),a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1)],1)})),1):t._e()],1)],1)],1)},s=[],c=(n("caad"),n("2532"),{methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/home")},addDrawer:function(){this.draw=this.drawer2}},computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_MODERATOR")}},data:function(){return{draw:null,mini:!0,dialog:!1,items:[{icon:"mdi-account-multiple-outline",text:"ข้อมูลเจ้าหน้าที่",link:"/editUser"}],stations:[{icon:"mdi-home-floor-1",text:"weather stations",link:"/stations1"},{icon:"mdi-home-floor-3",text:"weather stations",link:"/stations2"},{icon:"mdi-home-floor-3",text:"weather stations",link:"/stations3"}],EditSt1:[{icon:"mdi-home-edit",text:"จัดการข้อมูลสถานี",link:"/stations"}],model:1}},props:{drawer2:{}},mounted:function(){this.addDrawer()}}),u=c,l=(n("f39e"),n("2877")),d=n("6544"),f=n.n(d),m=n("8336"),h=n("b0af"),p=n("ce7e"),v=n("132d"),g=n("adda"),b=n("8860"),k=n("56b0"),w=n("da13"),_=n("8270"),y=n("34c3"),x=n("5d23"),C=n("f774"),V=Object(l["a"])(u,i,s,!1,null,"649cc758",null),A=V.exports;f()(V,{VBtn:m["a"],VCard:h["a"],VDivider:p["a"],VIcon:v["a"],VImg:g["a"],VList:b["a"],VListGroup:k["a"],VListItem:w["a"],VListItemAvatar:_["a"],VListItemIcon:y["a"],VListItemTitle:x["b"],VNavigationDrawer:C["a"]});var O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",dark:"",dense:"",color:"purple darken-4","elevate-on-scroll":"",height:"60em"}},[a("v-app-bar-nav-icon",{staticClass:"draw",on:{click:function(e){t.drawer=!t.drawer}}},[a("v-icon",[t._v("mdi-transfer-right")])],1),a("v-toolbar-title",[a("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$router.push("/home")}}},[t._v("Home")]),t._v(" / "+t._s(t.$route.meta.title)+" ")]),a("v-spacer"),t.currentUser||"เข้าสู่ระบบ"==t.$route.meta.title?t._e():a("v-btn",{attrs:{small:"",color:"blue",id:"login",to:"/login",link:""}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-login")]),t._v("เข้าสู่ระบบ ")],1),t.currentUser?a("v-menu",{attrs:{"open-on-hover":"",left:"","offset-y":"",rounded:"b-xl t-lg"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"blue-grey",small:"",fab:""}},"v-btn",o,!1),r),[a("v-avatar",t._g(t._b({attrs:{size:"30"}},"v-avatar",o,!1),r),[t.currentUser&&t.showAdminBoard?a("img",{attrs:{src:n("8428"),alt:"alt"}}):t._e(),t.currentUser&&!t.showAdminBoard?a("img",{attrs:{src:n("bcef"),alt:"alt"}}):t._e()])],1)]}}],null,!1,721072698)},[a("v-list",{staticClass:"text-center pa-2"},[a("v-avatar",{attrs:{size:"44"}},[t.currentUser&&t.showAdminBoard?a("img",{attrs:{src:n("8428"),alt:"alt"}}):t._e(),t.currentUser&&!t.showAdminBoard?a("img",{attrs:{src:n("bcef"),alt:"alt"}}):t._e()]),a("v-list-item-title",{staticClass:"purple--text"},[t._v("@"+t._s(t.currentUser.username))]),a("v-list-item-title",{staticClass:"font-weight-light"},[t._v(t._s(t.currentUser.email))]),a("v-list-item-title",{staticClass:"font-weight-light"},[a("v-divider",{staticClass:"mx-4"}),a("v-btn",{staticClass:"logout mt-2",attrs:{text:"",color:"cyan"},on:{click:function(e){return t.getData(t.currentUser.id)}}},[t._v("แก้ไขข้อมูลส่วนตัว")])],1),a("v-btn",{staticClass:"logout",attrs:{text:"",small:"",color:"red",dark:""},on:{click:t.logOut}},[t._v(" ออกจากระบบ ")])],1)],1):t._e(),a("v-dialog",{attrs:{"max-width":"320px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("v-row",{attrs:{justify:"space-between"}},[a("v-btn",{attrs:{text:"",disabled:"",color:"warning"}},[t._v("แก้ไขข้อมูลส่วนตัว")])],1)],1),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-col",{ref:"form",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{label:"ชื่อผู้ใช้งาน"},model:{value:t.item.username,callback:function(e){t.$set(t.item,"username",e)},expression:"item.username"}})],1),a("v-col",[a("v-text-field",{attrs:{label:"อีเมลล์"},model:{value:t.item.email,callback:function(e){t.$set(t.item,"email",e)},expression:"item.email"}})],1),a("v-col",[a("v-text-field",{attrs:{type:"password",label:"รหัสผ่านใหม่"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" ยกเลิก ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.save(t.currentUser.id)}}},[t._v(" บันทึก ")])],1)],1)],1)],1)},P=[],S=n("f652"),U=n("279c"),B=n.n(U),I=n("f7fe"),T=n.n(I),j={BCRYPT:"bcrypt"},E={data:function(){return{item:"",selectedMethod:j.BCRYPT,password:"",saltLength:8,defaultItem:{id:"",username:"",email:"",password:"",createdAt:""},drawer:!0,mini:!0,dialog:!1,model:1}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/home")},save:function(t){var e=this;console.log(t),S["a"].update(this.item.id,this.item).then((function(t){console.log(t.data),e.message="The User was updated successfully!"})).then((function(){e.password="",e.dialog=!1})).then(this.close()).catch((function(t){console.log(t)}))},getData:function(t){var e=this;S["a"].get(t).then((function(t){e.item=t.data,e.dialog=!0,console.log(t.data)})).catch((function(t){console.log(t)}))},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.item=Object.assign({},t.defaultItem)}))},generatePassword:function(){var t=this;""!==t.password?this.selectedMethod===j.BCRYPT&&this.debouncedBcrypt():t.item.password=""},setBcryptHash:function(){var t=this;t.calculating=!0,B.a.genSalt(t.saltLength,(function(e,n){e||B.a.hash(t.password,n,(function(e,n){e||(t.item.password="".concat(n),t.calculating=!1)}))}))}},computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_MODERATOR")}},watch:{password:function(){this.generatePassword()},saltLength:function(){this.generatePassword()},selectedMethod:function(){this.generatePassword()}},created:function(){this.debouncedBcrypt=T()(this.setBcryptHash,this.debounceTimer)}},L=E,D=(n("233f"),n("40dc")),M=n("5bc1"),$=n("8212"),R=n("99d9"),N=n("62ad"),F=n("a523"),H=n("169a"),J=n("e449"),Y=n("0fd9"),z=n("2fa4"),q=n("8654"),G=n("2a7f"),K=Object(l["a"])(L,O,P,!1,null,"148b9372",null),Q=K.exports;f()(K,{VAppBar:D["a"],VAppBarNavIcon:M["a"],VAvatar:$["a"],VBtn:m["a"],VCard:h["a"],VCardActions:R["a"],VCardText:R["b"],VCardTitle:R["c"],VCol:N["a"],VContainer:F["a"],VDialog:H["a"],VDivider:p["a"],VIcon:v["a"],VList:b["a"],VListItemTitle:x["b"],VMenu:J["a"],VRow:Y["a"],VSpacer:z["a"],VTextField:q["a"],VToolbarTitle:G["a"]});var W={components:{appBar:Q,navBar:A}},X=W,Z=n("7496"),tt=n("553a"),et=n("f6c4"),nt=Object(l["a"])(X,r,o,!1,null,null,null),at=nt.exports;f()(nt,{VApp:Z["a"],VCol:N["a"],VContainer:F["a"],VFooter:tt["a"],VMain:et["a"]});var rt=n("f309"),ot=n("fcf4");a["default"].use(rt["a"]),a["default"].config.productionTip=!1;var it=new rt["a"]({theme:{themes:{light:{primary:ot["a"].cyan.darken2,secondary:ot["a"].red.lighten4,accent:ot["a"].indigo.base}}},icons:{iconfont:"mdi"}}),st=n("d30b"),ct=n.n(st),ut=n("2347"),lt=n.n(ut),dt=n("2f62"),ft=(n("d3b7"),n("d4ec")),mt=n("bee2"),ht=n("bc3a"),pt=n.n(ht),vt="https://smf-rmuti-control.herokuapp.com/api/auth/",gt=function(){function t(){Object(ft["a"])(this,t)}return Object(mt["a"])(t,[{key:"login",value:function(t){return pt.a.post(vt+"signin",{username:t.username,password:t.password}).then((function(t){return t.data.accessToken&&localStorage.setItem("user",JSON.stringify(t.data)),t.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(t){return pt.a.post(vt+"signup",{username:t.username,email:t.email,firstname:t.firstname,lastname:t.lastname,password:t.password})}}]),t}(),bt=new gt,kt=JSON.parse(localStorage.getItem("user")),wt=kt?{status:{loggedIn:!0},user:kt}:{status:{loggedIn:!1},user:null},_t={namespaced:!0,state:wt,actions:{login:function(t,e){var n=t.commit;return bt.login(e).then((function(t){return n("loginSuccess",t),Promise.resolve(t)}),(function(t){return n("loginFailure"),Promise.reject(t)}))},logout:function(t){var e=t.commit;bt.logout(),e("logout")},register:function(t,e){var n=t.commit;return bt.register(e).then((function(t){return n("registerSuccess"),Promise.resolve(t.data)}),(function(t){return n("registerFailure"),Promise.reject(t)}))}},mutations:{loginSuccess:function(t,e){t.status.loggedIn=!0,t.user=e},loginFailure:function(t){t.status.loggedIn=!1,t.user=null},logout:function(t){t.status.loggedIn=!1,t.user=null},registerSuccess:function(t){t.status.loggedIn=!1},registerFailure:function(t){t.status.loggedIn=!1}}};a["default"].use(dt["a"]);var yt=new dt["a"].Store({modules:{auth:_t}}),xt=(n("b0c0"),n("8c4f"));a["default"].use(xt["a"]);var Ct=[{path:"/editUser",name:"จัดการเจ้าหน้าที่",component:function(){return Promise.all([n.e("chunk-21e8480d"),n.e("chunk-5c879559"),n.e("chunk-9defc848")]).then(n.bind(null,"5b36"))},meta:{title:"จัดการผู้ใช้งานระบบ",keepAlive:!0}},{path:"/stations",name:"จัดการข้อมูลสถานี",component:function(){return Promise.all([n.e("chunk-21e8480d"),n.e("chunk-5c879559"),n.e("chunk-1e5899b2")]).then(n.bind(null,"74bb"))},meta:{title:"จัดการข้อมูลสถานี",keepAlive:!1}},{path:"/home",name:"Dashboard",component:function(){return n.e("chunk-721cb19e").then(n.bind(null,"1362"))},meta:{title:"Dashboard"}},{path:"/login",name:"เข้าสู่ระบบ",component:function(){return n.e("chunk-7978d11a").then(n.bind(null,"1954"))},meta:{title:"เข้าสู่ระบบ"}},{path:"/stations1",name:"สถานี1",component:function(){return Promise.all([n.e("chunk-21e8480d"),n.e("chunk-07e9a757")]).then(n.bind(null,"5a8f"))},meta:{title:"สถานี1"}},{path:"/stations2",name:"สถานี2",component:function(){return n.e("chunk-2d0c2652").then(n.bind(null,"49b9"))},meta:{title:"สถานี2"}},{path:"*",name:"404 Page",component:function(){return n.e("chunk-d2c2427c").then(n.bind(null,"9703"))},meta:{title:"NotFound"}}],Vt=new xt["a"]({routes:Ct});Vt.beforeEach((function(t,e,n){console.log(t),document.title="SMF - ".concat(t.name),n()}));var At=Vt,Ot=n("1321"),Pt=n.n(Ot);a["default"].use(Pt.a),a["default"].use(dt["a"]),a["default"].component("downloadCsv",lt.a),a["default"].use(ct.a),a["default"].component("vue-confirm-dialog",ct.a.default),a["default"].config.productionTip=!1,a["default"].component("apexchart",Pt.a),new a["default"]({router:At,vuetify:it,store:yt,render:function(t){return t(at)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},8:function(t,e){},8428:function(t,e,n){t.exports=n.p+"img/avatar (1).e3cf1b37.png"},"87f2":function(t,e,n){},"880c":function(t,e,n){t.exports=n.p+"img/noun_smart farm_2700314.ec77bb98.png"},9:function(t,e){},bcef:function(t,e,n){t.exports=n.p+"img/avatar2.48f1ef15.png"},c427:function(t,e,n){"use strict";var a=n("bc3a"),r=n.n(a);e["a"]=r.a.create({baseURL:"https://smf-rmuti-control.herokuapp.com/api/",headers:{"Content-type":"application/json"}})},f39e:function(t,e,n){"use strict";n("87f2")},f652:function(t,e,n){"use strict";var a=n("d4ec"),r=n("bee2"),o=n("c427"),i=function(){function t(){Object(a["a"])(this,t)}return Object(r["a"])(t,[{key:"csv",value:function(t){return o["a"].post("/csv/upload",t)}},{key:"getAll",value:function(){return o["a"].get("/usersAll")}},{key:"get",value:function(t){return o["a"].get("/usersAll/".concat(t))}},{key:"create",value:function(t){return o["a"].post("/usersAll",t)}},{key:"update",value:function(t,e){return o["a"].put("/usersAll/".concat(t),e)}},{key:"delete",value:function(t){return o["a"].delete("/usersAll/".concat(t))}},{key:"deleteAll",value:function(){return o["a"].delete("/usersAll")}}]),t}();e["a"]=new i}});
//# sourceMappingURL=app.45ede2b9.js.map