import{d as r,u as i,c as s,o as c,b as n,f as l}from"./index-139fff7d.js";import{_ as u}from"./PolicyDetails.vue_vue_type_script_setup_true_lang-414df4c8.js";import{u as y}from"./store-06cadd7e.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-a33602c4.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-87398625.js";import"./kongponents.es-75dcad6b.js";import"./ErrorBlock-17bcc6af.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-59c69976.js";import"./index-c8239fb4.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-d6c0015b.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-efda88bb.js";import"./TextWithCopyButton-e2cf311d.js";import"./toYaml-4e00099e.js";import"./TabsWidget-026ae755.js";import"./datadogLogEvents-302eea7b.js";import"./QueryParameter-70743f73.js";const $=r({__name:"PolicyDetailView",props:{mesh:{},policyPath:{},policyName:{}},setup(p){const t=p,a=i(),o=y(),e=s(()=>o.state.policyTypesByPath[t.policyPath]);m();function m(){o.dispatch("updatePageTitle",a.params.policy)}return(h,f)=>e.value?(c(),n(u,{key:0,name:t.policyName,mesh:t.mesh,path:t.policyPath,type:e.value.name},null,8,["name","mesh","path","type"])):l("",!0)}});export{$ as default};