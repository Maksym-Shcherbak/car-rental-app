import{q as o,L as t,j as e}from"./index-DX3yAmo-.js";const n=o.div`
  max-width: 800px;
  padding: 21px 10px;
  text-align: left;
`,r=o.h1`
  margin-bottom: 20px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 56px;
  line-height: 1.2;
  color: #595959;
`,i=o.p`
  max-width: 600px;
  margin-bottom: 60px;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.2;
  color: #737373;
`,s=o(t)`
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
`,c=()=>e.jsxs(n,{children:[e.jsx(r,{children:"We Have Prepared a Car For Your Trip "}),e.jsx(i,{children:"We have many types of cars that are ready for you to travel anywhere and anytime."}),e.jsx(s,{to:"/catalog",children:"Get your car"})]});o.div`
  max-width: 790px;
  margin-left: auto;
`;o.div``;const p=o.section`
  padding-top: 120px;
  padding-bottom: 175px;
  background-image: ${a=>`url(${a.backgroundImageCar})`},
    ${a=>`url(${a.backgroundImageMap})`};
  background-repeat: no-repeat;
  background-position: bottom right, top right;
`,d="/car-rental-app/assets/map-CV0Fwig1.png",g="/car-rental-app/assets/car_home-CnFTMQka.png",f=()=>e.jsxs(p,{backgroundImageMap:d,backgroundImageCar:g,children:[e.jsx(c,{}),";"]});export{f as default};
