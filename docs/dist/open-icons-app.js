!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue"),require("vine-ui"),require("turbogrid"),require("open-icons")):"function"==typeof define&&define.amd?define("open-icons-app",["vue","vine-ui","turbogrid","open-icons"],t):"object"==typeof exports?exports["open-icons-app"]=t(require("vue"),require("vine-ui"),require("turbogrid"),require("open-icons")):e["open-icons-app"]=t(e.Vue,e["vine-ui"],e.turbogrid,e["open-icons"])}(self,((e,t,o,n)=>(()=>{var i={69:e=>{var t;self,t=()=>(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>l,deleteDB:()=>s,getDBs:()=>r,openStore:()=>c});const o=new Map,n=()=>{if("undefined"==typeof indexedDB)throw new Error("Your browser doesn't support indexedDB")},i=e=>{const t=o.get(e);t&&(t.close(),o.delete(e))};class a{constructor(e,t,o){this.dbName=e,this.storeName=t,this.initStoreOptions(o)}initStoreOptions(e){this.storeOptions={},this.indexOptions=null,e&&("string"!=typeof e?"boolean"!=typeof e?"object"==typeof e&&this.initObjectStoreOptions(e):this.storeOptions={autoIncrement:!0}:this.storeOptions={keyPath:e})}initObjectStoreOptions(e){"string"==typeof e.keyPath&&e.keyPath&&(this.storeOptions.keyPath=e.keyPath),e.autoIncrement&&(this.storeOptions.autoIncrement=!0),"object"==typeof e.index&&e.index&&(this.indexOptions=e.index)}open(e,t){return new Promise((n=>{i(this.dbName);const a=indexedDB.open(this.dbName,t);a.onerror=e=>{n()},a.onblocked=e=>{n()},a.onsuccess=()=>{const e=a.result;o.set(this.dbName,e),n(e)},a.onupgradeneeded=()=>{e.call(this,a.result)}}))}async upgrade(e){const t=parseInt(this.db.version)+1;this.db=await this.open(e,t)}async init(){return this.db||(this.db=await this.open(this.createStoreHandler),this.db.objectStoreNames.contains(this.storeName)||await this.upgrade(this.createStoreHandler)),this}createStoreHandler(e){const t=e.createObjectStore(this.storeName,this.storeOptions);this.indexOptions&&Object.keys(this.indexOptions).forEach((e=>{const o=this.indexOptions[e],n=this.indexNameHandler(e);t.createIndex(n,e,o)}))}indexNameHandler(e){if(e&&"string"==typeof e)return"by_".concat(e)}getCurrentStore(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"readonly";return this.db.transaction(this.storeName,e).objectStore(this.storeName)}promisedRequest(e,t){return new Promise((o=>{const n=this.getCurrentStore(e),i=t.call(this,n);i.onsuccess=function(e){o({result:i.result})},i.onerror=function(e){o({error:i.error})}}))}hasStore(e){return this.db.objectStoreNames.contains(e)}async deleteStore(e){e&&"string"==typeof e&&this.hasStore(e)&&await this.upgrade((t=>{t.deleteObjectStore(e)}))}async createStore(e,t){e&&"string"==typeof e&&(this.hasStore(e)||(this.storeName=e,this.initStoreOptions(t),await this.upgrade(this.createStoreHandler)))}useStore(e){e&&"string"==typeof e&&this.hasStore(e)&&(this.storeName=e)}getStoreNames(){return Array.from(this.db.objectStoreNames)}add(e,t){return this.promisedRequest("readwrite",(o=>o.add(e,t)))}put(e,t){return this.promisedRequest("readwrite",(o=>o.put(e,t)))}delete(e){return this.promisedRequest("readwrite",(t=>t.delete(e)))}set(e,t){return this.storeOptions.keyPath?this.put(e):this.put(t,e)}async get(e,t){const o=await this.promisedRequest("readonly",(o=>{const n=this.indexNameHandler(t);return n&&o.indexNames.contains(n)?o.index(n).get(e):o.get(e)}));if(!o.error)return o.result;console.error(o.error)}async getAll(e,t){const o=await this.promisedRequest("readonly",(o=>o.getAll(e,t)));return o.error?(console.error(o.error),[]):o.result}each(e){return new Promise((t=>{const o=this.getCurrentStore().openCursor();let n=0;o.onsuccess=o=>{const i=o.target.result;i?(e.call(this,i.value,n,i),n+=1,i.continue()):t()},o.onerror=()=>{t()}}))}async count(){const e=await this.promisedRequest("readonly",(e=>e.count()));if(!e.error)return e.result;console.error(e.error)}clear(){return this.promisedRequest("readwrite",(e=>e.clear()))}close(){i(this.dbName),this.db=null}}const r=()=>(n(),indexedDB.databases()),s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"db";return n(),new Promise((t=>{i(e);const o=indexedDB.deleteDatabase(e);o.onerror=function(){t(o.error)},o.onblocked=function(){t("blocked on delete database")},o.onsuccess=function(){t()}}))},c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"db",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"store",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(n(),!e||"string"!=typeof e)return;if(!t||"string"!=typeof t)return;const i=new a(e,t,o);return i.init()},l=c;return t})(),e.exports=t()},678:(e,t,o)=>{var n=o(550),i=o(45)(n);i.push([e.id,"\n.oi-loading {\r\n    pointer-events: none;\r\n    position: absolute;\r\n    z-index: 100;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\n}\n.oi-loading-label {\r\n    font-size: 14px;\r\n    width: 100px;\r\n    white-space: nowrap;\n}\r\n",""]),e.exports=i},979:(e,t,o)=>{var n=o(550),i=o(45),a=o(669),r=o(398),s=o(433),c=o(698),l=o(934),d=i(n),u=a(r),p=a(s),g=a(c),m=a(l);d.push([e.id,"html,body{margin:0;padding:0;font-size:14px;font-family:arial,sans-serif;width:100%;height:100%}a:link,a:visited{color:#002b36;text-decoration:none;background-color:rgba(0,0,0,0)}a:hover{color:#3fa8f8;text-decoration:underline}.oi-icon{display:block;overflow:hidden;width:20px;height:20px;background-size:20px 20px;background-position:center center;background-repeat:no-repeat;opacity:.6}.oi-icon:hover{opacity:1}.oi-icon-github{background-image:url("+u+")}.oi-icon-finder{background-image:url("+p+")}.oi-icon-my{background-image:url("+g+")}.oi-icon-searcher{background-image:url("+m+')}.oi-app{width:100%;height:100%;overflow:hidden}.oi-layout-packages{min-width:200px;max-width:50%;color:#eee;border-right:thin solid #1e1e1e;background-color:#1e1e1e}.oi-layout-packages a:visited,.oi-layout-packages a:link{color:#eee;text-decoration:none}.oi-layout-packages a:hover{color:#fff;text-decoration:underline}.oi-layout-packages .tg-total{font-weight:bold}.oi-layout-packages .oi-icon-total{width:100%;height:100%}.oi-layout-packages .oi-icon-total::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:0;height:0;border:6px solid rgba(0,0,0,0);box-sizing:border-box;overflow:hidden;border-left-color:#ddd;margin-left:3px}.oi-layout-main{position:relative}.vui-tab-item .oi-icon{width:16px;height:16px;background-size:16px 16px;margin-right:5px}.oi-packages-header{font-size:16px;font-weight:bold;padding:0 20px 0 15px;height:41px;line-height:41px;display:flex;flex-direction:row;background-color:#000}.oi-title{font-weight:bold;font-size:18px}.oi-title span{font-weight:normal;margin-left:5px;font-size:14px}.oi-title span a:link,.oi-title span a:visited{color:#999}.oi-header-right{margin:0 10px}.oi-packages-grid{width:100%;height:100%}.oi-packages-grid .tg-row .tg-tree-name{cursor:pointer}.oi-packages-grid .tg-pane .tg-scrollbar-thumb{background-color:#666}.oi-packages-grid .tg-pane .tg-scrollbar-thumb:hover{background-color:#999}',""]),e.exports=d},193:(e,t,o)=>{var n=o(550),i=o(45)(n);i.push([e.id,".oi-pkg-title{text-align:center;font-weight:bold;font-size:38px;padding:15px 0 5px}.oi-pkg-link{text-align:center;padding-bottom:5px}.oi-pkg-link a:link,.oi-pkg-link a:visited{font-size:16px;color:#666}.oi-pkg-link a:hover{color:#0077cf}.oi-pkg-stats{text-align:center;font-size:18px}.oi-pkg-stats a:link,.oi-pkg-stats a:visited{font-size:16px}.oi-pkg-stats a:hover{color:#0077cf}.oi-filter{text-align:center;margin:0 auto;width:60%;max-width:500px;margin-top:10px}.oi-searcher{width:100%;position:relative}.oi-searcher .oi-icon-searcher{position:absolute;width:30px;height:30px;background-size:30px 30px;right:15px;top:13px;opacity:.3;pointer-events:none}.oi-keywords{border:3px solid rgba(0,0,0,0);border-radius:15px;padding:10px 50px 10px 15px;background-color:#eee;height:32px;line-height:32px;outline:none;font-size:18px;box-sizing:content-box;display:block;width:calc(100% - 70px)}.oi-keywords:focus{border:3px solid #add8e6}.oi-tags{text-align:center;font-size:16px;display:flex;justify-content:center;align-items:center}.oi-tags span{margin-left:5px;text-decoration:underline;cursor:pointer}.oi-tags span:hover{color:#00bfff}.oi-finder-grid{border:thin solid #ccc;border-radius:5px;margin:10px}.oi-finder-grid .oi-not-found{font-size:20px}.oi-finder-grid .tg-turbogrid .tg-cell.oi-grid-icon{padding:4px;border-left:thin solid #e5e5e5;border-right:thin solid #e5e5e5}.oi-finder-grid .tg-turbogrid .tg-cell.oi-textarea{padding:3px 5px}.oi-finder-grid .tg-turbogrid .tg-cell.oi-textarea textarea{width:100%;height:100%;resize:none}.oi-icon-action{font-family:Menlo,Consolas,monospace;font-weight:bold;cursor:pointer;opacity:.6}.oi-icon-action:first-child{margin-right:10px}.oi-icon-action:hover{opacity:1;text-decoration:underline}.oi-download-icons{align-items:center;height:100%}",""]),e.exports=i},557:(e,t,o)=>{var n=o(550),i=o(45)(n);i.push([e.id,".oi-settings{height:35px;padding-right:5px}",""]),e.exports=i},45:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",n=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),n&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),n&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,n,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);n&&r[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},669:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},550:e=>{"use strict";e.exports=function(e){return e[1]}},889:(e,t,o)=>{var n=o(924),i=o(668),a=o(153),r=o(708),s=o(130),c=o(678);c=c.__esModule?c.default:c;var l={attributes:{context:"open-icons-app"}};l.setAttributes=r,l.insert=a.bind(null,"head"),l.domAPI=i,l.insertStyleElement=s;n(c,l);e.exports=c&&c.locals||{}},237:(e,t,o)=>{var n=o(924),i=o(668),a=o(153),r=o(708),s=o(130),c=o(979);c=c.__esModule?c.default:c;var l={attributes:{context:"open-icons-app"}};l.setAttributes=r,l.insert=a.bind(null,"head"),l.domAPI=i,l.insertStyleElement=s;n(c,l);e.exports=c&&c.locals||{}},185:(e,t,o)=>{var n=o(924),i=o(668),a=o(153),r=o(708),s=o(130),c=o(193);c=c.__esModule?c.default:c;var l={attributes:{context:"open-icons-app"}};l.setAttributes=r,l.insert=a.bind(null,"head"),l.domAPI=i,l.insertStyleElement=s;n(c,l);e.exports=c&&c.locals||{}},781:(e,t,o)=>{var n=o(924),i=o(668),a=o(153),r=o(708),s=o(130),c=o(557);c=c.__esModule?c.default:c;var l={attributes:{context:"open-icons-app"}};l.setAttributes=r,l.insert=a.bind(null,"head"),l.domAPI=i,l.insertStyleElement=s;n(c,l);e.exports=c&&c.locals||{}},924:e=>{"use strict";var t=[];function o(e){for(var o=-1,n=0;n<t.length;n++)if(t[n].identifier===e){o=n;break}return o}function n(e,n){for(var a={},r=[],s=0;s<e.length;s++){var c=e[s],l=n.base?c[0]+n.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=o(u),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(g);else{var m=i(g,n);n.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}r.push(u)}return r}function i(e,t){var o=t.domAPI(t);o.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,i){var a=n(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<a.length;r++){var s=o(a[r]);t[s].references--}for(var c=n(e,i),l=0;l<a.length;l++){var d=o(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},153:e=>{"use strict";var t={};e.exports=function(e,o){var n=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},130:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},708:e=>{"use strict";e.exports=function(e,t){Object.keys(t).forEach((function(o){e.setAttribute(o,t[o])}))}},668:e=>{"use strict";var t,o=(t=[],function(e,o){return t[e]=o,t.filter(Boolean).join("\n")});function n(e,t,n,i){var a;if(n)a="";else{a="",i.supports&&(a+="@supports (".concat(i.supports,") {")),i.media&&(a+="@media ".concat(i.media," {"));var r=void 0!==i.layer;r&&(a+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),a+=i.css,r&&(a+="}"),i.media&&(a+="}"),i.supports&&(a+="}")}if(e.styleSheet)e.styleSheet.cssText=o(t,a);else{var s=document.createTextNode(a),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(s,c[t]):e.appendChild(s)}}var i={singleton:null,singletonCounter:0};e.exports=function(e){var t=i.singletonCounter++,o=i.singleton||(i.singleton=e.insertStyleElement(e));return{update:function(e){n(o,t,!1,e)},remove:function(e){n(o,t,!0,e)}}}},398:e=>{"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxnIGZpbGw9ImN1cnJlbnRDb2xvciI+PHBhdGggZD0iTTggMEMzLjU4IDAgMCAzLjU4IDAgOGMwIDMuNTQgMi4yOSA2LjUzIDUuNDcgNy41OS40LjA3LjU1LS4xNy41NS0uMzggMC0uMTktLjAxLS44Mi0uMDEtMS40OS0yLjAxLjM3LTIuNTMtLjQ5LTIuNjktLjk0LS4wOS0uMjMtLjQ4LS45NC0uODItMS4xMy0uMjgtLjE1LS42OC0uNTItLjAxLS41My42My0uMDEgMS4wOC41OCAxLjIzLjgyLjcyIDEuMjEgMS44Ny44NyAyLjMzLjY2LjA3LS41Mi4yOC0uODcuNTEtMS4wNy0xLjc4LS4yLTMuNjQtLjg5LTMuNjQtMy45NSAwLS44Ny4zMS0xLjU5LjgyLTIuMTUtLjA4LS4yLS4zNi0xLjAyLjA4LTIuMTIgMCAwIC42Ny0uMjEgMi4yLjgyLjY0LS4xOCAxLjMyLS4yNyAyLS4yNy42OCAwIDEuMzYuMDkgMiAuMjcgMS41My0xLjA0IDIuMi0uODIgMi4yLS44Mi40NCAxLjEuMTYgMS45Mi4wOCAyLjEyLjUxLjU2LjgyIDEuMjcuODIgMi4xNSAwIDMuMDctMS44NyAzLjc1LTMuNjUgMy45NS4yOS4yNS41NC43My41NCAxLjQ4IDAgMS4wNy0uMDEgMS45My0uMDEgMi4yIDAgLjIxLjE1LjQ2LjU1LjM4QTguMDEyIDguMDEyIDAgMCAwIDE2IDhjMC00LjQyLTMuNTgtOC04LTh6Ii8+PC9nPjwvc3ZnPg=="},433:e=>{"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgNDggNDgiPjxnIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0yMSAzOGM5LjM4OSAwIDE3LTcuNjExIDE3LTE3UzMwLjM4OSA0IDIxIDQgNCAxMS42MTEgNCAyMXM3LjYxMSAxNyAxNyAxN1oiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMjYuNjU3IDE0LjM0M0E3Ljk3NSA3Ljk3NSAwIDAgMCAyMSAxMmE3Ljk3NSA3Ljk3NSAwIDAgMC01LjY1NyAyLjM0M20xNy44NzkgMTguODc5IDguNDg1IDguNDg1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L2c+PC9zdmc+"},934:e=>{"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMjQgMjQiPg0KICAgIDxnIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciI+DQogICAgICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIHN0cm9rZT0ibm9uZSI+PC9wYXRoPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSI3Ij48L2NpcmNsZT4NCiAgICAgICAgPHBhdGggZD0ibTIxIDIxLTYtNiI+PC9wYXRoPg0KICAgIDwvZz4NCjwvc3ZnPg=="},698:e=>{"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgNDggNDgiPjxnIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Im0yMy45OTkgNS02LjExMyAxMi40NzhMNCAxOS40OWwxMC4wNTkgOS44MzRMMTEuNjU0IDQzIDI0IDM2LjQyIDM2LjM0NSA0MyAzMy45NiAyOS4zMjUgNDQgMTkuNDkxbC0xMy44MDktMi4wMTNMMjQgNVoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L2c+PC9zdmc+"},10:e=>{"use strict";e.exports=n},46:e=>{"use strict";e.exports=o},953:e=>{"use strict";e.exports=t},976:t=>{"use strict";t.exports=e}},a={};function r(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={id:e,exports:{}};return i[e](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{"use strict";r.r(s);var e=r(976),t=r(953),o=r.n(t),n=r(69),i=r.n(n),a=r(46),c=r(10);const l={key:0,class:"oi-loading"},d={class:"oi-loading-label"},u={__name:"loading",props:{visible:{type:Boolean,default:!0},text:{type:String,default:""}},setup(t){const n=t,{VuiLoading:i,VuiFlex:a}=o();return(t,o)=>n.visible?((0,e.openBlock)(),(0,e.createElementBlock)("div",l,[(0,e.createVNode)((0,e.unref)(a),{spacing:"10px"},{default:(0,e.withCtx)((()=>[(0,e.createVNode)((0,e.unref)(i),{fast:""}),(0,e.createElementVNode)("div",d,(0,e.toDisplayString)(n.text),1)])),_:1})])):(0,e.createCommentVNode)("v-if",!0)}};r(889);const p=u,g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1024;if(0===e)return"0B";let n="";e<0&&(e=Math.abs(e),n="-");const i=["B","KB","MB","GB","TB","PB","EB","ZB","YB"];for(let a=0,r=i.length;a<r;a++){const r=Math.pow(o,a),s=Math.pow(o,a+1);if(e>r&&e<s){const o=i[a];e=n+(e/r).toFixed(t)+o;break}}return e},m=function(e,t){e&&(!function(e){e&&Object.keys(e).forEach((t=>{const o=e[t];o.target&&o.target.removeEventListener(t,o.handler,o.options)}))}(e),Object.keys(e).forEach((o=>{const n=e[o];n.target=n.target||t,n.target.addEventListener(o,n.handler,n.options)})))},h={class:"oi-pkg-title"},f={class:"oi-pkg-link"},x=["href"],b={class:"oi-pkg-stats"},v=["href"],y={class:"oi-filter flex-row"},N={class:"oi-searcher"},w=(0,e.createElementVNode)("div",{class:"oi-icon oi-icon-searcher"},null,-1),M={class:"oi-tags"},I=["onClick"],k=(0,e.createElementVNode)("div",{class:"oi-finder-grid vui-flex-auto"},null,-1),S={__name:"finder",props:{packageName:{type:String,default:""}},setup(t){const n=t,{VuiFlex:i}=o(),r=(0,e.inject)("state"),s=(0,e.inject)("settings"),c=(0,e.ref)(null),l=(0,e.ref)([]),d=(0,e.ref)(""),u=function(e){const t=r.packageName;if(t&&e.packageName!==t)return!1;const o=d.value.trim();if(!o)return!0;const n=e.name;return!(!n.split("-").includes(o)&&!n.startsWith(o))},p=()=>{const e=new a.Grid(".oi-finder-grid");return e.bind("onClick",(function(e,t){const o=t.rowItem,n=t.e.target;if("TEXTAREA"!==n.tagName){if(n.classList.contains("oi-icon-download")){if("png"===n.getAttribute("name"))return void function(e,t){const o="data:image/svg+xml;charset=utf8,".concat(encodeURIComponent(e)),n=parseInt(s.size),i=document.createElement("canvas");i.width=n,i.height=n,i.style.cssText="position:absolute;top:0;right:0;";const a=i.getContext("2d");document.body.appendChild(i);const r=document.createElement("img");r.width=n,r.height=n,r.src=o,r.onload=function(){a.drawImage(r,0,0),document.body.removeChild(r),i.toBlob((function(e){window.saveAs(e,"".concat(t,".png")),document.body.removeChild(i)}))},document.body.appendChild(r)}(o.svg,o.name);!function(e,t){const o=new Blob([e],{type:"text/plain;charset=utf-8"});window.saveAs(o,"".concat(t,".svg"))}(o.svg,o.name)}}else n.select()})),r.iconsGrid=e,e},m=()=>{let e=r.iconsGrid;e||(e=p());const t=parseInt(s.size)+10;e.setOption({rowHeight:t,frozenColumn:1,rowNotFound:'<div class="oi-not-found">Not found icon</div>',rowFilter:u,selectVisible:!0,selectAllVisible:!1,rowNumberVisible:!0,rowNumberWidth:52,scrollbarRound:!0,bindWindowResize:!0,bindContainerResize:!0}),e.setFormatter({icon:function(e,t){return function(e){const t=function(e,t){const o=["orangered","orange","green","deepskyblue","royalblue","darkorchid"];return"rainbow"===e&&(e=o[t%o.length],t+=1),e}(s.color,e.tg_index),o=e.tagName;return"<".concat(o,' name="').concat(e.name,'" size="').concat(s.size,'" color="').concat(t,'" background="').concat(s.bg,'" radius="').concat(s.radius,'"></').concat(o,">")}(t)},textarea:function(e,t,o){if("svg"===o.id)return'<textarea spellcheck="false">'.concat(e,"</textarea>");if("dataUrl"===o.id){const e=t.svg,o="data:image/svg+xml;charset=utf8,".concat(encodeURIComponent(e));return'<textarea spellcheck="false">'.concat(o,"</textarea>")}return'<textarea spellcheck="false">'.concat(this.getFormatter("icon")(e,t),"</textarea>")},download:function(e){return'\n                <div class="oi-download-icons vui-flex-row">\n                    <div class="oi-icon-action oi-icon-download" name="svg" title="download svg file">SVG</div>\n                    <div class="oi-icon-action oi-icon-download" name="png" title="download png file">PNG</div>\n                <div>\n            '}});const o={columns:[{id:"icon",name:"",width:t,minWidth:t,align:"center",classMap:"oi-grid-icon",formatter:"icon",sortable:!1},{id:"name",name:"Name",width:150},{id:"download",name:"Download",formatter:"download",resizable:!1,width:80},{id:"svg",name:"Pure SVG",classMap:"oi-textarea",formatter:"textarea",sortable:!1,width:260,maxWidth:1e3},{id:"dataUrl",name:"Data URL",classMap:"oi-textarea",formatter:"textarea",sortable:!1,width:260,maxWidth:1e3},{id:"wc",name:"Web component",classMap:"oi-textarea",formatter:"textarea",sortable:!1,width:260,maxWidth:500},{id:"packageName",name:"Package",align:"center"}],rows:r.icons};e.setData(o),e.render()},S=()=>{const t=r.packages,o=r.packageName;let n;o&&(n=t.find((e=>e.name===o))),n?d.value="":n=r.total,console.log(n),(e=>{const t=e.tags,o=t.length,n=[];let i=10;for(;i>0;){const e=t[Math.floor(o*Math.random())];n.includes(e)||(n.push(e),i-=1)}l.value=n,"total"!==e.type||d.value||(d.value=n[0].name)})(n),c.value=n,(0,e.nextTick)((()=>{m()}))};return(0,e.watch)((()=>n.packageName),(e=>{S()})),(0,e.watch)(s,(()=>{r.iconsGrid&&m()})),(0,e.watch)(d,(()=>{(()=>{const e=r.iconsGrid;e&&e.update()})()})),(t,o)=>c.value?((0,e.openBlock)(),(0,e.createBlock)((0,e.unref)(i),{key:0,direction:"column",spacing:"10px",height:"100%"},{default:(0,e.withCtx)((()=>[(0,e.createElementVNode)("div",h,(0,e.toDisplayString)(c.value.fullName||c.value.name),1),(0,e.createElementVNode)("div",f,[(0,e.createElementVNode)("a",{href:c.value.source.url,target:"_blank"},(0,e.toDisplayString)(c.value.source.name)+"@"+(0,e.toDisplayString)(c.value.source.version)+" - "+(0,e.toDisplayString)(c.value.source.license),9,x)]),(0,e.createElementVNode)("div",b,[(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(c.value.iconsNum),1),(0,e.createTextVNode)(" icons / size: "+(0,e.toDisplayString)((0,e.unref)(g)(c.value.size))+" / gzip: "+(0,e.toDisplayString)((0,e.unref)(g)(c.value.sizeGzip))+" / ",1),(0,e.createElementVNode)("a",{href:"/dist/"+c.value.namespace+".js",target:"_blank"},(0,e.toDisplayString)(c.value.namespace)+".js",9,v)]),(0,e.createElementVNode)("div",y,[(0,e.createElementVNode)("div",N,[(0,e.withDirectives)((0,e.createElementVNode)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>d.value=e),type:"text",class:"oi-keywords flex-auto",onfocus:"this.select()"},null,512),[[e.vModelText,d.value]]),w])]),(0,e.createElementVNode)("div",M,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(l.value,((t,o)=>((0,e.openBlock)(),(0,e.createElementBlock)("span",{key:o,onClick:e=>(e=>{d.value=e.name})(t)},(0,e.toDisplayString)(t.name),9,I)))),128))]),k])),_:1})):(0,e.createCommentVNode)("v-if",!0)}};r(185);const j=S,V=(0,e.createElementVNode)("option",null,"16px",-1),E=(0,e.createElementVNode)("option",null,"24px",-1),L=(0,e.createElementVNode)("option",null,"32px",-1),D=(0,e.createElementVNode)("option",null,"48px",-1),A=(0,e.createElementVNode)("option",null,"64px",-1),z=(0,e.createElementVNode)("option",null,"96px",-1),C=(0,e.createElementVNode)("option",null,"128px",-1),O=(0,e.createElementVNode)("option",null,"256px",-1),P=(0,e.createElementVNode)("option",null,null,-1),T=(0,e.createElementVNode)("option",null,"rainbow",-1),B=(0,e.createElementVNode)("option",null,"orangered",-1),R=(0,e.createElementVNode)("option",null,"orange",-1),Z=(0,e.createElementVNode)("option",null,"green",-1),_=(0,e.createElementVNode)("option",null,"deepskyblue",-1),G=(0,e.createElementVNode)("option",null,"royalblue",-1),H=(0,e.createElementVNode)("option",null,"darkorchid",-1),U=(0,e.createElementVNode)("option",null,null,-1),W=(0,e.createElementVNode)("option",null,"#eee",-1),Q=(0,e.createElementVNode)("option",null,"#fff",-1),F=(0,e.createElementVNode)("option",null,"#ccc",-1),Y=(0,e.createElementVNode)("option",null,"#000",-1),J=(0,e.createElementVNode)("option",null,null,-1),q=(0,e.createElementVNode)("option",null,"5px",-1),X=(0,e.createElementVNode)("option",null,"10px",-1),$=(0,e.createElementVNode)("option",null,"20%",-1),K=(0,e.createElementVNode)("option",null,"50%",-1),ee={__name:"settings",setup(t){const{VuiFlex:n,VuiSelect:i}=o(),a=(0,e.inject)("settings");return(t,o)=>((0,e.openBlock)(),(0,e.createBlock)((0,e.unref)(n),{spacing:"10px",class:"oi-settings"},{default:(0,e.withCtx)((()=>[(0,e.createVNode)((0,e.unref)(i),{modelValue:(0,e.unref)(a).size,"onUpdate:modelValue":o[0]||(o[0]=t=>(0,e.unref)(a).size=t),label:"Size"},{default:(0,e.withCtx)((()=>[V,E,L,D,A,z,C,O])),_:1},8,["modelValue"]),(0,e.createVNode)((0,e.unref)(i),{modelValue:(0,e.unref)(a).color,"onUpdate:modelValue":o[1]||(o[1]=t=>(0,e.unref)(a).color=t),label:"Color"},{default:(0,e.withCtx)((()=>[P,T,B,R,Z,_,G,H])),_:1},8,["modelValue"]),(0,e.createVNode)((0,e.unref)(i),{modelValue:(0,e.unref)(a).bg,"onUpdate:modelValue":o[2]||(o[2]=t=>(0,e.unref)(a).bg=t),label:"BG"},{default:(0,e.withCtx)((()=>[U,W,Q,F,Y])),_:1},8,["modelValue"]),(0,e.createVNode)((0,e.unref)(i),{modelValue:(0,e.unref)(a).radius,"onUpdate:modelValue":o[3]||(o[3]=t=>(0,e.unref)(a).radius=t),label:"Radius"},{default:(0,e.withCtx)((()=>[J,q,X,$,K])),_:1},8,["modelValue"])])),_:1}))}};r(781);const te=ee,{VuiTooltip:oe}=o(),ne=function(e){e.$tooltip&&(e.$tooltip.unmount(),e.$tooltip=null)},ie=()=>{const e={mouseenter:{handler:e=>{!function(e){if(e===document)return;if(!e.getAttribute)return;const t=e.getAttribute("tooltip");t&&(ne(e),e.$tooltip=oe.createComponent({target:e,text:t}))}(e.target)},options:!0},mouseleave:{handler:e=>{ne(e.target)},options:!0}};setTimeout((()=>{m(e,document)}),100)},ae={class:"oi-app"},re={class:"oi-layout-packages"},se={class:"oi-packages-header"},ce={class:"oi-title"},le=(0,e.createTextVNode)(" Open Icons "),de={href:"https://github.com/cenfun/open-icons",target:"_blank"},ue=(0,e.createElementVNode)("div",{class:"oi-packages-grid vui-flex-auto"},null,-1),pe={class:"oi-layout-main"},ge=(0,e.createElementVNode)("div",{class:"vui-flex-auto"},null,-1),me=(0,e.createElementVNode)("div",{class:"oi-header-right"},[(0,e.createElementVNode)("a",{class:"oi-icon oi-icon-github",href:"https://github.com/cenfun/open-icons",target:"_blank"})],-1),he=(0,e.createElementVNode)("div",{class:"vui-flex-row"},[(0,e.createElementVNode)("div",{class:"oi-icon oi-icon-finder"}),(0,e.createElementVNode)("b",null,"Icon Finder")],-1),fe=(0,e.createElementVNode)("div",{class:"vui-flex-row"},[(0,e.createElementVNode)("div",{class:"oi-icon oi-icon-my"}),(0,e.createElementVNode)("b",null,"My Icons")],-1),xe=(0,e.createTextVNode)(" To do "),be={__name:"app",setup(t){const{VuiLayout:n,VuiFlex:r,VuiTab:s}=o(),l=(0,e.ref)("200px,auto"),d=(0,e.shallowReactive)({ost:null,packages:null,packageName:null,total:null,icons:null});(0,e.provide)("state",d);const u=(0,e.shallowReactive)({size:"",color:"",bg:"",radius:""});(0,e.provide)("settings",u);const m=(0,e.ref)(0),h=(0,e.ref)("Loading Icons ..."),f=(0,e.ref)(!0),x=function(e,t){t.split("-").forEach((t=>{t.length<2||(e[t]?e[t]+=1:e[t]=1)}))},b=function(e){const t=Object.keys(e).map((t=>({name:t,num:e[t]})));t.sort(((e,t)=>t.num-e.num));const o=t[0].num;t.forEach((e=>{e.prob=Math.round(e.num/o*100)}));return t.filter((e=>e.prob>0))},v=function(e){let t=0,o=0;const n=[],i={};e.forEach((function(e){t+=e.size,o+=e.sizeGzip;const a={};e.icons.forEach((t=>{const o=t.name;x(i,o),x(a,o),n.push({name:o,namespace:t.namespace,svg:t.svg,packageName:e.name,tagName:e.tagName})})),e.tags=b(a);const r=(0,c.getIconElement)(e.icons);r.tagName=e.tagName,customElements.get(e.tagName)?console.error("".concat(e.tagName," already defined")):customElements.define(e.tagName,r)})),d.total={name:"Total",fullName:"Open Icons",type:"total",source:{name:"open-icons",version:c.version,url:"https://github.com/cenfun/open-icons",license:"MIT"},namespace:"open-icons",tags:b(i),icons:n,iconsNum:n.length.toLocaleString(),size:t,sizeGzip:o,selectable:!0},d.icons=n,d.packages=e,d.packageName=location.hash.substr(1),function(e){const t=e.map((e=>(e.iconsNum=e.icons.length.toLocaleString(),e.sourceFrom="".concat(e.source.name,"@").concat(e.source.version),e.sourceLicense=e.source.license,e)));t.unshift(d.total);const o={columns:[{id:"name",name:"Name",width:80},{id:"iconsNum",name:"Icons",type:"number",width:60},{id:"size",name:"Size",formatter:"BF",align:"right"},{id:"sizeGzip",name:"Gzip",formatter:"BF",align:"right"},{id:"dist",name:"Dist",formatter:"dist",width:160},{id:"sourceFrom",name:"Source From",formatter:"sourceFrom",width:200},{id:"sourceLicense",name:"License",width:100}],rows:t},n=new a.Grid(".oi-packages-grid");n.bind("onFirstUpdated",(function(e){if(!d.packageName)return;const t=this.getRowItemBy("name",d.packageName);t&&(this.setRowSelected(t),this.scrollRowIntoView(t))})),n.bind("onClick",(function(e,t){if(!t.rowNode)return;const o=t.rowItem;let i=o.name;"total"===o.type&&(i=""),d.packageName=i,document.location.hash=i,n.setRowSelected(o,t.e)})),n.setFormatter({rowNumber:function(e,t,o,n){const i=this.getDefaultFormatter("rowNumber");return"total"===t.type?'<div class="oi-icon-total"></div>':i(e,t,o,n)},sourceFrom:function(e,t,o,n){const i=t.source;return i?'<a href="'.concat(i.url,'" target="_blank">').concat(e,"</a>"):"—"},dist:function(e,t,o,n){if(!t.namespace)return"—";const i="".concat(t.namespace,".js");return'<a href="/dist/'.concat(i,'" target="_blank">').concat(i,"</a>")},BF:function(e,t,o,n){return g(e)}}),n.setOption({theme:"dark",frozenRow:0,frozenColumn:0,frozenRowHoverable:!0,selectMultiple:!1,rowNumberVisible:!0,rowNumberWidth:30,scrollbarRound:!0,bindWindowResize:!0,bindContainerResize:!0}),n.setData(o),n.render()}(e)},y=async()=>{const e=await i()("open-icons");d.ost=e;const t=await e.get("layout");t&&(l.value=t),await(async e=>{const t={size:"32px",color:"rainbow",bg:"",radius:""};let o=await e.get("settings");o||(o=t),Object.keys(o).forEach((e=>{u[e]=o[e]}))})(e);const o="dist/";console.log("wc icons path:",o);const n=await e.get("metadata");if(n&&n.version===c.version)return console.log("Found cache icons",n),f.value=!1,void v(n.packages);const a=await(0,c.loadPackages)(o,((e,t)=>{const o=Math.round(t.loadedSize/t.totalSize*100);h.value="Loading ".concat(o,"% (").concat(t.loaded,"/").concat(t.total,") - ").concat(e.name)})),r={version:c.version,timestamp:c.timestamp,packages:a};e.set("metadata",r),console.log("Loaded icons",r),f.value=!1,v(r.packages)};return(0,e.watch)(l,(e=>{d.ost&&d.ost.set("layout",e)})),(0,e.watch)(u,(e=>{const t=JSON.parse(JSON.stringify(e));d.ost&&d.ost.set("settings",t)})),(0,e.onMounted)((()=>{y(),ie()})),(t,o)=>((0,e.openBlock)(),(0,e.createElementBlock)("div",ae,[(0,e.createVNode)((0,e.unref)(n),{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=e=>l.value=e),width:"100%",height:"100%","gutter-size":"0","gutter-hover-size":"2px"},{default:(0,e.withCtx)((()=>[(0,e.createElementVNode)("div",re,[(0,e.createVNode)((0,e.unref)(r),{direction:"column",height:"100%"},{default:(0,e.withCtx)((()=>[(0,e.createElementVNode)("div",se,[(0,e.createElementVNode)("div",ce,[le,(0,e.createElementVNode)("span",null,[(0,e.createElementVNode)("a",de,"v"+(0,e.toDisplayString)((0,e.unref)(c.version)),1)])])]),ue])),_:1})]),(0,e.createElementVNode)("div",pe,[(0,e.createVNode)((0,e.unref)(s),{modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=e=>m.value=e)},{right:(0,e.withCtx)((()=>[ge,(0,e.createVNode)(te),me])),tabs:(0,e.withCtx)((()=>[he,fe])),panes:(0,e.withCtx)((()=>[(0,e.createVNode)(j,{"package-name":(0,e.unref)(d).packageName},null,8,["package-name"]),(0,e.createVNode)((0,e.unref)(r),{center:"",height:"100%"},{default:(0,e.withCtx)((()=>[xe])),_:1})])),_:1},8,["modelValue"])])])),_:1},8,["modelValue"]),(0,e.createVNode)(p,{visible:f.value,text:h.value},null,8,["visible","text"])]))}};r(237);const ve=be;ve.createComponent=t.createComponent.bind(ve),ve.createComponent()})(),s})()));