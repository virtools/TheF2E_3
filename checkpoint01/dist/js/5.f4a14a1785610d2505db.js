(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{471:function(t,e,n){},472:function(t,e,n){},473:function(t,e,n){},480:function(t,e,n){"use strict";n(471)},481:function(t,e,n){"use strict";n(472)},482:function(t,e,n){"use strict";n(473)},483:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"content"},[n("Header"),t._v(" "),n("v-main",{staticClass:"main min-h-800"},[n("v-sheet",{staticClass:"section d-flex justify-center align-center pa-2 pa-md-4 pb-0 pb-md-0",attrs:{id:"section01"}},[n("v-container",{staticClass:"pb-0"},[n("div",{staticClass:"d-flex justify-center align-center flex-column"},[n("div",{staticClass:"d-flex max-w-500 mb-8"},[n("v-select",{staticClass:"flex-1 mr-2",attrs:{items:t.cityInfo.items,label:"選擇縣市",solo:"",dense:"","hide-details":"",color:"primary","item-color":"primary"},on:{change:t.cityInfo_change},model:{value:t.cityInfo.value,callback:function(e){t.$set(t.cityInfo,"value",e)},expression:"cityInfo.value"}}),t._v(" "),n("v-select",{staticClass:"flex-1",attrs:{items:t.routeInfo.items,label:"選擇路線",solo:"",dense:"","hide-details":"","no-data-text":"無資料",color:"primary","item-color":"primary"},on:{change:t.routeInfo_change},model:{value:t.routeInfo.value,callback:function(e){t.$set(t.routeInfo,"value",e)},expression:"routeInfo.value"}})],1),t._v(" "),""!==t.routeInfo.value?n("v-item-group",{staticClass:"d-flex w-100 max-w-500",attrs:{mandatory:""},model:{value:t.routeIndex,callback:function(e){t.routeIndex=e},expression:"routeIndex"}},[n("v-item",{staticClass:"routeItem flex-1 text-center py-2 text-bold",scopedSlots:t._u([{key:"default",fn:function(e){e.active;var o=e.toggle;return[n("div",{on:{click:o}},[t._v("\n                往 "),n("span",{staticClass:"stopName"},[t._v(t._s(t.destinationStopName))])])]}}],null,!1,2996287081)}),t._v(" "),n("v-item",{staticClass:"routeItem flex-1 text-center py-2 text-bold",scopedSlots:t._u([{key:"default",fn:function(e){e.active;var o=e.toggle;return[n("div",{on:{click:o}},[t._v("\n                往 "),n("span",{staticClass:"stopName"},[t._v(t._s(t.departureStopName))])])]}}],null,!1,3805062945)})],1):t._e()],1)])],1),t._v(" "),n("v-sheet",{staticClass:"section d-flex justify-center align-center flex-column pb-8",attrs:{id:"section02"}},[n("div",{staticClass:"w-100 mb-4",attrs:{id:"card_shadow01"}})]),t._v(" "),n("v-sheet",{staticClass:"section d-flex justify-center align-center flex-column pb-8 flex-1",attrs:{id:"section03"}},[n("v-container",[n("div",{staticClass:"d-flex box min-h-600"},[""===t.routeInfo.value?[n("div",{staticClass:"pa-8 d-flex justify-center text-h6"},[t._v("請選擇公車路線")])]:0==t.routeIndex?[t.stopOfRoute.p.length>=10?n("div",{staticClass:"row"},[n("div",{staticClass:"col-n2"},t._l(t.stopOfRoute.p.slice(0,Math.round(t.stopOfRoute.p.length/2)),(function(t){return n("StopItem01",{key:t.StopID,attrs:{item:t}})})),1),t._v(" "),n("div",{staticClass:"col-n2"},t._l(t.stopOfRoute.p.slice(Math.round(t.stopOfRoute.p.length/2),t.stopOfRoute.p.length),(function(t){return n("StopItem01",{key:t.StopID,attrs:{item:t}})})),1)]):n("div",t._l(t.stopOfRoute.p,(function(t){return n("StopItem01",{key:t.StopID,attrs:{item:t}})})),1)]:1==t.routeIndex?[t.stopOfRoute.n.length>=10?n("div",{staticClass:"row"},[n("div",{staticClass:"col-n2"},t._l(t.stopOfRoute.n.slice(0,Math.round(t.stopOfRoute.n.length/2)),(function(t){return n("StopItem01",{key:t.StopID,attrs:{item:t}})})),1),t._v(" "),n("div",{staticClass:"col-n2"},t._l(t.stopOfRoute.n.slice(Math.round(t.stopOfRoute.n.length/2),t.stopOfRoute.n.length),(function(t){return n("StopItem01",{key:t.StopID,attrs:{item:t}})})),1)]):n("div",t._l(t.stopOfRoute.n,(function(t){return n("StopItem01",{key:t.StopID,attrs:{item:t}})})),1)]:t._e()],2)])],1)],1),t._v(" "),n("Footer")],1)};o._withStripped=!0;var i=n(450),s=n.n(i),r=n(460),a=n(461),c=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.finished?[this._t("content",null,{components:this.components})]:[e("div",{staticClass:"vh-70 d-flex align-center justify-center"},[e("v-progress-circular",{attrs:{indeterminate:"",size:"64"}},[this._v(this._s(Math.round(100*this.progress))+"%")])],1)]],2)};function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}c._withStripped=!0;var f={components:{},data:function(){return{finished:!1,progress:0,components:{}}},mounted:function(){},methods:{load:function(t){var e=this;return this.finished=!1,this.progress=0,function(t,e){var n=0,o=t.length,i=t.map((function(t){return t.src.then((function(t){return n++,e(n,o),Promise.resolve(t)}))}));return Promise.all(i).then((function(e){return e.map((function(e,n){return p(p({},t[n]),{},{component:e.default})}))}))}(t,(function(t,n){e.progress=t/n})).then((function(t){var n={};return t.forEach((function(t){n[t.name]=t.component})),e.components=n,e.finished=!0,n}))}},computed:{}},l=(n(480),n(140)),m=Object(l.a)(f,c,[],!1,null,"1ad06cf8",null);m.options.__file="src/vue/pages/components/LoadComponents.vue";var d=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stopItem pa-4 d-flex align-center",class:{noDeparture:!t.item.EstimateTime}},[n("div",{staticClass:"state min-w-120 mr-4 min-h-40 d-flex justify-center align-center text-bold",class:[t.getStateClass(t.item)]},[0===t.item.A2EventType?n("div",[t._v("離站中")]):1===t.item.A2EventType?n("div",[t._v("進站中")]):t.item.EstimateTime?n("div",[t._v(t._s(t.item.EstimateTime))]):n("div",[t._v("未發車")])]),t._v(" "),n("div",{staticClass:"text flex-1 text-bold"},[t._v(t._s(t.item.StopName.Zh_tw))])])};h._withStripped=!0;var v=n(444),O={mixins:[v.a],components:{},props:{item:{type:Object,default:null}},data:function(){return{}},mounted:function(){},methods:{getStateClass:function(t){return 0===t.A2EventType?"outDeparture":1===t.A2EventType?"inDeparture":t.EstimateTime?"":"noDeparture"}},computed:{}},y=(n(481),Object(l.a)(O,h,[],!1,null,"04e1e852",null));y.options.__file="src/vue/pages/components/StopItem01.vue";var _=y.exports,I=n(459);function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b={mixins:[v.a],components:{Header:r.a,Footer:a.a,LoadComponents:d,StopItem01:_},data:function(){return{cityInfo:{value:"",items:I.a},routeInfo:{value:"",items:[]},routeList:[],stopOfRoute:{p:[],n:[]},routeIndex:0,departureStopName:"",destinationStopName:"",dynamicID:0}},mounted:function(){this.updateRoute()},methods:{updateRoute:function(){var t=this,e=this.getAuthorizationHeader(),n=this.cityInfo.value,o={format:"JSON"};""!=n&&(o.filter="City eq '".concat(n,"'")),fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/Route/TaiwanTrip?".concat(this.parameterToStr(o)),{headers:g({},e)}).then((function(t){return t.json()})).then((function(e){t.routeList=e,t.routeInfo.items=t.routeList.map((function(t,e){return{text:t.TaiwanTripName.Zh_tw,value:e}}))}))},updateStopOfRoute:function(){var t=this,e=this.routeList[this.routeInfo.value];this.departureStopName=e.DepartureStopNameZh,this.destinationStopName=e.DestinationStopNameZh;var n=this.getAuthorizationHeader(),o=this.itemsFindValue(this.routeInfo.items,this.routeInfo.value).text;fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/StopOfRoute/TaiwanTrip/".concat(o,"?").concat(this.parameterToStr({format:"JSON"})),{headers:g({},n)}).then((function(t){return t.json()})).then((function(e){e[0]&&(t.stopOfRoute.p=e[0].Stops.map((function(t){return g(g({},t),{},{EstimateTime:"",A2EventType:""})}))),e[1]&&(t.stopOfRoute.n=e[1].Stops.map((function(t){return g(g({},t),{},{EstimateTime:"",A2EventType:""})}))),t.updateDynamic(),t.updateDynamicOn()}))},updateDynamicOn:function(){var t=this;clearInterval(this.dynamicID),this.dynamicID=setInterval((function(){t.updateDynamic()}),15e3)},updateDynamicOff:function(){clearInterval(this.dynamicID)},updateDynamic:function(){var t=this,e=this.getAuthorizationHeader(),n=this.itemsFindValue(this.routeInfo.items,this.routeInfo.value).text,o={format:"JSON"};fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/RealTimeNearStop/TaiwanTrip/".concat(n,"?").concat(this.parameterToStr(o)),{headers:g({},e)}).then((function(t){return t.json()})).then((function(e){t.stopOfRoute.p.forEach((function(t){t.A2EventType=""})),t.stopOfRoute.n.forEach((function(t){t.A2EventType=""})),e.forEach((function(e){t.stopOfRoute[e.Direction?"n":"p"].forEach((function(t){t.StopID==e.StopID&&(t.A2EventType=e.A2EventType)}))}))})),fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/EstimatedTimeOfArrival/TaiwanTrip/".concat(n,"?").concat(this.parameterToStr(o)),{headers:g({},e)}).then((function(t){return t.json()})).then((function(e){var n=Date.now();t.stopOfRoute.p.forEach((function(t){t.EstimateTime=""})),t.stopOfRoute.n.forEach((function(t){t.EstimateTime=""})),e.forEach((function(e){t.stopOfRoute[e.Direction?"n":"p"].forEach((function(t){if(t.StopID==e.StopID)if(e.EstimateTime){var o=new Date(n+1e3*e.EstimateTime);t.EstimateTime=o.toTimeString().substr(0,5)}else t.EstimateTime=""}))}))}))},cityInfo_change:function(t){this.updateRoute(),this.routeInfo.value="",this.stopOfRoute.p=[],this.stopOfRoute.n=[],this.departureStopName="",this.destinationStopName="",this.updateDynamicOff()},routeInfo_change:function(t){this.stopOfRoute.p=[],this.stopOfRoute.n=[],this.departureStopName="",this.destinationStopName="",this.updateStopOfRoute()},getStateClass:function(t){return 0===t.A2EventType?"outDeparture":1===t.A2EventType?"inDeparture":t.EstimateTime?"":"noDeparture"}},computed:{},beforeDestroy:function(){this.updateDynamicOff()}},x=(n(482),Object(l.a)(b,o,[],!1,null,"46e95a0e",null));x.options.__file="src/vue/pages/Transportation.vue";e.default=x.exports}}]);