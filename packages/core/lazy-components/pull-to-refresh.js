(function framework7ComponentLoader(t,e){void 0===e&&(e=!0);document,window;var x=t.$,n=(t.Template7,t.utils),D=t.device,$=t.support,r=t.Class,o=(t.Modal,t.ConstructorMethods),s=(t.ModalMethods,function(R){function t(e,t){R.call(this,{},[e]);var s=this,a=x(t),i=a.find(".ptr-preloader");s.$el=a,s.el=a[0],s.app=e,s.useModulesParams({});var l,p,u,f="md"===e.theme;s.done=function(){return(f?i:a).transitionEnd(function(){a.removeClass("ptr-transitioning ptr-pull-up ptr-pull-down"),a.trigger("ptr:done"),s.emit("local::done ptrDone",a[0])}),a.removeClass("ptr-refreshing").addClass("ptr-transitioning"),s},s.refresh=function(){return a.hasClass("ptr-refreshing")||(a.addClass("ptr-transitioning ptr-refreshing"),a.trigger("ptr:refresh",s.done),s.emit("local::refresh ptrRefresh",a[0],s.done)),s};var c,d,h,g,v,m,C,y,T={},M=!1,w=!1,b=0,r=!1,n=a.parents(".page");function o(t){if(p){if("android"!==D.os)return;if("targetTouches"in t&&1<t.targetTouches.length)return}a.hasClass("ptr-refreshing")||x(t.target).closest(".sortable-handler").length||(p=!(y=u=!1),v=c=void 0,"touchstart"===t.type&&(l=t.targetTouches[0].identifier),T.x="touchstart"===t.type?t.targetTouches[0].pageX:t.pageX,T.y="touchstart"===t.type?t.targetTouches[0].pageY:t.pageY)}function P(t){if(p){var e,r,n;if("touchmove"===t.type){if(l&&t.touches)for(var o=0;o<t.touches.length;o+=1)t.touches[o].identifier===l&&(n=t.touches[o]);n||(n=t.targetTouches[0]),e=n.pageX,r=n.pageY}else e=t.pageX,r=t.pageY;if(e&&r)if(void 0===c&&(c=!!(c||Math.abs(r-T.y)>Math.abs(e-T.x))),c){if(g=a[0].scrollTop,void 0===v&&0!==g&&(v=!0),!u){if(a.removeClass("ptr-transitioning"),g>a[0].offsetHeight)return void(p=!1);C&&0<=(m=a.attr("data-ptr-distance")).indexOf("%")&&(m=a[0].offsetHeight*parseInt(m,10)/100),b=a.hasClass("ptr-refreshing")?m:0,w=!(a[0].scrollHeight!==a[0].offsetHeight&&"ios"===D.os&&!f)}u=!0,0<(d=r-T.y)&&g<=0||g<0?("ios"===D.os&&7<parseInt(D.osVersion.split(".")[0],10)&&0===g&&!v&&(w=!0),w&&(t.preventDefault(),h=Math.pow(d,.85)+b,f?i.transform("translate3d(0,"+h+"px,0)").find(".ptr-arrow").transform("rotate("+(d/66*180+100)+"deg)"):a.transform("translate3d(0,"+h+"px,0)")),w&&Math.pow(d,.85)>m||!w&&2*m<=d?(M=!0,a.addClass("ptr-pull-up").removeClass("ptr-pull-down")):(M=!1,a.removeClass("ptr-pull-up").addClass("ptr-pull-down")),y||(a.trigger("ptr:pullstart"),s.emit("local::pullStart ptrPullStart",a[0]),y=!0),a.trigger("ptr:pullmove",{event:t,scrollTop:g,translate:h,touchesDiff:d}),s.emit("local::pullMove ptrPullMove",a[0],{event:t,scrollTop:g,translate:h,touchesDiff:d})):(y=!1,a.removeClass("ptr-pull-up ptr-pull-down"),M=!1)}else p=!1}}function E(t){if("touchend"===t.type&&t.changedTouches&&0<t.changedTouches.length&&l&&t.changedTouches[0].identifier!==l)return u=c=p=!1,void(l=null);p&&u?(h&&(a.addClass("ptr-transitioning"),h=0),f?i.transform("").find(".ptr-arrow").transform(""):a.transform(""),M?(a.addClass("ptr-refreshing"),a.trigger("ptr:refresh",s.done),s.emit("local::refresh ptrRefresh",a[0],s.done)):a.removeClass("ptr-pull-down"),u=p=!1,y&&(a.trigger("ptr:pullend"),s.emit("local::pullEnd ptrPullEnd",a[0]))):u=p=!1}return(0<n.find(".navbar").length||0<n.parents(".view").children(".navbar").length)&&(r=!0),n.hasClass("no-navbar")&&(r=!1),r||a.addClass("ptr-no-navbar"),a.attr("data-ptr-distance")?C=!0:m=f?66:44,n.length&&a.length&&((a[0].f7PullToRefresh=s).attachEvents=function(){var t=!!$.passiveListener&&{passive:!0};a.on(e.touchEvents.start,o,t),e.on("touchmove",P),e.on("touchend:passive",E)},s.detachEvents=function(){var t=!!$.passiveListener&&{passive:!0};a.off(e.touchEvents.start,o,t),e.off("touchmove",P),e.off("touchend:passive",E)},s.useModules(),s.init()),s}return R&&(t.__proto__=R),((t.prototype=Object.create(R&&R.prototype)).constructor=t).prototype.init=function(){this.attachEvents()},t.prototype.destroy=function(){var t=this;t.emit("local::beforeDestroy ptrBeforeDestroy",t),t.$el.trigger("ptr:beforedestroy",t),delete t.el.f7PullToRefresh,t.detachEvents(),n.deleteProps(t),t=null},t}(r)),a={name:"pullToRefresh",create:function(){var r=this;r.ptr=n.extend(o({defaultSelector:".ptr-content",constructor:s,app:r,domProp:"f7PullToRefresh"}),{done:function(t){var e=r.ptr.get(t);if(e)return e.done()},refresh:function(t){var e=r.ptr.get(t);if(e)return e.refresh()}})},static:{PullToRefresh:s},on:{tabMounted:function(t){var r=this;x(t).find(".ptr-content").each(function(t,e){r.ptr.create(e)})},tabBeforeRemove:function(t){var e=x(t),r=this;e.find(".ptr-content").each(function(t,e){r.ptr.destroy(e)})},pageInit:function(t){var r=this;t.$el.find(".ptr-content").each(function(t,e){r.ptr.create(e)})},pageBeforeRemove:function(t){var r=this;t.$el.find(".ptr-content").each(function(t,e){r.ptr.destroy(e)})}}};if(e){if(t.prototype.modules&&t.prototype.modules[a.name])return;t.use(a),t.instance&&(t.instance.useModuleParams(a,t.instance.params),t.instance.useModule(a))}return a}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))