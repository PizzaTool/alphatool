import{bX as o,c2 as i,c8 as t,cw as e,bY as r,b_ as s}from"./index.js";import{n,c as a}from"./if-defined.js";const c=o`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var d=function(o,i,t,e){var r,s=arguments.length,n=s<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,t):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(o,i,t,e);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(i,t,n):r(i,t))||n);return s>3&&n&&Object.defineProperty(i,t,n),n};let l=class extends r{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const o="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",i="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`\n    --local-border-radius: var(${o});\n    --local-padding: var(${i});\n`,s`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};l.styles=[i,t,e,c],d([n()],l.prototype,"size",void 0),d([n({type:Boolean})],l.prototype,"disabled",void 0),d([n()],l.prototype,"icon",void 0),d([n()],l.prototype,"iconColor",void 0),l=d([a("wui-icon-link")],l);
