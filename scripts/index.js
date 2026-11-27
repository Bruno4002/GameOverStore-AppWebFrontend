import { Header } from '../components/header/index.js';
import { Footer } from '../components/footer/index.js';
import { Card } from '../components/card/index.js';
import { Carousel } from '../components/carousel/index.js';
import { Carouselinfo } from '../components/carousel-info/index.js';
import { Article } from '../components/article/index.js';
import { Login } from '../pages/desktop/login/Login.js';
import { Home } from '../pages/desktop/Home/index.js';
import { InfoProduto } from '../pages/desktop/Info-Produto/Info-Produto.js';

// Central Registration of Web Components
customElements.define('app-header', Header);
customElements.define('app-footer', Footer);
customElements.define('app-card', Card);
customElements.define('app-carousel', Carousel);
customElements.define('app-carouselinfo', Carouselinfo);
customElements.define('app-article', Article);

// Pages
customElements.define('page-login', Login);
customElements.define('page-home', Home);
customElements.define('info-produto', InfoProduto);

// Roteador
const app = document.getElementById('app');

const routes = {
  '': '<page-login></page-login>',
  '#/': '<page-home></page-home>',
  '#/produto': '<info-produto></info-produto>',
};

function router() {
  app.innerHTML = routes[window.location.hash] || '<page-home></page-home>';
//   window.scrollTo(0, 0);
}

window.addEventListener('hashchange', router);
router();