import{j as e,d,P as s,u as j,b as y,m as N}from"./vendor.DLooJJyz.js";import{L}from"./Logo.COuJlG4E.js";import{b as o,c as t,g as p,u as T,m as z,r as C,f as c,a as m,d as r,e as E,h as H}from"./index.Cp5gBIWw.js";const I=d.button`
  display: block;
  width: 30px;
  height: 28px;
  background: transparent;
  border: none;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  @media (min-width: ${o.tablet}) {
    display: none;
  }

  &:before,
  &:after,
  span {
    height: 2px;
    position: absolute;
    top: 14px;
    left: 0;
    right: 0;
    background: ${t.blue};
    transition: ${p(["all"])};
  }

  &:before,
  &:after {
    content: "";
    top: 6px;
  }

  &:after {
    top: 22px;
  }

  .nav-active & {
    &:after,
    &:before {
      top: 14px;
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }

    span {
      opacity: 0;
    }
  }
`,u=({onClick:i})=>e.jsx(I,{onClick:i,children:e.jsx("span",{})});u.propTypes={onClick:s.func.isRequired};const R=d.ul`
  ${C()}
  font-weight: ${c.medium};

  a {
    display: flex;
    align-items: center;
    color: ${t.black};
    padding: 10px 15px;
    border-radius: ${m.base};
    overflow: hidden;
    transition: ${p(["color","background"])};

    .dark & {
      color: ${t.white};
    }

    &:hover,
    &.active {
      color: ${t.blue};
      background: ${t.lightBlue};

      .dark & {
        color: ${t.white};
        background: ${t.blue};
      }
    }
  }

  i {
    width: 24px;
    text-align: center;
    font-size: 24px;
    margin-right: 15px;

    &.icon-settings {
      font-size: ${r.xll};
    }
  }
`,x=({onClick:i})=>{const{activeTab:n,setActiveTab:l,setIsLoggedIn:b}=T(),{t:g}=j(),f=a=>{a.preventDefault(),b(!1),l("info"),document.body.classList.remove("nav-active"),window.history.replaceState(null,"",window.location.pathname+window.location.search)},v=(a,$,k)=>e.jsx("li",{children:e.jsxs("a",{href:`#${a!=="logout"?a:""}`,className:n===a?"active":"",onClick:a!=="logout"?i:w=>f(w),children:[e.jsx("i",{className:k}),g($)]})},`navLink-${a}`);return e.jsx("nav",{id:"nav",children:e.jsx(R,{children:z.map(a=>v(a.id,a.name,a.icon))})})};x.propTypes={onClick:s.func.isRequired};const D=d.div`
  display: flex;
  align-items: center;
  margin: 0 0 30px 15px;

  @media (min-width: ${o.tablet}) {
    margin: 0 0 15px;
  }

  .image-block {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${r.base};
    font-weight: ${c.semibold};
    color: ${t.blue};
    border-radius: ${m.rounded};
    border: 2px solid ${t.blue};
    overflow: hidden;

    .dark & {
      color: ${t.black};
      background: ${t.blue};
    }
  }

  .info-block {
    width: calc(100% - 36px);
    padding-left: 15px;
  }

  .name,
  .email {
    display: block;
  }

  .name {
    font-size: ${r.md};
  }

  .email {
    font-size: ${r.sm};
    font-weight: ${c.medium};
  }
`,q=i=>i.split(" ").map(n=>n.slice(0,1)).join(""),h=()=>{const{userName:i,email:n}=E;return e.jsxs(D,{className:"user-block",children:[e.jsx("span",{className:"image-block",children:q(i)}),e.jsxs("div",{className:"info-block",children:[e.jsx("strong",{className:"name",children:i}),e.jsx("span",{className:"email",children:n})]})]})};h.propTypes={name:s.string,email:s.string,img:s.string};const A=d(N.header)`
  padding: 15px 0;
  position: relative;
  background: ${t.white};
  z-index: 2;

  @media (min-width: ${o.tablet}) {
    display: flex;
    width: 282px;
    padding: 30px 0;
  }

  .dark & {
    background: ${t.blue800};
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: ${o.tablet}) {
      flex-direction: column;
    }
  }

  .drop {
    transition: ${p(["right"])};

    @media (max-width: 767px) {
      height: calc(100vh - 54px);
      width: 250px;
      padding: 30px 15px;
      position: absolute;
      top: 100%;
      right: -250px;
      bottom: 0;
      background: ${t.white};
    }

    @media (min-width: ${o.tablet}) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      width: 100%;
    }

    .dark & {
      @media (max-width: 767px) {
        background: ${t.blue800};
      }
    }

    .nav-active & {
      @media (max-width: 767px) {
        right: 0;
      }
    }

    .user-block {
      @media (min-width: ${o.tablet}) {
        order: 2;
      }
    }
  }
`,S=()=>{const i=()=>{document.body.classList.toggle("nav-active")};return y.useEffect(()=>{const n=l=>{document.body.classList.contains("nav-active")&&l.target===document.body&&document.body.classList.remove("nav-active")};return document.body.addEventListener("click",n),()=>{document.body.removeEventListener("click",n)}},[]),e.jsx(A,{variants:H,initial:"hidden",animate:"visible",exit:"exit",transition:"transition",children:e.jsxs("div",{className:"container",children:[e.jsx(L,{}),e.jsx(u,{className:"nav-opener",onClick:i}),e.jsxs("div",{className:"drop",children:[e.jsx(h,{}),e.jsx(x,{onClick:i})]})]})},"header")};export{S as default};
