var ge=Object.defineProperty,be=Object.defineProperties;var he=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var X=(y,p,o)=>p in y?ge(y,p,{enumerable:!0,configurable:!0,writable:!0,value:o}):y[p]=o,$=(y,p)=>{for(var o in p||(p={}))ve.call(p,o)&&X(y,o,p[o]);if(G)for(var o of G(p))De.call(p,o)&&X(y,o,p[o]);return y},P=(y,p)=>be(y,he(p));var k=(y,p,o)=>new Promise((d,f)=>{var D=g=>{try{_(o.next(g))}catch(w){f(w)}},q=g=>{try{_(o.throw(g))}catch(w){f(w)}},_=g=>g.done?d(g.value):Promise.resolve(g.value).then(D,q);_((o=o.apply(y,p)).next())});import{B as we,D as ke,r as xe,$ as Se,P as Ve,f as Ae,H as Ce,X as Ee,V as Me,a8 as qe,a9 as Ne,g as $e,u as Pe,N as c,O as Ue}from"./element-plus-core-Zsm2lieN.js";import{w as Ye,ay as Be,ab as J,ad as S,g as U,a5 as ze,a9 as h,l as V,s as r,aH as s,i as a,F as E,af as M,j as B,r as m,am as i,Y as Te}from"./vue-chunks-DUFRzBE-.js";import{g as K}from"./index-DOXSIEEz.js";import{s as Le,b as Oe,f as Re,e as Fe}from"./index-D251NWUG.js";import{a as Ie}from"./index-D1qe8ein.js";import"./utility-vendor-CJEvTjgX.js";import"./element-plus-icons-C2Oa2E_i.js";import"./iconify-vendor-DPs8vxWM.js";import"./tauri-vendor-BBucQyPs.js";const We={class:"public-welfare-summary"},He={class:"card-header"},je={class:"query-form"},Ge={id:"print-area",class:"print-content"},Xe={class:"print-header"},Je={class:"print-info"},Ke={class:"report-meta-line"},Qe={class:"screen-only"},Ze={class:"print-only"},et={class:"print-attendance-days"},tt={class:"table-summary"},at={class:"print-header"},nt={class:"print-info"},lt={class:"report-meta-line"},ot={class:"report-table"},rt={class:"table-summary"},st=Ye({__name:"Summary",setup(y){const p=Be(),o=J({month:new Date().toISOString().slice(0,7),department:"农业农村部门"}),d=J({title:"",reportingUnit:"",reportDate:new Date().toISOString().slice(0,10)}),f=S([]),D=S(!1),q=S([]),_=S([]),g=S(!1),w=S(!1),z=S(null),T=["人社部门","农业农村部门"],L=U(()=>{if(!o.month)return"";const[t,e]=o.month.split("-");return`${t}年${e}月`}),O=U(()=>`乡村公益性岗位出勤天数和拟拨付岗位补贴金额汇总表（${L.value}）`),R=U(()=>{if(!d.reportDate)return"____年____月____日";const[t,e,l]=d.reportDate.split("-");return`${t}年${e}月${l}日`}),Y=t=>Number(t||0).toFixed(2),N=U(()=>{const t=f.value.reduce((e,l)=>e+Number(l.subsidyAmount||0),0);return{personCount:f.value.length,amount:Y(t)}}),F=t=>{const e=Number(t.attendanceDays||0),l=Number(t.subsidyStandard||0),u=Number(t.requiredAttendanceDays||30);return u<=0?0:l/u*e},Q=t=>{t.subsidyAmount=F(t)},Z=()=>{g.value||(d.title=O.value)},ee=()=>{p.push("/rural-revitalization/public-welfare-post")},te=()=>{if(!f.value.length){c.warning("暂无可预览数据");return}w.value=!0},ae=()=>k(null,null,function*(){var u;yield Te();const t=z.value;if(!t){c.error("未找到汇总表预览内容");return}const e=document.createElement("iframe");e.style.position="fixed",e.style.right="0",e.style.bottom="0",e.style.width="0",e.style.height="0",e.style.border="0",document.body.appendChild(e);const l=e.contentDocument||((u=e.contentWindow)==null?void 0:u.document);if(!l||!e.contentWindow){document.body.removeChild(e),c.error("打印预览初始化失败");return}l.open(),l.write(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${d.title||"公益性岗位汇总表"}</title>
        <style>${ne("landscape")}</style>
      </head>
      <body>${t.outerHTML}</body>
    </html>
  `),l.close(),window.setTimeout(()=>{var b,A;(b=e.contentWindow)==null||b.focus(),(A=e.contentWindow)==null||A.print(),window.setTimeout(()=>{var C;(C=e.parentNode)==null||C.removeChild(e)},1200)},200)}),ne=t=>`
  @page {
    size: A4 ${t};
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
    font-size: 18pt;
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
  .report-meta-line {
    display: flex;
    gap: 5em;
    align-items: center;
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
  .report-sign-line {
    display: flex;
    gap: 2em;
    margin-top: 20px;
    color: #000;
    font-size: 12pt;
    line-height: 1.8;
  }
  .sign-field {
    display: inline-flex;
    align-items: center;
  }
  .sign-reporter .sign-blank {
    display: inline-block;
    width: 4em;
  }
  .sign-phone .sign-blank {
    display: inline-block;
    width: 14ch;
  }
`,le=()=>{if(!o.month)return null;const[t,e]=o.month.split("-").map(Number);if(!t||!e)return null;const l=new Date(t,e-1,1),u=new Date(t,e,0);return{start:l,end:u}},I=t=>{if(!t)return null;const[e,l,u]=t.split("-").map(Number);return!e||!l||!u?null:new Date(e,l-1,u)},W=t=>{const e=le();if(!e)return!0;const l=I(t.contractStartDate),u=I(t.contractEndDate);return!l||!u?!1:l<=e.end&&u>=e.start},oe=()=>k(null,null,function*(){try{const t=yield K("使用单位");q.value=(t.data||[]).map(e=>e.value).filter(Boolean)}catch(t){c.error((t==null?void 0:t.message)||"加载使用单位字典失败")}}),re=()=>k(null,null,function*(){try{const e=((yield K("公益性岗位开发主管部门")).data||[]).map(l=>l.value).filter(Boolean);_.value=e.length?e:T}catch(t){_.value=T,c.error((t==null?void 0:t.message)||"加载公益性岗位开发主管部门字典失败")}o.department&&!_.value.includes(o.department)&&_.value.length&&(o.department=_.value[0])}),se=()=>k(null,null,function*(){if(f.value.length===0){c.warning("没有可保存的台账数据");return}if(ie()){c.warning("不可保存未来月份台账");return}try{const t=f.value.map(l=>({personId:l.id,name:l.name,idCard:l.idCard,postName:l.postName,attendanceDays:l.attendanceDays,requiredAttendanceDays:Number(l.requiredAttendanceDays||30),dailySubsidy:Number(l.subsidyStandard)/Number(l.requiredAttendanceDays||30),subsidyAmount:l.subsidyAmount,contractStartDate:l.contractStartDate,contractEndDate:l.contractEndDate})),e=yield Le(o.month,o.department,t);c.success(e),D.value=!0}catch(t){c.error((t==null?void 0:t.message)||"保存台账失败")}}),ie=()=>{if(!o.month)return!1;const[t,e]=o.month.split("-").map(Number);if(!t||!e)return!1;const l=new Date,u=new Date(l.getFullYear(),l.getMonth(),1);return new Date(t,e-1,1)>u},de=()=>k(null,null,function*(){if(!D.value){c.warning("当前月份没有已保存的台账");return}try{yield Ue.confirm(`确定要删除 ${L.value} ${o.department} 的台账吗？此操作不可恢复。`,"删除确认",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const t=yield Oe(o.month,o.department);c.success(t),D.value=!1}catch(t){t!=="cancel"&&c.error((t==null?void 0:t.message)||"删除台账失败")}}),ue=()=>k(null,null,function*(){try{const t=yield Fe(o.month,o.department);D.value=t.total>0,D.value&&(f.value=t.data.map(e=>P($({},e),{requiredAttendanceDays:e.requiredAttendanceDays||30,subsidyStandard:e.dailySubsidy*(e.requiredAttendanceDays||30)})).filter(W))}catch(t){console.error("检查台账状态失败:",t)}}),H=()=>k(null,null,function*(){if(yield ue(),!D.value)try{const t=yield Re({department:o.department,pageSize:1e4});f.value=(t.data||[]).filter(W).map(e=>P($({},e),{requiredAttendanceDays:e.requiredAttendanceDays||30,attendanceDays:e.requiredAttendanceDays||30,subsidyAmount:F(P($({},e),{requiredAttendanceDays:e.requiredAttendanceDays||30,attendanceDays:e.requiredAttendanceDays||30}))}))}catch(t){c.error((t==null?void 0:t.message)||"加载数据失败")}});return ze(()=>{d.title=O.value,Promise.all([oe(),re()]).then(()=>H())}),(t,e)=>{const l=Ae,u=xe,b=ke,A=Ve,C=Se,j=we,pe=Ce,ce=Me,me=Ee,x=Ne,ye=qe,fe=$e,_e=Pe;return h(),V("div",We,[r(fe,{shadow:"never"},{header:s(()=>[a("div",He,[e[13]||(e[13]=a("span",null,"乡村公益性岗位出勤天数和拟拨付岗位补贴金额汇总表",-1)),a("div",null,[r(l,{onClick:ee},{default:s(()=>e[9]||(e[9]=[m("返回列表")])),_:1}),r(l,{type:"primary",onClick:se},{default:s(()=>e[10]||(e[10]=[m("保存台账")])),_:1}),r(l,{type:"danger",onClick:de},{default:s(()=>e[11]||(e[11]=[m("删除台账")])),_:1}),r(l,{type:"primary",onClick:te},{default:s(()=>e[12]||(e[12]=[m("生成预览")])),_:1})])])]),default:s(()=>[a("div",je,[r(j,{inline:!0,model:o},{default:s(()=>[r(b,{label:"选择月份"},{default:s(()=>[r(u,{modelValue:o.month,"onUpdate:modelValue":e[0]||(e[0]=n=>o.month=n),type:"month",placeholder:"选择月份",format:"YYYY-MM","value-format":"YYYY-MM",onChange:Z},null,8,["modelValue"])]),_:1}),r(b,{label:"开发主管部门"},{default:s(()=>[r(C,{modelValue:o.department,"onUpdate:modelValue":e[1]||(e[1]=n=>o.department=n),placeholder:"全部",clearable:"",style:{width:"150px"}},{default:s(()=>[(h(!0),V(E,null,M(_.value,n=>(h(),B(A,{key:n,label:n,value:n},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(b,null,{default:s(()=>[r(l,{type:"primary",onClick:H},{default:s(()=>e[14]||(e[14]=[m("查询")])),_:1})]),_:1})]),_:1},8,["model"]),r(j,{inline:!0,model:d,class:"report-form"},{default:s(()=>[r(b,{label:"报表名称"},{default:s(()=>[r(pe,{modelValue:d.title,"onUpdate:modelValue":e[2]||(e[2]=n=>d.title=n),clearable:"",style:{width:"360px"},onInput:e[3]||(e[3]=n=>g.value=!0)},null,8,["modelValue"])]),_:1}),r(b,{label:"填报单位"},{default:s(()=>[r(C,{modelValue:d.reportingUnit,"onUpdate:modelValue":e[4]||(e[4]=n=>d.reportingUnit=n),filterable:"","allow-create":"",clearable:"",placeholder:"请选择使用单位",style:{width:"220px"}},{default:s(()=>[(h(!0),V(E,null,M(q.value,n=>(h(),B(A,{key:n,label:n,value:n},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(b,{label:"填报时间"},{default:s(()=>[r(u,{modelValue:d.reportDate,"onUpdate:modelValue":e[5]||(e[5]=n=>d.reportDate=n),type:"date","value-format":"YYYY-MM-DD",style:{width:"160px"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),a("div",Ge,[a("div",Xe,[a("h2",null,i(d.title),1),a("div",Je,[a("p",Ke,[a("span",null,"填报单位（盖章）："+i(d.reportingUnit||"________________________"),1),a("span",null,"填报时间："+i(R.value),1)]),a("p",null,[a("span",Qe,[e[15]||(e[15]=m(" 开发主管部门： ")),r(me,{modelValue:o.department,"onUpdate:modelValue":e[6]||(e[6]=n=>o.department=n)},{default:s(()=>[(h(!0),V(E,null,M(_.value,n=>(h(),B(ce,{key:n,label:n},{default:s(()=>[m(i(n),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),a("span",Ze,"开发主管部门："+i(o.department||""),1)])])]),r(ye,{data:f.value,border:""},{default:s(()=>[r(x,{type:"index",label:"序号",width:"60",align:"center"}),r(x,{prop:"name",label:"姓名",width:"100",align:"center"}),r(x,{prop:"idCard",label:"身份证号码","min-width":"180"}),r(x,{prop:"requiredAttendanceDays",label:"规定出勤天数（天）",width:"130",align:"center"}),r(x,{label:"本月累计出勤天数（天）",width:"160",align:"center"},{default:s(({row:n})=>[r(C,{modelValue:n.attendanceDays,"onUpdate:modelValue":v=>n.attendanceDays=v,size:"small",style:{width:"80px"},onChange:v=>Q(n)},{default:s(()=>[(h(),V(E,null,M(31,v=>r(A,{key:v,label:v,value:v},null,8,["label","value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"]),a("span",et,i(n.attendanceDays||n.requiredAttendanceDays||30),1)]),_:1}),r(x,{label:"补贴金额（元）",width:"120",align:"right"},{default:s(({row:n})=>[m(i(Y(n.subsidyAmount)),1)]),_:1}),r(x,{label:"协议起止时间","min-width":"180"},{default:s(({row:n})=>[m(i(n.contractStartDate||"-")+" 至 "+i(n.contractEndDate||"-"),1)]),_:1})]),_:1},8,["data"]),a("div",tt," 合计："+i(N.value.personCount)+"人，"+i(N.value.amount)+"元 ",1),e[16]||(e[16]=a("div",{class:"print-footer"},[a("p",{style:{color:"#666","font-size":"12px"}}," 默认按规定出勤天数满勤计算，可在表格中逐人修改。补贴金额 = 月补贴标准 ÷ 规定出勤天数 × 实际出勤天数 ")],-1))])]),_:1}),r(_e,{modelValue:w.value,"onUpdate:modelValue":e[8]||(e[8]=n=>w.value=n),title:"汇总表预览",width:"96%",top:"3vh",class:"report-preview-dialog","destroy-on-close":""},{footer:s(()=>[r(l,{onClick:e[7]||(e[7]=n=>w.value=!1)},{default:s(()=>e[20]||(e[20]=[m("关闭")])),_:1}),r(l,{type:"primary",onClick:ae},{default:s(()=>e[21]||(e[21]=[m("打印")])),_:1})]),default:s(()=>[a("div",{ref_key:"previewRef",ref:z,class:"report-print-page summary-print-page"},[a("div",at,[a("h2",null,i(d.title),1),a("div",nt,[a("p",lt,[a("span",null,"填报单位（盖章）："+i(d.reportingUnit||"________________________"),1),a("span",null,"填报时间："+i(R.value),1)]),a("p",null,"开发主管部门："+i(o.department||""),1)])]),a("table",ot,[e[17]||(e[17]=a("colgroup",null,[a("col",{style:{width:"7%"}}),a("col",{style:{width:"10%"}}),a("col",{style:{width:"25%"}}),a("col",{style:{width:"16%"}}),a("col",{style:{width:"12%"}}),a("col",{style:{width:"15%"}}),a("col",{style:{width:"15%"}})],-1)),e[18]||(e[18]=a("thead",null,[a("tr",null,[a("th",null,"序号"),a("th",null,"姓名"),a("th",null,"身份证号码"),a("th",null,"本月累计出勤天数（天）"),a("th",null,"补贴金额（元）"),a("th",{colspan:"2"},"协议时间起止时间")])],-1)),a("tbody",null,[(h(!0),V(E,null,M(f.value,(n,v)=>(h(),V("tr",{key:n.id||v},[a("td",null,i(v+1),1),a("td",null,i(n.name),1),a("td",null,i(n.idCard),1),a("td",null,i(n.attendanceDays||n.requiredAttendanceDays||30),1),a("td",null,i(Y(n.subsidyAmount))+"元",1),a("td",null,i(n.contractStartDate||"-"),1),a("td",null,i(n.contractEndDate||"-"),1)]))),128))])]),a("div",rt," 合计："+i(N.value.personCount)+"人，"+i(N.value.amount)+"元 ",1),e[19]||(e[19]=a("div",{class:"report-sign-line"},[a("span",{class:"sign-field sign-reporter"},[m("填报人："),a("span",{class:"sign-blank"})]),a("span",{class:"sign-field sign-phone"},[m("联系电话："),a("span",{class:"sign-blank"})]),a("span",{class:"sign-field"},"审核人（签字）：")],-1))],512)]),_:1},8,["modelValue"])])}}}),bt=Ie(st,[["__scopeId","data-v-a7518690"]]);export{bt as default};
