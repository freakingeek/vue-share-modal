import{_ as k,s as c,a as i,b as m,c as p,d as u,e as d,f as C,S as $,r as f,o as s,g as h,h as A,i as L,w as _,F as w,j as S,k as y,l as b,m as N}from"./vendor.145dc9e7.js";const x=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};x();const B={name:"ViteApp",components:{At:c,Share:i,Twitch:m,Twitter:p,Instagram:u,ChatCircle:d,ShareModal:C,ShareModule:$},data(){return{showModal:!0}},computed:{modules(){return[{name:"Chat",component:d},{name:"Instagram",component:u},{name:"Twitter",component:p},{name:"Twitch",component:m},{name:"E-mail",component:c},{name:"More",component:i}]}}};function O(g,o,l,a,e,t){const n=f("share-module"),v=f("share-modal");return s(),h(w,null,[A("button",{onClick:o[0]||(o[0]=r=>e.showModal=!0)},"Show Modal"),L(v,{show:e.showModal,"onUpdate:show":o[1]||(o[1]=r=>e.showModal=!1),link:"https://www.figma.com/community/file/999287868143091993"},{default:_(()=>[(s(!0),h(w,null,S(t.modules,(r,M)=>(s(),y(n,{key:M,tag:"a",href:"#",name:r.name},{default:_(()=>[(s(),y(b(r.component)))]),_:2},1032,["name"]))),128))]),_:1},8,["show"])],64)}var T=k(B,[["render",O]]);N(T).mount("#app");