(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b62f8"],{"1ba2":function(e,s,l){"use strict";l.r(s);var t=function(){var e=this,s=e.$createElement,l=e._self._c||s;return l("div",{staticClass:"container"},[e._m(0),l("v-card",{staticClass:"resume-skill-box",attrs:{loading:!e.skills,dir:"ltr"}},e._l(e.skills,(function(s){return l("div",{key:s.name,staticClass:"skill"},[e.screen_width<600?l("div",[s.name.length<7?l("div",{staticClass:"skill-progress-background"},[e._v(e._s(s.name))]):l("div",{staticClass:"skill-progress-background"},[e._v(e._s(s.name.slice(0,7))+"...")])]):l("div",{staticClass:"skill-progress-background"},[e._v(e._s(s.name))]),l("div",{staticClass:"skill-progress text-right",style:"width:"+s.level+"%;"})])})),0)],1)},i=[function(){var e=this,s=e.$createElement,l=e._self._c||s;return l("div",{staticClass:"text-center ma-5"},[l("h1",[e._v("مهارت ها")])])}],n=l("bc3a"),a=l.n(n),r={name:"Resume",data:function(){return{screen_width:screen.width,skills:[{id:1,name:"Python",level:"70"},{id:1,name:"Django",level:"60"},{id:1,name:"DRF",level:"50"},{id:1,name:"Vue Cli",level:"40"},{id:1,name:"Vuetify",level:"40"},{id:1,name:"Git",level:"40"},{id:1,name:"Linux",level:"30"},{id:1,name:"Docker",level:"30"}]}},created:function(){},methods:{GetSkills:function(){var e=this;a.a.get(this.BACKEND_DOMAIN+"/resume/skill/").then((function(s){e.skills=s.data})).catch((function(e){console.log(e.response.data)}))}}},c=r,d=l("2877"),o=l("6544"),u=l.n(o),v=l("b0af"),m=Object(d["a"])(c,t,i,!1,null,null,null);s["default"]=m.exports;u()(m,{VCard:v["a"]})}}]);
//# sourceMappingURL=chunk-2d0b62f8.909a901f.js.map