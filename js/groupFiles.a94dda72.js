"use strict";(self["webpackChunkthedaoscapefrontend"]=self["webpackChunkthedaoscapefrontend"]||[]).push([[7514],{29074:(e,t,o)=>{o.r(t),o.d(t,{default:()=>qe});var n=o(34182);function i(e,t,o,i,l,a){const c=(0,n.resolveComponent)("files-index"),s=(0,n.resolveComponent)("file-viewer"),r=(0,n.resolveComponent)("q-page");return(0,n.openBlock)(),(0,n.createBlock)(r,{padding:"",class:"constrain-page-width"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(c,{onLoadfile:t[0]||(t[0]=t=>e.currentFile=t)}),(0,n.createVNode)(s,{file:e.currentFile,class:"q-mt-md"},null,8,["file"])])),_:1})}var l=o(55250);const a={key:0,class:"text-capitalize"},c=(0,n.createTextVNode)(" Edit document "),s=(0,n.createTextVNode)(" Remove document "),r={class:"row justify-center",key:"loading"},d={key:"loaded"},p={key:1},u={key:2,class:"text-caption"};function m(e,t,o,i,l,m){const h=(0,n.resolveComponent)("q-input"),f=(0,n.resolveComponent)("q-toolbar-title"),_=(0,n.resolveComponent)("q-space"),g=(0,n.resolveComponent)("q-tooltip"),k=(0,n.resolveComponent)("q-btn"),v=(0,n.resolveComponent)("q-toolbar"),C=(0,n.resolveComponent)("q-spinner"),b=(0,n.resolveComponent)("q-markdown"),w=(0,n.resolveComponent)("file-editer"),N=(0,n.resolveComponent)("action-proposer"),x=(0,n.resolveComponent)("q-card-section"),V=(0,n.resolveComponent)("q-card");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createElementVNode)("div",null,[(0,n.createVNode)(V,{style:{"min-height":"300px"}},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(v,{class:"bg-secondary text-white shadow-2"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(f,{shrink:!0},{default:(0,n.withCtx)((()=>[e.raw?((0,n.openBlock)(),(0,n.createBlock)(h,{key:1,dense:"",modelValue:e.file_title,"onUpdate:modelValue":t[0]||(t[0]=t=>e.file_title=t),"input-style":{padding:0,color:"#fff"}},null,8,["modelValue"])):((0,n.openBlock)(),(0,n.createElementBlock)("span",a,(0,n.toDisplayString)(e.getFileTitle()),1))])),_:1}),(0,n.createVNode)(_),e.content?((0,n.openBlock)(),(0,n.createBlock)(k,{key:0,icon:e.raw?"mdi-minus":"mdi-pencil",round:"",dense:"",color:"primary",onClick:t[1]||(t[1]=t=>e.raw=!e.raw)},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(g,{class:"bg-secondary",delay:500},{default:(0,n.withCtx)((()=>[c])),_:1})])),_:1},8,["icon"])):(0,n.createCommentVNode)("",!0),e.content?((0,n.openBlock)(),(0,n.createBlock)(k,{key:1,icon:"mdi-trash-can",round:"",dense:"",style:{"margin-left":"3px"},color:"primary",onClick:e.handleRemoveFile},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(g,{class:"bg-secondary",delay:500},{default:(0,n.withCtx)((()=>[s])),_:1})])),_:1},8,["onClick"])):(0,n.createCommentVNode)("",!0)])),_:1}),(0,n.createVNode)(x,null,{default:(0,n.withCtx)((()=>[(0,n.createVNode)(n.Transition,{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in"},{default:(0,n.withCtx)((()=>[e.is_loading?((0,n.openBlock)(),(0,n.createElementBlock)("div",r,[(0,n.createVNode)(C,{size:"66px",color:"primary"})])):((0,n.openBlock)(),(0,n.createElementBlock)("div",d,[e.raw?((0,n.openBlock)(),(0,n.createElementBlock)("div",p,[(0,n.createVNode)(N,null,{default:(0,n.withCtx)((t=>[(0,n.createVNode)(w,{fileid:e.file.id,filetitle:e.file_title,filescope:e.file.filescope,filecontent:e.content,onPropose:t.propose,onAddtobucket:t.addtobucket},null,8,["fileid","filetitle","filescope","filecontent","onPropose","onAddtobucket"])])),_:1})])):((0,n.openBlock)(),(0,n.createBlock)(b,{key:0,class:"text-weight-light",src:e.error?"could not find content":e.content,"no-abbreviation":!1},null,8,["src"])),e.content?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createElementBlock)("div",u,"No file selected"))]))])),_:1})])),_:1})])),_:1})])])}var h=o(33314),f=o(16336),_=o(98062);const g={class:"text-right q-mt-md"};function k(e,t,o,i,l,a){const c=(0,n.resolveComponent)("q-input"),s=(0,n.resolveComponent)("q-btn");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createVNode)(c,{modelValue:e.upload_action.data.content,"onUpdate:modelValue":t[0]||(t[0]=t=>e.upload_action.data.content=t),type:"textarea",autogrow:"","input-style":{padding:0},borderless:""},null,8,["modelValue"]),(0,n.createElementVNode)("div",g,[(0,n.createVNode)(s,{label:"update",color:"primary",onClick:e.emitPropose},null,8,["onClick"])])])}var v=o(47592),C=o(69917),b=o(92287),w=o(40019);const N=(0,n.defineComponent)({name:"fileEditer",props:{filecontent:"",filescope:"",filetitle:"",fileid:0},components:{thresholdBadge:C.Z,proposeBucketBtn:b.Z},data(){return{step:"editcontent",is_uploading:!1,is_publishing:!1,delete_action:{account:"",name:"filedelete",data:{file_scope:this.filescope,id:this.fileid}},upload_action:{account:"",name:"fileupload",data:{uploader:"",file_scope:this.filescope,content:this.filecontent}},publish_action:{account:"",name:"filepublish",data:{file_scope:"",trx_id:"",title:this.filetitle,block_num:""}}}},computed:{...(0,l.Se)({getAccountName:"proton/getAccountName",getActiveGroup:"group/getActiveGroup",getIsMember:"user/getIsMember",getLinkedThresholdForContractAction:"group/getLinkedThresholdForContractAction"})},methods:{isValidAccountName:v.ZF,async upload(){this.is_uploading=!0;let e=await this.$store.dispatch("proton/transact",{actions:[this.upload_action],disable_signing_overlay:!0});if(e&&e.trxid){this.publish_action.data.block_num=e.block_num,this.publish_action.data.trx_id=e.trxid,this.publish_action.data.file_scope=this.upload_action.data.file_scope,await new Promise((e=>{setTimeout(e,2e3)}));let t=await(0,f.tH)(e.trxid,e.block_num,"fileupload","content",this);w.log("receipt",e.block_num,"fetched",t.block_num),t&&t.found&&(this.publish_action.data.block_num=t.block_num)}this.is_uploading=!1},async emitPropose(){await this.upload();let e=JSON.parse(JSON.stringify(this.publish_action)),t=JSON.parse(JSON.stringify(this.delete_action));const o={actions:[t,e],title:`Add new file in category "${e.data.file_scope}"`,description:"todo"};w.log("file publish",o),this.$emit("propose",o)},async emitBucket(){await this.upload();let e=JSON.parse(JSON.stringify(this.publish_action));this.$emit("addtobucket",e)}},mounted(){},watch:{getAccountName:{immediate:!0,handler:function(e,t){this.getAccountName&&(this.upload_action.account=this.delete_action.account=this.publish_action.account=this.getActiveGroup,this.upload_action.data.uploader=this.getAccountName,this.content&&(this.upload_action.data.content=this.content))}}}});var x=o(74260),V=o(64689),y=o(2165),B=o(7518),Z=o.n(B);const A=(0,x.Z)(N,[["render",k]]),q=A;Z()(N,"components",{QInput:V.Z,QBtn:y.Z});var E=o(72663);const Q=(0,n.defineComponent)({name:"fileViewer",components:{pageHeader:h.Z,actionProposer:_.Z,fileEditer:q},props:{file:""},data(){return{content:"",error:!1,is_loading:!1,raw:!1,file_title:""}},computed:{...(0,l.Se)({getAccountName:"proton/getAccountName",getActiveGroup:"group/getActiveGroup"})},methods:{getFileTitle(){return this.file?this.file.title?this.file.title:"version "+this.file.id:"file viewer"},async get_uploaded_content_from_block(e){this.content="",this.raw=!1,this.error=!1,this.is_loading=!0;let t=await(0,f.tH)(e.trx_id,e.block_num,"fileupload","content",this);t.error?this.error=!0:this.content=t.content,this.is_loading=!1},async updateDocument(){this.raw=!1},async handleRemoveFile(){const e={account:this.getAccountName?this.getActiveGroup:"",name:"filedelete",data:{file_scope:this.file.filescope,id:this.file.id}},t=JSON.parse(JSON.stringify(e)),o={actions:[t],title:`Remove a file in category "${t.data.file_scope}"`,description:"Remove a file"};try{const e=await this.$store.dispatch("group/propose",{data:o,vm:this});if(e&&e.trxid)(0,E.t5)({message:`File ${this.file.id} of category ${this.file.filescope} was removed successfully!`});else{const t=e.message||e;(0,E.cB)({message:`${t}`})}}catch(n){(0,E.cB)({message:`${n.message}`})}}},watch:{file:{immediate:!0,handler:function(e,t){e&&e!=t&&(this.get_uploaded_content_from_block(e),this.file_title=this.getFileTitle())}}}});var S=o(10151),T=o(39570),I=o(13747),$=o(62025),F=o(5363),P=o(25589),G=o(6833);const L=(0,x.Z)(Q,[["render",m]]),O=L;Z()(Q,"components",{QCard:S.Z,QToolbar:T.Z,QToolbarTitle:I.Z,QInput:V.Z,QSpace:$.Z,QBtn:y.Z,QTooltip:F.Z,QCardSection:P.Z,QSpinner:G.Z});const J={key:0},j={key:1},M={key:0},z={key:1},D={key:"index"},R={key:0,class:"row items-center justify-center"},U={key:"add"};function H(e,t,o,i,l,a){const c=(0,n.resolveComponent)("q-toolbar-title"),s=(0,n.resolveComponent)("q-space"),r=(0,n.resolveComponent)("q-tooltip"),d=(0,n.resolveComponent)("q-btn"),p=(0,n.resolveComponent)("q-toolbar"),u=(0,n.resolveComponent)("q-spinner"),m=(0,n.resolveComponent)("q-item-label"),h=(0,n.resolveComponent)("q-item-section"),f=(0,n.resolveComponent)("q-separator"),_=(0,n.resolveComponent)("index-items"),g=(0,n.resolveComponent)("q-expansion-item"),k=(0,n.resolveComponent)("no-items"),v=(0,n.resolveComponent)("q-list"),C=(0,n.resolveComponent)("file-publisher"),b=(0,n.resolveComponent)("action-proposer"),w=(0,n.resolveComponent)("q-card-section"),N=(0,n.resolveComponent)("q-card");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createVNode)(N,null,{default:(0,n.withCtx)((()=>[(0,n.createVNode)(p,{class:"bg-secondary text-white shadow-2"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(c,{shrink:!0},{default:(0,n.withCtx)((()=>[e.add_document_view?((0,n.openBlock)(),(0,n.createElementBlock)("span",j,"Add document")):((0,n.openBlock)(),(0,n.createElementBlock)("span",J,"Documents"))])),_:1}),(0,n.createVNode)(s),(0,n.createVNode)(d,{round:"",dense:"",icon:e.add_document_view?"mdi-minus":"mdi-plus",color:"primary",onClick:t[0]||(t[0]=t=>e.add_document_view=!e.add_document_view)},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(r,{class:"bg-secondary",delay:500},{default:(0,n.withCtx)((()=>[e.add_document_view?((0,n.openBlock)(),(0,n.createElementBlock)("span",z,"Go back to documents")):((0,n.openBlock)(),(0,n.createElementBlock)("span",M,"add document"))])),_:1})])),_:1},8,["icon"])])),_:1}),(0,n.createVNode)(n.Transition,{"enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut",mode:"out-in"},{default:(0,n.withCtx)((()=>[e.add_document_view?((0,n.openBlock)(),(0,n.createElementBlock)("div",U,[(0,n.createVNode)(w,null,{default:(0,n.withCtx)((()=>[(0,n.createVNode)(b,null,{default:(0,n.withCtx)((e=>[(0,n.createVNode)(C,{content:"this is test content",onPropose:e.propose,onAddtobucket:e.addtobucket},null,8,["onPropose","onAddtobucket"])])),_:1})])),_:1})])):((0,n.openBlock)(),(0,n.createElementBlock)("div",D,[e.is_loading?((0,n.openBlock)(),(0,n.createElementBlock)("div",R,[(0,n.createVNode)(u,{color:"primary",size:"42"})])):((0,n.openBlock)(),(0,n.createBlock)(v,{key:1,class:"primary-hover-list",separator:"",striped:""},{default:(0,n.withCtx)((()=>[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.file_scopes.filter((e=>e.count/2>=1)),(t=>((0,n.openBlock)(),(0,n.createBlock)(g,{clickable:"",key:t.scope,group:"index"},{header:(0,n.withCtx)((()=>[(0,n.createVNode)(h,null,{default:(0,n.withCtx)((()=>[(0,n.createVNode)(m,null,{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)((0,n.toDisplayString)(t.scope),1)])),_:2},1024)])),_:2},1024),(0,n.createVNode)(h,{side:""},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(m,null,{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)((0,n.toDisplayString)(t.count/2),1)])),_:2},1024)])),_:2},1024)])),default:(0,n.withCtx)((()=>[(0,n.createVNode)(f),(0,n.createElementVNode)("div",null,[(0,n.createVNode)(_,{file_scope:t.scope,onLoadfile:o=>e.$emit("loadfile",o={...o,filescope:t.scope})},null,8,["file_scope","onLoadfile"])])])),_:2},1024)))),128)),0==e.file_scopes.length?((0,n.openBlock)(),(0,n.createBlock)(k,{key:0,text:"No files found"})):(0,n.createCommentVNode)("",!0)])),_:1}))]))])),_:1})])),_:1})])}const K={key:0,class:"row items-center justify-center"},W=["onClick"];function X(e,t,o,i,l,a){const c=(0,n.resolveComponent)("q-spinner"),s=(0,n.resolveComponent)("q-icon"),r=(0,n.resolveComponent)("q-item-section"),d=(0,n.resolveComponent)("q-item-label"),p=(0,n.resolveComponent)("date-string"),u=(0,n.resolveComponent)("q-item"),m=(0,n.resolveComponent)("q-list");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[e.is_loading?((0,n.openBlock)(),(0,n.createElementBlock)("div",K,[(0,n.createVNode)(c,{color:"primary",size:"42"})])):((0,n.openBlock)(),(0,n.createBlock)(m,{key:1,separator:""},{default:(0,n.withCtx)((()=>[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.files,(t=>((0,n.openBlock)(),(0,n.createBlock)(u,{key:t.id,clickable:"",dense:""},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(r,{avatar:"",onClick:o=>e.$emit("loadfile",t)},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(s,{name:"mdi-file-document"})])),_:2},1032,["onClick"]),(0,n.createVNode)(r,{style:{"margin-left":"-25px"}},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(d,null,{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("span",{onClick:o=>e.$emit("loadfile",t)},(0,n.toDisplayString)(t.title?t.title:`version ${t.id}`),9,W)])),_:2},1024)])),_:2},1024),(0,n.createVNode)(r,{side:""},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(d,{caption:""},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(p,{prepend:"published",date:t.published},null,8,["date"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1}))])}var Y=o(85054);const ee=(0,n.defineComponent)({name:"indexItems",props:{file_scope:""},components:{dateString:Y.Z},data(){return{is_loading:!1,files:[]}},computed:{...(0,l.Se)({getAccountName:"proton/getAccountName",getActiveGroup:"group/getActiveGroup"})},methods:{async loadFiles(){this.is_loading=!0;let e=await this.$eos.api.rpc.get_table_rows({json:!0,code:this.getActiveGroup,scope:this.file_scope,table:"dacfiles",limit:-1});e&&e.rows&&e.rows.length&&(this.files=e.rows),this.is_loading=!1}},mounted(){this.loadFiles()}});var te=o(27011),oe=o(83414),ne=o(52035),ie=o(24554),le=o(2350);const ae=(0,x.Z)(ee,[["render",X]]),ce=ae;Z()(ee,"components",{QSpinner:G.Z,QList:te.Z,QItem:oe.Z,QItemSection:ne.Z,QIcon:ie.Z,QItemLabel:le.Z,QBtn:y.Z});var se=o(3229);const re={class:"row q-col-gutter-md"},de=(0,n.createElementVNode)("div",{class:"col-xs-12"},"Compose content",-1),pe={class:"col-xs-12"},ue=(0,n.createElementVNode)("div",{class:""},"preview",-1),me={class:"col-xs-12 row justify-between items-center"},he={class:"row justify-end items-center"},fe=(0,n.createTextVNode)("waiting for upload signature");function _e(e,t,o,i,l,a){const c=(0,n.resolveComponent)("q-icon"),s=(0,n.resolveComponent)("q-input"),r=(0,n.resolveComponent)("threshold-badge"),d=(0,n.resolveComponent)("q-badge"),p=(0,n.resolveComponent)("propose-bucket-btn");return(0,n.openBlock)(),(0,n.createElementBlock)("div",re,[de,(0,n.createVNode)(s,{class:"col-xs-12 col-md-6",ref:"filescope",label:"Category",autocomplete:"off",outlined:"","bottom-slots":"",maxlength:"12",modelValue:e.upload_action.data.file_scope,"onUpdate:modelValue":t[0]||(t[0]=t=>e.upload_action.data.file_scope=t),modelModifiers:{trim:!0},placeholder:"Choose a file category (ex. userterms)",rules:[e=>!!e||"* Required",e.isValidAccountName]},{prepend:(0,n.withCtx)((()=>[(0,n.createVNode)(c,{name:"mdi-shape"})])),_:1},8,["modelValue","rules"]),(0,n.createVNode)(s,{class:"col-xs-12 col-md-6",ref:"title",label:"Title",autocomplete:"off",outlined:"","bottom-slots":"",maxlength:"60",modelValue:e.publish_action.data.title,"onUpdate:modelValue":t[1]||(t[1]=t=>e.publish_action.data.title=t),modelModifiers:{trim:!0},placeholder:"Title (optional)",rules:[]},{prepend:(0,n.withCtx)((()=>[(0,n.createVNode)(c,{name:"mdi-file-document"})])),_:1},8,["modelValue"]),(0,n.createElementVNode)("div",pe,[ue,(0,n.createVNode)(s,{outlined:!1,autogrow:!0,label:"Content",modelValue:e.upload_action.data.content,"onUpdate:modelValue":t[2]||(t[2]=t=>e.upload_action.data.content=t),type:"textarea",placeholder:"Markdown supported"},null,8,["modelValue"])]),(0,n.createElementVNode)("div",me,[e.publish_action.account?((0,n.openBlock)(),(0,n.createBlock)(r,{key:0,label:"",threshold:e.getLinkedThresholdForContractAction(e.publish_action.account,e.publish_action.name)},null,8,["threshold"])):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("div",he,[e.is_uploading?((0,n.openBlock)(),(0,n.createBlock)(d,{key:0,color:"secondary",class:"q-mr-xs"},{default:(0,n.withCtx)((()=>[fe])),_:1})):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(p,{onClickPropose:e.emitPropose,onClickBucket:e.emitBucket,label:"publish",disabled:!1,loading:e.is_uploading},null,8,["onClickPropose","onClickBucket","loading"])])])])}var ge=o(40019);const ke=(0,n.defineComponent)({name:"filePublisher",props:{content:""},components:{thresholdBadge:C.Z,proposeBucketBtn:b.Z},data(){return{step:"editcontent",is_uploading:!1,is_publishing:!1,upload_action:{account:"",name:"fileupload",data:{uploader:"",file_scope:"",content:""}},publish_action:{account:"",name:"filepublish",data:{file_scope:"",trx_id:"",title:"",block_num:""}}}},computed:{...(0,l.Se)({getAccountName:"proton/getAccountName",getActiveGroup:"group/getActiveGroup",getIsMember:"user/getIsMember",getLinkedThresholdForContractAction:"group/getLinkedThresholdForContractAction"})},methods:{isValidAccountName:v.ZF,async upload(){this.is_uploading=!0;let e=await this.$store.dispatch("proton/transact",{actions:[this.upload_action],disable_signing_overlay:!0});if(e&&e.trxid){this.publish_action.data.block_num=e.block_num,this.publish_action.data.trx_id=e.trxid,this.publish_action.data.file_scope=this.upload_action.data.file_scope,await new Promise((e=>{setTimeout(e,2e3)}));let t=await(0,f.tH)(e.trxid,e.block_num,"fileupload","content",this);ge.log("receipt",e.block_num,"fetched",t.block_num),t&&t.found&&(this.publish_action.data.block_num=t.block_num)}this.is_uploading=!1},async emitPropose(){if(this.$refs.filescope.validate(),this.$refs.filescope.hasError)return;await this.upload();let e=JSON.parse(JSON.stringify(this.publish_action));const t={actions:[e],title:`Add new file in category "${e.data.file_scope}"`,description:"todo"};ge.log("file publish",t),this.$emit("propose",t)},async emitBucket(){if(this.$refs.filescope.validate(),this.$refs.filescope.hasError)return;await this.upload();let e=JSON.parse(JSON.stringify(this.publish_action));this.$emit("addtobucket",e)}},mounted(){},watch:{getAccountName:{immediate:!0,handler:function(e,t){this.getAccountName&&(this.upload_action.account=this.publish_action.account=this.getActiveGroup,this.upload_action.data.uploader=this.getAccountName,this.content&&(this.upload_action.data.content=this.content))}}}});var ve=o(69721);const Ce=(0,x.Z)(ke,[["render",_e]]),be=Ce;Z()(ke,"components",{QInput:V.Z,QIcon:ie.Z,QBadge:ve.Z});const we=(0,n.defineComponent)({name:"filesIndex",components:{indexItems:ce,noItems:se.Z,filePublisher:be,actionProposer:_.Z},data(){return{file_scopes:[],is_loading:!1,add_document_view:!1}},computed:{...(0,l.Se)({getAccountName:"proton/getAccountName",getActiveGroup:"group/getActiveGroup"})},methods:{async loadFilesIndex(){this.is_loading=!0;let e=await this.$eos.api.rpc.get_table_by_scope({json:!0,code:this.getActiveGroup,table:"dacfiles",limit:-1}).catch((e=>!1));e&&e.rows.length&&(this.file_scopes=e.rows),this.is_loading=!1}},mounted(){this.loadFilesIndex()}});var Ne=o(60429),xe=o(65869);const Ve=(0,x.Z)(we,[["render",H]]),ye=Ve;Z()(we,"components",{QCard:S.Z,QToolbar:T.Z,QToolbarTitle:I.Z,QSpace:$.Z,QBtn:y.Z,QTooltip:F.Z,QSpinner:G.Z,QList:te.Z,QExpansionItem:Ne.Z,QItemSection:ne.Z,QItemLabel:le.Z,QSeparator:xe.Z,QCardSection:P.Z});const Be=(0,n.defineComponent)({name:"files",components:{fileViewer:O,filesIndex:ye},computed:{...(0,l.Se)({getAccountName:"proton/getAccountName",getCoreConfig:"group/getCoreConfig"})},data(){return{currentFile:""}}});var Ze=o(24379);const Ae=(0,x.Z)(Be,[["render",i]]),qe=Ae;Z()(Be,"components",{QPage:Ze.Z})}}]);