(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2ec8"],{"25d3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[t.isLoading?a("Spinner"):[a("div",[a("h1",[t._v(t._s(t.restaurant.name))]),a("span",{staticClass:"badge bg-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),a("hr"),a("ul",[a("li",[t._v("評論數： "+t._s(t.restaurant.commentsLength))]),a("li",[t._v("瀏覽次數： "+t._s(t.restaurant.viewCounts))])]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")])]],2)},r=[],s=a("5530"),c=a("1da1"),i=(a("96cf"),a("b0c0"),a("c4c3")),o=a("2375"),u=a("2fa3"),d={name:"RestaurantDashbaord",components:{Spinner:o["a"]},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",commentsLength:0,viewCounts:0},isLoading:!0}},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},beforeRouteUpdate:function(t,e,a){var n=t.params.id;this.fetchRestaurant(n),a()},methods:{fetchRestaurant:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n,r,c,o,d,m,l,h;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i["a"].getRestaurant({restaurantId:t});case 3:n=a.sent,r=n.data,c=r.restaurant,o=c.id,d=c.name,m=c.Category,l=c.Comments,h=c.viewCounts,e.restaurant=Object(s["a"])(Object(s["a"])({},e.restaurant),{},{id:o,name:d,categoryName:m?m.name:"未分類",commentsLength:l.length,viewCounts:h}),e.isLoading=!1,a.next=15;break;case 10:a.prev=10,a.t0=a["catch"](0),e.isLoading=!1,console.log(a.t0),u["a"].fire({icon:"error",title:"暫時無法載入餐廳資料，請稍後再試！"});case 15:case"end":return a.stop()}}),a,null,[[0,10]])})))()}}},m=d,l=a("2877"),h=Object(l["a"])(m,n,r,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0b2ec8.0030fcc1.js.map