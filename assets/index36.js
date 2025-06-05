import{bX as t,bY as e,b_ as i,c2 as r,aS as a,cs as o,aW as n,c7 as s,cb as l,c4 as c,aV as p,c5 as u}from"./index.js";import{n as d,c as h,o as g,r as w}from"./if-defined.js";import{T as m,D as x}from"./index33.js";import"./index18.js";import"./index19.js";import"./index20.js";var v,y;(y=v||(v={})).approve="approved",y.bought="bought",y.borrow="borrowed",y.burn="burnt",y.cancel="canceled",y.claim="claimed",y.deploy="deployed",y.deposit="deposited",y.execute="executed",y.mint="minted",y.receive="received",y.repay="repaid",y.send="sent",y.sell="sold",y.stake="staked",y.trade="swapped",y.unstake="unstaked",y.withdraw="withdrawn";const f=t`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var b=function(t,e,i,r){var a,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o<3?a(n):o>3?a(e,i,n):a(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let $=class extends e{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,e]=this.images,r="NFT"===(null==t?void 0:t.type),a=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",o=((null==e?void 0:e.url)?"NFT"===e.type:r)?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`\n    --local-left-border-radius: ${a};\n    --local-right-border-radius: ${o};\n    `,i`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,e]=this.images,r=null==t?void 0:t.type;return 2===this.images.length&&((null==t?void 0:t.url)||(null==e?void 0:e.url))?i`<div class="swap-images-container">
        ${(null==t?void 0:t.url)?i`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${(null==e?void 0:e.url)?i`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
      </div>`:(null==t?void 0:t.url)?i`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:"NFT"===r?i`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:i`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t,e="accent-100";return t=this.getIcon(),this.status&&(e=this.getStatusColor()),t?i`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};$.styles=[f],b([d()],$.prototype,"type",void 0),b([d()],$.prototype,"status",void 0),b([d()],$.prototype,"direction",void 0),b([d({type:Boolean})],$.prototype,"onlyDirectionIcon",void 0),b([d({type:Array})],$.prototype,"images",void 0),b([d({type:Object})],$.prototype,"secondImage",void 0),$=b([h("wui-transaction-visual")],$);const T=t`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var A=function(t,e,i,r){var a,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o<3?a(n):o>3?a(e,i,n):a(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let C=class extends e{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return i`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${g(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${g(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${v[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var t;const e=null==(t=this.descriptions)?void 0:t[0];return e?i`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var t;const e=null==(t=this.descriptions)?void 0:t[1];return e?i`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};C.styles=[r,T],A([d()],C.prototype,"type",void 0),A([d({type:Array})],C.prototype,"descriptions",void 0),A([d()],C.prototype,"date",void 0),A([d({type:Boolean})],C.prototype,"onlyDirectionIcon",void 0),A([d()],C.prototype,"status",void 0),A([d()],C.prototype,"direction",void 0),A([d({type:Array})],C.prototype,"images",void 0),A([d({type:Array})],C.prototype,"price",void 0),A([d({type:Array})],C.prototype,"amount",void 0),A([d({type:Array})],C.prototype,"symbol",void 0),C=A([h("wui-transaction-list-item")],C);const I=t`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
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

  .emptyContainer {
    height: 100%;
  }
`;var k=function(t,e,i,r){var a,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o<3?a(n):o>3?a(e,i,n):a(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};const D="last-transaction";let O=class extends e{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=a.state.activeCaipAddress,this.transactionsByYear=o.state.transactionsByYear,this.loading=o.state.loading,this.empty=o.state.empty,this.next=o.state.next,o.clearCursor(),this.unsubscribe.push(a.subscribeKey("activeCaipAddress",(t=>{t&&this.caipAddress!==t&&(o.resetTransactions(),o.fetchTransactions(t)),this.caipAddress=t})),a.subscribeKey("activeCaipNetwork",(()=>{this.updateTransactionView()})),o.subscribe((t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next})))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return i` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){var t;const e=null==(t=a.state.activeCaipNetwork)?void 0:t.caipNetworkId;o.state.lastNetworkInView!==e&&(o.resetTransactions(),this.caipAddress&&o.fetchTransactions(n.getPlainAddress(this.caipAddress))),o.setLastNetworkInView(e)}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map((t=>{const e=parseInt(t,10),r=new Array(12).fill(null).map(((t,i)=>{var r;return{groupTitle:m.getTransactionGroupTitle(e,i),transactions:null==(r=this.transactionsByYear[e])?void 0:r[i]}})).filter((({transactions:t})=>t)).reverse();return r.map((({groupTitle:t,transactions:e},a)=>{const o=a===r.length-1;return e?i`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${o?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200" data-testid="group-title"
                >${t}</wui-text
              >
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(e,o)}
            </wui-flex>
          </wui-flex>
        `:null}))}))}templateRenderTransaction(t,e){const{date:r,descriptions:a,direction:o,isAllNFT:n,images:s,status:l,transfers:c,type:p}=this.getTransactionListItemProps(t),u=(null==c?void 0:c.length)>1;return 2===(null==c?void 0:c.length)&&!n?i`
        <wui-transaction-list-item
          date=${r}
          .direction=${o}
          id=${e&&this.next?D:""}
          status=${l}
          type=${p}
          .images=${s}
          .descriptions=${a}
        ></wui-transaction-list-item>
      `:u?c.map(((t,a)=>{const o=m.getTransferDescription(t),n=e&&a===c.length-1;return i` <wui-transaction-list-item
          date=${r}
          direction=${t.direction}
          id=${n&&this.next?D:""}
          status=${l}
          type=${p}
          .onlyDirectionIcon=${!0}
          .images=${[s[a]]}
          .descriptions=${[o]}
        ></wui-transaction-list-item>`})):i`
      <wui-transaction-list-item
        date=${r}
        .direction=${o}
        id=${e&&this.next?D:""}
        status=${l}
        type=${p}
        .images=${s}
        .descriptions=${a}
      ></wui-transaction-list-item>
    `}templateTransactions(t,e){return t.map(((r,a)=>{const o=e&&a===t.length-1;return i`${this.templateRenderTransaction(r,o)}`}))}emptyStateActivity(){return i`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
      data-testid="empty-activity-state"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return i`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
      data-testid="empty-account-state"
    >
      <wui-icon-box
        icon="swapHorizontal"
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
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?i`${this.emptyStateAccount()}`:i`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill(i` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((t=>t)):null}onReceiveClick(){s.push("WalletReceive")}createPaginationObserver(){const t=a.state.activeChain,{projectId:e}=l.state;this.paginationObserver=new IntersectionObserver((([i])=>{var r;(null==i?void 0:i.isIntersecting)&&!this.loading&&(o.fetchTransactions(n.getPlainAddress(this.caipAddress)),c.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:n.getPlainAddress(this.caipAddress),projectId:e,cursor:this.next,isSmartAccount:(null==(r=p.state.preferredAccountTypes)?void 0:r[t])===u.ACCOUNT_TYPES.SMART_ACCOUNT}}))}),{}),this.setPaginationObserver()}setPaginationObserver(){var t,e,i;null==(t=this.paginationObserver)||t.disconnect();const r=null==(e=this.shadowRoot)?void 0:e.querySelector(`#${D}`);r&&(null==(i=this.paginationObserver)||i.observe(r))}getTransactionListItemProps(t){var e,i,r,a,o;const n=x.formatDate(null==(e=null==t?void 0:t.metadata)?void 0:e.minedAt),s=m.getTransactionDescriptions(t),l=null==t?void 0:t.transfers,c=null==(i=null==t?void 0:t.transfers)?void 0:i[0],p=Boolean(c)&&(null==(r=null==t?void 0:t.transfers)?void 0:r.every((t=>Boolean(t.nft_info)))),u=m.getTransactionImages(l);return{date:n,direction:null==c?void 0:c.direction,descriptions:s,isAllNFT:p,images:u,status:null==(a=t.metadata)?void 0:a.status,transfers:l,type:null==(o=t.metadata)?void 0:o.operationType}}};O.styles=I,k([d()],O.prototype,"page",void 0),k([w()],O.prototype,"caipAddress",void 0),k([w()],O.prototype,"transactionsByYear",void 0),k([w()],O.prototype,"loading",void 0),k([w()],O.prototype,"empty",void 0),k([w()],O.prototype,"next",void 0),O=k([h("w3m-activity-list")],O);
