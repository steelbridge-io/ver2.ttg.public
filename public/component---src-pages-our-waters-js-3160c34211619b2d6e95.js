"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[918],{1597:function(e,a,t){var l=t(1616),n=t(7734);function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},i.apply(this,arguments)}var s={update:function(){var e=this,a=e.rtl,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var i,s=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,r=e.pagination.$el,c=e.params.loop?Math.ceil((s-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((i=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>s-1-2*e.loopedSlides&&(i-=s-2*e.loopedSlides),i>c-1&&(i-=c),i<0&&"bullets"!==e.params.paginationType&&(i=c+i)):i=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===t.type&&e.pagination.bullets&&e.pagination.bullets.length>0){var o,m,u,p=e.pagination.bullets;if(t.dynamicBullets&&(e.pagination.bulletSize=p.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=i-e.previousIndex,e.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),o=i-e.pagination.dynamicBulletIndex,u=((m=o+(Math.min(p.length,t.dynamicMainBullets)-1))+o)/2),p.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),r.length>1)p.each((function(e){var a=(0,l.Z)(e),n=a.index();n===i&&a.addClass(t.bulletActiveClass),t.dynamicBullets&&(n>=o&&n<=m&&a.addClass(t.bulletActiveClass+"-main"),n===o&&a.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),n===m&&a.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))}));else{var d=p.eq(i),g=d.index();if(d.addClass(t.bulletActiveClass),t.dynamicBullets){for(var v=p.eq(o),C=p.eq(m),f=o;f<=m;f+=1)p.eq(f).addClass(t.bulletActiveClass+"-main");if(e.params.loop)if(g>=p.length-t.dynamicMainBullets){for(var b=t.dynamicMainBullets;b>=0;b-=1)p.eq(p.length-b).addClass(t.bulletActiveClass+"-main");p.eq(p.length-t.dynamicMainBullets-1).addClass(t.bulletActiveClass+"-prev")}else v.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),C.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next");else v.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),C.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}}if(t.dynamicBullets){var E=Math.min(p.length,t.dynamicMainBullets+4),h=(e.pagination.bulletSize*E-e.pagination.bulletSize)/2-u*e.pagination.bulletSize,y=a?"right":"left";p.css(e.isHorizontal()?y:"top",h+"px")}}if("fraction"===t.type&&(r.find((0,n.Wc)(t.currentClass)).text(t.formatFractionCurrent(i+1)),r.find((0,n.Wc)(t.totalClass)).text(t.formatFractionTotal(c))),"progressbar"===t.type){var x;x=t.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var N=(i+1)/c,Z=1,k=1;"horizontal"===x?Z=N:k=N,r.find((0,n.Wc)(t.progressbarFillClass)).transform("translate3d(0,0,0) scaleX("+Z+") scaleY("+k+")").transition(e.params.speed)}"custom"===t.type&&t.renderCustom?(r.html(t.renderCustom(e,i+1,c)),e.emit("paginationRender",r[0])):e.emit("paginationUpdate",r[0]),e.params.watchOverflow&&e.enabled&&r[e.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this,a=e.params.pagination;if(a.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,l=e.pagination.$el,i="";if("bullets"===a.type){var s=e.params.loop?Math.ceil((t-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&!e.params.loop&&s>t&&(s=t);for(var r=0;r<s;r+=1)a.renderBullet?i+=a.renderBullet.call(e,r,a.bulletClass):i+="<"+a.bulletElement+' class="'+a.bulletClass+'"></'+a.bulletElement+">";l.html(i),e.pagination.bullets=l.find((0,n.Wc)(a.bulletClass))}"fraction"===a.type&&(i=a.renderFraction?a.renderFraction.call(e,a.currentClass,a.totalClass):'<span class="'+a.currentClass+'"></span> / <span class="'+a.totalClass+'"></span>',l.html(i)),"progressbar"===a.type&&(i=a.renderProgressbar?a.renderProgressbar.call(e,a.progressbarFillClass):'<span class="'+a.progressbarFillClass+'"></span>',l.html(i)),"custom"!==a.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var e=this;e.params.pagination=(0,n.Up)(e.$el,e.params.pagination,e.params.createElements,{el:"swiper-pagination"});var a=e.params.pagination;if(a.el){var t=(0,l.Z)(a.el);0!==t.length&&(e.params.uniqueNavElements&&"string"==typeof a.el&&t.length>1&&(t=e.$el.find(a.el)),"bullets"===a.type&&a.clickable&&t.addClass(a.clickableClass),t.addClass(a.modifierClass+a.type),"bullets"===a.type&&a.dynamicBullets&&(t.addClass(""+a.modifierClass+a.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),"progressbar"===a.type&&a.progressbarOpposite&&t.addClass(a.progressbarOppositeClass),a.clickable&&t.on("click",(0,n.Wc)(a.bulletClass),(function(a){a.preventDefault();var t=(0,l.Z)(this).index()*e.params.slidesPerGroup;e.params.loop&&(t+=e.loopedSlides),e.slideTo(t)})),(0,n.l7)(e.pagination,{$el:t,el:t[0]}),e.enabled||t.addClass(a.lockClass))}},destroy:function(){var e=this,a=e.params.pagination;if(a.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var t=e.pagination.$el;t.removeClass(a.hiddenClass),t.removeClass(a.modifierClass+a.type),e.pagination.bullets&&e.pagination.bullets.removeClass(a.bulletActiveClass),a.clickable&&t.off("click",(0,n.Wc)(a.bulletClass))}}};a.Z={name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){(0,n.cR)(this,{pagination:i({dynamicBulletIndex:0},s)})},on:{init:function(e){e.pagination.init(),e.pagination.render(),e.pagination.update()},activeIndexChange:function(e){(e.params.loop||void 0===e.snapIndex)&&e.pagination.update()},snapIndexChange:function(e){e.params.loop||e.pagination.update()},slidesLengthChange:function(e){e.params.loop&&(e.pagination.render(),e.pagination.update())},snapGridLengthChange:function(e){e.params.loop||(e.pagination.render(),e.pagination.update())},destroy:function(e){e.pagination.destroy()},"enable disable":function(e){var a=e.pagination.$el;a&&a[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)},click:function(e,a){var t=a.target;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&e.pagination.$el.length>0&&!(0,l.Z)(t).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&t===e.navigation.nextEl||e.navigation.prevEl&&t===e.navigation.prevEl))return;!0===e.pagination.$el.hasClass(e.params.pagination.hiddenClass)?e.emit("paginationShow"):e.emit("paginationHide"),e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)}}}}},5097:function(e,a,t){var l=t(7294),n=t(5037),i=t(6187),s=t(994),r=t(7408),c=t(7859),o=t(3530),m=t(5444);a.Z=function(){var e=(0,l.useState)(!1),a=e[0],t=e[1],u=(0,l.useContext)(c.c),p=u.searchStatus,d=u.updateSearchStatus,g=(0,l.useContext)(o.p),v=g.menuStatus,C=g.updateMenuStatus,f=function(){window.scrollY>70?t(!0):window.scrollY<70&&t(!1)};return(0,l.useEffect)((function(){return window.addEventListener("scroll",f),function(){window.removeEventListener("scroll",f)}}),[a]),l.createElement("header",{className:"header_01 "+(!0===a?"fixedHeader animated flipInX":null),id:"header"},l.createElement(i.Z,{fluid:!0},l.createElement(s.Z,{className:"justify-content-between"},l.createElement(r.Z,{className:"col-6",lg:2,md:3,sm:3},l.createElement("div",{className:"logo"},l.createElement(m.Link,{to:"/"},l.createElement("h1",null,"The Trinity Guide")))),l.createElement(r.Z,{lg:8,sm:8,md:7,className:"d-none d-lg-block "},l.createElement("nav",{className:"mainmenu text-center"},l.createElement("ul",null,n.H9.map((function(e,a){return l.createElement("li",{key:a,className:void 0!==e.subItems?"menu-item-has-children":""},l.createElement(m.Link,{to:e.url},e.name),void 0!==e.subItems?l.createElement("ul",{className:"sub-menu"},e.subItems.map((function(e,a){return l.createElement("li",{key:a},l.createElement(m.Link,{to:e.url},e.name))}))):null)}))))),l.createElement(r.Z,{lg:2,md:2,sm:4,className:"col-6"},l.createElement("div",{className:"navigator text-right"},l.createElement("a",{className:"search searchToggler",href:"#",onClick:function(e){e.preventDefault(),d(!p)}},l.createElement("i",{className:"mei-magnifying-glass"})),l.createElement("a",{href:"#",className:"menu mobilemenu d-none d-md-none d-lg-none"},l.createElement("i",{className:"mei-menu"})),l.createElement("a",{id:"open-overlay-nav",className:"menu hamburger",onClick:function(e){e.preventDefault(),C(!v)},href:"#"},l.createElement("i",{className:"mei-menu"})))))))}},5035:function(e,a,t){var l=t(7294);a.Z=function(e){var a=e.title,t=e.name;return l.createElement("section",{className:"pageBanner"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12"},l.createElement("div",{className:"banner_content text-center"},l.createElement("h4",null,l.createElement("a",{href:"/"},"home")," - ",t),l.createElement("h2",null,a))))))}},7419:function(e,a,t){var l=t(7294),n=t(5444);a.Z=function(e){var a=e.data,t=a.title,i=a.text,s=a.iconName,r=a.url;return l.createElement("div",{className:"icon_box_2 text-center"},l.createElement("h3",null,t),l.createElement("p",null,i),l.createElement("div",{className:"iconWrap"},l.createElement("i",{className:s})),l.createElement(n.Link,{to:r},"discover more"))}},199:function(e,a,t){t.d(a,{Z:function(){return m}});var l=t(7294),n=t(6187),i=t(994),s=t(7408),r=t(5037),c=t(5444),o=function(e){var a=e.data,t=a.title,n=a.image,i=a.url;return l.createElement("div",{className:"single_wedo"},l.createElement("img",{src:n,alt:t}),l.createElement("div",{className:"overlay_wedo"},l.createElement(c.Link,{to:i},t)))},m=function(){var e=r.$f.sectionContent,a=r.$f.posts,t=e.title,c=e.subTitle,m=e.text;return l.createElement("section",{className:"commonSection what_wedo_2"},l.createElement(n.Z,null,l.createElement(i.Z,null,l.createElement(s.Z,{lg:12,className:"text-center"},l.createElement("h4",{className:"sub_title "},c),l.createElement("h2",{className:"sec_title "},t),l.createElement("p",{className:"sec_desc "},m))),l.createElement(i.Z,null,a.map((function(e,a){return l.createElement(s.Z,{lg:4,md:12,key:a},l.createElement(o,{data:e}))})))))}},6126:function(e,a,t){t.d(a,{Z:function(){return m}});var l=t(7294),n=t(6187),i=t(994),s=t(7408),r=t(5037),c=t(5444),o=function(e){var a=e.data,t=a.url,n=(a.iconName,a.title),i=a.title2,s=a.image;return l.createElement(c.Link,{className:"icon_box_1 text-center",to:t},l.createElement("div",{className:"flipper"},l.createElement("div",{className:"front"},l.createElement("div",{className:"service_img mb-1618"},l.createElement("img",{src:s,alt:"The Trinity Guide Co."})),l.createElement("h3",null,n)),l.createElement("div",{className:"back"},l.createElement("div",{className:"service_img mb-1618"},l.createElement("img",{src:s,alt:"The Trinity Guide Co."})),l.createElement("h3",null,i))))},m=function(){var e=r.DE.sectionContent,a=r.DE.posts,t=e.title,c=e.subTitle,m=e.text;return l.createElement("section",{className:"service_section commonSection"},l.createElement(n.Z,null,l.createElement(i.Z,null,l.createElement(s.Z,{lg:12,className:"text-center"},l.createElement("h4",{className:"sub_title red_color"},c),l.createElement("h2",{className:"sec_title white"},t),l.createElement("p",{className:"sec_desc color_aaa"},m))),l.createElement(i.Z,{className:"custom_column"},a.map((function(e,a){return l.createElement(s.Z,{key:a,lg:3,md:6,sm:12},l.createElement(o,{data:e}))})))))}},2862:function(e,a,t){t.r(a),t.d(a,{default:function(){return y}});var l=t(7294),n=t(5610),i=t(2728),s=t(5035),r=t(6187),c=t(994),o=t(7408),m=t(7419),u=t(5037),p=function(){return l.createElement("section",{className:"service_section_2 commonSection"},l.createElement(r.Z,null,l.createElement(c.Z,null,u.j.map((function(e,a){return l.createElement(o.Z,{lg:4,md:12,key:a},l.createElement(m.Z,{data:e}))})))))},d=t(6126),g=t(199),v=t(1794),C=t(2760),f=t(3037),b=t(3530),E=t(7859),h=t(5097),y=function(){return l.createElement(b.Z,null,l.createElement(E.Z,null,l.createElement(i.default,{PageTitle:"Services Page"},l.createElement(h.Z,null),l.createElement(s.Z,{title:"Services",name:"Services"}),l.createElement(p,null),l.createElement(d.Z,null),l.createElement(g.Z,null),l.createElement(v.Z,null),l.createElement(C.Z,{extraClassName:"pb_120"}),l.createElement(f.Z,null),l.createElement(n.Z,null))))}}}]);
//# sourceMappingURL=component---src-pages-our-waters-js-3160c34211619b2d6e95.js.map