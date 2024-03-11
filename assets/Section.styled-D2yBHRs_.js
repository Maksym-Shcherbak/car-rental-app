import{q as y,o as K,u as Ie,r as R,b as he,j as i,n as Ze,t as we,p as qe,v as He,d as Ye,w as de}from"./index-_Clohuba.js";const Je=e=>e.adverts.adverts,Qe=e=>e.adverts.favoriteAdverts,ir=e=>e.adverts.isLoading,or=e=>e.adverts.isLoadMore,sr=e=>e.adverts.totalAdverts,lr=e=>e.adverts.limit,Xe=y.li`
  position: relative;
  border-radius: 14px;
`,et=y.div`
  border-radius: 14px;
  min-width: 274px;
  height: 268px;
  margin-bottom: 14px;
  overflow: hidden;
  pointer-events: none;
`,tt=y.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`,rt=y.div`
  margin-botttom: 28px;
`,nt=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`,at=y.h3`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`,it=y.h3`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`,ot=y.button`
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
`,st=y.button`
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
`,lt=y.div`
  height: 64px;
`;var De={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},pe=K.createContext&&K.createContext(De),ct=["attr","size","title"];function ut(e,t){if(e==null)return{};var r=ft(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ft(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function le(){return le=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},le.apply(this,arguments)}function je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?je(Object(r),!0).forEach(function(n){dt(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function dt(e,t,r){return t=vt(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function vt(e){var t=gt(e,"string");return typeof t=="symbol"?t:String(t)}function gt(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Oe(e){return e&&e.map((t,r)=>K.createElement(t.tag,ce({key:r},t.attr),Oe(t.child)))}function xe(e){return t=>K.createElement(mt,le({attr:ce({},e.attr)},t),Oe(e.child))}function mt(e){var t=r=>{var{attr:n,size:a,title:o}=e,l=ut(e,ct),u=a||r.size||"1em",m;return r.className&&(m=r.className),e.className&&(m=(m?m+" ":"")+e.className),K.createElement("svg",le({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,l,{className:m,style:ce(ce({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&K.createElement("title",null,o),e.children)};return pe!==void 0?K.createElement(pe.Consumer,null,r=>t(r)):t(De)}function ht(e){return xe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"},child:[]}]})(e)}function pt(e){return xe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"},child:[]}]})(e)}const xt=y.div`
  border-radius: 14px;
  max-width: 461px;
  height: 248px;
  margin-bottom: 14px;
  overflow: hidden;
  pointer-events: none;
`,bt=y.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`,yt=y.div`
  margin-bottom: 24px;
`,wt=y.h3`
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: #121417;
  margin-bottom: 8px;
`,Ae=y.span`
  color: #3470ff;
`,jt=y.p`
  font-family: Manrope, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`,St=y.div`
  margin-bottom: 24px;
`,Ct=y.h4`
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`,ne=y.ul`
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
`,P=y.li`
  padding-right: 6px;
  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
`,_=y.p`
  font-family: Manrope, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  margin: 0;
`,Nt=y.div`
  margin-bottom: 24px;
`,Vt=y.h4`
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`,It=y.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px 4px;
  list-style: none;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
`,ve=y.li`
  border-radius: 35px;
  padding: 7px 14px;
  background: #f9f9f9;
  font-family: Manrope, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #363535;
`,ge=y.span`
  font-weight: 600;
  color: #3470ff;
`,Dt=y.a`
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
`,Ot=({src:e,make:t,model:r,year:n,price:a,rentalCompany:o,address:l,type:u,functionalities:m,id:w})=>{const j=`${a.slice(1)}${a.slice(0,1)}`,x=r.length<=5?r:null,b=Ie(),[S,f]=R.useState(!1),N=he(Je),V=he(Qe),[h,T,F]=l.split(","),U=G=>{const A=G.target.closest("li").dataset.id;let p=N.find(M=>M.id===Number(A));p||(p=V.find(M=>M.id===Number(A))),b(Ze(p))},W=G=>{const A=G.target.closest("li"),p=Number(A.dataset.id);if(A.classList.contains("favorite")){A.classList.remove("favorite"),we("Remove from your favorite"),f(!1),b(qe(p));return}const M=N.find(Z=>Z.id===p);A.classList.add("favorite"),we("Added to your favorite"),f(!0),b(He(M))};return R.useEffect(()=>{V.find(A=>A.id===w)&&f(!0)},[V,w]),i.jsxs(Xe,{"data-id":w,children:[i.jsx(et,{children:i.jsx(tt,{src:e,alt:r,loading:"lazy"})}),i.jsxs(rt,{children:[i.jsxs(nt,{children:[i.jsxs(at,{children:[t," ",i.jsx(Ae,{children:x}),", ",n]}),i.jsx(it,{children:j})]}),i.jsxs(lt,{children:[i.jsxs(ne,{children:[i.jsx(P,{children:i.jsxs(_,{children:[" ",T]})}),i.jsx(P,{children:i.jsxs(_,{children:[" ",F]})}),i.jsx(P,{children:i.jsx(_,{children:o})})]}),i.jsxs(ne,{children:[i.jsx(P,{children:i.jsx(_,{children:u})}),i.jsx(P,{children:i.jsxs(_,{children:[" ",t]})}),i.jsx(P,{children:i.jsxs(_,{children:[" ",w]})}),i.jsx(P,{children:i.jsx(_,{children:m[1]})})]})]}),i.jsx(ot,{onClick:U,children:"Learn more"})]}),i.jsx(st,{onClick:W,children:i.jsx(pe.Provider,{value:{size:"18px",color:""},children:S?i.jsx(pt,{style:{fill:"#3470ff",strokeWidth:"1px",stroke:"#3470ff"}}):i.jsx(ht,{style:{fill:"rgba(255, 255, 255, 0.8)"}})})})]})},At=y.ul`
  display: grid;
  max-width: calc(100vw - 256px);
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  grid-gap: 50px 29px;
  margin-bottom: 100px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`,cr=({adverts:e})=>i.jsx(At,{children:e.map(t=>i.jsx(Ot,{src:t.img,make:t.make,year:t.year,price:t.rentalPrice,id:t.id,model:t.model,address:t.address,functionalities:t.functionalities,type:t.type,rentalCompany:t.rentalCompany},t.id))}),Et=y.div`
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
`,kt=y.div`
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
`,Mt=y.button`
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
`;function Tt(e){return xe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"},child:[]}]})(e)}const ur=({children:e})=>{const t=Ie(),r=he(Ye),n=o=>{o.key==="Escape"&&t(de())},a=o=>{o.target===o.currentTarget&&t(de())};return R.useEffect(()=>(document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}),[]),R.useEffect(()=>(document.body.style.overflow="hidden",()=>document.body.style.overflow="unset"),[]),r?i.jsx(Et,{onClick:a,children:i.jsxs(kt,{children:[i.jsx(Mt,{onClick:()=>t(de()),children:i.jsx(Tt,{size:"24px"})}),e]})}):null};function Ee(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}var ae;(function(e){e.event="event",e.props="prop"})(ae||(ae={}));function Y(){}function Bt(e){var t,r=void 0;return function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return t&&n.length===t.length&&n.every(function(o,l){return o===t[l]})||(t=n,r=e.apply(void 0,n)),r}}function ie(e){return!!(e||"").match(/\d/)}function X(e){return e==null}function Ft(e){return typeof e=="number"&&isNaN(e)}function ke(e){return X(e)||Ft(e)||typeof e=="number"&&!isFinite(e)}function Me(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function Lt(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function Pt(e,t,r){var n=Lt(r),a=e.search(/[1-9]/);return a=a===-1?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(n,"$1"+t)}function _t(e){var t=R.useRef(e);t.current=e;var r=R.useRef(function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return t.current.apply(t,n)});return r.current}function be(e,t){t===void 0&&(t=!0);var r=e[0]==="-",n=r&&t;e=e.replace("-","");var a=e.split("."),o=a[0],l=a[1]||"";return{beforeDecimal:o,afterDecimal:l,hasNegation:r,addNegation:n}}function Rt(e){if(!e)return e;var t=e[0]==="-";t&&(e=e.substring(1,e.length));var r=e.split("."),n=r[0].replace(/^0+/,"")||"0",a=r[1]||"";return(t?"-":"")+n+(a?"."+a:"")}function Te(e,t,r){for(var n="",a=r?"0":"",o=0;o<=t-1;o++)n+=e[o]||a;return n}function Se(e,t){return Array(t+1).join(e)}function Be(e){var t=e+"",r=t[0]==="-"?"-":"";r&&(t=t.substring(1));var n=t.split(/[eE]/g),a=n[0],o=n[1];if(o=Number(o),!o)return r+a;a=a.replace(".","");var l=1+o,u=a.length;return l<0?a="0."+Se("0",Math.abs(l))+a:l>=u?a=a+Se("0",l-u):a=(a.substring(0,l)||"0")+"."+a.substring(l),r+a}function Ce(e,t,r){if(["","-"].indexOf(e)!==-1)return e;var n=(e.indexOf(".")!==-1||r)&&t,a=be(e),o=a.beforeDecimal,l=a.afterDecimal,u=a.hasNegation,m=parseFloat("0."+(l||"0")),w=l.length<=t?"0."+l:m.toFixed(t),j=w.split("."),x=o;o&&Number(j[0])&&(x=o.split("").reverse().reduce(function(N,V,h){return N.length>h?(Number(N[0])+Number(V)).toString()+N.substring(1,N.length):V+N},j[0]));var b=Te(j[1]||"",t,r),S=u?"-":"",f=n?".":"";return""+S+x+f+b}function J(e,t){if(e.value=e.value,e!==null){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}var Fe=Bt(function(e,t){for(var r=0,n=0,a=e.length,o=t.length;e[r]===t[r]&&r<a;)r++;for(;e[a-1-n]===t[o-1-n]&&o-n>r&&a-n>r;)n++;return{from:{start:r,end:a-n},to:{start:r,end:o-n}}});function zt(e,t,r){return Math.min(Math.max(e,t),r)}function me(e){return Math.max(e.selectionStart,e.selectionEnd)}function Wt(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function $t(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function Kt(e){var t=e.currentValue,r=e.formattedValue,n=e.currentValueIndex,a=e.formattedValueIndex;return t[n]===r[a]}function Gt(e,t,r,n,a,o,l){l===void 0&&(l=Kt);var u=a.findIndex(function(U){return U}),m=e.slice(0,u);!t&&!r.startsWith(m)&&(t=m,r=m+r,n=n+m.length);for(var w=r.length,j=e.length,x={},b=new Array(w),S=0;S<w;S++){b[S]=-1;for(var f=0,N=j;f<N;f++){var V=l({currentValue:r,lastValue:t,formattedValue:e,currentValueIndex:S,formattedValueIndex:f});if(V&&x[f]!==!0){b[S]=f,x[f]=!0;break}}}for(var h=n;h<w&&(b[h]===-1||!o(r[h]));)h++;var T=h===w||b[h]===-1?j:b[h];for(h=n-1;h>0&&b[h]===-1;)h--;var F=h===-1||b[h]===-1?0:b[h]+1;return F>T?T:n-F<T-n?F:T}function Ne(e,t,r,n){var a=e.length;if(t=zt(t,0,a),n==="left"){for(;t>=0&&!r[t];)t--;t===-1&&(t=r.indexOf(!0))}else{for(;t<=a&&!r[t];)t++;t>a&&(t=r.lastIndexOf(!0))}return t===-1&&(t=a),t}function Ut(e){for(var t=Array.from({length:e.length+1}).map(function(){return!0}),r=0,n=t.length;r<n;r++)t[r]=!!(ie(e[r])||ie(e[r-1]));return t}function Le(e,t,r,n,a,o){o===void 0&&(o=Y);var l=_t(function(f,N){var V,h;return ke(f)?(h="",V=""):typeof f=="number"||N?(h=typeof f=="number"?Be(f):f,V=n(h)):(h=a(f,void 0),V=n(h)),{formattedValue:V,numAsString:h}}),u=R.useState(function(){return l(X(e)?t:e,r)}),m=u[0],w=u[1],j=function(f,N){f.formattedValue!==m.formattedValue&&w({formattedValue:f.formattedValue,numAsString:f.value}),o(f,N)},x=e,b=r;X(e)&&(x=m.numAsString,b=!0);var S=l(x,b);return R.useMemo(function(){w(S)},[S.formattedValue]),[m,j]}function Zt(e){return e.replace(/[^0-9]/g,"")}function qt(e){return e}function Ht(e){var t=e.type;t===void 0&&(t="text");var r=e.displayType;r===void 0&&(r="input");var n=e.customInput,a=e.renderText,o=e.getInputRef,l=e.format;l===void 0&&(l=qt);var u=e.removeFormatting;u===void 0&&(u=Zt);var m=e.defaultValue,w=e.valueIsNumericString,j=e.onValueChange,x=e.isAllowed,b=e.onChange;b===void 0&&(b=Y);var S=e.onKeyDown;S===void 0&&(S=Y);var f=e.onMouseUp;f===void 0&&(f=Y);var N=e.onFocus;N===void 0&&(N=Y);var V=e.onBlur;V===void 0&&(V=Y);var h=e.value,T=e.getCaretBoundary;T===void 0&&(T=Ut);var F=e.isValidInputCharacter;F===void 0&&(F=ie);var U=e.isCharacterSame,W=Ee(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),G=Le(h,m,!!w,l,u,j),A=G[0],p=A.formattedValue,M=A.numAsString,Z=G[1],q=R.useRef({formattedValue:p,numAsString:M}),Q=function(s,c){q.current={formattedValue:s.formattedValue,numAsString:s.value},Z(s,c)},H=R.useState(!1),ee=H[0],te=H[1],d=R.useRef(null),v=R.useRef({setCaretTimeout:null,focusTimeout:null});R.useEffect(function(){return te(!0),function(){clearTimeout(v.current.setCaretTimeout),clearTimeout(v.current.focusTimeout)}},[]);var B=l,D=function(s,c){var g=parseFloat(c);return{formattedValue:s,value:c,floatValue:isNaN(g)?void 0:g}},O=function(s,c,g){s.selectionStart===0&&s.selectionEnd===s.value.length||(J(s,c),v.current.setCaretTimeout=setTimeout(function(){s.value===g&&s.selectionStart!==c&&J(s,c)},0))},E=function(s,c,g){return Ne(s,c,T(s),g)},z=function(s,c,g){var k=T(c),L=Gt(c,p,s,g,k,F,U);return L=Ne(c,L,k),L},oe=function(s){var c=s.formattedValue;c===void 0&&(c="");var g=s.input,k=s.source,L=s.event,C=s.numAsString,I;if(g){var $=s.inputValue||g.value,re=me(g);g.value=c,I=z($,c,re),I!==void 0&&O(g,I,c)}c!==p&&Q(D(c,C),{event:L,source:k})};R.useEffect(function(){var s=q.current,c=s.formattedValue,g=s.numAsString;p!==c&&(p!==M||c!==g)&&Q(D(p,M),{event:void 0,source:ae.props})},[p,M]);var fe=d.current?me(d.current):void 0,se=typeof window<"u"?R.useLayoutEffect:R.useEffect;se(function(){var s=d.current;if(p!==q.current.formattedValue&&s){var c=z(q.current.formattedValue,p,fe);s.value=p,O(s,c,p)}},[p]);var Pe=function(s,c,g){var k=Fe(p,s),L=Object.assign(Object.assign({},k),{lastValue:p}),C=u(s,L),I=B(C);if(C=u(I,void 0),x&&!x(D(I,C))){var $=c.target,re=me($),Ue=z(s,p,re);return $.value=p,O($,Ue,p),!1}return oe({formattedValue:I,numAsString:C,inputValue:s,event:c,source:g,input:c.target}),!0},_e=function(s){var c=s.target,g=c.value,k=Pe(g,s,ae.event);k&&b(s)},Re=function(s){var c=s.target,g=s.key,k=c.selectionStart,L=c.selectionEnd,C=c.value;C===void 0&&(C="");var I;if(g==="ArrowLeft"||g==="Backspace"?I=Math.max(k-1,0):g==="ArrowRight"?I=Math.min(k+1,C.length):g==="Delete"&&(I=k),I===void 0||k!==L){S(s);return}var $=I;if(g==="ArrowLeft"||g==="ArrowRight"){var re=g==="ArrowLeft"?"left":"right";$=E(C,I,re),$!==I&&s.preventDefault()}else g==="Delete"&&!F(C[I])?$=E(C,I,"right"):g==="Backspace"&&!F(C[I])&&($=E(C,I,"left"));$!==I&&O(c,$,C),s.isUnitTestRun&&O(c,$,C),S(s)},ze=function(s){var c=s.target,g=c.selectionStart,k=c.selectionEnd,L=c.value;if(L===void 0&&(L=""),g===k){var C=E(L,g);C!==g&&O(c,C,L)}f(s)},We=function(s){s.persist&&s.persist();var c=s.target,g=s.currentTarget;d.current=c,v.current.focusTimeout=setTimeout(function(){var k=c.selectionStart,L=c.selectionEnd,C=c.value;C===void 0&&(C="");var I=E(C,k);I!==k&&!(k===0&&L===C.length)&&O(c,I,C),N(Object.assign(Object.assign({},s),{currentTarget:g}))},0)},$e=function(s){d.current=null,clearTimeout(v.current.focusTimeout),clearTimeout(v.current.setCaretTimeout),V(s)},Ke=ee&&Wt()?"numeric":void 0,ye=Object.assign({inputMode:Ke},W,{type:t,value:p,onChange:_e,onKeyDown:Re,onMouseUp:ze,onFocus:We,onBlur:$e});if(r==="text")return a?K.createElement(K.Fragment,null,a(p,W)||null):K.createElement("span",Object.assign({},W,{ref:o}),p);if(n){var Ge=n;return K.createElement(Ge,Object.assign({},ye,{ref:o}))}return K.createElement("input",Object.assign({},ye,{ref:o}))}function Ve(e,t){var r=t.decimalScale,n=t.fixedDecimalScale,a=t.prefix;a===void 0&&(a="");var o=t.suffix;o===void 0&&(o="");var l=t.allowNegative,u=t.thousandsGroupStyle;if(u===void 0&&(u="thousand"),e===""||e==="-")return e;var m=ue(t),w=m.thousandSeparator,j=m.decimalSeparator,x=r!==0&&e.indexOf(".")!==-1||r&&n,b=be(e,l),S=b.beforeDecimal,f=b.afterDecimal,N=b.addNegation;return r!==void 0&&(f=Te(f,r,!!n)),w&&(S=Pt(S,w,u)),a&&(S=a+S),o&&(f=f+o),N&&(S="-"+S),e=S+(x&&j||"")+f,e}function ue(e){var t=e.decimalSeparator;t===void 0&&(t=".");var r=e.thousandSeparator,n=e.allowedDecimalSeparators;return r===!0&&(r=","),n||(n=[t,"."]),{decimalSeparator:t,thousandSeparator:r,allowedDecimalSeparators:n}}function Yt(e,t){e===void 0&&(e="");var r=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),a=r.test(e),o=n.test(e);return e=e.replace(/-/g,""),a&&!o&&t&&(e="-"+e),e}function Jt(e,t){return new RegExp("(^-)|[0-9]|"+Me(e),t?"g":void 0)}function Qt(e,t,r){return e===""?!0:!(t!=null&&t.match(/\d/))&&!(r!=null&&r.match(/\d/))&&typeof e=="string"&&!isNaN(Number(e))}function Xt(e,t,r){var n;t===void 0&&(t=$t(e));var a=r.allowNegative,o=r.prefix;o===void 0&&(o="");var l=r.suffix;l===void 0&&(l="");var u=r.decimalScale,m=t.from,w=t.to,j=w.start,x=w.end,b=ue(r),S=b.allowedDecimalSeparators,f=b.decimalSeparator,N=e[x]===f;if(ie(e)&&(e===o||e===l)&&t.lastValue==="")return e;if(x-j===1&&S.indexOf(e[j])!==-1){var V=u===0?"":f;e=e.substring(0,j)+V+e.substring(j+1,e.length)}var h=function(v,B,D){var O=!1,E=!1;o.startsWith("-")?O=!1:v.startsWith("--")?(O=!1,E=!0):l.startsWith("-")&&v.length===l.length?O=!1:v[0]==="-"&&(O=!0);var z=O?1:0;return E&&(z=2),z&&(v=v.substring(z),B-=z,D-=z),{value:v,start:B,end:D,hasNegation:O}},T=h(e,j,x),F=T.hasNegation;n=T,e=n.value,j=n.start,x=n.end;var U=h(t.lastValue,m.start,m.end),W=U.start,G=U.end,A=U.value,p=e.substring(j,x);e.length&&A.length&&(W>A.length-l.length||G<o.length)&&!(p&&l.startsWith(p))&&(e=A);var M=0;e.startsWith(o)?M+=o.length:j<o.length&&(M=j),e=e.substring(M),x-=M;var Z=e.length,q=e.length-l.length;e.endsWith(l)?Z=q:(x>q||x>e.length-l.length)&&(Z=x),e=e.substring(0,Z),e=Yt(F?"-"+e:e,a),e=(e.match(Jt(f,!0))||[]).join("");var Q=e.indexOf(f);e=e.replace(new RegExp(Me(f),"g"),function(v,B){return B===Q?".":""});var H=be(e,a),ee=H.beforeDecimal,te=H.afterDecimal,d=H.addNegation;return w.end-w.start<m.end-m.start&&ee===""&&N&&!parseFloat(te)&&(e=d?"-":""),e}function er(e,t){var r=t.prefix;r===void 0&&(r="");var n=t.suffix;n===void 0&&(n="");var a=Array.from({length:e.length+1}).map(function(){return!0}),o=e[0]==="-";a.fill(!1,0,r.length+(o?1:0));var l=e.length;return a.fill(!1,l-n.length+1,l+1),a}function tr(e){var t=ue(e),r=t.thousandSeparator,n=t.decimalSeparator,a=e.prefix;a===void 0&&(a="");var o=e.allowNegative;if(o===void 0&&(o=!0),r===n)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+r+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+n+` (default value for decimalSeparator is .)
     `);return a.startsWith("-")&&o&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+a+`
      allowNegative: `+o+`
    `),o=!1),Object.assign(Object.assign({},e),{allowNegative:o})}function rr(e){e=tr(e),e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var t=e.suffix,r=e.allowNegative,n=e.allowLeadingZeros,a=e.onKeyDown;a===void 0&&(a=Y);var o=e.onBlur;o===void 0&&(o=Y);var l=e.thousandSeparator,u=e.decimalScale,m=e.fixedDecimalScale,w=e.prefix;w===void 0&&(w="");var j=e.defaultValue,x=e.value,b=e.valueIsNumericString,S=e.onValueChange,f=Ee(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),N=ue(e),V=N.decimalSeparator,h=N.allowedDecimalSeparators,T=function(d){return Ve(d,e)},F=function(d,v){return Xt(d,v,e)},U=X(x)?j:x,W=b??Qt(U,w,t);X(x)?X(j)||(W=W||typeof j=="number"):W=W||typeof x=="number";var G=function(d){return ke(d)?d:(typeof d=="number"&&(d=Be(d)),W&&typeof u=="number"?Ce(d,u,!!m):d)},A=Le(G(x),G(j),!!W,T,F,S),p=A[0],M=p.numAsString,Z=p.formattedValue,q=A[1],Q=function(d){var v=d.target,B=d.key,D=v.selectionStart,O=v.selectionEnd,E=v.value;if(E===void 0&&(E=""),D!==O){a(d);return}B==="Backspace"&&E[0]==="-"&&D===w.length+1&&r&&J(v,1),u&&m&&(B==="Backspace"&&E[D-1]===V?(J(v,D-1),d.preventDefault()):B==="Delete"&&E[D]===V&&d.preventDefault()),h!=null&&h.includes(B)&&E[D]===V&&J(v,D+1);var z=l===!0?",":l;B==="Backspace"&&E[D-1]===z&&J(v,D-1),B==="Delete"&&E[D]===z&&J(v,D+1),a(d)},H=function(d){var v=M;if(v.match(/\d/g)||(v=""),n||(v=Rt(v)),m&&u&&(v=Ce(v,u,m)),v!==M){var B=Ve(v,e);q({formattedValue:B,value:v,floatValue:parseFloat(v)},{event:d,source:ae.event})}o(d)},ee=function(d){return d===V?!0:ie(d)},te=function(d){var v=d.currentValue,B=d.lastValue,D=d.formattedValue,O=d.currentValueIndex,E=d.formattedValueIndex,z=v[O],oe=D[E],fe=Fe(B,v),se=fe.to;return O>=se.start&&O<se.end&&h&&h.includes(z)&&oe===V?!0:z===oe};return Object.assign(Object.assign({},f),{value:Z,valueIsNumericString:!1,isValidInputCharacter:ee,isCharacterSame:te,onValueChange:q,format:T,removeFormatting:F,getCaretBoundary:function(d){return er(d,e)},onKeyDown:Q,onBlur:H})}function nr(e){var t=rr(e);return K.createElement(Ht,Object.assign({},t))}const fr=({data:e})=>{const t=e.rentalConditions.split(`
`),r=t.map(u=>{if(u.includes(":")){const m=u.slice(0,-2),w=u.slice(-2);return i.jsxs(i.Fragment,{children:[m,i.jsx(ge,{children:w})]})}return u}),[n,a,o]=e.address.split(","),l=e.mileage/1e3;return i.jsxs(i.Fragment,{children:[i.jsx(xt,{children:i.jsx(bt,{src:e.img,alt:e.model,loading:"lazy"})}),i.jsxs(yt,{children:[i.jsxs(wt,{children:[e.make," ",i.jsx(Ae,{children:e.model}),","," ",e.year]}),i.jsxs(ne,{children:[i.jsx(P,{children:i.jsx(_,{children:a})}),i.jsx(P,{children:i.jsx(_,{children:o})}),i.jsx(P,{children:i.jsxs(_,{children:["Id: ",e.id]})}),i.jsx(P,{children:i.jsxs(_,{children:["Year: ",e.year]})}),i.jsx(P,{children:i.jsxs(_,{children:["Type: ",e.type]})}),i.jsx(P,{children:i.jsxs(_,{children:["Fuel Consumption: ",e.fuelConsumption]})}),i.jsx(P,{children:i.jsxs(_,{children:["Engine Size: ",e.engineSize]})})]}),i.jsx(jt,{children:e.description})]}),i.jsxs(St,{children:[i.jsx(Ct,{children:"Accessories and functionalities:"}),i.jsx(ne,{children:e.accessories.map(u=>i.jsx(P,{children:i.jsx(_,{children:u})},u))}),i.jsx(ne,{children:e.functionalities.map(u=>i.jsx(P,{children:i.jsx(_,{children:u})},u))})]}),i.jsxs(Nt,{children:[i.jsx(Vt,{children:"Rental Conditions: "}),i.jsxs(It,{children:[t?r.map(u=>i.jsx(ve,{children:u},u)):null,i.jsxs(ve,{children:["Mileage:"," ",i.jsx(ge,{children:i.jsx(nr,{value:l,decimalSeparator:",",displayType:"text"})})]}),i.jsxs(ve,{children:["Price: ",i.jsx(ge,{children:e.rentalPrice})]})]})]}),i.jsx(Dt,{href:"tel:+380730000000",children:"Rental car"})]})},dr=e=>{e.length!==0&&e.forEach(t=>{const r=document.querySelector(`[data-id="${t.id}"]`);r&&r.classList.add("favorite")})},vr=y.section`
  padding-top: 93px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 93px;
  }
`;export{cr as A,ur as M,vr as S,ir as a,Je as b,Qe as c,sr as d,or as e,dr as f,fr as g,lr as s};