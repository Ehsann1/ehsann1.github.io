(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b62f8"],{"1ba2":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[t._m(0),a("v-card",{staticClass:"resume-skill-box",attrs:{loading:!t.skills,dir:"ltr"}},t._l(t.skills,(function(s){return a("div",{key:s.name,staticClass:"skill"},[a("div",{staticClass:"skill-progress-background"},[t._v(t._s(s.name))]),a("div",{staticClass:"skill-progress text-right",style:"width:"+s.ratio+"%;"},[t._v(t._s(s.ratio)+"%")])])})),0)],1)},l=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"text-center ma-5"},[a("h1",[t._v("مهارت ها")])])}],e=a("bc3a"),n=a.n(e),r={name:"Resume",data:function(){return{skills:null}},created:function(){this.GetSkills()},methods:{GetSkills:function(){var t=this;n.a.get(this.BACKEND_DOMAIN+"/api/skill/list/").then((function(s){t.skills=s.data})).catch((function(t){console.log(t.response.data)}))}}},c=r,o=a("2877"),u=a("6544"),d=a.n(u),k=a("b0af"),f=Object(o["a"])(c,i,l,!1,null,null,null);s["default"]=f.exports;d()(f,{VCard:k["a"]})}}]);
//# sourceMappingURL=chunk-2d0b62f8.93748969.js.map