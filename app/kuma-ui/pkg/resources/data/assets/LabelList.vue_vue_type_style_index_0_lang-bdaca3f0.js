import{d as l,o as e,c as o,i as s,a as n,w as i,e as _,c0 as c,u as d,bV as p}from"./index-2d2ce866.js";import{_ as m}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-f4bfbf3e.js";import{E as f}from"./ErrorBlock-9504aefa.js";import{_ as u}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-1a06de61.js";const y={key:3,class:"label-list-content"},B={class:"label-list__col-wrapper multi-col"},L=l({__name:"LabelList",props:{isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1}},setup(t){const a=t;return(r,k)=>(e(),o("div",null,[a.isLoading?(e(),s(u,{key:0})):a.hasError?(e(),s(f,{key:1})):a.isEmpty?(e(),s(m,{key:2})):(e(),o("div",y,[n(d(p),{"border-variant":"noBorder"},{body:i(()=>[_("div",B,[c(r.$slots,"default")])]),_:3})]))]))}});export{L as _};