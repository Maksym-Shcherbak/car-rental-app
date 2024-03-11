import{q as b,n as G,u as Ve,r as _,b as he,j as i,o as Ue,p as Ze,t as qe,d as He,v as de}from"./index-Bn6pq7MP.js";const Ye=e=>e.adverts.adverts,Je=e=>e.adverts.favoriteAdverts,ar=e=>e.adverts.isLoading,ir=e=>e.adverts.isLoadMore,or=e=>e.adverts.totalAdverts,sr=e=>e.adverts.limit,Qe=b.li`
  position: relative;
  border-radius: 14px;
`,Xe=b.div`
  border-radius: 14px;
  min-width: 274px;
  height: 268px;
  margin-bottom: 14px;
  overflow: hidden;
  pointer-events: none;
`,et=b.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`,tt=b.div`
  margin-botttom: 28px;
`,rt=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`,nt=b.h3`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`,at=b.h3`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`,it=b.button`
  border-radius: 12px;
  padding: 12px 99.5px;
  background: #3470ff;
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
  border: none;
  margin-top: 28px;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background: #0b44cd;
  }
`,ot=b.button`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 14px;
  right: 14px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  pointer-events: auto;
  overflow: hidden;
`,st=b.div`
  height: 64px;
`;var Ie={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},pe=G.createContext&&G.createContext(Ie),lt=["attr","size","title"];function ct(e,t){if(e==null)return{};var r=ut(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ut(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function le(){return le=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},le.apply(this,arguments)}function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?we(Object(r),!0).forEach(function(n){ft(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ft(e,t,r){return t=dt(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function dt(e){var t=vt(e,"string");return typeof t=="symbol"?t:String(t)}function vt(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function De(e){return e&&e.map((t,r)=>G.createElement(t.tag,ce({key:r},t.attr),De(t.child)))}function xe(e){return t=>G.createElement(gt,le({attr:ce({},e.attr)},t),De(e.child))}function gt(e){var t=r=>{var{attr:n,size:a,title:o}=e,l=ct(e,lt),u=a||r.size||"1em",p;return r.className&&(p=r.className),e.className&&(p=(p?p+" ":"")+e.className),G.createElement("svg",le({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,l,{className:p,style:ce(ce({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&G.createElement("title",null,o),e.children)};return pe!==void 0?G.createElement(pe.Consumer,null,r=>t(r)):t(Ie)}function mt(e){return xe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"},child:[]}]})(e)}function ht(e){return xe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"},child:[]}]})(e)}const pt=b.div`
  border-radius: 14px;
  max-width: 461px;
  height: 248px;
  margin-bottom: 14px;
  overflow: hidden;
  pointer-events: none;
`,xt=b.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`,bt=b.div`
  margin-bottom: 24px;
`,yt=b.h3`
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: #121417;
  margin-bottom: 8px;
`,Oe=b.span`
  color: #3470ff;
`,wt=b.p`
  font-family: Manrope, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`,jt=b.div`
  margin-bottom: 24px;
`,St=b.h4`
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`,ne=b.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px 4px;
  list-style: none;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`,L=b.li`
  padding-right: 6px;
  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
`,P=b.p`
  font-family: Manrope, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  margin: 0;
`,Ct=b.div`
  margin-bottom: 24px;
`,Nt=b.h4`
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`,Vt=b.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px 4px;
  list-style: none;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
`,ve=b.li`
  border-radius: 35px;
  padding: 7px 14px;
  background: #f9f9f9;
  font-family: Manrope, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #363535;
`,ge=b.span`
  font-weight: 600;
  color: #3470ff;
`,It=b.a`
  display: inline-block;
  border-radius: 12px;
  padding: 12px 50px;
  background: #3470ff;
  font-family: Manrope, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  text-decoration: none;
  color: #fff;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background: #0b44cd;
  }
`,Dt=({src:e,make:t,model:r,year:n,price:a,rentalCompany:o,address:l,type:u,functionalities:p,id:y,accessories:S})=>{const x=`${a.slice(1)}${a.slice(0,1)}`,j=r.length<=5?r:null,w=Ve(),[f,C]=_.useState(!1),V=he(Ye),g=he(Je),[T,B,Z]=l.split(","),z=W=>{const m=W.target.closest("li").dataset.id;let A=V.find($=>$.id===Number(m));A||(A=g.find($=>$.id===Number(m))),w(Ue(A))},q=W=>{const m=W.target.closest("li"),A=Number(m.dataset.id);if(m.classList.contains("favorite")){m.classList.remove("favorite"),C(!1),w(Ze(A));return}const $=V.find(U=>U.id===A);m.classList.add("favorite"),C(!0),w(qe($))};return _.useEffect(()=>{g.find(m=>m.id===y)&&C(!0)},[g,y]),i.jsxs(Qe,{"data-id":y,children:[i.jsx(Xe,{children:i.jsx(et,{src:e})}),i.jsxs(tt,{children:[i.jsxs(rt,{children:[i.jsxs(nt,{children:[t," ",i.jsx(Oe,{children:j}),", ",n]}),i.jsx(at,{children:x})]}),i.jsxs(st,{children:[i.jsxs(ne,{children:[i.jsx(L,{children:i.jsxs(P,{children:[" ",B]})}),i.jsx(L,{children:i.jsxs(P,{children:[" ",Z]})}),i.jsx(L,{children:i.jsx(P,{children:o})})]}),i.jsxs(ne,{children:[i.jsx(L,{children:i.jsx(P,{children:u})}),i.jsx(L,{children:i.jsxs(P,{children:[" ",t]})}),i.jsx(L,{children:i.jsxs(P,{children:[" ",y]})}),i.jsx(L,{children:i.jsx(P,{children:p[1]})})]})]}),i.jsx(it,{onClick:z,children:"Learn more"})]}),i.jsx(ot,{onClick:q,children:i.jsx(pe.Provider,{value:{size:"18px",color:""},children:f?i.jsx(ht,{style:{fill:"#3470ff",strokeWidth:"1px",stroke:"#3470ff"}}):i.jsx(mt,{style:{fill:"rgba(255, 255, 255, 0.8)"}})})})]})},Ot=b.ul`
  display: grid;
  max-width: calc(100vw - 256px);
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  grid-gap: 50px 29px;
  margin-bottom: 100px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`,lr=({adverts:e})=>i.jsx(Ot,{children:e.map(t=>i.jsx(Dt,{src:t.img,make:t.make,year:t.year,price:t.rentalPrice,id:t.id,model:t.model,address:t.address,functionalities:t.functionalities,type:t.type,rentalCompany:t.rentalCompany,accessories:t.accessories},t.id))}),At=b.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(15, 15, 15, 0.6);
  display: block;
  z-index: 10;
`,Et=b.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f8f9ff;
  max-width: 541px;
  max-height: 90vh;
  padding: 40px;
  border-radius: 20px;
  text-align: left;
  overflow: hidden;
`,kt=b.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 18px;
  right: 18px;
  background-color: transparent;
  padding: 0;
  border: none;
  color: rgba(18, 20, 23, 1);
  transition: transform 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);

  &:hover,
  &:focus {
    transform: scale(1.25);
  }
`;function Mt(e){return xe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"},child:[]}]})(e)}const cr=({children:e})=>{const t=Ve(),r=he(He),n=o=>{o.key==="Escape"&&t(de())},a=o=>{o.target===o.currentTarget&&t(de())};return _.useEffect(()=>(document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}),[]),_.useEffect(()=>(document.body.style.overflow="hidden",()=>document.body.style.overflow="unset"),[]),r?i.jsx(At,{onClick:a,children:i.jsxs(Et,{children:[i.jsx(kt,{onClick:()=>t(de()),children:i.jsx(Mt,{size:"24px"})}),e]})}):null};function Ae(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}var ae;(function(e){e.event="event",e.props="prop"})(ae||(ae={}));function Y(){}function Tt(e){var t,r=void 0;return function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return t&&n.length===t.length&&n.every(function(o,l){return o===t[l]})||(t=n,r=e.apply(void 0,n)),r}}function ie(e){return!!(e||"").match(/\d/)}function X(e){return e==null}function Bt(e){return typeof e=="number"&&isNaN(e)}function Ee(e){return X(e)||Bt(e)||typeof e=="number"&&!isFinite(e)}function ke(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function Ft(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function Lt(e,t,r){var n=Ft(r),a=e.search(/[1-9]/);return a=a===-1?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(n,"$1"+t)}function Pt(e){var t=_.useRef(e);t.current=e;var r=_.useRef(function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return t.current.apply(t,n)});return r.current}function be(e,t){t===void 0&&(t=!0);var r=e[0]==="-",n=r&&t;e=e.replace("-","");var a=e.split("."),o=a[0],l=a[1]||"";return{beforeDecimal:o,afterDecimal:l,hasNegation:r,addNegation:n}}function _t(e){if(!e)return e;var t=e[0]==="-";t&&(e=e.substring(1,e.length));var r=e.split("."),n=r[0].replace(/^0+/,"")||"0",a=r[1]||"";return(t?"-":"")+n+(a?"."+a:"")}function Me(e,t,r){for(var n="",a=r?"0":"",o=0;o<=t-1;o++)n+=e[o]||a;return n}function je(e,t){return Array(t+1).join(e)}function Te(e){var t=e+"",r=t[0]==="-"?"-":"";r&&(t=t.substring(1));var n=t.split(/[eE]/g),a=n[0],o=n[1];if(o=Number(o),!o)return r+a;a=a.replace(".","");var l=1+o,u=a.length;return l<0?a="0."+je("0",Math.abs(l))+a:l>=u?a=a+je("0",l-u):a=(a.substring(0,l)||"0")+"."+a.substring(l),r+a}function Se(e,t,r){if(["","-"].indexOf(e)!==-1)return e;var n=(e.indexOf(".")!==-1||r)&&t,a=be(e),o=a.beforeDecimal,l=a.afterDecimal,u=a.hasNegation,p=parseFloat("0."+(l||"0")),y=l.length<=t?"0."+l:p.toFixed(t),S=y.split("."),x=o;o&&Number(S[0])&&(x=o.split("").reverse().reduce(function(C,V,g){return C.length>g?(Number(C[0])+Number(V)).toString()+C.substring(1,C.length):V+C},S[0]));var j=Me(S[1]||"",t,r),w=u?"-":"",f=n?".":"";return""+w+x+f+j}function J(e,t){if(e.value=e.value,e!==null){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}var Be=Tt(function(e,t){for(var r=0,n=0,a=e.length,o=t.length;e[r]===t[r]&&r<a;)r++;for(;e[a-1-n]===t[o-1-n]&&o-n>r&&a-n>r;)n++;return{from:{start:r,end:a-n},to:{start:r,end:o-n}}});function Rt(e,t,r){return Math.min(Math.max(e,t),r)}function me(e){return Math.max(e.selectionStart,e.selectionEnd)}function zt(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function Wt(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function $t(e){var t=e.currentValue,r=e.formattedValue,n=e.currentValueIndex,a=e.formattedValueIndex;return t[n]===r[a]}function Kt(e,t,r,n,a,o,l){l===void 0&&(l=$t);var u=a.findIndex(function(Z){return Z}),p=e.slice(0,u);!t&&!r.startsWith(p)&&(t=p,r=p+r,n=n+p.length);for(var y=r.length,S=e.length,x={},j=new Array(y),w=0;w<y;w++){j[w]=-1;for(var f=0,C=S;f<C;f++){var V=l({currentValue:r,lastValue:t,formattedValue:e,currentValueIndex:w,formattedValueIndex:f});if(V&&x[f]!==!0){j[w]=f,x[f]=!0;break}}}for(var g=n;g<y&&(j[g]===-1||!o(r[g]));)g++;var T=g===y||j[g]===-1?S:j[g];for(g=n-1;g>0&&j[g]===-1;)g--;var B=g===-1||j[g]===-1?0:j[g]+1;return B>T?T:n-B<T-n?B:T}function Ce(e,t,r,n){var a=e.length;if(t=Rt(t,0,a),n==="left"){for(;t>=0&&!r[t];)t--;t===-1&&(t=r.indexOf(!0))}else{for(;t<=a&&!r[t];)t++;t>a&&(t=r.lastIndexOf(!0))}return t===-1&&(t=a),t}function Gt(e){for(var t=Array.from({length:e.length+1}).map(function(){return!0}),r=0,n=t.length;r<n;r++)t[r]=!!(ie(e[r])||ie(e[r-1]));return t}function Fe(e,t,r,n,a,o){o===void 0&&(o=Y);var l=Pt(function(f,C){var V,g;return Ee(f)?(g="",V=""):typeof f=="number"||C?(g=typeof f=="number"?Te(f):f,V=n(g)):(g=a(f,void 0),V=n(g)),{formattedValue:V,numAsString:g}}),u=_.useState(function(){return l(X(e)?t:e,r)}),p=u[0],y=u[1],S=function(f,C){f.formattedValue!==p.formattedValue&&y({formattedValue:f.formattedValue,numAsString:f.value}),o(f,C)},x=e,j=r;X(e)&&(x=p.numAsString,j=!0);var w=l(x,j);return _.useMemo(function(){y(w)},[w.formattedValue]),[p,S]}function Ut(e){return e.replace(/[^0-9]/g,"")}function Zt(e){return e}function qt(e){var t=e.type;t===void 0&&(t="text");var r=e.displayType;r===void 0&&(r="input");var n=e.customInput,a=e.renderText,o=e.getInputRef,l=e.format;l===void 0&&(l=Zt);var u=e.removeFormatting;u===void 0&&(u=Ut);var p=e.defaultValue,y=e.valueIsNumericString,S=e.onValueChange,x=e.isAllowed,j=e.onChange;j===void 0&&(j=Y);var w=e.onKeyDown;w===void 0&&(w=Y);var f=e.onMouseUp;f===void 0&&(f=Y);var C=e.onFocus;C===void 0&&(C=Y);var V=e.onBlur;V===void 0&&(V=Y);var g=e.value,T=e.getCaretBoundary;T===void 0&&(T=Gt);var B=e.isValidInputCharacter;B===void 0&&(B=ie);var Z=e.isCharacterSame,z=Ae(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),q=Fe(g,p,!!y,l,u,S),W=q[0],m=W.formattedValue,A=W.numAsString,$=q[1],U=_.useRef({formattedValue:m,numAsString:A}),Q=function(s,c){U.current={formattedValue:s.formattedValue,numAsString:s.value},$(s,c)},H=_.useState(!1),ee=H[0],te=H[1],d=_.useRef(null),v=_.useRef({setCaretTimeout:null,focusTimeout:null});_.useEffect(function(){return te(!0),function(){clearTimeout(v.current.setCaretTimeout),clearTimeout(v.current.focusTimeout)}},[]);var M=l,D=function(s,c){var h=parseFloat(c);return{formattedValue:s,value:c,floatValue:isNaN(h)?void 0:h}},O=function(s,c,h){s.selectionStart===0&&s.selectionEnd===s.value.length||(J(s,c),v.current.setCaretTimeout=setTimeout(function(){s.value===h&&s.selectionStart!==c&&J(s,c)},0))},E=function(s,c,h){return Ce(s,c,T(s),h)},R=function(s,c,h){var k=T(c),F=Kt(c,m,s,h,k,B,Z);return F=Ce(c,F,k),F},oe=function(s){var c=s.formattedValue;c===void 0&&(c="");var h=s.input,k=s.source,F=s.event,N=s.numAsString,I;if(h){var K=s.inputValue||h.value,re=me(h);h.value=c,I=R(K,c,re),I!==void 0&&O(h,I,c)}c!==m&&Q(D(c,N),{event:F,source:k})};_.useEffect(function(){var s=U.current,c=s.formattedValue,h=s.numAsString;m!==c&&(m!==A||c!==h)&&Q(D(m,A),{event:void 0,source:ae.props})},[m,A]);var fe=d.current?me(d.current):void 0,se=typeof window<"u"?_.useLayoutEffect:_.useEffect;se(function(){var s=d.current;if(m!==U.current.formattedValue&&s){var c=R(U.current.formattedValue,m,fe);s.value=m,O(s,c,m)}},[m]);var Le=function(s,c,h){var k=Be(m,s),F=Object.assign(Object.assign({},k),{lastValue:m}),N=u(s,F),I=M(N);if(N=u(I,void 0),x&&!x(D(I,N))){var K=c.target,re=me(K),Ge=R(s,m,re);return K.value=m,O(K,Ge,m),!1}return oe({formattedValue:I,numAsString:N,inputValue:s,event:c,source:h,input:c.target}),!0},Pe=function(s){var c=s.target,h=c.value,k=Le(h,s,ae.event);k&&j(s)},_e=function(s){var c=s.target,h=s.key,k=c.selectionStart,F=c.selectionEnd,N=c.value;N===void 0&&(N="");var I;if(h==="ArrowLeft"||h==="Backspace"?I=Math.max(k-1,0):h==="ArrowRight"?I=Math.min(k+1,N.length):h==="Delete"&&(I=k),I===void 0||k!==F){w(s);return}var K=I;if(h==="ArrowLeft"||h==="ArrowRight"){var re=h==="ArrowLeft"?"left":"right";K=E(N,I,re),K!==I&&s.preventDefault()}else h==="Delete"&&!B(N[I])?K=E(N,I,"right"):h==="Backspace"&&!B(N[I])&&(K=E(N,I,"left"));K!==I&&O(c,K,N),s.isUnitTestRun&&O(c,K,N),w(s)},Re=function(s){var c=s.target,h=c.selectionStart,k=c.selectionEnd,F=c.value;if(F===void 0&&(F=""),h===k){var N=E(F,h);N!==h&&O(c,N,F)}f(s)},ze=function(s){s.persist&&s.persist();var c=s.target,h=s.currentTarget;d.current=c,v.current.focusTimeout=setTimeout(function(){var k=c.selectionStart,F=c.selectionEnd,N=c.value;N===void 0&&(N="");var I=E(N,k);I!==k&&!(k===0&&F===N.length)&&O(c,I,N),C(Object.assign(Object.assign({},s),{currentTarget:h}))},0)},We=function(s){d.current=null,clearTimeout(v.current.focusTimeout),clearTimeout(v.current.setCaretTimeout),V(s)},$e=ee&&zt()?"numeric":void 0,ye=Object.assign({inputMode:$e},z,{type:t,value:m,onChange:Pe,onKeyDown:_e,onMouseUp:Re,onFocus:ze,onBlur:We});if(r==="text")return a?G.createElement(G.Fragment,null,a(m,z)||null):G.createElement("span",Object.assign({},z,{ref:o}),m);if(n){var Ke=n;return G.createElement(Ke,Object.assign({},ye,{ref:o}))}return G.createElement("input",Object.assign({},ye,{ref:o}))}function Ne(e,t){var r=t.decimalScale,n=t.fixedDecimalScale,a=t.prefix;a===void 0&&(a="");var o=t.suffix;o===void 0&&(o="");var l=t.allowNegative,u=t.thousandsGroupStyle;if(u===void 0&&(u="thousand"),e===""||e==="-")return e;var p=ue(t),y=p.thousandSeparator,S=p.decimalSeparator,x=r!==0&&e.indexOf(".")!==-1||r&&n,j=be(e,l),w=j.beforeDecimal,f=j.afterDecimal,C=j.addNegation;return r!==void 0&&(f=Me(f,r,!!n)),y&&(w=Lt(w,y,u)),a&&(w=a+w),o&&(f=f+o),C&&(w="-"+w),e=w+(x&&S||"")+f,e}function ue(e){var t=e.decimalSeparator;t===void 0&&(t=".");var r=e.thousandSeparator,n=e.allowedDecimalSeparators;return r===!0&&(r=","),n||(n=[t,"."]),{decimalSeparator:t,thousandSeparator:r,allowedDecimalSeparators:n}}function Ht(e,t){e===void 0&&(e="");var r=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),a=r.test(e),o=n.test(e);return e=e.replace(/-/g,""),a&&!o&&t&&(e="-"+e),e}function Yt(e,t){return new RegExp("(^-)|[0-9]|"+ke(e),t?"g":void 0)}function Jt(e,t,r){return e===""?!0:!(t!=null&&t.match(/\d/))&&!(r!=null&&r.match(/\d/))&&typeof e=="string"&&!isNaN(Number(e))}function Qt(e,t,r){var n;t===void 0&&(t=Wt(e));var a=r.allowNegative,o=r.prefix;o===void 0&&(o="");var l=r.suffix;l===void 0&&(l="");var u=r.decimalScale,p=t.from,y=t.to,S=y.start,x=y.end,j=ue(r),w=j.allowedDecimalSeparators,f=j.decimalSeparator,C=e[x]===f;if(ie(e)&&(e===o||e===l)&&t.lastValue==="")return e;if(x-S===1&&w.indexOf(e[S])!==-1){var V=u===0?"":f;e=e.substring(0,S)+V+e.substring(S+1,e.length)}var g=function(v,M,D){var O=!1,E=!1;o.startsWith("-")?O=!1:v.startsWith("--")?(O=!1,E=!0):l.startsWith("-")&&v.length===l.length?O=!1:v[0]==="-"&&(O=!0);var R=O?1:0;return E&&(R=2),R&&(v=v.substring(R),M-=R,D-=R),{value:v,start:M,end:D,hasNegation:O}},T=g(e,S,x),B=T.hasNegation;n=T,e=n.value,S=n.start,x=n.end;var Z=g(t.lastValue,p.start,p.end),z=Z.start,q=Z.end,W=Z.value,m=e.substring(S,x);e.length&&W.length&&(z>W.length-l.length||q<o.length)&&!(m&&l.startsWith(m))&&(e=W);var A=0;e.startsWith(o)?A+=o.length:S<o.length&&(A=S),e=e.substring(A),x-=A;var $=e.length,U=e.length-l.length;e.endsWith(l)?$=U:(x>U||x>e.length-l.length)&&($=x),e=e.substring(0,$),e=Ht(B?"-"+e:e,a),e=(e.match(Yt(f,!0))||[]).join("");var Q=e.indexOf(f);e=e.replace(new RegExp(ke(f),"g"),function(v,M){return M===Q?".":""});var H=be(e,a),ee=H.beforeDecimal,te=H.afterDecimal,d=H.addNegation;return y.end-y.start<p.end-p.start&&ee===""&&C&&!parseFloat(te)&&(e=d?"-":""),e}function Xt(e,t){var r=t.prefix;r===void 0&&(r="");var n=t.suffix;n===void 0&&(n="");var a=Array.from({length:e.length+1}).map(function(){return!0}),o=e[0]==="-";a.fill(!1,0,r.length+(o?1:0));var l=e.length;return a.fill(!1,l-n.length+1,l+1),a}function er(e){var t=ue(e),r=t.thousandSeparator,n=t.decimalSeparator,a=e.prefix;a===void 0&&(a="");var o=e.allowNegative;if(o===void 0&&(o=!0),r===n)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+r+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+n+` (default value for decimalSeparator is .)
     `);return a.startsWith("-")&&o&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+a+`
      allowNegative: `+o+`
    `),o=!1),Object.assign(Object.assign({},e),{allowNegative:o})}function tr(e){e=er(e),e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var t=e.suffix,r=e.allowNegative,n=e.allowLeadingZeros,a=e.onKeyDown;a===void 0&&(a=Y);var o=e.onBlur;o===void 0&&(o=Y);var l=e.thousandSeparator,u=e.decimalScale,p=e.fixedDecimalScale,y=e.prefix;y===void 0&&(y="");var S=e.defaultValue,x=e.value,j=e.valueIsNumericString,w=e.onValueChange,f=Ae(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),C=ue(e),V=C.decimalSeparator,g=C.allowedDecimalSeparators,T=function(d){return Ne(d,e)},B=function(d,v){return Qt(d,v,e)},Z=X(x)?S:x,z=j??Jt(Z,y,t);X(x)?X(S)||(z=z||typeof S=="number"):z=z||typeof x=="number";var q=function(d){return Ee(d)?d:(typeof d=="number"&&(d=Te(d)),z&&typeof u=="number"?Se(d,u,!!p):d)},W=Fe(q(x),q(S),!!z,T,B,w),m=W[0],A=m.numAsString,$=m.formattedValue,U=W[1],Q=function(d){var v=d.target,M=d.key,D=v.selectionStart,O=v.selectionEnd,E=v.value;if(E===void 0&&(E=""),D!==O){a(d);return}M==="Backspace"&&E[0]==="-"&&D===y.length+1&&r&&J(v,1),u&&p&&(M==="Backspace"&&E[D-1]===V?(J(v,D-1),d.preventDefault()):M==="Delete"&&E[D]===V&&d.preventDefault()),g!=null&&g.includes(M)&&E[D]===V&&J(v,D+1);var R=l===!0?",":l;M==="Backspace"&&E[D-1]===R&&J(v,D-1),M==="Delete"&&E[D]===R&&J(v,D+1),a(d)},H=function(d){var v=A;if(v.match(/\d/g)||(v=""),n||(v=_t(v)),p&&u&&(v=Se(v,u,p)),v!==A){var M=Ne(v,e);U({formattedValue:M,value:v,floatValue:parseFloat(v)},{event:d,source:ae.event})}o(d)},ee=function(d){return d===V?!0:ie(d)},te=function(d){var v=d.currentValue,M=d.lastValue,D=d.formattedValue,O=d.currentValueIndex,E=d.formattedValueIndex,R=v[O],oe=D[E],fe=Be(M,v),se=fe.to;return O>=se.start&&O<se.end&&g&&g.includes(R)&&oe===V?!0:R===oe};return Object.assign(Object.assign({},f),{value:$,valueIsNumericString:!1,isValidInputCharacter:ee,isCharacterSame:te,onValueChange:U,format:T,removeFormatting:B,getCaretBoundary:function(d){return Xt(d,e)},onKeyDown:Q,onBlur:H})}function rr(e){var t=tr(e);return G.createElement(qt,Object.assign({},t))}const ur=({data:e})=>{const t=e.rentalConditions.split(`
`),r=t.map(u=>{if(u.includes(":")){const p=u.slice(0,-2),y=u.slice(-2);return i.jsxs(i.Fragment,{children:[p,i.jsx(ge,{children:y})]})}return u}),[n,a,o]=e.address.split(","),l=e.mileage/1e3;return i.jsxs(i.Fragment,{children:[i.jsx(pt,{children:i.jsx(xt,{src:e.img})}),i.jsxs(bt,{children:[i.jsxs(yt,{children:[e.make," ",i.jsx(Oe,{children:e.model}),","," ",e.year]}),i.jsxs(ne,{children:[i.jsx(L,{children:i.jsx(P,{children:a})}),i.jsx(L,{children:i.jsx(P,{children:o})}),i.jsx(L,{children:i.jsxs(P,{children:["Id: ",e.id]})}),i.jsx(L,{children:i.jsxs(P,{children:["Year: ",e.year]})}),i.jsx(L,{children:i.jsxs(P,{children:["Type: ",e.type]})}),i.jsx(L,{children:i.jsxs(P,{children:["Fuel Consumption: ",e.fuelConsumption]})}),i.jsx(L,{children:i.jsxs(P,{children:["Engine Size: ",e.engineSize]})})]}),i.jsx(wt,{children:e.description})]}),i.jsxs(jt,{children:[i.jsx(St,{children:"Accessories and functionalities:"}),i.jsx(ne,{children:e.accessories.map(u=>i.jsx(L,{children:i.jsx(P,{children:u})},u))}),i.jsx(ne,{children:e.functionalities.map(u=>i.jsx(L,{children:i.jsx(P,{children:u})},u))})]}),i.jsxs(Ct,{children:[i.jsx(Nt,{children:"Rental Conditions: "}),i.jsxs(Vt,{children:[t?r.map(u=>i.jsx(ve,{children:u},u)):null,i.jsxs(ve,{children:["Mileage:"," ",i.jsx(ge,{children:i.jsx(rr,{value:l,decimalSeparator:",",displayType:"text"})})]}),i.jsxs(ve,{children:["Price: ",i.jsx(ge,{children:e.rentalPrice})]})]})]}),i.jsx(It,{href:"tel:+380730000000",children:"Rental car"})]})},fr=e=>{e.length!==0&&e.forEach(t=>{const r=document.querySelector(`[data-id="${t.id}"]`);r&&r.classList.add("favorite")})},dr=b.section`
  padding-top: 93px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 93px;
  }
`;export{lr as A,cr as M,dr as S,ar as a,Ye as b,Je as c,or as d,ir as e,fr as f,ur as g,sr as s};
