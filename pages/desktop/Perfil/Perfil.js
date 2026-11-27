export class Perfil extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="${new URL('./Perfil.css', import.meta.url).href}">
      <main>
      <Perfil Jogador height="50" width="50">{
      nome: 'Player One',
      tag: '#BR1988',
  }
  }
          <img  src="../../../assets/images/perfil_jogador.png" alt="Game banner" width="100px">    




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