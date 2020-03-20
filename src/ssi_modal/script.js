/* ssi_modal
 * https://cdn.bootcss.com/ssi-modal/1.0.27/js/ssi-modal.min.js
 */
(function(e,v){"object"===typeof module&&module.exports?module.exports=v(require("jquery")):e.ssi_modal=v(e.jQuery)})(this,function(e){function v(a){return!!a.match(v.regex)}function H(a,b){function c(){var b=e('a[data-ssi_imgGroup="'+k.attr("data-ssi_imgGroup")+'"]');if(b.length){var c=b.index(k),b=b.length;if(!(c+1>=b&&1>c)){var d=e('<div class="ssi-modalNavigation"></divid>').mouseover(function(){d.addClass("ssi-navFadeIn")}).mouseleave(function(){d.removeClass("ssi-navFadeIn")}),h=e('<div class="ssi-modalNext '+
(c+1>=b?"ssi-hidden":"")+'"><span></span></div>'),g=e('<div class="ssi-modalPrev '+(1>c?"ssi-hidden":"")+'"><span></span></div>');d.append(h,g);a.get$backdrop().one("backdropClose.ssi-modal",function(){q=w=""});a.get$modal().one("beforeClose.ssi-modal",function(){d.remove()}).one("onShow.ssi-modal",function(){h.one("click",function(b){b.preventDefault();a.navigate("next");e(this).off("click.ssi_modal")});g.one("click",function(b){b.preventDefault();a.navigate("prev");e(this).off("click.ssi_modal")})});
return d}}}function d(b){f.find(".ssi-loader").remove();var c=[];if(!b&&""!==a.options.imgButtons&&!e.isEmptyObject(a.options.imgButtons)){var d=a.setButtons(a.options.imgButtons,a.get$content()).addClass("ssi-imgButtons");!0===a.options.hideImgButtons&&(d.addClass("ssi-navFade ssi-navFadeOut"),a.get$wrapper().mouseover(function(){d.addClass("ssi-navFadeIn")}).mouseleave(function(){d.removeClass("ssi-navFadeIn")}));c.push(d)}c.push(n);f.append(c)}function h(b,c){clearInterval(B);var e=b||(x?n[0].naturalWidth:
n.width()),h=c||(x?n[0].naturalHeight:n.height()),g=a.setModalHeight(120,!0);(h>m-g||e>r)&&!0===a.options.fixedHeight&&(g=Math.min((r-100)/e,(m-g)/h),e*=g,h*=g,2<u&&t.addClass("ssi-overHeight"));f.css("height",h);a.options.center&&f.parent().css({width:e,height:h});t.css("width",e);d();t.addClass("ssi-imgBorder")}function g(){if(x){if(0<n[0].naturalWidth){h();return}}else if(clearInterval(B),50<n.width()){h();return}l=!0}var t=a.get$wrapper(),f=t.find("#ssi-modalContent");if(b&&"#"!=b){var B,l,x=
"naturalWidth"in new Image,m=e(window).height(),r=e(window).width(),n=[""],u=0;a.options.navigation&&k&&f.append(c);var p=["jpg","jpeg","png","gif","bmp"];!a.options.allowIframe||-1!==e.inArray(b.split(".").pop().toLowerCase(),p)||v(b)?(n=e('<img src="'+b+'" class="ssi-modalImg"/>').on("load",function(){if(!x){var a=new Image;a.src=n.attr("src");h(a.width,a.height)}}).error(function(){var a=k?k.attr("data-alt"):"";n="<h3>Image not found</h3><br>"+("undefined"!==typeof a?"<h4>"+a+"</h4>":"");d(!0)}),
g(),l&&(B=setInterval(function(){t.addClass("ssi-imgBorder");g();u++},50))):("boolean"!==typeof a.options.iframe.allowFullScreen&&(a.options.iframe.allowFullScreen=!0),a.options.iframe.className=a.options.iframe.className||"",n=e('<iframe src="'+b+'" frameborder="0" '+(a.options.iframe.allowFullScreen?"allowfullscreen":"")+"></iframe>"),a.options.center?t.addClass("ssi-iframe ").find("#ssi-modalWindow"+a.numberId).addClass(a.options.iframe.className):t.addClass("ssi-iframe "+a.options.iframe.className),
d())}else p=k?k.attr("data-alt"):"",n="<h3>Image not found</h3><br>"+("undefined"!==typeof p?"<h4>"+p+"</h4>":""),d(!0)}function u(a){a instanceof Array||(a=[a]);return a}var G=function(){var a=!1,b=["Webkit","Moz","O","ms","Khtml"],c=document.createElement("div");void 0!==c.style.animationName&&(a=!0);if(!1===a)for(var d=0;d<b.length;d++)if(void 0!==c.style[b[d]+"AnimationName"]){a=b[d];a.toLowerCase();a=!0;break}return a}(),p=0,y=0,r={stackModal:0,normalModal:0},C=0,m=!1,f=function(a){this.numberId=
C;this.pluginName=a.stack?"stackModal":"normalModal";this.backdropId="";this.showbd=!0;this.setOptions(a)};f.prototype.setOptions=function(a,b){if("object"===typeof a){var c=this;this.options=e.extend(!0,{content:"",bodyScroll:!1,keepContent:!1,position:"",backdrop:!0,stack:!1,onClickClose:!1,bodyElement:!1,className:"",backdropClassName:"",preview:{icon:!1,hideIcons:!1,state:"normal"},closeAfter:!1,outSideClose:!0,onClose:"",onShow:"",beforeClose:"",beforeShow:"",iframe:{allowFullScreen:!0,className:""},
center:!1,closeIcon:!0,navigation:!1,sizeClass:"medium",animation:!1,modalAnimation:void 0,backdropAnimation:void 0,animationSpeed:300,buttons:[],iconButtons:[],title:"",fixedHeight:!1,fitScreen:!1},a);this.options.iconButtons=u(this.options.iconButtons);this.options.preview.icon&&this.options.iconButtons.push({className:"ssi-displayIcon",method:function(){c.changePreviewState()}});this.options.closeIcon&&this.options.iconButtons.push({className:"ssi-closeIcon",method:function(){c.close()}})}else this.options[a]=
b;I(this);return this};f.prototype.init=function(){this.options.backdrop&&this.backdropInit();this.modalInit();C++;return this};f.prototype.get$content=function(){return this.get$modal().find("#ssi-modalContent")};f.prototype.get$modal=function(a){a=a||this.modalId;return this.$modal||e("#"+a)};f.prototype.get$title=function(){return this.get$modal().find("#ssi-modalTitle")};f.prototype.destroyTitle=function(){this.get$title().remove();this.options.title="";return this};f.prototype.destroyContent=
function(){this.get$content().remove();this.options.content="";return this};f.prototype.destroyButtons=function(a){this.get$buttons(a).remove();this.options.buttons=[];return this};f.prototype.destroyIcons=function(){this.get$icons().remove();this.options.icons=[];return this};f.prototype.get$icons=function(){return this.get$modal().find(".ssi-topIcons")};f.prototype.get$buttons=function(a){a=a||"buttons";return this.get$modal().find("#ssi-"+a)};f.prototype.get$window=function(){return this.get$modal().find("#ssi-modalWindow")};
f.prototype.get$wrapper=function(){return this.options.stack?this.get$modal().parent():this.get$modal().find("#ssi-modalWrapper")};f.prototype.get$backdrop=function(){return this.$backdrop||e("#"+this.backdropId)};var D=null;f.prototype.changePreviewState=function(){var a=this.get$modal();if("fullScreen"===this.options.preview.state)a.removeClass("ssi-fullScreen"),this.options.preview.state="normal",a.find("#ssi-modalContent").css("height",""),(this.options.fixedHeight||this.options.fitScreen)&&this.setModalHeight(),
clearTimeout(D),a.off("mousemove.ssi-modal");else{if(this.options.preview.hideIcons){var b=a.find(".ssi-topIcons");if(this.options.buttons)var c=a.find("#ssi-buttons");a.on("mousemove.ssi-modal",function(){clearTimeout(D);b.fadeIn();c.slideDown();D=setTimeout(function(){c.slideUp();b.fadeOut()},2E3)})}this.setModalHeight(40,"height");a.addClass("ssi-fullScreen");this.options.preview.state="fullScreen"}return this};f.prototype.setPluginName=function(a){this.pluginName=a;r[a]=0;return this};f.prototype.setContent=
function(a,b){b=b||"html";var c;!0!==this.options.content?(c=e('<div id="ssi-modalContent" class="ssi-modalContent '+(this.options.fixedHeight?"ssi-overflow ":"")+'"></div>'),""===this.options.content&&(!0===this.options.title?this.get$title().after(c):this.get$window().prepend(c),this.setModalHeight()),this.options.content=!0):c=this.get$content();var d=a;if(a instanceof e&&!0===this.options.bodyElement){if(!0===this.options.extendOriginalContent){var h=this.options.beforeClose;this.options.beforeClose=
function(b){var c;"function"===typeof h&&(c=h(b));if(!1!==c)a.eq(0).after(b.get$content().contents().unwrap().css("display","")).remove();else return c}}d=a.eq(0).clone();d.is(":visible")||d.show()}c[b](d);return c};f.prototype.setButtons=function(a,b){var c,d=!1;a=u(a);!1!==b&&(b="undefined"!==typeof b?e(b):this.get$window(),c=b.find("#ssi-buttons"),c=c[0]);c||(c=e('<div id="ssi-buttons" class="ssi-buttons"><div  id="ssi-leftButtons" class="ssi-leftButtons"></div><div id="ssi-rightButtons" class="ssi-rightButtons"></div></div>'),
b&&(d=!0,b.append(c)),this.options.buttons=!0);for(var h=a.length,g=c.find("#ssi-leftButtons"),f=c.find("#ssi-rightButtons"),F=[],k=[],l=0,m;l<h;l++)m=this.generateButton(a[l]),"left"===a[l].side?F.push(m):k.push(m);g.append(F);f.append(k);d&&this.setModalHeight();return c};var z=function(a,b){switch(typeof a){case "boolean":a="show"===b?a?"anim ssi-fadeIn":"ssi-show":a?"anim ssi-fadeOut":"ssi-hidden";break;case "undefined":a="show"===b?"ssi-show":"ssi-hidden"}return a},I=function(a){var b=a.options.modalAnimation||
a.options.animation||!1,c=a.options.backdropAnimation||a.options.animation||!1,d;d=z("undefined"!==typeof b.show?b.show:b,"show");b=z("undefined"!==typeof b.hide?b.hide:b,"hide");a.options.modalAnimation={show:d,hide:b};d=z("undefined"!==typeof c.show?c.show:c,"show");b=z("undefined"!==typeof c.hide?c.hide:c,"hide");a.options.backdropAnimation={show:d,hide:b};!1===G&&(a.options.modalAnimation={show:"ssi-show"!==a.options.modalAnimation.show?"anim ssi-fadeIn":"ssi-show",hide:"ssi-hidden"!==a.options.modalAnimation.hide?
"anim ssi-fadeOut":"ssi-hidden"},a.options.backdropAnimation={show:"ssi-show"!==a.options.backdropAnimation.show?"anim ssi-fadeIn":"ssi-show",hide:"ssi-hidden"!==a.options.backdropAnimation.hide?"anim ssi-fadeOut":"ssi-hidden"})},J=function(a){var b=a.get$modal();a.time=setTimeout(function(){a.close()},1E3*a.options.closeAfter.time);if(a.options.closeAfter.displayTime&&a.options.title){var c=b.find("span.ssi-displayTime").html(a.options.closeAfter.time);E(a,c,function(){a.$displayTime.remove()})}a.options.closeAfter.resetOnHover&&
(b.on("mouseenter.ssi-modal",function(){clearTimeout(a.time);c&&(c.html(a.options.closeAfter.time),clearInterval(a.countDown))}),b.on("mouseleave.ssi-modal",function(){a.time=setTimeout(function(){a.close()},1E3*a.options.closeAfter.time);a.options.closeAfter.displayTime&&a.options.title&&E(a,c,function(){c.parent().remove()})}))};f.prototype.backdropInit=function(){var a;if("string"===typeof m)a=e("#"+m),this.backdropId=m,a=a.attr("class","ssi-backdrop "+this.pluginName+" "+this.options.backdropClassName),
this.showbd=!1,m=!0;else{a=e('<div id="ssi-backdrop'+this.numberId+'" class="ssi-backdrop ssi-hidden '+this.options.backdropClassName+" "+this.pluginName+'"></div>');if("shared"===this.options.backdrop||"byKindShared"===this.options.backdrop){var b;b="byKindShared"===this.options.backdrop?e(".ssi-backdrop.ssi-openedDialog."+this.pluginName):e(".ssi-backdrop.ssi-openedDialog");b[0]?(this.backdropId=b.attr("id"),this.showbd=!1,a=b):(e("body").append(a),this.backdropId="ssi-backdrop"+this.numberId,this.showbd=
!0)}else!0===this.options.backdrop&&(e("body").append(a),this.backdropId="ssi-backdrop"+this.numberId,this.showbd=!0);this.$backdrop=a}if(this.options.outSideClose&&this.options.position){var c=this;a.on("click.ssi-modal"+this.numberId,function(a){a.preventDefault();c.close()})}return a};f.prototype.setIcons=function(a){var b,c=[];!0!==this.options.iconButtons?(b=e('<div class="ssi-topIcons"></div>'),this.options.iconButtons=!0):b=this.get$icons();for(var d=this,h=a.length,g=0,f;g<h;g++)f=a[g],function(a){c.push(e('<a class="'+
a.className+'"></a>').click(function(b){b.preventDefault();"function"===typeof a.method&&e.proxy(a.method,this)(b,d)}))}(f);b.append(c);return b};var K=function(a){var b=e('<div id="ssi-modalWindow" class="ssi-modalWindow '+(a.options.center?a.options.sizeClass:"")+(a.options.stack?" "+a.options.sizeClass+" "+a.options.className+" ":"")+'"></div>'),c="",d=[];a.options.content&&(c=a.setContent(a.options.content,"html"));a.options.title&&d.push(a.setTitle(a.options.title));a.options.onClickClose&&b.addClass("ssi-hover").click(function(b){b=
e(b.target);b.is("a")||b.is("button")||a.close()});0<a.options.iconButtons.length&&d.push(a.setIcons(a.options.iconButtons,!0));d.push(c);"undefined"===typeof a.options.buttons||e.isEmptyObject(a.options.buttons)||d.push(a.setButtons(a.options.buttons,!1));b.append(d);return b};f.prototype.generateButton=function(a){a=e.extend({},{className:"",enableAfter:!1,method:function(){},type:"button",focused:!1,id:"",label:"",modalAnimation:"",backdropAnimation:""},a);var b="button",c="",d=this,h;"link"===
a.type&&(b="a",c=' href="#"');var g=e("<"+b+c+(a.id?' id="'+a.id+'"':" ")+(a.enableAfter?"disabled ":"")+' class="ssi-modalBtn '+(a.className||"")+'">'+a.label+"</"+b+">");if("number"===typeof a.enableAfter){var f=e('<span class="ssi-countDown">'+a.enableAfter+"</span>");E(d,f,function(){g.removeClass("disabled");g.removeAttr("disabled");f.remove()});g.append(f)}if(a.keyPress)e("body").on("keydown.ssi_modal",function(b){b.keyCode!=a.keyPress||g.is(":disabled")||g.trigger("click")});a.focused&&setTimeout(function(){g.focus()},
100);return g.click(function(b){b.preventDefault();a.clearTimeOut&&(clearTimeout(d.time),d.time=null,clearInterval(d.countDown));"function"===typeof a.method&&(h=e.proxy(a.method,this)(b,d));!1!==h&&("boolean"===typeof a.keepContent&&a.keepContent!==d.options.keepContent&&(d.options.keepContent=a.keepContent),a.closeAfter&&d.close())})};f.prototype.modalInit=function(){var a=K(this),b=this;if(this.options.position&&this.options.stack){var c="append";-1<this.options.position.indexOf("bottom")&&(c=
"prepend");var d=this.options.position.replace(" ","."),d=e("div.ssi-modalOuter.ssi-stack."+d);if(d[0])d.find("#ssi-modalWrapper")[c](a);this.$modal=a}if(!this.options.stack||!d[0]){var h=e('<div id="ssi-modalWrapper" class=" ssi-modalWrapper '+this.options.sizeClass+'"></div>'),f=e('<div class="ssi-modalOuter '+(this.options.stack?" ssi-stack":""+this.options.className)+(this.options.center?" ssi-center ":" ")+" "+(this.options.position?" ssi-modalPositioned "+this.options.position:"")+'"></div>').append(h.append(a)).appendTo(e("body"));
this.options.stack||(this.$modal=f,f.one("onShow.ssi-modal",function(){!0===b.options.outSideClose&&(f.click(function(a){a.target===this&&(a.preventDefault(),b.close())}),h.click(function(a){a.target===this&&(a.preventDefault(),b.close())}))}))}this.modalId="ssi-"+this.pluginName+this.numberId;this.$modal.attr("id","ssi-"+this.pluginName+this.numberId);this.$modal.addClass(this.pluginName+" ssi-modal");this.$modal.data("ssi-modal",this).addClass("ssi-hidden");"string"===typeof m&&this.backdropInit();
return this.$modal};f.prototype.setTitle=function(a){var b,c=!1;!0!==this.options.title?(b=e('<div id="ssi-modalTitle" class="ssi-modalTitle '+(this.options.content?"":"ssi-borderOut ")+'">'+this.options.title+"</div>"),""===this.options.title&&(this.get$window().prepend(b),c=!0),this.options.title=!0):b=this.get$title();b.html(a);c&&this.setModalHeight();return b};f.prototype.showModal=function(){var a=this.get$modal(),b=this;setTimeout(function(){a.trigger("beforeShow.ssi-modal")},0);!1===this.options.bodyScroll&&
(e("body").addClass("ssi-modalOpen"),p++);"shared"===this.options.backdrop?y++:"byKindShared"===this.options.backdrop&&r[this.pluginName]++;a.addClass("ssi-openedDialog");var c=function(){e(this).removeClass("ssi-hidden");if("function"===typeof b.options.onShow)b.options.onShow(b);setTimeout(function(){a.trigger("onShow.ssi-modal")},0)};a.addAnimation(this.options.modalAnimation.show,function(){c()}).removeClass("ssi-hidden");this.options.center&&a.css("display","");"fullScreen"===b.options.preview.state&&
(b.options.preview.state="normal",b.changePreviewState());this.setModalHeight();"number"===typeof this.options.closeAfter.time&&J(this);delete this.$modal};f.prototype.showBackdrop=function(){this.get$backdrop().addClass("ssi-openedDialog").addAnimation(this.options.backdropAnimation.show).removeClass("ssi-hidden");delete this.$backdrop};f.prototype.show=function(){if("function"===typeof this.options.beforeShow&&!1===this.options.beforeShow(this))return this;this.showModal();!1===m&&this.options.backdrop&&
!0===this.showbd&&this.showBackdrop();return this};f.prototype.destroyBackdrop=function(){var a=this.get$backdrop(),b=this;!0!==this.options.keepContent&&a.off("click.ssi-modal"+this.numberId);var c=this,d=function(){!0!==c.options.backdrop&&(!("shared"===c.options.backdrop&&1>y||"byKindShared"===c.options.backdrop&&1>r[c.pluginName])||c.get$modal(c.modalId.replace(c.numberId.toString(),c.backdropId.replace("ssi-backdrop","")))[0]&&c.backdropId.replace("ssi-backdrop","")!=c.numberId)||a.addAnimation(c.options.backdropAnimation.hide,
function(){a.addClass("ssi-hidden").removeClass("ssi-openedDialog");a.trigger("backdropClose.ssi-modal");!0!==b.options.keepContent&&a.remove()});m===c.backdropId&&(m=!1)};this.options.stack&&this.options.outSideClose?setTimeout(d,10):d();return this};f.prototype.destroyModal=function(){var a=this.get$modal(),b=this;a.off(".ssi_modal");a.trigger("beforeClose.ssi-modal");"shared"===this.options.backdrop?y--:"byKindShared"===this.options.backdrop&&r[this.pluginName]--;a.hasClass("ssi-openedDialog")&&
(a.removeClass("ssi-openedDialog"),!1===this.options.bodyScroll&&p--);a.addAnimation(this.options.modalAnimation.hide,function(){a.addClass("ssi-hidden");b.options.stack?a.addClass("ssi-smoothSlide").slideUp("500",function(){a.removeClass("ssi-smoothSlide");a.trigger("onClose.ssi-modal");!0!==b.options.keepContent&&a.remove()}):(a.trigger("onClose.ssi-modal"),!0!==b.options.keepContent&&a.remove());if("function"===typeof b.options.onClose)b.options.onClose(b);!0!==b.options.keepContent&&a.off(".ssi-modal").find("#ssi-modalWrapper").off(".ssi-modal")});
this.options.icons=[];this.options.buttons=[];this.options.content="";this.options.title="";m=this.backdropId;return this};f.prototype.close=function(){if("function"===typeof this.options.beforeClose&&!1===this.options.beforeClose(this))return this;var a=e("body");a.off(".ssi_modal");this.destroyModal();this.destroyBackdrop();1>p&&a.removeClass("ssi-modalOpen");clearTimeout(this.time);this.time=null;clearInterval(this.countDown);return this};f.prototype.setModalHeight=function(a,b){if(!this.options.fitScreen&&
!this.options.fixedHeight&&!b)return this;"number"!==typeof a&&(a=100);var c=this.get$content(),d=e(window).height(),f=0,g=0;this.options.buttons&&(f=c.next().innerHeight());this.options.title&&(g=this.get$title().innerHeight());f=f+g+a;g=0;b?"string"===typeof b&&c.css(b,d-f):this.options.fitScreen&&this.options.fixedHeight?("number"===typeof this.options.fitScreen&&(g=Math.abs((this.options.fitScreen+this.options.fixedHeight)/2-a)),c.css("height",d-f-g)):(this.options.fitScreen&&("number"===typeof this.options.fitScreen&&
(g=Math.abs(this.options.fitScreen-a)),c.css("min-height",d-f-g)),this.options.fixedHeight&&(g=0,"number"===typeof this.options.fixedHeight&&(g=Math.abs(this.options.fixedHeight-a)),c.css("max-height",d-f-g)));return f};var E=function(a,b,c){a.countDown=setInterval(function(){var d=parseInt(b.html());0!==d-1?b.html(d-1):(c&&c(),clearInterval(a.countDown))},1E3)};e.fn.extend({hasClasses:function(a){for(var b in a)if(e(this).hasClass(a[b]))return!0;return!1}});var l={checkElement:function(a){a=e(a);
if(a[0]){var b=a.data("ssi-modal");if(b&&!e("#"+b.modalId)[0])return a.data("ssi-modal",""),!1}return b?b:!1},createObject:function(a,b){var c,d;"undefined"!==typeof b?(c=e(b),d=c.data("ssi-modal")):a.keepContent=!1;d||(d=new f(a),"undefined"!==typeof b&&c.data("ssi-modal",d));return d},show:function(a,b){var c=!1;b&&(c=this.checkElement(b));if(!1===c)return this.createObject(a,b).init().show();if("object"===typeof c)return c.show()},close:function(a){a||(a=e(".ssi-modalOuter"),a=a.eq(a.length-1));
return a.data("ssi-modal").close()},proto:f.prototype,closeAll:function(a,b){function c(a){for(var c=a.length-1;0<=c;c--){var d=a.eq(c);d.hasClasses(b)||d.data("ssi-modal").close()}}b=u(b);var d;d=typeof a;if("string"===d&&""!==a||"array"===d){a=u(a);for(var f=a.length,g=0;g<f;g++)d=e(".ssi-modal.ssi-openedDialog."+a[g]),c(d)}else d=e(".ssi-modal.ssi-openedDialog"),c(d)},removeAll:function(){e(".ssi-modalOuter").addClass("ssi-hidden").remove();e(".ssi-backdrop").addClass("ssi-hidden").remove();e("body").removeClass("ssi-modalOpen");
y=p=0;r={stackModal:0,normalModal:0};C=0},dialog:function(a,b){var c={sizeClass:"dialog",okBtn:{className:"",label:"Ok"},title:"",closeIcon:!1,outSideClose:!1};a.okBtn=e.extend({},c.okBtn,a.okBtn);a=e.extend({},c,a);a.buttons=[{className:a.okBtn.className,label:a.okBtn.label,closeAfter:!0,method:b}];return(new f(a)).init().show()},confirm:function(a,b){var c={okBtn:{className:"",label:"Ok"},cancelBtn:{className:"",label:"Cancel"},closeIcon:!1,sizeClass:"dialog",title:"",outSideClose:!1};a.okBtn=e.extend({},
c.okBtn,a.okBtn);a.cancelBtn=e.extend({},c.cancelBtn,a.cancelBtn);a=e.extend({},c,a);a.buttons=[{className:a.okBtn.className,label:a.okBtn.label,closeAfter:!0,method:function(a,c){"function"===typeof b&&b(!0,a,c)}},{className:a.cancelBtn.className,label:a.cancelBtn.label,closeAfter:!0,method:function(a,c){"function"===typeof b&&b(!1,a,c)}}];return(new f(a)).init().show()}};v.regex=/^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+\=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
var A={"ssi-mainOption":{}};l.imgBox=function(a,b){A[b||"ssi-mainOption"]=e.extend({},A["ssi-mainOption"],a)};var q,w,k;l.proto.navigate=function(a){var b=e('a[data-ssi_imgGroup="'+k.attr("data-ssi_imgGroup")+'"]');q||(q=b.index(k));w||(w=b.length);if("next"===a&&q+1>=w||"prev"===a&&0>q)return this;this.destroyModal();"next"===a?q++:"prev"===a&&q--;b.eq(q).trigger("click.ssi-imgBox");return this};l.imgBox.show=function(a,b){b=e.extend(!0,{backdrop:"byKindShared",fixedHeight:!0,navigation:!0,closeIcon:!0,
title:!1,allowIframe:!0,hideImgButtons:!0},b);e.extend(b,{img:!0,content:'<div class="ssi-loader"></div>',sizeClass:""});var c=l.createObject(b).setPluginName("imgBox");c.imgUrl=a;c.imgTitle=b.title;c.init();b.title&&c.get$icons().addClass("inTitle");c.show();H(c,a)};e("body").on("click.ssi-imgBox","a.ssi-imgBox",function(a){a.preventDefault();a.stopPropagation();k=e(a.currentTarget);a=k.attr("data-ssi_imgGroup")||"ssi-mainOption";a=A[a]||A["ssi-mainOption"];var b=k.attr("href");if(""!==a.imgButtons&&
!e.isEmptyObject(a.imgButtons))for(var c=0;c<a.imgButtons.length;c++)if(a.imgButtons[c].exclude)for(var d=a.imgButtons[c].exclude.split(","),f=0;f<d.length;f++)if(k.hasClass(d[f])){a.imgButtons.splice(c,1);break}a.title&&!0===a.title&&(a.title=k.attr("title"));l.imgBox.show(b,a,k)});l.notify=function(a,b,c){var d={closeIcon:!1,overrideOther:!1,sizeClass:"dialog",onClickClose:!0,bodyScroll:!0,animation:!0,className:"",backdrop:!1,outSideClose:!1,position:"right top",topZIndex:!0,okBtn:{className:"",
label:"Ok"},cancelBtn:{className:"",label:"Cancel"},stack:!0,closeAfter:{time:4,resetOnHover:!0}};b.okBtn=e.extend({},d.okBtn,b.okBtn);b.cancelBtn=e.extend({},d.cancelBtn,b.cancelBtn);var f="",g="";switch(a){case "success":d.className=" ssi-success";break;case "error":d.className=" ssi-error";break;case "info":d.className=" ssi-info";break;case "warning":d.className=" ssi-warning";break;case "confirm":d.closeAfter=!1;d.onClickClose=!1;d.outSideClose=!1;d.icon=!1;d.title=!1;d.buttons=[{className:b.okBtn.className,
label:b.okBtn.label,closeAfter:!0,method:function(){"function"===typeof c&&c(!0)}},{className:b.cancelBtn.className,label:b.cancelBtn.label,closeAfter:!0,method:function(){"function"===typeof c&&c(!1)}}];break;case "dialog":d.onClickClose=!1;d.closeAfter=!1;d.outSideClose=!1;d.title=!1;d.icon=!1;d.buttons=[{className:b.okBtn.className,label:b.okBtn.label,closeAfter:!0,method:c}];break;default:d.className=a}b.className&&(b.className+=d.className||"");b=e.extend(!0,d,b);0!=b.icon&&(f=b.icon||a||"");
0!=b.title&&(g=b.title||a);0!=b.icon&&0!=b.title&&""!=f&&(b.title=(""===f?"":'<span class="ssi-icon '+f+'"></span>')+" "+g);!0===b.backdrop&&(b.backdrop="byKindShared");b.keepContent=!1;b.overrideOther&&(a=b.position.split(" "),e("body").find("div."+a[0]+"."+a[1]).children().empty());return l.createObject(b).setPluginName("notify").init().show()};e.fn.ssi_modal=function(a,b,c){var d;if("object"===typeof b){var f=a;d=b||{};var g=c}else d=a||{};return this.each(function(){var a=e(this),b;if(d.content)a.click(function(){switch(f){case "show":l.show(d,
a);break;default:l[f](d,g)}});else{var c,k,m=a.attr("data-ssi_modal");m?a.click(function(){c=e(m);k={content:c};b=e.extend({},d,k);l.createObject(b).init().show()}):(k={content:a},b=e.extend({},d,k),l.createObject(b).init().show())}})};e.fn.addAnimation=function(a,b){if(-1!==a.indexOf("ssi-fade")&&!1===G)return e(this)[a.replace("anim ssi-","")](300,function(){"function"===typeof b&&b()});e(this).addClass(a).one("mozAnimationEnd webkitAnimationEnd  MSAnimationEnd oanimationend animationend",function(){e(this).removeClass(a);
"function"===typeof b&&b()});"ssi-show"!==a&&"ssi-hidden"!==a&&""!==a||e(this).trigger("animationend");return this.each(function(){e(this)})};return l});
//# sourceMappingURL=ssi-modal.min.js.map
