import{m as k,L as D,W as H}from"./kongponents.es-8abed680.js";import{d as B}from"./production-0f1ffdb6.js";import{d as C}from"./datadogLogEvents-302eea7b.js";import{_ as O}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-c8983716.js";import{E as G}from"./ErrorBlock-31dfb839.js";import{_ as M}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-55d18240.js";import{d as T,o as a,h as c,a as d,w as n,e as m,u,f as o,b as p,P as X,r as w,c as I,s as L,i as J,g as _,O as E,a4 as P,m as Q,F as h,t as r,q as S,p as Y,j as Z}from"./runtime-dom.esm-bundler-a6f4ece5.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import{S as ee}from"./StatusBadge-22b77528.js";import{T as te}from"./TagList-0c48ef1b.js";const ae=""+new URL("icon-empty-table-dbb0b754.svg",import.meta.url).href,se={class:"pagination"},ne=T({__name:"PaginationWidget",props:{hasPrevious:{type:Boolean,default:!1},hasNext:{type:Boolean,default:!1}},emits:["next","previous"],setup(s,{emit:f}){const t=s;function N(){f("next"),B.logger.info(C.PAGINATION_NEXT_BUTTON_CLICKED)}function b(){f("previous"),B.logger.info(C.PAGINATION_PREVIOUS_BUTTON_CLICKED)}return(v,R)=>(a(),c("div",se,[t.hasPrevious?(a(),d(u(D),{key:0,appearance:"primary","data-testid":"pagination-previous-button",onClick:b},{default:n(()=>[m(u(k),{icon:"chevronLeft",color:"currentColor",size:"16","hide-title":"","aria-hidden":"true"}),o(`

      Previous
    `)]),_:1})):p("",!0),o(),t.hasNext?(a(),d(u(D),{key:1,appearance:"primary","data-testid":"pagination-next-button",onClick:N},{default:n(()=>[o(`
      Next

      `),m(u(k),{icon:"chevronRight",color:"currentColor",size:"16","hide-title":"","aria-hidden":"true"})]),_:1})):p("",!0)]))}});const oe=q(ne,[["__scopeId","data-v-94d7b089"]]),ie=s=>(Y("data-v-39852618"),s=s(),Z(),s),le={class:"data-overview","data-testid":"data-overview"},re={class:"data-table-controls mb-2"},de={key:3,class:"data-overview-content"},ce={key:0,class:"data-overview-table"},ue=ie(()=>_("img",{class:"mb-3",src:ae},null,-1)),fe={key:0},me={key:1},ge={key:2,class:"data-overview-content mt-6"},pe=T({__name:"DataOverview",props:{selectedEntityName:{type:String,required:!1,default:""},pageSize:{type:Number,required:!1,default:12},isLoading:{type:Boolean,required:!1,default:!1},error:{type:[Error,null],required:!1,default:null},isEmpty:{type:Boolean,required:!1,default:!1},emptyState:{type:Object,required:!1,default:null},tableData:{type:Object,required:!1,default:null},tableDataIsEmpty:{type:Boolean,required:!1,default:!1},showWarnings:{type:Boolean,required:!1,default:!1},showDetails:{type:Boolean,required:!1,default:!1},next:{type:[String,Boolean,null],required:!1,default:!1},pageOffset:{type:Number,required:!1,default:0}},emits:["table-action","refresh","load-data"],setup(s,{emit:f}){const t=s,N=X(),b=w(""),v=w(t.pageOffset),R=I(()=>t.showWarnings?t.tableData.headers:t.tableData.headers.filter(l=>l.key!=="warnings")),z=I(()=>t.tableData.headers.map(l=>l.key).filter(l=>N[l])),x=w(0);L(()=>t.isLoading,function(){!t.isLoading&&t.tableData.data.length>0&&(b.value=t.selectedEntityName||t.tableData.data[0].name)}),L(()=>t.tableData,function(){x.value++});function W(){return{data:t.tableData.data,total:t.tableData.data.length}}function A(l,g){b.value=g.name,f("table-action",g)}function $(){f("refresh"),f("load-data",v.value),B.logger.info(C.TABLE_REFRESH_BUTTON_CLICKED)}function U(){v.value=t.pageOffset-t.pageSize,f("load-data",t.pageOffset-t.pageSize)}function K(){v.value=t.pageOffset+t.pageSize,f("load-data",t.pageOffset+t.pageSize)}function V({headerKey:l}){return{class:["warnings"].includes(l)?"text-center":["details"].includes(l)?"text-right":""}}function F({name:l}){const g=t.selectedEntityName||t.tableData.data[0].name;return{class:l===g?"is-selected":""}}return(l,g)=>{const y=J("router-link");return a(),c("div",le,[_("div",re,[E(l.$slots,"additionalControls",{},void 0,!0),o(),m(u(D),{class:"refresh-button",appearance:"primary",disabled:s.isLoading,icon:"redo","data-testid":"data-overview-refresh-button",onClick:$},{default:n(()=>[o(`
        Refresh
      `)]),_:1},8,["disabled"])]),o(),s.isLoading?(a(),d(M,{key:0})):s.error!==null?(a(),d(G,{key:1,error:s.error},null,8,["error"])):s.isEmpty?(a(),d(O,{key:2})):(a(),c("div",de,[!s.tableDataIsEmpty&&s.tableData?(a(),c("div",ce,[(a(),d(u(H),{key:x.value,class:S(["data-overview-table",{"data-table-is-hidden":s.tableDataIsEmpty}]),fetcher:W,headers:u(R),"cell-attrs":V,"row-attrs":F,"disable-pagination":"","is-clickable":"","data-testid":"data-overview-table","onRow:click":A},P({status:n(({rowValue:e})=>[e?(a(),d(ee,{key:0,status:e},null,8,["status"])):(a(),c(h,{key:1},[o(`
              —
            `)],64))]),tags:n(({rowValue:e})=>[m(te,{tags:e},null,8,["tags"])]),name:n(({row:e,rowValue:i})=>[e.nameRoute?(a(),d(y,{key:0,to:e.nameRoute},{default:n(()=>[o(r(i),1)]),_:2},1032,["to"])):(a(),c(h,{key:1},[o(r(i),1)],64))]),mesh:n(({row:e,rowValue:i})=>[e.meshRoute?(a(),d(y,{key:0,to:e.meshRoute},{default:n(()=>[o(r(i),1)]),_:2},1032,["to"])):(a(),c(h,{key:1},[o(r(i),1)],64))]),service:n(({row:e,rowValue:i})=>[e.serviceInsightRoute?(a(),d(y,{key:0,to:e.serviceInsightRoute},{default:n(()=>[o(r(i),1)]),_:2},1032,["to"])):(a(),c(h,{key:1},[o(r(i),1)],64))]),zone:n(({row:e,rowValue:i})=>[e.zoneRoute?(a(),d(y,{key:0,to:e.zoneRoute},{default:n(()=>[o(r(i),1)]),_:2},1032,["to"])):(a(),c(h,{key:1},[o(r(i),1)],64))]),totalUpdates:n(({row:e})=>[_("span",null,r(e.totalUpdates),1)]),dpVersion:n(({row:e,rowValue:i})=>[_("div",{class:S({"with-warnings":e.unsupportedEnvoyVersion||e.unsupportedKumaDPVersion||e.kumaDpAndKumaCpMismatch})},r(i),3)]),envoyVersion:n(({row:e,rowValue:i})=>[_("div",{class:S({"with-warnings":e.unsupportedEnvoyVersion})},r(i),3)]),_:2},[Q(u(z),e=>({name:e,fn:n(({rowValue:i,row:j})=>[E(l.$slots,e,{rowValue:i,row:j},void 0,!0)])})),s.showWarnings?{name:"warnings",fn:n(({row:e})=>[e.withWarnings?(a(),d(u(k),{key:0,class:"mr-1",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"20"})):p("",!0)]),key:"0"}:void 0,s.showDetails?{name:"details",fn:n(({row:e})=>[m(u(D),{class:"detail-link",appearance:"btn-link",to:e.nameRoute},{icon:n(()=>[m(u(k),{icon:e.warnings.length>0?"warning":"info",color:e.warnings.length>0?"var(--black-75)":"var(--blue-500)","secondary-color":e.warnings.length>0?"var(--yellow-300)":void 0,size:"16","hide-title":""},null,8,["icon","color","secondary-color"])]),default:n(()=>[o(`
              Details
            `)]),_:2},1032,["to"])]),key:"1"}:void 0]),1032,["class","headers"])),o(),m(oe,{"has-previous":v.value>0,"has-next":Boolean(s.next),onNext:K,onPrevious:U},null,8,["has-previous","has-next"])])):p("",!0),o(),s.tableDataIsEmpty&&s.tableData?(a(),d(O,{key:1},P({title:n(()=>[ue,o(),s.emptyState.title?(a(),c("p",fe,r(s.emptyState.title),1)):(a(),c("p",me,`
            No items found
          `))]),_:2},[s.emptyState.message?{name:"message",fn:n(()=>[o(r(s.emptyState.message),1)]),key:"0"}:void 0]),1024)):p("",!0),o(),l.$slots.content?(a(),c("div",ge,[E(l.$slots,"content",{},void 0,!0)])):p("",!0)]))])}}});const Se=q(pe,[["__scopeId","data-v-39852618"]]);export{Se as D};