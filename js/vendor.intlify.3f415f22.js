"use strict";(self["webpackChunkthedaoscapefrontend"]=self["webpackChunkthedaoscapefrontend"]||[]).push([[1906],{71031:(e,t,n)=>{n.d(t,{In:()=>P,zS:()=>y,R7:()=>q,bB:()=>V,M1:()=>F,kA:()=>v,t2:()=>G,Sv:()=>C,Rx:()=>Z,Ls:()=>X,sb:()=>B,cr:()=>E,Pw:()=>x,Iu:()=>J,zn:()=>D});var r=n(29454),o=n(61365);
/*!
  * @intlify/runtime v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const s=e=>e,c=e=>"",a="text",u=e=>0===e.length?"":e.join(""),l=r.zw;function i(e,t){return e=Math.abs(e),2===t?e?e>1?1:0:1:e?Math.min(e,2):0}function f(e){const t=(0,r.hj)(e.pluralIndex)?e.pluralIndex:-1;return e.named&&((0,r.hj)(e.named.count)||(0,r.hj)(e.named.n))?(0,r.hj)(e.named.count)?e.named.count:(0,r.hj)(e.named.n)?e.named.n:t:t}function p(e,t){t.count||(t.count=e),t.n||(t.n=e)}function m(e={}){const t=e.locale,n=f(e),o=(0,r.Kn)(e.pluralRules)&&(0,r.HD)(t)&&(0,r.mf)(e.pluralRules[t])?e.pluralRules[t]:i,m=(0,r.Kn)(e.pluralRules)&&(0,r.HD)(t)&&(0,r.mf)(e.pluralRules[t])?i:void 0,d=e=>e[o(n,e.length,m)],h=e.list||[],k=e=>h[e],b=e.named||{};(0,r.hj)(e.pluralIndex)&&p(n,b);const g=e=>b[e];function y(t){const n=(0,r.mf)(e.messages)?e.messages(t):!!(0,r.Kn)(e.messages)&&e.messages[t];return n||(e.parent?e.parent.message(t):c)}const P=t=>e.modifiers?e.modifiers[t]:s,L=(0,r.PO)(e.processor)&&(0,r.mf)(e.processor.normalize)?e.processor.normalize:u,w=(0,r.PO)(e.processor)&&(0,r.mf)(e.processor.interpolate)?e.processor.interpolate:l,x=(0,r.PO)(e.processor)&&(0,r.HD)(e.processor.type)?e.processor.type:a,O={["list"]:k,["named"]:g,["plural"]:d,["linked"]:(e,t)=>{const n=y(e)(O);return(0,r.HD)(t)?P(t)(n):n},["message"]:y,["type"]:x,["interpolate"]:w,["normalize"]:L};return O}var d=n(76499);
/*!
  * @intlify/devtools-if v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const h={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};
/*!
  * @intlify/core-base v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
let k=null;h.FunctionTranslate;function b(e){return t=>k&&k.emit(e,t)}const g="9.1.9",y=-1,P="";function L(){return{upper:e=>(0,r.HD)(e)?e.toUpperCase():e,lower:e=>(0,r.HD)(e)?e.toLowerCase():e,capitalize:e=>(0,r.HD)(e)?`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`:e}}let w;function x(e){w=e}let O=0;function v(e={}){const t=(0,r.HD)(e.version)?e.version:g,n=(0,r.HD)(e.locale)?e.locale:"en-US",o=(0,r.kJ)(e.fallbackLocale)||(0,r.PO)(e.fallbackLocale)||(0,r.HD)(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:n,s=(0,r.PO)(e.messages)?e.messages:{[n]:{}},c=(0,r.PO)(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},a=(0,r.PO)(e.numberFormats)?e.numberFormats:{[n]:{}},u=(0,r.f0)({},e.modifiers||{},L()),l=e.pluralRules||{},i=(0,r.mf)(e.missing)?e.missing:null,f=!(0,r.jn)(e.missingWarn)&&!(0,r.Kj)(e.missingWarn)||e.missingWarn,p=!(0,r.jn)(e.fallbackWarn)&&!(0,r.Kj)(e.fallbackWarn)||e.fallbackWarn,m=!!e.fallbackFormat,d=!!e.unresolving,h=(0,r.mf)(e.postTranslation)?e.postTranslation:null,k=(0,r.PO)(e.processor)?e.processor:null,b=!(0,r.jn)(e.warnHtmlMessage)||e.warnHtmlMessage,y=!!e.escapeParameter,P=(0,r.mf)(e.messageCompiler)?e.messageCompiler:w,x=(0,r.mf)(e.onWarn)?e.onWarn:r.ZK,v=e,_=(0,r.Kn)(v.__datetimeFormatters)?v.__datetimeFormatters:new Map,C=(0,r.Kn)(v.__numberFormatters)?v.__numberFormatters:new Map,T=(0,r.Kn)(v.__meta)?v.__meta:{};O++;const j={version:t,cid:O,locale:n,fallbackLocale:o,messages:s,datetimeFormats:c,numberFormats:a,modifiers:u,pluralRules:l,missing:i,missingWarn:f,fallbackWarn:p,fallbackFormat:m,unresolving:d,postTranslation:h,processor:k,warnHtmlMessage:b,escapeParameter:y,messageCompiler:P,onWarn:x,__datetimeFormatters:_,__numberFormatters:C,__meta:T};return j}function _(e,t,n,o,s){const{missing:c,onWarn:a}=e;if(null!==c){const o=c(e,n,t,s);return(0,r.HD)(o)?o:t}return t}function C(e,t,n){const o=e;o.__localeChainCache||(o.__localeChainCache=new Map);let s=o.__localeChainCache.get(n);if(!s){s=[];let e=[n];while((0,r.kJ)(e))e=T(s,e,t);const c=(0,r.kJ)(t)?t:(0,r.PO)(t)?t["default"]?t["default"]:null:t;e=(0,r.HD)(c)?[c]:c,(0,r.kJ)(e)&&T(s,e,!1),o.__localeChainCache.set(n,s)}return s}function T(e,t,n){let o=!0;for(let s=0;s<t.length&&(0,r.jn)(o);s++){const c=t[s];(0,r.HD)(c)&&(o=j(e,t[s],n))}return o}function j(e,t,n){let r;const o=t.split("-");do{const t=o.join("-");r=S(e,t,n),o.splice(-1,1)}while(o.length&&!0===r);return r}function S(e,t,n){let o=!1;if(!e.includes(t)&&(o=!0,t)){o="!"!==t[t.length-1];const s=t.replace(/!/g,"");e.push(s),((0,r.kJ)(n)||(0,r.PO)(n))&&n[s]&&(o=n[s])}return o}function D(e,t,n){const r=e;r.__localeChainCache=new Map,C(e,n,t)}const H=e=>e;let $=Object.create(null);function F(e,t={}){{const n=t.onCacheKey||H,r=n(e),o=$[r];if(o)return o;let s=!1;const c=t.onError||d.ho;t.onError=e=>{s=!0,c(e)};const{code:a}=(0,d.ps)(e,t),u=new Function(`return ${a}`)();return s?u:$[r]=u}}function N(e){return(0,d.t)(e,null,void 0)}const W=()=>"",I=e=>(0,r.mf)(e);function J(e,...t){const{fallbackFormat:n,postTranslation:o,unresolving:s,fallbackLocale:c,messages:a}=e,[u,l]=E(...t),i=(0,r.jn)(l.missingWarn)?l.missingWarn:e.missingWarn,f=(0,r.jn)(l.fallbackWarn)?l.fallbackWarn:e.fallbackWarn,p=(0,r.jn)(l.escapeParameter)?l.escapeParameter:e.escapeParameter,d=!!l.resolvedMessage,h=(0,r.HD)(l.default)||(0,r.jn)(l.default)?(0,r.jn)(l.default)?u:l.default:n?u:"",k=n||""!==h,b=(0,r.HD)(l.locale)?l.locale:e.locale;p&&K(l);let[g,P,L]=d?[u,b,a[b]||{}]:A(e,u,b,c,f,i),w=u;if(d||(0,r.HD)(g)||I(g)||k&&(g=h,w=g),!d&&(!(0,r.HD)(g)&&!I(g)||!(0,r.HD)(P)))return s?y:u;let x=!1;const O=()=>{x=!0},v=I(g)?g:M(e,u,P,g,w,O);if(x)return g;const _=U(e,P,L,l),C=m(_),T=R(e,v,C),j=o?o(T):T;return j}function K(e){(0,r.kJ)(e.list)?e.list=e.list.map((e=>(0,r.HD)(e)?(0,r.Xv)(e):e)):(0,r.Kn)(e.named)&&Object.keys(e.named).forEach((t=>{(0,r.HD)(e.named[t])&&(e.named[t]=(0,r.Xv)(e.named[t]))}))}function A(e,t,n,s,c,a){const{messages:u,onWarn:l}=e,i=C(e,s,n);let f,p={},m=null,d=n,h=null;const k="translate";for(let b=0;b<i.length;b++){f=h=i[b],p=u[f]||{};if(null===(m=(0,o.GK)(p,t))&&(m=p[t]),(0,r.HD)(m)||(0,r.mf)(m))break;const n=_(e,t,f,a,k);n!==t&&(m=n),d=h}return[m,f,p]}function M(e,t,n,r,o,s){const{messageCompiler:c,warnHtmlMessage:a}=e;if(I(r)){const e=r;return e.locale=e.locale||n,e.key=e.key||t,e}const u=c(r,z(e,n,o,r,a,s));return u.locale=n,u.key=t,u.source=r,u}function R(e,t,n){const r=t(n);return r}function E(...e){const[t,n,o]=e,s={};if(!(0,r.HD)(t)&&!(0,r.hj)(t)&&!I(t))throw N(14);const c=(0,r.hj)(t)?String(t):(I(t),t);return(0,r.hj)(n)?s.plural=n:(0,r.HD)(n)?s.default=n:(0,r.PO)(n)&&!(0,r.Qr)(n)?s.named=n:(0,r.kJ)(n)&&(s.list=n),(0,r.hj)(o)?s.plural=o:(0,r.HD)(o)?s.default=o:(0,r.PO)(o)&&(0,r.f0)(s,o),[c,s]}function z(e,t,n,o,s,c){return{warnHtmlMessage:s,onError:e=>{throw c&&c(e),e},onCacheKey:e=>(0,r.$d)(t,n,e)}}function U(e,t,n,s){const{modifiers:c,pluralRules:a}=e,u=s=>{const c=(0,o.GK)(n,s);if((0,r.HD)(c)){let n=!1;const r=()=>{n=!0},o=M(e,s,t,c,s,r);return n?W:o}return I(c)?c:W},l={locale:t,modifiers:c,pluralRules:a,messages:u};return e.processor&&(l.processor=e.processor),s.list&&(l.list=s.list),s.named&&(l.named=s.named),(0,r.hj)(s.plural)&&(l.pluralIndex=s.plural),l}const Q="undefined"!==typeof Intl;Q&&Intl.DateTimeFormat,Q&&Intl.NumberFormat;function G(e,...t){const{datetimeFormats:n,unresolving:o,fallbackLocale:s,onWarn:c}=e,{__datetimeFormatters:a}=e;const[u,l,i,f]=X(...t),p=(0,r.jn)(i.missingWarn)?i.missingWarn:e.missingWarn,m=((0,r.jn)(i.fallbackWarn)?i.fallbackWarn:e.fallbackWarn,!!i.part),d=(0,r.HD)(i.locale)?i.locale:e.locale,h=C(e,s,d);if(!(0,r.HD)(u)||""===u)return new Intl.DateTimeFormat(d).format(l);let k,b={},g=null,P=d,L=null;const w="datetime format";for(let y=0;y<h.length;y++){if(k=L=h[y],b=n[k]||{},g=b[u],(0,r.PO)(g))break;_(e,u,k,p,w),P=L}if(!(0,r.PO)(g)||!(0,r.HD)(k))return o?y:u;let x=`${k}__${u}`;(0,r.Qr)(f)||(x=`${x}__${JSON.stringify(f)}`);let O=a.get(x);return O||(O=new Intl.DateTimeFormat(k,(0,r.f0)({},g,f)),a.set(x,O)),m?O.formatToParts(l):O.format(l)}function X(...e){const[t,n,o,s]=e;let c,a={},u={};if((0,r.HD)(t)){if(!/\d{4}-\d{2}-\d{2}(T.*)?/.test(t))throw N(16);c=new Date(t);try{c.toISOString()}catch(l){throw N(16)}}else if((0,r.J_)(t)){if(isNaN(t.getTime()))throw N(15);c=t}else{if(!(0,r.hj)(t))throw N(14);c=t}return(0,r.HD)(n)?a.key=n:(0,r.PO)(n)&&(a=n),(0,r.HD)(o)?a.locale=o:(0,r.PO)(o)&&(u=o),(0,r.PO)(s)&&(u=s),[a.key||"",c,a,u]}function q(e,t,n){const r=e;for(const o in n){const e=`${t}__${o}`;r.__datetimeFormatters.has(e)&&r.__datetimeFormatters.delete(e)}}function Z(e,...t){const{numberFormats:n,unresolving:o,fallbackLocale:s,onWarn:c}=e,{__numberFormatters:a}=e;const[u,l,i,f]=B(...t),p=(0,r.jn)(i.missingWarn)?i.missingWarn:e.missingWarn,m=((0,r.jn)(i.fallbackWarn)?i.fallbackWarn:e.fallbackWarn,!!i.part),d=(0,r.HD)(i.locale)?i.locale:e.locale,h=C(e,s,d);if(!(0,r.HD)(u)||""===u)return new Intl.NumberFormat(d).format(l);let k,b={},g=null,P=d,L=null;const w="number format";for(let y=0;y<h.length;y++){if(k=L=h[y],b=n[k]||{},g=b[u],(0,r.PO)(g))break;_(e,u,k,p,w),P=L}if(!(0,r.PO)(g)||!(0,r.HD)(k))return o?y:u;let x=`${k}__${u}`;(0,r.Qr)(f)||(x=`${x}__${JSON.stringify(f)}`);let O=a.get(x);return O||(O=new Intl.NumberFormat(k,(0,r.f0)({},g,f)),a.set(x,O)),m?O.formatToParts(l):O.format(l)}function B(...e){const[t,n,o,s]=e;let c={},a={};if(!(0,r.hj)(t))throw N(14);const u=t;return(0,r.HD)(n)?c.key=n:(0,r.PO)(n)&&(c=n),(0,r.HD)(o)?c.locale=o:(0,r.PO)(o)&&(a=o),(0,r.PO)(s)&&(a=s),[c.key||"",u,c,a]}function V(e,t,n){const r=e;for(const o in n){const e=`${t}__${o}`;r.__numberFormatters.has(e)&&r.__numberFormatters.delete(e)}}},76499:(e,t,n)=>{n.d(t,{ho:()=>s,ps:()=>F,t:()=>o});var r=n(29454);
/*!
  * @intlify/message-compiler v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */function o(e,t,n={}){const{domain:r,messages:o,args:s}=n,c=e,a=new SyntaxError(String(c));return a.code=e,t&&(a.location=t),a.domain=r,a}function s(e){throw e}function c(e,t,n){return{line:e,column:t,offset:n}}function a(e,t,n){const r={start:e,end:t};return null!=n&&(r.source=n),r}const u=" ",l="\r",i="\n",f=String.fromCharCode(8232),p=String.fromCharCode(8233);function m(e){const t=e;let n=0,r=1,o=1,s=0;const c=e=>t[e]===l&&t[e+1]===i,a=e=>t[e]===i,u=e=>t[e]===p,m=e=>t[e]===f,d=e=>c(e)||a(e)||u(e)||m(e),h=()=>n,k=()=>r,b=()=>o,g=()=>s,y=e=>c(e)||u(e)||m(e)?i:t[e],P=()=>y(n),L=()=>y(n+s);function w(){return s=0,d(n)&&(r++,o=0),c(n)&&n++,n++,o++,t[n]}function x(){return c(n+s)&&s++,s++,t[n+s]}function O(){n=0,r=1,o=1,s=0}function v(e=0){s=e}function _(){const e=n+s;while(e!==n)w();s=0}return{index:h,line:k,column:b,peekOffset:g,charAt:y,currentChar:P,currentPeek:L,next:w,peek:x,reset:O,resetPeek:v,skipToPeek:_}}const d=void 0,h="'",k="tokenizer";function b(e,t={}){const n=!1!==t.location,r=m(e),s=()=>r.index(),l=()=>c(r.line(),r.column(),r.index()),f=l(),p=s(),b={currentType:14,offset:p,startLoc:f,endLoc:f,lastType:14,lastOffset:p,lastStartLoc:f,lastEndLoc:f,braceNest:0,inLinked:!1,text:""},g=()=>b,{onError:y}=t;function P(e,t,n,...r){const s=g();if(t.column+=n,t.offset+=n,y){const n=a(s.startLoc,t),c=o(e,n,{domain:k,args:r});y(c)}}function L(e,t,r){e.endLoc=l(),e.currentType=t;const o={type:t};return n&&(o.loc=a(e.startLoc,e.endLoc)),null!=r&&(o.value=r),o}const w=e=>L(e,14);function x(e,t){return e.currentChar()===t?(e.next(),t):(P(0,l(),0,t),"")}function O(e){let t="";while(e.currentPeek()===u||e.currentPeek()===i)t+=e.currentPeek(),e.peek();return t}function v(e){const t=O(e);return e.skipToPeek(),t}function _(e){if(e===d)return!1;const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||95===t}function C(e){if(e===d)return!1;const t=e.charCodeAt(0);return t>=48&&t<=57}function T(e,t){const{currentType:n}=t;if(2!==n)return!1;O(e);const r=_(e.currentPeek());return e.resetPeek(),r}function j(e,t){const{currentType:n}=t;if(2!==n)return!1;O(e);const r="-"===e.currentPeek()?e.peek():e.currentPeek(),o=C(r);return e.resetPeek(),o}function S(e,t){const{currentType:n}=t;if(2!==n)return!1;O(e);const r=e.currentPeek()===h;return e.resetPeek(),r}function D(e,t){const{currentType:n}=t;if(8!==n)return!1;O(e);const r="."===e.currentPeek();return e.resetPeek(),r}function H(e,t){const{currentType:n}=t;if(9!==n)return!1;O(e);const r=_(e.currentPeek());return e.resetPeek(),r}function $(e,t){const{currentType:n}=t;if(8!==n&&12!==n)return!1;O(e);const r=":"===e.currentPeek();return e.resetPeek(),r}function F(e,t){const{currentType:n}=t;if(10!==n)return!1;const r=()=>{const t=e.currentPeek();return"{"===t?_(e.peek()):!("@"===t||"%"===t||"|"===t||":"===t||"."===t||t===u||!t)&&(t===i?(e.peek(),r()):_(t))},o=r();return e.resetPeek(),o}function N(e){O(e);const t="|"===e.currentPeek();return e.resetPeek(),t}function W(e,t=!0){const n=(t=!1,r="",o=!1)=>{const s=e.currentPeek();return"{"===s?"%"!==r&&t:"@"!==s&&s?"%"===s?(e.peek(),n(t,"%",!0)):"|"===s?!("%"!==r&&!o)||!(r===u||r===i):s===u?(e.peek(),n(!0,u,o)):s!==i||(e.peek(),n(!0,i,o)):"%"===r||t},r=n();return t&&e.resetPeek(),r}function I(e,t){const n=e.currentChar();return n===d?d:t(n)?(e.next(),n):null}function J(e){const t=e=>{const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||95===t||36===t};return I(e,t)}function K(e){const t=e=>{const t=e.charCodeAt(0);return t>=48&&t<=57};return I(e,t)}function A(e){const t=e=>{const t=e.charCodeAt(0);return t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102};return I(e,t)}function M(e){let t="",n="";while(t=K(e))n+=t;return n}function R(e){let t="";while(1){const n=e.currentChar();if("{"===n||"}"===n||"@"===n||"|"===n||!n)break;if("%"===n){if(!W(e))break;t+=n,e.next()}else if(n===u||n===i)if(W(e))t+=n,e.next();else{if(N(e))break;t+=n,e.next()}else t+=n,e.next()}return t}function E(e){v(e);let t="",n="";while(t=J(e))n+=t;return e.currentChar()===d&&P(6,l(),0),n}function z(e){v(e);let t="";return"-"===e.currentChar()?(e.next(),t+=`-${M(e)}`):t+=M(e),e.currentChar()===d&&P(6,l(),0),t}function U(e){v(e),x(e,"'");let t="",n="";const r=e=>e!==h&&e!==i;while(t=I(e,r))n+="\\"===t?Q(e):t;const o=e.currentChar();return o===i||o===d?(P(2,l(),0),o===i&&(e.next(),x(e,"'")),n):(x(e,"'"),n)}function Q(e){const t=e.currentChar();switch(t){case"\\":case"'":return e.next(),`\\${t}`;case"u":return G(e,t,4);case"U":return G(e,t,6);default:return P(3,l(),0,t),""}}function G(e,t,n){x(e,t);let r="";for(let o=0;o<n;o++){const n=A(e);if(!n){P(4,l(),0,`\\${t}${r}${e.currentChar()}`);break}r+=n}return`\\${t}${r}`}function X(e){v(e);let t="",n="";const r=e=>"{"!==e&&"}"!==e&&e!==u&&e!==i;while(t=I(e,r))n+=t;return n}function q(e){let t="",n="";while(t=J(e))n+=t;return n}function Z(e){const t=(n=!1,r)=>{const o=e.currentChar();return"{"!==o&&"%"!==o&&"@"!==o&&"|"!==o&&o?o===u?r:o===i?(r+=o,e.next(),t(n,r)):(r+=o,e.next(),t(!0,r)):r};return t(!1,"")}function B(e){v(e);const t=x(e,"|");return v(e),t}function V(e,t){let n=null;const r=e.currentChar();switch(r){case"{":return t.braceNest>=1&&P(8,l(),0),e.next(),n=L(t,2,"{"),v(e),t.braceNest++,n;case"}":return t.braceNest>0&&2===t.currentType&&P(7,l(),0),e.next(),n=L(t,3,"}"),t.braceNest--,t.braceNest>0&&v(e),t.inLinked&&0===t.braceNest&&(t.inLinked=!1),n;case"@":return t.braceNest>0&&P(6,l(),0),n=Y(e,t)||w(t),t.braceNest=0,n;default:let r=!0,o=!0,s=!0;if(N(e))return t.braceNest>0&&P(6,l(),0),n=L(t,1,B(e)),t.braceNest=0,t.inLinked=!1,n;if(t.braceNest>0&&(5===t.currentType||6===t.currentType||7===t.currentType))return P(6,l(),0),t.braceNest=0,ee(e,t);if(r=T(e,t))return n=L(t,5,E(e)),v(e),n;if(o=j(e,t))return n=L(t,6,z(e)),v(e),n;if(s=S(e,t))return n=L(t,7,U(e)),v(e),n;if(!r&&!o&&!s)return n=L(t,13,X(e)),P(1,l(),0,n.value),v(e),n;break}return n}function Y(e,t){const{currentType:n}=t;let r=null;const o=e.currentChar();switch(8!==n&&9!==n&&12!==n&&10!==n||o!==i&&o!==u||P(9,l(),0),o){case"@":return e.next(),r=L(t,8,"@"),t.inLinked=!0,r;case".":return v(e),e.next(),L(t,9,".");case":":return v(e),e.next(),L(t,10,":");default:return N(e)?(r=L(t,1,B(e)),t.braceNest=0,t.inLinked=!1,r):D(e,t)||$(e,t)?(v(e),Y(e,t)):H(e,t)?(v(e),L(t,12,q(e))):F(e,t)?(v(e),"{"===o?V(e,t)||r:L(t,11,Z(e))):(8===n&&P(9,l(),0),t.braceNest=0,t.inLinked=!1,ee(e,t))}}function ee(e,t){let n={type:14};if(t.braceNest>0)return V(e,t)||w(t);if(t.inLinked)return Y(e,t)||w(t);const r=e.currentChar();switch(r){case"{":return V(e,t)||w(t);case"}":return P(5,l(),0),e.next(),L(t,3,"}");case"@":return Y(e,t)||w(t);default:if(N(e))return n=L(t,1,B(e)),t.braceNest=0,t.inLinked=!1,n;if(W(e))return L(t,0,R(e));if("%"===r)return e.next(),L(t,4,"%");break}return n}function te(){const{currentType:e,offset:t,startLoc:n,endLoc:o}=b;return b.lastType=e,b.lastOffset=t,b.lastStartLoc=n,b.lastEndLoc=o,b.offset=s(),b.startLoc=l(),r.currentChar()===d?L(b,14):ee(r,b)}return{nextToken:te,currentOffset:s,currentPosition:l,context:g}}const g="parser",y=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function P(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const e=parseInt(t||n,16);return e<=55295||e>=57344?String.fromCodePoint(e):"�"}}}function L(e={}){const t=!1!==e.location,{onError:n}=e;function s(e,t,r,s,...c){const u=e.currentPosition();if(u.offset+=s,u.column+=s,n){const e=a(r,u),s=o(t,e,{domain:g,args:c});n(s)}}function c(e,n,r){const o={type:e,start:n,end:n};return t&&(o.loc={start:r,end:r}),o}function u(e,n,r,o){e.end=n,o&&(e.type=o),t&&e.loc&&(e.loc.end=r)}function l(e,t){const n=e.context(),r=c(3,n.offset,n.startLoc);return r.value=t,u(r,e.currentOffset(),e.currentPosition()),r}function i(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:o}=n,s=c(5,r,o);return s.index=parseInt(t,10),e.nextToken(),u(s,e.currentOffset(),e.currentPosition()),s}function f(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:o}=n,s=c(4,r,o);return s.key=t,e.nextToken(),u(s,e.currentOffset(),e.currentPosition()),s}function p(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:o}=n,s=c(9,r,o);return s.value=t.replace(y,P),e.nextToken(),u(s,e.currentOffset(),e.currentPosition()),s}function m(e){const t=e.nextToken(),n=e.context(),{lastOffset:r,lastStartLoc:o}=n,a=c(8,r,o);return 12!==t.type?(s(e,11,n.lastStartLoc,0),a.value="",u(a,r,o),{nextConsumeToken:t,node:a}):(null==t.value&&s(e,13,n.lastStartLoc,0,w(t)),a.value=t.value||"",u(a,e.currentOffset(),e.currentPosition()),{node:a})}function d(e,t){const n=e.context(),r=c(7,n.offset,n.startLoc);return r.value=t,u(r,e.currentOffset(),e.currentPosition()),r}function h(e){const t=e.context(),n=c(6,t.offset,t.startLoc);let r=e.nextToken();if(9===r.type){const t=m(e);n.modifier=t.node,r=t.nextConsumeToken||e.nextToken()}switch(10!==r.type&&s(e,13,t.lastStartLoc,0,w(r)),r=e.nextToken(),2===r.type&&(r=e.nextToken()),r.type){case 11:null==r.value&&s(e,13,t.lastStartLoc,0,w(r)),n.key=d(e,r.value||"");break;case 5:null==r.value&&s(e,13,t.lastStartLoc,0,w(r)),n.key=f(e,r.value||"");break;case 6:null==r.value&&s(e,13,t.lastStartLoc,0,w(r)),n.key=i(e,r.value||"");break;case 7:null==r.value&&s(e,13,t.lastStartLoc,0,w(r)),n.key=p(e,r.value||"");break;default:s(e,12,t.lastStartLoc,0);const o=e.context(),a=c(7,o.offset,o.startLoc);return a.value="",u(a,o.offset,o.startLoc),n.key=a,u(n,o.offset,o.startLoc),{nextConsumeToken:r,node:n}}return u(n,e.currentOffset(),e.currentPosition()),{node:n}}function k(e){const t=e.context(),n=1===t.currentType?e.currentOffset():t.offset,r=1===t.currentType?t.endLoc:t.startLoc,o=c(2,n,r);o.items=[];let a=null;do{const n=a||e.nextToken();switch(a=null,n.type){case 0:null==n.value&&s(e,13,t.lastStartLoc,0,w(n)),o.items.push(l(e,n.value||""));break;case 6:null==n.value&&s(e,13,t.lastStartLoc,0,w(n)),o.items.push(i(e,n.value||""));break;case 5:null==n.value&&s(e,13,t.lastStartLoc,0,w(n)),o.items.push(f(e,n.value||""));break;case 7:null==n.value&&s(e,13,t.lastStartLoc,0,w(n)),o.items.push(p(e,n.value||""));break;case 8:const r=h(e);o.items.push(r.node),a=r.nextConsumeToken||null;break}}while(14!==t.currentType&&1!==t.currentType);const m=1===t.currentType?t.lastOffset:e.currentOffset(),d=1===t.currentType?t.lastEndLoc:e.currentPosition();return u(o,m,d),o}function L(e,t,n,r){const o=e.context();let a=0===r.items.length;const l=c(1,t,n);l.cases=[],l.cases.push(r);do{const t=k(e);a||(a=0===t.items.length),l.cases.push(t)}while(14!==o.currentType);return a&&s(e,10,n,0),u(l,e.currentOffset(),e.currentPosition()),l}function x(e){const t=e.context(),{offset:n,startLoc:r}=t,o=k(e);return 14===t.currentType?o:L(e,n,r,o)}function O(n){const o=b(n,(0,r.f0)({},e)),a=o.context(),l=c(0,a.offset,a.startLoc);return t&&l.loc&&(l.loc.source=n),l.body=x(o),14!==a.currentType&&s(o,13,a.lastStartLoc,0,n[a.offset]||""),u(l,o.currentOffset(),o.currentPosition()),l}return{parse:O}}function w(e){if(14===e.type)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function x(e,t={}){const n={ast:e,helpers:new Set},r=()=>n,o=e=>(n.helpers.add(e),e);return{context:r,helper:o}}function O(e,t){for(let n=0;n<e.length;n++)v(e[n],t)}function v(e,t){switch(e.type){case 1:O(e.cases,t),t.helper("plural");break;case 2:O(e.items,t);break;case 6:const n=e;v(n.key,t),t.helper("linked");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function _(e,t={}){const n=x(e);n.helper("normalize"),e.body&&v(e.body,n);const r=n.context();e.helpers=Array.from(r.helpers)}function C(e,t){const{sourceMap:n,filename:r,breakLineCode:o,needIndent:s}=t,c={source:e.loc.source,filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:o,needIndent:s,indentLevel:0},a=()=>c;function u(e,t){c.code+=e}function l(e,t=!0){const n=t?o:"";u(s?n+"  ".repeat(e):n)}function i(e=!0){const t=++c.indentLevel;e&&l(t)}function f(e=!0){const t=--c.indentLevel;e&&l(t)}function p(){l(c.indentLevel)}const m=e=>`_${e}`,d=()=>c.needIndent;return{context:a,push:u,indent:i,deindent:f,newline:p,helper:m,needIndent:d}}function T(e,t){const{helper:n}=e;e.push(`${n("linked")}(`),H(e,t.key),t.modifier&&(e.push(", "),H(e,t.modifier)),e.push(")")}function j(e,t){const{helper:n,needIndent:r}=e;e.push(`${n("normalize")}([`),e.indent(r());const o=t.items.length;for(let s=0;s<o;s++){if(H(e,t.items[s]),s===o-1)break;e.push(", ")}e.deindent(r()),e.push("])")}function S(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(`${n("plural")}([`),e.indent(r());const o=t.cases.length;for(let n=0;n<o;n++){if(H(e,t.cases[n]),n===o-1)break;e.push(", ")}e.deindent(r()),e.push("])")}}function D(e,t){t.body?H(e,t.body):e.push("null")}function H(e,t){const{helper:n}=e;switch(t.type){case 0:D(e,t);break;case 1:S(e,t);break;case 2:j(e,t);break;case 6:T(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break;default:0}}const $=(e,t={})=>{const n=(0,r.HD)(t.mode)?t.mode:"normal",o=(0,r.HD)(t.filename)?t.filename:"message.intl",s=!!t.sourceMap,c=null!=t.breakLineCode?t.breakLineCode:"arrow"===n?";":"\n",a=t.needIndent?t.needIndent:"arrow"!==n,u=e.helpers||[],l=C(e,{mode:n,filename:o,sourceMap:s,breakLineCode:c,needIndent:a});l.push("normal"===n?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(a),u.length>0&&(l.push(`const { ${u.map((e=>`${e}: _${e}`)).join(", ")} } = ctx`),l.newline()),l.push("return "),H(l,e),l.deindent(a),l.push("}");const{code:i,map:f}=l.context();return{ast:e,code:i,map:f?f.toJSON():void 0}};function F(e,t={}){const n=(0,r.f0)({},t),o=L(n),s=o.parse(e);return _(s,n),$(s,n)}},61365:(e,t,n)=>{n.d(t,{GK:()=>d,iq:()=>h});const r=Object.prototype.hasOwnProperty;function o(e,t){return r.call(e,t)}const s=e=>null!==e&&"object"===typeof e,c=[];c[0]={["w"]:[0],["i"]:[3,0],["["]:[4],["o"]:[7]},c[1]={["w"]:[1],["."]:[2],["["]:[4],["o"]:[7]},c[2]={["w"]:[2],["i"]:[3,0],["0"]:[3,0]},c[3]={["i"]:[3,0],["0"]:[3,0],["w"]:[1,1],["."]:[2,1],["["]:[4,1],["o"]:[7,1]},c[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],["o"]:8,["l"]:[4,0]},c[5]={["'"]:[4,0],["o"]:8,["l"]:[5,0]},c[6]={['"']:[4,0],["o"]:8,["l"]:[6,0]};const a=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function u(e){return a.test(e)}function l(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t!==n||34!==t&&39!==t?e:e.slice(1,-1)}function i(e){if(void 0===e||null===e)return"o";const t=e.charCodeAt(0);switch(t){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function f(e){const t=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(u(t)?l(t):"*"+t)}function p(e){const t=[];let n,r,o,s,a,u,l,p=-1,m=0,d=0;const h=[];function k(){const t=e[p+1];if(5===m&&"'"===t||6===m&&'"'===t)return p++,o="\\"+t,h[0](),!0}h[0]=()=>{void 0===r?r=o:r+=o},h[1]=()=>{void 0!==r&&(t.push(r),r=void 0)},h[2]=()=>{h[0](),d++},h[3]=()=>{if(d>0)d--,m=4,h[0]();else{if(d=0,void 0===r)return!1;if(r=f(r),!1===r)return!1;h[1]()}};while(null!==m)if(p++,n=e[p],"\\"!==n||!k()){if(s=i(n),l=c[m],a=l[s]||l["l"]||8,8===a)return;if(m=a[0],void 0!==a[1]&&(u=h[a[1]],u&&(o=n,!1===u())))return;if(7===m)return t}}const m=new Map;function d(e,t){if(!s(e))return null;let n=m.get(t);if(n||(n=p(t),n&&m.set(t,n)),!n)return null;const r=n.length;let o=e,c=0;while(c<r){const e=o[n[c]];if(void 0===e)return null;o=e,c++}return o}function h(e){if(!s(e))return e;for(const t in e)if(o(e,t))if(t.includes(".")){const n=t.split("."),r=n.length-1;let o=e;for(let e=0;e<r;e++)n[e]in o||(o[n[e]]={}),o=o[n[e]];o[n[r]]=e[t],delete e[t],s(o[n[r]])&&h(o[n[r]])}else s(e[t])&&h(e[t]);return e}},29454:(e,t,n)=>{n.d(t,{$d:()=>c,HD:()=>y,J_:()=>l,Kj:()=>i,Kn:()=>L,PO:()=>O,Qr:()=>f,RI:()=>k,Xv:()=>d,ZK:()=>p,f0:()=>m,hj:()=>u,je:()=>s,jn:()=>P,kJ:()=>b,mf:()=>g,zw:()=>v});var r=n(40019);
/*!
  * @intlify/shared v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const o="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,s=e=>o?Symbol(e):e,c=(e,t,n)=>a({l:e,k:t,s:n}),a=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),u=e=>"number"===typeof e&&isFinite(e),l=e=>"[object Date]"===x(e),i=e=>"[object RegExp]"===x(e),f=e=>O(e)&&0===Object.keys(e).length;function p(e,t){"undefined"!==typeof r&&(r.warn("[intlify] "+e),t&&r.warn(t.stack))}const m=Object.assign;function d(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const h=Object.prototype.hasOwnProperty;function k(e,t){return h.call(e,t)}const b=Array.isArray,g=e=>"function"===typeof e,y=e=>"string"===typeof e,P=e=>"boolean"===typeof e,L=e=>null!==e&&"object"===typeof e,w=Object.prototype.toString,x=e=>w.call(e),O=e=>"[object Object]"===x(e),v=e=>null==e?"":b(e)||O(e)&&e.toString===w?JSON.stringify(e,null,2):String(e)}}]);