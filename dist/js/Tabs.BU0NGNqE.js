import{u as N,j as e,T as Ce,d as j,P as l,b as m,e as K,t as oe,g as ce,h as q,k as O,l as Ge,n as ie,D as Re,S as Z,A as ee,m as A,o as Ee,p as Fe,C as Le,R as Me}from"./vendor.DLooJJyz.js";import{u as P,i as We,d as E,r as V,f as D,c as s,v as Q,j as qe,k as Oe,a as S,g as C,l as le,n as de,h as X,o as ze,b as k,p as Be,q as J,s as He,t as se,w as Ie,e as Ye}from"./index.1bsbLMg5.js";import{B as M,I as H,M as B}from"./Message.Dp8ynjLm.js";const Ae=j.div`
  font-size: ${E.md};

  h2,
  .description-block {
    margin-bottom: 30px;
  }

  .description-block {
    font-size: ${E.lg};
  }

  .contacts-list {
    ${V}

    font-weight: ${D.semibold};

    li {
      margin-bottom: 15px;
      padding-left: 30px;
      position: relative;
    }

    i {
      font-size: ${E.xl};
      position: absolute;
      top: -2px;
      left: 0;

      &.icon-linkedin {
        top: -3px;
      }
    }

    a {
      color: ${s.black};

      .dark & {
        color: ${s.white};
      }

      &:hover {
        color: ${s.blue};
      }
    }
  }
`,ue=({id:t})=>{const{activeTab:n}=P(),{t:r}=N(),a=r("info.description",{returnObjects:!0}),i=r("info.infoList",{returnObjects:!0});return e.jsx(Ae,{className:`tab ${t===n?"active":"tab-hidden"}`,children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:r("info.title")}),e.jsx("div",{className:"description-block",children:a.map((o,c)=>e.jsx("p",{children:e.jsx(Ce,{i18nKey:`info.description.${c}`,components:[e.jsx("strong",{},"0")]})},c))}),e.jsx("h3",{children:r("info.title2")}),e.jsx("ul",{children:i.map((o,c)=>e.jsx("li",{children:o},c))}),e.jsx("h3",{children:r("info.title3")}),e.jsx("p",{children:r("info.paragraph")}),e.jsx("ul",{className:"contacts-list",children:We.map(o=>e.jsxs("li",{children:[e.jsx("i",{className:o.icon}),e.jsx("a",{href:o.link,children:o.text})]},o.id))})]})})};ue.propTypes={id:l.string.isRequired};const pe=({id:t,period:n,data:r})=>{const{t:a,i18n:i}=N(),o=c=>{if(c.preventDefault(),!r.length)return;const h=[a("csv.note"),a("csv.date"),a("csv.category"),a("csv.description"),a("csv.sum")],d=r.map(g=>{const v=g.date instanceof Date?g.date.toLocaleDateString(i.language):new Date(g.date).toLocaleDateString(i.language);return[g.note,v,a(`category.${g.category}`),g.description?a(g.description):"",g.value]}),b=[[`# ${a(`menu.${t}`)} - ${a(n)}`],h,...d].map(g=>g.map(v=>`"${v}"`).join(",")).join(`
`),u=new Blob([b],{type:"text/csv;charset=utf-8;"}),x=URL.createObjectURL(u),p=document.createElement("a");p.href=x,p.setAttribute("download",`${a(`menu.${t}`).toLowerCase()}_${a(n).toLowerCase().replace(/\s+/g,"_")}.csv`),document.body.appendChild(p),p.click(),document.body.removeChild(p)};return e.jsxs(M,{className:"btn-outline",onClick:o,children:[e.jsx("i",{className:"icon-download"}),a("buttons.export")]})};pe.propTypes={id:l.string,period:l.oneOfType([l.string,l.instanceOf(Date)]),data:l.array};const Ve=t=>{const{handleAddEntry:n,setReset:r,editItem:a,handleChangeEntry:i,setEditItem:o,activeTab:c}=P(),{t:h}=N(),[d,f]=m.useState({id:(a==null?void 0:a.id)||"",date:(a==null?void 0:a.date)||null,category:(a==null?void 0:a.category)||"",value:+(a==null?void 0:a.value)||"",description:(a==null?void 0:a.description)||"",note:(a==null?void 0:a.note)||""}),[b,u]=m.useState({});m.useEffect(()=>{f(a?{id:a.id,date:new Date(a.date),category:a.category,value:+a.value,description:a.description?h(a.description):"",note:a.note}:{id:"",date:null,category:"",value:"",description:"",note:""})},[a]);const x=()=>{const w={};return d.date||(w.date=!0),d.category||(w.category=!0),(!d.value||+d.value<=0)&&(w.value=!0),u(w),Object.keys(w).length===0},p=()=>{f({date:null,category:"",description:"",value:""}),u({}),r(!0)};return{errors:b,handleChange:(w,y)=>{y&&typeof y=="object"&&"value"in y?(f(T=>({...T,[w]:y.value})),w="category"):f(T=>({...T,[w]:y})),u(T=>{const $={...T};return y===""||y===null||y===void 0||w==="value"&&+y<=0?$[w]=!0:delete $[w],$})},handleSave:w=>{if(w.preventDefault(),!x())return;const y={...d,value:+d.value,id:(a==null?void 0:a.id)||Q(),note:c};a?i(y):n(y),o(null),p(),t(w)},formData:d}};function z(t,n){if(t.one!==void 0&&n===1)return t.one;const r=n%10,a=n%100;return r===1&&a!==11?t.singularNominative.replace("{{count}}",String(n)):r>=2&&r<=4&&(a<10||a>20)?t.singularGenitive.replace("{{count}}",String(n)):t.pluralGenitive.replace("{{count}}",String(n))}function _(t){return(n,r)=>r&&r.addSuffix?r.comparison&&r.comparison>0?t.future?z(t.future,n):"за "+z(t.regular,n):t.past?z(t.past,n):z(t.regular,n)+" тому":z(t.regular,n)}const Xe=(t,n)=>n&&n.addSuffix?n.comparison&&n.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини",Ke={lessThanXSeconds:_({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:_({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:Xe,lessThanXMinutes:_({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:_({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:_({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:_({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:_({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} днi",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:_({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижнів"}}),xWeeks:_({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижні",pluralGenitive:"{{count}} тижнів"}}),aboutXMonths:_({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяці",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:_({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяці",pluralGenitive:"{{count}} місяців"}}),aboutXYears:_({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:_({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:_({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:_({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})},Ue=(t,n,r)=>(r=r||{},Ke[t](n,r)),Qe={full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},Je={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},Ze={full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},et={date:K({formats:Qe,defaultWidth:"full"}),time:K({formats:Je,defaultWidth:"full"}),dateTime:K({formats:Ze,defaultWidth:"full"})},te=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function tt(t){const n=te[t];switch(t){case 0:case 3:case 5:case 6:return"'у минулу "+n+" о' p";case 1:case 2:case 4:return"'у минулий "+n+" о' p"}}function me(t){return"'у "+te[t]+" о' p"}function at(t){const n=te[t];switch(t){case 0:case 3:case 5:case 6:return"'у наступну "+n+" о' p";case 1:case 2:case 4:return"'у наступний "+n+" о' p"}}const nt=(t,n,r)=>{const a=oe(t),i=a.getDay();return ce(a,n,r)?me(i):tt(i)},rt=(t,n,r)=>{const a=oe(t),i=a.getDay();return ce(a,n,r)?me(i):at(i)},it={lastWeek:nt,yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:rt,other:"P"},st=(t,n,r,a)=>{const i=it[t];return typeof i=="function"?i(n,r,a):i},ot={narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},ct={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},lt={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},dt={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},ut={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},pt={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},mt={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},gt=(t,n)=>{const r=String(n==null?void 0:n.unit),a=Number(t);let i;return r==="date"?a===3||a===23?i="-є":i="-е":r==="minute"||r==="second"||r==="hour"?i="-а":i="-й",a+i},ht={ordinalNumber:gt,era:q({values:ot,defaultWidth:"wide"}),quarter:q({values:ct,defaultWidth:"wide",argumentCallback:t=>t-1}),month:q({values:lt,defaultWidth:"wide",formattingValues:dt,defaultFormattingWidth:"wide"}),day:q({values:ut,defaultWidth:"wide"}),dayPeriod:q({values:pt,defaultWidth:"any",formattingValues:mt,defaultFormattingWidth:"wide"})},ft=/^(\d+)(-?(е|й|є|а|я))?/i,xt=/\d+/i,bt={narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},vt={any:[/^д/i,/^н/i]},wt={narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},yt={any:[/1/i,/2/i,/3/i,/4/i]},kt={narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i},$t={narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},jt={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},Nt={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},_t={narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},Pt={any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},Dt={ordinalNumber:Ge({matchPattern:ft,parsePattern:xt,valueCallback:t=>parseInt(t,10)}),era:O({matchPatterns:bt,defaultMatchWidth:"wide",parsePatterns:vt,defaultParseWidth:"any"}),quarter:O({matchPatterns:wt,defaultMatchWidth:"wide",parsePatterns:yt,defaultParseWidth:"any",valueCallback:t=>t+1}),month:O({matchPatterns:kt,defaultMatchWidth:"wide",parsePatterns:$t,defaultParseWidth:"any"}),day:O({matchPatterns:jt,defaultMatchWidth:"wide",parsePatterns:Nt,defaultParseWidth:"any"}),dayPeriod:O({matchPatterns:_t,defaultMatchWidth:"wide",parsePatterns:Pt,defaultParseWidth:"any"})},St={code:"uk",formatDistance:Ue,formatLong:et,formatRelative:st,localize:ht,match:Dt,options:{weekStartsOn:1,firstWeekContainsDate:1}},Tt=j.div`
  margin-bottom: 15px;

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker {
    font-family: inherit;
    font-weight: ${D.semibold};
    padding: 15px;
    border: 0;
    border-radius: ${S.base};
    box-shadow: 0 0 10px 0 ${s.rgbaBlue};

    .dark & {
      color: ${s.white};
      background: ${s.blue700};
    }
  }

  .react-datepicker__input-container {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .react-datepicker__view-calendar-icon {
    input {
      padding: 10px 50px 10px 15px;

      &.error {
        border-color: ${s.red};

        .dark & {
          border-color: ${s.red};
        }
      }

      &:read-only {
        pointer-events: none;
      }

      &:disabled {
        opacity: 0.5;
        pointer-events: none;
      }
    }
  }

  .react-datepicker__header {
    padding: 0 0 10px;
    background: inherit;
    color: ${s.darkBlue};
    border-bottom: 0;
    border-top-left-radius: ${S.base};

    .dark & {
      color: ${s.blue};
    }
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-top-right-radius: ${S.base};
  }

  .react-datepicker__navigation {
    top: 10px;
  }

  .react-datepicker__navigation--next {
    right: 30px;
  }

  .react-datepicker__navigation--previous {
    left: 30px;
  }

  .react-datepicker__day-name,
  .react-datepicker__current-month,
  .react-datepicker__month-text {
    text-transform: capitalize;
  }

  .react-datepicker__current-month,
  .react-datepicker__day-name {
    color: inherit;
    margin-bottom: 10px;
  }

  .react-datepicker__navigation *::before {
    transition: ${C(["border-color"])};
  }

  .react-datepicker__month {
    margin: 0;
  }

  .react-datepicker__day-name,
  .react-datepicker__day {
    width: 40px;
  }

  .react-datepicker__day {
    line-height: 40px;
    transition: ${C(["color","background","border-radius"])};

    .dark & {
      color: ${s.white};

      &.react-datepicker__day--disabled {
        color: #${s.darkGray};
        opacity: 0.5;
      }
    }
  }

  .react-datepicker__day--weekend {
    color: ${s.red};

    &.react-datepicker__day--disabled {
      color: #${s.darkGray};
    }

    .dark & {
      color: ${s.red};

      &.react-datepicker__day--selected {
        color: ${s.white};
      }

      &.react-datepicker__day--disabled {
        color: #${s.darkGray};
        opacity: 0.5;
      }
    }
  }

  .react-datepicker__day--outside-month {
    color: #${s.darkGray};

    .dark & {
      color: #${s.darkGray};
      opacity: 0.5;
    }
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__day--selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__year-text--selected {
    color: ${s.white};
    background: ${s.blue};
  }

  .react-datepicker__day:not([aria-disabled="true"]):hover,
  .react-datepicker__month-text:not([aria-disabled="true"]):hover,
  .react-datepicker__year-text:not([aria-disabled="true"]):hover {
    color: ${s.white};
    background: ${s.sky};
  }

  .react-datepicker__day--keyboard-selected:not([aria-disabled="true"]):hover,
  .react-datepicker__day--selected:not([aria-disabled="true"]):hover,
  .react-datepicker__month-text--keyboard-selected:not(
      [aria-disabled="true"]
    ):hover,
  .react-datepicker__year-text--selected:not([aria-disabled="true"]):hover {
    background: ${s.darkBlue};
  }

  .react-datepicker__month-text,
  .react-datepicker__year-text {
    padding: 10px 15px;
    transition: ${C(["color","background","border-radius"])};
  }

  .react-datepicker__year-text--selected.react-datepicker__year-text--disabled {
    background: transparent;
  }

  .react-datepicker__year-text--disabled {
    color: #${s.darkGray};
    pointer-events: none;

    .dark & {
      opacity: 0.5;
    }
  }

  .react-datepicker__month-text--disabled {
    .dark & {
      opacity: 0.5;
    }
  }

  .react-datepicker__year-wrapper {
    justify-content: center;
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__input-container {
    .react-datepicker__calendar-icon {
      padding-right: 15px;
    }
  }

  .react-datepicker__calendar-icon {
    font-weight: ${D.semibold};

    .dark & {
      color: ${s.blue};
    }
  }
`,ae=({handleChange:t,name:n,error:r,setFilterDate:a,view:i,value:o,disabled:c})=>{const{i18n:h,t:d}=N(),b={en:ie,uk:St}[h.language]||ie,[u,x]=m.useState(null),[p,g]=m.useState(d("dateFormat.day")),{reset:v}=P(),w=m.useRef(i),y=typeof t=="function"&&n;m.useEffect(()=>{g(d("dateFormat.day"))},[h.language]),m.useEffect(()=>{if(!i||y)return;const $=i==="month"?d("dateFormat.month"):i==="year"?"yyyy":d("dateFormat.day");g($),x(new Date)},[i,y,h.language,d]),m.useEffect(()=>{if(v){if(w.current!==i){x(new Date);return}w.current=i,x(null)}},[v,i]);const T=$=>{x($),y?t(n,$):a&&a($)};return e.jsx(Tt,{className:"datepicker-holder",children:e.jsx(Re,{className:r?"error":void 0,placeholderText:d("fields.datepicker"),showIcon:!0,selected:o||u,onChange:$=>T($),icon:"icon-calendar",dateFormat:p,showMonthYearPicker:i==="month"&&!y,showYearPicker:i==="year"&&!y,closeOnScroll:!0,minDate:Oe,maxDate:qe,readOnly:!y&&!i,locale:b,disabled:c,onKeyDown:$=>$.preventDefault()})})};ae.propTypes={handleChange:l.func,name:l.string.isRequired,error:l.bool,disabled:l.bool,setFilterDate:l.func,view:l.string,value:l.instanceOf(Date)};const Ct=j(Z)`
  &.error {
    border-color: ${s.red};

    .dark & {
      border-color: ${s.red};
    }
  }

  .custom-select__placeholder {
    font-weight: ${D.normal};
  }

  i {
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${E.md};
    padding: 2px;
    border-radius: ${S.sm};

    .dark & {
      color: ${s.black};
    }
  }
`,Gt=t=>e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("i",{className:`icon-${t.value}`,style:{marginRight:"10px"}}),e.jsx("span",{className:"value","data-value":t.value,children:t.label})]}),ge=({handleChange:t,name:n,value:r,error:a})=>{const{activeTab:i}=P(),{t:o}=N(),h=(i==="incomes"?le:de).map(d=>({value:d.category,label:o(`category.${d.category}`)}));return e.jsx(Ct,{classNamePrefix:"custom-select",className:`custom-select ${a?"error":""}`,placeholder:o("fields.select"),value:r,onChange:d=>t(n,{value:d.value,label:d.label}),options:h,getOptionLabel:Gt,isSearchable:!1})};ge.propTypes={handleChange:l.func.isRequired,name:l.string.isRequired,error:l.bool,value:l.string};const Rt=j.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: ${C(["opacity","visibility"])};

  .popup-active & {
    opacity: 1;
    visibility: visible;
  }

  .popup {
    max-width: 390px;
    width: calc(100% - 30px);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 15px;
    background: ${s.white};
    border-radius: ${S.base};

    .dark & {
      background: ${s.blue800};
    }

    .btn {
      width: 100%;
      margin: 0;
    }
  }

  .close-btn {
    width: 12px;
    height: 12px;
    position: absolute;
    top: 20px;
    right: 15px;
    padding: 0;
    background: transparent;
    border: none;

    &:hover {
      &:before,
      &:after {
        background: ${s.red};

        .dark & {
          background: ${s.red};
          opacity: 1;
        }
      }
    }

    &:before,
    &:after {
      transition: ${C(["background","opacity"])};
      content: "";
      width: 10px;
      height: 2px;
      position: absolute;
      top: 50%;
      left: 50%;
      background: ${s.black};

      .dark & {
        background: ${s.white};
        opacity: 0.2;
      }
    }

    &:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  .react-datepicker-wrapper {
    display: block;
  }

  .react-datepicker__input-container {
    input {
      border-color: ${s.gray};

      .dark & {
        border-color: ${s.blue700};
      }

      &:hover,
      &:focus {
        border-color: ${s.blue};
      }
    }
  }

  .form-control {
    position: relative;

    input {
      padding-right: 50px;
    }
  }

  .currency {
    font-weight: ${D.semibold};
    position: absolute;
    top: 17px;
    right: 15px;

    .dark & {
      color: ${s.blue};
    }
  }
`,he=({closePopup:t})=>{const{errors:n,handleChange:r,handleSave:a,formData:i}=Ve(t),{editItem:o,activeTab:c,currency:h}=P(),d=m.useRef(null),{t:f}=N(),b=c==="balance"?"":f(c==="incomes"?"incomes.popupAddTitle":"expenses.popupAddTitle"),u=f(o&&c==="incomes"?"incomes.popupEditTitle":"expenses.popupEditTitle");m.useEffect(()=>{const p=g=>{g.key==="Escape"&&t(g)};return document.addEventListener("keydown",p),()=>{document.removeEventListener("keydown",p)}},[t]);const x=p=>{p.target===d.current&&t(p)};return e.jsx(Rt,{className:"popup-holder",ref:d,onClick:x,children:e.jsxs("div",{className:"popup",children:[e.jsxs("div",{className:"popup-header",children:[e.jsx("h3",{children:o?u:b}),e.jsx("button",{className:"close-btn",onClick:t})]}),e.jsx("div",{className:"popup-content",children:e.jsxs("form",{className:"popup-form",action:"#",onSubmit:a,children:[e.jsx(ae,{handleChange:r,name:"date",error:!!n.date,value:i.date}),e.jsx(ge,{handleChange:r,name:"category",error:!!n.category,value:i.category?{value:i.category,label:f(`category.${i.category}`)}:null}),e.jsxs("div",{className:"form-control",children:[e.jsx(H,{id:`number-${Q()}`,type:"number",placeholder:f("fields.sum"),name:"value",handleChange:r,error:!!n.value,value:i.value}),e.jsx("span",{className:"currency",children:h})]}),e.jsx(H,{id:`description-${Q()}`,type:"text",placeholder:f("fields.description"),name:"description",handleChange:r,value:i.description}),e.jsx(M,{type:"submit",children:f("buttons.save")})]})})]})})};he.propTypes={closePopup:l.func.isRequired};const Et=j.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  h2 {
    margin: 5px 0;
    padding-right: 30px;
  }

  .btn-holder {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 -5px;
  }

  .btn {
    min-width: 160px;
    margin: 5px;
  }
`,fe=({text:t,id:n,period:r,view:a,data:i})=>{const{entries:o,editItem:c,setEditItem:h,activeTab:d}=P(),[f,b]=m.useState(!1),[u,x]=m.useState(!1),{t:p}=N(),g=d==="balance"?"":p(d==="incomes"?"incomes.button":"expenses.button"),v=$=>{$.preventDefault(),b(!0)},w=$=>{$.preventDefault(),b(!1),h(null)};m.useEffect(()=>{f||c?document.body.classList.add("popup-active"):document.body.classList.remove("popup-active")},[f,c]),m.useEffect(()=>{var $;x((($=o[n])==null?void 0:$.length)>0)},[o,n]);const y=u?"active-btn":"hide-btn",T=d!=="balance";return e.jsxs(Et,{children:[e.jsx("h2",{children:t}),e.jsx(ee,{mode:"wait",children:e.jsxs(A.div,{className:"btn-holder",variants:X,initial:"hidden",animate:"visible",exit:"exit",transition:"transition",children:[u&&e.jsx(pe,{id:n,period:r,view:a,data:i}),T&&e.jsxs(e.Fragment,{children:[e.jsx(M,{onClick:v,children:g}),e.jsx(he,{closePopup:w,text:t})]})]},y)})]})};fe.propTypes={text:l.string.isRequired,id:l.string.isRequired,period:l.oneOfType([l.string,l.instanceOf(Date)]),view:l.string.isRequired,data:l.array.isRequired};const Ft=j.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 2px;
  margin-bottom: 15px;
  background: ${s.white};
  border-radius: ${S.base};

  @media (min-width: ${k.desktop}) {
    min-width: 300px;
    margin-right: 10px;
  }

  .dark & {
    background: ${s.blue700};
  }
`,Lt=j.input`
  display: inline-block;
  vertical-align: middle;
  width: calc(33.33% - 4px);
  height: 46px;
  padding: 15px 20px;
  font-family: inherit;
  font-weight: ${D.semibold};
  text-align: center;
  margin: 0 2px;
  border: 0;
  border-radius: ${S.base};
  transition: ${C(["color","background"])};

  &:hover,
  &.active {
    color: ${s.blue};
    background: ${s.lightBlue};

    .dark & {
      color: ${s.white};
      background: ${s.blue};
    }
  }
`,xe=({view:t,setView:n,setFilterDate:r})=>{const{t:a}=N(),i=o=>{n(o),r(new Date)};return e.jsx(Ft,{className:"filters-block",children:ze.map(o=>{const{id:c,name:h}=o;return e.jsx(Lt,{className:t===c?"active":"",type:"button",value:a(h),onClick:()=>i(c)},`filter-${c}`)})})};xe.propTypes={setView:l.func,view:l.string,setFilterDate:l.func};const Mt=j.form`
  margin-bottom: 5px;

  @media (min-width: ${k.desktop}) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 0 -5px 10px;
  }

  @media (min-width: ${k.widescreen}) {
    margin-bottom: 20px;
  }

  .filters-block,
  .datepicker-holder {
    @media (min-width: ${k.desktop}) {
      width: calc(50% - 10px);
      margin: 0 5px 10px;
    }

    @media (min-width: ${k.widescreen}) {
      width: auto;
    }
  }

  .datepicker-holder {
    @media (min-width: ${k.widescreen}) {
      max-width: 198px;
    }
  }

  .btn-holder {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;

    @media (min-width: ${k.desktop}) {
      margin: 0;
    }

    @media (min-width: ${k.widescreen}) {
      width: auto;
    }
  }

  .btn {
    margin: 0 5px 10px;

    &.btn-outline {
      min-width: 172px;
    }
  }
`,be=({id:t,view:n,setView:r,filterDate:a,setFilterDate:i,handleFilter:o,resetFilters:c})=>{const{entries:h}=P(),[d,f]=m.useState(!1),{t:b}=N();m.useEffect(()=>{var p;f(((p=h[t])==null?void 0:p.length)>0)},[h,t]);const u=!!(a&&n),x=d?"results":"no-results";return e.jsx(ee,{mode:"wait",children:e.jsx(A.div,{variants:X,initial:"hidden",animate:"visible",exit:"exit",transition:"transition",children:d?e.jsxs(Mt,{onSubmit:o,children:[e.jsx(xe,{view:n,setView:r,setFilterDate:i}),e.jsx(ae,{date:a,setFilterDate:i,view:n,disabled:!u}),e.jsxs("div",{className:"btn-holder",children:[e.jsx(M,{type:"submit",disabled:!u,children:b("buttons.filter")}),e.jsx(M,{className:`btn-outline ${u?"":"hide"}`,type:"reset",onClick:c,children:b("buttons.clear")})]})]}):""},x)})};be.propTypes={id:l.string.isRequired,view:l.string.isRequired,setView:l.func.isRequired,filterDate:l.instanceOf(Date),setFilterDate:l.func.isRequired,handleFilter:l.func,resetFilters:l.func};const Wt=j.div`
  display: flex;
  align-items: center;

  i {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 42px;
    font-weight: ${D.medium};
    color: ${s.blue};
    background: ${s.lightBlue};
    border-radius: ${S.base};

    .dark & {
      background: ${s.blue700};
    }
  }

  .info-block {
    width: calc(100% - 80px);
    padding-left: 15px;
  }

  .title {
    display: block;
    margin-bottom: 2px;
  }

  .sum {
    font-size: 40px;
    font-weight: ${D.semibold};
    overflow-wrap: anywhere;
  }
`,U=t=>t.reduce((n,r)=>n+r.value,0),ve=({id:t,text:n,data:r})=>{const{activeTab:a,currency:i}=P(),o=m.useMemo(()=>{if(a!=="balance")return U(r);{const c=r.filter(d=>d.note==="incomes"),h=r.filter(d=>d.note==="expenses");return U(c)-U(h)}},[r,a]);return e.jsxs(Wt,{className:"data-block",children:[e.jsx("i",{className:`icon-${t.toLowerCase()}`}),e.jsxs("div",{className:"info-block",children:[e.jsx("strong",{className:"title",children:n}),e.jsxs("span",{className:"sum",style:{color:a!=="balance"?void 0:o<0?`${s.lightRed}`:`${s.green}`},children:[i," ",o.toFixed(0)]})]})]})};ve.propTypes={id:l.string.isRequired,text:l.string.isRequired,data:l.array.isRequired};const qt=j.li`
  margin: 0 0 15px;
  position: relative;

  @media (min-width: ${k.phone}) {
    width: 50%;
    padding: 0 15px;
  }

  @media (min-width: ${k.desktop}) {
    width: 100%;
  }

  @media (min-width: ${k.widescreen}) {
    width: 50%;
  }

  &:before {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    top: 4px;
    left: 0;
    background: ${({$color:t})=>t||`${s.black}`};
    border-radius: ${S.rounded};

    @media (min-width: ${k.phone}) {
      left: 15px;
    }
  }

  .info-block {
    padding: 0 0 0 25px;
  }

  .sum,
  .category {
    display: block;
  }

  .sum {
    font-weight: ${D.bold};
  }
`,we=({category:t,value:n,color:r})=>{const{currency:a}=P();return e.jsx(qt,{$color:r,children:e.jsxs("div",{className:"info-block",children:[e.jsxs("span",{className:"sum",children:[a," ",n.toFixed(0)]}),e.jsx("span",{className:"category",children:t})]})})};we.propTypes={category:l.string,value:l.number,color:l.string};const Ot=j.ul`
  ${V()}
  margin: 0 0 50px;

  @media (min-width: ${k.phone}) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px 50px;
  }
`,ye=({data:t})=>{const n=t,{t:r}=N();return e.jsx(Ot,{children:n.map((a,i)=>e.jsx(we,{category:r(`category.${a.category}`),value:a.value,color:a.color},`charItem-${i}`))})};ye.propTypes={data:l.array};const zt=j.div`
  @media (min-width: ${k.desktop}) {
    margin: 0;
  }
`,Bt=j(Me)`
  * {
    &:focus {
      outline: none;
    }
  }
`,Ht=(t,n)=>{const r=n.every(a=>a.category==="incomes"||a.category==="expenses");return t.reduce((a,i)=>{const o=r?i.note:i.category,c=n.find(d=>d.category===o),h=a.find(d=>d.category===o);return h?h.value+=i.value:a.push({category:o,categoryText:(c==null?void 0:c.categoryText)||"",value:i.value,color:(c==null?void 0:c.color)||"#000000"}),a},[])},ke=({data:t})=>{const{activeTab:n}=P(),r=m.useMemo(()=>Ht(t,{balance:Be,incomes:le,expenses:de}[n]||[]),[t,n]);return e.jsxs(zt,{className:"data-block",children:[e.jsx(Bt,{width:"100%",height:400,children:e.jsx(Ee,{children:e.jsx(Fe,{data:r,cx:"50%",cy:"50%",innerRadius:"50%",outerRadius:"60%",paddingAngle:2,dataKey:"value",animationBegin:400,animationDuration:1e3,isAnimationActive:!0,children:r.map((a,i)=>e.jsx(Le,{fill:a.color},`cell-${i}`))})})}),e.jsx(ye,{data:r})]})};ke.propTypes={data:l.array};const It=j.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid ${s.lightBlue};

  .dark & {
    border-bottom-color: ${s.blue700};
  }

  &:first-child {
    border-top: 1px solid ${s.lightBlue};

    .dark & {
      border-top-color: ${s.blue700};
    }
  }

  .date {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }

  .description,
  .sum {
    overflow-wrap: anywhere;
  }

  .description {
    max-width: 60%;
    display: flex;
    align-items: center;
    font-weight: ${D.semibold};

    i {
      min-width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-style: normal;
      font-weight: ${D.medium};
      color: ${s.white};
      padding: 2px;
      margin-right: 15px;
      border-radius: ${S.base};

      .dark & {
        color: ${s.blue800};
      }
    }
  }

  .info {
    max-width: 40%;
    position: relative;
    padding-left: 10px;
  }

  .sum {
    font-weight: ${D.bold};
    padding-right: 40px;

    &:only-child {
      padding: 0;
    }
  }

  .edit {
    width: 30px;
    height: 30px;
    padding: 0;
    background: transparent;
    border: none;
    color: ${s.blue};
    border-radius: ${S.rounded};
    position: absolute;
    top: 55%;
    right: 0;
    transform: translateY(-50%);
    transition: ${C(["color","background"])};

    &.active,
    &:hover {
      background: ${s.lightBlue};

      .dark & {
        color: ${s.white};
        background: ${s.blue900};
      }
    }
  }

  .edit-popup {
    position: absolute;
    top: 100%;
    right: 5px;
    padding: 15px;
    background: ${s.white};
    border-radius: ${S.base};
    opacity: 0;
    visibility: hidden;
    transition: ${C(["opacity","visibility"])};
    box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.1);
    z-index: 1;

    @media (min-width: ${k.desktop}) {
      top: 50%;
      left: calc(100% + 5px);
      right: auto;
      transform: translateY(-50%);
    }

    .dark & {
      background: ${s.blue900};
    }

    &.drop-active {
      opacity: 1;
      visibility: visible;
    }
  }

  .btn-list {
    ${V}

    li {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  [class^="btn"] {
    font-weight: ${D.semibold};
    color: ${s.black};
    padding: 0;
    background: transparent;
    border: none;
    transition: ${C(["color"])};

    .dark & {
      color: ${s.white};
    }

    i {
      margin-right: 10px;
    }
  }

  .btn-remove {
    &:hover {
      color: ${s.red};
    }
  }

  .btn-edit {
    &:hover {
      color: ${s.blue};
    }
  }
`,$e=({date:t,period:n,category:r,description:a,note:i,sum:o,isOpenDrop:c,openDrop:h,closeDrop:d,onRemove:f,onEdit:b})=>{const u=m.useRef(null),{activeTab:x,currency:p}=P(),{t:g}=N();return m.useEffect(()=>{u.current&&(c?u.current.classList.add("drop-active"):u.current.classList.remove("drop-active"))},[c]),m.useEffect(()=>{const v=w=>{u.current&&!u.current.contains(w.target)&&d()};return document.addEventListener("mousedown",v),()=>{document.removeEventListener("mousedown",v)}},[d]),e.jsxs(It,{children:[t&&J(t)!==n&&e.jsx("span",{className:"date",children:J(t)}),e.jsxs("span",{className:"description",children:[e.jsx("i",{className:`icon-${r}`}),a]}),e.jsxs("div",{className:"info",children:[e.jsxs("span",{className:"sum",style:{color:x!=="balance"?void 0:i==="expenses"?`${s.lightRed}`:`${s.green}`},children:[p," ",o.toFixed(0)]}),x!=="balance"?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:`edit ${c?"active":""}`,onClick:h,children:e.jsx("i",{className:"icon-dots"})}),e.jsx("div",{className:"edit-popup",ref:u,children:e.jsxs("ul",{className:"btn-list",children:[e.jsx("li",{children:e.jsxs("button",{className:"btn-remove",onClick:f,children:[e.jsx("i",{className:"icon-trash"}),g("editPopup.remove")]})}),e.jsx("li",{children:e.jsxs("button",{className:"btn-edit",onClick:b,children:[e.jsx("i",{className:"icon-edit"}),g("editPopup.edit")]})})]})})]}):""]})]})};$e.propTypes={category:l.string.isRequired,description:l.string.isRequired,sum:l.number.isRequired,date:l.instanceOf(Date),period:l.string,note:l.string.isRequired,openDrop:l.func.isRequired,isOpenDrop:l.bool,closeDrop:l.func.isRequired,onRemove:l.func.isRequired,onEdit:l.func.isRequired};const Yt=j.div`
  margin: 0;

  .period {
    display: block;
    font-size: ${E.lg};
    font-weight: ${D.semibold};
    text-align: center;
    margin-bottom: 15px;
  }
`,At=j.ul`
  ${V()}
`,je=({data:t,period:n})=>{const{handleDeleteEntry:r,activeTab:a,setEditItem:i}=P(),[o,c]=m.useState(null),{t:h}=N(),d=u=>{r(u,a)},f=u=>{c(o===u?null:u)},b=()=>{c(!1)};return e.jsxs(Yt,{className:"records-holder data-block",children:[e.jsx("span",{className:"period",children:n}),e.jsx(At,{children:t.map((u,x)=>{const p=t[x-1],g=p&&new Date(u.date).toDateString()===new Date(p.date).toDateString();return e.jsx($e,{period:n,category:u.category,description:u.description?h(u.description):h(`category.${u.category}`),sum:u.value,note:u.note,date:g?null:new Date(u.date),isOpenDrop:o===x,openDrop:()=>f(x),closeDrop:b,onRemove:()=>d(u.id),onEdit:()=>i(u)},`${u.date}-${u.category}-${u.value}-${x}`)})})]})};je.propTypes={data:l.array.isRequired,period:l.string};const Vt=j.div`
  .row {
    @media (min-width: ${k.desktop}) {
      display: flex;
      margin: 0 -10px;
    }

    @media (min-width: ${k.widescreen}) {
      margin: 0 -15px;
    }
  }

  .holder {
    @media (min-width: ${k.desktop}) {
      order: 2;
    }
  }

  .holder,
  .records-holder {
    @media (min-width: ${k.desktop}) {
      width: 50%;
      margin: 0 10px;
    }

    @media (min-width: ${k.widescreen}) {
      margin: 0 15px;
    }
  }

  .message {
    font-size: ${E.xl};
    padding: 15px;
    text-align: center;
  }
`,Y=({id:t})=>{const{t:n,i18n:r}=N(),{entries:a,activeTab:i,setReset:o}=P(),[c,h]=m.useState(""),[d,f]=m.useState(null),[b,u]=m.useState(n("time")),[x,p]=m.useState(a[t]),g=n(t==="balance"?"balance.title":t==="incomes"?"incomes.title":"expenses.title"),v=(G,R)=>{const W=He;return G==="month"?`${r.t(W[R.getMonth()])} ${R.getFullYear()}`:G==="year"?R.getFullYear():R.toLocaleDateString(r.language)},w=(G,R,W)=>{if(!R)return G;const F=new Date(R);return G.filter(Pe=>{const L=new Date(Pe.date),De=L.getDate()===F.getDate()&&L.getMonth()===F.getMonth()&&L.getFullYear()===F.getFullYear(),Se=L.getMonth()===F.getMonth()&&L.getFullYear()===F.getFullYear(),Te=L.getFullYear()===F.getFullYear();return W==="day"?De:W==="month"?Se:W==="year"?Te:!1})},y=()=>{u(!c||!d?n("time"):c==="day"?J(d):v(c,d))},T=()=>{h(""),f(null),u(n("time")),p(a[t])},$=()=>{T(),o(!0)},ne=G=>{if(G.preventDefault(),!c||!d){p(a[t]),u(n("time"));return}const R=w(a[t],d,c);p(R),y()};m.useEffect(()=>{T()},[a,t]),m.useEffect(()=>{y()},[r.language]);const re=x.length>0,_e=re?x.map(G=>G.id).join("-"):"message";return e.jsx(Vt,{className:`tab ${t===i?"active":"tab-hidden"}`,children:e.jsxs("div",{className:"container",children:[e.jsx(fe,{text:g,id:t,period:b,view:c,data:x}),e.jsx(be,{id:t,view:c,setView:h,filterDate:d,setFilterDate:f,handleFilter:ne,resetFilters:$}),e.jsx(ee,{mode:"wait",children:e.jsx(A.div,{variants:X,initial:"hidden",animate:"visible",exit:"exit",transition:"transition",children:re?e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"holder",children:[e.jsx(ve,{id:t,text:g,data:x}),e.jsx(ke,{data:x})]}),e.jsx(je,{data:x,period:b})]}):e.jsxs(B,{children:[e.jsx("i",{className:"icon-no-result"}),e.jsx("strong",{className:"h3",children:n("messages.error")})]})},_e)})]})})};Y.propTypes={id:l.string.isRequired};const I=[{value:"en",label:"English"},{value:"uk",label:"Українська"}],Xt=()=>{const{i18n:t,t:n}=N(),[r,a]=m.useState(()=>I.find(o=>o.value===t.language)||I[0]);m.useEffect(()=>{const o=localStorage.getItem("appLanguage");o&&o!==t.language&&(t.changeLanguage(o),a(I.find(c=>c.value===o)))},[t]);const i=o=>{a(o),t.changeLanguage(o.value),localStorage.setItem("appLanguage",o.value)};return e.jsxs("div",{className:"setting-block",children:[e.jsx("h3",{children:n("settings.language")}),e.jsx(Z,{classNamePrefix:"custom-select",className:"custom-select",value:r,onChange:i,options:I,isSearchable:!1})]})},Kt=()=>{const{currency:t,setCurrency:n}=P(),{t:r}=N(),a=se.find(o=>o.value===t),i=o=>{n(o.value)};return e.jsxs("div",{className:"setting-block",children:[e.jsx("h3",{children:r("settings.currency")}),e.jsx(Z,{className:"custom-select",classNamePrefix:"custom-select",options:se,value:a,onChange:i,isSearchable:!1})]})},Ut=j.button`
  height: 50px;
  width: 100px;
  padding: 0;
  background: transparent;
  border: 2px solid ${s.blue};
  border-radius: 25px;
  position: relative;

  &.dark-active {
    &:before {
      left: 50px;
    }
  }

  &:before {
    content: "";
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    background: ${s.blue};
    border-radius: ${S.rounded};
    transition: ${C(["left"])};
  }

  i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: ${E.xl};
    color: ${s.lightBlue};

    &.icon-sun {
      left: 15px;
    }

    &.icon-moon {
      right: 15px;
    }
  }
`,Qt=()=>{const[t,n]=m.useState(()=>localStorage.getItem("theme")||"light"),{t:r}=N();m.useEffect(()=>{Ie(),t==="light"?(document.body.classList.remove("dark"),document.body.classList.add("light")):(document.body.classList.remove("light"),document.body.classList.add("dark")),localStorage.setItem("theme",t)},[t]);const a=()=>{n(i=>i==="light"?"dark":"light")};return e.jsxs("div",{className:"setting-block",children:[e.jsx("h3",{children:r("settings.theme")}),e.jsx("div",{className:"switcher-holder",children:e.jsxs(Ut,{onClick:a,className:t==="dark"?"dark-active":void 0,children:[e.jsx("i",{className:"icon-sun"}),e.jsx("i",{className:"icon-moon"})]})})]})},Jt=j.div`
  padding: 30px 0;

  .message {
    margin-bottom: 15px;
  }

  .error {
    border: 1px solid ${s.red};
  }

  .btn-holder {
    text-align: right;
  }

  .btn {
    min-width: 180px;
  }
`,Zt=()=>{const[t,n]=m.useState(""),[r,a]=m.useState(""),[i,o]=m.useState(""),[c,h]=m.useState({}),[d,f]=m.useState(""),{t:b}=N();m.useEffect(()=>{localStorage.getItem("user-password")||localStorage.setItem("user-password",Ye.password)},[]),m.useEffect(()=>{if(d){const p=setTimeout(()=>{f("")},3e3);return()=>clearTimeout(p)}},[d]);const u=p=>{h(g=>{const v={...g};return delete v[p],v})},x=p=>{p.preventDefault();const g=localStorage.getItem("user-password"),v={};if(t||(v.currentPassword="messages.enterCurrent"),r||(v.newPassword="messages.newEmpty"),i||(v.confirmPassword="messages.confirm"),t&&t!==g&&(v.currentPassword="messages.incorrect"),r&&r===g&&(v.newPassword="messages.same"),r&&i&&r!==i&&(v.confirmPassword="messages.match"),Object.keys(v).length>0){h(v);return}localStorage.setItem("user-password",r),f("messages.success"),h({}),n(""),a(""),o("")};return e.jsxs(Jt,{children:[e.jsx("h3",{children:b("changePassword.title")}),e.jsxs("form",{className:"change-password-form",onSubmit:x,children:[e.jsxs("div",{className:"form-control",children:[e.jsx(H,{id:"current-password",type:"password",name:"currentPassword",placeholder:b("changePassword.inputCurrentPassword"),value:t,handleChange:(p,g)=>{n(g),u(p)},error:!!c.currentPassword}),c.currentPassword&&e.jsx(B,{color:s.red,children:b(c.currentPassword)})]}),e.jsxs("div",{className:"form-control",children:[e.jsx(H,{id:"new-password",type:"password",name:"newPassword",placeholder:b("changePassword.inputNewPassword"),value:r,handleChange:(p,g)=>{a(g),u(p)},error:!!c.newPassword}),c.newPassword&&e.jsx(B,{color:s.red,children:b(c.newPassword)})]}),e.jsxs("div",{className:"form-control",children:[e.jsx(H,{id:"confirm-password",type:"password",name:"confirmPassword",placeholder:b("changePassword.inputConfirmPassword"),value:i,handleChange:(p,g)=>{o(g),u(p)},error:!!c.confirmPassword}),c.confirmPassword&&e.jsx(B,{color:s.red,children:b(c.confirmPassword)})]}),d&&e.jsx(B,{color:s.green,children:b(d)}),e.jsx("div",{className:"btn-holder",children:e.jsx(M,{type:"submit",children:b("changePassword.button")})})]})]})},ea=j.div`
  h2 {
    margin-bottom: 30px;
  }

  .settings-holder {
    max-width: 540px;
  }

  .setting-block {
    margin-bottom: 30px;

    @media (min-width: ${k.phone}) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
    }

    h3 {
      @media (min-width: ${k.phone}) {
        max-width: calc(300px - 15px);
        padding-right: 15px;
        margin: 0;
      }
    }
  }

  .custom-select,
  .switcher-holder {
    width: 100%;

    @media (min-width: ${k.phone}) {
      max-width: 300px;
      margin-bottom: 0;
    }
  }

  .switcher-holder {
    text-align: left;
  }
`,Ne=({id:t})=>{const{activeTab:n}=P(),{t:r}=N();return e.jsx(ea,{className:`tab ${t===n?"active":"tab-hidden"}`,children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:r("settings.title")}),e.jsxs("div",{className:"settings-holder",children:[e.jsx(Kt,{}),e.jsx(Xt,{}),e.jsx(Qt,{}),e.jsx(Zt,{})]})]})})};Ne.propTypes={id:l.string.isRequired};const ta=[{component:ue,id:"info"},{component:Y,id:"balance"},{component:Y,id:"incomes"},{component:Y,id:"expenses"},{component:Ne,id:"settings"}],ia=()=>e.jsx(A.div,{variants:X,initial:"hidden",animate:"visible",exit:"exit",transition:"transition",children:ta.map(({component:t,id:n})=>e.jsx(t,{id:n},n))},"tabs");export{ia as default};
