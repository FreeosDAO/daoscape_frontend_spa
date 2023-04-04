"use strict";(self["webpackChunkthedaoscapefrontend"]=self["webpackChunkthedaoscapefrontend"]||[]).push([[6657],{99102:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Z});var a=o(34182);const n={key:"loading",class:"col-xs-12 nft"},c=(0,a.createTextVNode)(" Loading "),l={key:"loading",class:"col-xs-12 nft"},r=(0,a.createTextVNode)(" This DAO doesn't hold any NFTs. "),i={key:"loading",class:"col-xs-12 nft"},s={key:1,controls:"",muted:"",loop:"",preload:"auto"},d=["src"],p={class:"row no-wrap items-center text-grey text-caption"},m={class:"col ellipsis"},g={class:"col-auto row no-wrap items-center"},h={class:"row no-wrap items-center"},f={class:"col text-h6 ellipsis"},u={class:"text-h6"},k={class:"row align-center justify-center q-mt-lg"},N=(0,a.createTextVNode)(" Load More ");function v(e,t,o,v,w,C){const V=(0,a.resolveComponent)("page-header"),x=(0,a.resolveComponent)("q-card-section"),y=(0,a.resolveComponent)("q-card"),B=(0,a.resolveComponent)("q-img"),_=(0,a.resolveComponent)("q-separator"),A=(0,a.resolveComponent)("q-btn"),E=(0,a.resolveComponent)("q-card-actions"),F=(0,a.resolveComponent)("q-page");return(0,a.openBlock)(),(0,a.createBlock)(F,{padding:"",class:"constrain-page-width q-pb-lg"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(V,{title:"NFTs"}),(0,a.createVNode)(a.TransitionGroup,{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut",class:"row q-col-gutter-md q-mt-md items-stretch",tag:"div"},{default:(0,a.withCtx)((()=>[e.nftsLoading?((0,a.openBlock)(),(0,a.createElementBlock)("div",n,[(0,a.createVNode)(y,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(x,{class:"bg-grey-9 text-white loading"},{default:(0,a.withCtx)((()=>[c])),_:1})])),_:1})])):(0,a.createCommentVNode)("",!0),e.nftsLoading||e.nfts.length||e.error?(0,a.createCommentVNode)("",!0):((0,a.openBlock)(),(0,a.createElementBlock)("div",l,[(0,a.createVNode)(y,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(x,{class:"bg-grey-9 text-white loading"},{default:(0,a.withCtx)((()=>[r])),_:1})])),_:1})])),!e.nftsLoading&&e.error?((0,a.openBlock)(),(0,a.createElementBlock)("div",i,[(0,a.createVNode)(y,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(x,{class:"bg-grey-9 text-white loading"},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.error),1)])),_:1})])),_:1})])):(0,a.createCommentVNode)("",!0),e.nfts.length?((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,{key:3},(0,a.renderList)(e.nfts,(t=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{key:t.asset_id,class:"col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 nft"},[(0,a.createVNode)(y,null,{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("figure",null,["image"in t.data&&t.data.image?((0,a.openBlock)(),(0,a.createBlock)(B,{key:0,src:"https://bloks.io/cdn-cgi/image/width=500/https://proton.mypinata.cloud/ipfs/"+t.data.image,alt:t.data.name},null,8,["src","alt"])):"video"in t.data&&t.data.video?((0,a.openBlock)(),(0,a.createElementBlock)("video",s,[(0,a.createElementVNode)("source",{src:"https://proton.mypinata.cloud/ipfs/"+t.data.video},null,8,d)])):((0,a.openBlock)(),(0,a.createBlock)(B,{key:2,src:"https://via.placeholder.com/1080x720/dddddd/000000/?text=NO%20MEDIA",alt:t.data.name},null,8,["alt"]))]),(0,a.createVNode)(x,null,{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",p,[(0,a.createElementVNode)("div",m,(0,a.toDisplayString)("name"in t.collection&&t.collection.name?t.collection.name:t.collection.collection_name),1),(0,a.createElementVNode)("div",g," #"+(0,a.toDisplayString)(t.template_mint),1)]),(0,a.createElementVNode)("div",h,[(0,a.createElementVNode)("div",f,[(0,a.createElementVNode)("p",u,(0,a.toDisplayString)(t.data.name),1)])])])),_:2},1024),(0,a.createVNode)(_),(0,a.createVNode)(E,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(A,{flat:"",color:"primary",target:"_blank","icon-right":"mdi-open-in-new",align:"between",label:"View",href:e.getAppConfig.nft.url+"/"+t.collection.collection_name+"/"+t.template.template_id},null,8,["href"])])),_:2},1024)])),_:2},1024)])))),128)):(0,a.createCommentVNode)("",!0)])),_:1}),(0,a.createElementVNode)("div",k,[this.checkData.length?((0,a.openBlock)(),(0,a.createBlock)(A,{key:0,onClick:t[0]||(t[0]=t=>e.checkForMoreNFTs()),flat:"",color:"secondary"},{default:(0,a.withCtx)((()=>[N])),_:1})):(0,a.createCommentVNode)("",!0)])])),_:1})}o(10071);var w=o(33314),C=o(55250),V=o(40019);const x=(0,a.defineComponent)({name:"groupNfts",components:{pageHeader:w.Z},data(){return{nftsLoading:!0,nfts:[],perPage:6,page:1,checkData:[],error:!1}},computed:{...(0,C.Se)({getActiveGroup:"group/getActiveGroup",getAppConfig:"app/getAppConfig"})},methods:{async getNftsFromAtomic(){let e=await this.callAtomic();if(V.log("nfts",e),this.nftsLoading=!1,this.nfts=e.data.data,!this.nfts.length)return!0;this.checkForMoreNFTs()},async checkForMoreNFTs(){this.page++,this.nfts.push(...this.checkData),this.checkData={};let e=await this.callAtomic();V.log("more check",e),this.checkData=e.data.data},async callAtomic(){let e=`${this.getAppConfig.nft.api}/atomicassets/v1/assets?owner=${this.getActiveGroup}&page=${this.page}&limit=${this.perPage}&order=desc&sort=asset_id`;return V.warn("calling",e),await this.$axios.get(e).catch((e=>{this.nftsLoading=!1,this.error=e}))}},watch:{getActiveGroup(){this.getNftsFromAtomic()}},mounted(){this.getActiveGroup&&this.getNftsFromAtomic()}});var y=o(74260),B=o(24379),_=o(10151),A=o(25589),E=o(24152),F=o(65869),b=o(99367),q=o(2165),D=o(7518),T=o.n(D);const L=(0,y.Z)(x,[["render",v],["__scopeId","data-v-21fd150e"]]),Z=L;T()(x,"components",{QPage:B.Z,QCard:_.Z,QCardSection:A.Z,QImg:E.Z,QSeparator:F.Z,QCardActions:b.Z,QBtn:q.Z})}}]);