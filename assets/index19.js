import{bX as t,c2 as o,c8 as r,bY as e,b_ as a}from"./index.js";import{n as s,c as i,o as n}from"./if-defined.js";const l=t`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var c=function(t,o,r,e){var a,s=arguments.length,i=s<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,r):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,o,r,e);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(i=(s<3?a(i):s>3?a(o,r,i):a(o,r))||i);return s>3&&i&&Object.defineProperty(o,r,i),i};let d=class extends e{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return a`
      <button ?disabled=${this.disabled} tabindex=${n(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};d.styles=[o,r,l],c([s()],d.prototype,"tabIdx",void 0),c([s({type:Boolean})],d.prototype,"disabled",void 0),c([s()],d.prototype,"color",void 0),d=c([i("wui-link")],d);
