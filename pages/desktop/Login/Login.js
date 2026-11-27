export class Login extends HTMLElement {
  connectedCallback() {
    document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("app-header").style.display = "none";
    document.querySelector("app-footer").style.display = "none";
});
    this.innerHTML = `
      <main>
      <img src="assets/images/Logo.png" alt="Logo da loja GameOverStore">
	<div>
	<label for="email">E-mail</label>
	<input type="email" placeholder="Digite um email" id="email" required>
	<label for="senha">Senha</label>
	<input id="inputsenha"type="password" placeholder="Digite sua senha" id="senha" required>
	<input type="submit" value="Entrar">
	<button></button>
	</div>
      </main>
    `;
  }
}
