class PSPPad extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PSPPad.styles}</style>
    <div class="pad"></div>`;
  }
}

customElements.define("psp-pad", PSPPad);
