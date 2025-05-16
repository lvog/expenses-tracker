import{b as n,u as b,j as s,d as j,m as I}from"./vendor.DLooJJyz.js";import{u as v,e as m,h as y,c}from"./index.Cp5gBIWw.js";import{L as E}from"./Logo.COuJlG4E.js";import{I as h,M as u,B as S}from"./Message.Do2003Jm.js";const L=j(I.div)`
  max-width: 460px;
  width: calc(100% - 30px);
  padding: 30px;
  margin: 0;
  box-shadow: 0 0 15px 5px ${c.rgbaBlue};
  align-self: center;

  .heading-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  h2,
  .logo {
    margin-bottom: 0;
  }

  h2 {
    padding-right: 15px;
  }

  .message {
    margin-bottom: 15px;
  }

  .note {
    display: block;
    margin-bottom: 30px;
    opacity: 0.5;
  }

  .btn {
    width: 100%;
  }
`,D=()=>{const[i,p]=n.useState(""),[l,g]=n.useState(""),[r,d]=n.useState({}),{setIsLoggedIn:w}=v(),{t:e}=b();n.useEffect(()=>{localStorage.getItem("user-password")||localStorage.setItem("user-password",m.password)},[]);const x=o=>{d(t=>{const a={...t};return delete a[o],a})},f=o=>{o.preventDefault();const t=localStorage.getItem("user-password")||m.password,a={};if(i?i!==m.email&&(a.email=e("messages.incorrectEmail")):a.email=e("messages.emptyEmail"),l?l!==t&&(a.password=e("messages.incorrectPassword")):a.password=e("messages.emptyPassword"),Object.keys(a).length>0){d(a);return}w(!0),p(""),g(""),d({})};return s.jsxs(L,{className:"data-block",variants:y,initial:"hidden",animate:"visible",exit:"exit",transition:"transition",children:[s.jsxs("div",{className:"heading-block",children:[s.jsx("h2",{children:e("logIn.title")}),s.jsx(E,{})]}),s.jsxs("form",{onSubmit:f,children:[s.jsxs("div",{className:"form-control",children:[s.jsx(h,{name:"email",type:"email",placeholder:e("logIn.email"),value:i,handleChange:(o,t)=>{p(t),x(o)},error:!!r.email}),r.email&&s.jsx(u,{color:c.red,children:r.email})]}),s.jsxs("div",{className:"form-control",children:[s.jsx(h,{name:"password",type:"password",placeholder:e("logIn.password"),value:l,handleChange:(o,t)=>{g(t),x(o)},error:!!r.password}),r.password&&s.jsx(u,{color:c.red,children:r.password})]}),s.jsx("span",{className:"note",children:e("logIn.note")}),s.jsx(S,{type:"submit",children:e("logIn.button")})]})]},"login")};export{D as default};
