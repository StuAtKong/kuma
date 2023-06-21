import{d as A,u as Z,q as o,s as V,O as I,o as w,a as O,w as z,h as l,b as p,g as k,k as f,P as x,e as S,f as B}from"./index-e7bfbdad.js";import{_ as L}from"./ZoneEgressDetails.vue_vue_type_script_setup_true_lang-cfde394d.js";import{j as P,k as $,g as q,_ as C}from"./RouteView.vue_vue_type_script_setup_true_lang-77c1f4af.js";import{_ as F}from"./RouteTitle.vue_vue_type_script_setup_true_lang-a799e7ef.js";import{D as Q}from"./DataOverview-e5bf6030.js";import{Q as v}from"./QueryParameter-70743f73.js";import"./DefinitionListItem-21d4ebe0.js";import"./EnvoyData-af91b71e.js";import"./kongponents.es-20439a79.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-4fbee3c8.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-4e0c43dc.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-30b177d5.js";import"./ErrorBlock-56dff9dd.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-f06002d2.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-edce0d76.js";import"./TabsWidget-4fe69e87.js";import"./TextWithCopyButton-03ff38b8.js";import"./TagList-e3280622.js";import"./StatusBadge-a30206cc.js";const R={class:"zoneegresses"},U={class:"kcard-stack"},j={class:"kcard-border"},G={key:0,class:"kcard-border"},de=A({__name:"ZoneEgressListView",props:{selectedZoneEgressName:{type:[String,null],required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(N){const i=N,g=P(),{t:_}=$(),T={title:"No Data",message:"There are no Zone Egresses present."},b=Z(),u=o(!0),c=o(null),n=o({headers:[{label:"Status",key:"status"},{label:"Name",key:"entity"}],data:[]}),r=o(null),y=o(null),E=o(i.offset);V(()=>b.params.mesh,function(){b.name==="zone-egress-list-view"&&m(0)}),m(i.offset);async function m(e){var a;E.value=e,v.set("offset",e>0?e:null),u.value=!0,c.value=null;const t=x;try{const{items:s,next:d}=await g.getAllZoneEgressOverviews({size:t,offset:e});y.value=d,n.value.data=D(s??[]),await h({name:i.selectedZoneEgressName??((a=n.value.data[0])==null?void 0:a.entity.name)})}catch(s){n.value.data=[],r.value=null,s instanceof Error?c.value=s:console.error(s)}finally{u.value=!1}}function D(e){return e.map(t=>{const{name:a}=t,s={name:"zone-egress-detail-view",params:{zoneEgress:a}},d=I(t.zoneEgressInsight??{});return{entity:t,detailViewRoute:s,status:d}})}async function h({name:e}){if(e===void 0){r.value=null,v.set("zoneEgress",null);return}try{r.value=await g.getZoneEgressOverview({name:e}),v.set("zoneEgress",e)}catch(t){console.error(t)}}return(e,t)=>(w(),O(C,null,{default:z(()=>[l(F,{title:p(_)("zone-egresses.routes.items.title")},null,8,["title"]),k(),l(q,{breadcrumbs:[{to:{name:"zone-egress-list-view"},text:p(_)("zone-egresses.routes.items.breadcrumbs")}]},{default:z(()=>{var a;return[f("div",R,[f("div",U,[f("div",j,[l(Q,{"selected-entity-name":(a=r.value)==null?void 0:a.name,"page-size":p(x),"is-loading":u.value,error:c.value,"empty-state":T,"table-data":n.value,"table-data-is-empty":n.value.data.length===0,next:y.value,"page-offset":E.value,onTableAction:h,onLoadData:m},null,8,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","next","page-offset"])]),k(),r.value!==null?(w(),S("div",G,[l(L,{"zone-egress-overview":r.value},null,8,["zone-egress-overview"])])):B("",!0)])])]}),_:1},8,["breadcrumbs"])]),_:1}))}});export{de as default};