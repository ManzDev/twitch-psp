class PSPRoundButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
      }

      span {
        border-top: 1px solid #222;
        border-left: 1px solid #333;
        border-radius: 40%;
        padding: 1px 6px;
      }
    `;
  }

  connectedCallback() {
    this.text = this.getAttribute("text");
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PSPRoundButton.styles}</style>
    <span>${this.text}</span>
    `;
  }
}

customElements.define("psp-round-button", PSPRoundButton);
