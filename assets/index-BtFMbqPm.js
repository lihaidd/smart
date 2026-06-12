var Ha=Object.defineProperty,Ga=Object.defineProperties;var Oa=Object.getOwnPropertyDescriptors;var Vt=Object.getOwnPropertySymbols;var Ya=Object.prototype.hasOwnProperty,Wa=Object.prototype.propertyIsEnumerable;var Ut=(p,u,w)=>u in p?Ha(p,u,{enumerable:!0,configurable:!0,writable:!0,value:w}):p[u]=w,C=(p,u)=>{for(var w in u||(u={}))Ya.call(u,w)&&Ut(p,w,u[w]);if(Vt)for(var w of Vt(u))Wa.call(u,w)&&Ut(p,w,u[w]);return p},M=(p,u)=>Ga(p,Oa(u));var S=(p,u,w)=>new Promise((ae,ye)=>{var ce=Y=>{try{se(w.next(Y))}catch(me){ye(me)}},he=Y=>{try{se(w.throw(Y))}catch(me){ye(me)}},se=Y=>Y.done?ae(Y.value):Promise.resolve(Y.value).then(ce,he);se((w=w.apply(p,u)).next())});import{aa as Ja,a7 as qa,B as Ka,D as Xa,H as Za,$ as Qa,P as en,f as tn,r as an,i as nn,ad as on,X as ln,W as sn,Q as rn,a as dn,a8 as un,a9 as mn,ab as pn,am as cn,g as fn,N as c,O as gn}from"./element-plus-core-Zsm2lieN.js";import{w as vn,ab as Ie,ad as P,g as x,aF as Ve,a5 as bn,a9 as f,l as y,s as o,aH as d,i as l,F as A,af as K,j as X,r as k,k as U,am as I,Z as Ct,aJ as yn,aI as hn,aK as Ue}from"./vue-chunks-DUFRzBE-.js";import{b as wn}from"./index-DOXSIEEz.js";import{ac as H,a1 as G,a2 as Z,S as _n,at as Tn,X as et,ae as kn,t as Sn,w as In,a9 as Vn,a as Un}from"./index-D1qe8ein.js";import{i as Cn}from"./index-CY6pf4E_.js";import{i as Pt}from"./tauri-vendor-BBucQyPs.js";import"./utility-vendor-CJEvTjgX.js";import"./element-plus-icons-C2Oa2E_i.js";import"./iconify-vendor-DPs8vxWM.js";const O=(p,u,w)=>S(null,null,function*(){if(!_n()&&!(yield Tn()))return et(u,"skipped"),null;try{const ae=w?yield Pt(p,{input:w}):yield Pt(p);return et(u,"tauri"),ae}catch(ae){throw et(u,"tauri"),new Error(kn(ae))}}),j=p=>{const u=Sn();if(!u)throw new Error("当前用户未登录，无法操作证明材料");return M(C({},p),{userId:u})},xt=p=>S(null,null,function*(){if(H()){const u=yield G.post({url:"/proof-documents",data:j(p)});return(u==null?void 0:u.data)||u}return Z(yield O("proof_create_draft","proof_create_draft",j(p)),"proof_create_draft")}),Dt=(p,u)=>S(null,null,function*(){if(H()){const w=yield G.put({url:`/proof-documents/${p}`,data:j(u)});return(w==null?void 0:w.data)||w}return Z(yield O("proof_update_draft","proof_update_draft",C({id:p},j(u))),"proof_update_draft")}),Pn=p=>S(null,null,function*(){if(H()){const u=yield G.post({url:`/proof-documents/${p}/issue`,data:j({id:p})});return(u==null?void 0:u.data)||u}return Z(yield O("proof_issue","proof_issue",j({id:p})),"proof_issue")}),xn=(p,u)=>S(null,null,function*(){if(H()){const w=yield G.post({url:`/proof-documents/${p}/void`,data:j({id:p,reason:u})});return(w==null?void 0:w.data)||w}return Z(yield O("proof_void","proof_void",j({id:p,reason:u})),"proof_void")}),Dn=p=>S(null,null,function*(){if(H()){const u=yield G.get({url:"/proof-documents",params:p});return(u==null?void 0:u.data)||u}return Z(yield O("proof_list","proof_list",{page:p.page,pageSize:p.pageSize,status:p.status,proofType:p.proofType,keyword:p.keyword}),"proof_list")}),$n=p=>S(null,null,function*(){if(H()){const u=yield G.post({url:`/proof-documents/${p}/export`,data:j({id:p})});return(u==null?void 0:u.data)||u}return Z(yield O("proof_record_export","proof_record_export",j({id:p})),"proof_record_export")}),An=p=>S(null,null,function*(){if(H()){const u=yield G.post({url:`/proof-documents/${p}/print`,data:j({id:p})});return(u==null?void 0:u.data)||u}return Z(yield O("proof_record_print","proof_record_print",j({id:p})),"proof_record_print")}),Nn=p=>S(null,null,function*(){if(H()){const u=yield G.get({url:"/proof-templates",params:p});return(u==null?void 0:u.data)||u||[]}return Z(yield O("proof_template_list","proof_template_list",{category:p==null?void 0:p.category,keyword:p==null?void 0:p.keyword}),"proof_template_list")}),Rn=p=>S(null,null,function*(){if(H()){const u=yield G.post({url:"/proof-templates",data:j(p)});return(u==null?void 0:u.data)||u}return Z(yield O("proof_template_create","proof_template_create",j(p)),"proof_template_create")}),jn=(p,u)=>S(null,null,function*(){if(H()){const w=yield G.put({url:`/proof-templates/${p}`,data:j(M(C({},u),{id:p}))});return(w==null?void 0:w.data)||w}return Z(yield O("proof_template_update","proof_template_update",M(C({},j(u)),{id:p})),"proof_template_update")}),En=p=>S(null,null,function*(){if(H()){yield G.delete({url:`/proof-templates/${p}`});return}yield O("proof_template_delete","proof_template_delete",{id:p})}),$t=p=>S(null,null,function*(){if(H()){const u=yield G.post({url:"/proof-templates/render",data:p});return(u==null?void 0:u.data)||u}return Z(yield O("proof_template_render","proof_template_render",p),"proof_template_render")}),Fn="/smart/assets/party-organization-stamp-Bx7lYYS-.png",zn="/smart/assets/village-committee-stamp-BrU6EkO9.png",Mn={class:"utility-tools-page"},Bn={key:0,class:"editor-layout"},Ln={class:"editor-panel"},Hn={class:"template-row"},Gn={class:"toolbar-actions"},On={class:"grid-2"},Yn={class:"usage-unit-panel"},Wn={class:"usage-unit-toolbar"},Jn={class:"usage-unit-list"},qn={key:0,class:"usage-unit-empty"},Kn={class:"usage-unit-meta"},Xn={class:"usage-unit-bind"},Zn={class:"stamp-enable-row"},Qn={class:"stamp-config-panel"},eo={class:"stamp-config-card"},to={class:"stamp-config-name"},ao={class:"stamp-config-card"},no={class:"stamp-config-name"},oo={class:"grid-2"},io={class:"preview-panel print-area"},lo={class:"preview-toolbar no-print"},so={class:"preview-title"},ro={class:"preview-toolbar-actions"},uo={class:"notice-title"},mo={class:"notice-body"},po={class:"salutation"},co=["innerHTML"],fo={key:0,class:"item"},go={key:1,class:"item"},vo=["innerHTML"],bo=["innerHTML"],yo=["innerHTML"],ho={class:"contact"},wo={class:"signature"},_o={class:"signature-slot signature-slot-left"},To={key:0,class:"signature-block signature-block-left"},ko={class:"signature-name"},So=["src","alt"],Io={class:"signature-slot signature-slot-right"},Vo={key:0,class:"signature-block signature-block-right"},Uo={class:"signature-name"},Co=["src","alt"],Po={class:"signature-row signature-date-row"},xo={class:"signature-slot signature-slot-right"},Do={class:"signature-block signature-block-right signature-date"},$o={key:0,class:"attachments"},Ao={key:1,class:"editor-layout"},No={class:"editor-panel"},Ro={class:"proof-subtabs"},jo={class:"template-row"},Eo={class:"toolbar-actions"},Fo={class:"grid-2"},zo={class:"proof-subject-list"},Mo={class:"proof-subject-header"},Bo={class:"grid-2"},Lo={class:"grid-2"},Ho={class:"proof-content-actions"},Go={class:"grid-2"},Oo={class:"toolbar-actions"},Yo={key:0,class:"proof-current-meta"},Wo={key:0},Jo={key:1},qo={key:2},Ko={class:"proof-ledger-filter"},Xo={class:"preview-panel print-area"},Zo={class:"notice-title"},Qo={class:"notice-body proof-body"},ei=["innerHTML"],ti={class:"signature proof-signature"},ai={class:"signature-row"},ni={class:"signature-slot signature-slot-right"},oi={class:"signature-block signature-block-right"},ii={class:"signature-name"},li=["src","alt"],si={class:"signature-row signature-date-row"},ri={class:"signature-slot signature-slot-right"},di={class:"signature-block signature-block-right signature-date"},ui={key:0,class:"proof-document-no"},mi={key:2,class:"editor-layout"},pi={class:"editor-panel"},ci={class:"image-editor-list"},fi={class:"image-editor-header"},gi={class:"image-editor-title"},vi={class:"image-upload-box"},bi=["onChange"],yi=["src","alt"],hi={key:1,class:"image-upload-empty"},wi={class:"preview-panel print-area"},_i={class:"preview-toolbar no-print"},Ti={class:"preview-title"},ki={class:"preview-toolbar-actions"},Si={class:"image-paper-frame"},Ii=["src","alt"],Vi={key:0,class:"image-paper-caption"},Ui={key:0,class:"image-paper-empty"},Ci=vn({__name:"index",setup(p){const u={templates:"utilityTools.noticeTemplates.v2",proofTemplates:"utilityTools.proofTemplates.v1",stampAssets:"utilityTools.noticeStampAssets.v1"},w=["村委会","社区服务中心","卫生院","派出所","民政办公室"],ae=["一","二","三","四","五","六","七","八","九","十"],ye=()=>({meetingTitle:"关于召开党员大会的通知",salutation:"各位党员同志：",intro:"为深入学习贯彻上级党组织有关要求，研究近期支部重点工作，经党支部委员会研究，决定召开党员大会，现将有关事项通知如下：",meetingDate:"2026-05-08",meetingStartTime:"09:00",meetingPlace:"村委会二楼党员活动室",participants:`党支部全体党员。
入党积极分子、发展对象可列席会议。`,agenda:`学习上级党组织有关文件精神。
听取党支部近期工作报告。
研究党员发展和组织生活有关事项。
部署下一阶段党建重点工作。`,notes:`无特殊情况不得缺席，确需请假的须提前向党支部书记履行请假手续。
请全体参会人员提前10分钟到场签到，并佩戴党员徽章。
请自带学习记录本和相关会议资料。`,contact:"联系人：组织委员，电话：77446064",notificationDate:"2026年5月6日",attachments:"附件：党员大会会议议程",enableStamp:!1}),ce=()=>`proof-subject-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,he=()=>({localId:ce(),residentId:null,name:"",gender:"",idCard:"",phone:"",address:"",villageGroup:""}),se=()=>({proofType:"证明",subjectResidentId:null,subjectName:"",subjectIdCard:"",subjectPhone:"",subjectAddress:"",subjectItems:[he()],content:`兹证明：张三，性别：男，身份证号：110011198810121237，家庭住址：朝阳区幸福街道88号。
张小三，性别：男，身份证号：110011201512301115，家庭住址：朝阳区幸福街道88号。
二人为父子关系。特此证明，情况属实。`,issuingUnit:"朝阳区幸福居委会",plannedIssuedAt:new Date().toISOString().slice(0,10),stampType:"villageResident",stampEnabled:!0}),Y=[{id:"builtin-notice-party-meeting",name:"会议通知",updatedAt:"内置模板",builtin:!0,form:ye(),selectedUsageUnits:["中共朝阳区幸福居委会支部委员会","朝阳区幸福居委会"]}],me=[{id:"builtin-proof-document",name:"常用证明模板",updatedAt:"内置模板",builtin:!0,form:se()}],g=Ie(ye()),W=P("meetingNotice"),re=P(""),ne=P(""),E=P([]),F=P(""),J=P(""),z=P([]),oe=P([]),Ee=P(!1),Fe=P(),ze=P(),Me=P(),Ce=P([]),q=P(["村委会"]),Pe=P(""),fe=P(!1),V=Ie({party:{url:"",fileName:"",source:"builtin"},villageResident:{url:"",fileName:"",source:"builtin"}}),Q=Ie([{id:"meeting-image-1",fileName:"",url:"",caption:""},{id:"meeting-image-2",fileName:"",url:"",caption:""}]),ge=P("create"),s=Ie(se()),h=P(null),ve=P(!1),ie=P(!1),Be=P(!1),tt=P([]),xe=P(0),de=Ie({page:1,pageSize:20,status:"",keyword:""}),Le=t=>String(t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),At=t=>String(t!=null?t:""),we=t=>{const e=At(t);return e?e.startsWith("db-")?{source:"db",id:e.slice(3)}:e.startsWith("local-")?{source:"local",id:e.slice(6)}:{source:"local",id:e}:{source:"",id:""}},Nt=()=>{try{const t=window.localStorage.getItem(u.templates),e=t?JSON.parse(t):[],a=new Map;Y.forEach(n=>{a.set(n.id,M(C({},n),{form:C({},n.form),selectedUsageUnits:[...n.selectedUsageUnits]}))}),(Array.isArray(e)?e:[]).forEach(n=>{n!=null&&n.id&&(Y.some(r=>r.id===n.id)||a.set(String(n.id),M(C({},n),{builtin:!1})))}),E.value=Array.from(a.values())}catch(t){E.value=Y.map(e=>M(C({},e),{form:C({},e.form),selectedUsageUnits:[...e.selectedUsageUnits]}))}},be=t=>M(C({},t),{proofType:String(t.proofType||"").trim()||"证明",subjectItems:(Array.isArray(t.subjectItems)?t.subjectItems:[]).map(e=>M(C(C({},he()),e),{localId:ce(),villageGroup:String(e.villageGroup||"")}))}),Rt=()=>{try{const t=window.localStorage.getItem(u.proofTemplates),e=t?JSON.parse(t):[],a=new Map;me.forEach(n=>{a.set(n.id,M(C({},n),{form:be(n.form)}))}),(Array.isArray(e)?e:[]).forEach(n=>{!(n!=null&&n.id)||!(n!=null&&n.name)||!(n!=null&&n.form)||me.some(r=>r.id===n.id)||a.set(n.id,M(C({},n),{form:be(n.form)}))}),z.value=Array.from(a.values())}catch(t){console.error("读取证明模板失败:",t),z.value=me.map(e=>M(C({},e),{form:be(e.form)}))}},De=()=>S(null,null,function*(){Ee.value=!0;try{const t=yield Nn();oe.value=t||[]}catch(t){console.error("加载数据库证明模板失败:",t),oe.value=[]}finally{Ee.value=!1}}),jt=t=>S(null,null,function*(){const e=oe.value.find(a=>String(a.id)===t);if(!e)return!1;try{const a=++xe.value,n=yield $t({templateId:e.id,subjectItems:s.subjectItems.map(qe),family:_t(),customFields:{issuingUnit:s.issuingUnit||"",proofType:s.proofType||""}});return a!==xe.value||(s.content=n.fullContent,ie.value=!1,s.issuingUnit=e.issuingUnit||"村委会",s.stampEnabled=e.stampEnabled,s.stampType=e.stampType||"villageResident",F.value=e.name),!0}catch(a){return console.error("渲染模板失败:",a),c.error("模板渲染失败"),!1}}),Et=()=>{var t,e,a,n,r,m;try{const T=window.localStorage.getItem(u.stampAssets),b=T?JSON.parse(T):{};V.party.url=String(((t=b==null?void 0:b.party)==null?void 0:t.url)||""),V.party.fileName=String(((e=b==null?void 0:b.party)==null?void 0:e.fileName)||""),V.party.source=((a=b==null?void 0:b.party)==null?void 0:a.source)==="custom"?"custom":"builtin",V.villageResident.url=String(((n=b==null?void 0:b.villageResident)==null?void 0:n.url)||""),V.villageResident.fileName=String(((r=b==null?void 0:b.villageResident)==null?void 0:r.fileName)||""),V.villageResident.source=((m=b==null?void 0:b.villageResident)==null?void 0:m.source)==="custom"?"custom":"builtin"}catch(T){V.party.url="",V.party.fileName="",V.party.source="builtin",V.villageResident.url="",V.villageResident.fileName="",V.villageResident.source="builtin"}},He=()=>{const t=E.value.filter(e=>!e.builtin);window.localStorage.setItem(u.templates,JSON.stringify(t))},Ge=()=>{const t=z.value.filter(e=>!e.builtin);window.localStorage.setItem(u.proofTemplates,JSON.stringify(t))},at=()=>{window.localStorage.setItem(u.stampAssets,JSON.stringify({party:C({},V.party),villageResident:C({},V.villageResident)}))},nt=t=>new Promise((e,a)=>{const n=new Image;n.onerror=()=>a(new Error("印章图片解析失败")),n.onload=()=>{const r=document.createElement("canvas"),m=1063;r.width=m,r.height=m;const T=r.getContext("2d",{willReadFrequently:!0});if(!T){a(new Error("浏览器不支持印章处理"));return}const b=Math.min(m/n.width,m/n.height),v=n.width*b,$=n.height*b,B=(m-v)/2,ue=(m-$)/2;T.clearRect(0,0,m,m),T.drawImage(n,B,ue,v,$);const le=T.getImageData(0,0,m,m),ee=le.data;for(let te=0;te<ee.length;te+=4){const Se=ee[te],Re=ee[te+1],N=ee[te+2],je=ee[te+3];if(je){if(Se>=242&&Re>=242&&N>=242){ee[te+3]=0;continue}Se>=220&&Re>=220&&N>=220&&(ee[te+3]=Math.round(je*.28))}}T.putImageData(le,0,0),e(r.toDataURL("image/png"))},n.src=t}),ot=(t,e,a)=>S(null,null,function*(){if(!V[t].url)try{V[t].url=yield nt(e),V[t].fileName=a,V[t].source="builtin"}catch(n){console.error("加载内置印章失败:",n)}}),Ft=()=>S(null,null,function*(){yield ot("party",Fn,"党组织印章.png"),yield ot("villageResident",zn,"村委章.png"),at()}),zt=t=>{const e=String(t||"").trim().match(/^(\d{4})年(\d{1,2})月(\d{1,2})日$/);if(!e)return"";const[,a,n,r]=e,m=new Date(Number(a),Number(n)-1,Number(r));if(Number.isNaN(m.getTime()))return"";m.setDate(m.getDate()+1);const T=m.getFullYear(),b=String(m.getMonth()+1).padStart(2,"0"),v=String(m.getDate()).padStart(2,"0");return`${T}-${b}-${v}`},it=()=>`notice-template-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,lt=t=>{Object.assign(g,t)},Mt=t=>t.replace(/^（[一二三四五六七八九十]+）\s*/,"").trim(),Bt=t=>t<ae.length?`（${ae[t]}）`:`（${t+1}）`,Oe=t=>String(t||"").split(/\r?\n/).map(e=>Mt(e)).filter(Boolean).map((e,a)=>`<p class="item">${Bt(a)}${Le(e)}</p>`).join(""),Lt=x(()=>String(g.intro||"").split(/\r?\n/).map(t=>`<p>${Le(t)||"&nbsp;"}</p>`).join("")),$e=t=>{if(!t)return"";const[e,a,n]=t.split("-").map(Number);return!e||!a||!n?"":`${e}年${a}月${n}日`},Ht=t=>{if(!t)return"";const e=new Date(`${t}T00:00:00`);return Number.isNaN(e.getTime())?"":["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][e.getDay()]},Gt=t=>{if(!t)return"";const e=Number(t.split(":")[0]);return e<12?"上午":e<18?"下午":"晚上"},Ye=x(()=>{const t=$e(g.meetingDate),e=Ht(g.meetingDate),a=Gt(g.meetingStartTime),n=g.meetingStartTime?`${a}${g.meetingStartTime}`:"";return`${t}${e?`（${e}）`:""}${n}`.trim()}),st=x(()=>W.value==="meetingNotice"?"会议通知":W.value==="proofDocument"?"证明材料":W.value==="meetingImage"?"会议图片":"实用工具"),rt=x(()=>Q.filter(t=>t.url)),Ot=t=>{const e=String(t||"").replace(/\r/g,""),a=e.split(`
`).filter(b=>b.trim());if(a.length>1)return a;const n=a[0]||e;if(!n.trim())return["会议通知"];if(n.length<=16)return[n];const r=(b,v)=>{const $=["，","、","暨","和","关于","通知"];let B=v;return $.forEach(ue=>{const le=b.indexOf(ue,Math.max(0,v-4));le>0&&Math.abs(le+1-v)<Math.abs(B-v)&&(B=ue.length>1?le+ue.length:le+1)}),Math.min(Math.max(B,6),b.length-6)};if(n.length<=28){const b=r(n,Math.round(n.length/2));return[n.slice(0,b),n.slice(b)]}const m=r(n,Math.round(n.length/3)),T=r(n,Math.round(n.length*2/3));return[n.slice(0,m),n.slice(m,T),n.slice(T)].filter(Boolean)},Yt=x(()=>Ot(g.meetingTitle)),Wt=x(()=>g.meetingTitle.replace(/\s/g,"")==="证明"),D=x(()=>{var t,e;return((t=h.value)==null?void 0:t.status)==="issued"||((e=h.value)==null?void 0:e.status)==="voided"}),Jt=x(()=>String(s.content||"").split(/\r?\n/).map(t=>`<p>${Le(t)||"&nbsp;"}</p>`).join("")),qt=x(()=>s.proofType.trim()||"证明"),Kt=x(()=>{var a;const e=(((a=h.value)==null?void 0:a.issuedAt)||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(e)?$e(e):/^\d{4}-\d{2}-\d{2}$/.test(s.plannedIssuedAt)?$e(s.plannedIssuedAt):$e(new Date().toISOString().slice(0,10))}),dt=x(()=>s.stampEnabled?s.stampType==="party"?V.party.url:s.stampType==="villageResident"?V.villageResident.url:"":""),ut=x(()=>Oe(g.participants)),mt=x(()=>Oe(g.agenda)),pt=x(()=>Oe(g.notes)),Xt=x(()=>!!(Ye.value||g.meetingPlace.trim())),Zt=x(()=>!!ut.value),Qt=x(()=>!!mt.value),ea=x(()=>!!pt.value),ta=t=>String(t||"").replace(/\s/g,"").replace(/[（）()【】\[\]《》<>“”"']/g,"").trim(),ct=t=>{const e=ta(t);return e?/支委会|支部委员会|党委会|党委|党支部|总支委员会|总支部委员会/.test(e)?"party":/居委|村委|居民委员会|村民委员会|社区居民委员会|社区委员会|社区/.test(e)?"villageResident":"none":"none"},aa=t=>{const e=ct(t);return e==="party"?"自动绑定：党组织印章":e==="villageResident"?"自动绑定：村/居委会印章":"未识别印章类型：请在单位名称中包含党支部、党委、村委、居委或社区"},ft=t=>V[t].fileName||(t==="party"?"党组织印章":"村/居委会印章"),Ae=t=>{const e=ct(t);return{name:t,stampUrl:g.enableStamp?e==="party"?V.party.url:e==="villageResident"?V.villageResident.url:"":""}},na=x(()=>{const t=q.value.filter(Boolean);if(t.length<=1)return[{left:null,right:t[0]?Ae(t[0]):null}];const e=[];for(let a=0;a<t.length;a+=2){const n=t[a]||"",r=t[a+1]||"";r?e.push({left:Ae(n),right:Ae(r)}):e.push({left:null,right:Ae(n)})}return e}),gt=t=>{const e=new Map;return(Array.isArray(t)?t:[]).forEach(a=>{const n=String((a==null?void 0:a.value)||(a==null?void 0:a.label)||"").trim();!n||e.has(n)||e.set(n,{label:n,value:n})}),Array.from(e.values())},oa=()=>S(null,null,function*(){try{const t=yield In("使用单位");let e=gt((t==null?void 0:t.data)||[]);if(!e.length){const a=yield wn({category:"使用单位",include_all:1});e=gt((a==null?void 0:a.data)||[])}Ce.value=e.length?e:w.map(a=>({label:a,value:a}))}catch(t){console.error("加载使用单位字典失败:",t),Ce.value=w.map(e=>({label:e,value:e}))}}),ia=()=>{const t=Pe.value.trim();if(!t){c.warning("请先选择一个使用单位");return}if(q.value.includes(t)){c.warning("该使用单位已添加");return}q.value.push(t),Pe.value=""},la=t=>{q.value=q.value.filter(e=>e!==t)},sa=t=>new Promise((e,a)=>{const n=new FileReader;n.onerror=()=>a(new Error("印章文件读取失败")),n.onload=()=>{nt(String(n.result||"")).then(e).catch(a)},n.readAsDataURL(t)}),vt=(t,e)=>S(null,null,function*(){var r;const a=t.target,n=(r=a.files)==null?void 0:r[0];if(n){try{const m=yield sa(n);V[e].url=m,V[e].fileName=n.name.replace(/\.[^.]+$/,"")+".png",V[e].source="custom",at(),c.success(e==="party"?"党组织印章已更新":"村/居委会印章已更新"),a.value=""}catch(m){console.error("印章处理失败:",m),c.error("印章处理失败，请重新上传清晰图片")}a.value=""}}),bt=(t,e)=>{if(!t.type.startsWith("image/")){c.warning("仅支持上传图片文件");return}const a=new FileReader;a.onload=()=>{Q[e].url=String(a.result||""),Q[e].fileName=t.name},a.readAsDataURL(t)},ra=(t,e)=>{var r;const a=t.target,n=(r=a.files)==null?void 0:r[0];n&&(bt(n,e),a.value="")},yt=t=>{Q[t].url="",Q[t].fileName="",Q[t].caption=""},da=()=>{Q.forEach((t,e)=>yt(e))},ht=t=>t==="draft"?"草稿":t==="issued"?"已出具":t==="voided"?"已作废":t||"-",ua=t=>t==="issued"?"success":t==="voided"?"danger":"info",We=t=>M(C({},t),{name:String(t.name||"").trim(),gender:String(t.gender||"").trim(),idCard:String(t.idCard||"").trim(),phone:String(t.phone||"").trim(),address:String(t.address||"").trim(),villageGroup:String(t.villageGroup||"").trim()}),Je=()=>s.subjectItems.map(We).filter(t=>t.name),wt=(t,e)=>{if(!t)return;const a=We(t);if(!(!a.name&&!a.idCard&&!a.phone&&!a.address))return{name:a.name||void 0,idCard:a.idCard||void 0,phone:a.phone||void 0,address:a.address||void 0,relation:e}},_t=()=>{const t=s.subjectItems.map(We);return{father:wt(t[1],"父亲"),mother:wt(t[2],"母亲")}},ma=()=>{const t=we(J.value);if(t.source!=="db"||!t.id)return null;const e=parseInt(t.id,10);return Number.isFinite(e)&&oe.value.find(a=>a.id===e)||null},_e=()=>{var e;const t=Je()[0];s.subjectResidentId=(e=t==null?void 0:t.residentId)!=null?e:null,s.subjectName=(t==null?void 0:t.name)||"",s.subjectIdCard=(t==null?void 0:t.idCard)||"",s.subjectPhone=(t==null?void 0:t.phone)||"",s.subjectAddress=(t==null?void 0:t.address)||""},pa=t=>{const e=[t.name];return t.gender&&e.push(`性别：${t.gender}`),t.idCard&&e.push(`身份证号：${t.idCard}`),t.address&&e.push(`家庭住址：${t.address}`),`${e.join("，")}。`},ca=()=>{const t=Je(),e=t.map(pa),a=t.length>1?"上述人员关系情况属实。":"该居民情况属实。";return["兹证明：",...e,`${a}特此证明。`].filter(n=>n.trim()).join(`
`)},fa=(t=!1)=>S(null,null,function*(){_e();const e=ma();if(!e)return!1;if(D.value||!t&&ie.value)return!0;const a=++xe.value;try{const n=yield $t({templateId:e.id,subjectItems:s.subjectItems.map(qe),family:_t(),customFields:{issuingUnit:s.issuingUnit||"",proofType:s.proofType||""}});return a!==xe.value||(s.content=n.fullContent,ie.value=!1),!0}catch(n){return console.error("重新渲染证明模板失败:",n),c.error("模板渲染失败"),!0}}),Te=(t=!1)=>S(null,null,function*(){(yield fa(t))||(_e(),!D.value&&(!t&&ie.value||(s.content=ca(),ie.value=!1)))}),ga=()=>{Te(!0)},ke=()=>{Te(!0)},qe=t=>({residentId:t.residentId,name:String(t.name||"").trim(),gender:String(t.gender||"").trim(),idCard:String(t.idCard||"").trim(),phone:String(t.phone||"").trim(),address:String(t.address||"").trim(),villageGroup:String(t.villageGroup||"").trim()}),va=t=>{var e;return{localId:ce(),residentId:(e=t.residentId)!=null?e:null,name:t.name||"",gender:t.gender||"",idCard:t.idCard||"",phone:t.phone||"",address:t.address||"",villageGroup:t.villageGroup||""}},ba=t=>{var e;return Array.isArray(t.subjectItems)&&t.subjectItems.length?t.subjectItems.map(va):[{localId:ce(),residentId:(e=t.subjectResidentId)!=null?e:null,name:t.subjectName||"",gender:"",idCard:t.subjectIdCard||"",phone:t.subjectPhone||"",address:t.subjectAddress||"",villageGroup:""}]},ya=()=>{s.subjectItems.push(he()),Te(!0)},ha=t=>{s.subjectItems.length<=1||(s.subjectItems.splice(t,1),Te(!0))},wa=t=>M(C({},t),{value:`${t.name||""}${t.idCard||t.id_card?`（${t.idCard||t.id_card}）`:""}`,name:t.name||"",gender:t.gender||"",idCard:t.idCard||t.id_card||"",phone:t.phoneNumber||t.phone_number||t.phone||"",address:t.address||t.Home_address||t.homeAddress||"",villageGroup:t.villageGroup||t.village_group||""}),_a=(t,e)=>{const a=t.trim();if(!a){e([]);return}Cn({pageNum:1,pageSize:10,name:a}).then(n=>{const r=Array.isArray(n==null?void 0:n.data)?n.data:[];e(r.map(wa))}).catch(()=>e([]))},Ta=(t,e)=>{const a=s.subjectItems[t];a&&(a.residentId=Number(e.id)||null,a.name=e.name||"",a.gender=e.gender||"",a.idCard=e.idCard||"",a.phone=e.phone||"",a.address=e.address||"",a.villageGroup=e.villageGroup||"",Te(!0))},ka=()=>{Object.assign(s,se()),h.value=null,ge.value="create",ie.value=!1},Tt=t=>{Object.assign(s,be(t)),s.proofType=s.proofType.trim()||"证明",_e(),ie.value=!0},Ne=t=>{var e,a;s.proofType=t.proofType||"证明",s.subjectResidentId=(e=t.subjectResidentId)!=null?e:null,s.subjectName=t.subjectName,s.subjectIdCard=t.subjectIdCard,s.subjectPhone=t.subjectPhone,s.subjectAddress=t.subjectAddress,s.subjectItems=ba(t),s.content=t.content,s.issuingUnit=t.issuingUnit,s.plannedIssuedAt=t.plannedIssuedAt||((a=t.issuedAt)==null?void 0:a.slice(0,10))||"",s.stampType=t.stampType||"villageResident",s.stampEnabled=!!t.stampEnabled,ie.value=!0},Ke=()=>(_e(),s.proofType=s.proofType.trim(),{proofType:s.proofType,subjectResidentId:s.subjectResidentId,subjectName:s.subjectName,subjectIdCard:s.subjectIdCard,subjectPhone:s.subjectPhone,subjectAddress:s.subjectAddress,subjectItems:Je().map(qe),content:s.content,issuingUnit:s.issuingUnit,plannedIssuedAt:s.plannedIssuedAt,stampType:s.stampType,stampEnabled:s.stampEnabled}),kt=()=>(_e(),s.subjectName.trim()?s.content.trim()?s.proofType.trim()?s.issuingUnit.trim()?!0:(c.warning("请填写出具单位"),!1):(c.warning("请填写材料标题"),!1):(c.warning("请填写证明正文"),!1):(c.warning("请填写被证明人"),!1)),Sa=()=>S(null,null,function*(){var t;if(kt()){if(D.value){c.warning("已出具或已作废证明不能修改");return}ve.value=!0;try{const e=Ke(),a=((t=h.value)==null?void 0:t.status)==="draft"?yield Dt(h.value.id,e):yield xt(e);h.value=a,Ne(a),c.success("证明草稿已保存"),pe()}catch(e){c.error((e==null?void 0:e.message)||"保存证明草稿失败")}finally{ve.value=!1}}}),Ia=()=>S(null,null,function*(){if(kt()){ve.value=!0;try{let t=h.value;!t||t.status!=="draft"?t=yield xt(Ke()):t=yield Dt(t.id,Ke());const e=yield Pn(t.id);h.value=e,Ne(e),c.success(`证明已正式出具：${e.documentNo}`),pe()}catch(t){c.error((t==null?void 0:t.message)||"正式出具证明失败")}finally{ve.value=!1}}}),Va=()=>S(null,null,function*(){if(!(!h.value||h.value.status!=="issued"))try{const t=yield gn.prompt("请输入作废原因","作废证明",{confirmButtonText:"确认作废",cancelButtonText:"取消",inputType:"textarea",inputValidator:n=>!!String(n||"").trim()||"作废原因不能为空"}),e=String(t.value||"").trim(),a=yield xn(h.value.id,e);h.value=a,Ne(a),c.success("证明已作废"),pe()}catch(t){if(t==="cancel")return;c.error((t==null?void 0:t.message)||"作废证明失败")}}),pe=()=>S(null,null,function*(){Be.value=!0;try{const t=yield Dn({page:de.page,pageSize:de.pageSize,status:de.status||void 0,keyword:de.keyword||void 0});tt.value=t.data||[]}catch(t){c.error((t==null?void 0:t.message)||"读取证明台账失败")}finally{Be.value=!1}}),St=t=>{h.value=t,Ne(t),ge.value="create"},Ua=()=>S(null,null,function*(){const t=F.value.trim();if(!t){c.warning("请先输入模板名称");return}try{const e=s.proofType.trim()||"证明",a={name:t,category:e,bodyTemplate:s.content,headContent:"",tailContent:"",fieldConfigJson:"{}",stampEnabled:s.stampEnabled,stampType:s.stampType,issuingUnit:s.issuingUnit};yield Rn(a),c.success(`模板已保存到数据库：${t}`),De()}catch(e){console.warn("保存到数据库失败，降级到本地存储:",e);const a=z.value.find(r=>r.name===t),n={id:(a==null?void 0:a.id)||it(),name:t,updatedAt:new Date().toLocaleString("zh-CN",{hour12:!1}),form:be(s)};a?(z.value=z.value.map(r=>r.id===a.id?n:r),J.value="local-"+a.id,c.success(`已更新本地模板：${t}`)):(z.value.unshift(n),J.value="local-"+n.id,c.success(`模板已保存到本地：${t}`)),Ge()}}),Ca=()=>S(null,null,function*(){const t=we(J.value);if(!t.id){c.warning("请先选择模板");return}if(t.source==="db"){const e=parseInt(t.id,10),a=oe.value.find(r=>r.id===e);if(!a){c.warning("模板不存在");return}(yield jt(String(e)))&&(F.value=a.name,h.value=null,c.success(`已应用模板：${a.name}`))}else if(t.source==="local"){const e=z.value.find(a=>a.id===t.id);if(!e){c.warning("模板不存在");return}F.value=e.name,Tt(e.form),h.value=null,c.success(`已应用本地模板：${e.name}`)}}),Pa=()=>S(null,null,function*(){const t=we(J.value);if(!t.id){c.warning("请先选择需要覆盖的模板");return}if(t.source==="db"){const n=parseInt(t.id,10),r=oe.value.find(m=>m.id===n);if(!r){c.warning("模板不存在");return}if(r!=null&&r.isDefault){c.warning("系统预设模板不支持修改");return}try{yield jn(n,{id:n,name:F.value.trim()||r.name,category:r.category||s.proofType.trim()||"证明",headContent:r.headContent||"",bodyTemplate:s.content,tailContent:r.tailContent||"",fieldConfigJson:r.fieldConfigJson||"{}",stampEnabled:s.stampEnabled,stampType:s.stampType,issuingUnit:s.issuingUnit}),c.success("模板已更新"),De()}catch(m){c.error((m==null?void 0:m.message)||"更新模板失败")}return}const e=z.value.find(n=>n.id===t.id);if(!e){c.warning("模板不存在");return}if(e.builtin){c.warning("内置模板不支持直接覆盖，请另存为新模板");return}const a=F.value.trim()||e.name;e.name=a,e.updatedAt=new Date().toLocaleString("zh-CN",{hour12:!1}),e.form=be(s),F.value=a,Ge(),c.success(`已覆盖本地模板：${a}`)}),xa=()=>S(null,null,function*(){const t=we(J.value);if(!t.id){c.warning("请先选择要删除的模板");return}if(t.source==="db"){const a=parseInt(t.id,10),n=oe.value.find(r=>r.id===a);if(!n){c.warning("模板不存在");return}if(n!=null&&n.isDefault){c.warning("系统预设模板不支持删除");return}try{yield En(a),c.success("模板已删除"),J.value="",F.value="",De()}catch(r){c.error((r==null?void 0:r.message)||"删除模板失败")}return}const e=z.value.find(a=>a.id===t.id);if(!e){c.warning("模板不存在");return}if(e.builtin){c.warning("内置模板不支持删除");return}z.value=z.value.filter(a=>a.id!==t.id),Ge(),J.value="",F.value="",c.success(`已删除本地模板：${e.name}`)}),Da=()=>{Tt(se()),h.value=null,c.success("已恢复样例内容")},$a=t=>{var a;fe.value=!1;const e=Array.from(((a=t.dataTransfer)==null?void 0:a.files)||[]).filter(n=>n.type.startsWith("image/"));if(!e.length){c.warning("请拖入图片文件");return}e.slice(0,2).forEach((n,r)=>{const m=Q.findIndex(b=>!b.url),T=m>=0?m:r;T>=0&&T<Q.length&&bt(n,T)})},Aa=()=>{const t=re.value.trim();if(!t){c.warning("请先输入模板名称");return}const e=E.value.find(n=>n.name===t),a={id:(e==null?void 0:e.id)||it(),name:t,updatedAt:new Date().toLocaleString("zh-CN",{hour12:!1}),form:C({},g),selectedUsageUnits:[...q.value]};e?(E.value=E.value.map(n=>n.id===e.id?a:n),ne.value=e.id,c.success(`已更新模板：${t}`)):(E.value.unshift(a),ne.value=a.id,c.success(`模板已保存：${t}`)),He()},Na=()=>{const t=E.value.find(e=>e.id===ne.value);if(!t){c.warning("请先选择模板");return}re.value=t.name,lt(C({},t.form)),q.value=[...t.selectedUsageUnits||[]],c.success(`已应用模板：${t.name}`)},Ra=()=>{const t=E.value.find(a=>a.id===ne.value);if(!t){c.warning("请先选择需要覆盖的模板");return}if(t.builtin){c.warning("内置模板不支持直接覆盖，请另存为新模板");return}const e=re.value.trim()||t.name;t.name=e,t.updatedAt=new Date().toLocaleString("zh-CN",{hour12:!1}),t.form=C({},g),t.selectedUsageUnits=[...q.value],re.value=e,He(),c.success(`已覆盖模板：${e}`)},ja=()=>{const t=E.value.find(e=>e.id===ne.value);if(!t){c.warning("请先选择要删除的模板");return}if(t.builtin){c.warning("内置模板不支持删除");return}E.value=E.value.filter(e=>e.id!==t.id),He(),ne.value="",re.value="",c.success(`已删除模板：${t.name}`)},Ea=()=>{lt({meetingTitle:"关于召开党员大会的通知",salutation:"各位党员同志：",intro:"为深入学习贯彻上级党组织有关要求，研究近期支部重点工作，经党支部委员会研究，决定召开党员大会，现将有关事项通知如下：",meetingDate:"2026-05-08",meetingStartTime:"09:00",meetingPlace:"村委会二楼党员活动室",participants:`党支部全体党员。
入党积极分子、发展对象可列席会议。`,agenda:`学习上级党组织有关文件精神。
听取党支部近期工作报告。
研究党员发展和组织生活有关事项。
部署下一阶段党建重点工作。`,notes:`无特殊情况不得缺席，确需请假的须提前向党支部书记履行请假手续。
请全体参会人员提前10分钟到场签到，并佩戴党员徽章。
请自带学习记录本和相关会议资料。`,contact:"联系人：组织委员，电话：77446064",notificationDate:"2026年5月6日",attachments:"附件：党员大会会议议程",enableStamp:!1}),q.value=["中共朝阳区幸福居委会支部委员会","朝阳区幸福居委会"],c.success("已恢复样例内容")},Xe=(t=W.value)=>{var v;const e=t==="meetingImage"?Me.value:t==="proofDocument"?ze.value:Fe.value;if(!e){c.error("未找到可打印的预览内容");return}t==="proofDocument"&&h.value&&An(h.value.id).then($=>{h.value=$}).catch($=>{c.error(($==null?void 0:$.message)||"记录打印失败")});const a=t==="meetingImage"?`
    <style>
      @page {
        size: A4;
        margin: 5mm;
      }
      html, body {
        margin: 0;
        padding: 0;
        background: #fff;
      }
      .image-paper {
        width: 200mm;
        height: 287mm;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: #fff;
        display: grid;
        grid-template-rows: repeat(2, minmax(0, 1fr));
        gap: 6mm;
        overflow: hidden;
        page-break-inside: avoid;
        break-inside: avoid;
      }
      .image-paper-item {
        display: grid;
        justify-items: center;
        grid-template-rows: minmax(0, 1fr) auto;
        min-height: 0;
        overflow: hidden;
      }
      .image-paper-frame {
        width: 200mm;
        height: 100%;
        display: grid;
        place-items: center;
        overflow: hidden;
      }
      .image-paper-preview {
        width: 100%;
        height: 100%;
        max-width: 200mm;
        max-height: 138mm;
        object-fit: contain;
      }
      .image-paper-caption {
        width: 200mm;
        margin-top: 2mm;
        text-align: center;
        white-space: pre-wrap;
        word-break: break-word;
        overflow: hidden;
        font-family: "Times New Roman", FangSong, "仿宋", FangSong_GB2312, serif;
        font-size: 12pt;
        line-height: 14pt;
        max-height: 28pt;
      }
      .image-paper-empty {
        width: 200mm;
        min-height: 287mm;
        grid-row: 1 / span 2;
        display: grid;
        place-items: center;
        margin: 0 auto;
        color: #667085;
        font-size: 14pt;
      }
    </style>
  `:`
    <style>
      @page {
        size: A4;
        margin: ${t==="proofDocument"?"30mm":"20mm"} 27mm 25mm 27mm;
      }
      html, body {
        margin: 0;
        padding: 0;
        background: #fff;
      }
      body {
        color: #000;
      }
      .notice-paper {
        position: relative;
        width: 156mm;
        min-height: 252mm;
        margin: 0;
        padding: 0;
        background: #fff;
        color: #000;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        page-break-inside: avoid;
        break-inside: avoid;
      }
      .proof-paper {
        page: proof-document;
        justify-content: flex-start;
      }
      @page proof-document {
        size: A4;
        margin: 30mm 27mm 25mm 27mm;
      }
      .notice-title {
        margin: 0 0 8mm;
        text-align: center;
        font-family:
          "Times New Roman",
          "FZXiaoBiaoSong-B05S",
          "方正小标宋简体",
          "STZhongsong",
          serif;
        font-size: 22pt;
        line-height: 28pt;
        font-weight: 700;
      }
      .notice-title-line {
        display: block;
        white-space: pre-wrap;
      }
      .notice-body {
        width: 156mm;
        font-family: "Times New Roman", FangSong, "仿宋", FangSong_GB2312, serif;
        font-size: 16pt;
        line-height: 22pt;
      }
      .salutation {
        margin: 0 0 3mm;
      }
      .notice-body p {
        margin: 0 0 3mm;
        text-indent: 2em;
      }
      .notice-intro p {
        white-space: pre-wrap;
      }
      .item {
        margin: 0;
        text-indent: 2em;
      }
      .heading-level-1 {
        margin: 0 0 2mm;
        text-indent: 2em;
        font-family: "Times New Roman", SimHei, "黑体", sans-serif;
        font-size: 16pt;
        font-weight: 700;
      }
      .heading-level-2 {
        margin: 0 0 2mm;
        text-indent: 2em;
        font-family: "Times New Roman", KaiTi, "楷体", KaiTi_GB2312, serif;
        font-size: 16pt;
        font-weight: 700;
      }
      .heading-level-3,
      .heading-level-4 {
        margin: 0 0 2mm;
        text-indent: 2em;
        font-family: "Times New Roman", FangSong, "仿宋", FangSong_GB2312, serif;
        font-size: 16pt;
        font-weight: 700;
      }
      .contact {
        font-weight: 700;
      }
      .signature {
        --signature-indent: 3em;
        --signature-width: 16em;
        width: 156mm;
        margin-top: 10mm;
        font-family: "Times New Roman", FangSong, "仿宋", FangSong_GB2312, serif;
        font-size: 16pt;
        line-height: 24pt;
        page-break-inside: avoid;
        break-inside: avoid;
      }
      .signature-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: 24pt;
        page-break-inside: avoid;
        break-inside: avoid;
      }
      .signature-slot {
        min-width: 0;
        display: flex;
      }
      .signature-slot-left {
        justify-content: flex-start;
      }
      .signature-slot-right {
        justify-content: flex-end;
      }
      .signature-block {
        position: relative;
        width: calc(100% - var(--signature-indent));
        max-width: 18em;
        min-height: 24pt;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      .signature-block-left {
        margin-left: var(--signature-indent);
      }
      .signature-block-right {
        margin-right: var(--signature-indent);
        margin-left: auto;
      }
      .signature-date {
        margin-top: 0;
      }
      .signature-name {
        display: block;
        position: relative;
        z-index: 1;
        width: 100%;
        padding: 0 0.3em;
        white-space: normal;
        word-break: break-all;
        line-height: 24pt;
        text-align: center;
      }
      .signature-stamp {
        position: absolute;
        width: 45mm;
        height: 45mm;
        object-fit: contain;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-12deg);
        opacity: 0.58;
        mix-blend-mode: multiply;
        filter: saturate(1.12) contrast(1.04);
        pointer-events: none;
      }
      .attachments {
        margin-top: 7mm;
        width: 156mm;
        font-family: "Times New Roman", FangSong, "仿宋", FangSong_GB2312, serif;
        font-size: 16pt;
        line-height: 24pt;
        page-break-inside: avoid;
        break-inside: avoid;
      }
      .page-number {
        position: static;
        margin-top: 12mm;
        left: 0;
        width: 100%;
        text-align: center;
        font-family: SimSun, "宋体", serif;
        font-size: 9pt;
      }
      ${t==="proofDocument"?`
      .proof-document-no,
      .page-number {
        display: none !important;
      }
      `:""}
    </style>
  `,n=document.createElement("iframe");n.style.position="fixed",n.style.right="0",n.style.bottom="0",n.style.width="0",n.style.height="0",n.style.border="0",n.style.opacity="0",document.body.appendChild(n);const r=n.contentDocument||((v=n.contentWindow)==null?void 0:v.document),m=`
    <!doctype html>
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8" />
        <title>${t==="meetingImage"?"会议图片打印预览":t==="proofDocument"?"证明材料打印预览":"会议通知打印预览"}</title>
        ${a}
      </head>
      <body>
        ${e.outerHTML}
      </body>
    </html>
  `;if(!r||!n.contentWindow){n.remove(),c.error("打印组件初始化失败，请稍后重试");return}r.open(),r.write(m),r.close();const T=()=>{window.setTimeout(()=>{n.remove()},1e3)},b=n.contentWindow;b.onafterprint=T,window.setTimeout(()=>{b.focus(),b.print(),T()},300)},Fa=()=>`
  <style>
    @page {
      size: A4;
      margin: 5mm;
    }
    html, body {
      margin: 0;
      padding: 0;
      background: #fff;
    }
    .image-paper {
      width: 200mm;
      height: 287mm;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background: #fff;
      display: grid;
      grid-template-rows: repeat(2, minmax(0, 1fr));
      gap: 6mm;
      overflow: hidden;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .image-paper-item {
      display: grid;
      justify-items: center;
      grid-template-rows: minmax(0, 1fr) auto;
      min-height: 0;
      overflow: hidden;
    }
    .image-paper-frame {
      width: 200mm;
      height: 100%;
      display: grid;
      place-items: center;
      overflow: hidden;
    }
    .image-paper-preview {
      width: 100%;
      height: 100%;
      max-width: 200mm;
      max-height: 138mm;
      object-fit: contain;
    }
    .image-paper-caption {
      width: 200mm;
      margin-top: 2mm;
      text-align: center;
      white-space: pre-wrap;
      word-break: break-word;
      overflow: hidden;
      font-family: "Times New Roman", FangSong, "仿宋", FangSong_GB2312, serif;
      font-size: 12pt;
      line-height: 14pt;
      max-height: 28pt;
    }
    .image-paper-empty {
      width: 200mm;
      min-height: 287mm;
      grid-row: 1 / span 2;
      display: grid;
      place-items: center;
      margin: 0 auto;
      color: #667085;
      font-size: 14pt;
    }
  </style>
`,za=()=>`
  <style>
    @page {
      size: A4;
      margin: 20mm 27mm 25mm 27mm;
    }
    html, body {
      margin: 0;
      padding: 0;
      background: #fff;
    }
    body {
      color: #000;
    }
    .notice-paper {
      position: relative;
      width: 156mm;
      min-height: 252mm;
      margin: 0;
      padding: 0;
      background: #fff;
      color: #000;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .proof-paper {
      justify-content: flex-start;
    }
    .notice-title {
      margin: 0 0 8mm;
      text-align: center;
      font-family: "Times New Roman", "FZXiaoBiaoSong-B05S", "方正小标宋简体", "STZhongsong", serif;
      font-size: 22pt;
      line-height: 28pt;
      font-weight: 700;
    }
    .notice-title-line {
      display: block;
      white-space: pre-wrap;
    }
    .notice-body {
      width: 156mm;
      font-family: "Times New Roman", FangSong, "仿宋", FangSong_GB2312, serif;
      font-size: 16pt;
      line-height: 22pt;
    }
    .salutation {
      margin: 0 0 3mm;
    }
    .notice-body p {
      margin: 0 0 3mm;
      text-indent: 2em;
    }
    .notice-intro p {
      white-space: pre-wrap;
    }
    .item {
      margin: 0;
      text-indent: 2em;
    }
    .heading-level-1 {
      margin: 0 0 2mm;
      text-indent: 2em;
      font-family: "Times New Roman", SimHei, "黑体", sans-serif;
      font-size: 16pt;
      font-weight: 700;
    }
    .contact {
      font-weight: 700;
    }
    .signature {
      --signature-indent: 3em;
      --signature-width: 16em;
      width: 156mm;
      margin-top: 10mm;
      font-family: "Times New Roman", FangSong, "仿宋", FangSong_GB2312, serif;
      font-size: 16pt;
      line-height: 24pt;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .signature-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: 24pt;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .signature-slot {
      min-width: 0;
      display: flex;
    }
    .signature-slot-left {
      justify-content: flex-start;
    }
    .signature-slot-right {
      justify-content: flex-end;
    }
    .signature-block {
      position: relative;
      width: calc(100% - var(--signature-indent));
      max-width: 18em;
      min-height: 24pt;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .signature-block-left {
      margin-left: var(--signature-indent);
    }
    .signature-block-right {
      margin-right: var(--signature-indent);
      margin-left: auto;
    }
    .signature-date {
      margin-top: 0;
    }
    .signature-name {
      display: block;
      position: relative;
      z-index: 1;
      width: 100%;
      padding: 0 0.3em;
      white-space: normal;
      word-break: break-all;
      line-height: 24pt;
      text-align: center;
    }
    .signature-stamp {
      position: absolute;
      width: 45mm;
      height: 45mm;
      object-fit: contain;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(-12deg);
      opacity: 0.58;
      mix-blend-mode: multiply;
      filter: saturate(1.12) contrast(1.04);
      pointer-events: none;
    }
    .attachments {
      margin-top: 7mm;
      width: 156mm;
      font-family: "Times New Roman", FangSong, "仿宋", FangSong_GB2312, serif;
      font-size: 16pt;
      line-height: 24pt;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .page-number {
      position: static;
      margin-top: 12mm;
      left: 0;
      width: 100%;
      text-align: center;
      font-family: SimSun, "宋体", serif;
      font-size: 9pt;
    }
  </style>
`,Ze=(...e)=>S(null,[...e],function*(t=W.value){var $;const a=t==="meetingImage"?Me.value:t==="proofDocument"?ze.value:Fe.value;if(!a){c.error("未找到可导出的预览内容");return}const n=t==="meetingImage"?"会议图片":t==="proofDocument"?"证明材料":"会议通知",r=t==="meetingImage"?Fa():za(),m=`<!doctype html>
  <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="UTF-8" />
      <title>${n}</title>
      ${r}
    </head>
    <body>
      ${a.outerHTML}
    </body>
  </html>`,T=new Blob(["\uFEFF",m],{type:"application/msword"}),b=t==="proofDocument"&&(($=h.value)!=null&&$.documentNo)?`${n}-${h.value.documentNo}.doc`:`${n}-${new Date().toISOString().slice(0,10)}.doc`,v=yield Vn(T,b,{filters:[{name:"Word 文档",extensions:["doc"]},{name:"所有文件",extensions:["*"]}]});if(!v.canceled){if(!v.saved){c.error(v.error||"导出 Word 失败");return}if(t==="proofDocument"&&h.value)try{h.value=yield $n(h.value.id)}catch(B){c.error((B==null?void 0:B.message)||"记录导出失败");return}c.success(v.filePath?`Word 已导出：${v.filePath}`:"Word 已导出")}});return Ve(ne,t=>{const e=E.value.find(a=>a.id===t);re.value=(e==null?void 0:e.name)||""}),Ve(J,t=>{const e=we(t);if(!e.id){F.value="";return}if(e.source==="db"){const a=parseInt(e.id,10),n=oe.value.find(r=>r.id===a);F.value=(n==null?void 0:n.name)||""}else if(e.source==="local"){const a=z.value.find(n=>n.id===e.id);F.value=(a==null?void 0:a.name)||""}}),Ve(W,(t,e)=>{t==="meetingImage"&&e!=="meetingImage"&&da(),t==="proofDocument"&&pe(),e==="meetingImage"&&t!=="meetingImage"&&(fe.value=!1)}),Ve(ge,t=>{t==="ledger"&&pe()}),Ve(()=>g.notificationDate,(t,e)=>{if(!t||t===e)return;const a=zt(t);a&&(g.meetingDate=a)}),bn(()=>S(null,null,function*(){Nt(),Rt(),Et(),yield Ft(),oa(),De()})),(t,e)=>{const a=qa,n=Ja,r=Za,m=Xa,T=en,b=Qa,v=tn,$=Ka,B=an,ue=nn,le=on,ee=sn,te=ln,Se=rn,Re=dn,N=mn,je=pn,Ma=un,Ba=fn,La=cn;return f(),y("div",Mn,[o(Ba,{class:"editor-card no-print",shadow:"never"},{header:d(()=>e[40]||(e[40]=[l("div",{class:"card-header"},[l("div",null,[l("div",{class:"card-title"},"实用工具"),l("div",{class:"card-subtitle"}," 当前支持会议通知和会议图片，后续可继续扩展其他实用工具并与页面标签联动。 ")])],-1)])),default:d(()=>{var It;return[o(n,{modelValue:W.value,"onUpdate:modelValue":e[0]||(e[0]=i=>W.value=i),class:"tool-tabs no-print"},{default:d(()=>[o(a,{label:"会议通知",name:"meetingNotice"}),o(a,{label:"会议图片",name:"meetingImage"}),o(a,{label:"证明材料",name:"proofDocument"})]),_:1},8,["modelValue"]),W.value==="meetingNotice"?(f(),y("div",Bn,[l("div",Ln,[e[53]||(e[53]=l("div",{class:"section-title"},"模板管理",-1)),o($,{"label-position":"top"},{default:d(()=>[l("div",Hn,[o(m,{label:"模板名称"},{default:d(()=>[o(r,{modelValue:re.value,"onUpdate:modelValue":e[1]||(e[1]=i=>re.value=i),placeholder:"例如：乡镇干部大会模板"},null,8,["modelValue"])]),_:1}),o(m,{label:"已保存模板"},{default:d(()=>[o(b,{modelValue:ne.value,"onUpdate:modelValue":e[2]||(e[2]=i=>ne.value=i),clearable:"",placeholder:"请选择模板"},{default:d(()=>[(f(!0),y(A,null,K(E.value,i=>(f(),X(T,{key:i.id,label:i.name,value:i.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),l("div",Gn,[o(v,{type:"primary",onClick:Aa},{default:d(()=>e[41]||(e[41]=[k("保存为模板")])),_:1}),o(v,{onClick:Na},{default:d(()=>e[42]||(e[42]=[k("应用模板")])),_:1}),o(v,{onClick:Ra},{default:d(()=>e[43]||(e[43]=[k("覆盖当前模板")])),_:1}),o(v,{type:"danger",plain:"",onClick:ja},{default:d(()=>e[44]||(e[44]=[k("删除模板")])),_:1}),o(v,{onClick:Ea},{default:d(()=>e[45]||(e[45]=[k("恢复样例")])),_:1})])]),_:1}),e[54]||(e[54]=l("div",{class:"section-title"},"通知内容",-1)),o($,{"label-position":"top"},{default:d(()=>[o(m,{label:"通知标题"},{default:d(()=>[o(r,{modelValue:g.meetingTitle,"onUpdate:modelValue":e[3]||(e[3]=i=>g.meetingTitle=i),type:"textarea",rows:2,placeholder:"支持直接换行，标题过长时建议手动断行"},null,8,["modelValue"])]),_:1}),l("div",On,[o(m,{label:"称谓"},{default:d(()=>[o(r,{modelValue:g.salutation,"onUpdate:modelValue":e[4]||(e[4]=i=>g.salutation=i)},null,8,["modelValue"])]),_:1}),o(m,{label:"通知日期"},{default:d(()=>[o(B,{modelValue:g.notificationDate,"onUpdate:modelValue":e[5]||(e[5]=i=>g.notificationDate=i),type:"date","value-format":"YYYY年M月D日",format:"YYYY年M月D日",placeholder:"选择通知日期"},null,8,["modelValue"])]),_:1})]),o(m,{label:"落款单位（引用“使用单位”字典）"},{default:d(()=>[l("div",Yn,[l("div",Wn,[o(b,{modelValue:Pe.value,"onUpdate:modelValue":e[6]||(e[6]=i=>Pe.value=i),class:"usage-unit-select",clearable:"",placeholder:"请选择使用单位"},{default:d(()=>[(f(!0),y(A,null,K(Ce.value,i=>(f(),X(T,{key:i.value,label:i.label,value:i.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),o(v,{class:"usage-unit-add-button",onClick:ia},{default:d(()=>e[46]||(e[46]=[k("添加单位")])),_:1})]),l("div",Jn,[q.value.length===0?(f(),y("div",qn," 暂未选择落款单位 ")):U("",!0),(f(!0),y(A,null,K(q.value,i=>(f(),y("div",{key:i,class:"usage-unit-item"},[l("div",Kn,[l("span",null,I(i),1),l("span",Xn,I(aa(i)),1)]),o(v,{link:"",type:"danger",onClick:R=>la(i)},{default:d(()=>e[47]||(e[47]=[k("移除")])),_:2},1032,["onClick"])]))),128))])])]),_:1}),o(m,{label:"印章配置"},{default:d(()=>[e[52]||(e[52]=l("div",{class:"stamp-config-summary"}," 党组织印章自动绑定名称含“支委会、支部委员会、党委、党委会、党支部”等单位；村/居委会印章自动绑定名称含“村委、村民委员会、居委、居民委员会、社区”的单位。上传新图片后直接覆盖当前印章。 ",-1)),l("div",Zn,[o(ue,{modelValue:g.enableStamp,"onUpdate:modelValue":e[7]||(e[7]=i=>g.enableStamp=i)},{default:d(()=>e[48]||(e[48]=[k("加盖印章")])),_:1},8,["modelValue"]),e[49]||(e[49]=l("span",{class:"stamp-enable-tip"},"默认不加盖，勾选后按单位类型自动盖章",-1))]),l("div",Qn,[l("div",eo,[e[50]||(e[50]=l("div",{class:"stamp-config-title"},"党组织印章",-1)),l("div",to,"当前印章："+I(ft("party")),1),l("input",{type:"file",accept:"image/*",onChange:e[8]||(e[8]=i=>vt(i,"party"))},null,32)]),l("div",ao,[e[51]||(e[51]=l("div",{class:"stamp-config-title"},"村/居委会印章",-1)),l("div",no," 当前印章："+I(ft("villageResident")),1),l("input",{type:"file",accept:"image/*",onChange:e[9]||(e[9]=i=>vt(i,"villageResident"))},null,32)])])]),_:1}),o(m,{label:"开头说明"},{default:d(()=>[o(r,{modelValue:g.intro,"onUpdate:modelValue":e[10]||(e[10]=i=>g.intro=i),type:"textarea",rows:3},null,8,["modelValue"])]),_:1}),l("div",oo,[o(m,{label:"会议日期"},{default:d(()=>[o(B,{modelValue:g.meetingDate,"onUpdate:modelValue":e[11]||(e[11]=i=>g.meetingDate=i),type:"date","value-format":"YYYY-MM-DD",placeholder:"选择日期"},null,8,["modelValue"])]),_:1}),o(m,{label:"开始时间"},{default:d(()=>[o(le,{modelValue:g.meetingStartTime,"onUpdate:modelValue":e[12]||(e[12]=i=>g.meetingStartTime=i),format:"HH:mm","value-format":"HH:mm",placeholder:"选择时间"},null,8,["modelValue"])]),_:1})]),o(m,{label:"会议地点"},{default:d(()=>[o(r,{modelValue:g.meetingPlace,"onUpdate:modelValue":e[13]||(e[13]=i=>g.meetingPlace=i)},null,8,["modelValue"])]),_:1}),o(m,{label:"参会人员（一行一项，预览自动加（一）（二））"},{default:d(()=>[o(r,{modelValue:g.participants,"onUpdate:modelValue":e[14]||(e[14]=i=>g.participants=i),type:"textarea",rows:4},null,8,["modelValue"])]),_:1}),o(m,{label:"会议议程（一行一项，预览自动加（一）（二））"},{default:d(()=>[o(r,{modelValue:g.agenda,"onUpdate:modelValue":e[15]||(e[15]=i=>g.agenda=i),type:"textarea",rows:4},null,8,["modelValue"])]),_:1}),o(m,{label:"注意事项（一行一项，预览自动加（一）（二））"},{default:d(()=>[o(r,{modelValue:g.notes,"onUpdate:modelValue":e[16]||(e[16]=i=>g.notes=i),type:"textarea",rows:4},null,8,["modelValue"])]),_:1}),o(m,{label:"联系方式"},{default:d(()=>[o(r,{modelValue:g.contact,"onUpdate:modelValue":e[17]||(e[17]=i=>g.contact=i)},null,8,["modelValue"])]),_:1}),o(m,{label:"附件说明"},{default:d(()=>[o(r,{modelValue:g.attachments,"onUpdate:modelValue":e[18]||(e[18]=i=>g.attachments=i)},null,8,["modelValue"])]),_:1})]),_:1})]),l("div",io,[l("div",lo,[l("div",so,I(st.value)+"打印预览",1),l("div",ro,[e[57]||(e[57]=l("div",{class:"preview-tip"},"联合落款按两单位一行排版，通知日期固定对齐右侧单位。",-1)),o(v,{onClick:e[19]||(e[19]=i=>Ze("meetingNotice"))},{default:d(()=>e[55]||(e[55]=[k("导出 Word")])),_:1}),o(v,{type:"primary",onClick:e[20]||(e[20]=i=>Xe("meetingNotice"))},{default:d(()=>e[56]||(e[56]=[k("打印预览")])),_:1})])]),l("article",{ref_key:"printPaperRef",ref:Fe,class:Ct(["notice-paper",{"proof-paper":Wt.value}])},[l("h2",uo,[(f(!0),y(A,null,K(Yt.value,(i,R)=>(f(),y("span",{key:`${i}-${R}`,class:"notice-title-line"},I(i),1))),128))]),l("div",mo,[l("div",po,I(g.salutation||"各位同事："),1),l("div",{class:"notice-intro",innerHTML:Lt.value},null,8,co),Xt.value?(f(),y(A,{key:0},[e[58]||(e[58]=l("div",{class:"heading-level-1"},"一、会议时间及地点",-1)),Ye.value?(f(),y("p",fo,"时间："+I(Ye.value),1)):U("",!0),g.meetingPlace.trim()?(f(),y("p",go,"地点："+I(g.meetingPlace),1)):U("",!0)],64)):U("",!0),Zt.value?(f(),y(A,{key:1},[e[59]||(e[59]=l("div",{class:"heading-level-1"},"二、参会人员",-1)),l("div",{innerHTML:ut.value},null,8,vo)],64)):U("",!0),Qt.value?(f(),y(A,{key:2},[e[60]||(e[60]=l("div",{class:"heading-level-1"},"三、会议议程",-1)),l("div",{innerHTML:mt.value},null,8,bo)],64)):U("",!0),ea.value?(f(),y(A,{key:3},[e[61]||(e[61]=l("div",{class:"heading-level-1"},"四、其他事项",-1)),l("div",{innerHTML:pt.value},null,8,yo)],64)):U("",!0),l("p",ho,I(g.contact),1)]),l("div",wo,[(f(!0),y(A,null,K(na.value,(i,R)=>(f(),y("div",{key:`${i.left}-${i.right}-${R}`,class:"signature-row"},[l("div",_o,[i.left?(f(),y("div",To,[l("div",ko,I(i.left.name),1),i.left.stampUrl?(f(),y("img",{key:0,class:"signature-stamp",src:i.left.stampUrl,alt:`${i.left.name}印章`},null,8,So)):U("",!0)])):U("",!0)]),l("div",Io,[i.right?(f(),y("div",Vo,[l("div",Uo,I(i.right.name),1),i.right.stampUrl?(f(),y("img",{key:0,class:"signature-stamp",src:i.right.stampUrl,alt:`${i.right.name}印章`},null,8,Co)):U("",!0)])):U("",!0)])]))),128)),l("div",Po,[e[62]||(e[62]=l("div",{class:"signature-slot signature-slot-left"},null,-1)),l("div",xo,[l("div",Do,I(g.notificationDate),1)])])]),g.attachments?(f(),y("div",$o,I(g.attachments),1)):U("",!0),e[63]||(e[63]=l("div",{class:"page-number"},"- 1 -",-1))],2)])])):W.value==="proofDocument"?(f(),y("div",Ao,[l("div",No,[l("div",Ro,[o(te,{modelValue:ge.value,"onUpdate:modelValue":e[21]||(e[21]=i=>ge.value=i)},{default:d(()=>[o(ee,{label:"create"},{default:d(()=>e[64]||(e[64]=[k("新建证明")])),_:1}),o(ee,{label:"ledger"},{default:d(()=>e[65]||(e[65]=[k("历史记录")])),_:1})]),_:1},8,["modelValue"])]),ge.value==="create"?(f(),y(A,{key:0},[e[81]||(e[81]=l("div",{class:"section-title"},"模板管理",-1)),o($,{"label-position":"top"},{default:d(()=>[l("div",jo,[o(m,{label:"模板名称"},{default:d(()=>[o(r,{modelValue:F.value,"onUpdate:modelValue":e[22]||(e[22]=i=>F.value=i),placeholder:"例如：亲属关系证明模板"},null,8,["modelValue"])]),_:1}),o(m,{label:"已保存模板"},{default:d(()=>[o(b,{modelValue:J.value,"onUpdate:modelValue":e[23]||(e[23]=i=>J.value=i),clearable:"",placeholder:"请选择模板",loading:Ee.value},{default:d(()=>[o(Se,{label:"数据库模板"},{default:d(()=>[(f(!0),y(A,null,K(oe.value,i=>(f(),X(T,{key:"db-"+i.id,label:i.name+(i.isDefault?" (系统预设)":""),value:"db-"+i.id},null,8,["label","value"]))),128))]),_:1}),o(Se,{label:"本地模板"},{default:d(()=>[(f(!0),y(A,null,K(z.value,i=>(f(),X(T,{key:"local-"+i.id,label:i.name+(i.builtin?" (内置)":""),value:"local-"+i.id},null,8,["label","value"]))),128))]),_:1})]),_:1},8,["modelValue","loading"])]),_:1})]),l("div",Eo,[o(v,{type:"primary",onClick:Ua},{default:d(()=>e[66]||(e[66]=[k("保存为模板")])),_:1}),o(v,{onClick:Ca},{default:d(()=>e[67]||(e[67]=[k("应用模板")])),_:1}),o(v,{onClick:Pa},{default:d(()=>e[68]||(e[68]=[k("覆盖当前模板")])),_:1}),o(v,{type:"danger",plain:"",onClick:xa},{default:d(()=>e[69]||(e[69]=[k("删除模板")])),_:1}),o(v,{onClick:Da},{default:d(()=>e[70]||(e[70]=[k("恢复样例")])),_:1})])]),_:1}),e[82]||(e[82]=l("div",{class:"section-title"},"证明信息",-1)),o($,{"label-position":"top"},{default:d(()=>{var i,R;return[l("div",Fo,[o(m,{label:"材料标题"},{default:d(()=>[o(r,{modelValue:s.proofType,"onUpdate:modelValue":e[24]||(e[24]=_=>s.proofType=_),disabled:D.value,placeholder:"例如：证明、情况说明"},null,8,["modelValue","disabled"])]),_:1}),o(m,{label:"出具单位"},{default:d(()=>[o(b,{modelValue:s.issuingUnit,"onUpdate:modelValue":e[25]||(e[25]=_=>s.issuingUnit=_),filterable:"","allow-create":"","default-first-option":"",disabled:D.value,placeholder:"请选择使用单位"},{default:d(()=>[(f(!0),y(A,null,K(Ce.value,_=>(f(),X(T,{key:_.value,label:_.label,value:_.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1})]),o(m,{label:"开具证明时间"},{default:d(()=>[o(B,{modelValue:s.plannedIssuedAt,"onUpdate:modelValue":e[26]||(e[26]=_=>s.plannedIssuedAt=_),type:"date","value-format":"YYYY-MM-DD",placeholder:"选择开具日期",disabled:D.value},null,8,["modelValue","disabled"])]),_:1}),o(m,{label:"被证明人信息"},{default:d(()=>[l("div",zo,[(f(!0),y(A,null,K(s.subjectItems,(_,Qe)=>(f(),y("div",{key:_.localId,class:"proof-subject-item"},[l("div",Mo,[l("span",null,"被证明人"+I(Qe+1),1),s.subjectItems.length>1?(f(),X(v,{key:0,link:"",type:"danger",disabled:D.value,onClick:L=>ha(Qe)},{default:d(()=>e[71]||(e[71]=[k(" 移除 ")])),_:2},1032,["disabled","onClick"])):U("",!0)]),l("div",Bo,[o(m,{label:"姓名"},{default:d(()=>[o(Re,{modelValue:_.name,"onUpdate:modelValue":L=>_.name=L,"value-key":"value","fetch-suggestions":_a,disabled:D.value,clearable:"",placeholder:"输入姓名自动搜索居民",onSelect:L=>Ta(Qe,L),onInput:ke},null,8,["modelValue","onUpdate:modelValue","disabled","onSelect"])]),_:2},1024),o(m,{label:"性别"},{default:d(()=>[o(r,{modelValue:_.gender,"onUpdate:modelValue":L=>_.gender=L,disabled:D.value,onInput:ke},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024)]),l("div",Lo,[o(m,{label:"身份证号"},{default:d(()=>[o(r,{modelValue:_.idCard,"onUpdate:modelValue":L=>_.idCard=L,disabled:D.value,onInput:ke},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024),o(m,{label:"联系电话"},{default:d(()=>[o(r,{modelValue:_.phone,"onUpdate:modelValue":L=>_.phone=L,disabled:D.value,onInput:ke},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024)]),o(m,{label:"住址"},{default:d(()=>[o(r,{modelValue:_.address,"onUpdate:modelValue":L=>_.address=L,disabled:D.value,onInput:ke},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024)]))),128)),o(v,{disabled:D.value,onClick:ya},{default:d(()=>e[72]||(e[72]=[k("添加被证明人")])),_:1},8,["disabled"])])]),_:1}),o(m,{label:"证明正文"},{default:d(()=>[o(r,{modelValue:s.content,"onUpdate:modelValue":e[27]||(e[27]=_=>s.content=_),type:"textarea",rows:9,disabled:D.value,onInput:e[28]||(e[28]=_=>ie.value=!0)},null,8,["modelValue","disabled"]),l("div",Ho,[o(v,{disabled:D.value,onClick:ga},{default:d(()=>e[73]||(e[73]=[k(" 根据被证明人重新生成正文 ")])),_:1},8,["disabled"])])]),_:1}),l("div",Go,[o(m,{label:"印章类型"},{default:d(()=>[o(b,{modelValue:s.stampType,"onUpdate:modelValue":e[29]||(e[29]=_=>s.stampType=_),clearable:"",disabled:D.value},{default:d(()=>[o(T,{label:"村/居委会印章",value:"villageResident"}),o(T,{label:"党组织印章",value:"party"})]),_:1},8,["modelValue","disabled"])]),_:1}),o(m,{label:"盖章"},{default:d(()=>[o(ue,{modelValue:s.stampEnabled,"onUpdate:modelValue":e[30]||(e[30]=_=>s.stampEnabled=_),disabled:D.value},{default:d(()=>e[74]||(e[74]=[k(" 加盖印章 ")])),_:1},8,["modelValue","disabled"])]),_:1})]),l("div",Oo,[o(v,{onClick:ka},{default:d(()=>e[75]||(e[75]=[k("新建")])),_:1}),D.value?U("",!0):(f(),X(v,{key:0,type:"primary",loading:ve.value,onClick:Sa},{default:d(()=>e[76]||(e[76]=[k(" 保存草稿 ")])),_:1},8,["loading"])),((i=h.value)==null?void 0:i.status)==="draft"?(f(),X(v,{key:1,type:"success",loading:ve.value,onClick:Ia},{default:d(()=>e[77]||(e[77]=[k(" 正式出具 ")])),_:1},8,["loading"])):U("",!0),o(v,{disabled:!h.value||h.value.status==="voided",onClick:e[31]||(e[31]=_=>Ze("proofDocument"))},{default:d(()=>e[78]||(e[78]=[k(" 导出 Word ")])),_:1},8,["disabled"]),o(v,{disabled:!h.value||h.value.status==="voided",onClick:e[32]||(e[32]=_=>Xe("proofDocument"))},{default:d(()=>e[79]||(e[79]=[k(" 打印预览 ")])),_:1},8,["disabled"]),((R=h.value)==null?void 0:R.status)==="issued"?(f(),X(v,{key:2,type:"danger",plain:"",onClick:Va},{default:d(()=>e[80]||(e[80]=[k(" 作废 ")])),_:1})):U("",!0)]),h.value?(f(),y("div",Yo,[l("span",null,"状态："+I(ht(h.value.status)),1),h.value.documentNo?(f(),y("span",Wo,"编号："+I(h.value.documentNo),1)):U("",!0),h.value.issuedByRealName?(f(),y("span",Jo," 出具人："+I(h.value.issuedByRealName),1)):U("",!0),h.value.issuedAt?(f(),y("span",qo,"出具时间："+I(h.value.issuedAt),1)):U("",!0)])):U("",!0)]}),_:1})],64)):(f(),y(A,{key:1},[e[85]||(e[85]=l("div",{class:"section-title"},"历史记录",-1)),l("div",Ko,[o(r,{modelValue:de.keyword,"onUpdate:modelValue":e[33]||(e[33]=i=>de.keyword=i),clearable:"",placeholder:"搜索编号、姓名、身份证号、正文",onKeyup:yn(pe,["enter"])},null,8,["modelValue"]),o(b,{modelValue:de.status,"onUpdate:modelValue":e[34]||(e[34]=i=>de.status=i),clearable:"",placeholder:"状态"},{default:d(()=>[o(T,{label:"草稿",value:"draft"}),o(T,{label:"已出具",value:"issued"}),o(T,{label:"已作废",value:"voided"})]),_:1},8,["modelValue"]),o(v,{type:"primary",onClick:pe},{default:d(()=>e[83]||(e[83]=[k("查询")])),_:1})]),hn((f(),X(Ma,{class:"proof-ledger-table",data:tt.value,size:"small",height:"560",onRowClick:St},{default:d(()=>[o(N,{prop:"documentNo",label:"证明编号",width:"170"},{default:d(({row:i})=>[k(I(i.documentNo||"草稿"),1)]),_:1}),o(N,{prop:"subjectName",label:"被证明人",width:"120"}),o(N,{prop:"subjectIdCardMasked",label:"身份证号",width:"180"}),o(N,{prop:"subjectPhone",label:"联系电话",width:"130"}),o(N,{prop:"subjectAddress",label:"住址",width:"220","show-overflow-tooltip":""}),o(N,{prop:"status",label:"状态",width:"90"},{default:d(({row:i})=>[o(je,{type:ua(i.status)},{default:d(()=>[k(I(ht(i.status)),1)]),_:2},1032,["type"])]),_:1}),o(N,{prop:"issuedAt",label:"开具时间",width:"170"}),o(N,{prop:"issuedByRealName",label:"开具人",width:"110"}),o(N,{prop:"createdAt",label:"创建时间",width:"170"}),o(N,{prop:"exportCount",label:"导出次数",width:"90"}),o(N,{prop:"printCount",label:"打印次数",width:"90"}),o(N,{prop:"voidReason",label:"作废原因",width:"180","show-overflow-tooltip":""}),o(N,{label:"操作",width:"100",fixed:"right"},{default:d(({row:i})=>[o(v,{link:"",type:"primary",onClick:Ue(R=>St(i),["stop"])},{default:d(()=>e[84]||(e[84]=[k("查看")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[La,Be.value]])],64))]),l("div",Xo,[e[89]||(e[89]=l("div",{class:"preview-toolbar no-print"},[l("div",{class:"preview-title"},"证明材料打印预览"),l("div",{class:"preview-toolbar-actions"},[l("div",{class:"preview-tip"},"正式出具后正文冻结，修改需作废后重新出具。")])],-1)),l("article",{ref_key:"proofPaperRef",ref:ze,class:"notice-paper proof-paper"},[l("h2",Zo,I(qt.value),1),l("div",Qo,[l("div",{class:"notice-intro",innerHTML:Jt.value},null,8,ei)]),l("div",ti,[l("div",ai,[e[86]||(e[86]=l("div",{class:"signature-slot signature-slot-left"},null,-1)),l("div",ni,[l("div",oi,[l("div",ii,I(s.issuingUnit),1),dt.value?(f(),y("img",{key:0,class:"signature-stamp",src:dt.value,alt:`${s.issuingUnit}印章`},null,8,li)):U("",!0)])])]),l("div",si,[e[87]||(e[87]=l("div",{class:"signature-slot signature-slot-left"},null,-1)),l("div",ri,[l("div",di,I(Kt.value),1)])])]),(It=h.value)!=null&&It.documentNo?(f(),y("div",ui," 编号："+I(h.value.documentNo),1)):U("",!0),e[88]||(e[88]=l("div",{class:"page-number"},"- 1 -",-1))],512)])])):W.value==="meetingImage"?(f(),y("div",mi,[l("div",pi,[e[92]||(e[92]=l("div",{class:"section-title"},"图片编辑",-1)),e[93]||(e[93]=l("div",{class:"image-tool-note"}," 支持直接拖拽图片到下方区域，也可分别上传两张会议图片。本工具不做本地保存。 ",-1)),l("div",{class:Ct(["image-dropzone",{"is-dragover":fe.value}]),onDragenter:e[35]||(e[35]=Ue(i=>fe.value=!0,["prevent"])),onDragover:e[36]||(e[36]=Ue(i=>fe.value=!0,["prevent"])),onDragleave:e[37]||(e[37]=Ue(i=>fe.value=!1,["prevent"])),onDrop:Ue($a,["prevent"])},e[90]||(e[90]=[l("div",{class:"image-dropzone-title"},"拖拽图片到这里",-1),l("div",{class:"image-dropzone-desc"}," 可一次拖入 1-2 张图片，按顺序填充到图片一、图片二。 ",-1)]),34),l("div",ci,[(f(!0),y(A,null,K(Q,(i,R)=>(f(),y("div",{key:i.id,class:"image-editor-card"},[l("div",fi,[l("div",gi,"图片"+I(R+1),1),i.url?(f(),X(v,{key:0,link:"",type:"danger",onClick:_=>yt(R)},{default:d(()=>e[91]||(e[91]=[k(" 清除 ")])),_:2},1032,["onClick"])):U("",!0)]),l("label",vi,[l("input",{class:"image-upload-input",type:"file",accept:"image/*",onChange:_=>ra(_,R)},null,40,bi),i.url?(f(),y("img",{key:0,class:"image-upload-preview",src:i.url,alt:`会议图片${R+1}`},null,8,yi)):(f(),y("div",hi,"点击上传图片"+I(R+1),1))]),o(r,{modelValue:i.caption,"onUpdate:modelValue":_=>i.caption=_,placeholder:"输入图片说明，留空则预览不显示"},null,8,["modelValue","onUpdate:modelValue"])]))),128))])]),l("div",wi,[l("div",_i,[l("div",Ti,I(st.value)+"打印预览",1),l("div",ki,[e[96]||(e[96]=l("div",{class:"preview-tip"},"A4 纵向最多显示两张图片，说明文字为空时不显示。",-1)),o(v,{onClick:e[38]||(e[38]=i=>Ze("meetingImage"))},{default:d(()=>e[94]||(e[94]=[k("导出 Word")])),_:1}),o(v,{type:"primary",onClick:e[39]||(e[39]=i=>Xe("meetingImage"))},{default:d(()=>e[95]||(e[95]=[k("打印预览")])),_:1})])]),l("article",{ref_key:"imagePaperRef",ref:Me,class:"image-paper"},[(f(!0),y(A,null,K(rt.value,(i,R)=>(f(),y("div",{key:i.id,class:"image-paper-item"},[l("div",Si,[l("img",{class:"image-paper-preview",src:i.url,alt:`会议图片${R+1}`},null,8,Ii)]),i.caption.trim()?(f(),y("div",Vi,I(i.caption),1)):U("",!0)]))),128)),rt.value.length===0?(f(),y("div",Ui," 请上传或拖入会议图片 ")):U("",!0)],512)])])):U("",!0)]}),_:1})])}}}),zi=Un(Ci,[["__scopeId","data-v-85b51ba7"]]);export{zi as default};
