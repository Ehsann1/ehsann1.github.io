(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05a6b0e4"],{"4ec9":function(e,t,n){"use strict";var r=n("6d61"),i=n("6566");r("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),i)},"62ad":function(e,t,n){"use strict";var r=n("ade3"),i=n("5530"),o=(n("d3b7"),n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),a=n("d9f7"),s=n("80d2"),u=["sm","md","lg","xl"],c=function(){return u.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),l=function(){return u.reduce((function(e,t){return e["offset"+Object(s["r"])(t)]={type:[String,Number],default:null},e}),{})}(),f=function(){return u.reduce((function(e,t){return e["order"+Object(s["r"])(t)]={type:[String,Number],default:null},e}),{})}(),d={col:Object.keys(c),offset:Object.keys(l),order:Object.keys(f)};function v(e,t,n){var r=e;if(null!=n&&!1!==n){if(t){var i=t.replace(e,"");r+="-".concat(i)}return"col"!==e||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var b=new Map;t["a"]=o["a"].extend({name:"v-col",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({cols:{type:[Boolean,String,Number],default:!1}},c),{},{offset:{type:[String,Number],default:null}},l),{},{order:{type:[String,Number],default:null}},f),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,i=t.data,o=t.children,s=(t.parent,"");for(var u in n)s+=String(n[u]);var c=b.get(s);return c||function(){var e,t;for(t in c=[],d)d[t].forEach((function(e){var r=n[e],i=v(t,e,r);i&&c.push(i)}));var i=c.some((function(e){return e.startsWith("col-")}));c.push((e={col:!i||!n.cols},Object(r["a"])(e,"col-".concat(n.cols),n.cols),Object(r["a"])(e,"offset-".concat(n.offset),n.offset),Object(r["a"])(e,"order-".concat(n.order),n.order),Object(r["a"])(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),b.set(s,c)}(),e(n.tag,Object(a["a"])(i,{class:c}),o)}})},6566:function(e,t,n){"use strict";var r=n("9bf2").f,i=n("7c73"),o=n("e2cc"),a=n("0366"),s=n("19aa"),u=n("2266"),c=n("7dd0"),l=n("2626"),f=n("83ab"),d=n("f183").fastKey,v=n("69f3"),b=v.set,p=v.getterFor;e.exports={getConstructor:function(e,t,n,c){var l=e((function(e,r){s(e,v),b(e,{type:t,index:i(null),first:void 0,last:void 0,size:0}),f||(e.size=0),void 0!=r&&u(r,e[c],{that:e,AS_ENTRIES:n})})),v=l.prototype,h=p(t),g=function(e,t,n){var r,i,o=h(e),a=x(e,t);return a?a.value=n:(o.last=a={index:i=d(t,!0),key:t,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=a),r&&(r.next=a),f?o.size++:e.size++,"F"!==i&&(o.index[i]=a)),e},x=function(e,t){var n,r=h(e),i=d(t);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==t)return n};return o(v,{clear:function(){var e=this,t=h(e),n=t.index,r=t.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;t.first=t.last=void 0,f?t.size=0:e.size=0},delete:function(e){var t=this,n=h(t),r=x(t,e);if(r){var i=r.next,o=r.previous;delete n.index[r.index],r.removed=!0,o&&(o.next=i),i&&(i.previous=o),n.first==r&&(n.first=i),n.last==r&&(n.last=o),f?n.size--:t.size--}return!!r},forEach:function(e){var t,n=h(this),r=a(e,arguments.length>1?arguments[1]:void 0);while(t=t?t.next:n.first){r(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!x(this,e)}}),o(v,n?{get:function(e){var t=x(this,e);return t&&t.value},set:function(e,t){return g(this,0===e?0:e,t)}}:{add:function(e){return g(this,e=0===e?0:e,e)}}),f&&r(v,"size",{get:function(){return h(this).size}}),l},setStrong:function(e,t,n){var r=t+" Iterator",i=p(t),o=p(r);c(e,t,(function(e,t){b(this,{type:r,target:e,state:i(e),kind:t,last:void 0})}),(function(){var e=o(this),t=e.kind,n=e.last;while(n&&n.removed)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(t)}}},"6d61":function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("e330"),a=n("94ca"),s=n("6eeb"),u=n("f183"),c=n("2266"),l=n("19aa"),f=n("1626"),d=n("861d"),v=n("d039"),b=n("1c7e"),p=n("d44e"),h=n("7156");e.exports=function(e,t,n){var g=-1!==e.indexOf("Map"),x=-1!==e.indexOf("Weak"),y=g?"set":"add",m=i[e],w=m&&m.prototype,S=m,k={},O=function(e){var t=o(w[e]);s(w,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(x&&!d(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return x&&!d(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(x&&!d(e))&&t(this,0===e?0:e)}:function(e,n){return t(this,0===e?0:e,n),this})},j=a(e,!f(m)||!(x||w.forEach&&!v((function(){(new m).entries().next()}))));if(j)S=n.getConstructor(t,e,g,y),u.enable();else if(a(e,!0)){var z=new S,C=z[y](x?{}:-0,1)!=z,_=v((function(){z.has(1)})),E=b((function(e){new m(e)})),I=!x&&v((function(){var e=new m,t=5;while(t--)e[y](t,t);return!e.has(-0)}));E||(S=t((function(e,t){l(e,w);var n=h(new m,e,S);return void 0!=t&&c(t,n[y],{that:n,AS_ENTRIES:g}),n})),S.prototype=w,w.constructor=S),(_||I)&&(O("delete"),O("has"),g&&O("get")),(I||C)&&O(y),x&&w.clear&&delete w.clear}return k[e]=S,r({global:!0,forced:S!=m},k),p(S,e),x||n.setStrong(S,e,g),S}},f820:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("About Page")]),n("div",{staticClass:"container"},[n("p",{attrs:{dir:"ltr"}},[e._v(" I love programming and I do it with interest. I mostly work as a freelancer. My specialty is web development and I use technologies like Django, Vue Js and so on. ")]),n("div",{staticClass:"row about-boxs"},[n("v-col",{staticClass:"about-box row"},[n("v-icon",{staticStyle:{"font-size":"5em"},attrs:{large:"",color:"#0D86FF"}},[e._v("mdi-pencil-ruler")]),n("div",{staticClass:"about-box-title mr-5 "},[e._v(" طراحی وب سایت ")])],1),n("v-col",{staticClass:"about-box row"},[n("v-icon",{staticStyle:{"font-size":"5em"},attrs:{large:"",color:"#0D86FF"}},[e._v("mdi-web")]),n("div",{staticClass:"about-box-title mr-5 "},[e._v(" توسعه وب سایت ")]),n("br")],1)],1)])])},i=[],o={name:"About"},a=o,s=n("2877"),u=n("6544"),c=n.n(u),l=n("62ad"),f=n("132d"),d=Object(s["a"])(a,r,i,!1,null,null,null);t["default"]=d.exports;c()(d,{VCol:l["a"],VIcon:f["a"]})}}]);
//# sourceMappingURL=chunk-05a6b0e4.affe32c8.js.map