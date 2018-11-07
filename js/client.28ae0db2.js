(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3eXy":function(e,t,n){"use strict";var r=n("cDf5"),o=n.n(r),a="/login",i="/token",s="/user",c="/analysis",u="/workspace/projects",l="/workspace/activities",m="/workspace/radar",p="/workspace/teams",f="/form/step",d="/form/basic",h="/table/Paging",v=n("vDqi"),g=n.n(v).a.create({baseURL:"https://vue-design-pro.now.sh/api",timeout:5e3});g.interceptors.request.use(function(e){return e},function(e){return e&&console.error("[Request error]: ".concat(e)),Promise.reject(e)}),g.interceptors.response.use(function(e){return e},function(e){return e&&console.error("[Response error]: ".concat(e)),Promise.reject(e)});var y=g,S=n("s4NR"),T=n.n(S);function b(e){return y.post(a,e)}function E(e){return y.post(f,e)}function A(e){return y.post(d,e)}function w(e){if(!e)throw new Error("Token is required.");return"object"!==o()(e)&&(e={token:e}),y.get("".concat(i,"?").concat(T.a.stringify(e)))}function P(){return y.get(s)}function k(){return y.get(c)}function R(){return y.get(u)}function O(){return y.get(l)}function D(){return y.get(m)}function F(){return y.get(p)}function _(){return y.get(h)}n.d(t,"i",function(){return b}),n.d(t,"j",function(){return E}),n.d(t,"h",function(){return A}),n.d(t,"k",function(){return w}),n.d(t,"g",function(){return P}),n.d(t,"a",function(){return k}),n.d(t,"d",function(){return R}),n.d(t,"c",function(){return O}),n.d(t,"e",function(){return D}),n.d(t,"f",function(){return F}),n.d(t,"b",function(){return _})},BNWl:function(e,t,n){"use strict";var r=n("IfOX");n.n(r).a},EXSd:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{layout:"admin"}},methods:{handleRouteUpdate:function(e,t){this.layout=e.meta.layout||"admin"}},watch:{$route:"handleRouteUpdate"},computed:{currentLayout:function(){var e=this.layout.replace(/^[a-z]/,function(e){return e.toUpperCase()});return function(){return n("PtdW")("./".concat(e,".vue"))}}}},o=(n("BNWl"),n("KHd+")),a=Object(o.a)(r,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"root"}},[t("transition",{attrs:{name:"layout",mode:"out-in"}},[t(this.currentLayout,{tag:"component"},[t("route-view")],1)],1)],1)},[],!1,null,"35c1c6bc",null);a.options.__file="App.vue";t.default=a.exports},IfOX:function(e,t,n){},JGWq:function(e,t,n){},PtdW:function(e,t,n){var r={"./Admin.vue":["o2aR",0,19],"./Login.vue":["Qk7m",20]};function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="PtdW",e.exports=o},bOXH:function(e,t,n){var r={"./Access/Admin":["ZdDK",3],"./Access/Admin.vue":["ZdDK",3],"./Access/User":["hd1C",4],"./Access/User.vue":["hd1C",4],"./App":["EXSd"],"./App.vue":["EXSd"],"./Dashboard/Analysis":["xUMo",0,5],"./Dashboard/Analysis.vue":["xUMo",0,5],"./Dashboard/Workspace":["as7q",0,6],"./Dashboard/Workspace.vue":["as7q",0,6],"./Error":["pLMR",1],"./Error/":["pLMR",1],"./Error/index":["pLMR",1],"./Error/index.vue":["pLMR",1],"./Form/Advanced":["Gkb5",7],"./Form/Advanced.vue":["Gkb5",7],"./Form/Basic":["ML1F",8],"./Form/Basic.vue":["ML1F",8],"./Form/Step/Confirm":["2v5L",9],"./Form/Step/Confirm.vue":["2v5L",9],"./Form/Step/Index":["+rlX",10],"./Form/Step/Index.vue":["+rlX",10],"./Form/Step/Info":["5fVD",11],"./Form/Step/Info.vue":["5fVD",11],"./Form/Step/Success":["t2V9",12],"./Form/Step/Success.vue":["t2V9",12],"./Login":["3R26",13],"./Login.vue":["3R26",13],"./Table/Paging":["iZHi",0,2],"./Table/Paging/":["iZHi",0,2],"./Table/Paging/DefaultHeaders":["G1lL",14],"./Table/Paging/DefaultHeaders.js":["G1lL",14],"./Table/Paging/Footer":["mIZ7",15],"./Table/Paging/Footer.vue":["mIZ7",15],"./Table/Paging/MixinSort":["6M2R",16],"./Table/Paging/MixinSort.js":["6M2R",16],"./Table/Paging/index":["iZHi",0,2],"./Table/Paging/index.vue":["iZHi",0,2]};function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="bOXH",e.exports=o},tjUo:function(e,t,n){"use strict";n.r(t);var r=n("Kw5r"),o=n("jE9Z"),a=n("L2JU"),i=(n("sFTC"),n("MVZn")),s=n.n(i);function c(e){var t={};return e.forEach(function(e){var r=function(e){for(var t=e.split("/"),n=[t[0].replace(/^[A-Z]/,function(e){return e.toLowerCase()})],r=1;r<t.length;r++){var o=t[r].replace(/^[a-z]/,function(e){return e.toUpperCase()});n.push(o)}return n.join("")}(e);t[r]||(t[r]=function(){return n("bOXH")("./".concat(e))})}),t}var u,l=c(["Login","Dashboard/Analysis","Dashboard/Workspace","Form/Basic","Form/Step/Index","Form/Step/Info","Form/Step/Confirm","Form/Step/Success","Table/Paging","Error"]),m=c(["Access","Access/Admin","Access/User"]),p=function(){return n.e(18).then(n.bind(null,"+hCm"))},f=[{path:"/",component:l.login,meta:{hidden:!0,layout:"login"}},{path:"/dashboard",component:p,redirect:"/dashboard/analysis",meta:{title:"Dashboard",icon:"el-icon-service"},children:[{path:"analysis",component:l.dashboardAnalysis,meta:{title:"Analysis"}},{path:"workspace",component:l.dashboardWorkspace,meta:{title:"Workspace"}}]},{path:"/form",component:p,redirect:"/form/basic",meta:{title:"Form",icon:"el-icon-document"},children:[{path:"basic",component:l.formBasic,meta:{title:"Basic form"}},{path:"step",component:l.formStepIndex,redirect:"step/info",meta:{title:"Step form",hideChildren:!0,setIndex:0},children:[{path:"info",component:l.formStepInfo,meta:{title:"info"}},{path:"confirm",component:l.formStepConfirm,meta:{title:"confirm"},beforeEnter:function(e,t,n){"/form/step/info"!==t.path?n("/form/step/info"):n()}},{path:"success",component:l.formStepSuccess,meta:{title:"success"},beforeEnter:function(e,t,n){"/form/step/confirm"!==t.path?n("/form/step/info"):n()}}]}]},{path:"/table",component:p,redirect:"/table/paging",meta:{title:"Table",icon:"el-icon-tickets"},children:[{path:"paging",component:l.tablePaging,meta:{title:"Paging table"}}]},{path:"/error",component:p,meta:{hidden:!0},children:[{path:"404",component:l.error,props:{status:404,info:"抱歉，你访问的页面不存在",img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg"}},{path:"403",component:l.error,props:{status:403,info:"抱歉，你无权访问该页面",img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg"}}]}],d=[{path:"/access",component:p,meta:{title:"Access",icon:"el-icon-view"},children:[{path:"admin",component:m.accessAdmin,meta:{title:"admin",role:["admin"]}},{path:"user",component:m.accessUser,meta:{title:"user",role:["user"]}}]},{path:"*",redirect:"/error/404",meta:{hidden:!0}}],h={userInfo:{},role:[],token:"",routes:f,extraRoutes:[]},v=n("lSNA"),g=n.n(v),y="SET_USER_INFO",S="SET_ROLE",T="SET_TOKEN",b="SET_EXTRA_ROUTES",E="SET_ROUTES",A=(u={},g()(u,y,function(e,t){e.userInfo=t}),g()(u,S,function(e,t){e.role=t}),g()(u,T,function(e,t){e.token=t}),g()(u,b,function(e,t){e.extraRoutes=t}),g()(u,E,function(e,t){e.routes=t}),u),w=n("RIqP"),P=n.n(w),k=n("3eXy"),R="__vue-design-pro__";function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;return sessionStorage.getItem(e)}var D=n("XJYT"),F=n.n(D);var _={state:h,getters:{userInfo:function(e){return e.userInfo},role:function(e){return e.role},routes:function(e){return e.routes},extraRoutes:function(e){return e.extraRoutes}},mutations:A,actions:{pushLogin:function(e,t){var n=e.commit,r=e.dispatch,o=t.userInfo,a=t.replace;return Object(k.i)(o).then(function(e){var t=e.data;if(0!==t.errno)throw new Error("用户名或密码错误");if(!t.token)throw new Error("[Token]: Wrong token response");if(!Array.isArray(t.role))throw new Error("[Role]: Wrong role response");return t}).then(function(e){return D.Notification.success({title:"Success",message:"登陆成功，正在跳转..."}),n(T,e.token),function(e){var t=e.key,n=void 0===t?R:t,r=e.token;sessionStorage.setItem(n,r)}({token:e.token}),e.role}).then(function(e){return r("createExtraRoutes",{role:e})}).then(function(){return r("createGlobalRoutes",{router:me})}).then(function(){return a("/dashboard/analysis")}).catch(function(e){D.Notification.error({title:"Error",message:"".concat(e)}),console.error(e)})},validateToken:function(e){var t=e.dispatch;return Object(k.k)(O()).then(function(e){var t=e.data;if(0!==t.errno)throw new Error("errno: ".concat(t));return t.role}).then(function(e){return t("createExtraRoutes",{role:e})}).then(function(){return t("createGlobalRoutes",{router:me})}).catch(console.error)},fetchUserInfo:function(e){var t=e.commit;return Object(k.g)().then(function(e){var n=e.data;if(0!==n.errno)throw new Error("[errno]: ".concat(n.errno));return t(y,n),n}).catch(console.error)},createExtraRoutes:function(e,t){var n=e.commit,r=t.role;if(!Array.isArray(r))throw new TypeError("[createExtraRoutes]:".concat(r," should be a array"));var o=r.includes("admin")?d:function e(t,n){var r=[];t.forEach(function(t){var o=s()({},t);(function(e,t){return!e.meta||!e.meta.role||t.some(function(t){return e.meta.role.includes(t)})})(t,n)&&(o.children&&(o.children=e(o.children,n)),r.push(o))});return r}(d,r);n(S,r),n(b,o)},createGlobalRoutes:function(e,t){var n=e.commit,r=e.getters,o=t.router;n(E,P()(f).concat(P()(r.extraRoutes))),o.addRoutes(r.extraRoutes)},logout:function(e,t){e.commit;!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;sessionStorage.removeItem(e)}(),t("/"),location.reload()}}};function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value",r=[],o=[],a=!0,i=!1,s=void 0;try{for(var c,u=e[Symbol.iterator]();!(a=(c=u.next()).done);a=!0){var l=c.value;r.push(l[t]),o.push(l[n])}}catch(e){i=!0,s=e}finally{try{a||null==u.return||u.return()}finally{if(i)throw s}}return{labels:r,datasets:o}}function I(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value",r=[],o=!0,a=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var l=c.value;r.push(s()({},l,{percent:l[n]/t}))}}catch(e){a=!0,i=e}finally{try{o||null==u.return||u.return()}finally{if(a)throw i}}return r}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"value";return e.reduce(function(e,n){return g()({},t,e[t]+n[t])},g()({},t,0))[t]}var x,N="SET_SALES",L="SET_VISITORS",U="SET_PAYMENTS",M="SET_OPERATIONS",W="SET_RANK_LIST",V="SET_SEARCH_DATA",B="SET_SALES_TYPE",X={state:{sales:{trend:[{key:"同周比",value:.12},{key:"日环比",value:-.11}],daily:0,total:0,totalDetails:[]},visitors:{daily:0,chart:[],total:0},payments:{total:0,chart:[],rate:.6},operations:{influence:0,trend:[{key:"同周比",value:.12},{key:"日环比",value:-.11}],conversion:.1},rankList:[{name:"sample name",value:1e4}],searchData:{total:{value:12321,trend:.1},average:{value:2.7,trend:-.2},chart:[{name:"default title",data:1234}]},salesType:{all:[{name:"sample 1",value:123},{name:"sample 2",value:234}],online:[{name:"sample 1",value:123}],offline:[{name:"sample 2",value:234}]}},getters:{getAllSalesType:function(e){return C(P()(e.salesType.all))},getOnlineSalesType:function(e){return C(P()(e.salesType.online))},getOfflineSalesType:function(e){return C(P()(e.salesType.offline))},getAllSum:function(e){return j(P()(e.salesType.all))},getOnlineSum:function(e){return j(P()(e.salesType.online))},getOfflineSum:function(e){return j(P()(e.salesType.offline))},getAllDetails:function(e,t){return I(P()(e.salesType.all),t.getAllSum)},getOnlineDetails:function(e,t){return I(P()(e.salesType.online),t.getOnlineSum)},getOfflineDetails:function(e,t){return I(P()(e.salesType.offline),t.getOfflineSum)}},mutations:(x={},g()(x,N,function(e,t){e.sales=t}),g()(x,L,function(e,t){e.visitors=t}),g()(x,U,function(e,t){e.payments=t}),g()(x,M,function(e,t){e.operations=t}),g()(x,W,function(e,t){e.rankList=t}),g()(x,V,function(e,t){e.searchData=t}),g()(x,B,function(e,t){e.salesType=t}),x),actions:{fetchAnalysis:function(e){var t=e.commit;Object(k.a)().then(function(e){var n=e.data;t(N,n.sales),t(L,n.visitors),t(U,n.payments),t(M,n.operations),t(W,n.rankList),t(V,n.searchData),t(B,n.salesType)})}}};function G(e){return e.reduce(function(e,t){return e+t})}var H,Z,q="SET_PROJECTS",z="SET_ACTIVITIES",J="SET_RADAR",K="SET_TEAMS",Y={state:{projects:[{id:"xxx1",title:"Vue.js",logo:"",description:"那是一种内在的东西，他们到达不了，也无法触及的",updatedAt:new Date,member:"科学搬砖组",href:"",memberLink:""}],activities:[{user:{name:"Bowen",avatar:""},updateAt:+new Date,group:{name:"Github",link:"https://github.com/lbwa"},project:{name:"Vue Design Pro",link:"https://github.com/lbwa/vue-design-pro"},template:"在 @{group} 新建项目 @{project}"}],radar:[],teams:[{name:"科学搬砖组",avatar:""}]},getters:{getFormatRadar:function(e){return function(e){var t=[],n=["#1890ff","#facc14","#2fc25b"],r=0;return e.forEach(function(e){var o=[],a=[];Object.keys(e).forEach(function(t){"number"==typeof e[t]&&(o.push(t),a.push(e[t]))}),t.push({data:a,fill:!1,borderColor:n[r++]})}),t}(P()(e.radar))},getPersonSum:function(e,t){var n=t.getFormatRadar;return n[0]?G(n[0].data):0},getTeamSum:function(e,t){var n=t.getFormatRadar;return n[1]?G(n[1].data):0},getDepartmentSum:function(e,t){var n=t.getFormatRadar;return n[2]?G(n[2].data):0}},mutations:(H={},g()(H,q,function(e,t){e.projects=t}),g()(H,z,function(e,t){e.activities=t}),g()(H,J,function(e,t){e.radar=t}),g()(H,K,function(e,t){e.teams=t}),H),actions:{fetchWorkspace:function(e){var t=e.commit;Promise.all([Object(k.d)(),Object(k.c)(),Object(k.e)(),Object(k.f)()]).then(function(e){t(q,e[0].data),t(z,e[1].data),t(J,e[2].data),t(K,e[3].data)}).catch(function(e){return console.error(e)})}}},Q="SET_PAY_ACCOUNT",$="SET_RECEIVER_ACCOUNT",ee="SET_RECEIVER_TYPE",te="SET_RECEIVER_NAME",ne="SET_AMOUNT",re={state:{form:{payAccount:"vue-design-pro@github.com",receiverAccount:"yourname@github.com",receiverType:"alipay",receiverName:"Bowen",amount:"10000"}},mutations:(Z={},g()(Z,Q,function(e,t){e.form.payAccount=t}),g()(Z,$,function(e,t){e.form.receiverAccount=t.target.value}),g()(Z,ee,function(e,t){e.form.receiverType=t}),g()(Z,te,function(e,t){e.form.receiverName=t.target.value}),g()(Z,ne,function(e,t){var n=parseFloat(t.target.value);e.form.amount=isNaN(n)?0:n}),Z),actions:{pushStepForm:function(e,t){e.commit;var n=e.state;return Object(k.j)(s()({},n.form,{password:t})).then(function(e){var t=e.data;if(0!==t.errno)throw new Error("[pushStepForm]: ".concat(t.message));return t})}}},oe={actions:{pushBasicForm:function(e,t){e.commit;return Object(k.h)(t).then(function(e){var t=e.data;return 0!==t.errno?console.error(new Error("[pushBasicForm]: ".concat(t.message))):t})}}},ae={login:s()({namespaced:!0},_),analysis:s()({namespaced:!0},X),workspace:s()({namespaced:!0},Y),formStep:s()({namespaced:!0},re),formBasic:s()({namespaced:!0},oe)},ie=g()({},"TOGGLE_ASIDE",function(e){e.isCollapse=!e.isCollapse});r.default.use(a.a);var se=new a.a.Store({modules:ae,state:{isCollapse:!1},mutations:ie,strict:!1,plugins:[]}),ce=n("Mj6V"),ue=n.n(ce);n("pdi6");r.default.use(o.a);var le=new o.a({routes:f});le.beforeEach(function(e,t,n){ue.a.start(),"/"!==e.path?O()?(se.getters["login/userInfo"].name||"/"===e.path||se.dispatch("login/fetchUserInfo").catch(console.error),se.getters["login/role"].length||se.dispatch("login/validateToken"),n()):n({path:"/?redirect=".concat(e.path),replace:!0}):n()}),le.afterEach(function(e,t){ue.a.done()});var me=le,pe=n("qSUR");r.default.use(pe.a);var fe=new pe.a({locale:"en",messages:{zh:{login:{title:"vue design pro",placeholder:{username:"请输入用户名",password:"请输入密码"}},analysis:{total:{sales:"销售总额",visitors:"访问量",payments:"支付笔数",operations:"运营活动效果"},daily:{sales:"日均销售额",visitors:"日均访问量",payments:"转化率"},tooltip:{sales:"这是销售总额",visitors:"这是访客量",payments:"这是支付笔数",operations:"这是运营效果"}}},en:{login:{title:"vue design pro",placeholder:{username:"Username: admin/user",password:"Password: pro"}},analysis:{total:{sales:"Total sales",visitors:"Visits",payments:"Payments",operations:"Operational Effect"},daily:{sales:"Day Sales",visitors:"Day Visits",payments:"Conversion Rate"},tooltip:{sales:"This is total sales",visitors:"This is visits",payments:"This is payments",operations:"This is operational effect"},tabs:{salesTitle:"Sales",visitsTitle:"Visits",salesTrend:"Store Sales Trend",salesRanking:"Sales Ranking",visitsTrend:"Visits Trend",visitsRanking:"Visits Ranking"},topSearch:{middleTitle:"Online Top Search",searchUsers:"Search Users",searchUsersDesc:"This is search users",perCapitaSearch:"Per Capita Search",perCapitaSearchDesc:"This is per capita search"}},workspace:{tags:{quickStart:"Quick start",convenientNavigation:"Convenient navigation"}},form:{basic:{title:"Basic form",description:"Form is used to collect information which is provided by users.",links:{home:"Home",form:"Form",basic:"Basic form"},mainForm:{title:"Title",titlePlaceholder:"Give your project a awesome name",timePicker:"Period",startDay:"Start time",endDay:"End time",to:"to",target:"Target description",targetPlaceholder:"Please input your target description",measure:"Measurement",measurePlaceholder:"Please input your measurement",optional:"(Optional)",client:"Client",clientPlaceholder:"Please describe your client, Using @name/WordID if your client is internal client.",clientDescription:"Target client",inviter:"Inviter",inviterPlaceholder:"Please use @name/WorkID, less then 5 people.",weight:"Order",public:"Public",partiallyPublic:"Part",private:"Private",publicTip:"Client and inviter will be shared by default setting",publicPlaceholder:"To",submit:"Submit",save:"Save"},rulesTitle:"Please input title",rulesTimePicker:"Please input period",rulesTarget:"Please input target",rulesMeasure:"Please input measurement",successMessage:{title:"Tips",content:"Successful validation"},failedMessage:{title:"Error",content:"Failed validation"}},step:{label:{linksHome:"Home",linksForm:"Form",linksStep:"Step",payment:"Payment Account",receiver:"Receiver Account",alipay:"Alipay",bank:"Bank",receiverName:"Receiver Name",amount:"Amount"},placeholder:{receiverName:"Please input receiver name",amount:"Please input amount"},rulesReceiverAccount:"Please input receiver account",rulesReceiverName:"Please input receiver name",rulesAmount:"Please input amount",rulesPassword:"Please input your password",buttonNext:"Next step",description:"Divide a lengthy or unfamiliar form task into multiple steps to guide the user through the process.",stepTitle:{write:"Write transfer information",confirm:"Confirm transfer information",complete:"Complete"},combineStepTitle:{write:"Step Form(Write transfer information)",confirm:"Step Form(Confirm transfer information)",complete:"Step Form(Complete)"},footer:{title:"Pro tips",content:"This is a description here."},confirm:{submit:"Submit",cancel:"Cancel",alert:"This is a one-way operation. Once you confirm transfer, you can't go back!",payAccount:"Payment account",receiverAccount:"Receiver Account",receiverName:"Receiver Name",amount:"Amount",password:"Password",tipsTitle:"Message",tipsMessage:"Wrong password"},success:{success:"Success",description:"Expected to arrive within two hours",payAccount:"Payment Account",receiverAccount:"Receiver Account",receiverName:"Receiver Name",amount:"Amount",morePayment:"Transfer again",checkBill:"Check transfer records"}}}}}}),de=(n("9d8Q"),n("D66Q"),n("JGWq"),n("EXSd"));r.default.use(F.a),new r.default({el:"#root",router:me,store:se,i18n:fe,render:function(e){return e(de.default)}})}},[["tjUo",22,0,21]]]);