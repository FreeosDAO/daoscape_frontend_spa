"use strict";(self["webpackChunkthedaoscapefrontend"]=self["webpackChunkthedaoscapefrontend"]||[]).push([[668],{87271:(e,t,o)=>{o.r(t),o.d(t,{default:()=>G});var a=o(34182);const n={class:"row justify-between q-mb-md q-py-sm"},r=(0,a.createTextVNode)("Withdrawals"),i=(0,a.createTextVNode)("Deposits"),l=(0,a.createTextVNode)("Internal Transfers"),c=(0,a.createTextVNode)("You don't own tokens in this group"),d={key:2,class:"row justify-center"};function s(e,t,o,s,u,m){const p=(0,a.resolveComponent)("page-header"),h=(0,a.resolveComponent)("q-icon"),g=(0,a.resolveComponent)("q-item-section"),w=(0,a.resolveComponent)("q-item-label"),C=(0,a.resolveComponent)("q-item"),k=(0,a.resolveComponent)("q-card"),f=(0,a.resolveComponent)("q-card-section"),v=(0,a.resolveComponent)("user-balance-card"),N=(0,a.resolveComponent)("q-spinner"),x=(0,a.resolveComponent)("q-page");return(0,a.openBlock)(),(0,a.createBlock)(x,{padding:"",class:"constrain-page-width"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(p,{title:"Internal Accounting"}),e.getCoreConfig?((0,a.openBlock)(),(0,a.createBlock)(k,{key:0,class:""},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",n,[(0,a.createVNode)(C,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(g,{avatar:""},{default:(0,a.withCtx)((()=>[e.getCoreConfig.conf.withdrawals?((0,a.openBlock)(),(0,a.createBlock)(h,{key:0,name:"check",color:"positive"})):((0,a.openBlock)(),(0,a.createBlock)(h,{key:1,name:"close",color:"negative"}))])),_:1}),(0,a.createVNode)(g,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(w,{class:"text-h6 text-weight-light"},{default:(0,a.withCtx)((()=>[r])),_:1}),(0,a.createVNode)(w,{caption:""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.getCoreConfig.conf.withdrawals?"enabled":"disabled"),1)])),_:1})])),_:1})])),_:1}),(0,a.createVNode)(C,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(g,{avatar:""},{default:(0,a.withCtx)((()=>[e.getCoreConfig.conf.deposits?((0,a.openBlock)(),(0,a.createBlock)(h,{key:0,name:"check",color:"positive"})):((0,a.openBlock)(),(0,a.createBlock)(h,{key:1,name:"close",color:"negative"}))])),_:1}),(0,a.createVNode)(g,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(w,{class:"text-h6 text-weight-light"},{default:(0,a.withCtx)((()=>[i])),_:1}),(0,a.createVNode)(w,{caption:""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.getCoreConfig.conf.deposits?"enabled":"disabled"),1)])),_:1})])),_:1})])),_:1}),(0,a.createVNode)(C,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(g,{avatar:""},{default:(0,a.withCtx)((()=>[e.getCoreConfig.conf.internal_transfers?((0,a.openBlock)(),(0,a.createBlock)(h,{key:0,name:"check",color:"positive"})):((0,a.openBlock)(),(0,a.createBlock)(h,{key:1,name:"close",color:"negative"}))])),_:1}),(0,a.createVNode)(g,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(w,{class:"text-h6 text-weight-light"},{default:(0,a.withCtx)((()=>[l])),_:1}),(0,a.createVNode)(w,{caption:""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.getCoreConfig.conf.internal_transfers?"enabled":"disabled"),1)])),_:1})])),_:1})])),_:1})])])),_:1})):(0,a.createCommentVNode)("",!0),e.myTokens.length?(0,a.createCommentVNode)("",!0):((0,a.openBlock)(),(0,a.createBlock)(k,{key:1},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(f,{class:"text-weight-light"},{default:(0,a.withCtx)((()=>[c])),_:1})])),_:1})),(0,a.createVNode)(a.TransitionGroup,{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut",class:"row q-col-gutter-md",tag:"div"},{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(e.myTokens,(o=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{key:o.symbol+o.contract,class:"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4"},[(0,a.createVNode)(v,{token:o,onUpdatebalance:t[0]||(t[0]=t=>e.getTokens())},null,8,["token"])])))),128))])),_:1}),e.is_loading?((0,a.openBlock)(),(0,a.createElementBlock)("div",d,[(0,a.createVNode)(N,{color:"primary",size:"60px"})])):(0,a.createCommentVNode)("",!0)])),_:1})}var u=o(10741),m=o(33314);const p={class:"q-mt-md"},h=(0,a.createElementVNode)("div",null,"Waiting for signature",-1);function g(e,t,o,n,r,i){const l=(0,a.resolveComponent)("q-img"),c=(0,a.resolveComponent)("q-item-section"),d=(0,a.resolveComponent)("q-btn"),s=(0,a.resolveComponent)("q-item"),u=(0,a.resolveComponent)("q-card"),m=(0,a.resolveComponent)("page-header"),g=(0,a.resolveComponent)("q-input"),w=(0,a.resolveComponent)("q-card-section"),C=(0,a.resolveComponent)("q-spinner"),k=(0,a.resolveComponent)("q-dialog"),f=(0,a.resolveDirective)("close-popup");return(0,a.openBlock)(),(0,a.createElementBlock)("div",null,[(0,a.createVNode)(u,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(s,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(c,{avatar:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(l,{contain:"",src:e.token.logo,"spinner-color":"white",style:{height:"60px",width:"60px"}},null,8,["src"])])),_:1}),(0,a.createVNode)(c,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.token.quantity),1)])),_:1}),(0,a.createVNode)(c,{side:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(d,{label:"withdraw",onClick:t[0]||(t[0]=t=>e.withdraw_dialog=!0),color:"primary",disabled:!e.getCoreConfig.conf.withdrawals},null,8,["disabled"])])),_:1})])),_:1})])),_:1}),(0,a.createVNode)(k,{modelValue:e.withdraw_dialog,"onUpdate:modelValue":t[2]||(t[2]=t=>e.withdraw_dialog=t)},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(u,{class:"overflow-hidden",style:{"min-width":"350px"}},{default:(0,a.withCtx)((()=>[e.getIsTransacting?((0,a.openBlock)(),(0,a.createBlock)(w,{key:1,class:"column justify-center items-center q-pb-md"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(C,{color:"primary",size:"60px"}),h])),_:1})):((0,a.openBlock)(),(0,a.createBlock)(w,{key:0},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(m,{title:`Withdraw ${e.token.symbol}`},null,8,["title"]),(0,a.withDirectives)((0,a.createVNode)(d,{icon:"close",flat:"",round:"",dense:"",class:"q-ma-md absolute-top-right"},null,512),[[f]]),(0,a.createElementVNode)("div",p,[(0,a.createVNode)(g,{type:"number",modelValue:e.withdraw_quantity,"onUpdate:modelValue":t[1]||(t[1]=t=>e.withdraw_quantity=t),label:"quantity",outlined:"","bottom-slots":"",placeholder:`${e.token.symbol} amount`,"no-error-icon":"",rules:[e=>!!e||"* Required",e=>e>0||"Must be greater then zero",e.validateWithdrawAmount]},{append:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.token.symbol),1)])),_:1},8,["modelValue","placeholder","rules"]),(0,a.createVNode)(d,{color:"primary",class:"q-mt-md full-width",label:"withdraw",disabled:!e.withdraw_quantity_validated,onClick:e.withdraw},null,8,["disabled","onClick"])])])),_:1}))])),_:1})])),_:1},8,["modelValue"])])}const w=(0,a.defineComponent)({name:"userBalanceCard",components:{pageHeader:m.Z},props:{token:{default:()=>({}),type:Object}},data(){return{withdraw_dialog:!1,withdraw_quantity:"",withdraw_quantity_validated:!1}},computed:{...(0,u.Se)({getAccountName:"proton/getAccountName",getActiveGroup:"group/getActiveGroup",getIsMember:"user/getIsMember",getCoreConfig:"group/getCoreConfig",getIsTransacting:"proton/getIsTransacting"})},methods:{async withdraw(){let e={account:this.getActiveGroup,name:"widthdraw",data:{account:this.getAccountName,amount:{contract:this.token.contract,quantity:Number(this.withdraw_quantity).toFixed(this.token.precision)+" "+this.token.symbol}}},t=await this.$store.dispatch("proton/transact",{actions:[e],disable_signing_overlay:!0});if(!t||!t.trxid)return!1;this.withdraw_dialog=!1,setTimeout((()=>{this.$emit("updatebalance")}),1e3)},validateWithdrawAmount(e){return Number(e)>Number(this.token.amount)?(this.withdraw_quantity_validated=!1,`You only have ${this.token.quantity}`):(this.withdraw_quantity_validated=!0,!0)}}});var C=o(74260),k=o(10151),f=o(83414),v=o(52035),N=o(24152),x=o(2165),y=o(46778),V=o(25589),_=o(64689),b=o(6833),q=o(60677),B=o(7518),T=o.n(B);const Z=(0,C.Z)(w,[["render",g]]),I=Z;T()(w,"components",{QCard:k.Z,QItem:f.Z,QItemSection:v.Z,QImg:N.Z,QBtn:x.Z,QDialog:y.Z,QCardSection:V.Z,QInput:_.Z,QSpinner:b.Z}),T()(w,"directives",{ClosePopup:q.Z});const A=(0,a.defineComponent)({name:"vote",components:{pageHeader:m.Z,userBalanceCard:I},data(){return{myTokens:[],is_loading:!1}},computed:{...(0,u.Se)({getAccountName:"proton/getAccountName",getActiveGroup:"group/getActiveGroup",getIsMember:"user/getIsMember",getCoreConfig:"group/getCoreConfig"})},methods:{async getTokens(){this.getAccountName&&(this.is_loading=!0,this.myTokens=await this.$store.dispatch("group/fetchTokensOwnedByScope",{groupname:this.getActiveGroup,scope:this.getAccountName,vm:this}),this.is_loading=!1)}},watch:{getAccountName:{immediate:!0,handler(e,t){e&&e!=t&&this.getTokens()}}}});var Q=o(24379),S=o(24554),D=o(2350);const E=(0,C.Z)(A,[["render",s]]),G=E;T()(A,"components",{QPage:Q.Z,QCard:k.Z,QItem:f.Z,QItemSection:v.Z,QIcon:S.Z,QItemLabel:D.Z,QCardSection:V.Z,QSpinner:b.Z})}}]);