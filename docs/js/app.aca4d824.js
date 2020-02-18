(function(t){function e(e){for(var i,a,o=e[0],c=e[1],u=e[2],h=0,p=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(i=!1)}i&&(n.splice(e--,1),t=a(a.s=s[0]))}return t}var i={},r={app:0},n=[];function a(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=i,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/t-calc/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"0069":function(t,e,s){"use strict";var i=s("d8f7"),r=s.n(i);r.a},"11bc":function(t,e,s){},"50c1":function(t,e,s){},"5c0b":function(t,e,s){"use strict";var i=s("70c1"),r=s.n(i);r.a},6037:function(t,e,s){"use strict";var i=s("11bc"),r=s.n(i);r.a},6942:function(t,e,s){"use strict";var i=s("a342"),r=s.n(i);r.a},"70c1":function(t,e,s){},"97ef":function(t,e,s){},a342:function(t,e,s){},c5b5:function(t,e,s){"use strict";var i=s("ca7c"),r=s.n(i);r.a},ca7c:function(t,e,s){},cd49:function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Calculator")],1)},n=[],a=s("d4ec"),o=s("99de"),c=s("7e84"),u=s("262e"),l=s("9ab4"),h=s("60a3"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Title",{attrs:{title:"T-Calcurator"}}),s("p",{staticClass:"toggleIsSide"},[s("input",{ref:"toggleIsSide",attrs:{type:"checkbox",id:"toggleIsSide"},on:{change:t.toggleIsSide}}),s("label",{attrs:{for:"toggleIsSide"}},[t._v("計算履歴を常に表示する")])]),s("Errors",{attrs:{errors:t.errors}}),s("div",{ref:"calculatorWrap",staticClass:"calculator-wrap"},[s("div",{staticClass:"calculator"},[s("Display",{attrs:{current:t.current},on:{updateDisplay:t.updateDisplay}}),s("Buttons",{attrs:{operator:t.operator,numbers:t.numbers,operators:t.operators,actions:t.actions,isSide:t.isSide},on:{pushNumber:t.updateDisplay,delete:t.deleteLastNumber,pushAction:t.pushActionButton,pushOperation:t.pushOperationButton,showHistory:t.showHistory}})],1),s("History",{attrs:{className:["is-side",t.isShowHistory&&this.isSide?"is-shown":""]}})],1)],1)},b=[],f=s("bee2"),d=(s("c975"),s("fb6a"),s("a9e3"),s("ac1f"),s("1276"),function(){function t(){Object(a["a"])(this,t),this.current="0",this.temp=0,this.operator="",this.shouldClearDisplay=!1,this.errors=[]}return Object(f["a"])(t,[{key:"getCurrent",value:function(){return this.current}},{key:"getOperator",value:function(){return this.operator}},{key:"getErrors",value:function(){return this.errors}},{key:"updateDisplay",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e?this.inputNumber(t):this.pushNumberButton(t)}},{key:"pushNumberButton",value:function(t){"."===t&&this.current.indexOf(".")>-1?this.addError("小数点は2つ以上入力できません。"):(this.errors=[],this.operator&&this.shouldClearDisplay&&(this.current="0",this.shouldClearDisplay=!1),this.current="0"===this.current&&"."!==t?t:this.current+t)}},{key:"inputNumber",value:function(t){if(/^[-]?[0-9.]*$/.test(t))if(t.split(".").length>2)this.addError("小数点は2つ以上入力できません。");else{if(this.errors=[],""!==t||1!==this.current.length)return this.operator&&this.shouldClearDisplay?(this.current=t.slice(this.current.length),void(this.shouldClearDisplay=!1)):void(this.current="0"===this.current&&t.indexOf(".")<0?t.slice(1):t);this.current="0"}else this.addError("半角数字と小数点以外は入力できません。")}},{key:"addError",value:function(t){this.errors.indexOf(t)<0&&this.errors.push(t)}},{key:"deleteLastNumber",value:function(){1!==this.current.length?this.current=this.current.slice(0,-1):this.current="0"}},{key:"pushActionButton",value:function(t){"AC"===t&&this.clearAll(),"+/-"===t&&this.switchNegativeNumber(),"%"===t&&this.showPercentage()}},{key:"clearAll",value:function(){this.current="0",this.temp=0,this.operator="",this.errors=[],this.shouldClearDisplay=!1}},{key:"switchNegativeNumber",value:function(){this.current=String(-1*Number(this.current))}},{key:"showPercentage",value:function(){this.current=String(.01*Number(this.current))}},{key:"pushOperationButton",value:function(t){"="===t&&this.operator?this.calculate():(this.temp=Number(this.current),this.operator=t,this.shouldClearDisplay=!0)}},{key:"calculate",value:function(){"+"===this.operator&&this.add(),"-"===this.operator&&this.minus(),"×"===this.operator&&this.multiply(),"÷"===this.operator&&this.divide(),this.temp=0,this.operator="",this.shouldClearDisplay=!0}},{key:"add",value:function(){this.current=String(this.temp+Number(this.current))}},{key:"minus",value:function(){this.current=String(this.temp-Number(this.current))}},{key:"multiply",value:function(){this.current=String(this.temp*Number(this.current))}},{key:"divide",value:function(){this.current=String(this.temp/Number(this.current))}}]),t}());d.NUMBERS=[7,8,9,4,5,6,1,2,3,0,"."],d.OPERATORS=["÷","×","-","+","="],d.ACTIONS=["AC","+/-","%"];var v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"calculator-title"},[t._v(t._s(t.title))])},y=[],m=function(t){function e(){return Object(a["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(h["c"]);Object(l["a"])([Object(h["b"])()],m.prototype,"title",void 0),m=Object(l["a"])([h["a"]],m);var O=m,j=O,g=s("2877"),C=Object(g["a"])(j,v,y,!1,null,null,null),w=C.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"display"},[s("p",{staticClass:"display-formula"},[t._v("123 + 23")]),s("input",{ref:"display",class:["display-number",t.current.length>11?"is-long":"",t.current.length>15?"is-longer":"",t.current.length>18?"is-scrolled":""],attrs:{type:"text"},domProps:{value:t.current},on:{input:t.updateDisplay,blur:t.setFocus}})])},k=[],N=function(t){function e(){return Object(a["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(f["a"])(e,[{key:"mounted",value:function(){this.setFocus()}},{key:"getInput",value:function(){return this.$refs.display}},{key:"setFocus",value:function(){var t=this.getInput();t.focus(),t.setSelectionRange(t.value.length,t.value.length)}},{key:"updateDisplay",value:function(){this.$emit("updateDisplay",this.getInput().value,!0),this.$forceUpdate(),this.setFocus()}}]),e}(h["c"]);Object(l["a"])([Object(h["b"])()],N.prototype,"current",void 0),N=Object(l["a"])([h["a"]],N);var S=N,x=S,B=(s("c5b5"),Object(g["a"])(x,_,k,!1,null,"a4d95f28",null)),$=B.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"errors"},t._l(t.errors,(function(e,i){return s("li",{key:i},[t._v(" "+t._s(e)+" ")])})),0)},D=[],H=function(t){function e(){return Object(a["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(h["c"]);Object(l["a"])([Object(h["b"])()],H.prototype,"errors",void 0),H=Object(l["a"])([h["a"]],H);var A=H,I=A,P=(s("6037"),Object(g["a"])(I,E,D,!1,null,"d7f6ba08",null)),T=P.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"btns",staticClass:"btns-wrap"},[s("div",{staticClass:"btns-left"},[s("ul",{staticClass:"btns actions"},[s("li",{staticClass:"btns-item"},[s("button",{staticClass:"btn btn-actions"},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z"}})])])]),s("li",{staticClass:"btns-item"},[s("button",{staticClass:"btn btn-actions",on:{click:t.showHistory}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12h2c0 5.514 4.486 10 10 10s10-4.486 10-10-4.486-10-10-10c-2.777 0-5.287 1.141-7.099 2.977l2.061 2.061-6.962 1.354 1.305-7.013 2.179 2.18c2.172-2.196 5.182-3.559 8.516-3.559 6.627 0 12 5.373 12 12zm-13-6v8h7v-2h-5v-6h-2z"}})])])]),s("li",{staticClass:"btns-item"},[s("button",{staticClass:"btn btn-actions",on:{click:t.deleteLastNumber}},[s("svg",{attrs:{"clip-rule":"evenodd","fill-rule":"evenodd",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"m7 5h17v16h-17l-7-7.972zm7 6.586-2.586-2.586-1.414 1.414 2.586 2.586-2.586 2.586 1.414 1.414 2.586-2.586 2.586 2.586 1.414-1.414-2.586-2.586 2.586-2.586-1.414-1.414z"}})])])]),t._l(t.actions,(function(e,i){return s("li",{key:i,staticClass:"btns-item"},[s("Button",{attrs:{text:e,className:["btn-actions","AC"===e?"is-clear":""]},on:{pushButton:t.pushActionButton}})],1)}))],2),s("ul",{staticClass:"btns numbers"},t._l(t.numbers,(function(e,i){return s("li",{key:i,class:["btns-item",0===e?"is-zero":""]},[s("Button",{attrs:{text:e,className:"btn-numbers"},on:{pushButton:t.updateDisplay}})],1)})),0)]),s("ul",{staticClass:"btns-right operators"},t._l(t.operators,(function(e,i){return s("li",{key:i,class:["btns-item","="===e?"is-equal":""]},[s("Button",{attrs:{text:e,className:["btn-operators",t.addActiveClass(e)]},on:{pushButton:t.pushOperationButton}})],1)})),0),s("History",{on:{hideHistory:t.hideHistory}})],1)},M=[],z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{class:["btn",t.className?t.className:""],on:{click:t.pushButton}},[t._v(t._s(t.text))])},R=[],F=function(t){function e(){return Object(a["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(f["a"])(e,[{key:"pushButton",value:function(t){this.$emit("pushButton",t.target.innerHTML)}}]),e}(h["c"]);Object(l["a"])([Object(h["b"])()],F.prototype,"text",void 0),Object(l["a"])([Object(h["b"])()],F.prototype,"className",void 0),F=Object(l["a"])([h["a"]],F);var U=F,J=U,W=(s("0069"),Object(g["a"])(J,z,R,!1,null,"1996df8e",null)),q=W.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["history",t.className?t.className:""]},[s("p",{class:["history-close",t.className?"is-hidden":""],on:{click:t.hideHistory}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"#fff",width:"24",height:"24",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"}})])]),t._m(0)])},K=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"history-list"},[s("li",{staticClass:"history-item"},[t._v("123 + 23 = 146")]),s("li",{staticClass:"history-item"},[t._v("123 + 23 = 146")]),s("li",{staticClass:"history-item"},[t._v("123 + 23 = 146")]),s("li",{staticClass:"history-item"},[t._v("123 + 23 = 146")]),s("li",{staticClass:"history-item"},[t._v("123 + 23 = 146")]),s("li",{staticClass:"history-item"},[t._v("123 + 23 = 146")]),s("li",{staticClass:"history-item"},[t._v("123 + 23 = 146")]),s("li",{staticClass:"history-item"},[t._v("123 + 23 = 146")]),s("li",{staticClass:"history-item"},[t._v("123 + 23 = 146")]),s("li",{staticClass:"history-item"},[t._v("123 + 23 = 146")]),s("li",{staticClass:"history-item"},[t._v("123 + 23 = 146")]),s("li",{staticClass:"history-item"},[t._v("123 + 23 = 146")]),s("li",{staticClass:"history-item"},[t._v("123 + 23 = 146")]),s("li",{staticClass:"history-item"},[t._v("123 + 23 = 146")]),s("li",{staticClass:"history-item"},[t._v("123 + 23 = 146")])])}],Q=function(t){function e(){return Object(a["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(f["a"])(e,[{key:"hideHistory",value:function(){this.$emit("hideHistory")}}]),e}(h["c"]);Object(l["a"])([Object(h["b"])()],Q.prototype,"className",void 0),Q=Object(l["a"])([h["a"]],Q);var V=Q,X=V,Y=(s("f864"),Object(g["a"])(X,G,K,!1,null,"076834ba",null)),Z=Y.exports,tt=function(t){function e(){return Object(a["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(f["a"])(e,[{key:"addActiveClass",value:function(t){if(t===this.operator)return"is-active"}},{key:"updateDisplay",value:function(t){this.$emit("pushNumber",t)}},{key:"deleteLastNumber",value:function(){this.$emit("delete")}},{key:"pushActionButton",value:function(t){this.$emit("pushAction",t)}},{key:"pushOperationButton",value:function(t){this.$emit("pushOperation",t)}},{key:"showHistory",value:function(){if(this.isSide)this.$emit("showHistory");else{var t=this.$refs.btns;t.classList.add("is-shown")}}},{key:"hideHistory",value:function(){var t=this.$refs.btns;t.classList.remove("is-shown")}}]),e}(h["c"]);Object(l["a"])([Object(h["b"])()],tt.prototype,"operator",void 0),Object(l["a"])([Object(h["b"])()],tt.prototype,"numbers",void 0),Object(l["a"])([Object(h["b"])()],tt.prototype,"operators",void 0),Object(l["a"])([Object(h["b"])()],tt.prototype,"actions",void 0),Object(l["a"])([Object(h["b"])()],tt.prototype,"isSide",void 0),tt=Object(l["a"])([Object(h["a"])({components:{Button:q,History:Z}})],tt);var et=tt,st=et,it=(s("e7ec"),Object(g["a"])(st,L,M,!1,null,"2765907e",null)),rt=it.exports,nt=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.store=new d,t.current=t.store.getCurrent(),t.operator=t.store.getOperator(),t.errors=t.store.getErrors(),t.numbers=d.NUMBERS,t.operators=d.OPERATORS,t.actions=d.ACTIONS,t.isSide=!1,t.isShowHistory=!1,t}return Object(u["a"])(e,t),Object(f["a"])(e,[{key:"update",value:function(){this.current=this.store.getCurrent(),this.operator=this.store.getOperator(),this.errors=this.store.getErrors()}},{key:"updateDisplay",value:function(t,e){this.store.updateDisplay(t,e),this.update()}},{key:"deleteLastNumber",value:function(){this.store.deleteLastNumber(),this.update()}},{key:"pushActionButton",value:function(t){this.store.pushActionButton(t),this.update()}},{key:"pushOperationButton",value:function(t){this.store.pushOperationButton(t),this.update()}},{key:"showHistory",value:function(){this.isShowHistory=!this.isShowHistory}},{key:"toggleIsSide",value:function(){var t=this.$refs.toggleIsSide,e=this.$refs.calculatorWrap;e.classList.toggle("is-side"),this.isSide=t.checked}}]),e}(h["c"]);nt=Object(l["a"])([Object(h["a"])({components:{Title:w,Display:$,Errors:T,Buttons:rt,History:Z}})],nt);var at=nt,ot=at,ct=(s("6942"),Object(g["a"])(ot,p,b,!1,null,"fb79881a",null)),ut=ct.exports,lt=function(t){function e(){return Object(a["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(h["c"]);lt=Object(l["a"])([Object(h["a"])({components:{Calculator:ut}})],lt);var ht=lt,pt=ht,bt=(s("5c0b"),Object(g["a"])(pt,r,n,!1,null,null,null)),ft=bt.exports,dt=s("2f62");i["a"].use(dt["a"]);var vt=new dt["a"].Store({state:{},mutations:{},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({store:vt,render:function(t){return t(ft)}}).$mount("#app")},d8f7:function(t,e,s){},e7ec:function(t,e,s){"use strict";var i=s("97ef"),r=s.n(i);r.a},f864:function(t,e,s){"use strict";var i=s("50c1"),r=s.n(i);r.a}});
//# sourceMappingURL=app.aca4d824.js.map