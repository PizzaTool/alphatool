import{bX as e,c2 as t,c8 as r,bY as i,b_ as o,aV as s,aS as a,c6 as c,cj as n,b$ as l,c5 as d,c7 as u,aW as p}from"./index.js";import{n as w,c as h,U as f,o as m,r as g}from"./if-defined.js";import"./index32.js";import"./index20.js";import"./index25.js";const v=e`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var b=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};let k=class extends i{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return o`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return o` <wui-flex class="networks">
      ${null==e?void 0:e.map((e=>o` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`))}
    </wui-flex>`}};k.styles=[t,r,v],b([w({type:Array})],k.prototype,"networkImages",void 0),b([w()],k.prototype,"text",void 0),k=b([h("wui-compatible-network")],k);const y=e`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var x=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};let N=class extends i{constructor(){super(),this.unsubscribe=[],this.address=s.state.address,this.profileName=s.state.profileName,this.network=a.state.activeCaipNetwork,this.preferredAccountTypes=s.state.preferredAccountTypes,this.unsubscribe.push(s.subscribe((e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountTypes=e.preferredAccountTypes):c.showError("Account not found")})),a.subscribeKey("activeCaipNetwork",(e=>{(null==e?void 0:e.id)&&(this.network=e)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=n.getNetworkImage(this.network);return o` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${f.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${l.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${m(l.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var e,t;const r=a.getAllRequestedCaipNetworks(),i=a.checkIfSmartAccountEnabled(),s=a.state.activeCaipNetwork,c=r.filter((e=>(null==e?void 0:e.chainNamespace)===(null==s?void 0:s.chainNamespace)));if((null==(e=this.preferredAccountTypes)?void 0:e[null==s?void 0:s.chainNamespace])===d.ACCOUNT_TYPES.SMART_ACCOUNT&&i)return s?o`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[n.getNetworkImage(s)??""]}
      ></wui-compatible-network>`:null;const l=(null==(t=null==c?void 0:c.filter((e=>{var t;return null==(t=null==e?void 0:e.assets)?void 0:t.imageId})))?void 0:t.slice(0,5)).map(n.getNetworkImage).filter(Boolean);return o`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${l}
    ></wui-compatible-network>`}onReceiveClick(){u.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(p.copyToClopboard(this.address),c.showSuccess("Address copied"))}catch{c.showError("Failed to copy")}}};N.styles=y,x([g()],N.prototype,"address",void 0),x([g()],N.prototype,"profileName",void 0),x([g()],N.prototype,"network",void 0),x([g()],N.prototype,"preferredAccountTypes",void 0),N=x([h("w3m-wallet-receive-view")],N);export{N as W3mWalletReceiveView};
