const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="${new URL('./header.css', import.meta.url).href}">
  <header>
    <div class="logo">GAME OVER STORE</div>
    <nav> 
      <div class="menu-icon">☰</div>
      <div class="main-content">
        <ul class="links">
          <li><a href="#home-page">Início</a></li>
          <li><a href="#/carrinho">Carrinho</a></li>
          <li><a href="#/biblioteca">Biblioteca</a></li>
          <li><a href="#/sobre-nos">Sobre Nós</a></li>
          <li><a href="#/perfil">Perfil</a></li>
        </ul>
        <input class="search" type="text" placeholder="Buscar jogos..">
      </div>
        <a href="index.html">
         <img src="../../../assets/images/Logo.png" alt="Logo"  width="140"> 
        </a>
    </nav>
  </header>
`;

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  connectedCallback() {
    this.menuIcon = this.shadowRoot.querySelector('.menu-icon');
    this.links = this.shadowRoot.querySelector('.links');
    this.menuIcon.addEventListener('click', this.handleMenuClick);
  }

  disconnectedCallback() {
    this.menuIcon.removeEventListener('click', this.handleMenuClick);
  }

  handleMenuClick() {
    this.links.classList.toggle('active');
  }
}

export { HeaderComponent };
