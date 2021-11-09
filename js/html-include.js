class EnvContent extends HTMLElement {

  async connectedCallback() {
    const key = this.getAttribute("key");
    if (!key) {
      throw new Error("No key attribute given.");
    }
    this.innerHTML = env[key]
  }
}

window.customElements.define("env-content", EnvContent);
