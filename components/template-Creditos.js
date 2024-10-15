let creditosContainer = document.querySelector('#creditos');

let inicioCreditos = document.createElement("div");
inicioCreditos.classList.add("modal-dialog");
inicioCreditos.classList.add("modal-dialog-centered");
inicioCreditos.setAttribute('role', 'document');

creditosContainer.appendChild(inicioCreditos);

let creditosContent = document.createElement("div");
creditosContent.classList.add("modal-content");

inicioCreditos.appendChild(creditosContent);

let creditosBody = document.createElement("div");
creditosBody.classList.add("modal-body");
creditosBody.innerHTML = `
  <h6>UNIVERSIDADE VIRTUAL DO ESTADO DE SÃO PAULO – UNIVESP</h6>
  <p><span class="funcao">Presidente</span>Marcos Augusto Borges</p>
  <p><span class="funcao">Diretora Acadêmica</span>Lubienska Cristina Lucas Jaquiê Ribeiro</p>

  <h6>Equipe</h6>
  <p><span class="funcao">Docente responsável</span>Glauce Barbosa Verão</p>
  <p><span class="funcao">Coordenação</span>Wesley de Souza Lima</p>
  <p><span class="funcao">Roteirização e Design Instrucional</span>Raquel Farias dos Santos, Marcos Rogério de Souza e Glauce Barbosa Verão</p>
  <p><span class="funcao">Ilustração e Layout</span>Pedro Belem</p>
  <p><span class="funcao">Programação</span>Érika Morais Xavier</p>
  <p><span class="funcao">Revisão</span>Juliana Nascimento Costa</p>
`;

let creditosFooter = document.createElement("div");
creditosFooter.classList.add("modal-footer");
creditosFooter.innerHTML = `
  <p>
  <!-- Junho/2024 -->
  </p>
  <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
`;

creditosContent.appendChild(creditosBody);
creditosContent.appendChild(creditosFooter);
