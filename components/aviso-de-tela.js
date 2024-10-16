const avisoDeTela = `<div class="container d-lg-none text-center" id="celular">
      <div class="container">
        <a href="https://univesp.br/" target="_blank">
          <img src="https://apps.univesp.br/common/logo-univesp.svg" alt="Logo da Univesp" width="200px" class="img-responsive center-block" style="margin-top:4rem">
        </a>
      </div>
      <img src="https://apps.univesp.br/common/aviso-tela.gif" alt="Computador Animado" height="117px" width="160px" class="img-responsive center-block" style="margin-top:3rem">
      <div style="margin-top:.5rem; margin-bottom: 80px;">
        <p>
          <span style="font-family:Barlow; color:#fff; font-weight: bold;" size="10rem"><b>OPS!</b></span>
        </p>
        <p>
          <span style="font-family:Verdana;color: #fff; font-weight: bold;" size="3rem">Visualize este recurso em um computador, em janela com largura mínima de 1200px.</span>
        </p>
      </div>
    </div>`;

const classeAvisoDeTela = document.querySelector(".aviso-de-tela");
classeAvisoDeTela.innerHTML = avisoDeTela;