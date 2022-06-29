import "./PSPCross.js";
import "./PSPPad.js";

class PSPRightContents extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PSPRightContents.styles}</style>
    <div class="logo">
      <span class="p">P</span>
      <span class="s">S</span>
    </div>
    <psp-cross></psp-cross>
    <psp-pad></psp-pad>
    `;
  }
}

customElements.define("psp-left-contents", PSPRightContents);
