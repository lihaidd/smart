var rt=Object.defineProperty,it=Object.defineProperties;var st=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var dt=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;var B=(c,d,o)=>d in c?rt(c,d,{enumerable:!0,configurable:!0,writable:!0,value:o}):c[d]=o,V=(c,d)=>{for(var o in d||(d={}))dt.call(d,o)&&B(c,o,d[o]);if(Y)for(var o of Y(d))ut.call(d,o)&&B(c,o,d[o]);return c},P=(c,d)=>it(c,st(d));var A=(c,d,o)=>new Promise((u,m)=>{var C=_=>{try{v(o.next(_))}catch(f){m(f)}},g=_=>{try{v(o.throw(_))}catch(f){m(f)}},v=_=>_.done?u(_.value):Promise.resolve(_.value).then(C,g);v((o=o.apply(c,d)).next())});import{B as pt,D as ct,r as _t,f as mt,$ as yt,P as ft,a6 as bt,H as ht,a8 as gt,a9 as vt,g as wt,u as xt,N as x}from"./element-plus-core-Zsm2lieN.js";import{w as Dt,ay as Ct,ab as M,ad as E,g as z,a5 as kt,a9 as D,l as S,s as a,aH as i,i as e,r as h,F as $,af as F,j as Tt,am as s,Y as At}from"./vue-chunks-DUFRzBE-.js";import{g as Et}from"./index-DOXSIEEz.js";import{f as St}from"./index-D251NWUG.js";import{a as Vt}from"./index-D1qe8ein.js";import"./utility-vendor-CJEvTjgX.js";import"./element-plus-icons-C2Oa2E_i.js";import"./iconify-vendor-DPs8vxWM.js";import"./tauri-vendor-BBucQyPs.js";const Pt={class:"public-welfare-payment"},It={class:"card-header"},Nt={class:"query-form"},Ut={id:"print-area",class:"print-content"},qt={class:"print-header"},Yt={class:"print-info"},Bt={class:"table-summary"},Mt={class:"print-footer"},zt={class:"print-header"},$t={class:"print-info"},Ft={class:"report-table"},Wt={class:"table-summary"},Lt={class:"print-footer"},W="publicWelfarePost.payment.publicityText",I="公示期间，如对公示名单有异议，可向县振兴乡村局、县人力资源社会保障局反应，电话12345678，邮箱12345678@126.com。",Ot=Dt({__name:"Payment",setup(c){const d=Ct(),o=M({month:new Date().toISOString().slice(0,7)}),u=M({publicityUnit:"",publicityText:I,maskIdCard:!0}),m=E([]),C=E([]),g=E(!1),v=E(null),_=z(()=>{if(!o.month)return"";const[n,t]=o.month.split("-");return`${n}年${t}月`}),f=n=>Number(n||0).toFixed(2),L=n=>{const t=String(n||"").trim();return!u.maskIdCard||t.length<14?t:`${t.slice(0,6)}********${t.slice(14)}`},k=z(()=>{const n=m.value.reduce((t,r)=>t+Number(r.subsidyAmount||0),0);return{personCount:m.value.length,amount:f(n)}}),O=n=>{const t=Number(n.attendanceDays||n.requiredAttendanceDays),r=Number(n.requiredAttendanceDays),p=Number(n.subsidyStandard||0);return r<=0?0:p/r*t},R=()=>{const n=window.localStorage.getItem(W);u.publicityText=n||I},H=()=>{window.localStorage.setItem(W,u.publicityText||I)},X=()=>A(null,null,function*(){try{const n=yield Et("使用单位");C.value=(n.data||[]).map(t=>t.value).filter(Boolean)}catch(n){x.error((n==null?void 0:n.message)||"加载使用单位字典失败")}}),j=()=>{d.push("/rural-revitalization/public-welfare-post")},G=()=>{if(!m.value.length){x.warning("暂无可预览数据");return}g.value=!0},K=()=>A(null,null,function*(){var p;yield At();const n=v.value;if(!n){x.error("未找到公示表预览内容");return}const t=document.createElement("iframe");t.style.position="fixed",t.style.right="0",t.style.bottom="0",t.style.width="0",t.style.height="0",t.style.border="0",document.body.appendChild(t);const r=t.contentDocument||((p=t.contentWindow)==null?void 0:p.document);if(!r||!t.contentWindow){document.body.removeChild(t),x.error("打印预览初始化失败");return}r.open(),r.write(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${_.value||""}乡村公益性岗位补贴发放公示表</title>
        <style>${J("portrait")}</style>
      </head>
      <body>${n.outerHTML}</body>
    </html>
  `),r.close(),window.setTimeout(()=>{var y,w;(y=t.contentWindow)==null||y.focus(),(w=t.contentWindow)==null||w.print(),window.setTimeout(()=>{var T;(T=t.parentNode)==null||T.removeChild(t)},1200)},200)}),J=n=>`
  @page {
    size: A4 ${n};
    margin: 15mm 10mm;
  }
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    color: #000;
    background: #fff;
    font-family: "Microsoft YaHei", "SimSun", Arial, sans-serif;
    font-size: 12pt;
  }
  .report-print-page {
    width: 100%;
  }
  .print-header {
    margin-bottom: 12px;
    text-align: center;
  }
  .print-header h2 {
    margin: 0 0 20pt;
    font-size: 22pt;
    font-weight: 700;
    line-height: 1.3;
  }
  .print-info {
    text-align: left;
  }
  .print-info p {
    margin: 6px 0;
    font-size: 12pt;
    line-height: 1.5;
  }
  .report-table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    page-break-inside: auto;
  }
  .report-table thead {
    display: table-header-group;
  }
  .report-table tbody {
    display: table-row-group;
  }
  .report-table tr {
    page-break-inside: avoid;
    break-inside: avoid;
  }
  .report-table th,
  .report-table td {
    height: 28pt;
    border: 1px solid #000;
    padding: 0 6px;
    color: #000;
    font-size: 14pt;
    font-weight: 400;
    line-height: 28pt;
    text-align: center;
    vertical-align: middle;
    word-break: break-all;
  }
  .report-table thead th {
    font-weight: 400 !important;
  }
  .table-summary {
    margin-top: 10px;
    color: #000;
    font-size: 14pt;
    font-weight: 700;
    text-align: right;
  }
  .print-footer {
    margin-top: 20px;
  }
  .print-footer p {
    margin: 0;
    color: #000;
    font-size: 12pt;
    line-height: 1.8;
  }
`,Q=()=>{if(!o.month)return null;const[n,t]=o.month.split("-").map(Number);if(!n||!t)return null;const r=new Date(n,t-1,1),p=new Date(n,t,0);return{start:r,end:p}},N=n=>{if(!n)return null;const[t,r,p]=n.split("-").map(Number);return!t||!r||!p?null:new Date(t,r-1,p)},Z=n=>{const t=Q();if(!t)return!0;const r=N(n.contractStartDate),p=N(n.contractEndDate);return!r||!p?!1:r<=t.end&&p>=t.start},U=()=>A(null,null,function*(){try{const n=yield St({pageSize:1e4});m.value=(n.data||[]).filter(Z).map(t=>P(V({},t),{requiredAttendanceDays:t.requiredAttendanceDays||30,attendanceDays:t.requiredAttendanceDays||30,subsidyAmount:O(P(V({},t),{requiredAttendanceDays:t.requiredAttendanceDays||30}))}))}catch(n){x.error((n==null?void 0:n.message)||"加载数据失败")}});return kt(()=>{R(),Promise.all([X(),U()])}),(n,t)=>{const r=mt,p=_t,y=ct,w=pt,T=ft,tt=yt,et=bt,nt=ht,b=vt,lt=gt,at=wt,ot=xt;return D(),S("div",Pt,[a(at,{shadow:"never"},{header:i(()=>[e("div",It,[t[8]||(t[8]=e("span",null,"乡村公益性岗位补贴发放公示表",-1)),e("div",null,[a(r,{onClick:j},{default:i(()=>t[6]||(t[6]=[h("返回列表")])),_:1}),a(r,{type:"primary",onClick:G},{default:i(()=>t[7]||(t[7]=[h("生成预览")])),_:1})])])]),default:i(()=>[e("div",Nt,[a(w,{inline:!0,model:o},{default:i(()=>[a(y,{label:"选择月份"},{default:i(()=>[a(p,{modelValue:o.month,"onUpdate:modelValue":t[0]||(t[0]=l=>o.month=l),type:"month",placeholder:"选择月份",format:"YYYY-MM","value-format":"YYYY-MM"},null,8,["modelValue"])]),_:1}),a(y,null,{default:i(()=>[a(r,{type:"primary",onClick:U},{default:i(()=>t[9]||(t[9]=[h("查询")])),_:1})]),_:1})]),_:1},8,["model"]),a(w,{model:u,class:"payment-form","label-width":"92px"},{default:i(()=>[a(y,{label:"公示单位"},{default:i(()=>[a(tt,{modelValue:u.publicityUnit,"onUpdate:modelValue":t[1]||(t[1]=l=>u.publicityUnit=l),filterable:"","allow-create":"",clearable:"",placeholder:"请选择使用单位",style:{width:"260px"}},{default:i(()=>[(D(!0),S($,null,F(C.value,l=>(D(),Tt(T,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(y,{label:"身份证脱敏"},{default:i(()=>[a(et,{modelValue:u.maskIdCard,"onUpdate:modelValue":t[2]||(t[2]=l=>u.maskIdCard=l),"active-text":"脱敏","inactive-text":"正常显示"},null,8,["modelValue"])]),_:1}),a(y,{label:"公示文案"},{default:i(()=>[a(nt,{modelValue:u.publicityText,"onUpdate:modelValue":t[3]||(t[3]=l=>u.publicityText=l),type:"textarea",rows:2,onBlur:H},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),e("div",Ut,[e("div",qt,[e("h2",null,s(_.value)+"乡村公益性岗位补贴发放公示表",1),e("div",Yt,[e("p",null,"公示单位（盖章）："+s(u.publicityUnit||"________________________"),1),t[10]||(t[10]=e("p",null,"公示时间：____年____月____日 至 ____年____月____日（共____天）",-1))])]),a(lt,{data:m.value,border:""},{default:i(()=>[a(b,{type:"index",label:"序号","min-width":"56",align:"center"}),a(b,{prop:"name",label:"姓名","min-width":"90",align:"center"}),a(b,{prop:"idCard",label:"身份证号码","min-width":"210"}),a(b,{prop:"postName",label:"岗位名称","min-width":"150"}),a(b,{prop:"requiredAttendanceDays",label:"规定出勤天数（天）","min-width":"130",align:"center"}),a(b,{label:"本月累计出勤天数（天）","min-width":"150",align:"center"},{default:i(({row:l})=>[h(s(l.attendanceDays||l.requiredAttendanceDays||30),1)]),_:1}),a(b,{label:"补贴金额（元）","min-width":"120",align:"right"},{default:i(({row:l})=>[h(s(f(l.subsidyAmount)),1)]),_:1})]),_:1},8,["data"]),e("div",Bt," 合计："+s(k.value.personCount)+"人，"+s(k.value.amount)+"元 ",1),e("div",Mt,[e("p",null,s(u.publicityText),1)])])]),_:1}),a(ot,{modelValue:g.value,"onUpdate:modelValue":t[5]||(t[5]=l=>g.value=l),title:"公示表预览",width:"96%",top:"3vh",class:"report-preview-dialog","destroy-on-close":""},{footer:i(()=>[a(r,{onClick:t[4]||(t[4]=l=>g.value=!1)},{default:i(()=>t[14]||(t[14]=[h("关闭")])),_:1}),a(r,{type:"primary",onClick:K},{default:i(()=>t[15]||(t[15]=[h("打印")])),_:1})]),default:i(()=>[e("div",{ref_key:"previewRef",ref:v,class:"report-print-page payment-print-page"},[e("div",zt,[e("h2",null,s(_.value)+"乡村公益性岗位补贴发放公示表",1),e("div",$t,[e("p",null,"公示单位（盖章）："+s(u.publicityUnit||"________________________"),1),t[11]||(t[11]=e("p",null,"公示时间：____年____月____日 至 ____年____月____日（共____天）",-1))])]),e("table",Ft,[t[12]||(t[12]=e("colgroup",null,[e("col",{style:{width:"7%"}}),e("col",{style:{width:"10%"}}),e("col",{style:{width:"28%"}}),e("col",{style:{width:"20%"}}),e("col",{style:{width:"17%"}}),e("col",{style:{width:"18%"}})],-1)),t[13]||(t[13]=e("thead",null,[e("tr",null,[e("th",null,"序号"),e("th",null,"姓名"),e("th",null,"身份证号码"),e("th",null,"岗位名称"),e("th",null,"本月累计出勤天数（天）"),e("th",null,"补贴金额（元）")])],-1)),e("tbody",null,[(D(!0),S($,null,F(m.value,(l,q)=>(D(),S("tr",{key:l.id||q},[e("td",null,s(q+1),1),e("td",null,s(l.name),1),e("td",null,s(L(l.idCard)),1),e("td",null,s(l.postName),1),e("td",null,s(l.attendanceDays||l.requiredAttendanceDays||30),1),e("td",null,s(f(l.subsidyAmount))+"元",1)]))),128))])]),e("div",Wt," 合计："+s(k.value.personCount)+"人，"+s(k.value.amount)+"元 ",1),e("div",Lt,[e("p",null,s(u.publicityText),1)])],512)]),_:1},8,["modelValue"])])}}}),ee=Vt(Ot,[["__scopeId","data-v-6cd05b1b"]]);export{ee as default};
