import{r as p}from"./kongponents.es-aa96ab2e.js";import{O as _,a as m,b as h}from"./OnboardingPage-f8fbd589.js";import{f,k as b,g,_ as v,h as y}from"./RouteView.vue_vue_type_script_setup_true_lang-b28dd8e7.js";import{_ as x}from"./RouteTitle.vue_vue_type_script_setup_true_lang-8f9a216a.js";import{d as S,q as k,c as A,o as C,a as N,w as e,h as t,b as n,g as a,k as o,t as B,p as I,m as D}from"./index-e8e69e62.js";const i=s=>(I("data-v-94485eb5"),s=s(),D(),s),M={class:"mb-4 text-center"},O=i(()=>o("i",null,"default",-1)),w=i(()=>o("p",{class:"mt-4 text-center"},`
            This mesh is empty. Next, you add services and their data plane proxies.
          `,-1)),E=S({__name:"CreateMesh",setup(s){const c=[{label:"Name",key:"name"},{label:"Services",key:"servicesAmount"},{label:"DPPs",key:"dppsAmount"}],l=f(),{t:r}=b(),d=k({total:1,data:[{name:"default",servicesAmount:0,dppsAmount:0}]}),u=A(()=>l.getters["config/getMulticlusterStatus"]?"onboarding-multi-zone":"onboarding-configuration-types");return(P,T)=>(C(),N(v,null,{default:e(()=>[t(x,{title:n(r)("onboarding.routes.create-mesh.title")},null,8,["title"]),a(),t(g,null,{default:e(()=>[t(_,null,{header:e(()=>[t(m,null,{title:e(()=>[a(`
              Create the mesh
            `)]),_:1})]),content:e(()=>[o("p",M,[a(`
            When you install, `+B(n(r)("common.product.name"))+" creates a ",1),O,a(` mesh, but you can add as many meshes as you need.
          `)]),a(),t(n(p),{class:"table",fetcher:()=>d.value,headers:c,"disable-pagination":""},null,8,["fetcher"]),a(),w]),navigation:e(()=>[t(h,{"next-step":"onboarding-add-services","previous-step":u.value},null,8,["previous-step"])]),_:1})]),_:1})]),_:1}))}});const L=y(E,[["__scopeId","data-v-94485eb5"]]);export{L as default};
