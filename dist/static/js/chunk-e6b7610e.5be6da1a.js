(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6b7610e"],{"13d5":function(e,t,n){"use strict";var r=n("23e7"),o=n("d58f").left,a=n("a640"),i=n("2d00"),u=n("605d"),f=a("reduce"),l=!u&&i>79&&i<83;r({target:"Array",proto:!0,forced:!f||l},{reduce:function(e){return o(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"45fc":function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").some,a=n("a640"),i=a("some");r({target:"Array",proto:!0,forced:!i},{some:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"4de4":function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").filter,a=n("1dde"),i=a("filter");r({target:"Array",proto:!0,forced:!i},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"7a82":function(e,t,n){var r=n("23e7"),o=n("83ab"),a=n("9bf2");r({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:a.f})},"7db0":function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").find,a=n("44d2"),i="find",u=!0;i in[]&&Array(1)[i]((function(){u=!1})),r({target:"Array",proto:!0,forced:u},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a(i)},"9a01":function(e,t,n){},b64b:function(e,t,n){var r=n("23e7"),o=n("7b0b"),a=n("df75"),i=n("d039"),u=i((function(){a(1)}));r({target:"Object",stat:!0,forced:u},{keys:function(e){return a(o(e))}})},d434:function(e,t,n){},d58f:function(e,t,n){var r=n("1c0b"),o=n("7b0b"),a=n("44ad"),i=n("50c4"),u=function(e){return function(t,n,u,f){r(n);var l=o(t),c=a(l),s=i(l.length),d=e?s-1:0,p=e?-1:1;if(u<2)while(1){if(d in c){f=c[d],d+=p;break}if(d+=p,e?d<0:s<=d)throw TypeError("Reduce of empty array with no initial value")}for(;e?d>=0:s>d;d+=p)d in c&&(f=n(f,c[d],d,l));return f}};e.exports={left:u(!1),right:u(!0)}},d81d:function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").map,a=n("1dde"),i=a("map");r({target:"Array",proto:!0,forced:!i},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},f0c2:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{attrs:{"label-width":"100px"}},e._l(e.config,(function(e,t){return n("FormItemDemo",{key:t,attrs:{"item-config":e}})})),1)],1)},o=[];n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}n("277d");var i=n("06c5");function u(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Object(i["a"])(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,f=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){f=!0,a=e},f:function(){try{u||null==n["return"]||n["return"]()}finally{if(f)throw a}}}}n("4de4"),n("45fc"),n("7db0"),n("d81d"),n("13d5"),n("b64b"),n("7a82");var f=[{type:"el-input",label:"活动名称",formKey:"name",value:"",options:{vIf:[{relationKey:"area",value:"area1"},{relationKey:"area2",value:"areaa"}]}},{type:"el-select",label:"活动区域",formKey:"area",value:"area1",options:{multiple:!0},optionData:[{label:"区域1",value:"area1"},{label:"区域2",value:"area2"}]},{type:"el-select",label:"活动区域2",formKey:"area2",value:"areaa",options:{multiple:!0},optionData:[{label:"区域1",value:"areaa"},{label:"区域2",value:"areaaa"}]}];function l(e){return e.reduce((function(e,t){console.log(t,"cur");for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];"value"!==o&&Object.defineProperty(t,[o],{enumerable:!1})}return e.push(t),e}),[])}l(f);var c,s,d=f,p={name:"FormItemDemo",props:{itemConfig:{type:Object,default:function(){}}},computed:{componentShow:function(){var e,t=null===(e=this.itemConfig)||void 0===e?void 0:e.options.vIf;if(!t)return!0;var n,r=d.filter((function(e){return t.some((function(t){return t.relationKey===e.formKey}))})),o=u(r);try{var i=function(){var e=n.value,r=t.find((function(t){return t.relationKey===e.formKey}));if(e.value!==r.value)return{v:!1}};for(o.s();!(n=o.n()).done;){var f=i();if("object"===a(f))return f.v}}catch(l){o.e(l)}finally{o.f()}return!0}},render:function(e){var t=this;if(this.componentShow)return console.log(this.itemConfig),e("el-form-item",{props:{label:this.itemConfig.label}},[e(this.itemConfig.type,{props:{value:this.itemConfig.value},on:{input:function(e){t.itemConfig.value=e}}},this.itemConfig.optionData&&this.itemConfig.optionData.map((function(t){return e("el-option",{props:{label:t.label,value:t.value}})})))])}},m=p,b=(n("f80a"),n("2877")),v=Object(b["a"])(m,c,s,!1,null,"c30a605a",null),y=v.exports,h={components:{FormItemDemo:y},data:function(){return{config:d}},created:function(){},mounted:function(){},methods:{}},g=h,w=(n("f7e8"),Object(b["a"])(g,r,o,!1,null,"26922a86",null));t["default"]=w.exports},f7e8:function(e,t,n){"use strict";n("9a01")},f80a:function(e,t,n){"use strict";n("d434")}}]);
//# sourceMappingURL=chunk-e6b7610e.5be6da1a.js.map