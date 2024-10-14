   // Mostra modal de cookies se ainda não existir no local storage
   if(!localStorage.getItem('cookiesStorage')){
    $("#exampleModalCenter").modal('show');
   }

   const cookies = document.querySelectorAll('.event-cookie');

   cookies.forEach(e=>{
    e.addEventListener('click', function(){
      localStorage.setItem('cookiesStorage', true);
    })
   })

   const btnVoltar = document.querySelector('.btn-voltar');
   btnVoltar.addEventListener('click', () => {
       window.history.back();
   })
   
   
   let clicarMostrar = (caixaa, caixab) => {
       const caixa1 = document.querySelector(caixaa);
       const caixa2 = document.querySelector(caixab);
       caixa1.addEventListener("click", () => {
           caixa2.style = `display: flex;`;
       })
   }

   function linksPaginas(classe, endereco) {
    const link1 = document.querySelector(classe);
    link1.addEventListener('click', () => {
      window.location.href = endereco;
    })
  }

  // function linksDuasRetas(classe, endereco) {
  //   const link1 = document.querySelector(classe);
  //   link1.addEventListener('click', () => {
  //     window.location.href = endereco;
  //   })
  // }


