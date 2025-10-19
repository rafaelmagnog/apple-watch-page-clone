const imagemVisualizacao = document.querySelector("#visualizacao img");
const tituloProduto = document.querySelector("h1");
const nomeCorSelecionada = document.querySelector("#nome-cor-selecionada");
const imagemMiniatura0 = document.querySelector('[for="0-imagem"] img ');
const imagemMiniatura1 = document.querySelector('[for="1-imagem"] img ');
const imagemMiniatura2 = document.querySelector('[for="2-imagem"] img ');

const opcoesTamanho = ["41 mm", "45 mm"];
const opcoesCores = [
  "Verde-cipreste",
  "Azul-inverno",
  "Meia-noite",
  "Estelar",
  "Rosa-claro",
];

let numTamanhoSelecionado = 1;
let numImagemSelecionada = 1;
let numCorSelecionada = 1;

function atualizarCorSelecionada() {
  const opcaoCorSelecionada = document
    .querySelector('[name="opcao-cor"]:checked')
    .id.charAt(0);

  numCorSelecionada = opcaoCorSelecionada;

  const nomeCor = opcoesCores[numCorSelecionada];

  tituloProduto.innerText = `Pulseira loop esportiva ${nomeCor.toLowerCase()} para caixa de ${
    opcoesTamanho[numTamanhoSelecionado]
  }`;

  nomeCorSelecionada.innerText = `Cor - ${nomeCor}`;

  imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-${nomeCor.toLowerCase()}/imagem-${numImagemSelecionada}.jpeg`;
  imagemMiniatura0.src = `./imagens/opcoes-cores/imagens-${nomeCor.toLowerCase()}/imagem-0.jpeg`;
  imagemMiniatura1.src = `./imagens/opcoes-cores/imagens-${nomeCor.toLowerCase()}/imagem-1.jpeg`;
  imagemMiniatura2.src = `./imagens/opcoes-cores/imagens-${nomeCor.toLowerCase()}/imagem-2.jpeg`;
}

function atualizarTamanho() {
  const opcaoTamanhoSelecionado = document
    .querySelector('[name="opcao-tamanho"]:checked')
    .id.charAt(0);

  numTamanhoSelecionado = opcaoTamanhoSelecionado;

  const tamanhoCaixa = opcoesTamanho[numTamanhoSelecionado];

  console.log(tamanhoCaixa);

  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[
    numCorSelecionada
  ].toLowerCase()} para caixa de ${tamanhoCaixa}`;

  tamanhoCaixa === "41 mm"
    ? imagemVisualizacao.classList.add("caixa-pequena")
    : imagemVisualizacao.classList.remove("caixa-pequena");
}

function atualizarImagemSelecionada() {
  const opcaoImagemSelecionada = document
    .querySelector('[name="opcao-imagem"]:checked')
    .id.charAt(0);

  numImagemSelecionada = opcaoImagemSelecionada;

  imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-${opcoesCores[
    numCorSelecionada
  ].toLowerCase()}/imagem-${numImagemSelecionada}.jpeg`;
}
