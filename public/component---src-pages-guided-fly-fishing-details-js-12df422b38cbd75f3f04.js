"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[250],{5097:function(e,t,n){var a=n(7294),l=n(5037),r=n(6187),c=n(994),m=n(7408),s=n(7859),i=n(3530),o=n(5444);t.Z=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],u=(0,a.useContext)(s.c),E=u.searchStatus,d=u.updateSearchStatus,f=(0,a.useContext)(i.p),g=f.menuStatus,v=f.updateMenuStatus,h=function(){window.scrollY>70?n(!0):window.scrollY<70&&n(!1)};return(0,a.useEffect)((function(){return window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",h)}}),[t]),a.createElement("header",{className:"header_01 "+(!0===t?"fixedHeader animated flipInX":null),id:"header"},a.createElement(r.Z,{fluid:!0},a.createElement(c.Z,{className:"justify-content-between"},a.createElement(m.Z,{className:"col-6",lg:2,md:3,sm:3},a.createElement("div",{className:"logo"},a.createElement(o.Link,{to:"/"},a.createElement("h1",null,"The Trinity Guide")))),a.createElement(m.Z,{lg:8,sm:8,md:7,className:"d-none d-lg-block "},a.createElement("nav",{className:"mainmenu text-center"},a.createElement("ul",null,l.H9.map((function(e,t){return a.createElement("li",{key:t,className:void 0!==e.subItems?"menu-item-has-children":""},a.createElement(o.Link,{to:e.url},e.name),void 0!==e.subItems?a.createElement("ul",{className:"sub-menu"},e.subItems.map((function(e,t){return a.createElement("li",{key:t},a.createElement(o.Link,{to:e.url},e.name))}))):null)}))))),a.createElement(m.Z,{lg:2,md:2,sm:4,className:"col-6"},a.createElement("div",{className:"navigator text-right"},a.createElement("a",{className:"search searchToggler",href:"#",onClick:function(e){e.preventDefault(),d(!E)}},a.createElement("i",{className:"mei-magnifying-glass"})),a.createElement("a",{href:"#",className:"menu mobilemenu d-none d-md-none d-lg-none"},a.createElement("i",{className:"mei-menu"})),a.createElement("a",{id:"open-overlay-nav",className:"menu hamburger",onClick:function(e){e.preventDefault(),v(!g)},href:"#"},a.createElement("i",{className:"mei-menu"})))))))}},5035:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.title,n=e.name;return a.createElement("section",{className:"pageBanner"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-lg-12"},a.createElement("div",{className:"banner_content text-center"},a.createElement("h4",null,a.createElement("a",{href:"/"},"home")," - ",n),a.createElement("h2",null,t))))))}},4484:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.data,n=t.image,l=t.title,r=t.categories,c=t.url;return a.createElement("div",{className:"singlefolio"},a.createElement("img",{src:n,alt:l}),a.createElement("div",{className:"folioHover"},a.createElement("a",{className:"cate",href:"#"},r.map((function(e){return e+", "}))),a.createElement("h4",null,a.createElement("a",{href:c},l))))}},8598:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(7294),l=n(5610),r=n(2728),c=n(5035),m=n(6187),s=n(994),i=n(7408),o=n(5037),u=function(){var e=o.TJ.gallery,t=o.TJ.title,n=o.TJ.text,l=o.TJ.client,r=o.TJ.categories,c=o.TJ.date,u=o.TJ.socials;return a.createElement("section",{className:"commonSection porfolioDetail"},a.createElement(m.Z,null,a.createElement(s.Z,null,a.createElement(i.Z,{lg:8,md:7,sm:12},e.map((function(e,t){var n=e.image;return a.createElement("div",{className:"portDetailThumb",key:t},a.createElement("img",{alt:"portDetailThumb",src:n}))}))),a.createElement(i.Z,{lg:4,md:5,sm:12},a.createElement("div",{className:"singlePortfoio_content"},a.createElement("h3",null,t),a.createElement("p",null,n)),a.createElement("div",{className:"singlePortfoio_content"},a.createElement("h4",null,"Clients:"),a.createElement("p",null,l)),a.createElement("div",{className:"singlePortfoio_content"},a.createElement("h4",null,"Category:"),a.createElement("p",null,r.map((function(e,t){var n=e.name,l=e.url;return a.createElement("a",{key:t,href:l},n,",")})))),a.createElement("div",{className:"singlePortfoio_content"},a.createElement("h4",null,"Date:"),a.createElement("p",null,c)),a.createElement("div",{className:"singlePortfoio_content"},a.createElement("h4",null,"Follow:"),a.createElement("ul",null,u.map((function(e,t){var n=e.name,l=e.url;return a.createElement("li",{key:t},a.createElement("a",{href:l},n))}))))))))},E=n(4484),d=n(1587),f=n(7619),g=(n(4506),function(){return a.createElement("section",{className:"commonSection relatedPortfolio"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-lg-12 text-center"},a.createElement("h4",{className:"sub_title"},"our waters"),a.createElement("h2",{className:"sec_title"},"related fly fishing work"),a.createElement("p",{className:"sec_desc"},"We are committed to providing our customers with an exceptional fly fishing experience while",a.createElement("br",null)," sharing our experience and knowledge."))),a.createElement("div",{className:"row"},a.createElement("div",{className:"col-lg-12"},a.createElement(d.t,Object.assign({className:"related_slider"},{spaceBetween:0,slidesPerView:1,breakpoints:{0:{spaceBetween:0,slidesPerView:1},576:{spaceBetween:30,slidesPerView:2},992:{spaceBetween:30,slidesPerView:3}}}),o.Z5.map((function(e,t){return a.createElement(f.o,{key:t},a.createElement(E.Z,{data:e}))})))))))}),v=n(3530),h=n(7859),N=n(5097),p=function(){return a.createElement(v.Z,null,a.createElement(h.Z,null,a.createElement(r.default,{PageTitle:"Portfolio Details Page"},a.createElement(N.Z,null),a.createElement(c.Z,{title:"Portfolio Details",name:"Portfolio"}),a.createElement(u,null),a.createElement(g,null),a.createElement(l.Z,null))))}}}]);
//# sourceMappingURL=component---src-pages-guided-fly-fishing-details-js-12df422b38cbd75f3f04.js.map