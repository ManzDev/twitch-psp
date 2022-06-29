class PSPLeds extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PSPLeds.styles}</style>
    <div class="container">
      <div class="power led">POWER <span class="bulb"></span></div>
      <div class="hold led">HOLD</div>
    </div>`;
  }
}

customElements.define("psp-leds", PSPLeds);
