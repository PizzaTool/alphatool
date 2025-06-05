import{bX as t,bY as e,aS as o,ch as i,b_ as n,c1 as a,c4 as r,c7 as s,aV as l,aW as c,bZ as u,c5 as p,c2 as d,c8 as w}from"./index.js";import{r as h,n as g,c as x,U as k}from"./if-defined.js";import"./index17.js";import{M as m}from"./index27.js";import"./index28.js";import{S as b}from"./index29.js";import"./index26.js";import"./index14.js";import"./index20.js";import"./index13.js";import"./index18.js";import"./ref.js";const f={numericInputKeyDown(t,e,o){const i=t.metaKey||t.ctrlKey,n=t.key,a=n.toLocaleLowerCase(),r=","===n,s="."===n,l=n>="0"&&n<="9";!i&&("a"===a||"c"===a||"v"===a||"x"===a)&&t.preventDefault(),"0"!==e||r||s||"0"!==n||t.preventDefault(),"0"===e&&l&&(o(n),t.preventDefault()),(r||s)&&(e||(o("0."),t.preventDefault()),((null==e?void 0:e.includes("."))||(null==e?void 0:e.includes(",")))&&t.preventDefault()),l||["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"].includes(n)||s||r||t.preventDefault()}},v=t`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`;var T=function(t,e,o,i){var n,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(a<3?n(r):a>3?n(e,o,r):n(e,o))||r);return a>3&&r&&Object.defineProperty(e,o,r),r};const y=a.CONVERT_SLIPPAGE_TOLERANCE;let S=class extends e{constructor(){var t;super(),this.unsubscribe=[],this.networkName=null==(t=o.state.activeCaipNetwork)?void 0:t.name,this.detailsOpen=!1,this.sourceToken=b.state.sourceToken,this.toToken=b.state.toToken,this.toTokenAmount=b.state.toTokenAmount,this.sourceTokenPriceInUSD=b.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=b.state.toTokenPriceInUSD,this.priceImpact=b.state.priceImpact,this.maxSlippage=b.state.maxSlippage,this.networkTokenSymbol=b.state.networkTokenSymbol,this.inputError=b.state.inputError,this.unsubscribe.push(b.subscribe((t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.priceImpact=t.priceImpact,this.maxSlippage=t.maxSlippage,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError})))}render(){const t=this.toTokenAmount&&this.maxSlippage?i.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;const e=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return n`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${k.formatNumberToLocalString(e,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${k.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?n`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  ${this.priceImpact?n` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${k.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?n`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${"Max slippage sets the minimum amount you must receive for the transaction to proceed. "+(t?`Transaction will be reversed if you receive less than ${k.formatNumberToLocalString(t,6)} ${this.toToken.symbol} due to price changes.`:"")}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${k.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${y}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};S.styles=[v],T([h()],S.prototype,"networkName",void 0),T([g()],S.prototype,"detailsOpen",void 0),T([h()],S.prototype,"sourceToken",void 0),T([h()],S.prototype,"toToken",void 0),T([h()],S.prototype,"toTokenAmount",void 0),T([h()],S.prototype,"sourceTokenPriceInUSD",void 0),T([h()],S.prototype,"toTokenPriceInUSD",void 0),T([h()],S.prototype,"priceImpact",void 0),T([h()],S.prototype,"maxSlippage",void 0),T([h()],S.prototype,"networkTokenSymbol",void 0),T([h()],S.prototype,"inputError",void 0),S=T([x("w3m-swap-details")],S);const $=t`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`;var A=function(t,e,o,i){var n,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(a<3?n(r):a>3?n(e,o,r):n(e,o))||r);return a>3&&r&&Object.defineProperty(e,o,r),r};let I=class extends e{constructor(){super(...arguments),this.target="sourceToken"}render(){return n`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return n`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};I.styles=[$],A([g()],I.prototype,"target",void 0),I=A([x("w3m-swap-input-skeleton")],I);const C=t`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var D=function(t,e,o,i){var n,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(a<3?n(r):a>3?n(e,o,r):n(e,o))||r);return a>3&&r&&Object.defineProperty(e,o,r),r};let P=class extends e{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const t=this.marketValue||"0",e=i.bigNumber(t).gt("0");return n`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${e?`$${k.formatNumberToLocalString(this.marketValue,2)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(t){return f.numericInputKeyDown(t,this.value,(t=>{var e;return null==(e=this.onSetAmount)?void 0:e.call(this,this.target,t)}))}dispatchInputChangeEvent(t){if(!this.onSetAmount)return;const e=t.target.value.replace(/[^0-9.]/gu,"");","===e||"."===e?this.onSetAmount(this.target,"0."):e.endsWith(",")?this.onSetAmount(this.target,e.replace(",",".")):this.onSetAmount(this.target,e)}setMaxValueToInput(){var t;null==(t=this.onSetMaxValue)||t.call(this,this.target,this.balance)}templateTokenSelectButton(){return this.token?n`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:n` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){const t=i.multiply(this.balance,this.price),e=!!t&&(null==t?void 0:t.gt(5e-5));return n`
      ${e?n`<wui-text variant="small-400" color="fg-200">
            ${k.formatNumberToLocalString(this.balance,2)}
          </wui-text>`:null}
      ${"sourceToken"===this.target?this.tokenActionButtonTemplate(e):null}
    `}tokenActionButtonTemplate(t){return t?n` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:n` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(t){this.focused=t}onSelectToken(){r.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),s.push("SwapSelectToken",{target:this.target})}onBuyToken(){s.push("OnRampProviders")}};P.styles=[C],D([g()],P.prototype,"focused",void 0),D([g()],P.prototype,"balance",void 0),D([g()],P.prototype,"value",void 0),D([g()],P.prototype,"price",void 0),D([g()],P.prototype,"marketValue",void 0),D([g()],P.prototype,"disabled",void 0),D([g()],P.prototype,"target",void 0),D([g()],P.prototype,"token",void 0),D([g()],P.prototype,"onSetAmount",void 0),D([g()],P.prototype,"onSetMaxValue",void 0),P=D([x("w3m-swap-input")],P);const j=t`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var E=function(t,e,o,i){var n,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(a<3?n(r):a>3?n(e,o,r):n(e,o))||r);return a>3&&r&&Object.defineProperty(e,o,r),r};let N=class extends e{constructor(){var t,e;super(),this.unsubscribe=[],this.initialParams=null==(t=s.state.data)?void 0:t.swap,this.detailsOpen=!1,this.caipAddress=l.state.caipAddress,this.caipNetworkId=null==(e=o.state.activeCaipNetwork)?void 0:e.caipNetworkId,this.initialized=b.state.initialized,this.loadingQuote=b.state.loadingQuote,this.loadingPrices=b.state.loadingPrices,this.loadingTransaction=b.state.loadingTransaction,this.sourceToken=b.state.sourceToken,this.sourceTokenAmount=b.state.sourceTokenAmount,this.sourceTokenPriceInUSD=b.state.sourceTokenPriceInUSD,this.toToken=b.state.toToken,this.toTokenAmount=b.state.toTokenAmount,this.toTokenPriceInUSD=b.state.toTokenPriceInUSD,this.inputError=b.state.inputError,this.fetchError=b.state.fetchError,this.onDebouncedGetSwapCalldata=c.debounce((async()=>{await b.swapTokens()}),200),o.subscribeKey("activeCaipNetwork",(t=>this.onCaipNetworkChange({newCaipNetwork:t,resetSwapState:!0,initializeSwapState:!1}))),l.subscribeKey("caipAddress",(t=>this.onCaipAddressChange({newCaipAddress:t,resetSwapState:!0,initializeSwapState:!1}))),this.unsubscribe.push(o.subscribeKey("activeCaipNetwork",(t=>this.onCaipNetworkChange({newCaipNetwork:t,resetSwapState:!1,initializeSwapState:!0}))),l.subscribeKey("caipAddress",(t=>this.onCaipAddressChange({newCaipAddress:t,resetSwapState:!1,initializeSwapState:!0}))),u.subscribeKey("open",(t=>{t||b.resetState()})),s.subscribeKey("view",(t=>{t.includes("Swap")||b.resetValues()})),b.subscribe((t=>{this.initialized=t.initialized,this.loadingQuote=t.loadingQuote,this.loadingPrices=t.loadingPrices,this.loadingTransaction=t.loadingTransaction,this.sourceToken=t.sourceToken,this.sourceTokenAmount=t.sourceTokenAmount,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError,this.fetchError=t.fetchError})))}async firstUpdated(){b.initializeState(),this.watchTokensAndValues(),await this.handleSwapParameters()}disconnectedCallback(){this.unsubscribe.forEach((t=>null==t?void 0:t())),clearInterval(this.interval)}render(){return n`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval((()=>{b.getNetworkTokenPrice(),b.getMyTokensWithBalance(),b.swapTokens()}),1e4)}templateSwap(){return n`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":this.sourceToken&&this.toToken?this.sourceTokenAmount?this.inputError?this.inputError:"Review swap":"Enter amount":"Select token"}templateReplaceTokensButton(){return n`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return n`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(t,e){var o,a;const r=null==(o=b.state.myTokensWithBalance)?void 0:o.find((t=>(null==t?void 0:t.address)===(null==e?void 0:e.address))),s="toToken"===t?this.toTokenAmount:this.sourceTokenAmount,l="toToken"===t?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD,c=i.parseLocalStringToNumber(s)*l;return n`<w3m-swap-input
      .value=${"toToken"===t?this.toTokenAmount:this.sourceTokenAmount}
      .disabled=${"toToken"===t}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${t}
      .token=${e}
      .balance=${null==(a=null==r?void 0:r.quantity)?void 0:a.numeric}
      .price=${null==r?void 0:r.price}
      .marketValue=${c}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(t,e){const o=i.bigNumber(e||"0");this.handleChangeAmount(t,o.gt(0)?o.toFixed(20):"0")}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?n`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}handleChangeAmount(t,e){b.clearError(),"sourceToken"===t?b.setSourceTokenAmount(e):b.setToTokenAmount(e),this.onDebouncedGetSwapCalldata()}templateActionButton(){const t=!this.toToken||!this.sourceToken,e=!this.sourceTokenAmount,o=this.loadingQuote||this.loadingPrices||this.loadingTransaction,i=o||t||e||this.inputError;return n` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${t?"neutral":"main"}
        .loading=${o}
        .disabled=${i}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){b.switchTokens()}async onSwapPreview(){var t,e,i;const n=o.state.activeChain;this.fetchError&&await b.swapTokens(),r.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:(null==(t=this.sourceToken)?void 0:t.symbol)||"",swapToToken:(null==(e=this.toToken)?void 0:e.symbol)||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:(null==(i=l.state.preferredAccountTypes)?void 0:i[n])===p.ACCOUNT_TYPES.SMART_ACCOUNT}}),s.push("SwapPreview")}async handleSwapParameters(){if(this.initialParams){if(!b.state.initialized){const t=new Promise((t=>{const e=b.subscribeKey("initialized",(o=>{o&&(null==e||e(),t())}))}));await t}await this.setSwapParameters(this.initialParams)}}async setSwapParameters({amount:t,fromToken:e,toToken:o}){if(!b.state.tokens||!b.state.myTokensWithBalance){const t=new Promise((t=>{const e=b.subscribeKey("myTokensWithBalance",(o=>{o&&o.length>0&&(null==e||e(),t())}));setTimeout((()=>{null==e||e(),t()}),5e3)}));await t}const i=[...b.state.tokens||[],...b.state.myTokensWithBalance||[]];if(e){const t=i.find((t=>t.symbol.toLowerCase()===e.toLowerCase()));t&&b.setSourceToken(t)}if(o){const t=i.find((t=>t.symbol.toLowerCase()===o.toLowerCase()));t&&b.setToToken(t)}t&&!isNaN(Number(t))&&b.setSourceTokenAmount(t)}onCaipAddressChange({newCaipAddress:t,resetSwapState:e,initializeSwapState:o}){this.caipAddress!==t&&(this.caipAddress=t,e&&b.resetState(),o&&b.initializeState())}onCaipNetworkChange({newCaipNetwork:t,resetSwapState:e,initializeSwapState:o}){this.caipNetworkId!==(null==t?void 0:t.caipNetworkId)&&(this.caipNetworkId=null==t?void 0:t.caipNetworkId,e&&b.resetState(),o&&b.initializeState())}};N.styles=j,E([g({type:Object})],N.prototype,"initialParams",void 0),E([h()],N.prototype,"interval",void 0),E([h()],N.prototype,"detailsOpen",void 0),E([h()],N.prototype,"caipAddress",void 0),E([h()],N.prototype,"caipNetworkId",void 0),E([h()],N.prototype,"initialized",void 0),E([h()],N.prototype,"loadingQuote",void 0),E([h()],N.prototype,"loadingPrices",void 0),E([h()],N.prototype,"loadingTransaction",void 0),E([h()],N.prototype,"sourceToken",void 0),E([h()],N.prototype,"sourceTokenAmount",void 0),E([h()],N.prototype,"sourceTokenPriceInUSD",void 0),E([h()],N.prototype,"toToken",void 0),E([h()],N.prototype,"toTokenAmount",void 0),E([h()],N.prototype,"toTokenPriceInUSD",void 0),E([h()],N.prototype,"inputError",void 0),E([h()],N.prototype,"fetchError",void 0),N=E([x("w3m-swap-view")],N);const U=t`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var L=function(t,e,o,i){var n,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(a<3?n(r):a>3?n(e,o,r):n(e,o))||r);return a>3&&r&&Object.defineProperty(e,o,r),r};let B=class extends e{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=b.state.approvalTransaction,this.swapTransaction=b.state.swapTransaction,this.sourceToken=b.state.sourceToken,this.sourceTokenAmount=b.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=b.state.sourceTokenPriceInUSD,this.toToken=b.state.toToken,this.toTokenAmount=b.state.toTokenAmount??"",this.toTokenPriceInUSD=b.state.toTokenPriceInUSD,this.caipNetwork=o.state.activeCaipNetwork,this.balanceSymbol=l.state.balanceSymbol,this.inputError=b.state.inputError,this.loadingQuote=b.state.loadingQuote,this.loadingApprovalTransaction=b.state.loadingApprovalTransaction,this.loadingBuildTransaction=b.state.loadingBuildTransaction,this.loadingTransaction=b.state.loadingTransaction,this.unsubscribe.push(l.subscribeKey("balanceSymbol",(t=>{this.balanceSymbol!==t&&s.goBack()})),o.subscribeKey("activeCaipNetwork",(t=>{this.caipNetwork!==t&&(this.caipNetwork=t)})),b.subscribe((t=>{this.approvalTransaction=t.approvalTransaction,this.swapTransaction=t.swapTransaction,this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.sourceTokenAmount=t.sourceTokenAmount??"",this.toTokenAmount=t.toTokenAmount??"",this.inputError=t.inputError,t.inputError&&s.goBack(),this.loadingQuote=t.loadingQuote,this.loadingApprovalTransaction=t.loadingApprovalTransaction,this.loadingBuildTransaction=t.loadingBuildTransaction,this.loadingTransaction=t.loadingTransaction})))}firstUpdated(){b.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach((t=>null==t?void 0:t())),clearInterval(this.interval)}render(){return n`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval((()=>{b.getApprovalLoadingState()||b.getTransaction()}),1e4)}templateSwap(){var t,e,o,i;const a=`${k.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${null==(t=this.sourceToken)?void 0:t.symbol}`,r=`${k.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${null==(e=this.toToken)?void 0:e.symbol}`,s=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,l=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD,c=k.formatNumberToLocalString(s),u=k.formatNumberToLocalString(l),p=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return n`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${c}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${a}
              imageSrc=${null==(o=this.sourceToken)?void 0:o.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${u}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${r}
              imageSrc=${null==(i=this.toToken)?void 0:i.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${p}
            ?disabled=${p}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?n`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){s.goBack()}onSendTransaction(){this.approvalTransaction?b.sendTransactionForApproval(this.approvalTransaction):b.sendTransactionForSwap(this.swapTransaction)}};B.styles=U,L([h()],B.prototype,"interval",void 0),L([h()],B.prototype,"detailsOpen",void 0),L([h()],B.prototype,"approvalTransaction",void 0),L([h()],B.prototype,"swapTransaction",void 0),L([h()],B.prototype,"sourceToken",void 0),L([h()],B.prototype,"sourceTokenAmount",void 0),L([h()],B.prototype,"sourceTokenPriceInUSD",void 0),L([h()],B.prototype,"toToken",void 0),L([h()],B.prototype,"toTokenAmount",void 0),L([h()],B.prototype,"toTokenPriceInUSD",void 0),L([h()],B.prototype,"caipNetwork",void 0),L([h()],B.prototype,"balanceSymbol",void 0),L([h()],B.prototype,"inputError",void 0),L([h()],B.prototype,"loadingQuote",void 0),L([h()],B.prototype,"loadingApprovalTransaction",void 0),L([h()],B.prototype,"loadingBuildTransaction",void 0),L([h()],B.prototype,"loadingTransaction",void 0),B=L([x("w3m-swap-preview-view")],B);const O=t`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var R=function(t,e,o,i){var n,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(a<3?n(r):a>3?n(e,o,r):n(e,o))||r);return a>3&&r&&Object.defineProperty(e,o,r),r};let z=class extends e{constructor(){super(),this.observer=new IntersectionObserver((()=>{})),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.visible=!0:this.visible=!1}))}),{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var t;if(!this.visible)return null;const e=this.amount&&this.price?null==(t=i.multiply(this.price,this.amount))?void 0:t.toFixed(3):null;return n`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${e?n`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${k.formatNumberToLocalString(e,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?n`<wui-text variant="small-400" color="fg-200">
                  ${k.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?n`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?n`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};z.styles=[d,w,O],R([g()],z.prototype,"imageSrc",void 0),R([g()],z.prototype,"name",void 0),R([g()],z.prototype,"symbol",void 0),R([g()],z.prototype,"price",void 0),R([g()],z.prototype,"amount",void 0),R([h()],z.prototype,"visible",void 0),R([h()],z.prototype,"imageError",void 0),z=R([x("wui-token-list-item")],z);const V=t`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var W=function(t,e,o,i){var n,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(a<3?n(r):a>3?n(e,o,r):n(e,o))||r);return a>3&&r&&Object.defineProperty(e,o,r),r};let _=class extends e{constructor(){var t;super(),this.unsubscribe=[],this.targetToken=null==(t=s.state.data)?void 0:t.target,this.sourceToken=b.state.sourceToken,this.sourceTokenAmount=b.state.sourceTokenAmount,this.toToken=b.state.toToken,this.myTokensWithBalance=b.state.myTokensWithBalance,this.popularTokens=b.state.popularTokens,this.searchValue="",this.unsubscribe.push(b.subscribe((t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.myTokensWithBalance=t.myTokensWithBalance})))}updated(){var t,e;const o=null==(t=this.renderRoot)?void 0:t.querySelector(".suggested-tokens-container");null==o||o.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));const i=null==(e=this.renderRoot)?void 0:e.querySelector(".tokens");null==i||i.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){var t,e;super.disconnectedCallback();const o=null==(t=this.renderRoot)?void 0:t.querySelector(".suggested-tokens-container"),i=null==(e=this.renderRoot)?void 0:e.querySelector(".tokens");null==o||o.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),null==i||i.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return n`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(t){"sourceToken"===this.targetToken?b.setSourceToken(t):(b.setToToken(t),this.sourceToken&&this.sourceTokenAmount&&b.swapTokens()),s.goBack()}templateSearchInput(){return n`
      <wui-flex .padding=${["3xs","s","0","s"]} gap="xs">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const t=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],e=this.popularTokens?this.popularTokens:[],o=this.filterTokensWithText(t,this.searchValue),i=this.filterTokensWithText(e,this.searchValue);return n`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${(null==o?void 0:o.length)>0?n`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${o.map((t=>{var e,o,i;const a=t.symbol===(null==(e=this.sourceToken)?void 0:e.symbol)||t.symbol===(null==(o=this.toToken)?void 0:o.symbol);return n`
                    <wui-token-list-item
                      data-testid="swap-select-token-item-${t.symbol}"
                      name=${t.name}
                      ?disabled=${a}
                      symbol=${t.symbol}
                      price=${null==t?void 0:t.price}
                      amount=${null==(i=null==t?void 0:t.quantity)?void 0:i.numeric}
                      imageSrc=${t.logoUri}
                      @click=${()=>{a||this.onSelectToken(t)}}
                    >
                    </wui-token-list-item>
                  `}))}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${(null==i?void 0:i.length)>0?i.map((t=>n`
                  <wui-token-list-item
                    data-testid="swap-select-token-item-${t.symbol}"
                    name=${t.name}
                    symbol=${t.symbol}
                    imageSrc=${t.logoUri}
                    @click=${()=>this.onSelectToken(t)}
                  >
                  </wui-token-list-item>
                `)):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const t=b.state.suggestedTokens?b.state.suggestedTokens.slice(0,8):null;return t?n`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${t.map((t=>n`
            <wui-token-button
              text=${t.symbol}
              imageSrc=${t.logoUri}
              @click=${()=>this.onSelectToken(t)}
            >
            </wui-token-button>
          `))}
      </wui-flex>
    `:null}onSearchInputChange(t){this.searchValue=t.detail}handleSuggestedTokensScroll(){var t;const e=null==(t=this.renderRoot)?void 0:t.querySelector(".suggested-tokens-container");e&&(e.style.setProperty("--suggested-tokens-scroll--left-opacity",m.interpolate([0,100],[0,1],e.scrollLeft).toString()),e.style.setProperty("--suggested-tokens-scroll--right-opacity",m.interpolate([0,100],[0,1],e.scrollWidth-e.scrollLeft-e.offsetWidth).toString()))}handleTokenListScroll(){var t;const e=null==(t=this.renderRoot)?void 0:t.querySelector(".tokens");e&&(e.style.setProperty("--tokens-scroll--top-opacity",m.interpolate([0,100],[0,1],e.scrollTop).toString()),e.style.setProperty("--tokens-scroll--bottom-opacity",m.interpolate([0,100],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString()))}filterTokensWithText(t,e){return t.filter((t=>`${t.symbol} ${t.name} ${t.address}`.toLowerCase().includes(e.toLowerCase())))}};_.styles=V,W([h()],_.prototype,"interval",void 0),W([h()],_.prototype,"targetToken",void 0),W([h()],_.prototype,"sourceToken",void 0),W([h()],_.prototype,"sourceTokenAmount",void 0),W([h()],_.prototype,"toToken",void 0),W([h()],_.prototype,"myTokensWithBalance",void 0),W([h()],_.prototype,"popularTokens",void 0),W([h()],_.prototype,"searchValue",void 0),_=W([x("w3m-swap-select-token-view")],_);export{B as W3mSwapPreviewView,_ as W3mSwapSelectTokenView,N as W3mSwapView};
