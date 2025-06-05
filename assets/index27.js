import{bX as e,bY as t,c7 as o,bZ as s,b_ as i}from"./index.js";import{n as r,r as n,c as h}from"./if-defined.js";import{T as a}from"./index28.js";const c={interpolate(e,t,o){if(2!==e.length||2!==t.length)throw new Error("inputRange and outputRange must be an array of length 2");const s=e[0]||0,i=e[1]||0,r=t[0]||0,n=t[1]||0;return o<s?r:o>i?n:(n-r)/(i-s)*(o-s)+r}},d=e`
  :host {
    width: 100%;
    display: block;
  }
`;var p=function(e,t,o,s){var i,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,s);else for(var h=e.length-1;h>=0;h--)(i=e[h])&&(n=(r<3?i(n):r>3?i(t,o,n):i(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let l=class extends t{constructor(){super(),this.unsubscribe=[],this.text="",this.open=a.state.open,this.unsubscribe.push(o.subscribeKey("view",(()=>{a.hide()})),s.subscribeKey("open",(e=>{e||a.hide()})),a.subscribeKey("open",(e=>{this.open=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),a.hide()}render(){return i`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return i`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();this.open||a.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||a.hide()}};l.styles=[d],p([r()],l.prototype,"text",void 0),p([n()],l.prototype,"open",void 0),l=p([h("w3m-tooltip-trigger")],l);export{c as M};
