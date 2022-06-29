class PSPTriangleButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
      }

      span {
        border-top: 1px solid #333;
        border-left: 1px solid #222;
        border-radius: 10% 10% 50% 50% / 10% 10% 70% 70%;
        padding: 3px 5px;
        font-size: 7px;
      }
    `;
  }

  connectedCallback() {
    this.text = this.getAttribute("text");
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PSPTriangleButton.styles}</style>
    <span>${this.text}</span>
    `;
  }
}

customElements.define("psp-triangle-button", PSPTriangleButton);
