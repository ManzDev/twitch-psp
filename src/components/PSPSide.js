class PSPSide extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PSPSide.styles}</style>
    <div class="reset container">
      <slot></slot>
    </div>
    `;
  }
}

customElements.define("psp-side", PSPSide);
