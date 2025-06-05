import{bX as e,c2 as t,c8 as i,bY as o,b_ as r,aS as a,cj as n,cb as s,ct as l,aV as c,aW as u,bZ as d,c4 as p,aT as h,aU as w,aX as g,c7 as f,c1 as b,c6 as m,c5 as v,ca as x,ci as y,cf as k,ck as C,cw as $,cq as S,cx as T,cd as I,ce as R,cy as O,cc as A,b$ as E,cz as N,cA as j}from"./index.js";import{n as P,c as D,o as U,U as L,r as W,e as _}from"./if-defined.js";import"./index20.js";import"./index13.js";import"./index30.js";import"./index18.js";import{W as B}from"./index38.js";import"./index15.js";import"./index34.js";import"./index17.js";import"./index16.js";import{n as z}from"./index37.js";import"./index36.js";import"./index19.js";import{M as F}from"./index27.js";import"./index28.js";import{e as M,n as K}from"./ref.js";import"./index14.js";import"./index26.js";import"./index31.js";import"./index21.js";import{O as q}from"./index22.js";import{e as H}from"./index23.js";import{N as V}from"./index12.js";import"./index24.js";import"./index32.js";import"./index25.js";import"./index35.js";import"./index33.js";import"./dayjs.min.js";import"./ConstantsUtil.js";const G=e`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var Y=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let X=class extends o{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return r`
      <button
        ?disabled=${this.disabled}
        class=${U(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?L.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return r` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?r`<wui-image src=${this.networkSrc}></wui-image>`:r`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `,t=this.loading?r`<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>`:r`<wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>`;return r`${e} ${t}`}return null}};X.styles=[t,i,G],Y([P()],X.prototype,"networkSrc",void 0),Y([P()],X.prototype,"avatarSrc",void 0),Y([P()],X.prototype,"balance",void 0),Y([P({type:Boolean})],X.prototype,"isUnsupportedChain",void 0),Y([P({type:Boolean})],X.prototype,"disabled",void 0),Y([P({type:Boolean})],X.prototype,"loading",void 0),Y([P()],X.prototype,"address",void 0),Y([P()],X.prototype,"profileName",void 0),Y([P()],X.prototype,"charsStart",void 0),Y([P()],X.prototype,"charsEnd",void 0),X=Y([D("wui-account-button")],X);var Q=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};class J extends o{constructor(){var e,t,i,o,r,l;super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=null==(e=a.getAccountData(this.namespace))?void 0:e.caipAddress,this.balanceVal=null==(t=a.getAccountData(this.namespace))?void 0:t.balance,this.balanceSymbol=null==(i=a.getAccountData(this.namespace))?void 0:i.balanceSymbol,this.profileName=null==(o=a.getAccountData(this.namespace))?void 0:o.profileName,this.profileImage=null==(r=a.getAccountData(this.namespace))?void 0:r.profileImage,this.network=null==(l=a.getNetworkData(this.namespace))?void 0:l.caipNetwork,this.networkImage=n.getNetworkImage(this.network),this.isSupported=!!s.state.allowUnsupportedChain||(!a.state.activeChain||a.checkIfSupportedNetwork(a.state.activeChain))}firstUpdated(){const e=this.namespace;e?this.unsubscribe.push(a.subscribeChainProp("accountState",(e=>{this.caipAddress=null==e?void 0:e.caipAddress,this.balanceVal=null==e?void 0:e.balance,this.balanceSymbol=null==e?void 0:e.balanceSymbol,this.profileName=null==e?void 0:e.profileName,this.profileImage=null==e?void 0:e.profileImage}),e),a.subscribeChainProp("networkState",(t=>{this.network=null==t?void 0:t.caipNetwork,this.isSupported=a.checkIfSupportedNetwork(e,null==t?void 0:t.caipNetwork),this.networkImage=n.getNetworkImage(null==t?void 0:t.caipNetwork)}),e)):this.unsubscribe.push(l.subscribeNetworkImages((()=>{this.networkImage=n.getNetworkImage(this.network)})),a.subscribeKey("activeCaipAddress",(e=>{this.caipAddress=e})),c.subscribeKey("balance",(e=>this.balanceVal=e)),c.subscribeKey("balanceSymbol",(e=>this.balanceSymbol=e)),c.subscribeKey("profileName",(e=>this.profileName=e)),c.subscribeKey("profileImage",(e=>this.profileImage=e)),a.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=n.getNetworkImage(e),this.isSupported=!(null==e?void 0:e.chainNamespace)||a.checkIfSupportedNetwork(null==e?void 0:e.chainNamespace),this.fetchNetworkImage(e)})))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!a.state.activeChain)return null;const e="show"===this.balance,t="string"!=typeof this.balanceVal;return r`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${!s.state.allowUnsupportedChain&&!this.isSupported}
        address=${U(u.getPlainAddress(this.caipAddress))}
        profileName=${U(this.profileName)}
        networkSrc=${U(this.networkImage)}
        avatarSrc=${U(this.profileImage)}
        balance=${e?u.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid=${"account-button"+(this.namespace?`-${this.namespace}`:"")}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||s.state.allowUnsupportedChain?d.open({namespace:this.namespace}):d.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){var t,i;(null==(t=null==e?void 0:e.assets)?void 0:t.imageId)&&(this.networkImage=await n.fetchNetworkImage(null==(i=null==e?void 0:e.assets)?void 0:i.imageId))}}Q([P({type:Boolean})],J.prototype,"disabled",void 0),Q([P()],J.prototype,"balance",void 0),Q([P()],J.prototype,"charsStart",void 0),Q([P()],J.prototype,"charsEnd",void 0),Q([P()],J.prototype,"namespace",void 0),Q([W()],J.prototype,"caipAddress",void 0),Q([W()],J.prototype,"balanceVal",void 0),Q([W()],J.prototype,"balanceSymbol",void 0),Q([W()],J.prototype,"profileName",void 0),Q([W()],J.prototype,"profileImage",void 0),Q([W()],J.prototype,"network",void 0),Q([W()],J.prototype,"networkImage",void 0),Q([W()],J.prototype,"isSupported",void 0);let Z=class extends J{};Z=Q([D("w3m-account-button")],Z);let ee=class extends J{};ee=Q([D("appkit-account-button")],ee);const te=e`
  :host {
    display: block;
    width: max-content;
  }
`;var ie=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};class oe extends o{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=a.state.activeCaipAddress}firstUpdated(){this.namespace?this.unsubscribe.push(a.subscribeChainProp("accountState",(e=>{this.caipAddress=null==e?void 0:e.caipAddress}),this.namespace)):this.unsubscribe.push(a.subscribeKey("activeCaipAddress",(e=>this.caipAddress=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.caipAddress?r`
          <appkit-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${U(this.balance)}
            .charsStart=${U(this.charsStart)}
            .charsEnd=${U(this.charsEnd)}
            namespace=${U(this.namespace)}
          >
          </appkit-account-button>
        `:r`
          <appkit-connect-button
            size=${U(this.size)}
            label=${U(this.label)}
            loadingLabel=${U(this.loadingLabel)}
            namespace=${U(this.namespace)}
          ></appkit-connect-button>
        `}}oe.styles=te,ie([P({type:Boolean})],oe.prototype,"disabled",void 0),ie([P()],oe.prototype,"balance",void 0),ie([P()],oe.prototype,"size",void 0),ie([P()],oe.prototype,"label",void 0),ie([P()],oe.prototype,"loadingLabel",void 0),ie([P()],oe.prototype,"charsStart",void 0),ie([P()],oe.prototype,"charsEnd",void 0),ie([P()],oe.prototype,"namespace",void 0),ie([W()],oe.prototype,"caipAddress",void 0);let re=class extends oe{};re=ie([D("w3m-button")],re);let ae=class extends oe{};ae=ie([D("appkit-button")],ae);const ne=e`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var se=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let le=class extends o{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e="md"===this.size?"paragraph-600":"small-600";return r`
      <button data-size=${this.size} ?disabled=${this.loading}>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?r`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};le.styles=[t,i,ne],se([P()],le.prototype,"size",void 0),se([P({type:Boolean})],le.prototype,"loading",void 0),le=se([D("wui-connect-button")],le);var ce=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};class ue extends o{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=d.state.open,this.loading=this.namespace?d.state.loadingNamespaceMap.get(this.namespace):d.state.loading,this.unsubscribe.push(d.subscribe((e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return r`
      <wui-connect-button
        size=${U(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${"connect-button"+(this.namespace?`-${this.namespace}`:"")}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?d.close():this.loading||d.open({view:"Connect",namespace:this.namespace})}}ce([P()],ue.prototype,"size",void 0),ce([P()],ue.prototype,"label",void 0),ce([P()],ue.prototype,"loadingLabel",void 0),ce([P()],ue.prototype,"namespace",void 0),ce([W()],ue.prototype,"open",void 0),ce([W()],ue.prototype,"loading",void 0);let de=class extends ue{};de=ce([D("w3m-connect-button")],de);let pe=class extends ue{};pe=ce([D("appkit-connect-button")],pe);const he=e`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var we=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ge=class extends o{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return r`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?r`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?r`<wui-image src=${this.imageSrc}></wui-image>`:r`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ge.styles=[t,i,he],we([P()],ge.prototype,"imageSrc",void 0),we([P({type:Boolean})],ge.prototype,"isUnsupportedChain",void 0),we([P({type:Boolean})],ge.prototype,"disabled",void 0),ge=we([D("wui-network-button")],ge);const fe=e`
  :host {
    display: block;
    width: max-content;
  }
`;var be=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};class me extends o{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=a.state.activeCaipNetwork,this.networkImage=n.getNetworkImage(this.network),this.caipAddress=a.state.activeCaipAddress,this.loading=d.state.loading,this.isSupported=!!s.state.allowUnsupportedChain||(!a.state.activeChain||a.checkIfSupportedNetwork(a.state.activeChain)),this.unsubscribe.push(l.subscribeNetworkImages((()=>{this.networkImage=n.getNetworkImage(this.network)})),a.subscribeKey("activeCaipAddress",(e=>{this.caipAddress=e})),a.subscribeKey("activeCaipNetwork",(e=>{var t;this.network=e,this.networkImage=n.getNetworkImage(e),this.isSupported=!(null==e?void 0:e.chainNamespace)||a.checkIfSupportedNetwork(e.chainNamespace),n.fetchNetworkImage(null==(t=null==e?void 0:e.assets)?void 0:t.imageId)})),d.subscribeKey("loading",(e=>this.loading=e)))}firstUpdated(){var e,t;n.fetchNetworkImage(null==(t=null==(e=this.network)?void 0:e.assets)?void 0:t.imageId)}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=!this.network||a.checkIfSupportedNetwork(this.network.chainNamespace);return r`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        .isUnsupportedChain=${!s.state.allowUnsupportedChain&&!e}
        imageSrc=${U(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported||s.state.allowUnsupportedChain?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(p.sendEvent({type:"track",event:"CLICK_NETWORKS"}),d.open({view:"Networks"}))}}me.styles=fe,be([P({type:Boolean})],me.prototype,"disabled",void 0),be([P({type:String})],me.prototype,"label",void 0),be([W()],me.prototype,"network",void 0),be([W()],me.prototype,"networkImage",void 0),be([W()],me.prototype,"caipAddress",void 0),be([W()],me.prototype,"loading",void 0),be([W()],me.prototype,"isSupported",void 0);let ve=class extends me{};ve=be([D("w3m-network-button")],ve);let xe=class extends me{};xe=be([D("appkit-network-button")],xe);const ye=e`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var ke=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Ce=class extends o{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return r`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};Ce.styles=[t,i,ye],ke([P()],Ce.prototype,"label",void 0),ke([P()],Ce.prototype,"description",void 0),ke([P()],Ce.prototype,"icon",void 0),Ce=ke([D("wui-notice-card")],Ce);var $e=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Se=class extends o{constructor(){super(),this.unsubscribe=[],this.socialProvider=h.getConnectedSocialProvider(),this.socialUsername=h.getConnectedSocialUsername(),this.namespace=a.state.activeChain,this.unsubscribe.push(a.subscribeKey("activeChain",(e=>{this.namespace=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=w.getConnectorId(this.namespace),t=w.getAuthConnector();if(!t||e!==g.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const i=t.provider.getEmail()??"";return i||this.socialUsername?r`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(i,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(i)}</wui-text>
      </wui-list-item>
    `:(this.style.cssText="display: none",null)}onGoToUpdateEmail(e,t){t||f.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};$e([W()],Se.prototype,"namespace",void 0),Se=$e([D("w3m-account-auth-button")],Se);var Te=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Ie=class extends o{constructor(){super(),this.usubscribe=[],this.networkImages=l.state.networkImages,this.address=c.state.address,this.profileImage=c.state.profileImage,this.profileName=c.state.profileName,this.network=a.state.activeCaipNetwork,this.preferredAccountTypes=c.state.preferredAccountTypes,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(c.subscribe((e=>{e.address&&(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountTypes=e.preferredAccountTypes)})),c.subscribeKey("preferredAccountTypes",(e=>this.preferredAccountTypes=e)),a.subscribeKey("activeCaipNetwork",(e=>{(null==e?void 0:e.id)&&(this.network=e)})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){var e,t,i;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const o=this.networkImages[(null==(t=null==(e=this.network)?void 0:e.assets)?void 0:t.imageId)??""];return r`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${U(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${L.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${o?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${U(o)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${(null==(i=this.network)?void 0:i.name)??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){var e;const t=null==(e=this.network)?void 0:e.chainNamespace,i=w.getConnectorId(t),o=w.getAuthConnector();return a.checkIfNamesSupported()&&o&&i===g.CONNECTOR_ID.AUTH&&!this.profileName?r`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){var e;const t=null==(e=this.network)?void 0:e.chainNamespace,i=w.getConnectorId(t),o=w.getAuthConnector(),{origin:a}=location;return!o||i!==g.CONNECTOR_ID.AUTH||a.includes(b.SECURE_SITE)?null:r`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=a.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=null==e?void 0:e.find((({id:e})=>{var t;return e===(null==(t=this.network)?void 0:t.id)}));return t||!i}onCopyAddress(){try{this.address&&(u.copyToClopboard(this.address),m.showSuccess("Address copied"))}catch{m.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){var e,t;const i=null==(e=this.network)?void 0:e.chainNamespace,o=a.checkIfSmartAccountEnabled(),n=w.getConnectorId(i);return w.getAuthConnector()&&n===g.CONNECTOR_ID.AUTH&&o?(this.switched||(this.text=(null==(t=this.preferredAccountTypes)?void 0:t[i])===v.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),r`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `):null}onChooseName(){f.push("ChooseAccountName")}async changePreferredAccountType(){var e,t;const i=null==(e=this.network)?void 0:e.chainNamespace,o=a.checkIfSmartAccountEnabled(),r=(null==(t=this.preferredAccountTypes)?void 0:t[i])!==v.ACCOUNT_TYPES.SMART_ACCOUNT&&o?v.ACCOUNT_TYPES.SMART_ACCOUNT:v.ACCOUNT_TYPES.EOA;w.getAuthConnector()&&(this.loading=!0,await x.setPreferredAccountType(r,i),this.text=r===v.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,y.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&f.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await x.disconnect(),d.close()}catch{p.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),m.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){p.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),f.push("UpgradeEmailWallet")}};Te([W()],Ie.prototype,"address",void 0),Te([W()],Ie.prototype,"profileImage",void 0),Te([W()],Ie.prototype,"profileName",void 0),Te([W()],Ie.prototype,"network",void 0),Te([W()],Ie.prototype,"preferredAccountTypes",void 0),Te([W()],Ie.prototype,"disconnecting",void 0),Te([W()],Ie.prototype,"loading",void 0),Te([W()],Ie.prototype,"switched",void 0),Te([W()],Ie.prototype,"text",void 0),Ie=Te([D("w3m-account-settings-view")],Ie);const Re=e`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var Oe=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Ae=class extends o{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail"}render(){const e=a.state.activeChain,t=w.getConnectorId(e)===g.CONNECTOR_ID.AUTH;return r`<button data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${t?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${L.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(e){var t,i;e.target instanceof HTMLElement&&"copy-address"===e.target.id?null==(t=this.onCopyClick)||t.call(this,e):null==(i=this.onProfileClick)||i.call(this,e)}getIconTemplate(e){return r`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};Ae.styles=[t,i,Re],Oe([P()],Ae.prototype,"avatarSrc",void 0),Oe([P()],Ae.prototype,"profileName",void 0),Oe([P()],Ae.prototype,"address",void 0),Oe([P()],Ae.prototype,"icon",void 0),Oe([P()],Ae.prototype,"onProfileClick",void 0),Oe([P()],Ae.prototype,"onCopyClick",void 0),Ae=Oe([D("wui-profile-button-v2")],Ae);const Ee=e`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Ne=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let je=class extends o{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map(((e,t)=>{var i;const o=t===this.activeTab;return r`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${o}
          data-testid="tab-${null==(i=e.label)?void 0:i.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `}))}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout((()=>{this.animateTabs(0,!0)}),0))}iconTemplate(e){return e.icon?r`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const i=this.buttons[this.activeTab],o=this.buttons[e],r=null==i?void 0:i.querySelector("wui-text"),a=null==o?void 0:o.querySelector("wui-text"),n=null==o?void 0:o.getBoundingClientRect(),s=null==a?void 0:a.getBoundingClientRect();i&&r&&!t&&e!==this.activeTab&&(r.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&n&&s&&a&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(n.width+s.width)+6}px`,o.animate([{width:`${n.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};je.styles=[t,i,Ee],Ne([P({type:Array})],je.prototype,"tabs",void 0),Ne([P()],je.prototype,"onTabChange",void 0),Ne([P({type:Array})],je.prototype,"buttons",void 0),Ne([P({type:Boolean})],je.prototype,"disabled",void 0),Ne([P()],je.prototype,"localTabWidth",void 0),Ne([W()],je.prototype,"activeTab",void 0),Ne([W()],je.prototype,"isDense",void 0),je=Ne([D("wui-tabs")],je);const Pe=e`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var De=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Ue=class extends o{constructor(){var e;super(),this.unsubscribe=[],this.caipAddress=c.state.caipAddress,this.address=u.getPlainAddress(c.state.caipAddress),this.allAccounts=c.state.allAccounts,this.profileImage=c.state.profileImage,this.profileName=c.state.profileName,this.disconnecting=!1,this.balance=c.state.balance,this.balanceSymbol=c.state.balanceSymbol,this.features=s.state.features,this.remoteFeatures=s.state.remoteFeatures,this.namespace=a.state.activeChain,this.chainId=null==(e=a.state.activeCaipNetwork)?void 0:e.id,this.unsubscribe.push(c.subscribeKey("caipAddress",(e=>{this.address=u.getPlainAddress(e),this.caipAddress=e})),c.subscribeKey("balance",(e=>this.balance=e)),c.subscribeKey("balanceSymbol",(e=>this.balanceSymbol=e)),c.subscribeKey("profileName",(e=>this.profileName=e)),c.subscribeKey("profileImage",(e=>this.profileImage=e)),s.subscribeKey("features",(e=>this.features=e)),s.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)),c.subscribeKey("allAccounts",(e=>{this.allAccounts=e})),s.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)),a.subscribeKey("activeChain",(e=>this.namespace=e)),a.subscribeKey("activeCaipNetwork",(e=>{var t;if(e){const[i,o]=(null==(t=null==e?void 0:e.caipNetworkId)?void 0:t.split(":"))||[];i&&o&&(this.namespace=i,this.chainId=o)}})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.caipAddress)return null;const e=a.state.activeChain!==g.CHAIN.SOLANA&&this.allAccounts.length>1;return r`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        ${e?this.multiAccountTemplate():this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${u.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){var e;if(!this.namespace)return null;const t=null==(e=this.remoteFeatures)?void 0:e.onramp,i=b.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace);return t&&i?r`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}orderedFeaturesTemplate(){var e;return((null==(e=this.features)?void 0:e.walletFeaturesOrder)||b.DEFAULT_FEATURES.walletFeaturesOrder).map((e=>{switch(e){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}}))}activityTemplate(){var e;if(!this.namespace)return null;return(null==(e=this.remoteFeatures)?void 0:e.activity)&&b.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?r` <wui-list-item
          iconVariant="blue"
          icon="clock"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){var e;const t=null==(e=this.remoteFeatures)?void 0:e.swaps,i=a.state.activeChain===g.CHAIN.EVM;return t&&i?r`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `:null}sendTemplate(){var e;const t=null==(e=this.features)?void 0:e.send,i=a.state.activeChain,o=b.SEND_SUPPORTED_NAMESPACES.includes(i);return t&&o?r`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const e=a.state.activeChain,t=w.getConnectorId(e),i=w.getAuthConnector(),{origin:o}=location;return!i||t!==g.CONNECTOR_ID.AUTH||o.includes(b.SECURE_SITE)?null:r`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){f.push("SwitchAddress")}handleClickPay(){f.push("OnRampProviders")}handleClickSwap(){f.push("Swap")}handleClickSend(){f.push("WalletSend")}explorerBtnTemplate(){return c.state.addressExplorerUrl?r`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}singleAccountTemplate(){return r`
      <wui-avatar
        alt=${U(this.caipAddress)}
        address=${U(u.getPlainAddress(this.caipAddress))}
        imageSrc=${U(null===this.profileImage?void 0:this.profileImage)}
        data-testid="single-account-avatar"
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName?L.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):L.getTruncateString({string:this.address||"",charsStart:4,charsEnd:4,truncate:"middle"})}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `}multiAccountTemplate(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=this.allAccounts.find((e=>e.address===this.address)),t=c.state.addressLabels.get(this.address);return"bip122"===this.namespace?this.btcAccountsTemplate():r`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${U(this.address)}
        icon="${(null==e?void 0:e.type)===v.ACCOUNT_TYPES.SMART_ACCOUNT&&a.state.activeChain===g.CHAIN.EVM?"lightbulb":"mail"}"
        avatarSrc=${U(this.profileImage?this.profileImage:void 0)}
        profileName=${U(t||this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `}btcAccountsTemplate(){return r`<wui-flex gap="m" alignItems="center" flexDirection="column">
      <wui-avatar
        .imageSrc=${U(this.profileImage?this.profileImage:void 0)}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>
      <wui-tabs
        .tabs=${[{label:"Payment"},{label:"Ordinals"}]}
        .onTabChange=${e=>{var t;return c.setCaipAddress(`bip122:${this.chainId}:${(null==(t=this.allAccounts[e])?void 0:t.address)||""}`,this.namespace)}}
      ></wui-tabs>
      <wui-flex gap="xs" alignItems="center" justifyContent="center">
        <wui-text variant="large-600" color="fg-100">
          ${L.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        </wui-text>
        <wui-icon-link
          size="md"
          icon="copy"
          iconColor="fg-200"
          @click=${this.onCopyAddress}
        ></wui-icon-link>
      </wui-flex>
    </wui-flex>`}onCopyAddress(){try{this.address&&(u.copyToClopboard(this.address),m.showSuccess("Address copied"))}catch{m.showError("Failed to copy")}}onTransactions(){var e;const t=a.state.activeChain;p.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:(null==(e=c.state.preferredAccountTypes)?void 0:e[t])===v.ACCOUNT_TYPES.SMART_ACCOUNT}}),f.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await x.disconnect(),d.close()}catch{p.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),m.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const e=c.state.addressExplorerUrl;e&&u.openHref(e,"_blank")}onGoToUpgradeView(){p.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),f.push("UpgradeEmailWallet")}};Ue.styles=Pe,De([W()],Ue.prototype,"caipAddress",void 0),De([W()],Ue.prototype,"address",void 0),De([W()],Ue.prototype,"allAccounts",void 0),De([W()],Ue.prototype,"profileImage",void 0),De([W()],Ue.prototype,"profileName",void 0),De([W()],Ue.prototype,"disconnecting",void 0),De([W()],Ue.prototype,"balance",void 0),De([W()],Ue.prototype,"balanceSymbol",void 0),De([W()],Ue.prototype,"features",void 0),De([W()],Ue.prototype,"remoteFeatures",void 0),De([W()],Ue.prototype,"namespace",void 0),De([W()],Ue.prototype,"chainId",void 0),Ue=De([D("w3m-account-default-widget")],Ue);const Le=e`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var We=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let _e=class extends o{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return r`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};_e.styles=[t,Le],We([P()],_e.prototype,"dollars",void 0),We([P()],_e.prototype,"pennies",void 0),_e=We([D("wui-balance")],_e);const Be=e`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var ze=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Fe=class extends o{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return r`<button data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${L.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?r`<wui-image src=${this.networkSrc}></wui-image>`:r`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Fe.styles=[t,i,Be],ze([P()],Fe.prototype,"networkSrc",void 0),ze([P()],Fe.prototype,"avatarSrc",void 0),ze([P()],Fe.prototype,"profileName",void 0),ze([P()],Fe.prototype,"address",void 0),ze([P()],Fe.prototype,"icon",void 0),Fe=ze([D("wui-profile-button")],Fe);const Me=e`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Ke=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let qe=class extends o{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,r`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};qe.styles=[t,i,Me],Ke([P()],qe.prototype,"placement",void 0),Ke([P()],qe.prototype,"variant",void 0),Ke([P()],qe.prototype,"message",void 0),qe=Ke([D("wui-tooltip")],qe);const He={getTabsByNamespace(e){var t;return Boolean(e)&&e===g.CHAIN.EVM?!1===(null==(t=s.state.remoteFeatures)?void 0:t.activity)?k.ACCOUNT_TABS.filter((e=>"Activity"!==e.label)):k.ACCOUNT_TABS:[]}},Ve=e`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;let Ge=class extends o{render(){return r`<w3m-activity-list page="account"></w3m-activity-list>`}};Ge.styles=Ve,Ge=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([D("w3m-account-activity-widget")],Ge);const Ye=e`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;let Xe=class extends o{render(){return r`${this.nftTemplate()}`}nftTemplate(){return r` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text
          variant="paragraph-500"
          align="center"
          color="fg-100"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="small-400"
          align="center"
          color="fg-200"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`}onReceiveClick(){f.push("WalletReceive")}};Xe.styles=Ye,Xe=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([D("w3m-account-nfts-widget")],Xe);const Qe=e`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var Je=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Ze=class extends o{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return r`
      <button ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?r` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:r`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};Ze.styles=[t,i,Qe],Je([P()],Ze.prototype,"icon",void 0),Je([P()],Ze.prototype,"text",void 0),Je([P()],Ze.prototype,"description",void 0),Je([P()],Ze.prototype,"tag",void 0),Je([P()],Ze.prototype,"iconBackgroundColor",void 0),Je([P()],Ze.prototype,"iconColor",void 0),Je([P({type:Boolean})],Ze.prototype,"disabled",void 0),Ze=Je([D("wui-list-description")],Ze);const et=e`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var tt=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let it=class extends o{constructor(){super(),this.unsubscribe=[],this.tokenBalance=c.state.tokenBalance,this.remoteFeatures=s.state.remoteFeatures,this.unsubscribe.push(c.subscribe((e=>{this.tokenBalance=e.tokenBalance})),s.subscribeKey("remoteFeatures",(e=>{this.remoteFeatures=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return r`${this.tokenTemplate()}`}tokenTemplate(){var e;return this.tokenBalance&&(null==(e=this.tokenBalance)?void 0:e.length)>0?r`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:r` <wui-flex flexDirection="column" gap="xs"
      >${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="receive-funds"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){var e;return(null==(e=this.remoteFeatures)?void 0:e.onramp)?r`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="buy-crypto"
      ></wui-list-description>`:r``}tokenItemTemplate(){var e;return null==(e=this.tokenBalance)?void 0:e.map((e=>r`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`))}onReceiveClick(){f.push("WalletReceive")}onBuyClick(){var e;const t=a.state.activeChain;p.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:(null==(e=c.state.preferredAccountTypes)?void 0:e[t])===v.ACCOUNT_TYPES.SMART_ACCOUNT}}),f.push("OnRampProviders")}};it.styles=et,tt([W()],it.prototype,"tokenBalance",void 0),tt([W()],it.prototype,"remoteFeatures",void 0),it=tt([D("w3m-account-tokens-widget")],it);const ot=e`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var rt=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let at=class extends o{constructor(){super(),this.unsubscribe=[],this.address=c.state.address,this.profileImage=c.state.profileImage,this.profileName=c.state.profileName,this.network=a.state.activeCaipNetwork,this.currentTab=c.state.currentTab,this.tokenBalance=c.state.tokenBalance,this.features=s.state.features,this.remoteFeatures=s.state.remoteFeatures,this.networkImage=n.getNetworkImage(this.network),this.unsubscribe.push(l.subscribeNetworkImages((()=>{this.networkImage=n.getNetworkImage(this.network)})),c.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):d.close()})),a.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=n.getNetworkImage(this.network)})),s.subscribeKey("features",(e=>this.features=e)),s.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e))),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearInterval(this.watchTokenBalance)}firstUpdated(){c.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");return r`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${U(this.address)}
        networkSrc=${U(this.networkImage)}
        icon="chevronBottom"
        avatarSrc=${U(this.profileImage?this.profileImage:void 0)}
        profileName=${U(this.profileName??void 0)}
        data-testid="w3m-profile-button"
      ></wui-profile-button>

      ${this.tokenBalanceTemplate()} ${this.orderedWalletFeatures()} ${this.tabsTemplate()}
      ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){var e;const t=(null==(e=this.features)?void 0:e.walletFeaturesOrder)||b.DEFAULT_FEATURES.walletFeaturesOrder;return t.every((e=>{var t,i;return"send"===e||"receive"===e?!(null==(t=this.features)?void 0:t[e]):"swaps"!==e&&"onramp"!==e||!(null==(i=this.remoteFeatures)?void 0:i[e])}))?null:r`<wui-flex gap="s">
      ${t.map((e=>{switch(e){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"receive":return this.receiveTemplate();case"send":return this.sendTemplate();default:return null}}))}
    </wui-flex>`}onrampTemplate(){var e;return(null==(e=this.remoteFeatures)?void 0:e.onramp)?r`
      <w3m-tooltip-trigger text="Buy">
        <wui-icon-button
          data-testid="wallet-features-onramp-button"
          @click=${this.onBuyClick.bind(this)}
          icon="card"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}swapsTemplate(){var e;const t=null==(e=this.remoteFeatures)?void 0:e.swaps,i=a.state.activeChain===g.CHAIN.EVM;return t&&i?r`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}receiveTemplate(){var e;return(null==(e=this.features)?void 0:e.receive)?r`
      <w3m-tooltip-trigger text="Receive">
        <wui-icon-button
          data-testid="wallet-features-receive-button"
          @click=${this.onReceiveClick.bind(this)}
          icon="arrowBottomCircle"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}sendTemplate(){var e;const t=null==(e=this.features)?void 0:e.send,i=a.state.activeChain,o=b.SEND_SUPPORTED_NAMESPACES.includes(i);return t&&o?r`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval((()=>c.fetchTokenBalance((e=>this.onTokenBalanceError(e)))),1e4)}onTokenBalanceError(e){if(e instanceof Error&&e.cause instanceof Response){e.cause.status===g.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}}listContentTemplate(){return 0===this.currentTab?r`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?r`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?r`<w3m-account-activity-widget></w3m-account-activity-widget>`:r`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){var e;if(this.tokenBalance&&(null==(e=this.tokenBalance)?void 0:e.length)>=0){const e=u.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:i="00"}=u.formatTokenBalance(e);return r`<wui-balance dollars=${t} pennies=${i}></wui-balance>`}return r`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){const e=He.getTabsByNamespace(a.state.activeChain);if(0===e.length)return null;let t="104px";return t=u.isMobile()&&window.innerWidth<430?(window.innerWidth-48)/e.length+"px":2===e.length?"156px":"104px",r`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      localTabWidth=${t}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){c.setCurrentTab(e)}onProfileButtonClick(){const{allAccounts:e}=c.state;e.length>1?f.push("Profile"):f.push("AccountSettings")}onBuyClick(){f.push("OnRampProviders")}onSwapClick(){var e,t,i,o;const r=a.state.activeChain;(null==(e=this.network)?void 0:e.caipNetworkId)&&!b.SWAP_SUPPORTED_NETWORKS.includes(null==(t=this.network)?void 0:t.caipNetworkId)?f.push("UnsupportedChain",{swapUnsupportedChain:!0}):(p.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:(null==(i=this.network)?void 0:i.caipNetworkId)||"",isSmartAccount:(null==(o=c.state.preferredAccountTypes)?void 0:o[r])===v.ACCOUNT_TYPES.SMART_ACCOUNT}}),f.push("Swap"))}onReceiveClick(){f.push("WalletReceive")}onSendClick(){var e,t;const i=a.state.activeChain;p.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:(null==(e=this.network)?void 0:e.caipNetworkId)||"",isSmartAccount:(null==(t=c.state.preferredAccountTypes)?void 0:t[i])===v.ACCOUNT_TYPES.SMART_ACCOUNT}}),f.push("WalletSend")}};at.styles=ot,rt([W()],at.prototype,"watchTokenBalance",void 0),rt([W()],at.prototype,"address",void 0),rt([W()],at.prototype,"profileImage",void 0),rt([W()],at.prototype,"profileName",void 0),rt([W()],at.prototype,"network",void 0),rt([W()],at.prototype,"currentTab",void 0),rt([W()],at.prototype,"tokenBalance",void 0),rt([W()],at.prototype,"features",void 0),rt([W()],at.prototype,"remoteFeatures",void 0),rt([W()],at.prototype,"networkImage",void 0),at=rt([D("w3m-account-wallet-features-widget")],at);var nt=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let st=class extends o{constructor(){super(),this.unsubscribe=[],this.namespace=a.state.activeChain,this.unsubscribe.push(a.subscribeKey("activeChain",(e=>{this.namespace=e})))}render(){if(!this.namespace)return null;const e=w.getConnectorId(this.namespace),t=w.getAuthConnector();return r`
      ${t&&e===g.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return r`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return r`<w3m-account-default-widget></w3m-account-default-widget>`}};nt([W()],st.prototype,"namespace",void 0),st=nt([D("w3m-account-view")],st);const lt=e`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var ct=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ut=class extends o{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.labels=c.state.addressLabels,this.caipNetwork=a.state.activeCaipNetwork,this.socialProvider=h.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){var e;super.connectedCallback(),C.getBalance(this.accountAddress,null==(e=this.caipNetwork)?void 0:e.caipNetworkId).then((e=>{let t=this.balance;e.balances.length>0&&(t=e.balances.reduce(((e,t)=>e+((null==t?void 0:t.value)||0)),0)),this.balance=t,this.fetchingBalance=!1,this.requestUpdate()})).catch((()=>{this.fetchingBalance=!1,this.requestUpdate()}))}render(){const e=this.getLabel(),t=a.state.activeChain,i=w.getConnectorId(t);return this.shouldShowIcon=i===g.CONNECTOR_ID.AUTH,r`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?r`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===v.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:r`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${L.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${e}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          <slot name="action"></slot>
          ${this.fetchingBalance?r`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:r` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
        </wui-flex>
      </wui-flex>
    `}getLabel(){var e;let t=null==(e=this.labels)?void 0:e.get(this.accountAddress);const i=a.state.activeChain,o=w.getConnectorId(i);return t||o!==g.CONNECTOR_ID.AUTH?t||(t="EOA"):t=`${"eoa"===this.accountType?this.socialProvider??"Email":"Smart"} Account`,t}};ut.styles=[t,i,lt],ct([P()],ut.prototype,"accountAddress",void 0),ct([P()],ut.prototype,"accountType",void 0),ct([P({type:Boolean})],ut.prototype,"selected",void 0),ct([P({type:Function})],ut.prototype,"onSelect",void 0),ut=ct([D("wui-list-account")],ut);const dt=e`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`;var pt=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ht=class extends o{constructor(){super(),this.usubscribe=[],this.address=c.state.address,this.profileImage=c.state.profileImage,this.profileName=c.state.profileName,this.accounts=c.state.allAccounts,this.loading=!1,this.usubscribe.push(c.subscribeKey("address",(e=>{e?this.address=e:d.close()}))),this.usubscribe.push(c.subscribeKey("profileImage",(e=>{this.profileImage=e}))),this.usubscribe.push(c.subscribeKey("profileName",(e=>{this.profileName=e})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-profile-view: No account provided");return r`
      <wui-flex flexDirection="column" gap="l" .padding=${["0","xl","m","xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${U(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${this.profileName?L.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):L.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${()=>f.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `}accountsTemplate(){return r`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs","m","s","s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map((e=>this.accountTemplate(e)))}
      </wui-flex>
    </wui-flex>`}async onSwitchAccount(e){var t;const i=null==(t=a.state.activeCaipNetwork)?void 0:t.chainNamespace;this.loading=!0;if(w.getAuthConnector()){const t=e.type;await x.setPreferredAccountType(t,i)}c.setShouldUpdateToAddress(e.address,i),this.loading=!1}accountTemplate(e){return r`<wui-list-account accountAddress=${e.address} accountType=${e.type}>
      ${e.address===this.address?"":r`<wui-button
            slot="action"
            textVariant="small-600"
            size="md"
            variant="accent"
            @click=${()=>this.onSwitchAccount(e)}
            .loading=${this.loading}
            >Switch</wui-button
          >`}
    </wui-list-account>`}onCopyAddress(){try{this.address&&(u.copyToClopboard(this.address),m.showSuccess("Address copied"))}catch{m.showError("Failed to copy")}}};ht.styles=dt,pt([W()],ht.prototype,"address",void 0),pt([W()],ht.prototype,"profileImage",void 0),pt([W()],ht.prototype,"profileName",void 0),pt([W()],ht.prototype,"accounts",void 0),pt([W()],ht.prototype,"loading",void 0),ht=pt([D("w3m-profile-view")],ht);const wt=e`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var gt=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ft=class extends o{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return r`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};ft.styles=[t,i,wt],gt([P()],ft.prototype,"imageSrc",void 0),gt([P()],ft.prototype,"text",void 0),gt([P()],ft.prototype,"size",void 0),ft=gt([D("wui-banner-img")],ft);const bt=e`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var mt=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let vt=class extends o{constructor(){super(),this.metadata=s.state.metadata,this.allAccounts=c.state.allAccounts||[],this.balances={},this.labels=c.state.addressLabels,this.currentAddress=c.state.address||"",this.caipNetwork=a.state.activeCaipNetwork,c.subscribeKey("allAccounts",(e=>{this.allAccounts=e}))}connectedCallback(){super.connectedCallback(),this.allAccounts.forEach((e=>{var t;C.getBalance(e.address,null==(t=this.caipNetwork)?void 0:t.caipNetworkId).then((t=>{let i=this.balances[e.address]||0;t.balances.length>0&&(i=t.balances.reduce(((e,t)=>e+((null==t?void 0:t.value)||0)),0)),this.balances[e.address]=i,this.requestUpdate()}))}))}getAddressIcon(e){return"smartAccount"===e?"lightbulb":"mail"}render(){var e,t;return r`
      <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
        <wui-banner-img
          imageSrc=${U(null==(e=this.metadata)?void 0:e.icons[0])}
          text=${U(null==(t=this.metadata)?void 0:t.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map(((e,t)=>this.getAddressTemplate(e,t)))}
      </wui-flex>
    `}getAddressTemplate(e,t){var i,o,n,s;const l=null==(i=this.labels)?void 0:i.get(e.address),c=a.state.activeChain,u=w.getConnectorId(c)===g.CONNECTOR_ID.AUTH;return r`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${e.address}></wui-avatar>
          ${u?r`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(e.type)}"
                ?border=${!0}
              ></wui-icon-box>`:r`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${l||L.getTruncateString({string:e.address,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${"number"==typeof this.balances[e.address]?`$${null==(o=this.balances[e.address])?void 0:o.toFixed(2)}`:r`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${(null==(n=e.address)?void 0:n.toLowerCase())===(null==(s=this.currentAddress)?void 0:s.toLowerCase())?"":r`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${t}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${()=>this.onSwitchAddress(e.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `}onSwitchAddress(e){const t=a.state.activeCaipNetwork,i=null==t?void 0:t.chainNamespace,o=`${i}:${null==t?void 0:t.id}:${e}`;c.setCaipAddress(o,i),d.close()}};vt.styles=bt,mt([W()],vt.prototype,"allAccounts",void 0),mt([W()],vt.prototype,"balances",void 0),vt=mt([D("w3m-switch-address-view")],vt);const xt=e`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var yt=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let kt=class extends o{constructor(){super(...arguments),this.inputElementRef=M(),this.checked=void 0}render(){return r`
      <label>
        <input
          ${K(this.inputElementRef)}
          type="checkbox"
          ?checked=${U(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("switchChange",{detail:null==(e=this.inputElementRef.value)?void 0:e.checked,bubbles:!0,composed:!0}))}};kt.styles=[t,i,$,xt],yt([P({type:Boolean})],kt.prototype,"checked",void 0),kt=yt([D("wui-switch")],kt);const Ct=e`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var $t=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let St=class extends o{constructor(){super(...arguments),this.checked=void 0}render(){return r`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${U(this.checked)}></wui-switch>
      </button>
    `}};St.styles=[t,i,Ct],$t([P({type:Boolean})],St.prototype,"checked",void 0),St=$t([D("wui-certified-switch")],St);const Tt=e`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var It=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Rt=class extends o{constructor(){super(...arguments),this.icon="copy"}render(){return r`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Rt.styles=[t,i,Tt],It([P()],Rt.prototype,"icon",void 0),Rt=It([D("wui-input-element")],Rt);const Ot=e`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let At=class extends o{constructor(){super(...arguments),this.inputComponentRef=M()}render(){return r`
      <wui-input-text
        ${K(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=null==e?void 0:e.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};At.styles=[t,Ot],At=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([D("wui-search-bar")],At);const Et=e`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Nt=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let jt=class extends o{constructor(){super(...arguments),this.type="wallet"}render(){return r`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?r` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${z}`:r`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};jt.styles=[t,i,Et],Nt([P()],jt.prototype,"type",void 0),jt=Nt([D("wui-card-select-loader")],jt);const Pt=e`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Dt=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Ut=class extends o{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&L.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&L.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&L.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&L.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&L.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&L.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&L.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&L.getSpacingStyles(this.margin,3)};\n    `,r`<slot></slot>`}};Ut.styles=[t,Pt],Dt([P()],Ut.prototype,"gridTemplateRows",void 0),Dt([P()],Ut.prototype,"gridTemplateColumns",void 0),Dt([P()],Ut.prototype,"justifyItems",void 0),Dt([P()],Ut.prototype,"alignItems",void 0),Dt([P()],Ut.prototype,"justifyContent",void 0),Dt([P()],Ut.prototype,"alignContent",void 0),Dt([P()],Ut.prototype,"columnGap",void 0),Dt([P()],Ut.prototype,"rowGap",void 0),Dt([P()],Ut.prototype,"gap",void 0),Dt([P()],Ut.prototype,"padding",void 0),Dt([P()],Ut.prototype,"margin",void 0),Ut=Dt([D("wui-grid")],Ut);const Lt=e`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var Wt=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let _t=class extends o{constructor(){super(),this.observer=new IntersectionObserver((()=>{})),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1}))}),{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var e,t;const i="certified"===(null==(e=this.wallet)?void 0:e.badge_type);return r`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${U(i?"certified":void 0)}
            >${null==(t=this.wallet)?void 0:t.name}</wui-text
          >
          ${i?r`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var e,t;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():r`
      <wui-wallet-image
        size="md"
        imageSrc=${U(this.imageSrc)}
        name=${null==(e=this.wallet)?void 0:e.name}
        .installed=${null==(t=this.wallet)?void 0:t.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return r`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=n.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await n.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};_t.styles=Lt,Wt([W()],_t.prototype,"visible",void 0),Wt([W()],_t.prototype,"imageSrc",void 0),Wt([W()],_t.prototype,"imageLoading",void 0),Wt([P()],_t.prototype,"wallet",void 0),_t=Wt([D("w3m-all-wallets-list-item")],_t);const Bt=e`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var zt=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const Ft="local-paginator";let Mt=class extends o{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!S.state.wallets.length,this.wallets=S.state.wallets,this.recommended=S.state.recommended,this.featured=S.state.featured,this.filteredWallets=S.state.filteredWallets,this.unsubscribe.push(S.subscribeKey("wallets",(e=>this.wallets=e)),S.subscribeKey("recommended",(e=>this.recommended=e)),S.subscribeKey("featured",(e=>this.featured=e)),S.subscribeKey("filteredWallets",(e=>this.filteredWallets=e)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach((e=>e())),null==(e=this.paginationObserver)||e.disconnect()}render(){return r`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var e;this.loading=!0;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("wui-grid");t&&(await S.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map((()=>r`
        <wui-card-select-loader type="wallet" id=${U(t)}></wui-card-select-loader>
      `))}walletsTemplate(){var e;const t=(null==(e=this.filteredWallets)?void 0:e.length)>0?u.uniqueBy([...this.featured,...this.recommended,...this.filteredWallets],"id"):u.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return T.markWalletsAsInstalled(t).map((e=>r`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `))}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:i,count:o}=S.state,r=window.innerWidth<352?3:4,a=e.length+t.length;let n=Math.ceil(a/r)*r-a+r;return n-=e.length?i.length%r:0,0===o&&i.length>0?null:0===o||[...i,...e,...t].length<o?this.shimmerTemplate(n,Ft):null}createPaginationObserver(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector(`#${Ft}`);t&&(this.paginationObserver=new IntersectionObserver((([e])=>{if((null==e?void 0:e.isIntersecting)&&!this.loading){const{page:e,count:t,wallets:i}=S.state;i.length<t&&S.fetchWalletsByPage({page:e+1})}})),this.paginationObserver.observe(t))}onConnectWallet(e){w.selectWalletConnector(e)}};Mt.styles=Bt,zt([W()],Mt.prototype,"loading",void 0),zt([W()],Mt.prototype,"wallets",void 0),zt([W()],Mt.prototype,"recommended",void 0),zt([W()],Mt.prototype,"featured",void 0),zt([W()],Mt.prototype,"filteredWallets",void 0),Mt=zt([D("w3m-all-wallets-list")],Mt);const Kt=e`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var qt=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Ht=class extends o{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?r`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await S.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=S.state,t=T.markWalletsAsInstalled(e);return e.length?r`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${t.map((e=>r`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
            ></w3m-all-wallets-list-item>
          `))}
      </wui-grid>
    `:r`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){w.selectWalletConnector(e)}};Ht.styles=Kt,qt([W()],Ht.prototype,"loading",void 0),qt([P()],Ht.prototype,"query",void 0),qt([P()],Ht.prototype,"badge",void 0),Ht=qt([D("w3m-all-wallets-search")],Ht);var Vt=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Gt=class extends o{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=u.debounce((e=>{this.search=e}))}render(){const e=this.search.length>=2;return r`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?r`<w3m-all-wallets-search
            query=${this.search}
            badge=${U(this.badge)}
          ></w3m-all-wallets-search>`:r`<w3m-all-wallets-list badge=${U(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onClick(){"certified"!==this.badge?(this.badge="certified",m.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return u.isMobile()?r`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){f.push("ConnectingWalletConnect")}};Vt([W()],Gt.prototype,"search",void 0),Vt([W()],Gt.prototype,"badge",void 0),Gt=Vt([D("w3m-all-wallets-view")],Gt);const Yt=e`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var Xt=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Qt=class extends o{constructor(){super(...arguments),this.text="",this.disabled=!1,this.tabIdx=void 0}render(){return r`
      <button ?disabled=${this.disabled} tabindex=${U(this.tabIdx)}>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};Qt.styles=[t,i,Yt],Xt([P()],Qt.prototype,"text",void 0),Xt([P({type:Boolean})],Qt.prototype,"disabled",void 0),Xt([P()],Qt.prototype,"tabIdx",void 0),Qt=Xt([D("wui-list-button")],Qt);const Jt=e`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Zt=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ei=class extends o{constructor(){super(...arguments),this.unsubscribe=[],this.formRef=M(),this.email="",this.loading=!1,this.error=""}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){var e;null==(e=this.formRef.value)||e.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){return r`
      <form ${K(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${U(this.tabIdx)}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?r`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?r`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}templateError(){return this.error?r`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if(!g.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((e=>e===a.state.activeChain))){const e=a.getFirstCaipNetworkSupportsAuthConnector();if(e)return void f.push("SwitchNetwork",{network:e})}try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=w.getAuthConnector();if(!t)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:i}=await t.provider.connectEmail({email:this.email});p.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===i?(p.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),f.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===i?f.push("EmailVerifyDevice",{email:this.email}):"CONNECT"===i&&(await x.connectExternal(t,a.state.activeChain),f.replace("Account"))}catch(t){const e=u.parseError(t);(null==e?void 0:e.includes("Invalid email"))?this.error="Invalid email. Try again.":m.showError(t)}finally{this.loading=!1}}onFocusEvent(){p.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};ei.styles=Jt,Zt([P()],ei.prototype,"tabIdx",void 0),Zt([W()],ei.prototype,"email",void 0),Zt([W()],ei.prototype,"loading",void 0),Zt([W()],ei.prototype,"error",void 0),ei=Zt([D("w3m-email-login-widget")],ei);const ti=e`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var ii=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let oi=class extends o{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return r`
      <button ?disabled=${this.disabled} tabindex=${U(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};oi.styles=[t,i,ti],ii([P()],oi.prototype,"logo",void 0),ii([P({type:Boolean})],oi.prototype,"disabled",void 0),ii([P()],oi.prototype,"tabIdx",void 0),oi=ii([D("wui-logo-select")],oi);const ri=e`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var ai=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ni=class extends o{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=w.state.connectors,this.remoteFeatures=s.state.remoteFeatures,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.isPwaLoading=!1,this.unsubscribe.push(w.subscribeKey("connectors",(e=>{this.connectors=e,this.authConnector=this.connectors.find((e=>"AUTH"===e.type))})),s.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return r`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){var e;const t="explore"===this.walletGuide;let i=null==(e=this.remoteFeatures)?void 0:e.socials;return!i&&t?(i=b.DEFAULT_SOCIALS,this.renderTopViewContent(i)):i?this.renderTopViewContent(i):null}renderTopViewContent(e){return 2===e.length?r` <wui-flex gap="xs">
        ${e.slice(0,2).map((e=>r`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${U(this.tabIdx)}
              ?disabled=${this.isPwaLoading}
            ></wui-logo-select>`))}
      </wui-flex>`:r` <wui-list-social
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      logo=${U(e[0])}
      align="center"
      name=${`Continue with ${e[0]}`}
      tabIdx=${U(this.tabIdx)}
      ?disabled=${this.isPwaLoading}
    ></wui-list-social>`}bottomViewTemplate(){var e;let t=null==(e=this.remoteFeatures)?void 0:e.socials;const i="explore"===this.walletGuide;return(!this.authConnector||!t||0===t.length)&&i&&(t=b.DEFAULT_SOCIALS),t?t.length<=2?null:t&&t.length>6?r`<wui-flex gap="xs">
        ${t.slice(1,5).map((e=>r`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${U(this.tabIdx)}
              ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading}
            ></wui-logo-select>`))}
        <wui-logo-select
          logo="more"
          tabIdx=${U(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:t?r`<wui-flex gap="xs">
      ${t.slice(1,t.length).map((e=>r`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
            tabIdx=${U(this.tabIdx)}
            ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading}
          ></wui-logo-select>`))}
    </wui-flex>`:null:null}onMoreSocialsClick(){f.push("ConnectSocials")}async onSocialClick(e){if(!g.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((e=>e===a.state.activeChain))){const e=a.getFirstCaipNetworkSupportsAuthConnector();if(e)return void f.push("SwitchNetwork",{network:e})}e&&await H(e)}async handlePwaFrameLoad(){var e;if(u.isPWA()){this.isPwaLoading=!0;try{(null==(e=this.authConnector)?void 0:e.provider)instanceof I&&await this.authConnector.provider.init()}catch(t){R.open({shortMessage:"Error loading embedded wallet in PWA",longMessage:t.message},"error")}finally{this.isPwaLoading=!1}}}};ni.styles=ri,ai([P()],ni.prototype,"walletGuide",void 0),ai([P()],ni.prototype,"tabIdx",void 0),ai([W()],ni.prototype,"connectors",void 0),ai([W()],ni.prototype,"remoteFeatures",void 0),ai([W()],ni.prototype,"authConnector",void 0),ai([W()],ni.prototype,"isPwaLoading",void 0),ni=ai([D("w3m-social-login-widget")],ni);const si=e`
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var li=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ci=class extends o{constructor(){super(...arguments),this.walletGuide="get-started"}render(){return"explore"===this.walletGuide?r`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://walletguide.walletconnect.network"
              title="Find one on WalletGuide"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`:r`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          .padding=${["s","0","s","0"]}
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${U(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`}onGetStarted(){f.push("Create")}};ci.styles=si,li([P()],ci.prototype,"tabIdx",void 0),li([P()],ci.prototype,"walletGuide",void 0),ci=li([D("w3m-wallet-guide")],ci);const ui=e`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var di=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let pi=class extends o{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<4;return r`${this.walletImages.slice(0,4).map((({src:e,walletName:t})=>r`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${U(t)}
            ></wui-wallet-image>
          `))}
      ${e?[...Array(4-this.walletImages.length)].map((()=>r` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};pi.styles=[t,ui],di([P({type:Array})],pi.prototype,"walletImages",void 0),pi=di([D("wui-all-wallets-image")],pi);const hi=e`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var wi=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let gi=class extends o{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return r`
      <button ?disabled=${this.disabled} tabindex=${U(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?r` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?r` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?r`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:r`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?r`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?r`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?r`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};gi.styles=[t,i,hi],wi([P({type:Array})],gi.prototype,"walletImages",void 0),wi([P()],gi.prototype,"imageSrc",void 0),wi([P()],gi.prototype,"name",void 0),wi([P()],gi.prototype,"tagLabel",void 0),wi([P()],gi.prototype,"tagVariant",void 0),wi([P()],gi.prototype,"icon",void 0),wi([P()],gi.prototype,"walletIcon",void 0),wi([P()],gi.prototype,"tabIdx",void 0),wi([P({type:Boolean})],gi.prototype,"installed",void 0),wi([P({type:Boolean})],gi.prototype,"disabled",void 0),wi([P({type:Boolean})],gi.prototype,"showAllWallets",void 0),wi([P({type:Boolean})],gi.prototype,"loading",void 0),wi([P({type:String})],gi.prototype,"loadingSpinnerColor",void 0),gi=wi([D("wui-list-wallet")],gi);var fi=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let bi=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=w.state.connectors,this.count=S.state.count,this.filteredCount=S.state.filteredWallets.length,this.isFetchingRecommendedWallets=S.state.isFetchingRecommendedWallets,this.unsubscribe.push(w.subscribeKey("connectors",(e=>this.connectors=e)),S.subscribeKey("count",(e=>this.count=e)),S.subscribeKey("filteredWallets",(e=>this.filteredCount=e.length)),S.subscribeKey("isFetchingRecommendedWallets",(e=>this.isFetchingRecommendedWallets=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.find((e=>"walletConnect"===e.id)),{allWallets:t}=s.state;if(!e||"HIDE"===t)return null;if("ONLY_MOBILE"===t&&!u.isMobile())return null;const i=S.state.featured.length,o=this.count+i,a=o<10?o:10*Math.floor(o/10),n=this.filteredCount>0?this.filteredCount:a;let l=`${n}`;return this.filteredCount>0?l=`${this.filteredCount}`:n<o&&(l=`${n}+`),r`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${l}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${U(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){p.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),f.push("AllWallets")}};fi([P()],bi.prototype,"tabIdx",void 0),fi([W()],bi.prototype,"connectors",void 0),fi([W()],bi.prototype,"count",void 0),fi([W()],bi.prototype,"filteredCount",void 0),fi([W()],bi.prototype,"isFetchingRecommendedWallets",void 0),bi=fi([D("w3m-all-wallets-widget")],bi);var mi=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let vi=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=w.state.connectors,this.unsubscribe.push(w.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"ANNOUNCED"===e.type));return(null==e?void 0:e.length)?r`
      <wui-flex flexDirection="column" gap="xs">
        ${e.filter(O.showConnector).map((e=>r`
              <wui-list-wallet
                imageSrc=${U(n.getConnectorImage(e))}
                name=${e.name??"Unknown"}
                @click=${()=>this.onConnector(e)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${e.id}`}
                .installed=${!0}
                tabIdx=${U(this.tabIdx)}
              >
              </wui-list-wallet>
            `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){"walletConnect"===e.id?u.isMobile()?f.push("AllWallets"):f.push("ConnectingWalletConnect"):f.push("ConnectingExternal",{connector:e})}};mi([P()],vi.prototype,"tabIdx",void 0),mi([W()],vi.prototype,"connectors",void 0),vi=mi([D("w3m-connect-announced-widget")],vi);var xi=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let yi=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=w.state.connectors,this.loading=!1,this.unsubscribe.push(w.subscribeKey("connectors",(e=>this.connectors=e))),u.isTelegram()&&u.isIos()&&(this.loading=!x.state.wcUri,this.unsubscribe.push(x.subscribeKey("wcUri",(e=>this.loading=!e))))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{customWallets:e}=s.state;if(!(null==e?void 0:e.length))return this.style.cssText="display: none",null;const t=this.filterOutDuplicateWallets(e);return r`<wui-flex flexDirection="column" gap="xs">
      ${t.map((e=>r`
          <wui-list-wallet
            imageSrc=${U(n.getWalletImage(e))}
            name=${e.name??"Unknown"}
            @click=${()=>this.onConnectWallet(e)}
            data-testid=${`wallet-selector-${e.id}`}
            tabIdx=${U(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `))}
    </wui-flex>`}filterOutDuplicateWallets(e){const t=h.getRecentWallets(),i=this.connectors.map((e=>{var t;return null==(t=e.info)?void 0:t.rdns})).filter(Boolean),o=t.map((e=>e.rdns)).filter(Boolean),r=i.concat(o);if(r.includes("io.metamask.mobile")&&u.isMobile()){const e=r.indexOf("io.metamask.mobile");r[e]="io.metamask"}return e.filter((e=>!r.includes(String(null==e?void 0:e.rdns))))}onConnectWallet(e){this.loading||f.push("ConnectingWalletConnect",{wallet:e})}};xi([P()],yi.prototype,"tabIdx",void 0),xi([W()],yi.prototype,"connectors",void 0),xi([W()],yi.prototype,"loading",void 0),yi=xi([D("w3m-connect-custom-widget")],yi);var ki=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Ci=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=w.state.connectors,this.unsubscribe.push(w.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"EXTERNAL"===e.type)).filter(O.showConnector).filter((e=>e.id!==g.CONNECTOR_ID.COINBASE_SDK));return(null==e?void 0:e.length)?r`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>r`
            <wui-list-wallet
              imageSrc=${U(n.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${U(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){f.push("ConnectingExternal",{connector:e})}};ki([P()],Ci.prototype,"tabIdx",void 0),ki([W()],Ci.prototype,"connectors",void 0),Ci=ki([D("w3m-connect-external-widget")],Ci);var $i=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Si=class extends o{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?r`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map((e=>r`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${e.id}`}
              imageSrc=${U(n.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${U(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){w.selectWalletConnector(e)}};$i([P()],Si.prototype,"tabIdx",void 0),$i([P()],Si.prototype,"wallets",void 0),Si=$i([D("w3m-connect-featured-widget")],Si);var Ti=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Ii=class extends o{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){const e=this.connectors.filter(O.showConnector);return 0===e.length?(this.style.cssText="display: none",null):r`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>r`
            <wui-list-wallet
              imageSrc=${U(n.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${U(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `}onConnector(e){w.setActiveConnector(e),f.push("ConnectingExternal",{connector:e})}};Ti([P()],Ii.prototype,"tabIdx",void 0),Ti([P()],Ii.prototype,"connectors",void 0),Ii=Ti([D("w3m-connect-injected-widget")],Ii);var Ri=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Oi=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=w.state.connectors,this.unsubscribe.push(w.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"MULTI_CHAIN"===e.type&&"WalletConnect"!==e.name));return(null==e?void 0:e.length)?r`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>r`
            <wui-list-wallet
              imageSrc=${U(n.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${U(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){w.setActiveConnector(e),f.push("ConnectingMultiChain")}};Ri([P()],Oi.prototype,"tabIdx",void 0),Ri([W()],Oi.prototype,"connectors",void 0),Oi=Ri([D("w3m-connect-multi-chain-widget")],Oi);var Ai=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Ei=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=w.state.connectors,this.loading=!1,this.unsubscribe.push(w.subscribeKey("connectors",(e=>this.connectors=e))),u.isTelegram()&&u.isIos()&&(this.loading=!x.state.wcUri,this.unsubscribe.push(x.subscribeKey("wcUri",(e=>this.loading=!e))))}render(){const e=h.getRecentWallets().filter((e=>!T.isExcluded(e))).filter((e=>!this.hasWalletConnector(e))).filter((e=>this.isWalletCompatibleWithCurrentChain(e)));return e.length?r`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>r`
            <wui-list-wallet
              imageSrc=${U(n.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${U(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){this.loading||w.selectWalletConnector(e)}hasWalletConnector(e){return this.connectors.some((t=>t.id===e.id||t.name===e.name))}isWalletCompatibleWithCurrentChain(e){const t=a.state.activeChain;return!t||!e.chains||e.chains.some((e=>{const i=e.split(":")[0];return t===i}))}};Ai([P()],Ei.prototype,"tabIdx",void 0),Ai([W()],Ei.prototype,"connectors",void 0),Ai([W()],Ei.prototype,"loading",void 0),Ei=Ai([D("w3m-connect-recent-widget")],Ei);var Ni=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ji=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,u.isTelegram()&&u.isIos()&&(this.loading=!x.state.wcUri,this.unsubscribe.push(x.subscribeKey("wcUri",(e=>this.loading=!e))))}render(){const{connectors:e}=w.state,{customWallets:t,featuredWalletIds:i}=s.state,o=h.getRecentWallets(),a=e.find((e=>"walletConnect"===e.id)),l=e.filter((e=>"INJECTED"===e.type||"ANNOUNCED"===e.type||"MULTI_CHAIN"===e.type)).filter((e=>"Browser Wallet"!==e.name));if(!a)return null;if(i||t||!this.wallets.length)return this.style.cssText="display: none",null;const c=l.length+o.length,u=Math.max(0,2-c),d=T.filterOutDuplicateWallets(this.wallets).slice(0,u);return d.length?r`
      <wui-flex flexDirection="column" gap="xs">
        ${d.map((e=>r`
            <wui-list-wallet
              imageSrc=${U(n.getWalletImage(e))}
              name=${(null==e?void 0:e.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${U(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){if(this.loading)return;const t=w.getConnector(e.id,e.rdns);t?f.push("ConnectingExternal",{connector:t}):f.push("ConnectingWalletConnect",{wallet:e})}};Ni([P()],ji.prototype,"tabIdx",void 0),Ni([P()],ji.prototype,"wallets",void 0),Ni([W()],ji.prototype,"loading",void 0),ji=Ni([D("w3m-connect-recommended-widget")],ji);var Pi=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Di=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=w.state.connectors,this.connectorImages=l.state.connectorImages,this.unsubscribe.push(w.subscribeKey("connectors",(e=>this.connectors=e)),l.subscribeKey("connectorImages",(e=>this.connectorImages=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(u.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find((e=>"walletConnect"===e.id));if(!e)return this.style.cssText="display: none",null;const t=e.imageUrl||this.connectorImages[(null==e?void 0:e.imageId)??""];return r`
      <wui-list-wallet
        imageSrc=${U(t)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${U(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(e){w.setActiveConnector(e),f.push("ConnectingWalletConnect")}};Pi([P()],Di.prototype,"tabIdx",void 0),Pi([W()],Di.prototype,"connectors",void 0),Pi([W()],Di.prototype,"connectorImages",void 0),Di=Pi([D("w3m-connect-walletconnect-widget")],Di);const Ui=e`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Li=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Wi=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=w.state.connectors,this.recommended=S.state.recommended,this.featured=S.state.featured,this.unsubscribe.push(w.subscribeKey("connectors",(e=>this.connectors=e)),S.subscribeKey("recommended",(e=>this.recommended=e)),S.subscribeKey("featured",(e=>this.featured=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return r`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:e,recent:t,announced:i,injected:o,multiChain:a,recommended:n,featured:s,external:l}=O.getConnectorsByType(this.connectors,this.recommended,this.featured);return O.getConnectorTypeOrder({custom:e,recent:t,announced:i,injected:o,multiChain:a,recommended:n,featured:s,external:l}).map((e=>{switch(e){case"injected":return r`
            ${a.length?r`<w3m-connect-multi-chain-widget
                  tabIdx=${U(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${i.length?r`<w3m-connect-announced-widget
                  tabIdx=${U(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${o.length?r`<w3m-connect-injected-widget
                  .connectors=${o}
                  tabIdx=${U(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return r`<w3m-connect-walletconnect-widget
            tabIdx=${U(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return r`<w3m-connect-recent-widget
            tabIdx=${U(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return r`<w3m-connect-featured-widget
            .wallets=${s}
            tabIdx=${U(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return r`<w3m-connect-custom-widget
            tabIdx=${U(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return r`<w3m-connect-external-widget
            tabIdx=${U(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return r`<w3m-connect-recommended-widget
            .wallets=${n}
            tabIdx=${U(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return null}}))}};Wi.styles=Ui,Li([P()],Wi.prototype,"tabIdx",void 0),Li([W()],Wi.prototype,"connectors",void 0),Li([W()],Wi.prototype,"recommended",void 0),Li([W()],Wi.prototype,"featured",void 0),Wi=Li([D("w3m-connector-list")],Wi);var _i=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Bi=class extends o{constructor(){super(...arguments),this.tabIdx=void 0}render(){return r`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${U(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${U(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};_i([P()],Bi.prototype,"tabIdx",void 0),Bi=_i([D("w3m-wallet-login-list")],Bi);const zi=e`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Fi=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Mi=class extends o{constructor(){var e,t;super(),this.unsubscribe=[],this.connectors=w.state.connectors,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.features=s.state.features,this.remoteFeatures=s.state.remoteFeatures,this.enableWallets=s.state.enableWallets,this.noAdapters=a.state.noAdapters,this.walletGuide="get-started",this.checked=q.state.isLegalCheckboxChecked,this.isEmailEnabled=(null==(e=this.remoteFeatures)?void 0:e.email)&&!a.state.noAdapters,this.isSocialEnabled=(null==(t=this.remoteFeatures)?void 0:t.socials)&&this.remoteFeatures.socials.length>0&&!a.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(w.subscribeKey("connectors",(e=>{this.connectors=e,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})),s.subscribeKey("features",(e=>{this.features=e})),s.subscribeKey("remoteFeatures",(e=>{this.remoteFeatures=e,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)})),s.subscribeKey("enableWallets",(e=>this.enableWallets=e)),a.subscribeKey("noAdapters",(e=>this.setEmailAndSocialEnableCheck(e,this.remoteFeatures))),q.subscribeKey("isLegalCheckboxChecked",(e=>this.checked=e)))}disconnectedCallback(){var e,t;this.unsubscribe.forEach((e=>e())),null==(e=this.resizeObserver)||e.disconnect();const i=null==(t=this.shadowRoot)?void 0:t.querySelector(".connect");null==i||i.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){var e,t;const i=null==(e=this.shadowRoot)?void 0:e.querySelector(".connect");i&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),null==i||i.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver((()=>{this.handleConnectListScroll()})),null==(t=this.resizeObserver)||t.observe(i),this.handleConnectListScroll())}render(){var e;const{termsConditionsUrl:t,privacyPolicyUrl:i}=s.state,o=null==(e=s.state.features)?void 0:e.legalCheckbox,a=Boolean(t||i)&&Boolean(o)&&"get-started"===this.walletGuide&&!this.checked,n={connect:!0,disabled:a},l=s.state.enableWalletGuide,c=this.enableWallets,u=this.isSocialEnabled||this.authConnector,d=a?-1:void 0;return r`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          class=${_(n)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="s"
            .padding=${u&&c&&l&&"get-started"===this.walletGuide?["3xs","s","0","s"]:["3xs","s","s","s"]}
          >
            ${this.renderConnectMethod(d)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(a)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `}setEmailAndSocialEnableCheck(e,t){this.isEmailEnabled=(null==t?void 0:t.email)&&!e,this.isSocialEnabled=(null==t?void 0:t.socials)&&t.socials.length>0&&!e,this.remoteFeatures=t,this.noAdapters=e}checkIfAuthEnabled(e){const t=e.filter((e=>e.type===A.CONNECTOR_TYPE_AUTH)).map((e=>e.chain));return g.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((e=>t.includes(e)))}renderConnectMethod(e){const t=T.getConnectOrderMethod(this.features,this.connectors);return r`${t.map(((t,i)=>{switch(t){case"email":return r`${this.emailTemplate(e)} ${this.separatorTemplate(i,"email")}`;case"social":return r`${this.socialListTemplate(e)}
          ${this.separatorTemplate(i,"social")}`;case"wallet":return r`${this.walletListTemplate(e)}
          ${this.separatorTemplate(i,"wallet")}`;default:return null}}))}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){const t=T.getConnectOrderMethod(this.features,this.connectors)[e+1];if(!t)return;return this.checkMethodEnabled(t)?t:this.checkIsThereNextMethod(e+1)}separatorTemplate(e,t){const i=this.checkIsThereNextMethod(e),o="explore"===this.walletGuide;switch(t){case"wallet":return this.enableWallets&&i&&!o?r`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const e="social"===i;return this.isAuthEnabled&&this.isEmailEnabled&&!e&&i?r`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const e="email"===i;return this.isAuthEnabled&&this.isSocialEnabled&&!e&&i?r`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(e){return this.isEmailEnabled&&this.isAuthEnabled?r`<w3m-email-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${U(e)}
    ></w3m-email-login-widget>`:null}socialListTemplate(e){return this.isSocialEnabled&&this.isAuthEnabled?r`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${U(e)}
    ></w3m-social-login-widget>`:null}walletListTemplate(e){var t,i;const o=this.enableWallets,a=!1===(null==(t=this.features)?void 0:t.emailShowWallets),n=null==(i=this.features)?void 0:i.collapseWallets,s=a||n;if(!o)return null;if(u.isTelegram()&&(u.isSafari()||u.isIos())&&x.connectWalletConnect().catch((e=>({}))),"explore"===this.walletGuide)return null;return this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&s?r`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${U(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:r`<w3m-wallet-login-list tabIdx=${U(e)}></w3m-wallet-login-list>`}guideTemplate(e=!1){if(!s.state.enableWalletGuide)return null;const t={guide:!0,disabled:e},i=e?-1:void 0;return this.authConnector||this.isSocialEnabled?r`
      ${"explore"!==this.walletGuide||a.state.noAdapters?null:r`<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>`}
      <w3m-wallet-guide
        class=${_(t)}
        tabIdx=${U(i)}
        walletGuide=${this.walletGuide}
      ></w3m-wallet-guide>
    `:null}legalCheckboxTemplate(){return"explore"===this.walletGuide?null:r`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector(".connect");if(!t)return;t.scrollHeight>470?(t.style.setProperty("--connect-mask-image","linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,\n          black 40px,\n          black calc(100% - 40px),\n          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%\n        )"),t.style.setProperty("--connect-scroll--top-opacity",F.interpolate([0,50],[0,1],t.scrollTop).toString()),t.style.setProperty("--connect-scroll--bottom-opacity",F.interpolate([0,50],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString())):(t.style.setProperty("--connect-mask-image","none"),t.style.setProperty("--connect-scroll--top-opacity","0"),t.style.setProperty("--connect-scroll--bottom-opacity","0"))}onContinueWalletClick(){f.push("ConnectWallets")}};Mi.styles=zi,Fi([W()],Mi.prototype,"connectors",void 0),Fi([W()],Mi.prototype,"authConnector",void 0),Fi([W()],Mi.prototype,"features",void 0),Fi([W()],Mi.prototype,"remoteFeatures",void 0),Fi([W()],Mi.prototype,"enableWallets",void 0),Fi([W()],Mi.prototype,"noAdapters",void 0),Fi([P()],Mi.prototype,"walletGuide",void 0),Fi([W()],Mi.prototype,"checked",void 0),Fi([W()],Mi.prototype,"isEmailEnabled",void 0),Fi([W()],Mi.prototype,"isSocialEnabled",void 0),Fi([W()],Mi.prototype,"isAuthEnabled",void 0),Mi=Fi([D("w3m-connect-view")],Mi);const Ki=e`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var qi=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Hi=class extends o{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return r`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Hi.styles=[t,i,Ki],qi([P({type:Boolean})],Hi.prototype,"disabled",void 0),qi([P()],Hi.prototype,"label",void 0),qi([P()],Hi.prototype,"buttonLabel",void 0),Hi=qi([D("wui-cta-button")],Hi);const Vi=e`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var Gi=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Yi=class extends o{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:i,chrome_store:o,homepage:a}=this.wallet,n=u.isMobile(),s=u.isIos(),l=u.isAndroid(),c=[t,i,a,o].filter(Boolean).length>1,d=L.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!n?r`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${()=>f.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&a?r`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?r`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&l?r`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(null==(e=this.wallet)?void 0:e.app_store)&&u.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(null==(e=this.wallet)?void 0:e.play_store)&&u.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(null==(e=this.wallet)?void 0:e.homepage)&&u.openHref(this.wallet.homepage,"_blank")}};Yi.styles=[Vi],Gi([P({type:Object})],Yi.prototype,"wallet",void 0),Yi=Gi([D("w3m-mobile-download-links")],Yi);const Xi=e`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Qi=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};class Ji extends o{constructor(){var e,t,i,o,r;super(),this.wallet=null==(e=f.state.data)?void 0:e.wallet,this.connector=null==(t=f.state.data)?void 0:t.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=n.getWalletImage(this.wallet)??n.getConnectorImage(this.connector),this.name=(null==(i=this.wallet)?void 0:i.name)??(null==(o=this.connector)?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=x.state.wcUri,this.error=x.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(x.subscribeKey("wcUri",(e=>{var t;this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,null==(t=this.onConnect)||t.call(this))})),x.subscribeKey("wcError",(e=>this.error=e))),(u.isTelegram()||u.isSafari())&&u.isIos()&&x.state.wcUri&&(null==(r=this.onConnect)||r.call(this))}firstUpdated(){var e;null==(e=this.onAutoConnect)||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),x.setWcError(!1),clearTimeout(this.timeout)}render(){var e;null==(e=this.onRender)||e.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i=`Continue in ${this.name}`;return this.error&&(i="Connection declined"),r`
      <wui-flex
        data-error=${U(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${U(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?r`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?r`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("wui-button");null==t||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,t;x.setWcError(!1),this.onRetry?(this.isRetrying=!0,null==(e=this.onRetry)||e.call(this)):null==(t=this.onConnect)||t.call(this)}loaderTemplate(){const e=E.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return r`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(u.copyToClopboard(this.uri),m.showSuccess("Link copied"))}catch{m.showError("Failed to copy")}}}Ji.styles=Xi,Qi([W()],Ji.prototype,"isRetrying",void 0),Qi([W()],Ji.prototype,"uri",void 0),Qi([W()],Ji.prototype,"error",void 0),Qi([W()],Ji.prototype,"ready",void 0),Qi([W()],Ji.prototype,"showRetry",void 0),Qi([W()],Ji.prototype,"secondaryBtnLabel",void 0),Qi([W()],Ji.prototype,"secondaryLabel",void 0),Qi([W()],Ji.prototype,"isLoading",void 0),Qi([P({type:Boolean})],Ji.prototype,"isMobile",void 0),Qi([P()],Ji.prototype,"onRetry",void 0);let Zi=class extends Ji{constructor(){if(super(),this.externalViewUnsubscribe=[],!this.connector)throw new Error("w3m-connecting-view: No connector provided");p.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(a.subscribeKey("activeCaipAddress",(e=>{e&&d.close()})))}disconnectedCallback(){this.externalViewUnsubscribe.forEach((e=>e()))}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.id===g.CONNECTOR_ID.COINBASE_SDK&&this.error||(await x.connectExternal(this.connector,this.connector.chain),p.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}})))}catch(e){p.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(null==e?void 0:e.message)??"Unknown"}}),this.error=!0}}};Zi=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([D("w3m-connecting-external-view")],Zi);const eo=e`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var to=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let io=class extends o{constructor(){super(),this.unsubscribe=[],this.activeConnector=w.state.activeConnector,this.unsubscribe.push(w.subscribeKey("activeConnector",(e=>this.activeConnector=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;return r`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${U(n.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${null==(e=this.activeConnector)?void 0:e.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){var e,t;return null==(t=null==(e=this.activeConnector)?void 0:e.connectors)?void 0:t.map((e=>e.name?r`
            <wui-list-wallet
              imageSrc=${U(n.getChainImage(e.chain))}
              name=${g.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
              data-testid="wui-list-chain-${e.chain}"
            ></wui-list-wallet>
          `:null))}onConnector(e){var t,i;const o=null==(i=null==(t=this.activeConnector)?void 0:t.connectors)?void 0:i.find((t=>t.chain===e.chain));o?"walletConnect"===o.id?u.isMobile()?f.push("AllWallets"):f.push("ConnectingWalletConnect"):f.push("ConnectingExternal",{connector:o}):m.showError("Failed to find connector")}};io.styles=eo,to([W()],io.prototype,"activeConnector",void 0),io=to([D("w3m-connecting-multi-chain-view")],io);var oo=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ro=class extends o{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.generateTabs();return r`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map((e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=e.map((({platform:e})=>e)),e}onTabChange(e){var t;const i=this.platformTabs[e];i&&(null==(t=this.onSelectPlatfrom)||t.call(this,i))}};oo([P({type:Array})],ro.prototype,"platforms",void 0),oo([P()],ro.prototype,"onSelectPlatfrom",void 0),ro=oo([D("w3m-connecting-header")],ro);let ao=class extends Ji{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),p.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var e;try{this.error=!1;const{connectors:t}=w.state,i=t.find((e=>{var t,i,o;return"ANNOUNCED"===e.type&&(null==(t=e.info)?void 0:t.rdns)===(null==(i=this.wallet)?void 0:i.rdns)||"INJECTED"===e.type||e.name===(null==(o=this.wallet)?void 0:o.name)}));if(!i)throw new Error("w3m-connecting-wc-browser: No connector found");await x.connectExternal(i,i.chain),d.close(),p.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:(null==(e=this.wallet)?void 0:e.name)||"Unknown"}})}catch(t){p.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(null==t?void 0:t.message)??"Unknown"}}),this.error=!0}}};ao=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([D("w3m-connecting-wc-browser")],ao);let no=class extends Ji{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),p.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,null==(e=this.onConnect)||e.call(this))}onConnectProxy(){var e;if((null==(e=this.wallet)?void 0:e.desktop_link)&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:i,href:o}=u.formatNativeUrl(e,this.uri);x.setWcLinking({name:t,href:o}),x.setRecentWallet(this.wallet),u.openHref(i,"_blank")}catch{this.error=!0}}};no=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([D("w3m-connecting-wc-desktop")],no);var so=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let lo=class extends Ji{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=s.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{var e;if((null==(e=this.wallet)?void 0:e.mobile_link)&&this.uri)try{this.error=!1;const{mobile_link:e,link_mode:t,name:i}=this.wallet,{redirect:o,redirectUniversalLink:r,href:a}=u.formatNativeUrl(e,this.uri,t);this.redirectDeeplink=o,this.redirectUniversalLink=r,this.target=u.isIframe()?"_top":"_self",x.setWcLinking({name:i,href:a}),x.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?u.openHref(this.redirectUniversalLink,this.target):u.openHref(this.redirectDeeplink,this.target)}catch(t){p.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:t instanceof Error?t.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=b.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(x.subscribeKey("wcUri",(()=>{this.onHandleURI()}))),p.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var e;this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,null==(e=this.onConnect)||e.call(this))}onTryAgain(){var e;x.setWcError(!1),null==(e=this.onConnect)||e.call(this)}};so([W()],lo.prototype,"redirectDeeplink",void 0),so([W()],lo.prototype,"redirectUniversalLink",void 0),so([W()],lo.prototype,"target",void 0),so([W()],lo.prototype,"preferUniversalLinks",void 0),so([W()],lo.prototype,"isLoading",void 0),lo=so([D("w3m-connecting-wc-mobile")],lo);const co=e`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let uo=class extends Ji{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),p.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:(null==(e=this.wallet)?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.unsubscribe)||e.forEach((e=>e())),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),r`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return x.setWcLinking(void 0),x.setRecentWallet(this.wallet),r` <wui-qr-code
      size=${e}
      theme=${E.state.themeMode}
      uri=${this.uri}
      imageSrc=${U(n.getWalletImage(this.wallet))}
      color=${U(E.state.themeVariables["--w3m-qr-color"])}
      alt=${U(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return r`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};uo.styles=co,uo=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([D("w3m-connecting-wc-qrcode")],uo);let po=class extends o{constructor(){var e;if(super(),this.wallet=null==(e=f.state.data)?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");p.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return r`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${U(n.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};po=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([D("w3m-connecting-wc-unsupported")],po);var ho=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let wo=class extends Ji{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=b.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(x.subscribeKey("wcUri",(()=>{this.updateLoadingState()}))),p.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var e;if((null==(e=this.wallet)?void 0:e.webapp_link)&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:i,href:o}=u.formatUniversalUrl(e,this.uri);x.setWcLinking({name:t,href:o}),x.setRecentWallet(this.wallet),u.openHref(i,"_blank")}catch{this.error=!0}}};ho([W()],wo.prototype,"isLoading",void 0),wo=ho([D("w3m-connecting-wc-web")],wo);var go=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let fo=class extends o{constructor(){var e;super(),this.wallet=null==(e=f.state.data)?void 0:e.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(s.state.siwx),this.remoteFeatures=s.state.remoteFeatures,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(s.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return r`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var e;return(null==(e=this.remoteFeatures)?void 0:e.reownBranding)?r`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(e=!1){if("browser"!==this.platform&&(!s.state.manualWCControl||e))try{const{wcPairingExpiry:t,status:i}=x.state;(e||s.state.enableEmbedded||u.isPairingExpired(t)||"connecting"===i)&&(await x.connectWalletConnect(),this.isSiwxEnabled||d.close())}catch(t){p.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(null==t?void 0:t.message)??"Unknown"}}),x.setWcError(!0),m.showError(t.message??"Connection error"),x.resetWcConnection(),f.goBack()}}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:i,injected:o,rdns:r}=this.wallet,n=null==o?void 0:o.map((({injected_id:e})=>e)).filter(Boolean),l=[...r?[r]:n??[]],c=!s.state.isUniversalProvider&&l.length,d=e,p=i,h=x.checkInstalled(l),w=c&&h,g=t&&!u.isMobile();w&&!a.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(u.isMobile()?"mobile":"qrcode"),p&&this.platforms.push("web"),g&&this.platforms.push("desktop"),w||!c||a.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return r`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return r`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return r`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return r`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return r`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return r`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?r`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var t;const i=null==(t=this.shadowRoot)?void 0:t.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};go([W()],fo.prototype,"platform",void 0),go([W()],fo.prototype,"platforms",void 0),go([W()],fo.prototype,"isSiwxEnabled",void 0),go([W()],fo.prototype,"remoteFeatures",void 0),fo=go([D("w3m-connecting-wc-view")],fo);var bo=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let mo=class extends o{constructor(){super(...arguments),this.isMobile=u.isMobile()}render(){if(this.isMobile){const{featured:e,recommended:t}=S.state,{customWallets:i}=s.state,o=h.getRecentWallets(),a=e.length||t.length||(null==i?void 0:i.length)||o.length;return r`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${a?r`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return r`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};bo([W()],mo.prototype,"isMobile",void 0),mo=bo([D("w3m-connecting-wc-basic-view")],mo);const vo=e`
  .continue-button-container {
    width: 100%;
  }
`;var xo=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let yo=class extends o{constructor(){super(...arguments),this.loading=!1}render(){return r`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{u.openHref(V.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return r` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return r`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){var e;const t=a.state.activeChain;f.push("RegisterAccountName"),p.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:(null==(e=c.state.preferredAccountTypes)?void 0:e[t])===v.ACCOUNT_TYPES.SMART_ACCOUNT}})}};yo.styles=vo,xo([W()],yo.prototype,"loading",void 0),yo=xo([D("w3m-choose-account-name-view")],yo);let ko=class extends o{constructor(){var e;super(...arguments),this.wallet=null==(e=f.state.data)?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return r`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(null==(e=this.wallet)?void 0:e.chrome_store)?r`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(null==(e=this.wallet)?void 0:e.app_store)?r`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(null==(e=this.wallet)?void 0:e.play_store)?r`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(null==(e=this.wallet)?void 0:e.homepage)?r`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(null==(e=this.wallet)?void 0:e.chrome_store)&&u.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(null==(e=this.wallet)?void 0:e.app_store)&&u.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(null==(e=this.wallet)?void 0:e.play_store)&&u.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(null==(e=this.wallet)?void 0:e.homepage)&&u.openHref(this.wallet.homepage,"_blank")}};ko=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([D("w3m-downloads-view")],ko);let Co=class extends o{render(){return r`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{u.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=S.state,{customWallets:i}=s.state;return[...t,...i??[],...e].slice(0,4).map((e=>r`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${U(n.getWalletImage(e))}
          @click=${()=>{u.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `))}};Co=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([D("w3m-get-wallet-view")],Co);var $o=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let So=class extends o{constructor(){super(...arguments),this.data=[]}render(){return r`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((e=>r`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map((e=>r`<wui-visual name=${e}></wui-visual>`))}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `))}
      </wui-flex>
    `}};$o([P({type:Array})],So.prototype,"data",void 0),So=$o([D("w3m-help-widget")],So);const To=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Io=class extends o{render(){return r`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${To}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){p.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),f.push("GetWallet")}};Io=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([D("w3m-what-is-a-wallet-view")],Io);const Ro=e`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var Oo=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Ao=class extends o{constructor(){super(),this.unsubscribe=[],this.checked=q.state.isLegalCheckboxChecked,this.unsubscribe.push(q.subscribeKey("isLegalCheckboxChecked",(e=>{this.checked=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const{termsConditionsUrl:t,privacyPolicyUrl:i}=s.state,o=null==(e=s.state.features)?void 0:e.legalCheckbox,a=Boolean(t||i)&&Boolean(o),n=a&&!this.checked,l=n?-1:void 0;return r`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${a?["0","s","s","s"]:"s"}
        gap="xs"
        class=${U(n?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${U(l)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};Ao.styles=Ro,Oo([W()],Ao.prototype,"checked",void 0),Ao=Oo([D("w3m-connect-wallets-view")],Ao);const Eo=e`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let No=class extends o{render(){return r`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};No.styles=[t,Eo],No=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([D("wui-loading-hexagon")],No);const jo=e`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Po=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Do=class extends o{constructor(){var e;super(),this.network=null==(e=f.state.data)?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),t=this.getSubLabel();return r`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${U(n.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:r`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=a.state.activeChain,t=w.getConnectorId(e);return w.getAuthConnector()&&t===g.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){var e;const t=a.state.activeChain,i=w.getConnectorId(t);return w.getAuthConnector()&&i===g.CONNECTOR_ID.AUTH?`Switching to ${(null==(e=this.network)?void 0:e.name)??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("wui-button");null==t||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onSwitchNetwork(){var e;try{this.error=!1,a.state.activeChain!==(null==(e=this.network)?void 0:e.chainNamespace)&&a.setIsSwitchingNamespace(!0),this.network&&a.switchActiveNetwork(this.network)}catch(t){this.error=!0}}};Do.styles=jo,Po([W()],Do.prototype,"showRetry",void 0),Po([W()],Do.prototype,"error",void 0),Do=Po([D("w3m-network-switch-view")],Do);const Uo=e`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Lo=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Wo=class extends o{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return r`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled}>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?r`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?r`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:r`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};Wo.styles=[t,i,Uo],Lo([P()],Wo.prototype,"imageSrc",void 0),Lo([P()],Wo.prototype,"name",void 0),Lo([P({type:Boolean})],Wo.prototype,"disabled",void 0),Lo([P({type:Boolean})],Wo.prototype,"selected",void 0),Lo([P({type:Boolean})],Wo.prototype,"transparent",void 0),Wo=Lo([D("wui-list-network")],Wo);const _o=e`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var Bo=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let zo=class extends o{constructor(){super(),this.unsubscribe=[],this.network=a.state.activeCaipNetwork,this.requestedCaipNetworks=a.getCaipNetworks(),this.search="",this.onDebouncedSearch=u.debounce((e=>{this.search=e}),100),this.unsubscribe.push(l.subscribeNetworkImages((()=>this.requestUpdate())),a.subscribeKey("activeCaipNetwork",(e=>this.network=e)),a.subscribe((()=>{this.requestedCaipNetworks=a.getAllRequestedCaipNetworks()})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return r`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return r`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onNetworkHelp(){p.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),f.push("WhatIsANetwork")}networksTemplate(){var e;const t=a.getAllApprovedCaipNetworkIds(),i=u.sortRequestedNetworks(t,this.requestedCaipNetworks);return this.search?this.filteredNetworks=null==i?void 0:i.filter((e=>{var t;return null==(t=null==e?void 0:e.name)?void 0:t.toLowerCase().includes(this.search.toLowerCase())})):this.filteredNetworks=i,null==(e=this.filteredNetworks)?void 0:e.map((e=>{var t;return r`
        <wui-list-network
          .selected=${(null==(t=this.network)?void 0:t.id)===e.id}
          imageSrc=${U(n.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${this.getNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `}))}getNetworkDisabled(e){const t=e.chainNamespace,i=c.getCaipAddress(t),o=a.getAllApprovedCaipNetworkIds(),r=!1!==a.getNetworkProp("supportsAllNetworks",t),n=w.getConnectorId(t),s=w.getAuthConnector(),l=n===g.CONNECTOR_ID.AUTH&&s;return!(!i||r||l)&&!(null==o?void 0:o.includes(e.caipNetworkId))}onSwitchNetwork(e){N.onSwitchNetwork({network:e})}};zo.styles=_o,Bo([W()],zo.prototype,"network",void 0),Bo([W()],zo.prototype,"requestedCaipNetworks",void 0),Bo([W()],zo.prototype,"filteredNetworks",void 0),Bo([W()],zo.prototype,"search",void 0),zo=Bo([D("w3m-networks-view")],zo);const Fo=e`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var Mo=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const Ko={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0};let qo=class extends o{constructor(){var e,t;super(...arguments),this.unsubscribe=[],this.switchToChain=null==(e=f.state.data)?void 0:e.switchToChain,this.caipNetwork=null==(t=f.state.data)?void 0:t.network,this.activeChain=a.state.activeChain}firstUpdated(){this.unsubscribe.push(a.subscribeKey("activeChain",(e=>this.activeChain=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.switchToChain?g.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const t=g.CHAIN_NAME_MAP[this.switchToChain];return r`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual name=${U(Ko[this.switchToChain])}></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${t}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${t}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${e} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(a.setIsSwitchingNamespace(!0),w.setFilterByNamespace(this.switchToChain),this.caipNetwork?await a.switchActiveNetwork(this.caipNetwork):a.setActiveNamespace(this.switchToChain),f.reset("Connect"))}};qo.styles=Fo,Mo([P()],qo.prototype,"activeChain",void 0),qo=Mo([D("w3m-switch-active-chain-view")],qo);const Ho=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let Vo=class extends o{render(){return r`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Ho}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{u.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Vo=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([D("w3m-what-is-a-network-view")],Vo);const Go=e`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Yo=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Xo=class extends o{constructor(){var e;super(),this.swapUnsupportedChain=null==(e=f.state.data)?void 0:e.swapUnsupportedChain,this.unsubscribe=[],this.disconecting=!1,this.unsubscribe.push(l.subscribeNetworkImages((()=>this.requestUpdate())))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return r`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?r`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:r`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=a.getAllRequestedCaipNetworks(),t=a.getAllApprovedCaipNetworkIds(),i=u.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?i.filter((e=>b.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId))):i).map((e=>r`
        <wui-list-network
          imageSrc=${U(n.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `))}async onDisconnect(){try{this.disconecting=!0,await x.disconnect(),d.close()}catch{p.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),m.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const t=c.state.caipAddress,i=a.getAllApprovedCaipNetworkIds(),o=(a.getNetworkProp("supportsAllNetworks",e.chainNamespace),f.state.data);t?(null==i?void 0:i.includes(e.caipNetworkId))?await a.switchActiveNetwork(e):f.push("SwitchNetwork",{...o,network:e}):t||(a.setActiveCaipNetwork(e),f.push("Connect"))}};Xo.styles=Go,Yo([W()],Xo.prototype,"disconecting",void 0),Xo=Yo([D("w3m-unsupported-chain-view")],Xo);const Qo=e`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var Jo=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Zo=class extends o{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return r`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Zo.styles=[t,i,Qo],Jo([P()],Zo.prototype,"icon",void 0),Jo([P()],Zo.prototype,"text",void 0),Zo=Jo([D("wui-banner")],Zo);const er=e`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var tr=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ir=class extends o{constructor(){super(),this.unsubscribe=[],this.preferredAccountTypes=c.state.preferredAccountTypes,this.unsubscribe.push(c.subscribeKey("preferredAccountTypes",(e=>{this.preferredAccountTypes=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return r` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var e;const t=a.getAllRequestedCaipNetworks(),i=a.getAllApprovedCaipNetworkIds(),o=a.state.activeCaipNetwork,s=a.checkIfSmartAccountEnabled();let l=u.sortRequestedNetworks(i,t);if(s&&(null==(e=this.preferredAccountTypes)?void 0:e[null==o?void 0:o.chainNamespace])===v.ACCOUNT_TYPES.SMART_ACCOUNT){if(!o)return null;l=[o]}return l.filter((e=>e.chainNamespace===(null==o?void 0:o.chainNamespace))).map((e=>r`
        <wui-list-network
          imageSrc=${U(n.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `))}};ir.styles=er,tr([W()],ir.prototype,"preferredAccountTypes",void 0),ir=tr([D("w3m-wallet-compatible-networks-view")],ir);const or=e`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var rr=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ar=class extends o{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,r`${this.templateVisual()}`}templateVisual(){return this.imageSrc?r`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:r`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};ar.styles=[t,or],rr([P()],ar.prototype,"imageSrc",void 0),rr([P()],ar.prototype,"alt",void 0),rr([P({type:Boolean})],ar.prototype,"borderRadiusFull",void 0),ar=rr([D("wui-visual-thumbnail")],ar);const nr=e`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let sr=class extends o{constructor(){var e,t;super(...arguments),this.dappImageUrl=null==(e=s.state.metadata)?void 0:e.icons,this.walletImageUrl=null==(t=c.state.connectedWalletInfo)?void 0:t.icon}firstUpdated(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelectorAll("wui-visual-thumbnail");(null==t?void 0:t[0])&&this.createAnimation(t[0],"translate(18px)"),(null==t?void 0:t[1])&&this.createAnimation(t[1],"translate(-18px)")}render(){var e;return r`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${null==(e=this.dappImageUrl)?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};sr.styles=nr,sr=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([D("w3m-siwx-sign-message-thumbnails")],sr);var lr=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let cr=class extends o{constructor(){var e;super(...arguments),this.dappName=null==(e=s.state.metadata)?void 0:e.name,this.isCancelling=!1,this.isSigning=!1}render(){return r`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,await j.requestSignMessage().finally((()=>this.isSigning=!1))}async onCancel(){this.isCancelling=!0,await j.cancelSignMessage().finally((()=>this.isCancelling=!1))}};lr([W()],cr.prototype,"isCancelling",void 0),lr([W()],cr.prototype,"isSigning",void 0),cr=lr([D("w3m-siwx-sign-message-view")],cr);export{ee as AppKitAccountButton,ae as AppKitButton,pe as AppKitConnectButton,xe as AppKitNetworkButton,Z as W3mAccountButton,Ie as W3mAccountSettingsView,st as W3mAccountView,Gt as W3mAllWalletsView,re as W3mButton,yo as W3mChooseAccountNameView,de as W3mConnectButton,Mi as W3mConnectView,Ao as W3mConnectWalletsView,Zi as W3mConnectingExternalView,io as W3mConnectingMultiChainView,mo as W3mConnectingWcBasicView,fo as W3mConnectingWcView,ko as W3mDownloadsView,Co as W3mGetWalletView,ve as W3mNetworkButton,Do as W3mNetworkSwitchView,zo as W3mNetworksView,ht as W3mProfileView,B as W3mRouter,cr as W3mSIWXSignMessageView,qo as W3mSwitchActiveChainView,vt as W3mSwitchAddressView,Xo as W3mUnsupportedChainView,ir as W3mWalletCompatibleNetworksView,Vo as W3mWhatIsANetworkView,Io as W3mWhatIsAWalletView};
