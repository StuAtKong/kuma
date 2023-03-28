import{d as P,l as $,m as Q,r as l,n as R,p as U,s as G,t as H,o as u,c as m,a as r,w as a,u as _,P as B,k as E,e as b,E as K,x as z,g,y as w,F as q,z as I,M as W,A as X,B as Y}from"./index-a2028f71.js";import{D as j}from"./DataOverview-5bef20b4.js";import{E as k}from"./EnvoyData-40fc7f23.js";import{F as J}from"./FrameSkeleton-1b5195b3.js";import{_ as ee}from"./LabelList.vue_vue_type_style_index_0_lang-ef71f8a3.js";import{_ as ae,S as se}from"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-e8a49d2a.js";import{T as te}from"./TabsWidget-a22ec28a.js";import{Q as L}from"./QueryParameter-70743f73.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-eae22a5f.js";import"./ErrorBlock-cc8ef692.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-d1caf019.js";import"./TagList-76d012db.js";import"./StatusBadge-478dac84.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-d95cec58.js";const ne={class:"zoneegresses"},re={class:"entity-heading"},oe={key:0},be=P({__name:"ZoneEgresses",props:{selectedZoneEgressName:{type:String,required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(O){const p=O,x=$(),C={title:"No Data",message:"There are no Zone Egresses present."},F=[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Egress Insights"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"}],f=Q(),d=l(!0),c=l(!1),v=l(null),y=l({headers:[{label:"Actions",key:"actions",hideLabel:!0},{label:"Status",key:"status"},{label:"Name",key:"name"}],data:[]}),i=l(null),A=l([]),S=l(null),D=l([]),T=l(p.offset);R(()=>f.params.mesh,function(){f.name==="zoneegresses"&&(d.value=!0,c.value=!1,v.value=null,h(0))}),U(function(){h(p.offset)});async function h(s){T.value=s,L.set("offset",s>0?s:null),d.value=!0,c.value=!1;const t=f.query.ns||null,o=B;try{const{data:e,next:n}=await V(t,o,s);S.value=n,e.length?(c.value=!1,A.value=e,Z({name:p.selectedZoneEgressName??e[0].name}),y.value.data=e.map(N=>{const M=G(N.zoneEgressInsight??{});return{...N,status:M}})):(y.value.data=[],c.value=!0)}catch(e){e instanceof Error?v.value=e:console.error(e),c.value=!0}finally{d.value=!1}}function Z({name:s}){var e;const t=A.value.find(n=>n.name===s),o=((e=t==null?void 0:t.zoneEgressInsight)==null?void 0:e.subscriptions)??[];D.value=Array.from(o).reverse(),i.value=H(t,["type","name"]),L.set("zoneEgress",s)}async function V(s,t,o){if(s)return{data:[await x.getZoneEgressOverview({name:s},{size:t,offset:o})],next:null};{const{items:e,next:n}=await x.getAllZoneEgressOverviews({size:t,offset:o});return{data:e??[],next:n}}}return(s,t)=>(u(),m("div",ne,[r(J,null,{default:a(()=>{var o;return[r(j,{"selected-entity-name":(o=i.value)==null?void 0:o.name,"page-size":_(B),"is-loading":d.value,error:v.value,"empty-state":C,"table-data":y.value,"table-data-is-empty":c.value,next:S.value,"page-offset":T.value,onTableAction:Z,onLoadData:h},{additionalControls:a(()=>[s.$route.query.ns?(u(),E(_(K),{key:0,class:"back-button",appearance:"primary",icon:"arrowLeft",to:{name:"zoneegresses"}},{default:a(()=>[b(`
            View all
          `)]),_:1})):z("",!0)]),_:1},8,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","next","page-offset"]),b(),c.value===!1&&i.value!==null?(u(),E(te,{key:0,"has-error":v.value!==null,"is-loading":d.value,tabs:F},{tabHeader:a(()=>[g("h1",re,`
            Zone Egress: `+w(i.value.name),1)]),overview:a(()=>[r(ee,null,{default:a(()=>[g("div",null,[g("ul",null,[(u(!0),m(q,null,I(i.value,(e,n)=>(u(),m("li",{key:n},[e?(u(),m("h4",oe,w(n),1)):z("",!0),b(),g("p",null,w(e),1)]))),128))])])]),_:1})]),insights:a(()=>[r(_(W),{"border-variant":"noBorder"},{body:a(()=>[r(X,{"initially-open":0},{default:a(()=>[(u(!0),m(q,null,I(D.value,(e,n)=>(u(),E(Y,{key:n},{"accordion-header":a(()=>[r(ae,{details:e},null,8,["details"])]),"accordion-content":a(()=>[r(se,{details:e,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),_:1})]),"xds-configuration":a(()=>[r(k,{"data-path":"xds","zone-egress-name":i.value.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),"envoy-stats":a(()=>[r(k,{"data-path":"stats","zone-egress-name":i.value.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),"envoy-clusters":a(()=>[r(k,{"data-path":"clusters","zone-egress-name":i.value.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),_:1},8,["has-error","is-loading"])):z("",!0)]}),_:1})]))}});export{be as default};