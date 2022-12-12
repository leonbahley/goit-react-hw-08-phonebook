"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[441],{2441:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var a=n(885),o=n(2791),r=n(9434),i=n(3634),s=n(2946),d=n(4919),c=n(803),l=n(1292),u=n(4565),m=n(6241),p=n(184),v=function(){var e=(0,r.I0)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u.Z,{sx:{mb:2},component:"h2",children:"Filter contacts by name"}),(0,p.jsx)(m.Z,{onChange:function(t){return e((0,l.T)(t.target.value.toLowerCase()))},id:"filter",label:"Filter",variant:"outlined"})]})},b=n(8619),f=n(7205),g=n(228);var Z=function(){var e=(0,r.I0)(),t=(0,r.v9)(s.K2);return(0,p.jsxs)(g.Z,{onSubmit:function(n){n.preventDefault();var a=new FormData(n.currentTarget);t.some((function(e){return e.name.toLowerCase()===a.get("name").toLowerCase()}))?alert("".concat(a.get("name")," is already in your contacts list")):(e((0,i.uK)({name:a.get("name"),number:a.get("number")})),n.currentTarget.reset())},component:"form",sx:{display:"flex",gap:2,mb:1},validate:"true",autoComplete:"off",children:[(0,p.jsx)(m.Z,{required:!0,name:"name",id:"outlined-name",label:"Name"}),(0,p.jsx)(m.Z,{required:!0,type:"tel",name:"number",id:"outlined-name",label:"Number"}),(0,p.jsx)(f.Z,{sx:{minHeight:"56px"},type:"submit",variant:"contained",children:"Add contact"})]})},h=n(5629),x=n(4942),y=n(3366),C=n(7462),j=n(8182),S=n(4419),I=n(627),w=n(2065),k=n(277),M=n(5513),L=n(753),A=n(6258),P=n(3026),N=n(7933),F=n(8826),G=n(5878),O=n(1217);function R(e){return(0,O.Z)("MuiListItem",e)}var z=(0,G.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var V=(0,G.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function q(e){return(0,O.Z)("MuiListItemSecondaryAction",e)}(0,G.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var _=["className"],D=(0,k.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,C.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),H=o.forwardRef((function(e,t){var n=(0,M.Z)({props:e,name:"MuiListItemSecondaryAction"}),a=n.className,r=(0,y.Z)(n,_),i=o.useContext(F.Z),s=(0,C.Z)({},n,{disableGutters:i.disableGutters}),d=function(e){var t=e.disableGutters,n=e.classes,a={root:["root",t&&"disableGutters"]};return(0,S.Z)(a,q,n)}(s);return(0,p.jsx)(D,(0,C.Z)({className:(0,j.Z)(d.root,a),ownerState:s,ref:t},r))}));H.muiName="ListItemSecondaryAction";var T=H,B=["className"],E=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],K=(0,k.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,C.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!a.disablePadding&&(0,C.Z)({paddingTop:8,paddingBottom:8},a.dense&&{paddingTop:4,paddingBottom:4},!a.disableGutters&&{paddingLeft:16,paddingRight:16},!!a.secondaryAction&&{paddingRight:48}),!!a.secondaryAction&&(0,x.Z)({},"& > .".concat(V.root),{paddingRight:48}),(t={},(0,x.Z)(t,"&.".concat(z.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,x.Z)(t,"&.".concat(z.selected),(0,x.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,w.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(z.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,w.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,x.Z)(t,"&.".concat(z.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===a.alignItems&&{alignItems:"flex-start"},a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},a.button&&(0,x.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(z.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,w.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,w.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),a.hasSecondaryAction&&{paddingRight:48})})),W=(0,k.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),Y=o.forwardRef((function(e,t){var n=(0,M.Z)({props:e,name:"MuiListItem"}),a=n.alignItems,r=void 0===a?"center":a,i=n.autoFocus,s=void 0!==i&&i,d=n.button,c=void 0!==d&&d,l=n.children,u=n.className,m=n.component,v=n.components,b=void 0===v?{}:v,f=n.componentsProps,g=void 0===f?{}:f,Z=n.ContainerComponent,h=void 0===Z?"li":Z,x=n.ContainerProps,w=(x=void 0===x?{}:x).className,k=n.dense,G=void 0!==k&&k,O=n.disabled,V=void 0!==O&&O,q=n.disableGutters,_=void 0!==q&&q,D=n.disablePadding,H=void 0!==D&&D,Y=n.divider,J=void 0!==Y&&Y,Q=n.focusVisibleClassName,U=n.secondaryAction,X=n.selected,$=void 0!==X&&X,ee=n.slotProps,te=void 0===ee?{}:ee,ne=n.slots,ae=void 0===ne?{}:ne,oe=(0,y.Z)(n.ContainerProps,B),re=(0,y.Z)(n,E),ie=o.useContext(F.Z),se=o.useMemo((function(){return{dense:G||ie.dense||!1,alignItems:r,disableGutters:_}}),[r,ie.dense,G,_]),de=o.useRef(null);(0,P.Z)((function(){s&&de.current&&de.current.focus()}),[s]);var ce=o.Children.toArray(l),le=ce.length&&(0,A.Z)(ce[ce.length-1],["ListItemSecondaryAction"]),ue=(0,C.Z)({},n,{alignItems:r,autoFocus:s,button:c,dense:se.dense,disabled:V,disableGutters:_,disablePadding:H,divider:J,hasSecondaryAction:le,selected:$}),me=function(e){var t=e.alignItems,n=e.button,a=e.classes,o=e.dense,r=e.disabled,i={root:["root",o&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",r&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,S.Z)(i,R,a)}(ue),pe=(0,N.Z)(de,t),ve=ae.root||b.Root||K,be=te.root||g.root||{},fe=(0,C.Z)({className:(0,j.Z)(me.root,be.className,u),disabled:V},re),ge=m||"li";return c&&(fe.component=m||"div",fe.focusVisibleClassName=(0,j.Z)(z.focusVisible,Q),ge=L.Z),le?(ge=fe.component||m?ge:"div","li"===h&&("li"===ge?ge="div":"li"===fe.component&&(fe.component="div")),(0,p.jsx)(F.Z.Provider,{value:se,children:(0,p.jsxs)(W,(0,C.Z)({as:h,className:(0,j.Z)(me.container,w),ref:pe,ownerState:ue},oe,{children:[(0,p.jsx)(ve,(0,C.Z)({},be,!(0,I.Z)(ve)&&{as:ge,ownerState:(0,C.Z)({},ue,be.ownerState)},fe,{children:ce})),ce.pop()]}))})):(0,p.jsx)(F.Z.Provider,{value:se,children:(0,p.jsxs)(ve,(0,C.Z)({},be,{as:ge,ref:pe},!(0,I.Z)(ve)&&{ownerState:(0,C.Z)({},ue,be.ownerState)},fe,{children:[ce,U&&(0,p.jsx)(T,{children:U})]}))})})),J=n(3811),Q=n(7247),U=n(1413),X={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function $(e){var t=e.id,n=e.closeModal,s=e.closeModalOnSubmit,d=e.modalInfo,c=d.name,l=d.number,u=(0,r.I0)(),v=(0,o.useState)({name:c,number:l}),b=(0,a.Z)(v,2),Z=b[0],h=b[1];return(0,p.jsx)("div",{id:"backdrop",style:{backgroundColor:"rgba(25, 25, 25, 0.5)",position:"fixed",inset:0},onClick:n,children:(0,p.jsx)(g.Z,{sx:X,children:(0,p.jsxs)(g.Z,{onSubmit:function(e){e.preventDefault();var n=new FormData(e.currentTarget);u((0,i.mP)({name:n.get("name"),number:n.get("number"),contactId:t})),s()},component:"form",validate:"true",autoComplete:"off",children:[(0,p.jsx)(m.Z,{onChange:function(e){return h((0,U.Z)((0,U.Z)({},Z),{},{name:e.target.value}))},value:Z.name,required:!0,fullWidth:!0,name:"name",id:"outlined-name",label:"Name"}),(0,p.jsx)(m.Z,{onChange:function(e){return h((0,U.Z)((0,U.Z)({},Z),{},{number:e.target.value}))},value:Z.number,required:!0,margin:"normal",type:"tel",name:"number",id:"outlined-name",label:"Number",fullWidth:!0}),(0,p.jsx)(f.Z,{sx:{minHeight:"56px",display:"block",ml:"auto",mr:"auto"},type:"submit",variant:"contained",children:"Edit contact"})]})})})}var ee=n(8628);function te(){var e=(0,r.I0)(),t=(0,r.v9)(s.iu),n=(0,r.v9)(s.Vc),l=o.useState({name:"",number:""}),u=(0,a.Z)(l,2),m=u[0],f=u[1],g=o.useState(!1),x=(0,a.Z)(g,2),y=x[0],C=x[1],j=o.useState(""),S=(0,a.Z)(j,2),I=S[0],w=S[1];(0,o.useEffect)((function(){e((0,i.yF)())}),[e]);return(0,p.jsxs)(c.Z,{sx:{mt:2},maxWidth:"xl",children:[(0,p.jsx)(Z,{}),(0,p.jsx)(v,{}),n&&(0,p.jsx)(ee.Z,{}),(0,p.jsx)(h.Z,{children:t.map((function(t){var n=t.name,a=t.number,o=t.id;return(0,p.jsxs)(Y,{sx:{display:"flex",alignItems:"center",borderBottom:"1px solid #000"},children:[(0,p.jsx)(b.Z,{fontSize:"large",sx:{mr:1}}),(0,p.jsxs)("p",{children:[n," ",a]}),(0,p.jsx)(J.Z,{onClick:function(){return function(t){e((0,i.GK)(t))}(o)},sx:{ml:"auto"},edge:"end","aria-label":"delete",children:(0,p.jsx)(Q.Z,{fontSize:"large"})}),(0,p.jsx)(J.Z,{sx:{ml:2},edge:"end","aria-label":"delete",onClick:function(){return function(e,t,n){C(!0),w(e),f({name:t,number:n})}(o,n,a)},children:(0,p.jsx)(d.Z,{fontSize:"large"})})]},o)}))}),y&&(0,p.jsx)($,{modalInfo:m,closeModal:function(e){"backdrop"===e.target.id&&C(!1)},id:I,closeModalOnSubmit:function(){C(!1)}})]})}},8619:function(e,t,n){var a=n(4836);t.Z=void 0;var o=a(n(5649)),r=n(184),i=(0,o.default)((0,r.jsx)("path",{d:"M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z"}),"ContactPhone");t.Z=i},7247:function(e,t,n){var a=n(4836);t.Z=void 0;var o=a(n(5649)),r=n(184),i=(0,o.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i},4919:function(e,t,n){var a=n(4836);t.Z=void 0;var o=a(n(5649)),r=n(184),i=(0,o.default)((0,r.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"ModeEdit");t.Z=i}}]);
//# sourceMappingURL=441.126f6762.chunk.js.map