"use strict";(self["webpackChunkthedaoscapefrontend"]=self["webpackChunkthedaoscapefrontend"]||[]).push([[323],{13851:(e,t,a)=>{a.r(t),a.d(t,{default:()=>et});var o=a(34182);const n={key:0},l={key:0},r={key:1},c={class:"text-caption"},i={key:0},s=(0,o.createTextVNode)("Add payment to payroll "),d={key:1},p={key:"payments"},m={class:"relative-position",key:"add"},u=(0,o.createTextVNode)(" No payrolls configured yet. ");function y(e,t,a,y,h,_){const v=(0,o.resolveComponent)("page-header"),V=(0,o.resolveComponent)("q-icon"),g=(0,o.resolveComponent)("q-input"),C=(0,o.resolveComponent)("q-tooltip"),N=(0,o.resolveComponent)("q-tab"),f=(0,o.resolveComponent)("q-tabs"),k=(0,o.resolveComponent)("q-separator"),w=(0,o.resolveComponent)("payroll-stats"),x=(0,o.resolveComponent)("q-card"),b=(0,o.resolveComponent)("q-toolbar-title"),B=(0,o.resolveComponent)("q-space"),P=(0,o.resolveComponent)("q-btn"),q=(0,o.resolveComponent)("q-toolbar"),Z=(0,o.resolveComponent)("payment"),E=(0,o.resolveComponent)("q-list"),T=(0,o.resolveComponent)("no-items"),S=(0,o.resolveComponent)("add-payment"),Q=(0,o.resolveComponent)("action-proposer"),$=(0,o.resolveComponent)("q-card-section"),A=(0,o.resolveComponent)("q-page");return(0,o.openBlock)(),(0,o.createBlock)(A,{padding:"",class:"constrain-page-width"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(v,{title:"Payrolls"}),e.getPayrolls.length?((0,o.openBlock)(),(0,o.createElementBlock)("div",n,[(0,o.createVNode)(g,{placeholder:"Find Payment",outlined:"",modelValue:e.searchfilter,"onUpdate:modelValue":t[1]||(t[1]=t=>e.searchfilter=t),modelModifiers:{trim:!0},class:"",onInput:t[2]||(t[2]=t=>e.add_payment_view=!1)},{prepend:(0,o.withCtx)((()=>[(0,o.createVNode)(V,{name:"search",class:"cursor-pointer"})])),append:(0,o.withCtx)((()=>[(0,o.createVNode)(o.Transition,{appear:"","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutRight",tag:"div"},{default:(0,o.withCtx)((()=>[e.searchfilter.length?((0,o.openBlock)(),(0,o.createBlock)(V,{name:"close",key:"has_filter",onClick:t[0]||(t[0]=t=>e.searchfilter=""),class:"cursor-pointer"})):(0,o.createCommentVNode)("",!0)])),_:1})])),_:1},8,["modelValue"]),(0,o.createVNode)(f,{modelValue:e.active_payroll,"onUpdate:modelValue":t[3]||(t[3]=t=>e.active_payroll=t),class:"text-primary",dense:"",align:"left"},{default:(0,o.withCtx)((()=>[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.getPayrolls,(e=>((0,o.openBlock)(),(0,o.createBlock)(N,{key:e.payroll_tag,label:e.payroll_tag,name:e.payroll_tag},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(C,{class:"bg-secondary",delay:700},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(e.description||"No description"),1)])),_:2},1024)])),_:2},1032,["label","name"])))),128))])),_:1},8,["modelValue"]),(0,o.createVNode)(k),(0,o.createVNode)(x,{class:"q-pa-sm q-my-md"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(w,{payroll:e.getActivePayRoll,onOnbalance:t[4]||(t[4]=t=>e.active_payroll_balance=t)},null,8,["payroll"])])),_:1}),(0,o.createVNode)(x,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(q,{class:"bg-secondary text-white shadow-2"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(b,{shrink:!0},{default:(0,o.withCtx)((()=>[e.add_payment_view?((0,o.openBlock)(),(0,o.createElementBlock)("span",r,"Add Payment")):((0,o.openBlock)(),(0,o.createElementBlock)("span",l,"Pending Payments")),(0,o.createElementVNode)("span",c," ("+(0,o.toDisplayString)(e.getActivePayRoll.payroll_tag)+")",1)])),_:1}),(0,o.createVNode)(B),(0,o.createVNode)(P,{round:"",dense:"",icon:e.add_payment_view?"mdi-minus":"mdi-plus",color:"primary",onClick:t[5]||(t[5]=t=>e.add_payment_view=!e.add_payment_view)},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(C,{class:"bg-secondary",delay:500},{default:(0,o.withCtx)((()=>[e.add_payment_view?((0,o.openBlock)(),(0,o.createElementBlock)("span",d,"Go back to pending payments")):((0,o.openBlock)(),(0,o.createElementBlock)("span",i,[s,(0,o.createElementVNode)("b",null,(0,o.toDisplayString)(e.getActivePayRoll.payroll_tag),1)]))])),_:1})])),_:1},8,["icon"])])),_:1}),(0,o.createVNode)(o.Transition,{"enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut",mode:"out-in",tag:"div"},{default:(0,o.withCtx)((()=>[e.add_payment_view?((0,o.openBlock)(),(0,o.createElementBlock)("div",m,[(0,o.createVNode)(Q,null,{default:(0,o.withCtx)((t=>[(0,o.createVNode)(S,{onPropose:t.propose,onAddtobucket:t.addtobucket,payroll:e.getActivePayRoll,currentbalance:e.active_payroll_balance},null,8,["onPropose","onAddtobucket","payroll","currentbalance"])])),_:1})])):((0,o.openBlock)(),(0,o.createElementBlock)("div",p,[e.filterPayments.length?((0,o.openBlock)(),(0,o.createBlock)(E,{key:0,class:"primary-hover-list",separator:"",striped:""},{default:(0,o.withCtx)((()=>[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.filterPayments,((e,t)=>((0,o.openBlock)(),(0,o.createBlock)(Z,{key:e.pay_id,payment:e,class:(0,o.normalizeClass)("")},null,8,["payment","class"])))),128))])),_:1})):((0,o.openBlock)(),(0,o.createBlock)(E,{key:1,bordered:"",separator:"",striped:""},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(T,{text:"No payments"})])),_:1}))]))])),_:1})])),_:1})])):((0,o.openBlock)(),(0,o.createBlock)(x,{key:1},{default:(0,o.withCtx)((()=>[(0,o.createVNode)($,null,{default:(0,o.withCtx)((()=>[u])),_:1})])),_:1}))])),_:1})}var h=a(10741),_=a(24613),v=a(33314),V=a(98062);const g={class:"row q-col-gutter-md q-pb-xs q-mt-md"},C={class:"col-xs-12 col-sm-6"},N={class:"col-xs-12 col-sm-6"},f={key:0,class:"row items-center text-warning"},k={class:"col-xs-12 col-sm-6"},w={class:"col-xs-12 col-sm-6"},x={class:"col-xs-12 col-sm-6"},b={class:"q-mr-md"},B={class:"col-xs-12 col-sm-6"},P=(0,o.createTextVNode)(" X "),q={class:"row justify-between full-width items-center"};function Z(e,t,a,n,l,r){const c=(0,o.resolveComponent)("profile-pic"),i=(0,o.resolveComponent)("q-input"),s=(0,o.resolveComponent)("q-icon"),d=(0,o.resolveComponent)("pick-chain-date"),p=(0,o.resolveComponent)("q-toggle"),m=(0,o.resolveComponent)("q-select"),u=(0,o.resolveComponent)("threshold-badge"),y=(0,o.resolveComponent)("propose-bucket-btn"),h=(0,o.resolveComponent)("q-card-section");return(0,o.openBlock)(),(0,o.createBlock)(h,null,{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("div",g,[(0,o.createElementVNode)("div",C,[(0,o.createVNode)(i,{ref:"receiver",modelValue:e.action.data.receiver,"onUpdate:modelValue":t[0]||(t[0]=t=>e.action.data.receiver=t),label:"receiver",outlined:"","bottom-slots":"",maxlength:"12",rules:[e=>!!e||"* Required",e.isValidAccountName,e.isExistingAccountNameWrapper]},{prepend:(0,o.withCtx)((()=>[(0,o.createVNode)(c,{account:e.action.data.receiver,size:36},null,8,["account"])])),_:1},8,["modelValue","rules"])]),(0,o.createElementVNode)("div",N,[(0,o.createVNode)(i,{ref:"amount",type:"number",modelValue:e.action.data.amount,"onUpdate:modelValue":t[1]||(t[1]=t=>e.action.data.amount=t),label:"quantity",outlined:"","bottom-slots":"",placeholder:"eos amount","no-error-icon":"",rules:[e=>!!e||"* Required",e=>e>0||"Must be greater then zero"]},{append:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(e.payroll.total_paid.quantity.split(" ")[1]),1)])),hint:(0,o.withCtx)((()=>[(0,o.createVNode)(o.Transition,{"enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut",tag:"div"},{default:(0,o.withCtx)((()=>[e.balance_overdraw_warning?((0,o.openBlock)(),(0,o.createElementBlock)("div",f,[(0,o.createVNode)(s,{name:"mdi-alert",class:"q-mr-xs"}),(0,o.createTextVNode)("Amount will make "+(0,o.toDisplayString)(e.payroll.pay_permission.actor)+" insolvent ",1)])):(0,o.createCommentVNode)("",!0)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,o.createElementVNode)("div",k,[(0,o.createVNode)(d,{onInput:t[2]||(t[2]=t=>e.action.data.due_date=t),label:"due date"})]),(0,o.createElementVNode)("div",w,[(0,o.createVNode)(i,{ref:"memo",modelValue:e.action.data.memo,"onUpdate:modelValue":t[3]||(t[3]=t=>e.action.data.memo=t),label:"memo",outlined:"","bottom-slots":"",placeholder:"optional memo","no-error-icon":"",rules:[]},null,8,["modelValue"])]),(0,o.createElementVNode)("div",x,[(0,o.createElementVNode)("span",b,[(0,o.createVNode)(p,{label:"Recurrent Payment",modelValue:e.is_recurrent_payment,"onUpdate:modelValue":t[4]||(t[4]=t=>e.is_recurrent_payment=t)},null,8,["modelValue"]),e.is_recurrent_payment?((0,o.openBlock)(),(0,o.createBlock)(s,{key:0,name:"mdi-check",color:"positive",size:"24px"})):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("span",null,[(0,o.createVNode)(p,{label:"Auto Pay With Croneos",modelValue:e.action.data.auto_pay,"onUpdate:modelValue":t[5]||(t[5]=t=>e.action.data.auto_pay=t)},null,8,["modelValue"]),e.action.data.auto_pay?((0,o.openBlock)(),(0,o.createBlock)(s,{key:0,name:"mdi-check",color:"positive",size:"24px"})):(0,o.createCommentVNode)("",!0)])]),(0,o.createElementVNode)("div",B,[(0,o.createVNode)(o.Transition,{"enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut",mode:"out-in",tag:"div"},{default:(0,o.withCtx)((()=>[e.is_recurrent_payment?((0,o.openBlock)(),(0,o.createBlock)(m,{borderless:"",modelValue:e.recurrence_delay,"onUpdate:modelValue":t[7]||(t[7]=t=>e.recurrence_delay=t),options:e.recurrence_delay_options,outlined:"",label:"repeat","bottom-slots":"",key:"recurrent"},{after:(0,o.withCtx)((()=>[(0,o.createVNode)(i,{style:{"max-width":"80px"},modelValue:e.action.data.repeat,"onUpdate:modelValue":t[6]||(t[6]=t=>e.action.data.repeat=t),label:"pay",outlined:""},{append:(0,o.withCtx)((()=>[P])),_:1},8,["modelValue"])])),_:1},8,["modelValue","options"])):(0,o.createCommentVNode)("",!0)])),_:1})]),(0,o.createElementVNode)("div",q,[(0,o.createVNode)(u,{label:"",contract:e.action.account,action_name:e.action.name},null,8,["contract","action_name"]),(0,o.createVNode)(y,{onClickPropose:e.emitPropose,onClickBucket:e.emitBucket,label:"Add Payment",disabled:!1},null,8,["onClickPropose","onClickBucket"])])])])),_:1})}var E=a(69917),T=a(92287),S=a(37446);const Q={class:"",style:{}};function $(e,t,a,n,l,r){const c=(0,o.resolveComponent)("q-date"),i=(0,o.resolveComponent)("q-popup-proxy"),s=(0,o.resolveComponent)("q-icon"),d=(0,o.resolveComponent)("q-time"),p=(0,o.resolveComponent)("q-input");return(0,o.openBlock)(),(0,o.createElementBlock)("div",Q,[(0,o.createVNode)(p,{outlined:"",modelValue:e.date,"onUpdate:modelValue":t[2]||(t[2]=t=>e.date=t),label:e.label,"bottom-slots":""},{prepend:(0,o.withCtx)((()=>[(0,o.createVNode)(s,{name:"event",class:"cursor-pointer"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(i,{"transition-show":"scale","transition-hide":"scale"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(c,{modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),mask:"YYYY-MM-DDTHH:mm",minimal:!1,options:t=>t>=e.now},null,8,["modelValue","options"])])),_:1})])),_:1})])),append:(0,o.withCtx)((()=>[(0,o.createVNode)(s,{name:"access_time",class:"cursor-pointer"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(i,{"transition-show":"scale","transition-hide":"scale"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(d,{modelValue:e.date,"onUpdate:modelValue":t[1]||(t[1]=t=>e.date=t),mask:"YYYY-MM-DDTHH:mm",format24h:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","label"])])}var A=a(25616);const D=(0,o.defineComponent)({props:{label:""},data(){return{date:"",now:A.ZP.formatDate(new Date,"YYYY/MM/DD")}},watch:{date:{immediate:!0,handler(e,t){this.$emit("input",e)}}}});var I=a(74260),z=a(64689),M=a(24554),O=a(83944),R=a(85626),F=a(35990),U=a(7518),Y=a.n(U);const J=(0,I.Z)(D,[["render",$]]),G=J;Y()(D,"components",{QInput:z.Z,QIcon:M.Z,QPopupProxy:O.Z,QDate:R.Z,QTime:F.Z});var L=a(47592),H=a(63850),W=a(40019);const j=(0,o.defineComponent)({name:"addPayment",components:{thresholdBadge:E.Z,proposeBucketBtn:T.Z,profilePic:S.Z,pickChainDate:G},props:{payroll:!1,currentbalance:""},data(){return{is_recurrent_payment:!1,formIsValidated:!1,token_contract:"eosio.token",symbol:"EOS",recurrence_delay:{label:"monthly",value:2592e3},recurrence_delay_options:H.A.options,action:{account:"",name:"paymentadd",data:{payroll_tag:this.payroll.payroll_tag,receiver:"",amount:"",memo:"",due_date:"",repeat:1,recurrence_sec:0,auto_pay:!1},authorization:[]},balance_overdraw_warning:""}},computed:{...(0,h.Se)({getActiveGroup:"group/getActiveGroup",getGroupWallet:"group/getGroupWallet",getModuleByName:"group/getModuleByName"})},methods:{isValidAccountName:L.ZF,isExistingAccountName:L.oO,async isExistingAccountNameWrapper(e){return await(0,L.oO)({value:e,vm:this})},getPrecision(){let e=this.payroll.total_paid.quantity.split(" ")[0],t=e.split(".")[1];return t?t.length:0},emitPropose(){if(this.$refs.amount.validate(),this.$refs.receiver.validate(),this.$refs.amount.hasError||this.$refs.receiver.hasError)return;let e=JSON.parse(JSON.stringify(this.action));e.data.amount=e.data.amount+" "+this.symbol;let t=`Add ${e.data.receiver} to payroll ${this.payroll.payroll_tag}`,a=`Pay ${e.data.receiver} ${e.data.amount}.\n`;e.data.repeat>1&&(a+=`This is a ${H.A.get(e.data.recurrence_sec)} recurrent payment. It will be repeated ${e.data.repeat} times.`);const o={actions:[e],description:a,title:t};this.$emit("propose",o)},emitBucket(){if(this.$refs.amount.validate(),this.$refs.receiver.validate(),this.$refs.amount.hasError||this.$refs.receiver.hasError)return;let e=JSON.parse(JSON.stringify(this.action));e.data.amount=e.data.amount+" "+this.symbol,this.$emit("addtobucket",e)},handleChange(e){W.log(111,e)}},mounted(){let e=this.getModuleByName("payroll");this.action.account=e.slave_permission.actor,this.action.authorization.push(e.slave_permission),this.symbol=this.payroll.total_paid.quantity.split(" ")[1]},watch:{"action.data.amount":function(e,t){if(this.action.data.amount){this.action.data.amount=Number(this.action.data.amount).toFixed(this.getPrecision());let e=parseFloat(this.currentbalance)-parseFloat(this.payroll.total_allocated);this.action.data.amount>e?this.balance_overdraw_warning="warning":this.balance_overdraw_warning=""}},is_recurrent_payment:function(e,t){!1===e?(this.action.data.repeat=1,this.action.data.recurrence_sec=0):(this.action.data.repeat=2,this.action.data.recurrence_sec=this.recurrence_delay.value)},recurrence_delay:function(e,t){this.action.data.recurrence_sec=this.recurrence_delay.value}}});var X=a(25589),K=a(28886),ee=a(63314);const te=(0,I.Z)(j,[["render",Z]]),ae=te;Y()(j,"components",{QCardSection:X.Z,QInput:z.Z,QIcon:M.Z,QToggle:K.Z,QSelect:ee.Z});var oe=a(3229);const ne=(0,o.createTextVNode)("memo"),le={key:0,class:"text-caption"};function re(e,t,a,n,l,r){const c=(0,o.resolveComponent)("profile-pic"),i=(0,o.resolveComponent)("q-item-section"),s=(0,o.resolveComponent)("q-item-label"),d=(0,o.resolveComponent)("q-badge"),p=(0,o.resolveComponent)("remove-payment"),m=(0,o.resolveComponent)("action-proposer"),u=(0,o.resolveComponent)("q-card"),y=(0,o.resolveComponent)("q-expansion-item");return(0,o.openBlock)(),(0,o.createBlock)(y,null,{header:(0,o.withCtx)((()=>[(0,o.createVNode)(i,{avatar:""},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(c,{size:42,icon:"mdi-transfer-left",iconColor:"primary",account:e.payment.receiver},null,8,["account"])])),_:1}),(0,o.createVNode)(i,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(s,{class:"text-capitalize"},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(e.payment.receiver),1)])),_:1}),(0,o.createVNode)(s,{caption:""},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("ID "+(0,o.toDisplayString)(e.payment.pay_id),1)])),_:1})])),_:1}),e.payment.memo?((0,o.openBlock)(),(0,o.createBlock)(i,{key:0},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(s,{class:"text-capitalize"},{default:(0,o.withCtx)((()=>[ne])),_:1}),(0,o.createVNode)(s,{caption:""},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(e.payment.memo),1)])),_:1})])),_:1})):(0,o.createCommentVNode)("",!0),e.convert_recurrence_sec(e.payment.recurrence_sec)?((0,o.openBlock)(),(0,o.createBlock)(i,{key:1},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("span",null,[(0,o.createVNode)(d,null,{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(e.convert_recurrence_sec(e.payment.recurrence_sec)),1)])),_:1})])])),_:1})):(0,o.createCommentVNode)("",!0),(0,o.createVNode)(i,{side:""},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(e.payment.amount),1),e.payment.repeat>1?((0,o.openBlock)(),(0,o.createElementBlock)("span",le," (x"+(0,o.toDisplayString)(e.payment.repeat)+")",1)):(0,o.createCommentVNode)("",!0)])])),_:1})])),default:(0,o.withCtx)((()=>[(0,o.createVNode)(u,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(m,null,{default:(0,o.withCtx)((t=>[(0,o.createVNode)(p,{payment:e.payment,onPropose:t.propose,onAddtobucket:t.addtobucket},null,8,["payment","onPropose","onAddtobucket"])])),_:1})])),_:1})])),_:1})}const ce={class:"row justify-between full-width items-center"};function ie(e,t,a,n,l,r){const c=(0,o.resolveComponent)("payment-details"),i=(0,o.resolveComponent)("threshold-badge"),s=(0,o.resolveComponent)("propose-bucket-btn"),d=(0,o.resolveComponent)("q-card-section"),p=(0,o.resolveComponent)("q-card");return(0,o.openBlock)(),(0,o.createBlock)(p,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(c,{payment:e.payment},null,8,["payment"]),(0,o.createVNode)(d,null,{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("div",ce,[(0,o.createVNode)(i,{label:"",contract:e.action.account,action_name:e.action.name},null,8,["contract","action_name"]),(0,o.createVNode)(s,{onClickPropose:e.emitPropose,onClickBucket:e.emitBucket,label:"Remove From payroll",disabled:!1},null,8,["onClickPropose","onClickBucket"])])])),_:1})])),_:1})}var se=a(6781);const de=(0,o.defineComponent)({name:"removePayment",components:{thresholdBadge:E.Z,proposeBucketBtn:T.Z,paymentDetails:se.Z},props:{payment:!1},data(){return{action:{account:"",name:"paymentrem",data:{pay_id:this.payment.pay_id},authorization:[]}}},computed:{...(0,h.Se)({getModuleByName:"group/getModuleByName"})},mounted(){let e=this.getModuleByName("payroll");this.action.account=e.slave_permission.actor,this.action.authorization.push(e.slave_permission)},methods:{emitPropose(){let e=JSON.parse(JSON.stringify(this.action)),t=`Remove ${this.payment.receiver} from payroll ${this.payment.payroll_tag}`,a=`Remove ID ${this.payment.pay_id} from payroll ${this.payment.payroll_tag}. All payments associated with this pay_id will be cancelled.`;const o={actions:[e],description:a,title:t};this.$emit("propose",o)},emitBucket(){let e=JSON.parse(JSON.stringify(this.action));this.$emit("addtobucket",e)}}});var pe=a(10151);const me=(0,I.Z)(de,[["render",ie]]),ue=me;Y()(de,"components",{QCard:pe.Z,QCardSection:X.Z});const ye=(0,o.defineComponent)({name:"payment",props:{payment:!1},components:{profilePic:S.Z,removePayment:ue,actionProposer:V.Z},data(){return{}},methods:{convert_recurrence_sec(e){return H.A.get(e)}}});var he=a(60429),_e=a(52035),ve=a(2350),Ve=a(69721);const ge=(0,I.Z)(ye,[["render",re]]),Ce=ge;function Ne(e,t,a,n,l,r){return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,"to do")}Y()(ye,"components",{QExpansionItem:he.Z,QItemSection:_e.Z,QItemLabel:ve.Z,QBadge:Ve.Z,QIcon:M.Z,QCard:pe.Z});const fe=(0,o.defineComponent)({name:"newPayroll",data(){return{}}}),ke=(0,I.Z)(fe,[["render",Ne]]),we=ke,xe={key:0},be={class:"row justify-between items-center overflow-hidden"},Be={class:"row"},Pe={class:"q-mr-sm"},qe={class:"q-mr-sm"},Ze=(0,o.createTextVNode)("Pay Account"),Ee={class:"q-mr-sm"},Te=(0,o.createTextVNode)("Total Paid"),Se={class:"q-mr-sm"},Qe=(0,o.createTextVNode)("Allocated"),$e={class:"q-mr-sm"},Ae=(0,o.createTextVNode)("Balance");function De(e,t,a,n,l,r){const c=(0,o.resolveComponent)("q-tooltip"),i=(0,o.resolveComponent)("q-img"),s=(0,o.resolveComponent)("q-badge"),d=(0,o.resolveComponent)("q-icon");return e.payroll?((0,o.openBlock)(),(0,o.createElementBlock)("div",xe,[(0,o.createElementVNode)("div",be,[(0,o.createElementVNode)("div",Be,[(0,o.createElementVNode)("div",Pe,[(0,o.createVNode)(i,{src:e.getLogoForToken(e.payroll.total_paid.contract,e.payroll.total_paid.quantity.split(" ")[1]),style:{cursor:"help",height:"24px",width:"24px"}},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(c,{class:"bg-secondary",delay:500},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" Payment Token: "+(0,o.toDisplayString)(`${e.payroll.total_paid.quantity.split(" ")[1]} (${e.payroll.total_paid.contract})`),1)])),_:1})])),_:1},8,["src"])]),(0,o.createElementVNode)("div",qe,[(0,o.createVNode)(s,null,{default:(0,o.withCtx)((()=>[Ze])),_:1}),(0,o.createTextVNode)(" "+(0,o.toDisplayString)(`${e.payroll.pay_permission.actor}@${e.payroll.pay_permission.permission}`),1)]),(0,o.createElementVNode)("div",Ee,[(0,o.createVNode)(s,null,{default:(0,o.withCtx)((()=>[Te])),_:1}),(0,o.createTextVNode)(" "+(0,o.toDisplayString)(e.payroll.total_paid.quantity),1)]),(0,o.createElementVNode)("div",Se,[(0,o.createVNode)(s,null,{default:(0,o.withCtx)((()=>[Qe])),_:1}),(0,o.createTextVNode)(" "+(0,o.toDisplayString)(e.payroll.total_allocated),1)]),(0,o.createElementVNode)("div",$e,[(0,o.createVNode)(s,null,{default:(0,o.withCtx)((()=>[Ae])),_:1}),(0,o.createTextVNode)(" "+(0,o.toDisplayString)(e.current_balance),1)])]),(0,o.createVNode)(o.Transition,{appear:"","enter-active-class":"animated fadeInRight",mode:"out-in",tag:"div"},{default:(0,o.withCtx)((()=>[((0,o.openBlock)(),(0,o.createBlock)(d,{color:!1!==e.has_enough_balance?"positive":"warning",name:!1!==e.has_enough_balance?"mdi-check":"mdi-alert",size:"md",style:{cursor:"help"},key:!1!==e.has_enough_balance?"positive":"warning"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(c,{class:"bg-secondary",delay:500},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(!1!==e.has_enough_balance?`${e.payroll.pay_permission.actor} is solvent`:`Balance insufficient to pay allocated payments, need to top up ${e.payroll.pay_permission.actor}`),1)])),_:1})])),_:1},8,["color","name"]))])),_:1})])])):(0,o.createCommentVNode)("",!0)}const Ie=(0,o.defineComponent)({name:"payrollStats",props:{payroll:!1},data(){return{current_balance:""}},computed:{has_enough_balance(){if(this.current_balance)return parseFloat(this.current_balance)-parseFloat(this.payroll.total_allocated)>=0}},methods:{getLogoForToken:_.s,async getBalance(){let e=this.payroll.total_paid.quantity.split(" ")[1],t=await this.$eos.api.rpc.get_currency_balance(this.payroll.total_paid.contract,this.payroll.pay_permission.actor,e);t&&t.length?this.current_balance=t[0]:this.current_balance=`0 ${e}`,this.$emit("onbalance",this.current_balance)}},watch:{payroll:{immediate:!0,async handler(e,t){e&&this.getBalance()}}}});var ze=a(24152),Me=a(5363);const Oe=(0,I.Z)(Ie,[["render",De]]),Re=Oe;Y()(Ie,"components",{QImg:ze.Z,QTooltip:Me.Z,QBadge:Ve.Z,QIcon:M.Z});const Fe=(0,o.defineComponent)({name:"payroll",components:{pageHeader:v.Z,payrollStats:Re,payment:Ce,actionProposer:V.Z,addPayment:ae,noItems:oe.Z,newPayroll:we},data(){return{active_payroll:"",searchfilter:"",add_payment_view:!1,active_payroll_balance:"",new_payroll_view:!1}},computed:{...(0,h.Se)({getAccountName:"proton/getAccountName",getActiveGroup:"group/getActiveGroup",getModuleByName:"group/getModuleByName",getPayrolls:"payroll/getPayrolls",getPayments:"payroll/getPayments"}),has_payroll(){return this.getModuleByName("payroll")},filterPayments(){if(!this.getPayments.length||!this.active_payroll)return[];let e=this.getPayments.filter((e=>e.payroll_tag==this.active_payroll));return this.searchfilter&&(e=e.filter((e=>e.receiver.includes(this.searchfilter)||e.pay_id==this.searchfilter))),e},getActivePayRoll(){return this.getPayrolls.find((e=>e.payroll_tag==this.active_payroll))}},methods:{},watch:{has_payroll:{immediate:!0,async handler(e,t){e&&this.$store.dispatch("payroll/loadPayrollRoutine",{data:e.slave_permission.actor,vm:this})}},getPayrolls:{immediate:!0,async handler(e,t){e&&e.length&&(this.active_payroll=this.getPayrolls[0].payroll_tag)}}}});var Ue=a(24379),Ye=a(57547),Je=a(58408),Ge=a(65869),Le=a(39570),He=a(13747),We=a(62025),je=a(2165),Xe=a(27011);const Ke=(0,I.Z)(Fe,[["render",y]]),et=Ke;Y()(Fe,"components",{QPage:Ue.Z,QInput:z.Z,QIcon:M.Z,QTabs:Ye.Z,QTab:Je.Z,QTooltip:Me.Z,QSeparator:Ge.Z,QCard:pe.Z,QToolbar:Le.Z,QToolbarTitle:He.Z,QSpace:We.Z,QBtn:je.Z,QList:Xe.Z,QCardSection:X.Z})}}]);