(this["webpackJsonpcrealytics-item-list"]=this["webpackJsonpcrealytics-item-list"]||[]).push([[0],{153:function(e,t,n){},154:function(e,t,n){},168:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(44),c=n.n(i),o=(n(153),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(154);var l=n(17),u=n(11),d=n(253),j=n(232),f=n(243),p=n(233),b=Object(p.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",margin:"1vw",textAlign:"center",boxShadow:"0px 0px 5px 2px rgba(0,0,0,0.3)"},img:{boxSizing:"border-box",width:"100%"},title:{padding:"5px"},price:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around",marginBottom:"15px",width:"100%"},sale:{display:"flex",flexDirection:"row","& $span":{color:"red"}}}})),h=n.p+"static/media/no-img-layout.097c93a9.png",m=n(2),g=function(e){var t=e.item,n=b(),a=Object(l.f)(),i=Object(r.useState)(t.image_link),c=Object(u.a)(i,2),o=c[0],s=c[1];return Object(m.jsx)(f.a,{item:!0,xs:12,sm:6,md:3,children:Object(m.jsxs)(j.a.div,{className:n.root,initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[Object(m.jsx)("div",{className:n.title,children:t.title}),Object(m.jsx)("img",{src:o,alt:"product-image",className:n.img,onError:function(){return s(h)},onClick:function(){t.additional_image_link&&t.additional_image_link.length>0&&a.push("/item/".concat(t.gtin),t.additional_image_link)},loading:"lazy"}),Object(m.jsxs)("div",{className:n.price,children:[Object(m.jsx)("div",{children:t.price}),t.sale_price<t.price?Object(m.jsxs)("div",{className:n.sale,children:[Object(m.jsx)("div",{style:{marginRight:"5px",fontWeight:"bold"},children:"SALE:"}),Object(m.jsx)("span",{children:t.sale_price})]}):null]})]})})},x=function(e){var t=e.items,n=t.map((function(e){return Object(m.jsx)(g,{item:e},e.gtin)}));return Object(m.jsx)(f.a,{container:!0,spacing:1,children:t.length>0?n:null})},O=n(236),v=function(e){var t=e.totalPages,n=e.activePage,r=e.setActivePage;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(O.a,{variant:"outlined",color:"primary",count:t,page:n,onChange:function(e,t){r(t)}})})},w=n(28),y=n(228),S=n(251),k=n(250),C=n(242),T=n(240),N=n(252),E=n(239),I=n(3),W=n(14),P=n(108),A=n(245),_=n(226),L=n(234),z=n(241),D=n(246),F=n(35),G=n(5),J=n(15),R=n(238),B=n(109);function U(e){var t=e.data,n=e.index,r=e.style,a=t[n],i=Object(w.a)(Object(w.a)({},r),{},{top:r.top+8});return a.hasOwnProperty("group")?Object(m.jsx)(A.a,{component:"div",style:i,children:a.group},a.key):Object(m.jsx)(D.a,Object(w.a)(Object(w.a)({component:"li"},a[0]),{},{noWrap:!0,style:i,children:a[1]}))}var M=a.a.createContext({}),$=a.a.forwardRef((function(e,t){var n=a.a.useContext(M);return Object(m.jsx)("div",Object(w.a)(Object(w.a)({ref:t},e),n))}));var V=a.a.forwardRef((function(e,t){var n=e.children,r=Object(P.a)(e,["children"]),i=[];n.forEach((function(e){i.push(e),i.push.apply(i,Object(W.a)(e.children||[]))}));var c=Object(F.a)(),o=Object(_.a)(c.breakpoints.up("sm"),{noSsr:!0}),s=i.length,l=o?36:48,u=function(e){return e.hasOwnProperty("group")?48:l},d=function(e){var t=a.a.useRef(null);return a.a.useEffect((function(){null!=t.current&&t.current.resetAfterIndex(0,!0)}),[e]),t}(s);return Object(m.jsx)("div",{ref:t,children:Object(m.jsx)(M.Provider,{value:r,children:Object(m.jsx)(B.a,{itemData:i,height:(s>8?8*l:i.map(u).reduce((function(e,t){return e+t}),0))+16,width:"100%",ref:d,outerElementType:$,innerElementType:"ul",itemSize:function(e){return u(i[e])},overscanCount:5,itemCount:s,children:U})})})})),q=Object(G.a)(L.a)(Object(I.a)({},"& .".concat(J.a.listbox),{boxSizing:"border-box","& ul":{padding:0,margin:0}})),H=function(e){var t=e.data,n=e.searchTerm,a=e.setSearchTerm,i=Object(r.useState)(""),c=Object(u.a)(i,2),o=c[0],s=c[1];var l=function(e){var t=new Set;return e.forEach((function(e){t.add(e.title)})),Array.from(t)}(t);return Object(m.jsx)(y.a,{spacing:2,sx:{width:300},children:Object(m.jsx)(R.a,{freeSolo:!0,id:"Autocomplete-search",sx:{width:300},disableListWrap:!0,PopperComponent:q,ListboxComponent:V,options:l.sort(),groupBy:function(e){return function(e){var t=e[0].toUpperCase();return/[0-9]/.test(t)?"0-9":t}(e)},renderInput:function(e){return Object(m.jsx)(z.a,Object(w.a)(Object(w.a)({},e),{},{label:"Search..."}))},renderOption:function(e,t){return[e,t]},renderGroup:function(e){return e},value:n,inputValue:o,onInputChange:function(e,t){"Enter"===(null===e||void 0===e?void 0:e.code)?a(o):s(t)},onChange:function(e,t){a(t||o)}})})},K=n(235),Q=Object(p.a)((function(e){return{root:{margin:"auto"},stack:{width:"100%",display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap",margin:"25px 0px"},formGroup:Object(I.a)({flexWrap:"nowrap",width:"300px",alignItems:"center"},e.breakpoints.down("xs"),{marginTop:"10px !important",marginLeft:"0px !important"})}})),X=function(e){var t=Q(),n=e.data,r=e.searchTerm,a=e.setSearchTerm,i=e.filter,c=e.setFilter;return Object(m.jsxs)(y.a,{spacing:2,direction:"row",className:t.stack,children:[Object(m.jsx)("div",{children:Object(m.jsx)(H,{data:n,searchTerm:r,setSearchTerm:a})}),r&&Object(m.jsxs)(S.a,{row:!0,className:t.formGroup,children:[Object(m.jsxs)(k.a,{fullWidth:!0,children:[Object(m.jsx)(C.a,{id:"demo-simple-select-label",children:"Gender"}),Object(m.jsxs)(K.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:i.gender,label:"Gender",onChange:function(e){var t=e.target.value;c((function(e){return Object(w.a)(Object(w.a)({},e),{},{gender:t})}))},children:[""!==i.gender&&Object(m.jsx)(T.a,{value:"",children:Object(m.jsx)("em",{children:"None"})}),Object(m.jsx)(T.a,{value:"male",children:"male"}),Object(m.jsx)(T.a,{value:"female",children:"female"}),Object(m.jsx)(T.a,{value:"unisex",children:"unisex"})]})]}),Object(m.jsx)(N.a,{sx:{margin:"auto"},label:"Sale",control:Object(m.jsx)(E.a,{checked:i.onSale,onChange:function(e){var t=e.target.checked;c((function(e){return Object(w.a)(Object(w.a)({},e),{},{onSale:t})}))},inputProps:{"aria-label":"controlled"}})})]})]})},Y=n(55),Z=n.n(Y),ee=n(104),te=n(106),ne=n.p+"static/media/products.c99fdf18.csv";function re(){return(re=Object(ee.a)(Z.a.mark((function e(t){var n,r;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="products"===e.t0?3:5;break;case 3:case 5:return n=ne,e.abrupt("break",7);case 7:return e.next=9,Object(te.a)(n);case 9:return r=e.sent,e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ae=function(e,t,n){var r=t-1,a=t+e-1;return r<0&&(r=0),n.slice(r,a)},ie=function(){var e=Object(l.f)(),t=Object(l.g)(),n=Object(r.useState)([]),i=Object(u.a)(n,2),c=i[0],o=i[1],s=Object(r.useState)(1),j=Object(u.a)(s,2),f=j[0],p=j[1],b=Object(r.useState)(""),h=Object(u.a)(b,2),g=h[0],O=h[1],w=a.a.useState({gender:"",onSale:!1}),y=Object(u.a)(w,2),S=y[0],k=y[1];Object(r.useEffect)((function(){(function(e){return re.apply(this,arguments)})("products").then((function(e){return o(e)}));var n=t.state;window.onpopstate=function(){var e=sessionStorage.getItem("searchTerm");e&&O(e);var t=sessionStorage.getItem("filter");if(t){var n=JSON.parse(t);k(n)}},n&&((null===n||void 0===n?void 0:n.searchTerm)&&O(n.searchTerm),0===Object.keys(null===n||void 0===n?void 0:n.filter).length&&(null===n||void 0===n?void 0:n.filter.constructor)===Object&&k(n.filter),e.replace("/",""))}),[e,t.state]),Object(r.useEffect)((function(){g&&sessionStorage.setItem("searchTerm",g)}),[g]),Object(r.useEffect)((function(){sessionStorage.setItem("filter",JSON.stringify(S))}),[S]);var C=c.filter((function(e){return""===g||e.title.toLowerCase().includes(g.toLowerCase())?e:void 0})).sort((function(e,t){return e.title.localeCompare(t.title)}));""!==S.gender&&(C=C.filter((function(e){if(e.gender.includes(S.gender))return e}))),S.onSale&&(C=C.filter((function(e){if((null===e||void 0===e?void 0:e.sale_price)<(null===e||void 0===e?void 0:e.price))return e})));var T=Math.round(C.length/100),N=ae(100,f,C);return Object(m.jsxs)(d.a,{sx:{display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(m.jsx)(X,{data:C,searchTerm:g,setSearchTerm:O,filter:S,setFilter:k}),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{items:N}),T>=1&&Object(m.jsx)(v,{totalPages:T,activePage:f,setActivePage:p})]})]})},ce=Object(p.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",margin:"1vw"},grid:{width:"1562px",justifyContent:"flex-start"},img:{boxSizing:"border-box",width:"100%"},close:{position:"fixed",right:"15px",opacity:.5,"&:hover":{opacity:1}}}})),oe=n(105),se=n.n(oe),le=function(){var e=ce(),t=Object(l.f)(),n=Object(l.g)(),a=Object(r.useState)(!1),i=Object(u.a)(a,2),c=i[0],o=i[1],s=n.state.split(",").map((function(t){return Object(m.jsx)(f.a,{item:!0,xs:12,lg:6,children:c?null:Object(m.jsx)("img",{src:t,className:e.img,alt:"additional picture of product",loading:"lazy",onError:function(){return o(!0)}},t)})})),d={searchTerm:"",filter:{gender:"",onSale:!1}};return Object(r.useEffect)((function(){var e=sessionStorage.getItem("searchTerm");e&&(d.searchTerm=e);var t=sessionStorage.getItem("filter");if(t){var n=JSON.parse(t);d.filter=n}}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:e.root,children:[Object(m.jsx)(f.a,{container:!0,className:e.grid,children:s}),Object(m.jsx)(se.a,{className:e.close,color:"secondary",sx:{fontSize:50},onClick:function(){return t.push("/",d)}})]})})};var ue=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{exact:!0,path:"/",component:ie}),Object(m.jsx)(l.a,{exact:!0,path:"/item/:id",children:Object(m.jsx)(le,{})})]})})},de=n(70);c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(de.a,{children:Object(m.jsx)(ue,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");o?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):s(t,e)}))}}()}},[[168,1,2]]]);
//# sourceMappingURL=main.c248cd41.chunk.js.map