class PSPFrame extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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

    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PSPFrame.styles}</style>
    <div class="left trigger"></div>
    <div class="left corner"></div>
    <div class="reset frame"><slot></slot></div>
    <div class="right corner"></div>
    <div class="right trigger"></div>
    `;
  }
}

customElements.define("psp-frame", PSPFrame);
