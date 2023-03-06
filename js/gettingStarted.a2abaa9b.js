"use strict";(self["webpackChunkthedaoscapefrontend"]=self["webpackChunkthedaoscapefrontend"]||[]).push([[2372],{82629:(e,t,n)=>{n.d(t,{w:()=>i}),e=n.hmd(e);var a={},r=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,n=a.Prism={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e["__id"]||Object.defineProperty(e,"__id",{value:++t}),e["__id"]},clone:function(e,t){var a=n.util.type(e);switch(t=t||{},a){case"Object":if(t[n.util.objId(e)])return t[n.util.objId(e)];i={};for(var r in t[n.util.objId(e)]=i,e)e.hasOwnProperty(r)&&(i[r]=n.util.clone(e[r],t));return i;case"Array":if(t[n.util.objId(e)])return t[n.util.objId(e)];var i=[];return t[n.util.objId(e)]=i,e.forEach((function(e,a){i[a]=n.util.clone(e,t)})),i}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){r=r||n.languages;var i=r[e];if(2==arguments.length){for(var o in a=arguments[1],a)a.hasOwnProperty(o)&&(i[o]=a[o]);return i}var s={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var o in a)a.hasOwnProperty(o)&&(s[o]=a[o]);s[l]=i[l]}return n.languages.DFS(n.languages,(function(t,n){n===r[e]&&t!=e&&(this[t]=s)})),r[e]=s},DFS:function(e,t,a,r){for(var i in r=r||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"!==n.util.type(e[i])||r[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||r[n.util.objId(e[i])]||(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,r)):(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var r={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",r);for(var i,o=r.elements||e.querySelectorAll(r.selector),s=0;i=o[s++];)n.highlightElement(i,!0===t,r.callback)},highlightElement:function(t,r,i){var o,s,l=t;while(l&&!e.test(l.className))l=l.parentNode;l&&(o=(l.className.match(e)||[,""])[1].toLowerCase(),s=n.languages[o]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,t.parentNode&&(l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o));var c=t.textContent,u={element:t,language:o,grammar:s,code:c};if(n.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return u.code&&(n.hooks.run("before-highlight",u),u.element.textContent=u.code,n.hooks.run("after-highlight",u)),void n.hooks.run("complete",u);if(n.hooks.run("before-highlight",u),r&&a.Worker){var g=new Worker(n.filename);g.onmessage=function(e){u.highlightedCode=e.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(t),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},highlight:function(e,t,a){var i={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),r.stringify(n.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,a,r,i,o,s){var l=n.Token;for(var c in a)if(a.hasOwnProperty(c)&&a[c]){if(c==s)return;var u=a[c];u="Array"===n.util.type(u)?u:[u];for(var g=0;g<u.length;++g){var d=u[g],p=d.inside,h=!!d.lookbehind,m=!!d.greedy,f=0,y=d.alias;if(m&&!d.pattern.global){var v=d.pattern.toString().match(/[imuy]*$/)[0];d.pattern=RegExp(d.pattern.source,v+"g")}d=d.pattern||d;for(var k=r,b=i;k<t.length;b+=t[k].length,++k){var w=t[k];if(t.length>e.length)return;if(!(w instanceof l)){if(m&&k!=t.length-1){d.lastIndex=b;var x=d.exec(e);if(!x)break;for(var C=x.index+(h?x[1].length:0),F=x.index+x[0].length,S=k,_=b,N=t.length;S<N&&(_<F||!t[S].type&&!t[S-1].greedy);++S)_+=t[S].length,C>=_&&(++k,b=_);if(t[k]instanceof l)continue;A=S-k,w=e.slice(b,_),x.index-=b}else{d.lastIndex=0;x=d.exec(w);var A=1}if(x){h&&(f=x[1]?x[1].length:0);C=x.index+f,x=x[0].slice(f),F=C+x.length;var j=w.slice(0,C),B=w.slice(F),E=[k,A];j&&(++k,b+=j.length,E.push(j));var $=new l(c,p?n.tokenize(x,p):x,y,x,m);if(E.push($),B&&E.push(B),Array.prototype.splice.apply(t,E),1!=A&&n.matchGrammar(e,t,a,k,b,!0,c),o)break}else if(o)break}}}}},tokenize:function(e,t,a){var r=[e],i=t.rest;if(i){for(var o in i)t[o]=i[o];delete t.rest}return n.matchGrammar(e,r,t,0,0,!1),r},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(t)}}},r=n.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r};return r.stringify=function(e,t,a){if("string"===typeof e)return e;if("Array"===n.util.type(e))return e.map((function(n){return r.stringify(n,t,e)})).join("");var i={type:e.type,content:r.stringify(e.content,t,a),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:a};if(e.alias){var o="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,o)}n.hooks.run("wrap",i);var s=Object.keys(i.attributes).map((function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(s?" "+s:"")+">"+i.content+"</"+i.tag+">"},a.document?a.Prism:a.addEventListener?(n.disableWorkerMessageHandler||a.addEventListener("message",(function(e){var t=JSON.parse(e.data),r=t.language,i=t.code,o=t.immediateClose;a.postMessage(n.highlight(i,n.languages[r],r)),o&&a.close()}),!1),a.Prism):a.Prism}();e.exports&&(e.exports=r),"undefined"!==typeof n.g&&(n.g.Prism=r),r.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes["title"]=e.content.replace(/&amp;/,"&"))})),r.languages.xml=r.languages.markup,r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},r.languages.css.atrule.inside.rest=r.languages.css,r.languages.markup&&(r.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:r.languages.css,alias:"language-css",greedy:!0}}),r.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:r.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:r.languages.css}},alias:"language-css"}},r.languages.markup.tag)),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),r.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),r.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),r.languages.javascript["template-string"].inside.interpolation.inside.rest=r.languages.javascript,r.languages.markup&&r.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:r.languages.javascript,alias:"language-javascript",greedy:!0}}),r.languages.js=r.languages.javascript,function(){if("undefined"!==typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n="";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"codeBlock"},[n("pre",{class:e.languageClass},[n("code",[e._t("default")],2)])])},staticRenderFns:[],name:"code-highlight",props:{language:{type:String,default:"javascript"}},computed:{languageClass:function(){return"language-"+this.language}},mounted:function(){r.highlightAllUnder(this.$refs.codeBlock)},beforeUpdate:function(){if(this.$slots.default[0].text){var e=this.$slots.default[0].text.replace(/^[\r\n\s]*|[\r\n\s]*$/g,"");this.$el.querySelector("code").textContent=e,r.highlightAllUnder(this.$refs.codeBlock)}}};function o(e){r.highlightAllUnder(e)}function s(e){s.installed||(s.installed=!0,e.directive("highlight",o))}var l={install:s},c=null;"undefined"!==typeof window?c=window.Vue:"undefined"!==typeof n.g&&(c=n.g.Vue),c&&c.use(l)},70799:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var a=n(34182);const r={class:"row justify-between items-center"},i=(0,a.createTextVNode)(" Getting Started with Croneos "),o=(0,a.createTextVNode)("Visit our Github repos"),s=(0,a.createElementVNode)("p",null," For using CRONEOS in your smart contracts you first need to include the croneos api header file. Head over to our github repo to get the latest. CRONEOS is still in development, the api schema may change but we'll do our best to make future updates backwards compatible. ",-1),l=(0,a.createElementVNode)("div",{class:"info-box"}," The croneos header file is a namespaced wrapper to interact with the croneos smart contract. ",-1),c=(0,a.createElementVNode)("h5",null,"Schedule an Action",-1),u=(0,a.createElementVNode)("p",null," Full example to schedule an action making use of the croneos::job struct. This is an example of a recursive pattern. ",-1),g=(0,a.createElementVNode)("h5",null,"More Examples",-1),d=(0,a.createElementVNode)("p",null,"Coming soon.",-1);function p(e,t,n,p,h,m){const f=(0,a.resolveComponent)("q-tooltip"),y=(0,a.resolveComponent)("q-icon"),v=(0,a.resolveComponent)("q-btn"),k=(0,a.resolveComponent)("q-page");return(0,a.openBlock)(),(0,a.createBlock)(k,{padding:"",class:"constrain-page-width bg-white text-black",style:{"padding-bottom":"300px"}},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("h5",r,[i,(0,a.createVNode)(v,{flat:"",color:"secondary",round:"",onClick:t[0]||(t[0]=t=>e.openURL(e.getAppConfig.social.github))},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(f,{class:"bg-primary"},{default:(0,a.withCtx)((()=>[o])),_:1}),(0,a.createVNode)(y,{name:"img:statics/vectors/social/027-github.svg",size:"36px"})])),_:1})]),s,l,c,u,g,d])),_:1})}var h=n(33437);const m={key:0,class:"relative-position"},f={key:1,class:"row justify-center",style:{height:"200px"}};function y(e,t,n,r,i,o){const s=(0,a.resolveComponent)("vue-code-highlight"),l=(0,a.resolveComponent)("q-tooltip"),c=(0,a.resolveComponent)("q-btn"),u=(0,a.resolveComponent)("q-spinner"),g=(0,a.resolveDirective)("clipboard");return(0,a.openBlock)(),(0,a.createBlock)(a.Transition,{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in",tag:"div"},{default:(0,a.withCtx)((()=>[e.is_loading_remote_code?((0,a.openBlock)(),(0,a.createElementBlock)("div",f,[(0,a.createVNode)(u,{color:"primary",size:"48"})])):((0,a.openBlock)(),(0,a.createElementBlock)("div",m,[(0,a.createVNode)(s,{language:"javascript"},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.remote_snippet||e.code),1)])),_:1}),e.copy?(0,a.withDirectives)(((0,a.openBlock)(),(0,a.createBlock)(c,{key:0,class:"absolute-top-right q-ma-sm",unelevated:"",size:"sm",icon:e.iconname,round:"",color:"primary"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(l,{class:"bg-secondary"},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.msg),1)])),_:1})])),_:1},8,["icon"])),[[g,e.remote_snippet||e.code,"copy"],[g,e.onCopy,"success"],[g,e.onError,"error"]]):(0,a.createCommentVNode)("",!0)]))])),_:1})}var v=n(82629),k=n(40019);const b=(0,a.defineComponent)({components:{VueCodeHighlight:v.w},props:{code:{type:String,default:""},copy:{type:Boolean,default:!0}},data(){return{iconname:"file_copy",msg:"copy",remote_snippet:"",is_loading_remote_code:!1}},methods:{onCopy:function(e){k.log("You just copied: "+e.text),this.iconname="check",this.msg="success",setTimeout((()=>{this.iconname="file_copy",this.msg="copy"}),1e3)},onError:function(e){alert("Failed to copy texts")},async fetchCodeSnippet(e){this.is_loading_remote_code=!0;let t=await this.$axios.get(e);this.remote_snippet=t.data,this.is_loading_remote_code=!1}},async mounted(){this.code.startsWith("http")&&this.fetchCodeSnippet(this.code)}});var w=n(74260),x=n(47704),C=n(2165),F=n(5363),S=n(6833),_=n(7518),N=n.n(_);const A=(0,w.Z)(b,[["render",y]]),j=A;N()(b,"components",{QScrollArea:x.Z,QBtn:C.Z,QTooltip:F.Z,QSpinner:S.Z});var B=n(55250),E=n(40019);const $=(0,a.defineComponent)({components:{codeBlock:j},data(){return{}},computed:{...(0,B.Se)({getAccountName:"proton/getAccountName",getAppConfig:"app/getAppConfig"})},methods:{openURL:h.Z,async fetchCodeSnippet(e){let t=await this.$axios.get(e);return E.log(t),await t.data}}});var V=n(24379),O=n(24554);const T=(0,w.Z)($,[["render",p]]),P=T;N()($,"components",{QPage:V.Z,QBtn:C.Z,QTooltip:F.Z,QIcon:O.Z})}}]);