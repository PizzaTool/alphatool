import{bX as t,c2 as e,bY as o,b_ as r}from"./index.js";import{n as i,c as a}from"./if-defined.js";const n=t`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color;
  }
`;var s=function(t,e,o,r){var i,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(a<3?i(n):a>3?i(e,o,n):i(e,o))||n);return a>3&&n&&Object.defineProperty(e,o,n),n};let l=class extends o{constructor(){super(...arguments),this.text=""}render(){return r`${this.template()}`}template(){return this.text?r`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};l.styles=[e,n],s([i()],l.prototype,"text",void 0),l=s([a("wui-separator")],l);
