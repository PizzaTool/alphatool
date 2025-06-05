import{bX as o,c2 as r,c8 as i,bY as e,b_ as t}from"./index.js";import{n as s,c}from"./if-defined.js";const a=o`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var n=function(o,r,i,e){var t,s=arguments.length,c=s<3?r:null===e?e=Object.getOwnPropertyDescriptor(r,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,r,i,e);else for(var a=o.length-1;a>=0;a--)(t=o[a])&&(c=(s<3?t(c):s>3?t(r,i,c):t(r,i))||c);return s>3&&c&&Object.defineProperty(r,i,c),c};let l=class extends e{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const o=this.iconSize||this.size,r="lg"===this.size,i="xl"===this.size,e=r?"12%":"16%",s=r?"xxs":i?"s":"3xl",c="gray"===this.background,a="opaque"===this.background,n="accent-100"===this.backgroundColor&&a||"success-100"===this.backgroundColor&&a||"error-100"===this.backgroundColor&&a||"inverse-100"===this.backgroundColor&&a;let l=`var(--wui-color-${this.backgroundColor})`;return n?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:c&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${n||c?"100%":e};\n       --local-border-radius: var(--wui-border-radius-${s});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,t` <wui-icon color=${this.iconColor} size=${o} name=${this.icon}></wui-icon> `}};l.styles=[r,i,a],n([s()],l.prototype,"size",void 0),n([s()],l.prototype,"backgroundColor",void 0),n([s()],l.prototype,"iconColor",void 0),n([s()],l.prototype,"iconSize",void 0),n([s()],l.prototype,"background",void 0),n([s({type:Boolean})],l.prototype,"border",void 0),n([s()],l.prototype,"borderColor",void 0),n([s()],l.prototype,"icon",void 0),l=n([c("wui-icon-box")],l);
