import "./PSPTriangleButton.js";
import "./PSPRoundButton.js";

class PSPBottomContents extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PSPBottomContents.styles}</style>
    <div class="container">
      <psp-triangle-button text="HOME"></psp-triangle-button>
      <div class="volume">
        <psp-round-button text="-"></psp-round-button>
        <span>VOL</span>
        <psp-round-button text="+"></psp-round-button>
      </div>
      <div class="logo">PSP</div>
      <div class="group">
        <psp-round-button text="▢"></psp-round-button>
        <psp-round-button text="♪"></psp-round-button>
      </div>
      <div class="group">
        <psp-triangle-button text="SELECT"></psp-triangle-button>
        <psp-triangle-button text="START"></psp-triangle-button>
      </div>
    </div>`;
  }
}

customElements.define("psp-bottom-contents", PSPBottomContents);
