(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{399:function(t,e,s){},400:function(t,e,s){},401:function(t,e,s){},402:function(t,e,s){},403:function(t,e,s){"use strict";s(399)},404:function(t,e,s){"use strict";s(400)},405:function(t,e,s){"use strict";s(401)},406:function(t,e){t.exports=function(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}},407:function(t,e,s){"use strict";s(402)},408:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-app-bar",{staticClass:"app_bar",attrs:{app:"",elevation:"0","elevate-on-scroll":"",prominent:"",color:"rgba(255,255,255,0.98)"}},[s("v-container",{staticClass:"pa-0 px-md-8 fill-height"},[s("div",{staticClass:"d-flex flex-md-column align-center px-4"},[s("img",{staticClass:"logo",attrs:{src:t.logo}})]),t._v(" "),s("v-spacer"),t._v(" "),s("div",[s("Menu",{staticClass:"d-none d-md-flex align-self-end"})],1),t._v(" "),s("v-btn",{staticClass:"d-flex d-md-none",attrs:{fab:"",small:"",elevation:"0"},on:{click:function(e){t.$refs.sidebar.isOpen=!t.$refs.sidebar.isOpen}}},[s("v-icon",[t._v("mdi-menu")])],1)],1)],1),t._v(" "),s("Sidebar",{ref:"sidebar",scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"d-flex pa-4"},[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{fab:"",small:"",elevation:"0"},on:{click:function(e){t.$refs.sidebar.isOpen=!1}}},[s("v-icon",[t._v("\n            mdi-close\n          ")])],1)],1),t._v(" "),s("Menu",{staticClass:"sidebarMenu d-flex flex-column"})]},proxy:!0}])})],1)};i._withStripped=!0;var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-btn",{staticClass:"pageItem mx-2 text-body-1 px-2",attrs:{depressed:"",text:"",to:{path:"/attractions"},id:"item01","active-class":"active",large:""},on:{click:function(e){return t.pageItem_click("/attractions")}}},[s("div",{staticClass:"icon"}),t._v(" "),s("div",{staticClass:"text"},[t._v("台灣景點")])]),t._v(" "),s("v-btn",{staticClass:"pageItem mx-2 text-body-1 px-2",attrs:{depressed:"",text:"",to:{path:"/stay"},id:"item02","active-class":"active",large:""},on:{click:function(e){return t.pageItem_click("/stay")}}},[s("div",{staticClass:"icon"}),t._v(" "),s("div",{staticClass:"text"},[t._v("美食住宿")])]),t._v(" "),s("v-btn",{staticClass:"pageItem mx-2 text-body-1 px-2",attrs:{depressed:"",text:"",to:{path:"/transportation"},id:"item03","active-class":"active",large:""},on:{click:function(e){return t.pageItem_click("/transportation")}}},[s("div",{staticClass:"icon"}),t._v(" "),s("div",{staticClass:"text"},[t._v("景點交通")])])],1)};n._withStripped=!0;var a={components:{},data:function(){return{}},mounted:function(){},methods:{pageItem_click:function(t){this.$route.path===t&&window.scroll({top:0,left:0,behavior:"smooth"})}},computed:{}},o=(s(403),s(115)),r=Object(o.a)(a,n,[],!1,null,"3111d13b",null);r.options.__file="src/vue/pages/components/Menu.vue";var c=r.exports,l=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-navigation-drawer",{staticClass:"sidebar",attrs:{right:"",app:"",temporary:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[t._t("content")],2)};l._withStripped=!0;var d={components:{},props:{},watch:{},data:function(){return{isOpen:!1,resizeID:void 0}},mounted:function(){window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){var t=this;clearTimeout(this.resizeID),this.resizeID=setTimeout((function(){t.isOpen&&t.$vuetify.breakpoint.mdAndUp&&(t.isOpen=!1)}),300)}},computed:{}},u=Object(o.a)(d,l,[],!1,null,"2e4a0ea0",null);u.options.__file="src/vue/pages/components/Sidebar.vue";var v=u.exports,f=s.p+"img/logo.286003adb83414fa908aea4030f78d4b.png",p={components:{Menu:c,Sidebar:v},data:function(){return{logo:f}},mounted:function(){},methods:{},computed:{}},m=(s(404),Object(o.a)(p,i,[],!1,null,"023c3669",null));m.options.__file="src/vue/pages/components/Header.vue";e.a=m.exports},409:function(t,e,s){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.finished?[this._t("content",null,{components:this.components})]:[e("div",{staticClass:"vh-70 d-flex align-center justify-center"},[e("v-progress-circular",{attrs:{indeterminate:"",size:"64"}},[this._v(this._s(Math.round(100*this.progress))+"%")])],1)]],2)};i._withStripped=!0;var n=s(406),a=s.n(n);function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function r(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){a()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var c={components:{},data:function(){return{finished:!1,progress:0,components:{}}},mounted:function(){},methods:{load:function(t){var e=this;return this.finished=!1,this.progress=0,function(t,e){var s=0,i=t.length,n=t.map((function(t){return t.src.then((function(t){return s++,e(s,i),Promise.resolve(t)}))}));return Promise.all(n).then((function(e){return e.map((function(e,s){return r(r({},t[s]),{},{component:e.default})}))}))}(t,(function(t,s){e.progress=t/s})).then((function(t){var s={};return t.forEach((function(t){s[t.name]=t.component})),e.components=s,e.finished=!0,s}))}},computed:{}},l=(s(407),s(115)),d=Object(l.a)(c,i,[],!1,null,"1ad06cf8",null);d.options.__file="src/vue/pages/components/LoadComponents.vue";e.a=d.exports},410:function(t,e,s){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer px-3 py-4"},[e("v-container",[e("div",{staticClass:"rightsReserved text-center my-3 text-body-2"},[this._v("\n      Taiwan Tourguide © Code: Wei / Design: KT\n    ")])])],1)};i._withStripped=!0;var n={components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},a=(s(405),s(115)),o=Object(a.a)(n,i,[],!1,null,"3dec5b12",null);o.options.__file="src/vue/pages/components/Footer.vue";e.a=o.exports},411:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,i=new Array(e);s<e;s++)i[s]=t[s];return i}},412:function(t,e,s){},421:function(t,e,s){var i=s(422),n=s(423),a=s(424),o=s(425);t.exports=function(t){return i(t)||n(t)||a(t)||o()}},422:function(t,e,s){var i=s(411);t.exports=function(t){if(Array.isArray(t))return i(t)}},423:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},424:function(t,e,s){var i=s(411);t.exports=function(t,e){if(t){if("string"==typeof t)return i(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?i(t,e):void 0}}},425:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},426:function(t,e,s){"use strict";s(412)},435:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-sheet",{staticClass:"content"},[s("Header"),t._v(" "),s("v-main",{staticClass:"main"},[s("v-sheet",{staticClass:"section d-flex justify-center align-center",attrs:{id:"section01"}},[s("v-container",[s("v-responsive",{staticClass:"box d-flex justify-center align-center",attrs:{"aspect-ratio":1226/491}},[s("div",{staticClass:"boxContent d-flex align-center flex-column"},[s("v-responsive",{staticClass:"centerLogo",attrs:{"aspect-ratio":487/69}}),t._v(" "),s("div",{staticClass:"my-2 align-self-start text-body-2 white--text"},[t._v("\n              台北、台中、台南、屏東、宜蘭……遊遍台灣\n            ")]),t._v(" "),s("div",{staticClass:"d-flex align-center w-100 my-1"},[s("v-text-field",{staticClass:"flex-1 mr-2",attrs:{label:"搜尋關鍵字",solo:"",dense:"","hide-details":""}}),t._v(" "),s("v-btn",{attrs:{color:"#FF1D6C",id:"btn_search"}},[s("div",{staticClass:"icon"})])],1),t._v(" "),s("div",{staticClass:"d-flex align-center w-100 my-1"},[s("v-select",{staticClass:"flex-1 mr-2",attrs:{items:t.items,solo:"",dense:"","hide-details":""},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}}),t._v(" "),s("v-btn",{attrs:{color:"#FFB72C",id:"btn_coordinate"}},[s("div",{staticClass:"icon"})])],1)],1)])],1)],1),t._v(" "),s("v-sheet",{staticClass:"section d-flex justify-center align-center flex-column pb-8",attrs:{id:"section02"}},[s("div",{staticClass:"w-100 mb-4",attrs:{id:"card_shadow01"}}),t._v(" "),s("v-container",{staticClass:"mb-8",attrs:{id:"section02_1"}},[s("div",{staticClass:"mb-4 title d-flex align-center"},[s("div",{staticClass:"icon mr-2"}),t._v(" "),s("div",{staticClass:"text-h6 text-bold"},[t._v("最新活動")])]),t._v(" "),s("div",[s("div",{staticClass:"row items"},t._l(t.getActivity(),(function(e){return s("div",{key:e.ID,staticClass:"col-n1 col-lg-n2 item"},[s("v-card",{staticClass:"d-flex flex-column flex-md-row pa-4",attrs:{flat:""}},[s("div",{staticClass:"pic ph-240 max-w-md-240 w-100 w-md-50",style:{backgroundImage:"url("+t.chooseone(e.Picture.PictureUrl1,t.substitute)+")"},attrs:{title:t.chooseone(e.Picture.PictureDescription1,"無提供照片")}}),t._v(" "),s("v-card-text",{staticClass:"d-flex flex-column flex-1 pa-0 py-4 py-md-0 pl-0 pl-md-4 mb-2"},[s("div",{staticClass:"title text-body-1 mb-2 text-bold",attrs:{title:e.Name}},[t._v(t._s(e.Name))]),t._v(" "),s("div",{staticClass:"text-body-2 my-2 description"},[t._v("\n                    "+t._s(e.Description)+"\n                  ")]),t._v(" "),s("div",{staticClass:"flex-1"}),t._v(" "),s("div",{staticClass:"d-flex align-center"},[s("div",{staticClass:"anchor mr-2"}),t._v(" "),s("div",{staticClass:"flex-1 text-body-1 text-bold city"},[t._v(t._s(e.City))]),t._v(" "),s("v-btn",{attrs:{color:"#FF1D6C",outlined:""},on:{click:function(s){return t.details_click(e)}}},[t._v("活動詳情")])],1)])],1)],1)})),0)])]),t._v(" "),s("v-container",{staticClass:"mb-8",attrs:{id:"section02_2"}},[s("div",{staticClass:"mb-4 title d-flex align-center"},[s("div",{staticClass:"icon mr-2"}),t._v(" "),s("div",{staticClass:"text-h6 text-bold"},[t._v("熱門餐飲")])]),t._v(" "),s("div",[s("div",{staticClass:"row items"},t._l(t.getRestaurant(),(function(e){return s("div",{key:e.ID,staticClass:"col-n1 col-sm-n2 col-md-n3 col-lg-n4 col-xl-n5 item"},[s("v-card",{staticClass:"d-flex flex-column pa-3",attrs:{flat:""}},[s("div",{staticClass:"pic ph-160 w-100 mb-2",style:{backgroundImage:"url("+t.chooseone(e.Picture.PictureUrl1,t.substitute)+")"},attrs:{title:t.chooseone(e.Picture.PictureDescription1,"無提供照片")}}),t._v(" "),s("v-card-title",{staticClass:"pa-0 mb-2"},[s("div",{staticClass:"title text-body-1",attrs:{title:e.Name}},[t._v(t._s(e.Name))])]),t._v(" "),s("v-card-text",{staticClass:"pa-0 mb-2"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"anchor mr-2"}),t._v(" "),s("div",{staticClass:"address"},[t._v(t._s(e.Address))])])])],1)],1)})),0)])])],1)],1),t._v(" "),s("Footer"),t._v(" "),s("v-dialog",{attrs:{width:"800"},model:{value:t.details_dialog,callback:function(e){t.details_dialog=e},expression:"details_dialog"}},[t.details_info?s("v-card",[s("div",{staticClass:"pic ph-400 w-100 mb-4",style:{backgroundImage:"url("+t.chooseone(t.details_info.Picture.PictureUrl1,t.substitute)+")"},attrs:{title:t.chooseone(t.details_info.Picture.PictureDescription1,"無提供照片")}}),t._v(" "),s("v-card-text",{staticClass:"d-flex flex-column flex-1"},[s("div",{staticClass:"title mb-2 text-bold text-h6",attrs:{title:t.details_info.Name}},[t._v(t._s(t.details_info.Name))]),t._v(" "),s("div",{staticClass:"text-body-2 my-2 description"},[t._v("\n          "+t._s(t.details_info.Description)+"\n        ")]),t._v(" "),s("div",{staticClass:"d-flex align-center"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-n2"},[t._v(t._s(t.chooseone(t.details_info.Cycle,"無")))]),t._v(" "),s("div",{staticClass:"col-n2"},[t._v(t._s(t.chooseone(t.details_info.Charge,"無")))]),t._v(" "),s("div",{staticClass:"col-n2"},[t._v(t._s(t.chooseone(t.details_info.Address,"無")))]),t._v(" "),s("div",{staticClass:"col-n2"},[t._v(t._s(t.chooseone(t.details_info.Phone,"無")))])])])])],1):t._e()],1)],1)};i._withStripped=!0;var n=s(421),a=s.n(n),o=s(408),r=s(410),c=s(409),l=[{text:"臺北市"},{text:"新北市"},{text:"桃園市"},{text:"臺中市"},{text:"臺南市"},{text:"高雄市"},{text:"基隆市"},{text:"新竹市"},{text:"嘉義市"},{text:"新竹縣"},{text:"苗栗縣"},{text:"彰化縣"},{text:"南投縣"},{text:"雲林縣"},{text:"嘉義縣"},{text:"屏東縣"},{text:"宜蘭縣"},{text:"花蓮縣"},{text:"臺東縣"},{text:"澎湖縣"},{text:"金門縣"},{text:"連江縣"}],d=s.p+"img/substitute.39a4dcbe42b34f12879b404e0abf6e2c.jpg",u={components:{Header:o.a,Footer:r.a,LoadComponents:c.a},data:function(){return{city:"不分縣市",substitute:d,items:[{text:"不分縣市"}].concat(a()(l)),data:{activity:[],restaurant:[]},details_dialog:!1,details_info:null}},mounted:function(){var t=this;fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$orderby=StartTime desc&$top=40&$format=JSON").then((function(t){return t.json()})).then((function(e){t.data.activity=e,console.log(e)})),fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$orderby=SrcUpdateTime asc&$top=100&$format=JSON").then((function(t){return t.json()})).then((function(e){t.data.restaurant=e,console.log(e)}))},methods:{getActivity:function(){return this.data.activity.slice(0,4)},getRestaurant:function(){return this.data.restaurant.slice(0,this.restaurantCount)},details_click:function(t){this.details_dialog=!0,console.log(t),this.details_info=t},chooseone:function(t,e){return null!=t?t:e}},computed:{restaurantCount:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 4;case"sm":return 6;case"md":return 9;case"lg":return 8;case"xl":return 10}}}},v=(s(426),s(115)),f=Object(v.a)(u,i,[],!1,null,"790735af",null);f.options.__file="src/vue/pages/Attractions.vue";e.default=f.exports}}]);