require(["gitbook","jquery"],function(a,o){var r,i,s,e,l,u,n=15,c=500,h=void 0!==history.pushState,t=o("body");function p(e){t.addClass("with-search"),t.addClass("search-loading"),a.search.query(e,0,n).then(function(e){!function(e){r.addClass("open");var n=0==e.count;r.toggleClass("no-results",n),s.empty(),l.text(e.count),u.text(e.query),e.results.forEach(function(e){var n=o("<li>",{class:"search-results-item"}),t=o("<h3>"),r=o("<a>",{href:a.state.basePath+"/"+e.url,text:e.title}),e=e.body.trim();e.length>c&&(e=e.slice(0,c).trim()+"...");e=o("<p>").html(e);r.appendTo(t),t.appendTo(n),e.appendTo(n),n.appendTo(s)})}(e)}).always(function(){t.removeClass("search-loading")})}function d(){t.removeClass("with-search"),r.removeClass("open")}function f(){var e=function(e){var n=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)","i").exec(n);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}("q");e&&0<e.length&&(i.val(e),p(e))}function v(){function n(){var e=i.val();0==e.length?d():p(e)}i=o("#book-search-input input"),r=o("#book-search-results"),s=r.find(".search-results-list"),e=r.find(".search-results-title"),l=e.find(".search-results-count"),u=e.find(".search-query");var t=!1;i.on("propertychange",function(e){"value"==e.originalEvent.propertyName&&n()}),i.on("input",function(e){t||(o(this).unbind("propertychange"),t=!0),n()}),i.on("blur",function(e){var n;h&&(n=function(e,n){n=encodeURIComponent(n);var t,r=window.location.href,a=new RegExp("([?&])"+e+"=.*?(&|#|$)(.*)","gi");{if(a.test(r))return null!=n?r.replace(a,"$1"+e+"="+n+"$2$3"):(r=(t=r.split("#"))[0].replace(a,"$1$3").replace(/(&|\?)$/,""),void 0!==t[1]&&null!==t[1]&&(r+="#"+t[1]),r);if(null==n)return r;a=-1!==r.indexOf("?")?"&":"?";return r=(t=r.split("#"))[0]+a+e+"="+n,void 0!==t[1]&&null!==t[1]&&(r+="#"+t[1]),r}}("q",o(this).val()),history.pushState({path:n},null,n))})}a.events.on("page.change",function(){v(),d(),a.search.isInitialized()&&f()}),a.events.on("search.ready",function(){v(),f()})});