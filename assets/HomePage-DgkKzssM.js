import{q as e,L as n,j as o,C as t}from"./index-BxvCDGsT.js";const r=e.div`
  max-width: 800px;
  padding: 21px 10px;
  text-align: left;
`,i=e.h1`
  margin-bottom: 20px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 56px;
  line-height: 1.2;
  color: #595959;
`,s=e.p`
  max-width: 600px;
  margin-bottom: 60px;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.2;
  color: #737373;
`,c=e(n)`
  border-radius: 12px;
  padding: 16px 50px;
  background: #3470ff;
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
  text-decoration: none;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background: #0b44cd;
  }
`,p=()=>o.jsxs(r,{children:[o.jsx(i,{children:"We Have Prepared a Car For Your Trip "}),o.jsx(s,{children:"We have many types of cars that are ready for you to travel anywhere and anytime."}),o.jsx(c,{to:"/catalog",children:"Get your car"})]});e.div`
  max-width: 790px;
  margin-left: auto;
`;e.div``;const d=e.section`
  padding-top: 120px;
  padding-bottom: 175px;
  background-image: ${a=>`url(${a.backgroundImageCar})`},
    ${a=>`url(${a.backgroundImageMap})`};
  background-repeat: no-repeat;
  background-position: bottom right, top right;
`,g="/car-rental-app/assets/map-CV0Fwig1.png",m="/car-rental-app/assets/car_home-CnFTMQka.png",l=()=>o.jsx(t,{children:o.jsxs(d,{backgroundImageMap:g,backgroundImageCar:m,children:[o.jsx(p,{}),";"]})});export{l as default};
