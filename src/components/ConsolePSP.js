import "./PSPFrame.js";
import "./PSPSide.js";
import "./PSPLeftContents.js";
import "./PSPRightContents.js";
import "./PSPBottomContents.js";
import "./PSPScreen.js";

class ConsolePSP extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ConsolePSP.styles}</style>
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
    </div>`;
  }
}

customElements.define("console-psp", ConsolePSP);
