import{aV as e,aS as t,c4 as o,c7 as r,aU as i,c6 as a,aW as n,aT as l,aX as s,bX as c,c2 as u,bY as d,b_ as g,c8 as p}from"./index.js";import{n as f,c as h,o as w}from"./if-defined.js";async function v(o){r.push("ConnectingSocial");const c=i.getAuthConnector();let u=null;try{const r=setTimeout((()=>{throw new Error("Social login timed out. Please try again.")}),45e3);if(c&&o){if(n.isTelegram()||(u=function(){try{return n.returnOpenHref(`${s.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch(e){throw new Error("Could not open social popup")}}()),u)e.setSocialWindow(u,t.state.activeChain);else if(!n.isTelegram())throw new Error("Could not create social popup");const{uri:i}=await c.provider.getSocialRedirectUri({provider:o});if(!i)throw null==u||u.close(),new Error("Could not fetch the social redirect uri");if(u&&(u.location.href=i),n.isTelegram()){l.setTelegramSocialProvider(o);const e=n.formatTelegramSocialLoginUrl(i);n.openHref(e,"_top")}clearTimeout(r)}}catch(d){null==u||u.close(),a.showError(null==d?void 0:d.message)}}async function y(n){e.setSocialProvider(n,t.state.activeChain),o.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:n}}),"farcaster"===n?await async function(){r.push("ConnectingFarcaster");const o=i.getAuthConnector();if(o&&!e.state.farcasterUrl)try{const{url:r}=await o.provider.getFarcasterUri();e.setFarcasterUrl(r,t.state.activeChain)}catch(n){r.goBack(),a.showError(n)}}():await v(n)}const b=c`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var x=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let m=class extends d{constructor(){super(...arguments),this.logo="google"}render(){return g`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};m.styles=[u,b],x([f()],m.prototype,"logo",void 0),m=x([h("wui-logo")],m);const C=c`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var S=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let j=class extends d{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return g`
      <button ?disabled=${this.disabled} tabindex=${w(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return"center"===this.align?g` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};j.styles=[u,p,C],S([f()],j.prototype,"logo",void 0),S([f()],j.prototype,"name",void 0),S([f()],j.prototype,"align",void 0),S([f()],j.prototype,"tabIdx",void 0),S([f({type:Boolean})],j.prototype,"disabled",void 0),j=S([h("wui-list-social")],j);export{y as e};
