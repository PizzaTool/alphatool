import{bX as e,c2 as t,bY as i,b_ as r}from"./index.js";import{n as a,c as o,o as s}from"./if-defined.js";import"./index14.js";const l=e`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var n=function(e,t,i,r){var a,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(s=(o<3?a(s):o>3?a(t,i,s):a(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let p=class extends i{constructor(){super(...arguments),this.disabled=!1}render(){return r`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${s(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?r`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};p.styles=[t,l],n([a()],p.prototype,"errorMessage",void 0),n([a({type:Boolean})],p.prototype,"disabled",void 0),n([a()],p.prototype,"value",void 0),n([a()],p.prototype,"tabIdx",void 0),p=n([o("wui-email-input")],p);
