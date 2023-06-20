import{S as p}from"./kongponents.es-e2ddd177.js";import{_ as m}from"./CodeBlock.vue_vue_type_style_index_0_lang-14a44bd2.js";import{_ as g}from"./StatusInfo.vue_vue_type_script_setup_true_lang-642c7e81.js";import{j as _,h as y}from"./RouteView.vue_vue_type_script_setup_true_lang-1f8c0f25.js";import{d as h,s as o,w as i,G as v,o as N,f as E,l as q,i as d,b as c,h as u,e as z}from"./index-d2bcfa28.js";const P={class:"envoy-data-actions"},S=h({__name:"EnvoyData",props:{dataPath:{type:String,required:!0},queryKey:{type:String,required:!1,default:null},mesh:{type:String,required:!1,default:""},dppName:{type:String,required:!1,default:""},zoneIngressName:{type:String,required:!1,default:""},zoneEgressName:{type:String,required:!1,default:""}},setup(f){const e=f,n=_(),s=o(!0),r=o(null),l=o("");i(()=>e.dppName,function(){t()}),i(()=>e.zoneIngressName,function(){t()}),i(()=>e.zoneEgressName,function(){t()}),v(function(){t()});async function t(){r.value=null,s.value=!0;try{let a="";e.mesh!==""&&e.dppName!==""?a=await n.getDataplaneData({dataPath:e.dataPath,mesh:e.mesh,dppName:e.dppName}):e.zoneIngressName!==""?a=await n.getZoneIngressData({dataPath:e.dataPath,zoneIngressName:e.zoneIngressName}):e.zoneEgressName!==""&&(a=await n.getZoneEgressData({dataPath:e.dataPath,zoneEgressName:e.zoneEgressName})),l.value=typeof a=="string"?a:JSON.stringify(a,null,2)}catch(a){a instanceof Error?r.value=a:console.error(a)}finally{s.value=!1}}return(a,k)=>(N(),E("div",null,[q("div",P,[d(z(p),{disabled:s.value,appearance:"primary",icon:"redo","data-testid":"envoy-data-refresh-button",onClick:t},{default:c(()=>[u(`
        Refresh
      `)]),_:1},8,["disabled"])]),u(),d(g,{"is-loading":s.value,error:r.value},{default:c(()=>[d(m,{id:`code-block-${e.dataPath}`,language:"json",code:l.value,"is-searchable":"","query-key":e.queryKey??`code-block-${e.dataPath}`},null,8,["id","code","query-key"])]),_:1},8,["is-loading","error"])]))}});const C=y(S,[["__scopeId","data-v-afa8dc47"]]);export{C as E};