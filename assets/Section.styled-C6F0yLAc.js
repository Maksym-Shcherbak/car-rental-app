import{q as w,k as R,u as Ve,r as F,b as he,j as o,o as Ue,l as Ze,n as qe,c as He,p as fe}from"./index-CrxTv9N_.js";const Ye=e=>e.adverts.adverts,Je=e=>e.adverts.favoriteAdverts,nr=e=>e.adverts.isLoading,ar=e=>e.adverts.isLoadMore,ir=e=>e.adverts.totalAdverts,or=e=>e.adverts.limit,Qe=w.li`
  position: relative;
  border-radius: 14px;
`,Xe=w.div`
  border-radius: 14px;
  min-width: 274px;
  height: 268px;
  margin-bottom: 14px;
  overflow: hidden;
  pointer-events: none;
`,et=w.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`,tt=w.div`
  margin-botttom: 28px;
`,rt=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`,nt=w.h3`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`,at=w.h3`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`,it=w.button`
  border-radius: 12px;
  padding: 12px 99.5px;
  background: #3470ff;
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
  border: none;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background: #0b44cd;
  }
`,ot=w.button`
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
`;var Ie={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},pe=R.createContext&&R.createContext(Ie),st=["attr","size","title"];function lt(e,t){if(e==null)return{};var r=ct(e,t),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ct(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function se(){return se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},se.apply(this,arguments)}function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?we(Object(r),!0).forEach(function(n){ut(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ut(e,t,r){return t=ft(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ft(e){var t=dt(e,"string");return typeof t=="symbol"?t:String(t)}function dt(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function De(e){return e&&e.map((t,r)=>R.createElement(t.tag,le({key:r},t.attr),De(t.child)))}function xe(e){return t=>R.createElement(vt,se({attr:le({},e.attr)},t),De(e.child))}function vt(e){var t=r=>{var{attr:n,size:a,title:i}=e,l=lt(e,st),u=a||r.size||"1em",m;return r.className&&(m=r.className),e.className&&(m=(m?m+" ":"")+e.className),R.createElement("svg",se({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,l,{className:m,style:le(le({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&R.createElement("title",null,i),e.children)};return pe!==void 0?R.createElement(pe.Consumer,null,r=>t(r)):t(Ie)}function gt(e){return xe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"},child:[]}]})(e)}function mt(e){return xe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"},child:[]}]})(e)}const ht=w.div`
  border-radius: 14px;
  max-width: 461px;
  height: 248px;
  margin-bottom: 14px;
  overflow: hidden;
  pointer-events: none;
`,pt=w.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`,xt=w.div`
  margin-bottom: 24px;
`,bt=w.h3`
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: #121417;
  margin-bottom: 8px;
`,Oe=w.span`
  color: #3470ff;
`,yt=w.p`
  font-family: Manrope, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`,wt=w.div`
  margin-bottom: 24px;
`,St=w.h4`
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`,de=w.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px 4px;
  list-style: none;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
  margin-bottom: 4px;
`,G=w.li`
  padding-right: 6px;
  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
`,U=w.p`
  font-family: Manrope, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  margin: 0;
`,jt=w.div`
  margin-bottom: 24px;
`,Ct=w.h4`
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`,Nt=w.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px 6px;
  list-style: none;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
`,ve=w.li`
  border-radius: 35px;
  padding: 7px 14px;
  background: #f9f9f9;
  font-family: Manrope, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #363535;
`,ge=w.span`
  font-weight: 600;
  color: #3470ff;
`,Vt=w.a`
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
`,It=({src:e,make:t,model:r,year:n,price:a,id:i})=>{const l=`${a.slice(1)}${a.slice(0,1)}`,u=r.length<=5?r:null,m=Ve(),[j,b]=F.useState(!1),p=he(Ye),x=he(Je),S=C=>{const y=C.target.closest("li").dataset.id;let f=p.find(D=>D.id===Number(y));f||(f=x.find(D=>D.id===Number(y))),m(Ue(f))},d=C=>{const y=C.target.closest("li"),f=Number(y.dataset.id);if(y.classList.contains("favorite")){y.classList.remove("favorite"),b(!1),m(Ze(f));return}const D=p.find(T=>T.id===f);y.classList.add("favorite"),b(!0),m(qe(D))};return F.useEffect(()=>{x.find(y=>y.id===i)&&b(!0)},[x,i]),o.jsxs(Qe,{"data-id":i,children:[o.jsx(Xe,{children:o.jsx(et,{src:e})}),o.jsxs(tt,{children:[o.jsxs(rt,{children:[o.jsxs(nt,{children:[t," ",o.jsx(Oe,{children:u}),", ",n]}),o.jsx(at,{children:l})]}),o.jsx(it,{onClick:S,children:"Learn more"})]}),o.jsx(ot,{onClick:d,children:o.jsx(pe.Provider,{value:{size:"18px",color:""},children:j?o.jsx(mt,{style:{fill:"#3470ff",strokeWidth:"1px",stroke:"#3470ff"}}):o.jsx(gt,{style:{fill:"rgba(255, 255, 255, 0.8)"}})})})]})},Dt=w.ul`
  display: grid;
  max-width: calc(100vw - 256px);
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  grid-gap: 50px 29px;
  margin-bottom: 100px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`,sr=({adverts:e})=>o.jsx(Dt,{children:e.map(t=>o.jsx(It,{src:t.img,make:t.make,year:t.year,price:t.rentalPrice,id:t.id,model:t.model},t.id))}),Ot=w.div`
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
`,At=w.div`
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
`,Et=w.button`
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
`;function kt(e){return xe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"},child:[]}]})(e)}const lr=({children:e})=>{const t=Ve(),r=he(He),n=i=>{i.key==="Escape"&&t(fe())},a=i=>{i.target===i.currentTarget&&t(fe())};return F.useEffect(()=>(document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}),[]),F.useEffect(()=>(document.body.style.overflow="hidden",()=>document.body.style.overflow="unset"),[]),r?o.jsx(Ot,{onClick:a,children:o.jsxs(At,{children:[o.jsx(Et,{onClick:()=>t(fe()),children:o.jsx(kt,{size:"24px"})}),e]})}):null};function Ae(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}var ne;(function(e){e.event="event",e.props="prop"})(ne||(ne={}));function H(){}function Mt(e){var t,r=void 0;return function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return t&&n.length===t.length&&n.every(function(i,l){return i===t[l]})||(t=n,r=e.apply(void 0,n)),r}}function ae(e){return!!(e||"").match(/\d/)}function X(e){return e==null}function Tt(e){return typeof e=="number"&&isNaN(e)}function Ee(e){return X(e)||Tt(e)||typeof e=="number"&&!isFinite(e)}function ke(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function Bt(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function Ft(e,t,r){var n=Bt(r),a=e.search(/[1-9]/);return a=a===-1?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(n,"$1"+t)}function Lt(e){var t=F.useRef(e);t.current=e;var r=F.useRef(function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return t.current.apply(t,n)});return r.current}function be(e,t){t===void 0&&(t=!0);var r=e[0]==="-",n=r&&t;e=e.replace("-","");var a=e.split("."),i=a[0],l=a[1]||"";return{beforeDecimal:i,afterDecimal:l,hasNegation:r,addNegation:n}}function Pt(e){if(!e)return e;var t=e[0]==="-";t&&(e=e.substring(1,e.length));var r=e.split("."),n=r[0].replace(/^0+/,"")||"0",a=r[1]||"";return(t?"-":"")+n+(a?"."+a:"")}function Me(e,t,r){for(var n="",a=r?"0":"",i=0;i<=t-1;i++)n+=e[i]||a;return n}function Se(e,t){return Array(t+1).join(e)}function Te(e){var t=e+"",r=t[0]==="-"?"-":"";r&&(t=t.substring(1));var n=t.split(/[eE]/g),a=n[0],i=n[1];if(i=Number(i),!i)return r+a;a=a.replace(".","");var l=1+i,u=a.length;return l<0?a="0."+Se("0",Math.abs(l))+a:l>=u?a=a+Se("0",l-u):a=(a.substring(0,l)||"0")+"."+a.substring(l),r+a}function je(e,t,r){if(["","-"].indexOf(e)!==-1)return e;var n=(e.indexOf(".")!==-1||r)&&t,a=be(e),i=a.beforeDecimal,l=a.afterDecimal,u=a.hasNegation,m=parseFloat("0."+(l||"0")),j=l.length<=t?"0."+l:m.toFixed(t),b=j.split("."),p=i;i&&Number(b[0])&&(p=i.split("").reverse().reduce(function(C,y,f){return C.length>f?(Number(C[0])+Number(y)).toString()+C.substring(1,C.length):y+C},b[0]));var x=Me(b[1]||"",t,r),S=u?"-":"",d=n?".":"";return""+S+p+d+x}function J(e,t){if(e.value=e.value,e!==null){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}var Be=Mt(function(e,t){for(var r=0,n=0,a=e.length,i=t.length;e[r]===t[r]&&r<a;)r++;for(;e[a-1-n]===t[i-1-n]&&i-n>r&&a-n>r;)n++;return{from:{start:r,end:a-n},to:{start:r,end:i-n}}});function Rt(e,t,r){return Math.min(Math.max(e,t),r)}function me(e){return Math.max(e.selectionStart,e.selectionEnd)}function _t(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function zt(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function Wt(e){var t=e.currentValue,r=e.formattedValue,n=e.currentValueIndex,a=e.formattedValueIndex;return t[n]===r[a]}function $t(e,t,r,n,a,i,l){l===void 0&&(l=Wt);var u=a.findIndex(function($){return $}),m=e.slice(0,u);!t&&!r.startsWith(m)&&(t=m,r=m+r,n=n+m.length);for(var j=r.length,b=e.length,p={},x=new Array(j),S=0;S<j;S++){x[S]=-1;for(var d=0,C=b;d<C;d++){var y=l({currentValue:r,lastValue:t,formattedValue:e,currentValueIndex:S,formattedValueIndex:d});if(y&&p[d]!==!0){x[S]=d,p[d]=!0;break}}}for(var f=n;f<j&&(x[f]===-1||!i(r[f]));)f++;var D=f===j||x[f]===-1?b:x[f];for(f=n-1;f>0&&x[f]===-1;)f--;var T=f===-1||x[f]===-1?0:x[f]+1;return T>D?D:n-T<D-n?T:D}function Ce(e,t,r,n){var a=e.length;if(t=Rt(t,0,a),n==="left"){for(;t>=0&&!r[t];)t--;t===-1&&(t=r.indexOf(!0))}else{for(;t<=a&&!r[t];)t++;t>a&&(t=r.lastIndexOf(!0))}return t===-1&&(t=a),t}function Kt(e){for(var t=Array.from({length:e.length+1}).map(function(){return!0}),r=0,n=t.length;r<n;r++)t[r]=!!(ae(e[r])||ae(e[r-1]));return t}function Fe(e,t,r,n,a,i){i===void 0&&(i=H);var l=Lt(function(d,C){var y,f;return Ee(d)?(f="",y=""):typeof d=="number"||C?(f=typeof d=="number"?Te(d):d,y=n(f)):(f=a(d,void 0),y=n(f)),{formattedValue:y,numAsString:f}}),u=F.useState(function(){return l(X(e)?t:e,r)}),m=u[0],j=u[1],b=function(d,C){d.formattedValue!==m.formattedValue&&j({formattedValue:d.formattedValue,numAsString:d.value}),i(d,C)},p=e,x=r;X(e)&&(p=m.numAsString,x=!0);var S=l(p,x);return F.useMemo(function(){j(S)},[S.formattedValue]),[m,b]}function Gt(e){return e.replace(/[^0-9]/g,"")}function Ut(e){return e}function Zt(e){var t=e.type;t===void 0&&(t="text");var r=e.displayType;r===void 0&&(r="input");var n=e.customInput,a=e.renderText,i=e.getInputRef,l=e.format;l===void 0&&(l=Ut);var u=e.removeFormatting;u===void 0&&(u=Gt);var m=e.defaultValue,j=e.valueIsNumericString,b=e.onValueChange,p=e.isAllowed,x=e.onChange;x===void 0&&(x=H);var S=e.onKeyDown;S===void 0&&(S=H);var d=e.onMouseUp;d===void 0&&(d=H);var C=e.onFocus;C===void 0&&(C=H);var y=e.onBlur;y===void 0&&(y=H);var f=e.value,D=e.getCaretBoundary;D===void 0&&(D=Kt);var T=e.isValidInputCharacter;T===void 0&&(T=ae);var $=e.isCharacterSame,_=Ae(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),Y=Fe(f,m,!!j,l,u,b),K=Y[0],N=K.formattedValue,z=K.numAsString,Z=Y[1],W=F.useRef({formattedValue:N,numAsString:z}),Q=function(s,c){W.current={formattedValue:s.formattedValue,numAsString:s.value},Z(s,c)},q=F.useState(!1),ee=q[0],te=q[1],v=F.useRef(null),g=F.useRef({setCaretTimeout:null,focusTimeout:null});F.useEffect(function(){return te(!0),function(){clearTimeout(g.current.setCaretTimeout),clearTimeout(g.current.focusTimeout)}},[]);var M=l,O=function(s,c){var h=parseFloat(c);return{formattedValue:s,value:c,floatValue:isNaN(h)?void 0:h}},A=function(s,c,h){s.selectionStart===0&&s.selectionEnd===s.value.length||(J(s,c),g.current.setCaretTimeout=setTimeout(function(){s.value===h&&s.selectionStart!==c&&J(s,c)},0))},E=function(s,c,h){return Ce(s,c,D(s),h)},L=function(s,c,h){var k=D(c),B=$t(c,N,s,h,k,T,$);return B=Ce(c,B,k),B},ie=function(s){var c=s.formattedValue;c===void 0&&(c="");var h=s.input,k=s.source,B=s.event,V=s.numAsString,I;if(h){var P=s.inputValue||h.value,re=me(h);h.value=c,I=L(P,c,re),I!==void 0&&A(h,I,c)}c!==N&&Q(O(c,V),{event:B,source:k})};F.useEffect(function(){var s=W.current,c=s.formattedValue,h=s.numAsString;N!==c&&(N!==z||c!==h)&&Q(O(N,z),{event:void 0,source:ne.props})},[N,z]);var ue=v.current?me(v.current):void 0,oe=typeof window<"u"?F.useLayoutEffect:F.useEffect;oe(function(){var s=v.current;if(N!==W.current.formattedValue&&s){var c=L(W.current.formattedValue,N,ue);s.value=N,A(s,c,N)}},[N]);var Le=function(s,c,h){var k=Be(N,s),B=Object.assign(Object.assign({},k),{lastValue:N}),V=u(s,B),I=M(V);if(V=u(I,void 0),p&&!p(O(I,V))){var P=c.target,re=me(P),Ge=L(s,N,re);return P.value=N,A(P,Ge,N),!1}return ie({formattedValue:I,numAsString:V,inputValue:s,event:c,source:h,input:c.target}),!0},Pe=function(s){var c=s.target,h=c.value,k=Le(h,s,ne.event);k&&x(s)},Re=function(s){var c=s.target,h=s.key,k=c.selectionStart,B=c.selectionEnd,V=c.value;V===void 0&&(V="");var I;if(h==="ArrowLeft"||h==="Backspace"?I=Math.max(k-1,0):h==="ArrowRight"?I=Math.min(k+1,V.length):h==="Delete"&&(I=k),I===void 0||k!==B){S(s);return}var P=I;if(h==="ArrowLeft"||h==="ArrowRight"){var re=h==="ArrowLeft"?"left":"right";P=E(V,I,re),P!==I&&s.preventDefault()}else h==="Delete"&&!T(V[I])?P=E(V,I,"right"):h==="Backspace"&&!T(V[I])&&(P=E(V,I,"left"));P!==I&&A(c,P,V),s.isUnitTestRun&&A(c,P,V),S(s)},_e=function(s){var c=s.target,h=c.selectionStart,k=c.selectionEnd,B=c.value;if(B===void 0&&(B=""),h===k){var V=E(B,h);V!==h&&A(c,V,B)}d(s)},ze=function(s){s.persist&&s.persist();var c=s.target,h=s.currentTarget;v.current=c,g.current.focusTimeout=setTimeout(function(){var k=c.selectionStart,B=c.selectionEnd,V=c.value;V===void 0&&(V="");var I=E(V,k);I!==k&&!(k===0&&B===V.length)&&A(c,I,V),C(Object.assign(Object.assign({},s),{currentTarget:h}))},0)},We=function(s){v.current=null,clearTimeout(g.current.focusTimeout),clearTimeout(g.current.setCaretTimeout),y(s)},$e=ee&&_t()?"numeric":void 0,ye=Object.assign({inputMode:$e},_,{type:t,value:N,onChange:Pe,onKeyDown:Re,onMouseUp:_e,onFocus:ze,onBlur:We});if(r==="text")return a?R.createElement(R.Fragment,null,a(N,_)||null):R.createElement("span",Object.assign({},_,{ref:i}),N);if(n){var Ke=n;return R.createElement(Ke,Object.assign({},ye,{ref:i}))}return R.createElement("input",Object.assign({},ye,{ref:i}))}function Ne(e,t){var r=t.decimalScale,n=t.fixedDecimalScale,a=t.prefix;a===void 0&&(a="");var i=t.suffix;i===void 0&&(i="");var l=t.allowNegative,u=t.thousandsGroupStyle;if(u===void 0&&(u="thousand"),e===""||e==="-")return e;var m=ce(t),j=m.thousandSeparator,b=m.decimalSeparator,p=r!==0&&e.indexOf(".")!==-1||r&&n,x=be(e,l),S=x.beforeDecimal,d=x.afterDecimal,C=x.addNegation;return r!==void 0&&(d=Me(d,r,!!n)),j&&(S=Ft(S,j,u)),a&&(S=a+S),i&&(d=d+i),C&&(S="-"+S),e=S+(p&&b||"")+d,e}function ce(e){var t=e.decimalSeparator;t===void 0&&(t=".");var r=e.thousandSeparator,n=e.allowedDecimalSeparators;return r===!0&&(r=","),n||(n=[t,"."]),{decimalSeparator:t,thousandSeparator:r,allowedDecimalSeparators:n}}function qt(e,t){e===void 0&&(e="");var r=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),a=r.test(e),i=n.test(e);return e=e.replace(/-/g,""),a&&!i&&t&&(e="-"+e),e}function Ht(e,t){return new RegExp("(^-)|[0-9]|"+ke(e),t?"g":void 0)}function Yt(e,t,r){return e===""?!0:!(t!=null&&t.match(/\d/))&&!(r!=null&&r.match(/\d/))&&typeof e=="string"&&!isNaN(Number(e))}function Jt(e,t,r){var n;t===void 0&&(t=zt(e));var a=r.allowNegative,i=r.prefix;i===void 0&&(i="");var l=r.suffix;l===void 0&&(l="");var u=r.decimalScale,m=t.from,j=t.to,b=j.start,p=j.end,x=ce(r),S=x.allowedDecimalSeparators,d=x.decimalSeparator,C=e[p]===d;if(ae(e)&&(e===i||e===l)&&t.lastValue==="")return e;if(p-b===1&&S.indexOf(e[b])!==-1){var y=u===0?"":d;e=e.substring(0,b)+y+e.substring(b+1,e.length)}var f=function(g,M,O){var A=!1,E=!1;i.startsWith("-")?A=!1:g.startsWith("--")?(A=!1,E=!0):l.startsWith("-")&&g.length===l.length?A=!1:g[0]==="-"&&(A=!0);var L=A?1:0;return E&&(L=2),L&&(g=g.substring(L),M-=L,O-=L),{value:g,start:M,end:O,hasNegation:A}},D=f(e,b,p),T=D.hasNegation;n=D,e=n.value,b=n.start,p=n.end;var $=f(t.lastValue,m.start,m.end),_=$.start,Y=$.end,K=$.value,N=e.substring(b,p);e.length&&K.length&&(_>K.length-l.length||Y<i.length)&&!(N&&l.startsWith(N))&&(e=K);var z=0;e.startsWith(i)?z+=i.length:b<i.length&&(z=b),e=e.substring(z),p-=z;var Z=e.length,W=e.length-l.length;e.endsWith(l)?Z=W:(p>W||p>e.length-l.length)&&(Z=p),e=e.substring(0,Z),e=qt(T?"-"+e:e,a),e=(e.match(Ht(d,!0))||[]).join("");var Q=e.indexOf(d);e=e.replace(new RegExp(ke(d),"g"),function(g,M){return M===Q?".":""});var q=be(e,a),ee=q.beforeDecimal,te=q.afterDecimal,v=q.addNegation;return j.end-j.start<m.end-m.start&&ee===""&&C&&!parseFloat(te)&&(e=v?"-":""),e}function Qt(e,t){var r=t.prefix;r===void 0&&(r="");var n=t.suffix;n===void 0&&(n="");var a=Array.from({length:e.length+1}).map(function(){return!0}),i=e[0]==="-";a.fill(!1,0,r.length+(i?1:0));var l=e.length;return a.fill(!1,l-n.length+1,l+1),a}function Xt(e){var t=ce(e),r=t.thousandSeparator,n=t.decimalSeparator,a=e.prefix;a===void 0&&(a="");var i=e.allowNegative;if(i===void 0&&(i=!0),r===n)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+r+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+n+` (default value for decimalSeparator is .)
     `);return a.startsWith("-")&&i&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+a+`
      allowNegative: `+i+`
    `),i=!1),Object.assign(Object.assign({},e),{allowNegative:i})}function er(e){e=Xt(e),e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var t=e.suffix,r=e.allowNegative,n=e.allowLeadingZeros,a=e.onKeyDown;a===void 0&&(a=H);var i=e.onBlur;i===void 0&&(i=H);var l=e.thousandSeparator,u=e.decimalScale,m=e.fixedDecimalScale,j=e.prefix;j===void 0&&(j="");var b=e.defaultValue,p=e.value,x=e.valueIsNumericString,S=e.onValueChange,d=Ae(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),C=ce(e),y=C.decimalSeparator,f=C.allowedDecimalSeparators,D=function(v){return Ne(v,e)},T=function(v,g){return Jt(v,g,e)},$=X(p)?b:p,_=x??Yt($,j,t);X(p)?X(b)||(_=_||typeof b=="number"):_=_||typeof p=="number";var Y=function(v){return Ee(v)?v:(typeof v=="number"&&(v=Te(v)),_&&typeof u=="number"?je(v,u,!!m):v)},K=Fe(Y(p),Y(b),!!_,D,T,S),N=K[0],z=N.numAsString,Z=N.formattedValue,W=K[1],Q=function(v){var g=v.target,M=v.key,O=g.selectionStart,A=g.selectionEnd,E=g.value;if(E===void 0&&(E=""),O!==A){a(v);return}M==="Backspace"&&E[0]==="-"&&O===j.length+1&&r&&J(g,1),u&&m&&(M==="Backspace"&&E[O-1]===y?(J(g,O-1),v.preventDefault()):M==="Delete"&&E[O]===y&&v.preventDefault()),f!=null&&f.includes(M)&&E[O]===y&&J(g,O+1);var L=l===!0?",":l;M==="Backspace"&&E[O-1]===L&&J(g,O-1),M==="Delete"&&E[O]===L&&J(g,O+1),a(v)},q=function(v){var g=z;if(g.match(/\d/g)||(g=""),n||(g=Pt(g)),m&&u&&(g=je(g,u,m)),g!==z){var M=Ne(g,e);W({formattedValue:M,value:g,floatValue:parseFloat(g)},{event:v,source:ne.event})}i(v)},ee=function(v){return v===y?!0:ae(v)},te=function(v){var g=v.currentValue,M=v.lastValue,O=v.formattedValue,A=v.currentValueIndex,E=v.formattedValueIndex,L=g[A],ie=O[E],ue=Be(M,g),oe=ue.to;return A>=oe.start&&A<oe.end&&f&&f.includes(L)&&ie===y?!0:L===ie};return Object.assign(Object.assign({},d),{value:Z,valueIsNumericString:!1,isValidInputCharacter:ee,isCharacterSame:te,onValueChange:W,format:D,removeFormatting:T,getCaretBoundary:function(v){return Qt(v,e)},onKeyDown:Q,onBlur:q})}function tr(e){var t=er(e);return R.createElement(Zt,Object.assign({},t))}const cr=({data:e})=>{const t=e.rentalConditions.split(`
`),r=t.map(u=>{if(u.includes(":")){const m=u.slice(0,-2),j=u.slice(-2);return o.jsxs(o.Fragment,{children:[m,o.jsx(ge,{children:j})]})}return u}),[n,a,i]=e.address.split(","),l=e.mileage/1e3;return o.jsxs(o.Fragment,{children:[o.jsx(ht,{children:o.jsx(pt,{src:e.img})}),o.jsxs(xt,{children:[o.jsxs(bt,{children:[e.make," ",o.jsx(Oe,{children:e.model}),","," ",e.year]}),o.jsxs(de,{children:[o.jsx(G,{children:o.jsx(U,{children:a})}),o.jsx(G,{children:o.jsx(U,{children:i})}),o.jsx(G,{children:o.jsxs(U,{children:["Id: ",e.id]})}),o.jsx(G,{children:o.jsxs(U,{children:["Year: ",e.year]})}),o.jsx(G,{children:o.jsxs(U,{children:["Type: ",e.type]})}),o.jsx(G,{children:o.jsxs(U,{children:["Fuel Consumption: ",e.fuelConsumption]})}),o.jsx(G,{children:o.jsxs(U,{children:["Engine Size: ",e.engineSize]})})]}),o.jsx(yt,{children:e.description})]}),o.jsxs(wt,{children:[o.jsx(St,{children:"Accessories and functionalities:"}),o.jsx(de,{children:e.accessories.map(u=>o.jsx(G,{children:o.jsx(U,{children:u})},u))}),o.jsx(de,{children:e.functionalities.map(u=>o.jsx(G,{children:o.jsx(U,{children:u})},u))})]}),o.jsxs(jt,{children:[o.jsx(Ct,{children:"Rental Conditions: "}),o.jsxs(Nt,{children:[t?r.map(u=>o.jsx(ve,{children:u},u)):null,o.jsxs(ve,{children:["Mileage:"," ",o.jsx(ge,{children:o.jsx(tr,{value:l,decimalSeparator:",",displayType:"text"})})]}),o.jsxs(ve,{children:["Price: ",o.jsx(ge,{children:e.rentalPrice})]})]})]}),o.jsx(Vt,{href:"tel:+380730000000",children:"Rental car"})]})},ur=e=>{e.length!==0&&e.forEach(t=>{const r=document.querySelector(`[data-id="${t.id}"]`);r&&r.classList.add("favorite")})},fr=w.section`
  padding-top: 93px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 93px;
  }
`;export{sr as A,lr as M,fr as S,nr as a,Ye as b,Je as c,ir as d,ar as e,ur as f,cr as g,or as s};
