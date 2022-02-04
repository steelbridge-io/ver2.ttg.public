/*! For license information please see component---src-pages-portfolio-js-6314c5e19c9ab8c473bd.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[25],{5900:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)){if(a.length){var c=l.apply(null,a);c&&e.push(c)}}else if("object"===r)if(a.toString===Object.prototype.toString)for(var s in a)n.call(a,s)&&a[s]&&e.push(s);else e.push(a.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(a=function(){return l}.apply(t,[]))||(e.exports=a)}()},7408:function(e,t,a){"use strict";var n=a(7462),l=a(5245),r=a(5900),c=a.n(r),s=a(7294),i=a(9541),m=["bsPrefix","className","as"],o=["xl","lg","md","sm","xs"],u=s.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,u=e.as,f=void 0===u?"div":u,d=(0,l.Z)(e,m),E=(0,i.vE)(a,"col"),v=[],g=[];return o.forEach((function(e){var t,a,n,l=d[e];if(delete d[e],"object"==typeof l&&null!=l){var r=l.span;t=void 0===r||r,a=l.offset,n=l.order}else t=l;var c="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+E+c:""+E+c+"-"+t),null!=n&&g.push("order"+c+"-"+n),null!=a&&g.push("offset"+c+"-"+a)})),v.length||v.push(E),s.createElement(f,(0,n.Z)({},d,{ref:t,className:c().apply(void 0,[r].concat(v,g))}))}));u.displayName="Col",t.Z=u},6187:function(e,t,a){"use strict";var n=a(7462),l=a(5245),r=a(5900),c=a.n(r),s=a(7294),i=a(9541),m=["bsPrefix","fluid","as","className"],o=s.forwardRef((function(e,t){var a=e.bsPrefix,r=e.fluid,o=e.as,u=void 0===o?"div":o,f=e.className,d=(0,l.Z)(e,m),E=(0,i.vE)(a,"container"),v="string"==typeof r?"-"+r:"-fluid";return s.createElement(u,(0,n.Z)({ref:t},d,{className:c()(f,r?""+E+v:E)}))}));o.displayName="Container",o.defaultProps={fluid:!1},t.Z=o},994:function(e,t,a){"use strict";var n=a(7462),l=a(5245),r=a(5900),c=a.n(r),s=a(7294),i=a(9541),m=["bsPrefix","className","noGutters","as"],o=["xl","lg","md","sm","xs"],u=s.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,u=e.noGutters,f=e.as,d=void 0===f?"div":f,E=(0,l.Z)(e,m),v=(0,i.vE)(a,"row"),g=v+"-cols",h=[];return o.forEach((function(e){var t,a=E[e];delete E[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&h.push(""+g+n+"-"+t)})),s.createElement(d,(0,n.Z)({ref:t},E,{className:c().apply(void 0,[r,v,u&&"no-gutters"].concat(h))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u},9541:function(e,t,a){"use strict";a.d(t,{vE:function(){return r}});var n=a(7294),l=n.createContext({});l.Consumer,l.Provider;function r(e,t){var a=(0,n.useContext)(l);return e||a[t]||t}},5610:function(e,t,a){"use strict";var n=a(7294),l=a(5037);t.Z=function(){var e=l.yA.light;return n.createElement("footer",{className:"footer_1"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-5 col-sm-6 col-md-5"},n.createElement("aside",{className:"widget aboutwidget"},n.createElement("a",{href:"/"},n.createElement("img",{src:e,alt:""})),n.createElement("p",null,"The Trinity Guide. We provide professional guided fly fishing experiences on the rivers located in California's Shasta County."))),n.createElement("div",{className:"col-lg-4 col-sm-4 col-md-4"},n.createElement("aside",{className:"widget contact_widgets"},n.createElement("h3",{className:"widget_title"},"contact"),n.createElement("p",null,"Douglas City, California",n.createElement("br",null),"United States of America"),n.createElement("p",null,"P: ",n.createElement("a",{href:"tel:15303385734",title:"Telephone Number"},"530-338-5734")),n.createElement("p",null,"E: ",n.createElement("a",{href:"/contact-us"},"Contact Us")))),n.createElement("div",{className:"col-lg-3 col-sm-2 col-md-3"},n.createElement("aside",{className:"widget social_widget"},n.createElement("h3",{className:"widget_title"},"social"),n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:"https://www.instagram.com/thetrinityguide/"},n.createElement("i",{className:"fa fa-instagram"}),"Instagram")),n.createElement("li",null,n.createElement("a",{href:"https://www.facebook.com/thetrinityguide"},n.createElement("i",{className:"fa fa-facebook-square"}),"Facebook")))),n.createElement("aside",{className:"widget disclaimer_widget"},n.createElement("h3",{className:"widget_title"},"Permit & Rights"),n.createElement("p",null,n.createElement("a",{href:"/civil-rights-statement-and-permit-information/",title:"Civil Rights And Permit Information"},"Civil Rights & Permit"))))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-12 col-sm-12 text-center"},n.createElement("div",{className:"copyright"},"© copyright ",(new Date).getFullYear()," by"," ",n.createElement("a",{href:"#"},"thetrinityguide.com"))))))}},5097:function(e,t,a){"use strict";var n=a(7294),l=a(5037),r=a(6187),c=a(994),s=a(7408),i=a(7859),m=a(3530),o=a(5444);t.Z=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1],u=(0,n.useContext)(i.c),f=u.searchStatus,d=u.updateSearchStatus,E=(0,n.useContext)(m.p),v=E.menuStatus,g=E.updateMenuStatus,h=function(){window.scrollY>70?a(!0):window.scrollY<70&&a(!1)};return(0,n.useEffect)((function(){return window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",h)}}),[t]),n.createElement("header",{className:"header_01 "+(!0===t?"fixedHeader animated flipInX":null),id:"header"},n.createElement(r.Z,{fluid:!0},n.createElement(c.Z,{className:"justify-content-between"},n.createElement(s.Z,{className:"col-6",lg:2,md:3,sm:3},n.createElement("div",{className:"logo"},n.createElement(o.Link,{to:"/"},n.createElement("h1",null,"The Trinity Guide")))),n.createElement(s.Z,{lg:8,sm:8,md:7,className:"d-none d-lg-block "},n.createElement("nav",{className:"mainmenu text-center"},n.createElement("ul",null,l.H9.map((function(e,t){return n.createElement("li",{key:t,className:void 0!==e.subItems?"menu-item-has-children":""},n.createElement(o.Link,{to:e.url},e.name),void 0!==e.subItems?n.createElement("ul",{className:"sub-menu"},e.subItems.map((function(e,t){return n.createElement("li",{key:t},n.createElement(o.Link,{to:e.url},e.name))}))):null)}))))),n.createElement(s.Z,{lg:2,md:2,sm:4,className:"col-6"},n.createElement("div",{className:"navigator text-right"},n.createElement("a",{className:"search searchToggler",href:"#",onClick:function(e){e.preventDefault(),d(!f)}},n.createElement("i",{className:"mei-magnifying-glass"})),n.createElement("a",{href:"#",className:"menu mobilemenu d-none d-md-none d-lg-none"},n.createElement("i",{className:"mei-menu"})),n.createElement("a",{id:"open-overlay-nav",className:"menu hamburger",onClick:function(e){e.preventDefault(),g(!v)},href:"#"},n.createElement("i",{className:"mei-menu"})))))))}},5035:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.title,a=e.name;return n.createElement("section",{className:"pageBanner"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-12"},n.createElement("div",{className:"banner_content text-center"},n.createElement("h4",null,n.createElement("a",{href:"/"},"home")," - ",a),n.createElement("h2",null,t))))))}},4484:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.data,a=t.image,l=t.title,r=t.categories,c=t.url;return n.createElement("div",{className:"singlefolio"},n.createElement("img",{src:a,alt:l}),n.createElement("div",{className:"folioHover"},n.createElement("a",{className:"cate",href:"#"},r.map((function(e){return e+", "}))),n.createElement("h4",null,n.createElement("a",{href:c},l))))}},2990:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),l=a(5610),r=a(2728),c=a(5035),s=a(6187),i=a(994),m=a(7408),o=a(5037),u=a(4484),f=function(){return n.createElement("section",{className:"commonSection porfolioPage"},n.createElement(s.Z,null,n.createElement(i.Z,{id:"Grid"},n.createElement("div",{className:"custom"},n.createElement(i.Z,null,o.Z5.map((function(e,t){return n.createElement(m.Z,{lg:4,md:6,sm:12,key:t},n.createElement(u.Z,{data:e}))}))))),n.createElement(i.Z,null,n.createElement(m.Z,{lg:12,className:"text-center"},n.createElement("a",{className:"common_btn red_bg",href:"#"},n.createElement("span",null,"Load More"))))))},d=a(3530),E=a(7859),v=a(5097),g=function(){return n.createElement(d.Z,null,n.createElement(E.Z,null,n.createElement(r.default,{PageTitle:"Portfolio 01 Page"},n.createElement(v.Z,null),n.createElement(c.Z,{title:"Portfolio 01",name:"Portfolio"}),n.createElement(f,null),n.createElement(l.Z,null))))}},7462:function(e,t,a){"use strict";function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(this,arguments)}a.d(t,{Z:function(){return n}})},5245:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}a.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-6314c5e19c9ab8c473bd.js.map