import{S as w}from"./StatusBadge-832cc4dd.js";import{T as B}from"./TagList-67637749.js";import{_ as C}from"./YamlView.vue_vue_type_script_setup_true_lang-36e8b31a.js";import{s as D}from"./production-554ae9d4.js";import{d as I,c as i,s as N,o as r,h as l,g as s,f as t,e as x,w as V,t as c,u as n,a as S,b as u,F as k,p as O,k as P}from"./runtime-dom.esm-bundler-9284044f.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";const d=o=>(O("data-v-89fe6d99"),o=o(),P(),o),j={class:"entity-summary entity-section-list"},q={class:"block-list"},E={class:"entity-title"},F={class:"definition"},L=d(()=>s("span",null,"Mesh:",-1)),A={class:"definition"},M=d(()=>s("span",null,"Address:",-1)),R={key:0,class:"definition"},z=d(()=>s("span",null,"TLS:",-1)),G={key:1,class:"definition"},H=d(()=>s("span",null,"Data plane proxies:",-1)),J={key:0},K=d(()=>s("h2",null,"Tags",-1)),Q={class:"config-section"},U=I({__name:"ServiceSummary",props:{service:{type:Object,required:!0},externalService:{type:Object,required:!1,default:null}},setup(o){const e=o,g=i(()=>({name:"service-detail-view",params:{service:e.service.name,mesh:e.service.mesh}})),v=i(()=>e.service.serviceType==="external"&&e.externalService!==null?e.externalService.networking.address:e.service.addressPort??null),m=i(()=>{var a;return e.service.serviceType==="external"&&e.externalService!==null?(a=e.externalService.networking.tls)!=null&&a.enabled?"Enabled":"Disabled":null}),f=i(()=>{var a,_;if(e.service.serviceType==="external")return null;{const p=((a=e.service.dataplanes)==null?void 0:a.online)??0,b=((_=e.service.dataplanes)==null?void 0:_.total)??0;return`${p} online / ${b} total`}}),h=i(()=>e.service.serviceType==="external"?null:e.service.status??null),y=i(()=>e.service.serviceType==="external"&&e.externalService!==null?e.externalService.tags:null),T=i(()=>D(e.externalService??e.service));return(a,_)=>{const p=N("router-link");return r(),l("div",j,[s("section",null,[s("div",q,[s("div",null,[s("h1",E,[s("span",null,[t(`
              Service:

              `),x(p,{to:n(g)},{default:V(()=>[t(c(e.service.name),1)]),_:1},8,["to"])]),t(),n(h)?(r(),S(w,{key:0,status:n(h)},null,8,["status"])):u("",!0)]),t(),s("div",F,[L,t(),s("span",null,c(e.service.mesh),1)]),t(),s("div",A,[M,t(),s("span",null,[n(v)!==null?(r(),l(k,{key:0},[t(c(n(v)),1)],64)):(r(),l(k,{key:1},[t("—")],64))])]),t(),n(m)!==null?(r(),l("div",R,[z,t(),s("span",null,c(n(m)),1)])):u("",!0),t(),n(f)!==null?(r(),l("div",G,[H,t(),s("span",null,c(n(f)),1)])):u("",!0)]),t(),n(y)!==null?(r(),l("div",J,[K,t(),x(B,{tags:n(y)},null,8,["tags"])])):u("",!0)])]),t(),s("section",Q,[e.service.serviceType==="external"?(r(),S(C,{key:0,id:"code-block-service",content:n(T),"is-searchable":"","code-max-height":"250px"},null,8,["content"])):u("",!0)])])}}});const te=$(U,[["__scopeId","data-v-89fe6d99"]]);export{te as S};