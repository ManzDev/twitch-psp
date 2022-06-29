class PSPButtons extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PSPButtons.styles}</style>
    <div class="container">
      <div class="empty"></div>
      <div class="triangle button">△</div>
      <div class="empty"></div>
      <div class="square button">□</div>
      <div class="empty"></div>
      <div class="circle button">◯</div>
      <div class="empty"></div>
      <div class="cross button">✕</div>
      <div class="empty"></div>
      <div class="main-circle"></div>
    </div>`;
  }
}

customElements.define("psp-buttons", PSPButtons);
