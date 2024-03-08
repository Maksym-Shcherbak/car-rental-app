import{q as n,u as a,j as e,r as o,a as c,s as l,g as m}from"./index-DsYffhKY.js";import{A as p,M as g}from"./Modal-Dxv_4qPh.js";const d=t=>t.adverts.adverts,x=t=>t.adverts.page,u=t=>t.adverts.limit,f=n.ul`
  display: grid;
  max-width: calc(100vw - 256px);
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  grid-gap: 50px 29px;
  margin-top: 274px;
  margin-bottom: 30px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`,j=()=>{const t=a(d);return console.log(t),e.jsx(f,{children:t.map(s=>e.jsx(p,{src:s.img,make:s.make,year:s.year,price:s.rentalPrice},s.id))})},A=()=>{o.useState(0);const t=c(),s=a(x),i=a(u),r=a(l);return console.log(r),o.useEffect(()=>{t(m(s,i))},[t]),e.jsxs(e.Fragment,{children:[e.jsx(j,{}),r&&e.jsx(g,{})]})};export{A as default};
