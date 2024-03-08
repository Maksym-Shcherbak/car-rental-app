import{q as s,a as b,j as a,o as j,R as c,u as w,s as O,r as m,c as u}from"./index-DsYffhKY.js";const P=s.li`
  border-radius: 14px;
`,E=s.div`
  border-radius: 14px;
  max-width: 274px;
  height: 268px;
  margin-bottom: 14px;
  overflow: hidden;
  pointer-events: none;
`,k=s.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`,C=s.div`
  margin-botttom: 28px;
`,z=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`,I=s.h3`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`,M=s.h3`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`,S=s.button`
  border-radius: 12px;
  padding: 12px 99.5px;
  background: #3470ff;
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
  border: none;
`,H=({src:e,make:t,year:r,price:n})=>{const o=b();return a.jsxs(P,{children:[a.jsx(E,{children:a.jsx(k,{src:e})}),a.jsxs(C,{children:[a.jsxs(z,{children:[a.jsxs(I,{children:[t,", ",r]}),a.jsx(M,{children:n})]}),a.jsx(S,{onClick:()=>o(j()),children:"Learn more"})]})]})},N=s.div`
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
`,_=s.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f8f9ff;
  width: 335px;
  max-height: 90vh;
  padding: 40px 20px;
  border-radius: 20px;
  overflow: hidden;
`,A=s.button`
  position: absolute;
  top: 18px;
  right: 18px;
  background-color: transparent;
  padding: 0;
  border: none;
  color: #f3f3f3;
  transition: transform 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);

  &:hover,
  &:focus {
    transform: scale(1.25);
  }
`;var v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},h=c.createContext&&c.createContext(v),B=["attr","size","title"];function D(e,t){if(e==null)return{};var r=W(e,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function W(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(n){L(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function L(e,t,r){return t=T(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e){var t=K(e,"string");return typeof t=="symbol"?t:String(t)}function K(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function x(e){return e&&e.map((t,r)=>c.createElement(t.tag,f({key:r},t.attr),x(t.child)))}function R(e){return t=>c.createElement(q,d({attr:f({},e.attr)},t),x(e.child))}function q(e){var t=r=>{var{attr:n,size:o,title:i}=e,y=D(e,B),p=o||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),c.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,y,{className:l,style:f(f({color:e.color||r.color},r.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),i&&c.createElement("title",null,i),e.children)};return h!==void 0?c.createElement(h.Consumer,null,r=>t(r)):t(v)}function G(e){return R({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"},child:[]}]})(e)}const J=({children:e})=>{const t=b(),r=w(O),n=i=>{i.key==="Escape"&&t(u())},o=i=>{i.target===i.currentTarget&&t(u())};return m.useEffect(()=>(document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}),[]),m.useEffect(()=>(document.body.style.overflow="hidden",()=>document.body.style.overflow="unset"),[]),r?a.jsx(N,{onClick:o,children:a.jsxs(_,{children:[a.jsx(A,{onClick:()=>t(u()),children:a.jsx(G,{})}),e]})}):null};export{H as A,J as M};
