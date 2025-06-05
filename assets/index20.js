import{bX as e,c2 as t,cw as i,bY as r,b_ as s}from"./index.js";import{n as o,c}from"./if-defined.js";const a=e`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var h=function(e,t,i,r){var s,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(c=(o<3?s(c):o>3?s(t,i,c):s(t,i))||c);return o>3&&c&&Object.defineProperty(t,i,c),c};let n=class extends r{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,s`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};n.styles=[t,i,a],h([o()],n.prototype,"src",void 0),h([o()],n.prototype,"alt",void 0),h([o()],n.prototype,"size",void 0),n=h([c("wui-image")],n);
