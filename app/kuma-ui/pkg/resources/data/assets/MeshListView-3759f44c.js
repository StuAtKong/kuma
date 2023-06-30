import{k as x,j as D,g as T,_ as A}from"./RouteView.vue_vue_type_script_setup_true_lang-4999f19d.js";import{_ as E}from"./RouteTitle.vue_vue_type_script_setup_true_lang-65d5caa7.js";import{D as N}from"./DataOverview-92c4fef1.js";import{d as V,q as s,o as M,a as S,w as _,h as i,b as m,g as L,k as v,P as h}from"./index-0b8ed13f.js";import{Q as P}from"./QueryParameter-70743f73.js";import"./kongponents.es-a99534bb.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-0272b2d5.js";import"./ErrorBlock-ddeaa4b4.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-bcba5a7a.js";import"./TagList-1ea0a113.js";import"./StatusBadge-bc14a264.js";const q={class:"kcard-stack"},z={class:"kcard-border"},K=V({__name:"MeshListView",props:{selectedMeshName:{type:[String,null],required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(b){const u=b,{t:r}=x(),g=D(),y={title:r("common.emptyState.title"),message:r("common.emptyState.message",{type:"Meshes"})},l=s(!0),n=s(null),o=s({headers:[{label:"Name",key:"entity"}],data:[]}),c=s(null),d=s(u.offset);k();function k(){p(u.offset)}async function p(e){d.value=e,P.set("offset",e>0?e:null),l.value=!0,n.value=null;const a=h;try{const{items:t,next:f}=await g.getAllMeshes({size:a,offset:e});c.value=f,o.value.data=w(t??[])}catch(t){o.value.data=[],t instanceof Error?n.value=t:console.error(t)}finally{l.value=!1}}function w(e){return e.map(a=>{const{name:t}=a;return{entity:a,detailViewRoute:{name:"mesh-detail-view",params:{mesh:t}}}})}return(e,a)=>(M(),S(A,null,{default:_(()=>[i(E,{title:m(r)("meshes.routes.items.title")},null,8,["title"]),L(),i(T,{breadcrumbs:[{to:{name:"mesh-list-view"},text:m(r)("meshes.routes.items.breadcrumbs")}]},{default:_(()=>[v("div",q,[v("div",z,[i(N,{"page-size":m(h),"is-loading":l.value,error:n.value,"empty-state":y,"table-data":o.value,"table-data-is-empty":o.value.data.length===0,next:c.value,"page-offset":d.value,onLoadData:p},null,8,["page-size","is-loading","error","table-data","table-data-is-empty","next","page-offset"])])])]),_:1},8,["breadcrumbs"])]),_:1}))}});export{K as default};