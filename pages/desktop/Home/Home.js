export class Home extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="${new URL('./Home.css', import.meta.url).href}">
      <main>
        <app-carousel>
          <img "carousel-item" src="../../../assets/images/GTA6.jpg" alt="GTA 6 banner" > 
          <img "carousel-item" src="../../../assets/images/SpiderMan2.webp" alt="Spider Man 2 banner" > 
          <img "carousel-item" src="../../../assets/images/CrimsonDesert.jpg" alt="Crimson Desert banner" > 
        </app-carousel>

        <div class="cards">
          <h1>Em alta</h1>
            <div class="cards-grid">
               <app-card>
                <img class="img-card" src="../../../assets/images/GTA6.jpg" alt="GTA 6 banner" height="350" width="310"> 
                <p>Teste</p>
              </app-card>

               <app-card>
                <img class="img-card" src="../../../assets/images/GTA6.jpg" alt="GTA 6 banner" height="350" width="310"> 
                <p>Teste</p>
              </app-card>

               <app-card>
                <img class="img-card" src="../../../assets/images/GTA6.jpg" alt="GTA 6 banner" height="350" width="310"> 
                <p>Teste</p>
              </app-card>
               <app-card>
                <img class="img-card" src="../../../assets/images/GTA6.jpg" alt="GTA 6 banner" height="350" width="310"> 
                <p>Teste</p>
              </app-card>
               <app-card>
                <img class="img-card" src="../../../assets/images/GTA6.jpg" alt="GTA 6 banner" height="350" width="310"> 
                <p>Teste</p>
              </app-card>
          </div>
        </div>

        <div class="cards">
          <h1>Promoções</h1>
            <div class="cards-grid">
              <app-card>
                <img class="img-card" src="../../../assets/images/GTA6.jpg" alt="GTA 6 banner" height="350" width="310"> 
                <p>Teste</p>
              </app-card>
              <app-card>
                <img class="img-card" src="../../../assets/images/SpiderMan2.webp" alt="GTA 6 banner" height="350" width="310"> 
                <p>Teste</p>
              </app-card>
              <app-card>
                <img class="img-card" src="../../../assets/images/CrimsonDesert.jpg" alt="GTA 6 banner" height="350" width="310"> 
                <p>Teste</p>
              </app-card>
              <app-card>
                <img class="img-card" src="../../../assets/images/GTA6.jpg" alt="GTA 6 banner" height="350" width="310"> 
                <p>Teste</p>
              </app-card>
              <app-card>
                <img class="img-card" src="../../../assets/images/GTA6.jpg" alt="GTA 6 banner" height="350" width="310"> 
                <p>Teste</p>
              </app-card>
          </div>
        </div>

        <div class="cards">
          <h1>Lançamentos</h1>
            <div class="cards-grid">
               <app-card>
                <img class="img-card" src="../../../assets/images/GTA6.jpg" alt="GTA 6 banner" height="350" width="310"> 
                <p>Teste</p>
              </app-card>

               <app-card>
                <img class="img-card" src="../../../assets/images/GTA6.jpg" alt="GTA 6 banner" height="350" width="310"> 
                <p>Teste</p>
              </app-card>

               <app-card>
                <img class="img-card" src="../../../assets/images/GTA6.jpg" alt="GTA 6 banner" height="350" width="310"> 
                <p>Teste</p>
              </app-card>
               <app-card>
                <img class="img-card" src="../../../assets/images/GTA6.jpg" alt="GTA 6 banner" height="350" width="310"> 
                <p>Teste</p>
              </app-card>
               <app-card>
                <img class="img-card" src="../../../assets/images/GTA6.jpg" alt="GTA 6 banner" height="350" width="310"> 
                <p>Teste</p>
              </app-card>
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