const v=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))x(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&x(r)}).observe(document,{childList:!0,subtree:!0});function b(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function x(t){if(t.ep)return;t.ep=!0;const e=b(t);fetch(t.href,e)}};v();class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --spiral-path: "M 125 50 L 38 50 Q 31 50 25 35 L 15 10 Q 11.047 0.054 0 0 L 0 0 Q 0 0 0 50";

        display: grid;
        grid-template-columns: 45px 25px 350px 25px 45px;
        width: 490px;
        height: 100%;
        margin: auto;
      }

      .frame { background: var(--frame-color); }

      :host(:not(.invert)) .frame {
        background-color: black;
        background-image:
          radial-gradient(#444 0%, transparent 12%),
          radial-gradient(#444 0%, transparent 12%),
          radial-gradient(#444 0%, transparent 12%);
        background-size: 7px 25px;
        background-position: 0 -2px, 0 -6px, 0 2px;
        background-repeat: repeat-x;
      }

      .corner { background: var(--trigger-color); }

      .trigger {
        background: var(--trigger-color);
        width: 56px;
        height: 40px;
      }

      .left.trigger {
        border-radius: 116% 0 0 0 / 103% 0 0 0;
        transform: translateX(-11px); /* ?? */
      }
      .right.trigger {
        border-radius: 0% 116% 0% 0% / 0% 103% 0% 0%;
      }

      .right.corner::after,
      .left.corner::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: var(--frame-color);
        clip-path: path(var(--spiral-path));
      }

      .left.corner::after {
        transform: scaleX(-1);
      }

      :host(.invert) {
        transform: scaleY(-1);
      }

      :host(.invert) .right.trigger {
        display: none;
      }

      :host(.invert) .right.corner {
        background: transparent;
      }

      :host(.invert) .reset {
        transform: scaleY(-1);
      }

      :host(.invert) :is(.corner, .frame) {
        --frame-color: linear-gradient(to bottom, #161616, #000);
      }

      :host(.invert) .corner {
        --frame-color: linear-gradient(to top, #161616 32%, #000);
      }

      :host(.invert) .trigger {
        background: transparent;
        border: 6px solid #aaa5;
        border-right: 0;
        transform: translateX(-11px);
        box-sizing: border-box;
      }

    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${o.styles}</style>
    <div class="left trigger"></div>
    <div class="left corner"></div>
    <div class="reset frame"><slot></slot></div>
    <div class="right corner"></div>
    <div class="right trigger"></div>
    `}}customElements.define("psp-frame",o);class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: grid;
        width: 100%;
        height: 100%;
        background: var(--frame-color);
        border-radius: 0 40% 40% 0 / 0 60% 60% 0;
        transform: translateX(-8%) scale(1.1);
        color: white;
      }

      :host(.invert) {
        background-image: linear-gradient(103deg, #111 0 15%, #0000 20%);
        border-radius: 40% 0 0 40% / 60% 0 0 60%;
        transform: translateX(8%) scale(1.1);
      }

      :host(:not(.invert)) {
        background-image: linear-gradient(103deg, #0000 60%, #111 75%);
      }

      .reset {
        transform: scale(0.9) translateX(-8%);
      }

      :host(.invert) .reset {
        transform: scale(0.9) translateX(8%);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="reset container">
      <slot></slot>
    </div>
    `}}customElements.define("psp-side",n);class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        width: 90%;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        place-items: center;
        position: relative;
        height: 100%;
      }

      .button {
        width: 30px;
        height: 25px;
        background: var(--frame-color);
        display: flex;
        justify-content:center;
        align-items: center;
        font-size: 12px;
        color: #aaa;
        border-radius: 5px;
      }

      .left,
      .right {
        width: 23px;
        height: 30px;
      }

      .up {
        border-top: 2px solid #222;
        border-left: 2px solid #111;
      }

      .left {
        border-top: 2px solid #111;
        border-left: 2px solid #222;
      }

      .right {
        border-top: 2px solid #222;
        border-right: 2px solid #111;
      }

      .down {
        border-left: 2px solid #111;
        position: relative;
      }

      .down::after {
        content: "";
        display: block;
        width: 10px;
        height: 20px;
        position: absolute;
        border-left: 2px solid #222;
        transform: translate(-5px, -14px) rotate(45deg);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${i.styles}</style>
    <div class="container">
      <div class="empty"></div>
      <div class="up button">\u25B3</div>
      <div class="empty"></div>
      <div class="left button">\u25C1</div>
      <div class="empty"></div>
      <div class="right button">\u25B7</div>
      <div class="empty"></div>
      <div class="down button">\u25BD</div>
      <div class="empty"></div>
    </div>`}}customElements.define("psp-cross",i);class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: flex;
        justify-content: center;
      }

      .pad {
        --size: 35px;

        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        background: linear-gradient(to right, #062527, #000);
        transform: translate(-5px, -5px);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${a.styles}</style>
    <div class="pad"></div>`}}customElements.define("psp-pad",a);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: flex;
        flex-direction: column;
        width: 90%;
        height: 100%;
        transform: translateX(-5%);
      }

      .logo {
        font-family: "Plation";
        font-size: 50px;
        display: flex;
        transform: translate(-5px, -5px) scale(0.35);
      }

      .p {
        color: #ccc;
        transform: skewY(20deg) translateZ(40px) translateX(-4px) translateY(-7px);
        position: relative;
        font-size: 60px;
        perspective: 2000px;
        z-index: 10;
      }

      .s {
        position: absolute;
        z-index: 5;
        width: 58px;
        font-size: 70px;
        perspective: 1000px;
        transform: translateX(10px) skewX(381deg) skewY(355deg) rotateX(65deg) rotateY(12deg) rotateZ(308deg) translateX(0) translateY(-26px) translateZ(-2px) scaleX(1.5) scaleY(1);
      }

      psp-cross {
        transform: translate(0, -15px)
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
    <div class="logo">
      <span class="p">P</span>
      <span class="s">S</span>
    </div>
    <psp-cross></psp-cross>
    <psp-pad></psp-pad>
    `}}customElements.define("psp-left-contents",d);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: block;
        width: 100%;
      }

      .container {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-around;
      }

      .led {
        font-family: Arial, sans-serif;
        font-weight: bold;
        font-size: 10px;
      }

      .bulb {
        --size: 6px;

        display: block;
        width: var(--size);
        height: var(--size);
        background: green;
        border-radius: 50%;
        box-shadow: 0 0 5px 2px #0f0;
      }

      .power {
        display: flex;
        align-items: center;
        gap: 0 5px;
        color: green;
        transform: translateX(-10px);
      }

      .hold {
        transform: translateX(-20px);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <div class="container">
      <div class="power led">POWER <span class="bulb"></span></div>
      <div class="hold led">HOLD</div>
    </div>`}}customElements.define("psp-leds",l);class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        width: 100%;
        height: 100px;
        display: block;
      }

      .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        place-items: center;
        position: relative;
        height: 100%;
        opacity: 0.6;
      }

      .button {
        width: 25px;
        height: 25px;
        background: var(--frame-color);
        border-radius: 50%;
        border-top: 1px solid #fff;
        border-left: 1px solid #fff;
        border-right: 1px solid #222;
        border-bottom: 1px solid #222;
        display: flex;
        justify-content:center;
        align-items: center;
      }

      .square {
        font-size: 20px;
        padding-bottom: 5px;
        box-sizing: border-box;
      }

      .cross {
        font-size: 12px;
      }

      .circle {
        font-size: 12px;
        line-height: 40%;
      }

      .main-circle {
        --size: 70%;
        position: absolute;
        width: var(--size);
        height: var(--size);
        border: 1px solid #fff;
        border-radius: 50%;
        border-left: 1px solid #333;
        border-bottom: 1px solid #333;
        z-index: -1;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div class="container">
      <div class="empty"></div>
      <div class="triangle button">\u25B3</div>
      <div class="empty"></div>
      <div class="square button">\u25A1</div>
      <div class="empty"></div>
      <div class="circle button">\u25EF</div>
      <div class="empty"></div>
      <div class="cross button">\u2715</div>
      <div class="empty"></div>
      <div class="main-circle"></div>
    </div>`}}customElements.define("psp-buttons",p);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: flex;
        flex-direction: column;
        gap: 10px 0;
        width: 90%;
        height: 100%;
        transform: translateX(25%);
      }

      .brand {
        font-family: BioRhyme;
        text-transform: uppercase;
        font-size: 13px;
        transform: scale(1.1, 0.95) translateX(15px);
        color: #b6cac9;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
    <div class="brand">Sony</div>
    <psp-buttons></psp-buttons>
    <psp-leds></psp-leds>
    `}}customElements.define("psp-right-contents",c);class f extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
      }

      span {
        border-top: 1px solid #333;
        border-left: 1px solid #222;
        border-radius: 10% 10% 50% 50% / 10% 10% 70% 70%;
        padding: 3px 5px;
        font-size: 7px;
      }
    `}connectedCallback(){this.text=this.getAttribute("text"),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${f.styles}</style>
    <span>${this.text}</span>
    `}}customElements.define("psp-triangle-button",f);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
      }

      span {
        border-top: 1px solid #222;
        border-left: 1px solid #333;
        border-radius: 40%;
        padding: 1px 6px;
      }
    `}connectedCallback(){this.text=this.getAttribute("text"),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${h.styles}</style>
    <span>${this.text}</span>
    `}}customElements.define("psp-round-button",h);class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        font-family: Arial, sans-serif;
        font-size: 10px;
        color: #fff;
        line-height: 240%;
      }

      .container {
        transform: translate(0, 15px);
        background: var(--frame-color);
        display: grid;
        gap: 0 15px;
        grid-template-columns: repeat(9, 1fr);
        padding-left: 10px;
      }

      .logo {
        font-family: "BTSEPS2";
        font-size: 28px;
        line-height: 60%;
        color: #ccc;
        letter-spacing: 2px;
      }

      .volume {
        display: flex;
        gap: 0 5px;
        font-size: 8px;
      }

      .group {
        display: flex;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${u.styles}</style>
    <div class="container">
      <psp-triangle-button text="HOME"></psp-triangle-button>
      <div class="volume">
        <psp-round-button text="-"></psp-round-button>
        <span>VOL</span>
        <psp-round-button text="+"></psp-round-button>
      </div>
      <div class="logo">PSP</div>
      <div class="group">
        <psp-round-button text="\u25A2"></psp-round-button>
        <psp-round-button text="\u266A"></psp-round-button>
      </div>
      <div class="group">
        <psp-triangle-button text="SELECT"></psp-triangle-button>
        <psp-triangle-button text="START"></psp-triangle-button>
      </div>
    </div>`}}customElements.define("psp-bottom-contents",u);class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .screen {
        width: 98%;
        height: 85%;
        background-color: blueviolet;
        background-image: linear-gradient(39deg, #0003 50%, transparent 50.25%);
        box-shadow: 0 0 25px 5px #0009 inset;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${g.styles}</style>
    <div class="screen">

    </div>`}}customElements.define("psp-screen",g);class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --frame-color: black;
        --trigger-color: linear-gradient(#aaa5 45%, #4445 75%);
      }

      .container {
        display: grid;
        grid-template-rows: 25px 200px 25px;
        width: 565px;
        height: 250px;
        filter: drop-shadow(3px 3px 10px #0006);
      }

      .middle {
        display: grid;
        grid-template-columns: 115px 335px 115px;
        z-index: 5;
      }

      :is(.left, .right) {
        overflow: hidden;
      }

      .center {
        background: var(--frame-color);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${m.styles}</style>
    <div class="container">
      <div class="top">
        <psp-frame></psp-frame>
      </div>
      <div class="middle">
        <div class="left">
          <psp-side class="invert">
            <psp-left-contents></psp-left-contents>
          </psp-side>
        </div>
        <div class="center">
          <psp-screen></psp-screen>
        </div>
        <div class="right">
          <psp-side>
            <psp-right-contents></psp-right-contents>
          </psp-side>
        </div>
      </div>
      <div class="bottom">
        <psp-frame class="invert">
          <psp-bottom-contents></psp-bottom-contents>
        </psp-frame>
      </div>
    </div>`}}customElements.define("console-psp",m);
