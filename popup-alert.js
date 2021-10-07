import { create } from "https://js.sabae.cc/stdcomp.js";

class PopupAlert extends HTMLElement {
  constructor(s, callback) {
    super();
    const txt = s || this.innerHTML;
    this.innerHTML = "";
    const c = create("div", this, "base");
    create("div", c, "message").textContent = txt;
    const btn = create("button", c, "button");
    btn.textContent = "OK";
    const close = () => {
      this.parentElement.removeChild(this);
      callback();
    };
    btn.onclick = () => close();
    this.onclick = (e) => {
      if (e.target == this) {
        close();
      }
    }
  }
  static show(s) {
    return new Promise((resolve) => {
      document.body.appendChild(new PopupAlert(s, resolve));
    });
  }
}

customElements.define("popup-alert", PopupAlert);

export { PopupAlert };
