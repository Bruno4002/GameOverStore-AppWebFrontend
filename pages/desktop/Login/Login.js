export class Login extends HTMLElement {
  connectedCallback() {
    document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("app-header").style.display = "none";
    document.querySelector("app-footer").style.display = "none";
});
    this.innerHTML = `
      <main>
      
      </main>
    `;
  }
}