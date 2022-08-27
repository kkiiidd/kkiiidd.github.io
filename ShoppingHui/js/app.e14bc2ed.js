(function(){"use strict";var t={2964:function(t,e,r){r.r(e),r.d(e,{reqAddShopCart:function(){return v},reqAddrList:function(){return O},reqBannerList:function(){return m},reqCartList:function(){return y},reqCategoryList:function(){return p},reqChangeCheck:function(){return _},reqCheckPayStatus:function(){return T},reqDeleteCart:function(){return C},reqFloorList:function(){return f},reqGetCode:function(){return I},reqGoodInfo:function(){return g},reqLogin:function(){return w},reqLogout:function(){return L},reqMyOrder:function(){return N},reqOrderInfo:function(){return x},reqRegister:function(){return b},reqSearchInfo:function(){return h},reqShopInfo:function(){return E},reqSubmitOrder:function(){return S},reqUserInfo:function(){return k}});r(1703);var o=r(6265),a=r.n(o),n=r(530),s=r.n(n),i=r(2812);const c=a().create({baseURL:"/api",timeout:5e3});c.interceptors.request.use((t=>(i.Z.state.detail.uuid_token&&(t.headers["userTempId"]=i.Z.state.detail.uuid_token),i.Z.state.user.token&&(console.log("config ING"),t.headers["token"]=i.Z.state.user.token),s().start(),t))),c.interceptors.response.use((t=>(s().done(),t.data)),(t=>(console.log("响应失败",t),Promise.reject(new Error("fail")))));var l=c;const u=a().create({baseURL:"/mock",timeout:5e3});a().interceptors.request.use((t=>(s().start(),t))),a().interceptors.response.use((t=>(s().done(),t.data)),(t=>(alert("服务器响应失败"),Promise.reject(new Error("fail")))));var d=u;const p=()=>l({url:"/product/getBaseCategoryList",method:"GET"}),m=()=>d({url:"/banner",method:"GET"}),f=()=>d({url:"/floor",method:"GET"}),h=t=>l({url:"/list",method:"POST",data:t}),g=t=>l({url:`/item/${t}`,method:"GET"}),v=(t,e)=>l({url:`/cart/addToCart/${t}/${e}`,method:"post"}),y=()=>l({url:"/cart/cartList",method:"get"}),C=t=>l({url:`/cart/deleteCart/${t}`,method:"delete"}),_=(t,e)=>l({url:`/cart/checkCart/${t}/${e}`,method:"get"}),I=t=>l({url:`/user/passport/sendCode/${t}`,method:"get"}),b=(t,e,r)=>l({url:"/user/passport/register",data:{phone:t,code:e,password:r},method:"post"}),w=(t,e)=>l({url:"/user/passport/login",data:{phone:t,password:e},method:"post"}),k=()=>l({url:"/user/passport/auth/getUserInfo",method:"get"}),L=()=>l({url:"/user/passport/logout",method:"get"}),O=()=>d({url:"/address",method:"get"}),E=()=>l({url:"/order/auth/trade",method:"get"}),S=(t,e)=>l({url:`order/auth/submitOrder?tradeNo=${t}`,method:"post",data:e}),x=t=>l({url:`/payment/weixin/createNative/${t}`,method:"get"}),T=t=>l({url:`/payment/weixin/queryPayStatus/${t}`,method:"get"}),N=(t,e)=>l({url:`/order/auth/${t}/${e}`,method:"get"})},2752:function(t,e,r){var o=r(7881),a=r.n(o),n=r(6369),s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[e("Header"),e("router-view"),e("Footer")],1)},i=[],c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("div",{staticClass:"top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"loginList"},[e("p",[t._v("尚品汇欢迎您！")]),t.userName?e("p",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(t.userName))]),e("a",{staticClass:"register",attrs:{href:"javascript:void(0)"},on:{click:t.logout}},[t._v("退出登录")])]):e("p",[e("span",[t._v("请")]),e("a",{attrs:{href:"javascript:void(0)"},on:{click:t.toLogin}},[t._v("登录")]),e("a",{staticClass:"register",attrs:{href:"javascript:void(0)"},on:{click:t.toRegister}},[t._v("免费注册")])])]),e("div",{staticClass:"typeList"},[e("a",{on:{click:t.toOrder}},[t._v("我的订单")]),e("a",{on:{click:t.toShopcart}},[t._v("我的购物车")]),e("a",{on:{click:t.toCenter}},[t._v("我的尚品汇")]),e("a",{attrs:{href:"###"}},[t._v("尚品汇会员")]),e("a",{attrs:{href:"###"}},[t._v("企业采购")]),e("a",{attrs:{href:"###"}},[t._v("关注尚品汇")]),e("a",{attrs:{href:"###"}},[t._v("合作招商")]),e("a",{attrs:{href:"###"}},[t._v("商家后台")])])])]),e("div",{staticClass:"bottom"},[e("h1",{staticClass:"logoArea"},[e("router-link",{staticClass:"logo",attrs:{title:"尚品汇",to:"/home"}},[e("img",{attrs:{src:r(587),alt:""}})])],1),e("div",{staticClass:"searchArea"},[e("form",{staticClass:"searchForm",attrs:{action:"###"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"input-error input-xxlarge",attrs:{type:"text",id:"autocomplete"},domProps:{value:t.input},on:{"keydown:enter":t.search,input:function(e){e.target.composing||(t.input=e.target.value)}}}),e("button",{staticClass:"sui-btn btn-xlarge btn-danger",attrs:{type:"button"},on:{click:t.search}},[t._v(" 搜索 ")])])])])])},l=[],u={data(){return{input:""}},computed:{userName(){return this.$store.state.user.userName}},mounted(){this.$bus.$on("clearKeyword",(()=>{console.log("clear"),this.input=""}))},methods:{async logout(){try{await this.$store.dispatch("user/logout"),localStorage.removeItem("TOKEN"),this.$router.push("/home")}catch(t){alert(t)}},toLogin(){this.$router.push("/login")},toRegister(){this.$router.push("/register")},toHome(){this.$router.push("/home")},toShopcart(){this.$router.push("/shopcart")},toOrder(){this.$router.push("/center/myOrder")},toCenter(){this.$router.push("/center")},search(){console.log(this.input);let t={keyword:this.input||""},e={name:"search",params:t};this.$route.query&&(e.query=this.$route.query),this.$router.push(e)},clear(){this.input=""}}},d=u,p=r(1001),m=(0,p.Z)(d,c,l,!1,null,"0faa7ebf",null),f=m.exports,h=function(){var t=this;t._self._c;return t._m(0)},g=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-container"},[e("div",{staticClass:"footerList"},[e("div",{staticClass:"footerItem"},[e("h4",[t._v("购物指南")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("购物流程")]),e("li",[t._v("会员介绍")]),e("li",[t._v("生活旅行/团购")]),e("li",[t._v("常见问题")]),e("li",[t._v("购物指南")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("配送方式")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("上门自提")]),e("li",[t._v("211限时达")]),e("li",[t._v("配送服务查询")]),e("li",[t._v("配送费收取标准")]),e("li",[t._v("海外配送")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("支付方式")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("货到付款")]),e("li",[t._v("在线支付")]),e("li",[t._v("分期付款")]),e("li",[t._v("邮局汇款")]),e("li",[t._v("公司转账")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("售后服务")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("售后政策")]),e("li",[t._v("价格保护")]),e("li",[t._v("退款说明")]),e("li",[t._v("返修/退换货")]),e("li",[t._v("取消订单")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("特色服务")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("夺宝岛")]),e("li",[t._v("DIY装机")]),e("li",[t._v("延保服务")]),e("li",[t._v("尚品汇E卡")]),e("li",[t._v("尚品汇通信")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("帮助中心")]),e("img",{attrs:{src:r(2552)}})])]),e("div",{staticClass:"copyright"},[e("ul",{staticClass:"helpLink"},[e("li",[t._v(" 关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 联系我们 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 商家入驻 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 营销中心 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 友情链接 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 营销中心 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 友情链接 "),e("span",{staticClass:"space"})]),e("li",[t._v("关于我们")])]),e("p",[t._v("地址：北京市昌平区宏福科技园综合楼6层")]),e("p",[t._v("京ICP备19006430号")])])])])}],v={},y=v,C=(0,p.Z)(y,h,g,!1,null,"308c77cf",null),_=C.exports,I={components:{Header:f,Footer:_},mounted(){this.$store.dispatch("home/getCategoryList")}},b=I,w=(0,p.Z)(b,s,i,!1,null,null,null),k=w.exports,L=r(2631),O=r(2812),E=[{path:"/",redirect:"/home"},{path:"/login",name:"login",component:()=>r.e(862).then(r.bind(r,3862))},{path:"/register",name:"register",component:()=>r.e(476).then(r.bind(r,1476)),beforeEnter:function(t,e,r){O.Z.state.user.token?(console.log("是否退出当前登录"),N.app.$alert("检测到您已登录，是否退出当前登录，并跳转至注册页面","提示",{showConfirmButton:!0,showCancelButton:!0,callback:async function(t,o){if("cancel"===t)r(e);else try{await O.Z.dispatch("user/logout"),localStorage.removeItem("TOKEN"),r()}catch(a){alert("退出登录失败，请稍后重试")}}})):r()}},{path:"/shopcart",name:"shopcart",component:()=>r.e(426).then(r.bind(r,7426))},{path:"/detail/:skuid?",name:"detail",component:()=>r.e(803).then(r.bind(r,6803)),beforeEnter:(t,e,r)=>{-1!=e.path.indexOf("/search")?(console.log("next"),r()):(console.log("next false"),r(e.path))}},{path:"/addcartsuccess",name:"addcartsuccess",component:()=>r.e(820).then(r.bind(r,6820)),beforeEnter:(t,e,r)=>{-1!=e.path.indexOf("/detail")?(console.log("next"),r()):(console.log("next false"),r(e.path))}},{path:"/trade",name:"trade",component:()=>r.e(411).then(r.bind(r,5411)),beforeEnter:(t,e,r)=>{-1!=e.path.indexOf("/shopcart")?(console.log("next"),r()):(console.log("next false"),r(e.path))}},{path:"/pay",name:"pay",component:()=>r.e(576).then(r.bind(r,5576)),beforeEnter:(t,e,r)=>{-1!=e.path.indexOf("/trade")?(console.log("next"),r()):(console.log("next false"),r(e.path))}},{path:"/paySuccess",name:"paySuccess",component:()=>r.e(417).then(r.bind(r,8417)),beforeEnter:(t,e,r)=>{-1!=e.path.indexOf("/pay")?(console.log("next"),r()):(console.log("next false"),r(e.path))}},{path:"/center",name:"center",component:()=>Promise.all([r.e(372),r.e(675)]).then(r.bind(r,7215)),children:[{path:"",redirect:"myOrder"},{path:"myOrder",component:()=>Promise.all([r.e(372),r.e(16)]).then(r.bind(r,372)),name:"myOrder"},{path:"groupOrder",component:()=>r.e(950).then(r.bind(r,3950)),name:"groupOrder"}]},{path:"/search/:keyword?",name:"search",component:()=>r.e(474).then(r.bind(r,1474))},{path:"/home",component:()=>r.e(554).then(r.bind(r,2554))}];n["default"].use(L.Z);const S=L.Z.prototype.push,x=L.Z.prototype.replace;L.Z.prototype.push=function(t,e,r){e&&r?S.call(this,t,e,r):S.call(this,t,(()=>{}),(()=>{}))},L.Z.prototype.replace=function(t,e,r){e&&r?x.call(this,t,e,r):x.call(this,t,(()=>{}),(()=>{}))};const T=new L.Z({mode:"history",routes:E,scrollBehavior(t,e,r){return{y:0}}});T.beforeEach((async(t,e,r)=>{const o=O.Z.state.user.token,a=O.Z.state.user.userName;let n=t.path;if("/login"==t.path)o?r("/home"):r();else if(o)if(a)console.log("有用户名"),r();else{console.log("没有用户名");try{await O.Z.dispatch("user/getUserInfo"),r()}catch(s){await O.Z.dispatch("user/logout"),alert("登录失败，请重新登录"),r("/login")}}else-1!=n.indexOf("/shopcart")||-1!=n.indexOf("/addcartsuccess")||-1!=n.indexOf("/trade")||-1!=n.indexOf("/paySuccess")||-1!=n.indexOf("/center")||-1!=n.indexOf("/pay")?(console.log(n),r("/login?redirect="+n)):(console.log(n),r())}));var N=T,q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"type-nav"},[e("div",{staticClass:"container",on:{mouseleave:t.leave,mouseenter:t.enterAll}},[e("h2",{staticClass:"all"},[t._v("全部商品分类")]),t._m(0),e("transition",{attrs:{name:"type"}},[t.typeShow?e("div",{staticClass:"sort",on:{click:t.toSearch}},[e("div",{staticClass:"all-sort-list2"},t._l(t.categoryList,(function(r,o){return e("div",{key:r.categoryId,staticClass:"item",class:{active:t.curIndex===o},on:{mouseenter:function(e){return t.enter(o)}}},[e("h3",[e("a",{attrs:{"data-categoryName":r.categoryName,"data-category1Id":r.categoryId}},[t._v(t._s(r.categoryName))])]),e("div",{staticClass:"item-list clearfix"},t._l(r.categoryChild,(function(o,a){return e("div",{key:o.categoryId,staticClass:"subitem"},[e("dl",{staticClass:"fore"},[e("dt",[e("a",{attrs:{"data-categoryName":o.categoryName,"data-category2Id":r.categoryId}},[t._v(t._s(o.categoryName))])]),e("dd",t._l(o.categoryChild,(function(o,a){return e("em",{key:o.categoryId},[e("a",{attrs:{"data-categoryName":o.categoryName,"data-category3Id":r.categoryId}},[t._v(t._s(o.categoryName))])])})),0)])])})),0)])})),0)]):t._e()])],1)])},$=[function(){var t=this,e=t._self._c;return e("nav",{staticClass:"nav"},[e("a",{attrs:{href:"###"}},[t._v("服装城")]),e("a",{attrs:{href:"###"}},[t._v("美妆馆")]),e("a",{attrs:{href:"###"}},[t._v("尚品汇超市")]),e("a",{attrs:{href:"###"}},[t._v("全球购")]),e("a",{attrs:{href:"###"}},[t._v("闪购")]),e("a",{attrs:{href:"###"}},[t._v("团购")]),e("a",{attrs:{href:"###"}},[t._v("有趣")]),e("a",{attrs:{href:"###"}},[t._v("秒杀")])])}],G=r(3822),A=r(9289),P=r.n(A),j={name:"TypeNav",data(){return{cur:"active-item",curIndex:-1,typeShow:!1}},methods:{enter:P()((function(t){this.curIndex=t}),50),leave(){this.curIndex=-1,"home"!==this.$route.path.split("/")[1]&&(this.typeShow=!1)},showCate(){console.log(this.categoryList)},toSearch(t){let{categoryname:e,category1id:r,category2id:o,category3id:a}=t.target.dataset;if(e){let t={categoryName:e};r?t.category1id=r:o?t.category2id=o:a&&(t.category3id=a);let n={name:"search",query:t};this.$route.params.keyword&&(n.params=this.$route.params),this.$router.push(n),console.log(this.$route)}},enterAll(){this.typeShow=!0}},mounted(){"home"===this.$route.path.split("/")[1]&&(this.typeShow=!0)},computed:{...(0,G.rn)("home",{categoryList:"categoryList"})}},U=j,Z=(0,p.Z)(U,q,$,!1,null,null,null),R=Z.exports,D=function(){var t=this,e=t._self._c;return e("div",{ref:"cur",staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.list,(function(t){return e("div",{key:t.id,staticClass:"swiper-slide"},[e("img",{attrs:{src:t.imgUrl}})])})),0),e("div",{staticClass:"swiper-pagination"}),e("div",{staticClass:"swiper-button-prev"}),e("div",{staticClass:"swiper-button-next"})])},F=[],B=r(781),H={name:"Carousel",props:["list"],watch:{list:{immediate:!0,handler(t,e){this.$nextTick((()=>{new B.Z(this.$refs.cur,{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},loop:!0})}))}}}},K=H,M=(0,p.Z)(K,D,F,!1,null,null,null),J=M.exports,Y=r(7634),V=r.n(Y),z=JSON.parse('[{"id":"1","imgUrl":"/images/banner1.jpg"},{"id":"2","imgUrl":"/images/banner2.jpg"},{"id":"3","imgUrl":"/images/banner3.jpg"},{"id":"4","imgUrl":"/images/banner4.jpg"}]'),Q=JSON.parse('[{"id":"001","name":"家用电器","keywords":["节能补贴","4K电视","空气净化器","IH电饭煲","滚筒洗衣机","电热水器"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","text":"热门"},{"url":"#","text":"大家电"},{"url":"#","text":"生活电器"},{"url":"#","text":"厨房电器"},{"url":"#","text":"应季电器"},{"url":"#","text":"空气/净水"},{"url":"#","text":"高端电器"}],"carouselList":[{"id":"0011","imgUrl":"/images/floor-1-b01.png"},{"id":"0012","imgUrl":"/images/floor-1-b02.png"},{"id":"0013","imgUrl":"/images/floor-1-b03.png"}],"recommendList":["/images/floor-1-2.png","/images/floor-1-3.png","/images/floor-1-5.png","/images/floor-1-6.png"],"bigImg":"/images/floor-1-4.png"},{"id":"002","name":"手机通讯","keywords":["节能补贴2","4K电视2","空气净化器2","IH电饭煲2","滚筒洗衣机2","电热水器2"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","text":"热门2"},{"url":"#","text":"大家电2"},{"url":"#","text":"生活电器2"},{"url":"#","text":"厨房电器2"},{"url":"#","text":"应季电器2"},{"url":"#","text":"空气/净水2"},{"url":"#","text":"高端电器2"}],"carouselList":[{"id":"0011","imgUrl":"/images/floor-1-b01.png"},{"id":"0012","imgUrl":"/images/floor-1-b02.png"},{"id":"0013","imgUrl":"/images/floor-1-b03.png"}],"recommendList":["/images/floor-1-2.png","/images/floor-1-3.png","/images/floor-1-5.png","/images/floor-1-6.png"],"bigImg":"/images/floor-1-4.png"}]'),W=JSON.parse('[{"consignee":"叶子","fullAddress":"广东省东莞市寮步镇龙泉路1号","id":"1","isDefault":"1","phoneNum":"13700000000","provinveId":"1","regionId":"1","userAddress":"广东省东莞市寮步镇龙泉路1号","userId":"1"},{"consignee":"袁媛","fullAddress":"广西省桂林市","id":"2","isDefault":"0","phoneNum":"13711945216","provinveId":"2","regionId":"2","userAddress":"广西省桂林市","userId":"2"},{"consignee":"沈欣","fullAddress":"安徽省合肥市","id":"3","isDefault":"0","phoneNum":"18652421549","provinveId":"3","regionId":"3","userAddress":"安徽省合肥市","userId":"3"}]');V().mock("/mock/banner",{code:200,data:z}),V().mock("/mock/floor",{code:200,data:Q}),V().mock("/mock/address",{code:200,data:W});var X=r(2964),tt=r(6112),et=r.p+"img/loading.55c45cf8.gif";n["default"].config.productionTip=!1,n["default"].component(R.name,R),n["default"].component(J.name,J),n["default"].prototype.$msgbox=a(),n["default"].prototype.$alert=a().alert,n["default"].use(tt.Z,{preLoad:1.3,loading:et,attempt:1}),new n["default"]({router:N,store:O.Z,render:t=>t(k),beforeCreate(){n["default"].prototype.$API=X,n["default"].prototype.$bus=this}}).$mount("#app")},2812:function(t,e,r){r.d(e,{Z:function(){return B}});var o=r(6369),a=r(3822),n=r(2964);o["default"].use(a.ZP);const s={GETBANNERLIST(t,e){t.bannerList=e}},i={async getBannerList(t){let e=(await(0,n.reqBannerList)()).data;200===e.code&&t.commit("GETBANNERLIST",e.data)}},c={bannerList:[]};var l={mutations:s,actions:i,state:c,namespaced:!0};o["default"].use(a.ZP);const u={GETCATEGORYLIST(t,e){t.categoryList=e},GETFLOORLIST(t,e){t.floorList=e}},d={async getCategoryList(t){const e=await(0,n.reqCategoryList)();200===e.code&&t.commit("GETCATEGORYLIST",e.data)},async getFloorList(t){const e=(await(0,n.reqFloorList)()).data;200===e.code&&t.commit("GETFLOORLIST",e.data)}},p={categoryList:[],floorList:[]};var m={mutations:u,actions:d,state:p,namespaced:!0,modules:{banner:l}};o["default"].use(a.ZP);const f={async getSearchList({commit:t},e={}){const r=await(0,n.reqSearchInfo)(e);200===r.code&&t("GETSEARCHLIST",r.data)}},h={GETSEARCHLIST(t,e){t.searchContent=e}},g={searchContent:{}},v={goodList(t){return t.searchContent.goodsList||[]},attrsList(t){return t.searchContent.attrsList||[]},trademarkList(t){return t.searchContent.trademarkList||[]}};var y={namespaced:!0,actions:f,mutations:h,state:g,getters:v},C=(r(1703),r(536));const _=()=>{let t=localStorage.getItem("UUIDTOKEN");return t||(t=(0,C.Z)(),localStorage.setItem("UUIDTOKEN",t)),t},I={GETGOODINFO(t,e){t.goodInfo=e}},b={async getGoodInfo({commit:t},e){const r=await(0,n.reqGoodInfo)(e);200===r.code&&t("GETGOODINFO",r.data)},async addShopCart({commit:t},{skuId:e,skuNum:r}){console.log("addShopCart",{skuId:e,skuNum:r});let o=await(0,n.reqAddShopCart)(e,r);return 200===o.code?"success":Promise.reject(new Error("fail"))}},w={goodInfo:{},uuid_token:_()},k={categoryView(){return w.goodInfo.categoryView||{}},skuInfo(){return w.goodInfo.skuInfo||{}},spuSaleAttrList(){return w.goodInfo.spuSaleAttrList||[]}};var L={mutations:I,actions:b,state:w,getters:k,namespaced:!0};const O={GETSHOPCARTLIST(t,e){t.shopcartData=e}},E={async getCode({commit:t},e){const r=await(0,n.reqGetCode)(e);200===r.code&&console.log(r)},async getShopCartList({commit:t}){const e=await(0,n.reqCartList)();200===e.code&&t("GETSHOPCARTLIST",e.data)},async deleteShopCartItem({commit:t},e){const r=await(0,n.reqDeleteCart)(e);return 200===r.code?"ok":Promise.reject(new Error("fail"))},deleteSelected({getters:t,dispatch:e}){try{let r=[];return t.shopcartList.cartInfoList.forEach((t=>{let o=1==t.isChecked?e("deleteShopCartItem",t.skuId):"";r.push(o)})),Promise.all(r)}catch(r){alert(r)}},async updateCheck({commit:t},{skuId:e,isChecked:r}){const o=await(0,n.reqChangeCheck)(e,r);return 200===o.code?"ok":Promise.reject(new Error("fail"))}},S={shopcartData:[]},x={shopcartList(){return S.shopcartData[0]||{}}};var T={mutations:O,actions:E,state:S,getters:x,namespaced:!0};const N=t=>{localStorage.setItem("TOKEN",t)},q=()=>localStorage.getItem("TOKEN"),$={code:"",token:q(),userName:""},G={GETCODE(t,e){t.code=e},CONFIRMLOGIN(t,e){t.token=e},GETUSERINFO(t,e){t.userName=e},LOGOUT(t,e){t.token=null,t.userName=null}},A={async getCode({commit:t},e){const r=await(0,n.reqGetCode)(e);200===r.code&&t("GETCODE",r.data)},async confirmRegister({commit:t},{phone:e,code:r,password:o}){const a=await(0,n.reqRegister)(e,r,o);return 200===a.code?"ok":Promise.reject(new Error("fail"))},async confirmLogin({commit:t},{phone:e,password:r}){const o=await(0,n.reqLogin)(e,r);return 200===o.code?(t("CONFIRMLOGIN",o.data.token),t("GETUSERINFO",o.data.name),N(o.data.token),"ok"):Promise.reject(new Error("登录失败"))},async getUserInfo({commit:t}){const e=await(0,n.reqUserInfo)();return 200===e.code?(t("GETUSERINFO",e.data.name),"ok"):Promise.reject(new Error("获取用户信息失败"))},async logout({commit:t}){const e=await(0,n.reqLogout)();return 200===e.code?(t("LOGOUT"),"ok"):Promise.reject(new Error("退出登录失败"))}},P={};var j={mutations:G,actions:A,state:$,getters:P,namespaced:!0};const U={async getUserAddrList({commit:t}){const e=(await(0,n.reqAddrList)()).data;200===e.code&&(console.log("1111111",e),t("GETADDRLIST",e.data))},async getShopInfo({commit:t}){let e=await(0,n.reqShopInfo)();return 200==e.code?(t("GETSHOPINFO",e.data),"ok"):Promise.reject(new Error(e.message))}},Z={GETADDRLIST(t,e){t.addrs=e},GETSHOPINFO(t,e){t.shopInfo=e}},R={addrs:[],shopInfo:[]},D={};var F={actions:U,mutations:Z,state:R,getters:D,namespaced:!0};o["default"].use(a.ZP);var B=new a.ZP.Store({modules:{home:m,search:y,detail:L,shopcart:T,user:j,order:F}})},2552:function(t,e,r){t.exports=r.p+"img/wx_cz.5d92bf53.jpg"},587:function(t,e,r){t.exports=r.p+"img/logo.d600ca2b.png"}},e={};function r(o){var a=e[o];if(void 0!==a)return a.exports;var n=e[o]={exports:{}};return t[o].call(n.exports,n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,o,a,n){if(!o){var s=1/0;for(u=0;u<t.length;u++){o=t[u][0],a=t[u][1],n=t[u][2];for(var i=!0,c=0;c<o.length;c++)(!1&n||s>=n)&&Object.keys(r.O).every((function(t){return r.O[t](o[c])}))?o.splice(c--,1):(i=!1,n<s&&(s=n));if(i){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[o,a,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,o){return r.f[o](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/"+t+"."+{16:"ed386393",372:"3ef8e5d0",411:"a4c8f3cf",417:"ec32e11a",426:"e4c77aee",474:"9dec1ec1",476:"1ff69aff",554:"e05b1f42",576:"bdebd998",675:"ae209e6c",803:"086abe3b",820:"780efdcb",862:"55af9a48",950:"66fe41b2"}[t]+".js"}}(),function(){r.miniCssF=function(t){return"css/"+t+"."+{16:"25c47aa2",411:"90929bee",417:"004d30a8",426:"8b0318d2",474:"aa1f9f75",476:"28909dbe",554:"f97610ed",576:"aee24f21",675:"ffd1f646",803:"1ceaf251",820:"108978d4",862:"a8c4adcc"}[t]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="shopping-hui:";r.l=function(o,a,n,s){if(t[o])t[o].push(a);else{var i,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+n){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",e+n),i.src=o),t[o]=[a];var p=function(e,r){i.onerror=i.onload=null,clearTimeout(m);var a=t[o];if(delete t[o],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(t){return t(r)})),e)return e(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t=function(t,e,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var n=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=n,a.href=e,document.head.appendChild(a),a},e=function(t,e){for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var a=r[o],n=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===t||n===e))return a}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){a=s[o],n=a.getAttribute("data-href");if(n===t||n===e)return a}},o=function(o){return new Promise((function(a,n){var s=r.miniCssF(o),i=r.p+s;if(e(s,i))return a();t(o,i,a,n)}))},a={143:0};r.f.miniCss=function(t,e){var r={16:1,411:1,417:1,426:1,474:1,476:1,554:1,576:1,675:1,803:1,820:1,862:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=o(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}(),function(){var t={143:0};r.f.j=function(e,o){var a=r.o(t,e)?t[e]:void 0;if(0!==a)if(a)o.push(a[2]);else if(16!=e){var n=new Promise((function(r,o){a=t[e]=[r,o]}));o.push(a[2]=n);var s=r.p+r.u(e),i=new Error,c=function(o){if(r.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var n=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",i.name="ChunkLoadError",i.type=n,i.request=s,a[1](i)}};r.l(s,c,"chunk-"+e,e)}else t[e]=0},r.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,n,s=o[0],i=o[1],c=o[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(c)var u=c(r)}for(e&&e(o);l<s.length;l++)n=s[l],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(u)},o=self["webpackChunkshopping_hui"]=self["webpackChunkshopping_hui"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(2752)}));o=r.O(o)})();