(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[936],{89879:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tool-viewer",function(){return o(40030)}])},99020:function(e,t,o){"use strict";var n=o(85893),a=o(55154),l=o(85461),i=o(94345),s=o(48783),d=o(59501);t.Z=e=>{let{title:t,children:o,onDownloadButtonClick:r,downloadFormats:c,onFormatSelected:u,showDownloadFormatOptions:m,setShowDownloadFormatOptions:p,hideButton:h,...v}=e;return(0,n.jsxs)(n.Fragment,{children:[h?null:(0,n.jsx)(l.Z,{rightIcon:(0,n.jsx)(a.ZJh,{}),...v,onClick:()=>{1==c.length?u(c[0]):r()&&p(!0)},children:o}),m?(0,n.jsx)(i.Z,{justifyContent:"flex-start",alignItems:"center",title:t||"Select Format",isOpen:!0,onClose:()=>{p(!1)},children:(0,n.jsx)(s.g,{w:"100%",justifyContent:"flex-start",alignItems:"center",children:c.map(((e,t)=>(0,n.jsx)(d.Z,{w:"100%",mb:2,status:"warning",onClick:()=>{u(e),p(!1)},children:e.title},t)))})}):null]})}},40030:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return ee}});var n=o(85893),a=o(5397),l=o(67294),i=o(71293),s=o(7963),d=o(48783),r=o(34292),c=o(57747),u=o(93717),m=o(70959),p=o(44461),h=o(24124),v=o(84028),f=o(90889),g=o(67918),w=o(85461),x=o(56691),T=o(86455),y=o.n(T),j=o(53754),I=o(80419),D=o(55154),b=o(11802),S=o(96918),_=o(73386),C=o(33471),N=o(21344),k=o(41160),E=o(34365),Z=o(73391),F=o(62122),P=o(38118),O=o(70485),W=o(4623),L=o(92709),M=o(99020),B=o(33871),U=o(83613),A=o(74054),K=o(81058),z=o(65380);var Y=e=>{let{tool:t,templatesResults:o,data:a,isNew:T,onUpdateData:Y,onPublishData:R,saving:J,setSaving:X,hasPendingSave:H,collectionName:V,publishTexts:G,initData:q}=e;if(!a)return null;const Q=(0,s.p)(),{user:$,sdkConfig:ee}=(0,Z.P)(),[te,oe]=(0,l.useState)(!1),[ne,ae]=(0,l.useState)(!1),{templatesLoading:le,templatesError:ie,selectedTemplateLoading:se,selectedTemplateError:de,parsingTemplate:re,templates:ce,selectedTemplate:ue,selectedTemplateData:me,workingTemplate:pe,workingTemplateData:he,setAsDefaulTemplate:ve,setWorkingTemplate:fe,setWorkingTemplateData:ge,selectTemplate:we,parseTemplateSvg:xe,saveTemplate:Te,getDefaultTemplateId:ye,currentTemplateId:je}=o||{},{error:Ie,fonts:De,setFonts:be,uploadFonts:Se}=(0,U.Z)(null===me||void 0===me?void 0:me.svg),[_e,Ce]=(0,l.useState)({}),[Ne,ke]=(0,l.useState)(!0),[Ee,Ze]=(0,l.useState)(!1),[Fe,Pe]=(0,l.useState)(),[Oe,We]=(0,l.useState)(),[Le,Me]=(0,l.useState)("front");(0,A.Z)(a,(e=>{T&&q&&q(e)}),null===me||void 0===me?void 0:me.fields,je),(0,l.useEffect)((()=>{}),[a]);const Be=e=>e.includes("faceshot")?"passport photograph.":e.includes("sign")?"signature":"image",Ue=(e,t,o)=>new Promise(((n,a)=>{if(t)if((0,j.VT)("other_tools_data",o,e))Ce({..._e,[e]:""}),n(null);else{const t=Be(e);n("".concat(e,":The ").concat(t," was not found on this browser. Please provide the ").concat(t," again."))}else{n("".concat(e,":Invalid ").concat(Be(e)))}})),Ae=async(e,o)=>{if(te||!me)return;const n=[];for(const t of Object.keys(e))(t.endsWith(".sign")||t.endsWith(".faceshot"))&&n.push(Ue(t,e[t],e.id));const a=(await Promise.all(n)).filter((e=>null!=e));if(a.length>0){const e={};for(const t of a){const o=t.split(":");e[o[0]]=o[1]}return Ce({..._e,...e}),void y().fire({title:"Download Error",text:"Check your upload fields to fix some missing files affecting your download.",icon:"error"})}oe(!0);const l=!0!==(null===ue||void 0===ue?void 0:ue.split_on_download)||e.is_freemium?1024:2048;W.Z.getSvg(e,me,De,e.is_freemium,l).then((n=>{Q({description:"Your ".concat((null===t||void 0===t?void 0:t.name)||"item"," will download shortly."),status:"info",duration:4e3,isClosable:!0}),(0,C.T8)(n,o,"".concat((0,j.yZ)("".concat((null===t||void 0===t?void 0:t.name)||"item","-").concat((e=>{if(!e)return[];const t=[];for(const[o,n]of Object.entries(e)){const{name:e,type:a}=(0,B.py)(o),{directive:l}=(0,B.mA)(e||"");l&&t.push(n)}return t})(e).join("_"))),"-").concat((new Date).toISOString()),(null===ue||void 0===ue?void 0:ue.split_on_download)&&Le?Le:void 0).then((e=>{oe(!1),ae(!0),setTimeout((()=>{ae(!1)}),8e3)})).catch((e=>{oe(!1),y().fire({icon:"error",title:"Download Error",text:e.message})}))})).catch((e=>{oe(!1),y().fire({icon:"error",title:"Download Error",text:e.message})}))},[Ke,ze]=(0,l.useState)(!1);(0,l.useEffect)((()=>{}),[ue]),(0,l.useEffect)((()=>{!T&&a&&ce&&(null===ue||void 0===ue?void 0:ue.id)!=a.template_id?we(a.template_id):T&&ce&&!ue&&we(ye(ce))}),[ce,a,T]);const Ye=()=>{if(R){const e=a.template_id?void 0:{template_id:null===ue||void 0===ue?void 0:ue.id};R(!1,null,e).then((e=>{X(!1),Q({description:T?(null===G||void 0===G?void 0:G.saveSuccess)||"New Item successfully saved.":(null===G||void 0===G?void 0:G.updateSuccess)||"Item successfully updated.",status:"success",duration:4e3,isClosable:!0}),!0===(null===ue||void 0===ue?void 0:ue.split_on_download)?We(!0):Pe(!0)})).catch((e=>{X(!1),((null===e||void 0===e?void 0:e.message)||"").length>0&&y().fire({icon:"error",title:T?"Tool Creation Error":"Tool Update Error",text:e.message})}))}else X(!1)},Re=(0,l.useMemo)((()=>me?(0,n.jsx)(O.Z,{isFieldsEditMode:!1,created:!T,editableFields:((null===t||void 0===t?void 0:t.editables)||"").split(",").map((e=>e.trim())),showFieldsErrors:Ne,fields:me.fields,images:me.images,masks:me.masks,data:a,isDragable:!1,onAllFieldsDataChange:e=>{Y&&Y({...e||{}})},onFieldDataChange:(e,t)=>{console.log("onSettingsUpdated.3.onFieldDataChange",e,t),Y&&Y({id:a.id,[e]:t})},fieldDataErrorMessage:_e,onSetFieldDataErrorMessage:Ce}):null),[me,T,Ne,a,Y]),Je=(0,l.useMemo)((()=>{if((null===t||void 0===t?void 0:t.message)&&a.id!=b.XA){const e=function(e){const t=e.split("\n"),o={},a={};if(t.forEach((e=>{const[t,n]=e.split(" == ");"CONTENT"===t?a[t]=n:o[t]=n})),a.CONTENT){const e=a.CONTENT.replace("{LINK}",o.LINK);o.CONTENT=()=>(0,n.jsx)(i.x,{as:"div",fontSize:"13px",children:e.split(o.LINK).map(((e,t,a)=>(0,n.jsxs)(n.Fragment,{children:[e,t<a.length-1&&(0,n.jsx)(i.x,{as:"a",color:(0,z.z)("warning"),href:"".concat(o.LINK.startsWith("https://")||o.LINK.startsWith("http://")?"":"https://").concat(o.LINK),target:"_blank",fontWeight:"bold",textDecoration:"underline",children:o.LINK})]})))})}return o}(null===t||void 0===t?void 0:t.message);return(0,n.jsxs)(d.g,{children:[(0,n.jsxs)(r.U,{flexWrap:"wrap",justifyContent:"space-between",width:"100%",children:[e.ID_TITLE?(0,n.jsxs)(r.U,{flexWrap:"wrap",children:[(0,n.jsxs)(i.x,{m:"0px !important",mr:1,children:[e.ID_TITLE,":"," "]}),(0,n.jsx)(I.Z,{fontWeight:"bold",m:"0px !important",mr:2,onCopyMessage:"".concat(e.ID_TITLE," copied."),children:a.id})]}):(0,n.jsx)(c.xu,{}),e.LINK?(0,n.jsxs)(w.Z,{as:"a",href:"".concat(e.LINK.startsWith("https://")||e.LINK.startsWith("http://")?"":"https://").concat(e.LINK),target:"_blank",bg:(0,z.z)("warning"),rightIcon:(0,n.jsx)(D.CkN,{}),children:["Visit ",e.LINK]}):(0,n.jsx)(c.xu,{})]}),e.CONTENT?e.CONTENT():null]})}return null}),[t,a]);return(0,n.jsx)(_.Z,{tool:t,maxHeaderWidth:"100%",children:(0,n.jsxs)(g.Z,{w:"100%",maxW:"100%",h:"auto",children:[a.id!=b.XA?(0,n.jsx)(n.Fragment,{children:Je}):(0,n.jsxs)(d.g,{alignItems:"flex-start",children:[(0,n.jsxs)(r.U,{flexWrap:"wrap",justifyContent:"flex-start",alignItems:"center",children:[(null===t||void 0===t?void 0:t.icon)?L.Z[null===t||void 0===t?void 0:t.icon].element({}):(0,n.jsx)(D.sYB,{})," ",(0,n.jsx)(i.x,{m:"0px !important",mr:1,children:"New ".concat((null===t||void 0===t?void 0:t.name)||"Document")})]}),(0,n.jsxs)(i.x,{as:"div",fontSize:"13px",children:["Click the info icon(",(0,n.jsx)(D.DAO,{style:{display:"inline"}}),") beside each form fields for help on what to enter."]})]}),(0,n.jsx)(u.k,{w:"100%",flexWrap:"wrap",m:"15px auto",children:(0,n.jsx)(c.xu,{w:{base:"100%"},bg:"#dd6b20",p:"1rem",children:(0,n.jsxs)(c.xu,{bg:(0,S.Z)("cardBg.light","cardBg.dark"),minH:"80vh",w:"100%",p:{base:"1rem"},borderRadius:"24px",children:[(0,n.jsxs)(m.m,{isFitted:!0,variant:"enclosed",children:[(0,n.jsxs)(p.t,{mb:"1em",children:[(0,n.jsx)(h.O,{children:"Edit Mode"}),(0,n.jsx)(h.O,{children:"View Mode"})]}),(0,n.jsxs)(v.n,{children:[(0,n.jsxs)(f.x,{children:[T&&ce&&!le&&ue&&!se?(0,n.jsx)(F.Z,{w:"100%",id:"Form_".concat(a.id,"_select_template"),title:"".concat((null===t||void 0===t?void 0:t.name)||"Document"," Type"),mb:4,helperText:"Select the type of ".concat((null===t||void 0===t?void 0:t.name)||"Document"," you want."),info:"This is where you select the type of ".concat((null===t||void 0===t?void 0:t.name)||"Document"," you want."),templates:ce,createdTemplatesKeys:Object.keys(ce),value:pe,onChange:e=>{e&&we(e.id)},onCheckInfo:()=>null,errorMessage:null,contactLink:(null===ee||void 0===ee?void 0:ee.contact_link)?(0,E.e3)(null===ee||void 0===ee?void 0:ee.contact_link,"Hello. I can't find the type of ".concat((null===t||void 0===t?void 0:t.name)||"Document"," I want on softbaker.")):null},"Form_".concat(a.id,"_select_template")):null,le||!ue||se?(0,n.jsx)(P.Z,{message:"Loading template assets. Please wait...",minH:"100px"}):(0,n.jsx)(n.Fragment,{children:Re}),(0,n.jsx)(K.Z,{my:2})]}),(0,n.jsx)(f.x,{bg:"#dcdcdc",p:"0px",children:(0,n.jsx)(k.Z,{width:"100%",message:"Drag around to view the whole tool",height:{base:500,md:728,lg:1024},pos:"relative",overflowX:"hidden",overflowY:"hidden",children:(0,n.jsx)(W.Z,{fonts:De,isLoading:te,width:{base:512,md:728,lg:1024},data:a,templateData:he,showWatermark:!!a.is_freemium})})})]})]}),(0,n.jsxs)(d.g,{w:"100%",justifyContent:"flex-start",alignItems:"center",my:8,children:[T||0!=((null===t||void 0===t?void 0:t.editables)||"").length?(0,n.jsx)(w.Z,{status:J&&!Ke?"loading":"warning",fontStyle:J&&!Ke?"italic":"normal",disabled:J||le||!ue||se,w:"100%",maxW:"400px",h:"70px",fontSize:"lg",onClick:async()=>{if(!R||!Te||!ue)return;X(!0);const e=(()=>{if(Ce({}),null===me||void 0===me?void 0:me.fields){const e={},t=[],o=[],n={text:"provided",sign:"provided",image_upload:"uploaded",faceshot:"uploaded"};for(const l of Object.values(me.fields))if(!a[l.id]&&!["qrcode","gen","checkbox"].includes(l.type)&&(e[l.id]="No ".concat(l.name," ").concat(n[l.type]||"provided","."),t.push(l.name),o.length<2)){const{name:e,type:t}=(0,B.py)(l.id),{directive:n}=(0,B.mA)(e||"");["name","desc"].includes(n)&&o.push(l.name)}return Ce(e),{all:t,compulsory:o}}return{all:[],compulsory:[]}})();e.compulsory.length>0?(X(!1),y().fire({title:"Form Entry Error",icon:"error",text:1==e.compulsory.length?"".concat(e.compulsory[0]," cannot be empty!"):"".concat(e.compulsory.join(", ")," cannot be empty.")})):e.all.length>0?(X(!1),y().fire({title:"Some fields are not provided",icon:"warning",text:1==e.all.length?"No ".concat(e.all[0]," provided! Are you sure you want to create the ").concat((null===t||void 0===t?void 0:t.name)||"item"," without it?"):"Are you sure you want to create the ".concat((null===t||void 0===t?void 0:t.name)||"item"," without providing them? The affected fields are ").concat(e.all.join(", "),"."),showCancelButton:!0,confirmButtonText:"Yes, Contine",cancelButtonText:"No"}).then((e=>{e.isConfirmed&&(X(!0),Ye())}))):Ye()},rightIcon:J&&!Ke?(0,n.jsx)(x.Z,{size:"1rem",color:"#fff",type:x.Z.TYPES.threeDots}):null,children:J&&!Ke?"Please wait...":T?"Create ".concat((null===t||void 0===t?void 0:t.name)||"Item"):"Update ".concat((null===t||void 0===t?void 0:t.name)||"Item")}):null,!0!==(null===ue||void 0===ue?void 0:ue.split_on_download)?null:(0,n.jsx)(M.Z,{title:"Select Side",showDownloadFormatOptions:Oe,setShowDownloadFormatOptions:We,status:te||J?"loading":"warning",outlined:!0,fontStyle:te||J?"italic":"normal",disabled:te||J||le||!ue||se,w:"100%",maxW:"400px",h:"70px",fontSize:"lg",downloadFormats:[{title:"Front Side",format:"front"},{title:"Back Side",format:"back"}],onDownloadButtonClick:()=>!T||(y().fire({icon:"error",title:"Download error",text:"You're yet to create the ".concat((null===t||void 0===t?void 0:t.name)||"Item",". Create the ").concat((null===t||void 0===t?void 0:t.name)||"Item"," first, then download.")}),!1),onFormatSelected:e=>{Me(e.format),Pe(!0)},rightIcon:(0,n.jsx)(D.ZJh,{}),children:te||J?"Please wait...":"Download ".concat((null===t||void 0===t?void 0:t.name)||"Item")}),(0,n.jsx)(M.Z,{hideButton:!0===(null===ue||void 0===ue?void 0:ue.split_on_download),showDownloadFormatOptions:Fe,setShowDownloadFormatOptions:Pe,status:te||J?"loading":"warning",outlined:!0,fontStyle:te||J?"italic":"normal",disabled:te||J||le||!ue||se,w:"100%",maxW:"400px",h:"70px",fontSize:"lg",downloadFormats:[{title:"Download as PDF",format:"pdf"},{title:"Download as JPEG",format:"jpeg"},{title:"Download as PNG",format:"png"}],onDownloadButtonClick:()=>!T||(y().fire({icon:"error",title:"Download error",text:"You're yet to create the ".concat((null===t||void 0===t?void 0:t.name)||"Item",". Create the ").concat((null===t||void 0===t?void 0:t.name)||"Item"," first, then download.")}),!1),onFormatSelected:e=>{Ae(a,e.format)},rightIcon:(0,n.jsx)(D.ZJh,{}),children:te||J?"Please wait...":"Download ".concat((null===t||void 0===t?void 0:t.name)||"Item")},"formats"),ne?(0,n.jsxs)(N.Z,{status:"success",children:["Check your download folder for the downloaded ",(null===t||void 0===t?void 0:t.name)||"Item","."]}):null,a.is_freemium&&!T?(0,n.jsx)(w.Z,{status:J&&Ke?"loading":"error",fontStyle:J&&Ke?"italic":"normal",disabled:J,w:"100%",maxW:"400px",h:"70px",fontSize:"lg",onClick:()=>{(e=>{if(!R)return;X(!0);var o=e?JSON.parse(JSON.stringify(e)):{};o.id&&delete o.id,e.is_freemium||1!=Object.keys(o).length||ze(!0);const n=!e.is_freemium&&1==Object.keys(o).length;R(!1,e).then((e=>{X(!1),y().fire({icon:"success",title:"Success",text:n?"Watermark successfully removed.":"".concat((null===t||void 0===t?void 0:t.name)||"Item"," successfully updated.")}),ze(!1)})).catch((e=>{X(!1),ze(!1),((null===e||void 0===e?void 0:e.message)||"").length>0&&y().fire({icon:"error",title:"".concat((null===t||void 0===t?void 0:t.name)||"Item",T?" Creation Error":" Update Error"),text:e.message})}))})({id:a.id,is_freemium:!1})},rightIcon:J&&Ke?(0,n.jsx)(x.Z,{size:"1rem",color:"#fff",type:x.Z.TYPES.threeDots}):(0,n.jsx)(D.arg,{}),children:J&&Ke?"Please wait...":"Remove Watermark"}):null]})]})})})]})})};const R=()=>({id:b.XA,authorId:"uid",is_freemium:!0}),J={newData:"New Tool",noDataError:"No Tool selected",newTitle:"Tool Type",updateTitle:"Update Cost",updateMessage:"The update will cost you {PRICE}.",freeTitle:"Test Tool(Free).",freeMessage:"The downloaded Tool will have watermark.",paidTitle:"Clean Tool({PRICE})",paidMessage:"The downloaded Tool will be clean with no watermark.",signInMessage:"Please sign in to save your Tool.",signUpMessage:"Please sign up to save your Tool.",createButtonText:"Create Tool",noChatToListMessage:"Your Tool will show here",deleteWarning:"Are you sure you want to permanently delete this already saved tool?",saveSuccess:"New Tool successfully saved.",updateSuccess:"Tool successfully updated."};var X=o(99555),H=o(53348),V=o(63183),G=o(3683),q=o(45326),Q=o(36100),$=o(5555);var ee=()=>{const e="other_tools_data",t=(0,q.Z)(),{sdkConfig:o,getTool:i}=(0,Z.P)(),[s,d]=(0,l.useState)(),[r,c]=(0,l.useState)({}),[u,m]=(0,l.useState)([]),p=(0,G.Z)(null===r||void 0===r?void 0:r.templates_url,!0);(0,l.useEffect)((()=>{var e;if(null===(e=p.selectedTemplateData)||void 0===e?void 0:e.fields){const e=[];for(const t of Object.values(p.selectedTemplateData.fields))["image_upload","sign","faceshot"].includes(t.type)&&e.push(t.id);m(e)}}),[p.selectedTemplate]),(0,l.useEffect)((()=>{d(null===t||void 0===t?void 0:t.id)}),[t]),(0,l.useEffect)((()=>{if((null===o||void 0===o?void 0:o.tools)&&s){const t=i(s);t&&c({...t,collectionRuleName:e})}}),[o,s]);const h=(0,X.Z)(20),{getCurrentTimelineData:v}=h,f=(0,l.useCallback)(R,[]),[g,w]=(0,l.useState)(["is_freemium"]);(0,l.useEffect)((()=>{if((null===r||void 0===r?void 0:r.editables)&&r.editables.length>0){const e=["is_freemium"],t=((null===r||void 0===r?void 0:r.editables)||"").split(",").map((e=>e.trim()));for(const o of t)e.push(o);w(e)}}),[null===r||void 0===r?void 0:r.editables]);const x=(0,H.Z)(50,f,g,u,void 0,void 0,null,s),{selectedIsNew:T,selectedData:y,initData:j}=x,I={...J,newData:"New ".concat((null===r||void 0===r?void 0:r.name)||"item"),noDataError:"No ".concat((null===r||void 0===r?void 0:r.name)||"item"," selected"),newTitle:"".concat((null===r||void 0===r?void 0:r.name)||"Item"," Type"),freeTitle:"Test ".concat((null===r||void 0===r?void 0:r.name)||"Item","(Free)."),freeMessage:"The downloaded ".concat((null===r||void 0===r?void 0:r.name)||"Item"," will have watermark."),paidTitle:"Clean ".concat((null===r||void 0===r?void 0:r.name)||"Item","({PRICE})"),paidMessage:"The downloaded ".concat((null===r||void 0===r?void 0:r.name)||"Item"," will be clean with no watermark."),signInMessage:"Please sign in to save your ".concat((null===r||void 0===r?void 0:r.name)||"Item","."),signUpMessage:"Please sign up to save your ".concat((null===r||void 0===r?void 0:r.name)||"Item","."),createButtonText:"Create ".concat((null===r||void 0===r?void 0:r.name)||"Item"),noChatToListMessage:"Your list of ".concat((null===r||void 0===r?void 0:r.name)||"Item"," will show here"),deleteWarning:"Are you sure you want to permanently delete this already saved ".concat((null===r||void 0===r?void 0:r.name)||"Item","?"),saveSuccess:"New ".concat((null===r||void 0===r?void 0:r.name)||"Item"," successfully saved."),updateSuccess:"".concat((null===r||void 0===r?void 0:r.name)||"Item"," successfully updated.")},D=(0,V.Z)({collectionName:e,fileFields:u,toolId:s,historyProps:h,dataSourceProps:x,publishTexts:I,updatableFields:g}),{savingData:b,setSavingData:S,handleUpdateData:_,handlePublishData:C}=D,N=(0,l.useMemo)((()=>(0,n.jsx)(Y,{tool:r,initData:j,templatesResults:p,publishTexts:I,collectionName:e,isNew:T(),data:y,saving:b,setSaving:S,hasPendingSave:v((null===y||void 0===y?void 0:y.id)||"none").totalUpdates>1||T(),onUpdateData:_,onPublishData:C})),[r,I,e,y,b,j,p]),k=e=>{var t,o,n;for(const[a,l]of Object.entries(e)){const{name:e,type:i}=(0,B.py)(a),{directive:s}=(0,B.mA)(e||"");if(i&&["text","textarea","text_select"].includes(i),s){const e=l instanceof Q.EK?(0,$.Ft)(l).toUTCString():l,a="".concat(e||"").trim().replace(/_/g," ");switch(s){case"name":t=a;break;case"desc":o=a;break;case"small":n=a}}}return{title:t,desc:o,small:n}};return r?(0,n.jsx)(a.Z,{tool:r,form:N,historyProps:h,dataSourceProps:x,dataHandlerProps:D,publishTexts:I,getItemName:e=>k(e).title||"",getItemDescription:e=>k(e).desc||"",getItemBadge:e=>k(e).small||"",onOverWriteCopiedData:e=>(e=>{const t={};for(const[o,n]of Object.entries(e)){const{name:e,type:a}=(0,B.py)(o),{directive:l}=(0,B.mA)(e||"");a&&["upload"].includes(a)||l||(t[o]=n)}return{...t,is_freemium:!0}})(e)}):(0,n.jsx)(P.Z,{title:"Loading tool..."})}}},function(e){e.O(0,[847,214,958,614,630,201,939,429,558,672,506,814,238,271,15,143,148,843,774,888,179],(function(){return t=89879,e(e.s=t);var t}));var t=e.O();_N_E=t}]);