export class InfoProduto extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="${new URL('./Info-Produto.css', import.meta.url).href}">
    <main>

    <div class="main-content">
      <div class="container">
        <div class="carrossel">
          <app-carouselinfo>
            <img "carousel-item" src="../../../assets/images/GTA6.jpg" alt="Game banner">
            <img "carousel-item" src="../../../assets/images/GTA-6-Paisagem.png" alt="Spider Man 2 banner">
            <img "carousel-item" src="../../../assets/images/GTA-6-Prota.jpg" alt="Crimson Desert banner">
          </app-carouselinfo>
          <img class="logo" src="../../../assets/images/GTA-6-Logo.png" alt="Game Logo" width="300">
        </div>
        <div class="info-produto">
          <h1>GTA VI</h1>
          <div>
            <p>⭐ 4,8 | 1,2 mil avaliações | 🎮 Ação • Aventura • Mundo aberto</p>
          </div>
          <div class="container-desc">

            <h3>Explore o vasto continente de Pywel em uma aventura épica e inesquecível.</h3>
            <p>Embarque em uma jornada por um mundo aberto deslumbrante, repleto de histórias, batalhas épicas e
              escolhas
              que moldam o seu destino.</p>

          </div>
          <div class="valor">

            <p>R$ 350,55</p>
            <a href="#/home-page"><p class="button">Adicionar ao carrinho</p></a>

          </div>
          <div class="avaliacoes">

            <h2>Avaliação dos clientes</h2>
            <div class="avaliacao">

              <h4>João S.</h4>
              <p>“Gráficos incríveis e uma história muito envolvente. Excelente mundo aberto!”</p>

            </div>
            <div class="avaliacao">

              <h4>João S.</h4>
              <p>“Gráficos incríveis e uma história muito envolvente. Excelente mundo aberto!”</p>

            </div>
            <div class="avaliacao">

              <h4>João S.</h4>
              <p>“Gráficos incríveis e uma história muito envolvente. Excelente mundo aberto!”</p>

            </div>

          </div>
        </div>
      </div>
    </div>


  </main>
        `;
  }
}

// <app-article>
//   <span slot="title">Web Components</span>
//   <span slot="meta">Publicado por: </span>

//   <p>Os Web Components são um conjunto de diferentes tecnologias que permitem a criação de elementos customizados e
//     reutilizáveis — com suas funcionalidades encapsuladas longe do resto do código — e a sua utilização em
//     aplicações web.</p>

//   <h2>Por que usar?</h2>
//   <p>Um dos maiores problemas no desenvolvimento front-end é a colisão de CSS e scripts. O <b>Shadow DOM</b> resolve
//     esse problema encapsulando a estrutura e os estilos.</p>

//   <h2>Templates e Slots</h2>
//   <p>Ao utilizarmos a tag <code>&lt;template&gt;</code>, garantimos que a marcação é processada de forma eficiente
//     na memória do navegador. Já os <code>&lt;slot&gt;</code> nos permitem injetar o conteúdo HTML desejado nos
//     componentes dinamicamente.</p>
// </app-article>