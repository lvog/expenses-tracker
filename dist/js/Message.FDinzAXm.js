import{j as l,d,P as e}from"./vendor.CU9AQYWS.js";import{x as a,f as c,c as o,a as b,g as m,d as $}from"./index.DhZzwU_M.js";const f=d.button`
  min-width: 138px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${a.family};
  font-size: ${a.size};
  line-height: ${a.lineHeight};
  font-weight: ${c.medium};
  padding: 15px 18px;
  text-align: center;
  color: ${o.white};
  background: ${o.blue};
  border: 1px solid ${o.blue};
  border-radius: ${b.base};
  transition: ${m(["color","background","opacity","border-color"])};

  &.btn-outline {
    color: ${o.blue};
    background: transparent;
    border: 1px solid ${o.blue};

    &:hover {
      color: ${o.white};
      background: ${o.blue};
      border-color: ${o.blue};
    }
  }

  &:hover {
    background: ${o.darkBlue};
    border-color: ${o.darkBlue};
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  i {
    font-size: ${$.lg};
    margin-right: 10px;
  }
`,h=({className:r,children:t,disabled:i,onClick:n,type:s})=>l.jsx(f,{className:`btn ${r||""}`,type:s||"button",disabled:i??!1,onClick:n,children:t});h.propTypes={className:e.string,children:e.node,disabled:e.bool,onClick:e.func,type:e.string};const x=d.input`
  margin-bottom: 15px;
  border-color: ${o.gray};

  &.error {
    border-color: ${o.red};
  }
`,y=({id:r,type:t,placeholder:i,name:n,handleChange:s,error:p,value:g})=>l.jsx(x,{id:r,className:p?"error":void 0,type:t||"text",placeholder:i,name:n,onChange:u=>s(n,u.target.value),value:g,autoComplete:"off"});y.propTypes={id:e.string,type:e.string,placeholder:e.string,name:e.string,handleChange:e.func,error:e.bool,value:e.oneOfType([e.string,e.number])};const k=d.span`
  display: block;
  font-weight: ${c.medium};
  color: ${({$color:r})=>r||"inherit"};

  i {
    display: inline-block;
    vertical-align: middle;
    font-size: 120px;
    margin-bottom: 30px;
    opacity: 0.4;
  }
`,v=({children:r,color:t})=>l.jsx(k,{className:"message",$color:t,children:r});v.propTypes={children:e.node,color:e.string};export{h as B,y as I,v as M};
