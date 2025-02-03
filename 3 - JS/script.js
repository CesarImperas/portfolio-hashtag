// INTRODUÇÃO AO JAVASCRIPT

/* Comandos básicos 

// console.log("Hello, world!");
// console.log(document.querySelectorAll(".sobre")); -> NodeList [h2.sobre]
// console.log(document.querySelector(".sobre")); -> <h2 class="sobre">Sobre mim</h2>
*/

/* Comandos mais avançados de modificar elementos do HTML e estilização

const elemTexto = document.querySelector(".sobre");

// Adicionar de maneira dinâmica uma classe de estilização num elemento
elemTexto.classList.toggle("verde");

// Função em JS
function alterarCorSobreMim() {
  console.log("Você clicou no texto Sobre mim");
  // Pop-up
  // alert("Você clicou no texto Sobre mim");
  elemTexto.classList.toggle("verde");
  elemTexto.classList.toggle("azul");
  elemTexto.textContent = "Sobre mim (clicado)";
}

// Eventos
elemTexto.addEventListener("click", alterarCorSobreMim);
*/

// PROJETO

const elemBotaoInformacoes = document.querySelector(".botao-informacoes");
const elemInformacoes = document.querySelector(".informacoes");
const elemBotaoDark = document.querySelector(".botao-dark");
const elemBotaoLight = document.querySelector(".botao-light");

// Adicionar o evento de clique no botão do rodapé
elemBotaoInformacoes.addEventListener("click", function () {
  console.log("Clicou no botão de informações");
  elemInformacoes.classList.toggle("visivel");

  if (elemInformacoes.classList.contains("visivel")) {
    elemBotaoInformacoes.textContent = "Ocultar Informações";
  } else {
    elemBotaoInformacoes.textContent = "Exibir Informações";
  }
});

// Adicionar o evento de clique nos botões Light/Dark
elemBotaoLight.addEventListener("click", function () {
  document.body.classList.add("light");
});

elemBotaoDark.addEventListener("click", function () {
  document.body.classList.remove("light");
});
