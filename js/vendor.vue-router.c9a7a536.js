"use strict";(self["webpackChunkthedaoscapefrontend"]=self["webpackChunkthedaoscapefrontend"]||[]).push([[7606],{79582:(e,t,n)=>{n.d(t,{PO:()=>z,p7:()=>tt});var r=n(34182),o=n(40019);
/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const a="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,c=e=>a?Symbol(e):"_vr_"+e,s=c("rvlm"),i=c("rvd"),l=c("r"),u=c("rl"),f=c("rvl"),p="undefined"!==typeof window;function h(e){return e.__esModule||a&&"Module"===e[Symbol.toStringTag]}const d=Object.assign;function m(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const g=()=>{};const v=/\/$/,y=e=>e.replace(v,"");function b(e,t,n="/"){let r,o={},a="",c="";const s=t.indexOf("?"),i=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),a=t.slice(s+1,i>-1?i:t.length),o=e(a)),i>-1&&(r=r||t.slice(0,i),c=t.slice(i,t.length)),r=C(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+c,path:r,query:o,hash:c}}function w(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function E(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function k(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&R(t.matched[r],n.matched[o])&&A(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function R(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function A(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!O(e[n],t[n]))return!1;return!0}function O(e,t){return Array.isArray(e)?P(e,t):Array.isArray(t)?P(t,e):e===t}function P(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function C(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,c=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],1!==c&&"."!==a){if(".."!==a)break;c--}return n.slice(0,c).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var x,$;(function(e){e["pop"]="pop",e["push"]="push"})(x||(x={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}($||($={}));function j(e){if(!e)if(p){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),y(e)}const S=/^[^#]+#/;function q(e,t){return e.replace(S,"#")+t}function L(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const _=()=>({left:window.pageXOffset,top:window.pageYOffset});function B(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=L(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function G(e,t){const n=history.state?history.state.position-t:-1;return n+e}const M=new Map;function I(e,t){M.set(e,t)}function T(e){const t=M.get(e);return M.delete(e),t}let U=()=>location.protocol+"//"+location.host;function F(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),E(n,"")}const c=E(n,e);return c+r+o}function W(e,t,n,r){let o=[],a=[],c=null;const s=({state:a})=>{const s=F(e,location),i=n.value,l=t.value;let u=0;if(a){if(n.value=s,t.value=a,c&&c===i)return void(c=null);u=l?a.position-l.position:0}else r(s);o.forEach((e=>{e(n.value,i,{delta:u,type:x.pop,direction:u?u>0?$.forward:$.back:$.unknown})}))};function i(){c=n.value}function l(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(d({},e.state,{scroll:_()}),"")}function f(){for(const e of a)e();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",u),{pauseListeners:i,listen:l,destroy:f}}function D(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?_():null}}function V(e){const{history:t,location:n}=window,r={value:F(e,n)},a={value:t.state};function c(r,c,s){const i=e.indexOf("#"),l=i>-1?(n.host&&document.querySelector("base")?e:e.slice(i))+r:U()+e+r;try{t[s?"replaceState":"pushState"](c,"",l),a.value=c}catch(u){o.error(u),n[s?"replace":"assign"](l)}}function s(e,n){const o=d({},t.state,D(a.value.back,e,a.value.forward,!0),n,{position:a.value.position});c(e,o,!0),r.value=e}function i(e,n){const o=d({},a.value,t.state,{forward:e,scroll:_()});c(o.current,o,!0);const s=d({},D(r.value,e,null),{position:o.position+1},n);c(e,s,!1),r.value=e}return a.value||c(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:a,push:i,replace:s}}function z(e){e=j(e);const t=V(e),n=W(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const o=d({location:"",base:e,go:r,createHref:q.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function K(e){return"string"===typeof e||e&&"object"===typeof e}function H(e){return"string"===typeof e||"symbol"===typeof e}const Q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},X=c("nf");var Y;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Y||(Y={}));function N(e,t){return d(new Error,{type:e,[X]:!0},t)}function Z(e,t){return e instanceof Error&&X in e&&(null==t||!!(e.type&t))}const J="[^/]+?",ee={sensitive:!1,strict:!1,start:!0,end:!0},te=/[.+*?^${}()[\]/\\]/g;function ne(e,t){const n=d({},ee,t),r=[];let o=n.start?"^":"";const a=[];for(const u of e){const e=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let t=0;t<u.length;t++){const r=u[t];let c=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(te,"\\$&"),c+=40;else if(1===r.type){const{value:e,repeatable:n,optional:s,regexp:i}=r;a.push({name:e,repeatable:n,optional:s});const f=i||J;if(f!==J){c+=10;try{new RegExp(`(${f})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+l.message)}}let p=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;t||(p=s&&u.length<2?`(?:/${p})`:"/"+p),s&&(p+="?"),o+=p,c+=20,s&&(c+=-8),n&&(c+=-20),".*"===f&&(c+=-50)}e.push(c)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const c=new RegExp(o,n.sensitive?"":"i");function s(e){const t=e.match(c),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=a[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n}function i(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:c,optional:s}=e,i=a in t?t[a]:"";if(Array.isArray(i)&&!c)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(i)?i.join("/"):i;if(!l){if(!s)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}return{re:c,score:r,keys:a,parse:s,stringify:i}}function re(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function oe(e,t){let n=0;const r=e.score,o=t.score;while(n<r.length&&n<o.length){const e=re(r[n],o[n]);if(e)return e;n++}return o.length-r.length}const ae={type:0,value:""},ce=/[a-zA-Z0-9_]/;function se(e){if(!e)return[[]];if("/"===e)return[[ae]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const o=[];let a;function c(){a&&o.push(a),a=[]}let s,i=0,l="",u="";function f(){l&&(0===n?a.push({type:0,value:l}):1===n||2===n||3===n?(a.length>1&&("*"===s||"+"===s)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),l="")}function p(){l+=s}while(i<e.length)if(s=e[i++],"\\"!==s||2===n)switch(n){case 0:"/"===s?(l&&f(),c()):":"===s?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===s?n=2:ce.test(s)?p():(f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&i--);break;case 2:")"===s?"\\"==u[u.length-1]?u=u.slice(0,-1)+s:n=3:u+=s;break;case 3:f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&i--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),f(),c(),o}function ie(e,t,n){const r=ne(se(e.path),n);const o=d(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function le(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function a(e,n,r){const o=!r,s=fe(e);s.aliasOf=r&&r.record;const l=me(t,e),u=[s];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(d({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s}))}let f,p;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=ie(t,n,l),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),o&&e.name&&!he(f)&&c(e.name)),"children"in s){const e=s.children;for(let t=0;t<e.length;t++)a(e[t],f,r&&r.children[t])}r=r||f,i(f)}return p?()=>{c(p)}:g}function c(e){if(H(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(c),t.alias.forEach(c))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(c),e.alias.forEach(c))}}function s(){return n}function i(e){let t=0;while(t<n.length&&oe(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ge(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!he(e)&&r.set(e.record.name,e)}function l(e,t){let o,a,c,s={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw N(1,{location:e});c=o.record.name,s=d(ue(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),a=o.stringify(s)}else if("path"in e)a=e.path,o=n.find((e=>e.re.test(a))),o&&(s=o.parse(a),c=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw N(1,{location:e,currentLocation:t});c=o.record.name,s=d({},t.params,e.params),a=o.stringify(s)}const i=[];let l=o;while(l)i.unshift(l.record),l=l.parent;return{name:c,path:a,params:s,matched:i,meta:de(i)}}return t=me({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>a(e))),{addRoute:a,resolve:l,removeRoute:c,getRoutes:s,getRecordMatcher:o}}function ue(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function fe(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:pe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function pe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function he(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function de(e){return e.reduce(((e,t)=>d(e,t.meta)),{})}function me(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ge(e,t){return t.children.some((t=>t===e||ge(e,t)))}const ve=/#/g,ye=/&/g,be=/\//g,we=/=/g,Ee=/\?/g,ke=/\+/g,Re=/%5B/g,Ae=/%5D/g,Oe=/%5E/g,Pe=/%60/g,Ce=/%7B/g,xe=/%7C/g,$e=/%7D/g,je=/%20/g;function Se(e){return encodeURI(""+e).replace(xe,"|").replace(Re,"[").replace(Ae,"]")}function qe(e){return Se(e).replace(Ce,"{").replace($e,"}").replace(Oe,"^")}function Le(e){return Se(e).replace(ke,"%2B").replace(je,"+").replace(ve,"%23").replace(ye,"%26").replace(Pe,"`").replace(Ce,"{").replace($e,"}").replace(Oe,"^")}function _e(e){return Le(e).replace(we,"%3D")}function Be(e){return Se(e).replace(ve,"%23").replace(Ee,"%3F")}function Ge(e){return null==e?"":Be(e).replace(be,"%2F")}function Me(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Ie(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const e=r[o].replace(ke," "),n=e.indexOf("="),a=Me(n<0?e:e.slice(0,n)),c=n<0?null:Me(e.slice(n+1));if(a in t){let e=t[a];Array.isArray(e)||(e=t[a]=[e]),e.push(c)}else t[a]=c}return t}function Te(e){let t="";for(let n in e){const r=e[n];if(n=_e(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const o=Array.isArray(r)?r.map((e=>e&&Le(e))):[r&&Le(r)];o.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Ue(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function Fe(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function We(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((c,s)=>{const i=e=>{!1===e?s(N(4,{from:n,to:t})):e instanceof Error?s(e):K(e)?s(N(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"===typeof e&&a.push(e),c())},l=e.call(r&&r.instances[o],t,n,i);let u=Promise.resolve(l);e.length<3&&(u=u.then(i)),u.catch((e=>s(e)))}))}function De(e,t,n,r){const o=[];for(const a of e)for(const e in a.components){let c=a.components[e];if("beforeRouteEnter"===t||a.instances[e])if(Ve(c)){const s=c.__vccOpts||c,i=s[t];i&&o.push(We(i,n,r,a,e))}else{let s=c();0,o.push((()=>s.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${a.path}"`));const c=h(o)?o.default:o;a.components[e]=c;const s=c.__vccOpts||c,i=s[t];return i&&We(i,n,r,a,e)()}))))}}return o}function Ve(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function ze(e){const t=(0,r.inject)(l),n=(0,r.inject)(u),o=(0,r.computed)((()=>t.resolve((0,r.unref)(e.to)))),a=(0,r.computed)((()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],a=n.matched;if(!r||!a.length)return-1;const c=a.findIndex(R.bind(null,r));if(c>-1)return c;const s=Ye(e[t-2]);return t>1&&Ye(r)===s&&a[a.length-1].path!==s?a.findIndex(R.bind(null,e[t-2])):c})),c=(0,r.computed)((()=>a.value>-1&&Xe(n.params,o.value.params))),s=(0,r.computed)((()=>a.value>-1&&a.value===n.matched.length-1&&A(n.params,o.value.params)));function i(n={}){return Qe(n)?t[(0,r.unref)(e.replace)?"replace":"push"]((0,r.unref)(e.to)).catch(g):Promise.resolve()}return{route:o,href:(0,r.computed)((()=>o.value.href)),isActive:c,isExactActive:s,navigate:i}}const Ke=(0,r.defineComponent)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ze,setup(e,{slots:t}){const n=(0,r.reactive)(ze(e)),{options:o}=(0,r.inject)(l),a=(0,r.computed)((()=>({[Ne(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Ne(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const o=t.default&&t.default(n);return e.custom?o:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},o)}}}),He=Ke;function Qe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Xe(e,t){for(const n in t){const r=t[n],o=e[n];if("string"===typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ne=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.defineComponent)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const o=(0,r.inject)(f),a=(0,r.computed)((()=>e.route||o.value)),c=(0,r.inject)(i,0),l=(0,r.computed)((()=>a.value.matched[c]));(0,r.provide)(i,c+1),(0,r.provide)(s,l),(0,r.provide)(f,a);const u=(0,r.ref)();return(0,r.watch)((()=>[u.value,l.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&R(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const o=a.value,c=l.value,s=c&&c.components[e.name],i=e.name;if(!s)return Je(n.default,{Component:s,route:o});const f=c.props[e.name],p=f?!0===f?o.params:"function"===typeof f?f(o):f:null,h=e=>{e.component.isUnmounted&&(c.instances[i]=null)},m=(0,r.h)(s,d({},p,t,{onVnodeUnmounted:h,ref:u}));return Je(n.default,{Component:m,route:o})||m}}});function Je(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Ze;function tt(e){const t=le(e.routes,e),n=e.parseQuery||Ie,a=e.stringifyQuery||Te,c=e.history;const s=Fe(),i=Fe(),h=Fe(),v=(0,r.shallowRef)(Q);let y=Q;p&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const E=m.bind(null,(e=>""+e)),R=m.bind(null,Ge),A=m.bind(null,Me);function O(e,n){let r,o;return H(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)}function P(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function C(){return t.getRoutes().map((e=>e.record))}function $(e){return!!t.getRecordMatcher(e)}function j(e,r){if(r=d({},r||v.value),"string"===typeof e){const o=b(n,e,r.path),a=t.resolve({path:o.path},r),s=c.createHref(o.fullPath);return d(o,a,{params:A(a.params),hash:Me(o.hash),redirectedFrom:void 0,href:s})}let o;if("path"in e)o=d({},e,{path:b(n,e.path,r.path).path});else{const t=d({},e.params);for(const e in t)null==t[e]&&delete t[e];o=d({},e,{params:R(e.params)}),r.params=R(r.params)}const s=t.resolve(o,r),i=e.hash||"";s.params=E(A(s.params));const l=w(a,d({},e,{hash:qe(i),path:s.path})),u=c.createHref(l);return d({fullPath:l,hash:i,query:a===Te?Ue(e.query):e.query||{}},s,{redirectedFrom:void 0,href:u})}function S(e){return"string"===typeof e?b(n,e,v.value.path):d({},e)}function q(e,t){if(y!==e)return N(8,{from:t,to:e})}function L(e){return F(e)}function M(e){return L(d(S(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=S(r):{path:r},r.params={}),d({query:e.query,hash:e.hash,params:e.params},r)}}function F(e,t){const n=y=j(e),r=v.value,o=e.state,c=e.force,s=!0===e.replace,i=U(n);if(i)return F(d(S(i),{state:o,force:c,replace:s}),t||n);const l=n;let u;return l.redirectedFrom=t,!c&&k(a,r,n)&&(u=N(16,{to:l,from:r}),oe(r,r,!0,!1)),(u?Promise.resolve(u):D(l,r)).catch((e=>Z(e)?Z(e,2)?e:re(e):te(e,l,r))).then((e=>{if(e){if(Z(e,2))return F(d(S(e.to),{state:o,force:c,replace:s}),t||l)}else e=z(l,r,!0,s,o);return V(l,r,e),e}))}function W(e,t){const n=q(e,t);return n?Promise.reject(n):Promise.resolve()}function D(e,t){let n;const[r,o,a]=rt(e,t);n=De(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push(We(r,e,t))}));const c=W.bind(null,e,t);return n.push(c),nt(n).then((()=>{n=[];for(const r of s.list())n.push(We(r,e,t));return n.push(c),nt(n)})).then((()=>{n=De(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(We(r,e,t))}));return n.push(c),nt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(We(o,e,t));else n.push(We(r.beforeEnter,e,t));return n.push(c),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=De(a,"beforeRouteEnter",e,t),n.push(c),nt(n)))).then((()=>{n=[];for(const r of i.list())n.push(We(r,e,t));return n.push(c),nt(n)})).catch((e=>Z(e,8)?e:Promise.reject(e)))}function V(e,t,n){for(const r of h.list())r(e,t,n)}function z(e,t,n,r,o){const a=q(e,t);if(a)return a;const s=t===Q,i=p?history.state:{};n&&(r||s?c.replace(e.fullPath,d({scroll:s&&i&&i.scroll},o)):c.push(e.fullPath,o)),v.value=e,oe(e,t,n,s),re()}let K;function X(){K=c.listen(((e,t,n)=>{const r=j(e),o=U(r);if(o)return void F(d(o,{replace:!0}),r).catch(g);y=r;const a=v.value;p&&I(G(a.fullPath,n.delta),_()),D(r,a).catch((e=>Z(e,12)?e:Z(e,2)?(F(e.to,r).then((e=>{Z(e,20)&&!n.delta&&n.type===x.pop&&c.go(-1,!1)})).catch(g),Promise.reject()):(n.delta&&c.go(-n.delta,!1),te(e,r,a)))).then((e=>{e=e||z(r,a,!1),e&&(n.delta?c.go(-n.delta,!1):n.type===x.pop&&Z(e,20)&&c.go(-1,!1)),V(r,a,e)})).catch(g)}))}let Y,J=Fe(),ee=Fe();function te(e,t,n){re(e);const r=ee.list();return r.length?r.forEach((r=>r(e,t,n))):o.error(e),Promise.reject(e)}function ne(){return Y&&v.value!==Q?Promise.resolve():new Promise(((e,t)=>{J.add([e,t])}))}function re(e){return Y||(Y=!e,X(),J.list().forEach((([t,n])=>e?n(e):t())),J.reset()),e}function oe(t,n,o,a){const{scrollBehavior:c}=e;if(!p||!c)return Promise.resolve();const s=!o&&T(G(t.fullPath,0))||(a||!o)&&history.state&&history.state.scroll||null;return(0,r.nextTick)().then((()=>c(t,n,s))).then((e=>e&&B(e))).catch((e=>te(e,t,n)))}const ae=e=>c.go(e);let ce;const se=new Set,ie={currentRoute:v,addRoute:O,removeRoute:P,hasRoute:$,getRoutes:C,resolve:j,options:e,push:L,replace:M,go:ae,back:()=>ae(-1),forward:()=>ae(1),beforeEach:s.add,beforeResolve:i.add,afterEach:h.add,onError:ee.add,isReady:ne,install(e){const t=this;e.component("RouterLink",He),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,r.unref)(v)}),p&&!ce&&v.value===Q&&(ce=!0,L(c.location).catch((e=>{0})));const n={};for(const a in Q)n[a]=(0,r.computed)((()=>v.value[a]));e.provide(l,t),e.provide(u,(0,r.reactive)(n)),e.provide(f,v);const o=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(y=Q,K&&K(),v.value=Q,ce=!1,Y=!1),o()}}};return ie}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let c=0;c<a;c++){const a=t.matched[c];a&&(e.matched.find((e=>R(e,a)))?r.push(a):n.push(a));const s=e.matched[c];s&&(t.matched.find((e=>R(e,s)))||o.push(s))}return[n,r,o]}}}]);