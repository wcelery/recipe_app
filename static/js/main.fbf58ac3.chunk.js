(this.webpackJsonprecipe_app=this.webpackJsonprecipe_app||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),i=a.n(r),l=(a(11),a(2)),s=a.n(l),u=a(5),o=a(1),p=(a(13),function(e){var t=e.title,a=e.calories,n=e.img,r=e.ingredients;return c.a.createElement("div",null,c.a.createElement("h3",null,t),c.a.createElement("p",null,"Calories: ",Math.floor(a)),c.a.createElement("div",{className:"content"},c.a.createElement("ol",null,r.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("img",{src:n,alt:""})))}),m=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),l=Object(o.a)(i,2),m=l[0],f=l[1],b=Object(n.useState)("chicken"),h=Object(o.a)(b,2),E=h[0],d=h[1];Object(n.useEffect)((function(){v()}),[E]);var v=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(E,"&app_id=").concat("d40f2a3f","&app_key=").concat("2af04ee6623b1c39659f66ad3e0512be"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),d(m)}},c.a.createElement("input",{className:"search",value:m,onChange:function(e){f(e.target.value)},type:"text"}),c.a.createElement("button",{className:"search-button"},"Search"),a.map((function(e){return c.a.createElement(p,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,img:e.recipe.image,ingredients:e.recipe.ingredients})}))))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.fbf58ac3.chunk.js.map