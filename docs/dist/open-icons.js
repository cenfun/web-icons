!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("open-icons",[],n):"object"==typeof exports?exports["open-icons"]=n():e["open-icons"]=n()}(self,(()=>(()=>{var e={664:e=>{const n=String.fromCharCode,s={};const i=function(e){return function(e,s,i){const o=[];let a=4,t=4,p=3,c="";const z=[];let r,m,l,d,u,h,f;const v={val:i(0),position:s,index:1};for(r=0;r<3;r+=1)o[r]=r;for(l=0,u=Math.pow(2,2),h=1;h!==u;)d=v.val&v.position,v.position>>=1,0===v.position&&(v.position=s,v.val=i(v.index++)),l|=(d>0?1:0)*h,h<<=1;switch(l){case 0:for(l=0,u=Math.pow(2,8),h=1;h!==u;)d=v.val&v.position,v.position>>=1,0===v.position&&(v.position=s,v.val=i(v.index++)),l|=(d>0?1:0)*h,h<<=1;f=n(l);break;case 1:for(l=0,u=Math.pow(2,16),h=1;h!==u;)d=v.val&v.position,v.position>>=1,0===v.position&&(v.position=s,v.val=i(v.index++)),l|=(d>0?1:0)*h,h<<=1;f=n(l);break;case 2:return""}for(o[3]=f,m=f,z.push(f);;){if(v.index>e)return"";for(l=0,u=Math.pow(2,p),h=1;h!==u;)d=v.val&v.position,v.position>>=1,0===v.position&&(v.position=s,v.val=i(v.index++)),l|=(d>0?1:0)*h,h<<=1;switch(f=l){case 0:for(l=0,u=Math.pow(2,8),h=1;h!==u;)d=v.val&v.position,v.position>>=1,0===v.position&&(v.position=s,v.val=i(v.index++)),l|=(d>0?1:0)*h,h<<=1;o[t++]=n(l),f=t-1,a--;break;case 1:for(l=0,u=Math.pow(2,16),h=1;h!==u;)d=v.val&v.position,v.position>>=1,0===v.position&&(v.position=s,v.val=i(v.index++)),l|=(d>0?1:0)*h,h<<=1;o[t++]=n(l),f=t-1,a--;break;case 2:return z.join("")}if(0===a&&(a=Math.pow(2,p),p++),o[f])c=o[f];else{if(f!==t)return null;c=m+m.charAt(0)}z.push(c),o[t++]=m+c.charAt(0),a--,m=c,0===a&&(a=Math.pow(2,p),p++)}}(e.length,32,(function(n){return function(e,n){if(!s[e]){s[e]={};for(let n=0;n<e.length;n++)s[e][e.charAt(n)]=n}return s[e][n]}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e.charAt(n))}))};e.exports=function(e){return null===e||""===e||void 0===e?"":i(e)}}},n={};function s(i){var o=n[i];if(void 0!==o)return o.exports;var a=n[i]={exports:{}};return e[i](a,a.exports,s),a.exports}s.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return s.d(n,{a:n}),n},s.d=(e,n)=>{for(var i in n)s.o(n,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},s.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";s.r(i),s.d(i,{decompress:()=>o(),default:()=>m,defineIconElement:()=>c,getSvg:()=>a,loadPackages:()=>p,packages:()=>e,timestamp:()=>r,version:()=>z});const e=JSON.parse('[{"name":"akar","namespace":"open-icons-akar","size":76524,"sizeGzip":57868,"sizeJson":193785},{"name":"ant","namespace":"open-icons-ant","size":198633,"sizeGzip":150216,"sizeJson":459822},{"name":"awesome","namespace":"open-icons-awesome","size":472017,"sizeGzip":356519,"sizeJson":1069288},{"name":"blueprint","namespace":"open-icons-blueprint","size":127023,"sizeGzip":96072,"sizeJson":320416},{"name":"bootstrap","namespace":"open-icons-bootstrap","size":393951,"sizeGzip":297610,"sizeJson":1096664},{"name":"box","namespace":"open-icons-box","size":312797,"sizeGzip":236506,"sizeJson":799407},{"name":"carbon","namespace":"open-icons-carbon","size":330442,"sizeGzip":249957,"sizeJson":937076},{"name":"charm","namespace":"open-icons-charm","size":21411,"sizeGzip":16205,"sizeJson":86078},{"name":"coreui","namespace":"open-icons-coreui","size":139430,"sizeGzip":105395,"sizeJson":333249},{"name":"crypto","namespace":"open-icons-crypto","size":359438,"sizeGzip":271675,"sizeJson":713916},{"name":"cssgg","namespace":"open-icons-cssgg","size":84039,"sizeGzip":63569,"sizeJson":289837},{"name":"dev","namespace":"open-icons-dev","size":220533,"sizeGzip":166695,"sizeJson":403728},{"name":"element","namespace":"open-icons-element","size":67493,"sizeGzip":51020,"sizeJson":162284},{"name":"entypo","namespace":"open-icons-entypo","size":116542,"sizeGzip":88061,"sizeJson":251589},{"name":"eva","namespace":"open-icons-eva","size":72117,"sizeGzip":54565,"sizeJson":219111},{"name":"feather","namespace":"open-icons-feather","size":24929,"sizeGzip":18857,"sizeJson":96515},{"name":"flag","namespace":"open-icons-flag","size":98652,"sizeGzip":74418,"sizeJson":231916},{"name":"flat","namespace":"open-icons-flat","size":85640,"sizeGzip":64740,"sizeJson":208748},{"name":"fluent","namespace":"open-icons-fluent","size":749946,"sizeGzip":565054,"sizeJson":2424832},{"name":"foundation","namespace":"open-icons-foundation","size":146710,"sizeGzip":110866,"sizeJson":290205},{"name":"grommet","namespace":"open-icons-grommet","size":113377,"sizeGzip":85645,"sizeJson":269157},{"name":"hero","namespace":"open-icons-hero","size":108508,"sizeGzip":82064,"sizeJson":309103},{"name":"icomoon","namespace":"open-icons-icomoon","size":112161,"sizeGzip":84774,"sizeJson":248439},{"name":"iconoir","namespace":"open-icons-iconoir","size":140545,"sizeGzip":106311,"sizeJson":560107},{"name":"ikonate","namespace":"open-icons-ikonate","size":26217,"sizeGzip":19812,"sizeJson":93881},{"name":"ionic","namespace":"open-icons-ionic","size":245671,"sizeGzip":185765,"sizeJson":623994},{"name":"jam","namespace":"open-icons-jam","size":189869,"sizeGzip":143608,"sizeJson":522636},{"name":"line","namespace":"open-icons-line","size":514708,"sizeGzip":388614,"sizeJson":1101511},{"name":"lucide","namespace":"open-icons-lucide","size":69314,"sizeGzip":52447,"sizeJson":298308},{"name":"majest","namespace":"open-icons-majest","size":108538,"sizeGzip":82093,"sizeJson":366580},{"name":"maki","namespace":"open-icons-maki","size":51864,"sizeGzip":39197,"sizeJson":110119},{"name":"material","namespace":"open-icons-material","size":515156,"sizeGzip":389048,"sizeJson":1571449},{"name":"mdi","namespace":"open-icons-mdi","size":1071617,"sizeGzip":808930,"sizeJson":3140435},{"name":"mono","namespace":"open-icons-mono","size":30772,"sizeGzip":23260,"sizeJson":81449},{"name":"oct","namespace":"open-icons-oct","size":128445,"sizeGzip":97122,"sizeJson":335916},{"name":"park","namespace":"open-icons-park","size":339880,"sizeGzip":257068,"sizeJson":1432334},{"name":"phosphor","namespace":"open-icons-phosphor","size":894164,"sizeGzip":674700,"sizeJson":2831763},{"name":"pixelart","namespace":"open-icons-pixelart","size":34008,"sizeGzip":25704,"sizeJson":133937},{"name":"prime","namespace":"open-icons-prime","size":46499,"sizeGzip":35156,"sizeJson":127798},{"name":"radix","namespace":"open-icons-radix","size":76207,"sizeGzip":57634,"sizeJson":205428},{"name":"remix","namespace":"open-icons-remix","size":313531,"sizeGzip":237165,"sizeJson":996813},{"name":"simple","namespace":"open-icons-simple","size":1950786,"sizeGzip":1474284,"sizeJson":3910935},{"name":"tabler","namespace":"open-icons-tabler","size":201762,"sizeGzip":152547,"sizeJson":990681},{"name":"teeny","namespace":"open-icons-teeny","size":192311,"sizeGzip":145440,"sizeJson":566363},{"name":"tiny","namespace":"open-icons-tiny","size":78864,"sizeGzip":59580,"sizeJson":167565},{"name":"typ","namespace":"open-icons-typ","size":104685,"sizeGzip":79175,"sizeJson":221813},{"name":"uiw","namespace":"open-icons-uiw","size":82301,"sizeGzip":62225,"sizeJson":164141},{"name":"unicons","namespace":"open-icons-unicons","size":260985,"sizeGzip":197348,"sizeJson":786066},{"name":"vscode","namespace":"open-icons-vscode","size":112442,"sizeGzip":85000,"sizeJson":246896},{"name":"weather","namespace":"open-icons-weather","size":139077,"sizeGzip":105144,"sizeJson":309008},{"name":"zond","namespace":"open-icons-zond","size":27336,"sizeGzip":20674,"sizeJson":82557}]');var n=s(664),o=s.n(n);const a=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"100%";const s=["<svg"];return e.viewBox&&(s.push(' viewBox="'.concat(e.viewBox,'"')),delete e.viewBox),s.push(' width="'.concat(n,'" height="').concat(n,'"')),e.preserveAspectRatio&&(s.push(' preserveAspectRatio="'.concat(e.preserveAspectRatio,'"')),delete e.preserveAspectRatio),s.push(' pointer-events="none" xmlns="http://www.w3.org/2000/svg">'),s.push(e.content),delete e.content,s.push("</svg>"),s.join("")},t=e=>{const n=e.icons;return n.forEach((s=>{const i="".concat(e.namespace,"-").concat(s.name);s.namespace=i;let o=s.content;"number"==typeof o&&(o=n[o].content),s.content=o.split("{prefix}").join(i)})),n.forEach((e=>{e.svg=a(e)})),e},p=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"./",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e,n)=>{};return new Promise((i=>{const a=e.length,p=e.reduce(((e,n)=>e+n.size),0),c=[];let z=0,r=0;e.forEach((e=>{const m="".concat(n).concat(e.namespace,".js"),l=document.createElement("script");l.src=m,l.onload=function(){!function(e){z+=1;const n=window[e.namespace].default,m=JSON.parse(o()(n));r+=e.size,Object.assign(m,e),t(m),c.push(m),s(m,{loadedSize:r,totalSize:p,loaded:z,total:a}),z>=a&&i(c)}(e)},l.onerror=function(e){console.error(e)},document.body.appendChild(l)}))}))},c=function(e,n){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name";const i=new Map;n.forEach((e=>{const n=e[s];n&&i.set(n,e)}));class o extends HTMLElement{static get observedAttributes(){return["name","size","color","bg","radius"]}constructor(){super();const e=this.attachShadow({mode:"closed",delegatesFocus:!0});this.$style=document.createElement("style"),e.appendChild(this.$style),this.$container=document.createElement("div"),e.appendChild(this.$container)}connectedCallback(){this.render()}attributeChangedCallback(e,n,s){"name"===e?this.renderSvg():this.renderStyle()}render(){this.renderStyle(),this.renderSvg()}renderStyle(){const e=[":host, svg { display: block; }"];e.push("div {");const n=this.getAttribute("size")||"100%";e.push("width: ".concat(n,"; height: ").concat(n,";"));const s=this.getAttribute("color");s&&e.push("color: ".concat(s,";"));const i=this.getAttribute("bg");i&&e.push("background: ".concat(i,";"));const o=this.getAttribute("radius");o&&e.push("border-radius: ".concat(o,"; overflow: hidden;")),e.push("}"),this.$style.textContent=e.join(" ")}renderSvg(){const e=this.getAttribute("name"),n=i.get(e),s=n?n.svg:"";this.$container.innerHTML=s}}o.tagName=e,customElements.get(e)?console.error("".concat(e," already defined")):customElements.define(e,o)},z="1.0.1",r="2022-08-27T12:12:34.276Z",m=e})(),i})()));