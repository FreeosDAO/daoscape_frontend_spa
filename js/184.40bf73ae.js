"use strict";(self["webpackChunkthedaoscapefrontend"]=self["webpackChunkthedaoscapefrontend"]||[]).push([[184],{77184:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var o=a(34182);const d=(0,o.createTextVNode)("NET"),l=(0,o.createTextVNode)("Total Staked"),r=(0,o.createTextVNode)("Available"),c=(0,o.createTextVNode)("Used"),n={class:"absolute-full flex flex-center text-black",style:{"font-size":"11px"}},i=(0,o.createTextVNode)("NET"),s=(0,o.createTextVNode)("Please log in");function u(e,t,a,u,N,x){const p=(0,o.resolveComponent)("q-item-label"),f=(0,o.resolveComponent)("q-item-section"),h=(0,o.resolveComponent)("q-item"),C=(0,o.resolveComponent)("q-linear-progress"),V=(0,o.resolveComponent)("q-list");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[e.getNETStats?((0,o.openBlock)(),(0,o.createBlock)(V,{key:0,dense:"",dark:e.dark},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(p,{header:"",class:"text-h6"},{default:(0,o.withCtx)((()=>[d])),_:1}),(0,o.createVNode)(h,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(f,{side:""},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(p,{caption:""},{default:(0,o.withCtx)((()=>[l])),_:1})])),_:1}),(0,o.createVNode)(f,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(p,{caption:""},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(e.getNETStats.total_delegated_net),1)])),_:1})])),_:1})])),_:1}),(0,o.createVNode)(h,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(f,{side:""},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(p,{caption:""},{default:(0,o.withCtx)((()=>[r])),_:1})])),_:1}),(0,o.createVNode)(f,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(p,{caption:"",class:"text-weight-bold"},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(e.getNETStats.parsed.available),1)])),_:1})])),_:1})])),_:1}),(0,o.createVNode)(h,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(f,{side:""},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(p,{caption:""},{default:(0,o.withCtx)((()=>[c])),_:1})])),_:1}),(0,o.createVNode)(f,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(p,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(C,{value:e.getNETStats.perc_used/100,size:"20px",color:"primary",dark:e.dark},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("div",n,(0,o.toDisplayString)(e.getNETStats.perc_used.toFixed(2)+"%"),1)])),_:1},8,["value","dark"])])),_:1}),(0,o.createVNode)(p,{caption:""},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(e.getNETStats.parsed.used)+"/"+(0,o.toDisplayString)(e.getNETStats.parsed.max),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["dark"])):((0,o.openBlock)(),(0,o.createBlock)(V,{key:1,dense:"",dark:e.dark},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(p,{header:""},{default:(0,o.withCtx)((()=>[i])),_:1}),(0,o.createVNode)(h,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(f,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(p,{caption:""},{default:(0,o.withCtx)((()=>[s])),_:1})])),_:1})])),_:1})])),_:1},8,["dark"]))])}var N=a(10741);const x=(0,o.defineComponent)({props:{dark:!1},data(){return{CLOCK_TIMER:null}},computed:{...(0,N.Se)({getNETStats:"group/getNETStats",getAccountName:"proton/getAccountName"}),getRelativeCpu:function(){if(this.getNETStats)return 100-this.getNETStats.available/this.getNETStats.max*100}},methods:{}});var p=a(74260),f=a(27011),h=a(2350),C=a(83414),V=a(52035),_=a(51598),g=a(69721),w=a(7518),T=a.n(w);const k=(0,p.Z)(x,[["render",u]]),m=k;T()(x,"components",{QList:f.Z,QItemLabel:h.Z,QItem:C.Z,QItemSection:V.Z,QLinearProgress:_.Z,QBadge:g.Z})}}]);