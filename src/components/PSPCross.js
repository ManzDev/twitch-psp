class PSPCross extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PSPCross.styles}</style>
    <div class="container">
      <div class="empty"></div>
      <div class="up button">△</div>
      <div class="empty"></div>
      <div class="left button">◁</div>
      <div class="empty"></div>
      <div class="right button">▷</div>
      <div class="empty"></div>
      <div class="down button">▽</div>
      <div class="empty"></div>
    </div>`;
  }
}

customElements.define("psp-cross", PSPCross);
