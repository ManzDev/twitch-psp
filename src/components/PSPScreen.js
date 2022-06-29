class PSPScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .screen {
        width: 98%;
        height: 85%;
        background-color: blueviolet;
        background-image: linear-gradient(39deg, #0003 50%, transparent 50.25%);
        box-shadow: 0 0 25px 5px #0009 inset;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PSPScreen.styles}</style>
    <div class="screen">

    </div>`;
  }
}

customElements.define("psp-screen", PSPScreen);
