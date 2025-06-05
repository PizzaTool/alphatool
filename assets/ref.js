import{cC as t}from"./index.js";import{a as i,f as s}from"./if-defined.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=()=>new h;class h{}const o=new WeakMap,n=i(class extends s{render(i){return t}update(i,[s]){var e;const h=s!==this.G;return h&&void 0!==this.G&&this.rt(void 0),(h||this.lt!==this.ct)&&(this.G=s,this.ht=null==(e=i.options)?void 0:e.host,this.rt(this.ct=i.element)),t}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const i=this.ht??globalThis;let s=o.get(i);void 0===s&&(s=new WeakMap,o.set(i,s)),void 0!==s.get(this.G)&&this.G.call(this.ht,void 0),s.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,i;return"function"==typeof this.G?null==(t=o.get(this.ht??globalThis))?void 0:t.get(this.G):null==(i=this.G)?void 0:i.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});export{e,n};
