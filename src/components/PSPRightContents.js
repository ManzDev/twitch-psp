import "./PSPLeds.js";
import "./PSPButtons.js";

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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PSPRightContents.styles}</style>
    <div class="brand">Sony</div>
    <psp-buttons></psp-buttons>
    <psp-leds></psp-leds>
    `;
  }
}

customElements.define("psp-right-contents", PSPRightContents);
