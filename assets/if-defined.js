const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./add.js","./index.js","./index.css","./all-wallets.js","./arrow-bottom-circle.js","./app-store.js","./apple.js","./arrow-bottom.js","./arrow-left.js","./arrow-right.js","./arrow-top.js","./bank.js","./browser.js","./card.js","./checkmark.js","./checkmark-bold.js","./chevron-bottom.js","./chevron-left.js","./chevron-right.js","./chevron-top.js","./chrome-store.js","./clock.js","./close.js","./compass.js","./coinPlaceholder.js","./copy.js","./cursor.js","./cursor-transparent.js","./desktop.js","./disconnect.js","./discord.js","./etherscan.js","./extension.js","./external-link.js","./facebook.js","./farcaster.js","./filters.js","./github.js","./google.js","./help-circle.js","./image.js","./id.js","./info-circle.js","./lightbulb.js","./mail.js","./mobile.js","./more.js","./network-placeholder.js","./nftPlaceholder.js","./off.js","./play-store.js","./plus.js","./qr-code.js","./recycle-horizontal.js","./refresh.js","./search.js","./send2.js","./swapHorizontal.js","./swapHorizontalMedium.js","./swapHorizontalBold.js","./swapHorizontalRoundedBold.js","./swapVertical.js","./telegram.js","./three-dots.js","./twitch.js","./x.js","./twitterIcon.js","./verify.js","./verify-filled.js","./wallet.js","./walletconnect.js","./wallet-placeholder.js","./warning-circle.js","./info.js","./exclamation-triangle.js","./reown-logo.js"])))=>i.map(i=>d[i]);
import{cE as t,cF as e,cG as a,bX as r,c2 as i,cw as o,bY as n,b_ as s,cH as c,cC as l}from"./index.js";const g={getSpacingStyles:(t,e)=>Array.isArray(t)?t[e]?`var(--wui-spacing-${t[e]})`:void 0:"string"==typeof t?`var(--wui-spacing-${t})`:void 0,getFormattedDate:t=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t),getHostName(t){try{return new URL(t).hostname}catch(e){return""}},getTruncateString:({string:t,charsStart:e,charsEnd:a,truncate:r})=>t.length<=e+a?t:"end"===r?`${t.substring(0,e)}...`:"start"===r?`...${t.substring(t.length-a)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(a))}`,generateAvatarColors(t){const e=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),a=this.hexToRgb(e),r=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),i=100-3*Number(null==r?void 0:r.replace("px","")),o=`${i}% ${i}% at 65% 40%`,n=[];for(let s=0;s<5;s+=1){const t=this.tintColor(a,.15*s);n.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`\n    --local-color-1: ${n[0]};\n    --local-color-2: ${n[1]};\n    --local-color-3: ${n[2]};\n    --local-color-4: ${n[3]};\n    --local-color-5: ${n[4]};\n    --local-radial-circle: ${o}\n   `},hexToRgb(t){const e=parseInt(t,16);return[e>>16&255,e>>8&255,255&e]},tintColor(t,e){const[a,r,i]=t;return[Math.round(a+(255-a)*e),Math.round(r+(255-r)*e),Math.round(i+(255-i)*e)]},isNumber:t=>/^[0-9]+$/u.test(t),getColorTheme(t){var e;return t||("undefined"!=typeof window&&window.matchMedia?(null==(e=window.matchMedia("(prefers-color-scheme: dark)"))?void 0:e.matches)?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return 2===e.length?[e[0],e[1]]:["0","00"]},roundNumber:(t,e,a)=>t.toString().length>=e?Number(t).toFixed(a):t,formatNumberToLocalString:(t,e=2)=>void 0===t?"0.00":"number"==typeof t?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})};function p(t){return function(e){return"function"==typeof e?function(t,e){return customElements.get(t)||customElements.define(t,e),e}(t,e):function(t,e){const{kind:a,elements:r}=e;return{kind:a,elements:r,finisher(e){customElements.get(t)||customElements.define(t,e)}}}(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m={attribute:!0,type:String,converter:e,reflect:!1,hasChanged:t},u=(t=m,e,a)=>{const{kind:r,metadata:i}=a;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),o.set(a.name,t),"accessor"===r){const{name:r}=a;return{set(a){const i=e.get.call(this);e.set.call(this,a),this.requestUpdate(r,i,t)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=a;return function(a){const i=this[r];e.call(this,a),this.requestUpdate(r,i,t)}}throw Error("Unsupported decorator location: "+r)};function _(t){return(e,a)=>"object"==typeof a?u(t,e,a):((t,e,a)=>{const r=e.hasOwnProperty(a);return e.constructor.createProperty(a,t),r?Object.getOwnPropertyDescriptor(e,a):void 0})(t,e,a)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function w(t){return _({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=1,h=2,d=t=>(...e)=>({_$litDirective$:t,values:e});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let y=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this._$Ct=t,this._$AM=e,this._$Ci=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=(t,e)=>{var a;const r=t._$AN;if(void 0===r)return!1;for(const i of r)null==(a=i._$AO)||a.call(i,e,!1),f(i,e);return!0},S=t=>{let e,a;do{if(void 0===(e=t._$AM))break;a=e._$AN,a.delete(t),t=e}while(0===(null==a?void 0:a.size))},E=t=>{for(let e;e=t._$AM;t=e){let a=e._$AN;if(void 0===a)e._$AN=a=new Set;else if(a.has(t))break;a.add(t),T(e)}};function A(t){void 0!==this._$AN?(S(this),this._$AM=t,E(this)):this._$AM=t}function P(t,e=!1,a=0){const r=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(e)if(Array.isArray(r))for(let o=a;o<r.length;o++)f(r[o],!1),S(r[o]);else null!=r&&(f(r,!1),S(r));else f(this,t)}const T=t=>{t.type==h&&(t._$AP??(t._$AP=P),t._$AQ??(t._$AQ=A))};class $ extends y{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,a){super._$AT(t,e,a),E(this),this.isConnected=t._$AU}_$AO(t,e=!0){var a,r;t!==this.isConnected&&(this.isConnected=t,t?null==(a=this.reconnected)||a.call(this):null==(r=this.disconnected)||r.call(this)),e&&(f(this,t),S(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class b{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class R{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise((t=>this.Z=t)))}resume(){var t;null==(t=this.Z)||t.call(this),this.Y=this.Z=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=t=>{return!(e=t,null===e||"object"!=typeof e&&"function"!=typeof e||"function"!=typeof t.then);var e},L=1073741823;const D=d(class extends ${constructor(){super(...arguments),this._$Cwt=L,this._$Cbt=[],this._$CK=new b(this),this._$CX=new R}render(...t){return t.find((t=>!j(t)))??a}update(t,e){const r=this._$Cbt;let i=r.length;this._$Cbt=e;const o=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<e.length&&!(a>this._$Cwt);a++){const t=e[a];if(!j(t))return this._$Cwt=a,t;a<i&&t===r[a]||(this._$Cwt=L,i=0,Promise.resolve(t).then((async e=>{for(;n.get();)await n.get();const a=o.deref();if(void 0!==a){const r=a._$Cbt.indexOf(t);r>-1&&r<a._$Cwt&&(a._$Cwt=r,a.setValue(e))}})))}return a}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}});const O=new class{constructor(){this.cache=new Map}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}},I=r`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var V=function(t,e,a,r){var i,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,a,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(e,a,n):i(e,a))||n);return o>3&&n&&Object.defineProperty(e,a,n),n};const x={add:async()=>(await c((async()=>{const{addSvg:t}=await import("./add.js");return{addSvg:t}}),__vite__mapDeps([0,1,2]),import.meta.url)).addSvg,allWallets:async()=>(await c((async()=>{const{allWalletsSvg:t}=await import("./all-wallets.js");return{allWalletsSvg:t}}),__vite__mapDeps([3,1,2]),import.meta.url)).allWalletsSvg,arrowBottomCircle:async()=>(await c((async()=>{const{arrowBottomCircleSvg:t}=await import("./arrow-bottom-circle.js");return{arrowBottomCircleSvg:t}}),__vite__mapDeps([4,1,2]),import.meta.url)).arrowBottomCircleSvg,appStore:async()=>(await c((async()=>{const{appStoreSvg:t}=await import("./app-store.js");return{appStoreSvg:t}}),__vite__mapDeps([5,1,2]),import.meta.url)).appStoreSvg,apple:async()=>(await c((async()=>{const{appleSvg:t}=await import("./apple.js");return{appleSvg:t}}),__vite__mapDeps([6,1,2]),import.meta.url)).appleSvg,arrowBottom:async()=>(await c((async()=>{const{arrowBottomSvg:t}=await import("./arrow-bottom.js");return{arrowBottomSvg:t}}),__vite__mapDeps([7,1,2]),import.meta.url)).arrowBottomSvg,arrowLeft:async()=>(await c((async()=>{const{arrowLeftSvg:t}=await import("./arrow-left.js");return{arrowLeftSvg:t}}),__vite__mapDeps([8,1,2]),import.meta.url)).arrowLeftSvg,arrowRight:async()=>(await c((async()=>{const{arrowRightSvg:t}=await import("./arrow-right.js");return{arrowRightSvg:t}}),__vite__mapDeps([9,1,2]),import.meta.url)).arrowRightSvg,arrowTop:async()=>(await c((async()=>{const{arrowTopSvg:t}=await import("./arrow-top.js");return{arrowTopSvg:t}}),__vite__mapDeps([10,1,2]),import.meta.url)).arrowTopSvg,bank:async()=>(await c((async()=>{const{bankSvg:t}=await import("./bank.js");return{bankSvg:t}}),__vite__mapDeps([11,1,2]),import.meta.url)).bankSvg,browser:async()=>(await c((async()=>{const{browserSvg:t}=await import("./browser.js");return{browserSvg:t}}),__vite__mapDeps([12,1,2]),import.meta.url)).browserSvg,card:async()=>(await c((async()=>{const{cardSvg:t}=await import("./card.js");return{cardSvg:t}}),__vite__mapDeps([13,1,2]),import.meta.url)).cardSvg,checkmark:async()=>(await c((async()=>{const{checkmarkSvg:t}=await import("./checkmark.js");return{checkmarkSvg:t}}),__vite__mapDeps([14,1,2]),import.meta.url)).checkmarkSvg,checkmarkBold:async()=>(await c((async()=>{const{checkmarkBoldSvg:t}=await import("./checkmark-bold.js");return{checkmarkBoldSvg:t}}),__vite__mapDeps([15,1,2]),import.meta.url)).checkmarkBoldSvg,chevronBottom:async()=>(await c((async()=>{const{chevronBottomSvg:t}=await import("./chevron-bottom.js");return{chevronBottomSvg:t}}),__vite__mapDeps([16,1,2]),import.meta.url)).chevronBottomSvg,chevronLeft:async()=>(await c((async()=>{const{chevronLeftSvg:t}=await import("./chevron-left.js");return{chevronLeftSvg:t}}),__vite__mapDeps([17,1,2]),import.meta.url)).chevronLeftSvg,chevronRight:async()=>(await c((async()=>{const{chevronRightSvg:t}=await import("./chevron-right.js");return{chevronRightSvg:t}}),__vite__mapDeps([18,1,2]),import.meta.url)).chevronRightSvg,chevronTop:async()=>(await c((async()=>{const{chevronTopSvg:t}=await import("./chevron-top.js");return{chevronTopSvg:t}}),__vite__mapDeps([19,1,2]),import.meta.url)).chevronTopSvg,chromeStore:async()=>(await c((async()=>{const{chromeStoreSvg:t}=await import("./chrome-store.js");return{chromeStoreSvg:t}}),__vite__mapDeps([20,1,2]),import.meta.url)).chromeStoreSvg,clock:async()=>(await c((async()=>{const{clockSvg:t}=await import("./clock.js");return{clockSvg:t}}),__vite__mapDeps([21,1,2]),import.meta.url)).clockSvg,close:async()=>(await c((async()=>{const{closeSvg:t}=await import("./close.js");return{closeSvg:t}}),__vite__mapDeps([22,1,2]),import.meta.url)).closeSvg,compass:async()=>(await c((async()=>{const{compassSvg:t}=await import("./compass.js");return{compassSvg:t}}),__vite__mapDeps([23,1,2]),import.meta.url)).compassSvg,coinPlaceholder:async()=>(await c((async()=>{const{coinPlaceholderSvg:t}=await import("./coinPlaceholder.js");return{coinPlaceholderSvg:t}}),__vite__mapDeps([24,1,2]),import.meta.url)).coinPlaceholderSvg,copy:async()=>(await c((async()=>{const{copySvg:t}=await import("./copy.js");return{copySvg:t}}),__vite__mapDeps([25,1,2]),import.meta.url)).copySvg,cursor:async()=>(await c((async()=>{const{cursorSvg:t}=await import("./cursor.js");return{cursorSvg:t}}),__vite__mapDeps([26,1,2]),import.meta.url)).cursorSvg,cursorTransparent:async()=>(await c((async()=>{const{cursorTransparentSvg:t}=await import("./cursor-transparent.js");return{cursorTransparentSvg:t}}),__vite__mapDeps([27,1,2]),import.meta.url)).cursorTransparentSvg,desktop:async()=>(await c((async()=>{const{desktopSvg:t}=await import("./desktop.js");return{desktopSvg:t}}),__vite__mapDeps([28,1,2]),import.meta.url)).desktopSvg,disconnect:async()=>(await c((async()=>{const{disconnectSvg:t}=await import("./disconnect.js");return{disconnectSvg:t}}),__vite__mapDeps([29,1,2]),import.meta.url)).disconnectSvg,discord:async()=>(await c((async()=>{const{discordSvg:t}=await import("./discord.js");return{discordSvg:t}}),__vite__mapDeps([30,1,2]),import.meta.url)).discordSvg,etherscan:async()=>(await c((async()=>{const{etherscanSvg:t}=await import("./etherscan.js");return{etherscanSvg:t}}),__vite__mapDeps([31,1,2]),import.meta.url)).etherscanSvg,extension:async()=>(await c((async()=>{const{extensionSvg:t}=await import("./extension.js");return{extensionSvg:t}}),__vite__mapDeps([32,1,2]),import.meta.url)).extensionSvg,externalLink:async()=>(await c((async()=>{const{externalLinkSvg:t}=await import("./external-link.js");return{externalLinkSvg:t}}),__vite__mapDeps([33,1,2]),import.meta.url)).externalLinkSvg,facebook:async()=>(await c((async()=>{const{facebookSvg:t}=await import("./facebook.js");return{facebookSvg:t}}),__vite__mapDeps([34,1,2]),import.meta.url)).facebookSvg,farcaster:async()=>(await c((async()=>{const{farcasterSvg:t}=await import("./farcaster.js");return{farcasterSvg:t}}),__vite__mapDeps([35,1,2]),import.meta.url)).farcasterSvg,filters:async()=>(await c((async()=>{const{filtersSvg:t}=await import("./filters.js");return{filtersSvg:t}}),__vite__mapDeps([36,1,2]),import.meta.url)).filtersSvg,github:async()=>(await c((async()=>{const{githubSvg:t}=await import("./github.js");return{githubSvg:t}}),__vite__mapDeps([37,1,2]),import.meta.url)).githubSvg,google:async()=>(await c((async()=>{const{googleSvg:t}=await import("./google.js");return{googleSvg:t}}),__vite__mapDeps([38,1,2]),import.meta.url)).googleSvg,helpCircle:async()=>(await c((async()=>{const{helpCircleSvg:t}=await import("./help-circle.js");return{helpCircleSvg:t}}),__vite__mapDeps([39,1,2]),import.meta.url)).helpCircleSvg,image:async()=>(await c((async()=>{const{imageSvg:t}=await import("./image.js");return{imageSvg:t}}),__vite__mapDeps([40,1,2]),import.meta.url)).imageSvg,id:async()=>(await c((async()=>{const{idSvg:t}=await import("./id.js");return{idSvg:t}}),__vite__mapDeps([41,1,2]),import.meta.url)).idSvg,infoCircle:async()=>(await c((async()=>{const{infoCircleSvg:t}=await import("./info-circle.js");return{infoCircleSvg:t}}),__vite__mapDeps([42,1,2]),import.meta.url)).infoCircleSvg,lightbulb:async()=>(await c((async()=>{const{lightbulbSvg:t}=await import("./lightbulb.js");return{lightbulbSvg:t}}),__vite__mapDeps([43,1,2]),import.meta.url)).lightbulbSvg,mail:async()=>(await c((async()=>{const{mailSvg:t}=await import("./mail.js");return{mailSvg:t}}),__vite__mapDeps([44,1,2]),import.meta.url)).mailSvg,mobile:async()=>(await c((async()=>{const{mobileSvg:t}=await import("./mobile.js");return{mobileSvg:t}}),__vite__mapDeps([45,1,2]),import.meta.url)).mobileSvg,more:async()=>(await c((async()=>{const{moreSvg:t}=await import("./more.js");return{moreSvg:t}}),__vite__mapDeps([46,1,2]),import.meta.url)).moreSvg,networkPlaceholder:async()=>(await c((async()=>{const{networkPlaceholderSvg:t}=await import("./network-placeholder.js");return{networkPlaceholderSvg:t}}),__vite__mapDeps([47,1,2]),import.meta.url)).networkPlaceholderSvg,nftPlaceholder:async()=>(await c((async()=>{const{nftPlaceholderSvg:t}=await import("./nftPlaceholder.js");return{nftPlaceholderSvg:t}}),__vite__mapDeps([48,1,2]),import.meta.url)).nftPlaceholderSvg,off:async()=>(await c((async()=>{const{offSvg:t}=await import("./off.js");return{offSvg:t}}),__vite__mapDeps([49,1,2]),import.meta.url)).offSvg,playStore:async()=>(await c((async()=>{const{playStoreSvg:t}=await import("./play-store.js");return{playStoreSvg:t}}),__vite__mapDeps([50,1,2]),import.meta.url)).playStoreSvg,plus:async()=>(await c((async()=>{const{plusSvg:t}=await import("./plus.js");return{plusSvg:t}}),__vite__mapDeps([51,1,2]),import.meta.url)).plusSvg,qrCode:async()=>(await c((async()=>{const{qrCodeIcon:t}=await import("./qr-code.js");return{qrCodeIcon:t}}),__vite__mapDeps([52,1,2]),import.meta.url)).qrCodeIcon,recycleHorizontal:async()=>(await c((async()=>{const{recycleHorizontalSvg:t}=await import("./recycle-horizontal.js");return{recycleHorizontalSvg:t}}),__vite__mapDeps([53,1,2]),import.meta.url)).recycleHorizontalSvg,refresh:async()=>(await c((async()=>{const{refreshSvg:t}=await import("./refresh.js");return{refreshSvg:t}}),__vite__mapDeps([54,1,2]),import.meta.url)).refreshSvg,search:async()=>(await c((async()=>{const{searchSvg:t}=await import("./search.js");return{searchSvg:t}}),__vite__mapDeps([55,1,2]),import.meta.url)).searchSvg,send:async()=>(await c((async()=>{const{sendSvg:t}=await import("./send2.js");return{sendSvg:t}}),__vite__mapDeps([56,1,2]),import.meta.url)).sendSvg,swapHorizontal:async()=>(await c((async()=>{const{swapHorizontalSvg:t}=await import("./swapHorizontal.js");return{swapHorizontalSvg:t}}),__vite__mapDeps([57,1,2]),import.meta.url)).swapHorizontalSvg,swapHorizontalMedium:async()=>(await c((async()=>{const{swapHorizontalMediumSvg:t}=await import("./swapHorizontalMedium.js");return{swapHorizontalMediumSvg:t}}),__vite__mapDeps([58,1,2]),import.meta.url)).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await c((async()=>{const{swapHorizontalBoldSvg:t}=await import("./swapHorizontalBold.js");return{swapHorizontalBoldSvg:t}}),__vite__mapDeps([59,1,2]),import.meta.url)).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await c((async()=>{const{swapHorizontalRoundedBoldSvg:t}=await import("./swapHorizontalRoundedBold.js");return{swapHorizontalRoundedBoldSvg:t}}),__vite__mapDeps([60,1,2]),import.meta.url)).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await c((async()=>{const{swapVerticalSvg:t}=await import("./swapVertical.js");return{swapVerticalSvg:t}}),__vite__mapDeps([61,1,2]),import.meta.url)).swapVerticalSvg,telegram:async()=>(await c((async()=>{const{telegramSvg:t}=await import("./telegram.js");return{telegramSvg:t}}),__vite__mapDeps([62,1,2]),import.meta.url)).telegramSvg,threeDots:async()=>(await c((async()=>{const{threeDotsSvg:t}=await import("./three-dots.js");return{threeDotsSvg:t}}),__vite__mapDeps([63,1,2]),import.meta.url)).threeDotsSvg,twitch:async()=>(await c((async()=>{const{twitchSvg:t}=await import("./twitch.js");return{twitchSvg:t}}),__vite__mapDeps([64,1,2]),import.meta.url)).twitchSvg,twitter:async()=>(await c((async()=>{const{xSvg:t}=await import("./x.js");return{xSvg:t}}),__vite__mapDeps([65,1,2]),import.meta.url)).xSvg,twitterIcon:async()=>(await c((async()=>{const{twitterIconSvg:t}=await import("./twitterIcon.js");return{twitterIconSvg:t}}),__vite__mapDeps([66,1,2]),import.meta.url)).twitterIconSvg,verify:async()=>(await c((async()=>{const{verifySvg:t}=await import("./verify.js");return{verifySvg:t}}),__vite__mapDeps([67,1,2]),import.meta.url)).verifySvg,verifyFilled:async()=>(await c((async()=>{const{verifyFilledSvg:t}=await import("./verify-filled.js");return{verifyFilledSvg:t}}),__vite__mapDeps([68,1,2]),import.meta.url)).verifyFilledSvg,wallet:async()=>(await c((async()=>{const{walletSvg:t}=await import("./wallet.js");return{walletSvg:t}}),__vite__mapDeps([69,1,2]),import.meta.url)).walletSvg,walletConnect:async()=>(await c((async()=>{const{walletConnectSvg:t}=await import("./walletconnect.js");return{walletConnectSvg:t}}),__vite__mapDeps([70,1,2]),import.meta.url)).walletConnectSvg,walletConnectLightBrown:async()=>(await c((async()=>{const{walletConnectLightBrownSvg:t}=await import("./walletconnect.js");return{walletConnectLightBrownSvg:t}}),__vite__mapDeps([70,1,2]),import.meta.url)).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await c((async()=>{const{walletConnectBrownSvg:t}=await import("./walletconnect.js");return{walletConnectBrownSvg:t}}),__vite__mapDeps([70,1,2]),import.meta.url)).walletConnectBrownSvg,walletPlaceholder:async()=>(await c((async()=>{const{walletPlaceholderSvg:t}=await import("./wallet-placeholder.js");return{walletPlaceholderSvg:t}}),__vite__mapDeps([71,1,2]),import.meta.url)).walletPlaceholderSvg,warningCircle:async()=>(await c((async()=>{const{warningCircleSvg:t}=await import("./warning-circle.js");return{warningCircleSvg:t}}),__vite__mapDeps([72,1,2]),import.meta.url)).warningCircleSvg,x:async()=>(await c((async()=>{const{xSvg:t}=await import("./x.js");return{xSvg:t}}),__vite__mapDeps([65,1,2]),import.meta.url)).xSvg,info:async()=>(await c((async()=>{const{infoSvg:t}=await import("./info.js");return{infoSvg:t}}),__vite__mapDeps([73,1,2]),import.meta.url)).infoSvg,exclamationTriangle:async()=>(await c((async()=>{const{exclamationTriangleSvg:t}=await import("./exclamation-triangle.js");return{exclamationTriangleSvg:t}}),__vite__mapDeps([74,1,2]),import.meta.url)).exclamationTriangleSvg,reown:async()=>(await c((async()=>{const{reownSvg:t}=await import("./reown-logo.js");return{reownSvg:t}}),__vite__mapDeps([75,1,2]),import.meta.url)).reownSvg};let C=class extends n{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,s`${D(async function(t){if(O.has(t))return O.get(t);const e=(x[t]??x.copy)();return O.set(t,e),e}(this.name),s`<div class="fallback"></div>`)}`}};C.styles=[i,o,I],V([_()],C.prototype,"size",void 0),V([_()],C.prototype,"name",void 0),V([_()],C.prototype,"color",void 0),V([_()],C.prototype,"aspectRatio",void 0),C=V([p("wui-icon")],C);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k=d(class extends y{constructor(t){var e;if(super(t),t.type!==v||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var r,i;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null==(r=this.nt)?void 0:r.has(t))&&this.st.add(t);return this.render(e)}const o=t.element.classList;for(const a of this.st)a in e||(o.remove(a),this.st.delete(a));for(const a in e){const t=!!e[a];t===this.st.has(a)||(null==(i=this.nt)?void 0:i.has(a))||(t?(o.add(a),this.st.add(a)):(o.remove(a),this.st.delete(a)))}return a}}),z=r`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var B=function(t,e,a,r){var i,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,a,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(e,a,n):i(e,a))||n);return o>3&&n&&Object.defineProperty(e,a,n),n};let H=class extends n{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,s`<slot class=${k(t)}></slot>`}};H.styles=[i,z],B([_()],H.prototype,"variant",void 0),B([_()],H.prototype,"color",void 0),B([_()],H.prototype,"align",void 0),B([_()],H.prototype,"lineClamp",void 0),H=B([p("wui-text")],H);const M=r`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var F=function(t,e,a,r){var i,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,a,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(e,a,n):i(e,a))||n);return o>3&&n&&Object.defineProperty(e,a,n),n};let G=class extends n{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&g.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&g.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&g.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&g.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&g.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&g.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&g.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&g.getSpacingStyles(this.margin,3)};\n    `,s`<slot></slot>`}};G.styles=[i,M],F([_()],G.prototype,"flexDirection",void 0),F([_()],G.prototype,"flexWrap",void 0),F([_()],G.prototype,"flexBasis",void 0),F([_()],G.prototype,"flexGrow",void 0),F([_()],G.prototype,"flexShrink",void 0),F([_()],G.prototype,"alignItems",void 0),F([_()],G.prototype,"justifyContent",void 0),F([_()],G.prototype,"columnGap",void 0),F([_()],G.prototype,"rowGap",void 0),F([_()],G.prototype,"gap",void 0),F([_()],G.prototype,"padding",void 0),F([_()],G.prototype,"margin",void 0),G=F([p("wui-flex")],G);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const N=t=>t??l;export{g as U,d as a,p as c,k as e,$ as f,_ as n,N as o,w as r};
