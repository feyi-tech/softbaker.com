"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{41160:function(e,t,n){var r=n(85893),a=n(57747),i=n(71293),o=n(67294),s=n(87878),l=n(21344);t.Z=e=>{let{children:t,message:n,disableDrag:c,...u}=e;const d=(0,o.useRef)(null),[g,h]=(0,o.useState)(null),{onMouseDown:p}=(0,s.Z)(d);return(0,r.jsxs)(a.xu,{...u,overflow:"auto",ref:d,p:"2rem",onMouseDown:e=>{c||(p(e),(e=>{h(e.pageY)})(e))},onMouseUp:e=>{c||g&&((e,t)=>{if(!d.current||e==t)return;const n=d.current,r=Math.abs(t-e);if(0===n.scrollTop){const e=document.getElementById("form-container");e&&(e.scrollTop-=r)}if(n.scrollTop>=n.scrollHeight-n.clientHeight){const e=document.getElementById("form-container");e&&(e.scrollTop+=r)}})(g,e.pageY)},children:[t,(0,r.jsx)(l.Z,{as:"div",status:"info",fontWeight:"700",maxW:"80vw",children:(0,r.jsx)(i.x,{as:"span",children:n||"Drag around to view the whole document"})})]})}},14132:function(e,t,n){n.d(t,{Z:function(){return W}});var r=n(85893),a=n(51857),i=n.n(a),o=n(34292),s=n(71293),l=n(57747),c=n(85970),u=n(5418),d=n(6089),g=n(67294),h=n(94345),p=n(55154),m=n(11802),x=n(85461),f=n(36238),b=n(65367);const S=e=>{let{image:t,selected:n,onClick:a,...i}=e;const[o,l]=(0,g.useState)(!0),[c,u]=(0,g.useState)();return(0,r.jsxs)(r.Fragment,{children:[o?(0,r.jsx)(s.x,{as:"div",textAlign:"center",cursor:"pointer",fontStyle:"italic",fontSize:"12px",display:"flex",justifyContent:"center",alignItems:"center",w:"100px",height:"50px",mr:"5px",mb:"5px",border:"4px dashed ".concat(c?"rgb(246, 70, 93)":"#dd6b20"),children:c||"Loading Signature..."}):null,(0,r.jsx)(d.E,{onClick:a,cursor:"pointer",bg:"#cfcfcf",src:t,display:o?"none":"block",w:"100px",h:"auto",mr:"5px",mb:"5px",border:n?"4px ridge #dd6b20":"2px dashed #dd6b20",_hover:{border:"4px ridge #dd6b20"},onLoad:()=>{l(!1),u(void 0)},onError:()=>{l(!1),u("Failed to load signature")}})]})};var w=e=>{let{onClose:t,onImage:n}=e;const[a,i]=(0,g.useState)(),[s,l]=(0,g.useState)(),[c,u]=(0,g.useState)();return(0,r.jsxs)(h.Z,{title:"Select Signature",isOpen:!0,onClose:t,children:[(0,r.jsx)(o.U,{maxHeight:"320px",justifyContent:"flex-start",alignItems:"flex-end",mb:2,flexWrap:"wrap",pos:"relative",overflowY:"auto",children:m.J8.map(((e,t)=>(0,r.jsx)(S,{image:e,selected:e==a,onClick:()=>{c||i(e)}},t)))}),(0,r.jsx)(f.Z,{type:f.Z.TYPES.none,errorMessage:s,mb:1}),(0,r.jsx)(x.Z,{status:c?"loading":"warning",mb:"1rem",onClick:()=>{l(""),a?(u(!0),(0,b.Ic)(a).then((e=>{n(null,e)})).catch((e=>{l(e.message),u(!1)}))):l("Please select a signature to use above.")},children:c?"Please wait...":"Use Signature"})]})},v=n(7963),j=n(17672),k=n(86455),y=n.n(k),C=n(96918);var I=e=>{let{onClose:t,onImage:n,minSignatureWidth:a,maxSignatureWidth:i}=e;const c=(0,g.useRef)(null),[u,d]=(0,g.useState)(!1),[m,f]=(0,g.useState)(),[b,S]=(0,g.useState)(),w=(0,v.p)(),k=()=>{const e=document.getElementById("signature_track");e?(c.current=new j.Z(e,{penColor:"#000",minWidth:a||.7,maxWidth:i||.7}),d(!0)):setTimeout((()=>{k()}),100)};(0,g.useEffect)((()=>{k()}),[]);return(0,r.jsxs)(h.Z,{title:"Draw Signature",isOpen:!0,onClose:()=>t(),children:[u?(0,r.jsx)(s.x,{fontSize:"12px",mb:2,children:"Drag your finger or mouse around, inside the box below to sign."}):(0,r.jsx)(s.x,{fontSize:"12px",mb:2,fontStyle:"italic",children:"Setting up signature pad. Please wait..."}),(0,r.jsx)(l.xu,{as:"canvas",id:"signature_track",mb:0,width:"100%",height:"150px",cursor:"pointer",bg:"#cfcfcf",border:"4px ridge #dd6b20"}),(0,r.jsxs)(o.U,{justifyContent:"space-between",alignItems:"center",mb:1,children:[(0,r.jsx)(x.Z,{status:"warning",mb:"1rem",onClick:()=>{const e=c.current;if(e){const t=e.toData();t.pop(),e.fromData(t)}else w({description:"Signature pad unavailabe. Please try again later.",status:"error",duration:4e3,isClosable:!0})},rightIcon:(0,r.jsx)(p.wXW,{}),children:"Undo"}),(0,r.jsx)(x.Z,{status:"warning",mb:"1rem",onClick:()=>{const e=c.current;e?e.clear():w({description:"Signature pad unavailabe. Please try again later.",status:"error",duration:4e3,isClosable:!0})},rightIcon:(0,r.jsx)(p.Xm5,{}),children:"Clear"})]}),m?(0,r.jsx)(s.x,{fontStyle:"italic",fontSize:"12px",children:"Processing signature..."}):null,b?(0,r.jsx)(s.x,{fontSize:"12px",color:(0,C.Z)("errorColor.light","errorColor.dark"),children:b}):null,(0,r.jsx)(x.Z,{status:"warning",mb:"1rem",onClick:()=>{var e;if(m)return void y().fire({icon:"info",title:"Processing",text:"Your signature is currently being processed. Please try again after processing."});f(!0);const t=(null===(e=c.current)||void 0===e?void 0:e.toDataURL())||"";n(null,t)},children:"Use Signature"})]})},U=n(35052),E=n(30351),Z=n(49626),D=n(53754);const z=e=>{let{icon:t,title:n,...a}=e;return(0,r.jsxs)(o.U,{cursor:"pointer",justifyContent:"flex-start",alignItems:"flex-end",mb:4,...a,children:[(0,r.jsx)(o.U,{w:"35px",h:"35px",justifyContent:"center",alignItems:"center",borderRadius:"5px",border:"1px solid #dfdfdf",children:t}),(0,r.jsx)(s.x,{as:"div",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",children:n})]})};var W=e=>{let{title:t,thumbnail:n,onChange:a,disabled:m,errorMessage:x,info:b,helperText:S,textTransform:v,labelEndIcon:j,minSignatureWidth:k,maxSignatureWidth:y,...C}=e;const[W,P]=(0,g.useState)(!1),[T,M]=(0,g.useState)(!1),[R,_]=(0,g.useState)(null),F=[{icon:(0,r.jsx)(p.AeW,{}),title:"Select Signature",name:"select"},{icon:(0,r.jsx)(p.mvm,{}),title:"Draw Signature",name:"draw"},{icon:(0,r.jsx)(p.DUB,{}),title:"Upload Signature",name:"upload"}],N=e=>{M(!0),P(!1),_(null),(0,E.Me)(e).then((t=>{t?(a(null),M(!1)):(0,E.xJ)(e).then((e=>{a(e),M(!1)})).catch((e=>{M(!1)}))})).catch((e=>{M(!1)}))};return(0,r.jsxs)(l.xu,{...C,children:[(0,r.jsxs)(c.NI,{opacity:T||m?.4:1,cursor:T||m?"not-allowed":"pointer",children:[(0,r.jsxs)(o.U,{w:"100%",justifyContent:"space-between",alignItems:"center",children:[!t||(0,D.N4)(b)||m?(0,r.jsx)(u.l,{textTransform:v||"capitalize",mb:"0px",children:t}):(0,r.jsx)(Z.Z,{as:u.l,info:b,textTransform:v||"capitalize",children:t}),j||null]}),(0,r.jsxs)(o.U,{className:"image-selector-button",onClick:e=>{e.preventDefault(),m||T||(_(null),P(!0))},children:[(0,r.jsx)(l.xu,{width:"auto",height:"40px",bg:"#dfdfdf",children:!T&&n?(0,r.jsx)(d.E,{src:n,width:"auto",h:"40px",objectFit:"cover"}):null}),(0,r.jsx)(s.x,{as:"div",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontStyle:T?"italic":"normal",children:T?"Please wait...":n?"Click to change":"Click to sign"})]})]}),(0,r.jsx)(f.Z,{type:f.Z.TYPES.none,helperText:S,errorMessage:x}),R?"select"==R?(0,r.jsx)(w,{onImage:(e,t)=>{N(t)},onClose:()=>{_(null)}}):"draw"==R?(0,r.jsx)(I,{minSignatureWidth:k,maxSignatureWidth:y,onImage:(e,t)=>{N(t)},onClose:()=>{_(null)}}):(0,r.jsx)(U.Z,{title:"Upload Signature",message:"Drag and Drop Signature here",hoverMessage:"Drop the Signature here",ruleMessage:"Upload only transparent PNG image",useImageText:"Use Signature",maxFileSize:102400,onImage:(e,t)=>{N(t)},onClose:()=>{_(null)}}):(0,r.jsxs)(h.Z,{title:t,isOpen:W,onClose:()=>{P(!1)},children:[(0,r.jsx)(s.x,{mb:"1rem",children:"Click one of the below signature options to provide a signature."}),(F||[]).map(((e,t)=>(0,r.jsx)(z,{...e,onClick:()=>{e.name&&_(e.name)}},t)))]}),(0,r.jsx)(i(),{id:"95178590041dfe1a",children:".image-selector-button{width:100%;min-width:0px;outline:2px solid transparent;outline-offset:2px;position:relative;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;-webkit-transition-property:var(--chakra-transition-property-common);-moz-transition-timing-function:var(--chakra-transition-property-common);-o-transition-timing-function:var(--chakra-transition-property-common);transition-property:var(--chakra-transition-property-common);-webkit-transition-duration:var(--chakra-transition-duration-normal);-moz-transition-duration:var(--chakra-transition-duration-normal);-o-transition-duration:var(--chakra-transition-duration-normal);transition-duration:var(--chakra-transition-duration-normal);font-size:var(--chakra-fontSizes-md);-webkit-padding-start:var(--chakra-space-4);-moz-padding-start:var(--chakra-space-4);padding-inline-start:var(--chakra-space-4);-webkit-padding-end:var(--chakra-space-10);-moz-padding-end:var(--chakra-space-10);padding-inline-end:var(--chakra-space-10);height:var(--chakra-sizes-10);-webkit-border-radius:var(--chakra-radii-md);-moz-border-radius:var(--chakra-radii-md);border-radius:var(--chakra-radii-md);border:1px solid;border-color:inherit;background:inherit}"})]})}},65367:function(e,t,n){n.d(t,{Ic:function(){return s},Q8:function(){return o},T3:function(){return l},U5:function(){return c},Vt:function(){return g},j1:function(){return d},xi:function(){return u}});var r=n(67294),a=n(30351),i=n(98303);const o=e=>"string"===typeof e&&e.startsWith("/")?"".concat(window.location.origin).concat(e):e,s=e=>new Promise((async(t,n)=>{if(!e)return t(null);if(window.FileReader){let a;if("string"===typeof e)try{a=await(await fetch(e)).blob()}catch(r){return void n(r)}const i=new FileReader;i.onloadend=function(){i.result?(i.result.toString(),t(i.result)):n(new Error("empty-filereader-result"))},i.onerror=function(e){n(e)},i.readAsDataURL(a||e)}else if("string"!==typeof e)n(new Error("file-reader-not-supported"));else{const r=new Image;r.crossOrigin="Anonymous",r.onload=function(){var e=document.createElement("canvas"),a=e.getContext("2d");if(a){e.height=r.naturalHeight,e.width=r.naturalWidth,a.drawImage(r,0,0);const n=e.toDataURL();t(n)}else n("no-canvas")},r.src=e}})),l=e=>{const[t,n]=(0,r.useState)(),[a,i]=(0,r.useState)(),[l,c]=(0,r.useState)();return(0,r.useEffect)((()=>{const t=o(e);t?(i(!0),s(t).then((e=>{e&&n(e.toString()),i(!1)})).catch((e=>{c(e.message),i(!1)}))):n(null)}),[e]),{base64Url:t,loading:a,error:l}},c=e=>{const[t,n]=(0,r.useState)(),[i,o]=(0,r.useState)(),[s,l]=(0,r.useState)();return(0,r.useEffect)((()=>{e&&(o(!0),(0,a.gP)(e).then((t=>{n({base64Url:e,width:t.width,height:t.height}),o(!1)})).catch((e=>{l(e.message),o(!1)})))}),[e]),{userImage:t,loading:i,error:s}},u=(e,t)=>{const[n,i]=(0,r.useState)(),[o,s]=(0,r.useState)(),[l,c]=(0,r.useState)();return(0,r.useEffect)((()=>{t&&(s(!0),(0,a.jl)(t,e).then((e=>{i(e),s(!1)})).catch((e=>{c(e.message),s(!1)})))}),[t]),{color:n,loading:o,error:l}},d=(e,t,n)=>{const[i,o]=(0,r.useState)(),[s,l]=(0,r.useState)(),[c,u]=(0,r.useState)();return(0,r.useEffect)((()=>{n&&(l(!0),(0,a.aD)(n,e,t).then((e=>{o(e),l(!1)})).catch((e=>{u(e.message),l(!1)})))}),[n]),{stamp:i,loading:s,error:c}},g=e=>{const[t,n]=(0,r.useState)(),[a,o]=(0,r.useState)();return{value:(0,i.S)(e||{}),loading:t,error:a}}}}]);