import{u}from"./user.c909cca1.js";import{_ as c,d as a,o as s,a as _,p as i,f as n,b as t,F as l,e as m,u as v,g as h}from"./index.b32e3542.js";const r=e=>(i("data-v-ee941e46"),e=e(),n(),e),f={class:"notice-item"},g=r(()=>t("div",{class:"notice-item__profile-image"},[t("img",{src:"https://www.w3schools.com/howto/img_avatar.png",alt:""})],-1)),I=r(()=>t("p",{class:"notice-item__description"},"\uC0C1\uD0DC \uD14D\uC2A4\uD2B8",-1)),N=[g,I],w=a({name:"NoticeItem",props:{notice:null},setup(e){return(o,d)=>(s(),_("div",f,N))}});var C=c(w,[["__scopeId","data-v-ee941e46"]]);const x=e=>(i("data-v-79535d32"),e=e(),n(),e),B={class:"notice"},S=x(()=>t("div",{class:"notice__header"},[t("div",{class:"notice__header__logo"},"\uC571 \uC774\uB984"),t("div",{class:"notice__header__actions"})],-1)),D={class:"notice__list"},$=a({name:"Notice",setup(e){const o=u();return o.refreshNoticeList(),(d,y)=>(s(),_("div",B,[S,t("div",D,[(s(!0),_(l,null,m(v(o).noticeList,p=>(s(),h(C,{notice:p},null,8,["notice"]))),256))])]))}});var F=c($,[["__scopeId","data-v-79535d32"]]);export{F as default};