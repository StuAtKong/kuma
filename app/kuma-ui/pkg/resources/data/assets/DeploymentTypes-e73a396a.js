import{P as g,z as b}from"./production-c33f040b.js";import{f}from"./kongponents.es-c2485d1e.js";import{a as y,O as h}from"./OnboardingNavigation-0c346547.js";import{O as v}from"./OnboardingPage-fe05b34b.js";import{d as O,e as x}from"./index-ffb7fa8b.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{i as a,a as l,w as e,o as m,e as d,f as t,g as s,t as z,y as G}from"./runtime-dom.esm-bundler-32659b48.js";import"./store-96085224.js";import"./index-7ce7c993.js";import"./DoughnutChart-323eb437.js";import"./vue-router-d8e03a07.js";const N={name:"DeploymentTypes",components:{MultizoneGraph:O(),StandaloneGraph:x(),OnboardingNavigation:y,OnboardingHeading:h,OnboardingPage:v,KRadio:f},data(){return{mode:"standalone",productName:g}},computed:{...b({multicluster:"config/getMulticlusterStatus"}),currentGraph(){return this.mode==="standalone"?"StandaloneGraph":"MultizoneGraph"}},mounted(){this.mode=this.multicluster?"multi-zone":"standalone"}},V={class:"h-full w-full flex items-center justify-center mb-10"},P={class:"radio flex text-base justify-between w-full sm:w-3/4 md:w-3/5 lg:w-1/2 absolute bottom-0 right-0 left-0 mb-10 mx-auto deployment-type-radio-buttons"};function D(M,n,S,T,o,p){const u=a("OnboardingHeading"),r=a("KRadio"),c=a("OnboardingNavigation"),_=a("OnboardingPage");return m(),l(_,{"with-image":""},{header:e(()=>[d(u,null,{title:e(()=>[t(`
          Learn about deployments
        `)]),description:e(()=>[s("p",null,z(o.productName)+" can be deployed in standalone or multi-zone mode.",1)]),_:1})]),content:e(()=>[s("div",V,[(m(),l(G(p.currentGraph)))]),t(),s("div",P,[d(r,{modelValue:o.mode,"onUpdate:modelValue":n[0]||(n[0]=i=>o.mode=i),name:"mode","selected-value":"standalone","data-testid":"onboarding-standalone-radio-button"},{default:e(()=>[t(`
          Standalone deployment
        `)]),_:1},8,["modelValue"]),t(),d(r,{modelValue:o.mode,"onUpdate:modelValue":n[1]||(n[1]=i=>o.mode=i),name:"mode","selected-value":"multi-zone","data-testid":"onboarding-multi-zone-radio-button"},{default:e(()=>[t(`
          Multi-zone deployment
        `)]),_:1},8,["modelValue"])])]),navigation:e(()=>[d(c,{"next-step":"onboarding-configuration-types","previous-step":"onboarding-welcome"})]),_:1})}const L=w(N,[["render",D],["__scopeId","data-v-2e55b153"]]);export{L as default};