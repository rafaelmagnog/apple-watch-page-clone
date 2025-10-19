const imagemVisualizacao = document.querySelector("#visualizacao img");
const tituloProduto = document.querySelector("h1");

const opcoesTamanho = ["41 mm", "45 mm"];
const opcoesCor = [];

let numTamanhoSelecionado = 1;
let numImagemSelecionada = 1;
let numCorSelecionada = 1;

function atualizarCor() {
  const opcaoCorSelecionada = document
    .querySelector('[name="opcao-cor"]:checked')
    .id.charAt(0);

  numCorSelecionada = opcaoCorSelecionada;

  imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-azul-inverno/imagem-${numImagemSelecionada}.jpeg`;
}

function atualizarTamanho() {
  const opcaoTamanhoSelecionado = document
    .querySelector('[name="opcao-tamanho"]:checked')
    .id.charAt(0);

  numTamanhoSelecionado = opcaoTamanhoSelecionado;

  const tamanhoCaixa = opcoesTamanho[numTamanhoSelecionado];

  console.log(tamanhoCaixa);

  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCor[numCorSelecionada]} para caixa de ${tamanhoCaixa}`;

  tamanhoCaixa === "41 mm"
    ? imagemVisualizacao.classList.add("caixa-pequena")
    : imagemVisualizacao.classList.remove("caixa-pequena");
}

function atualizarImagemSelecionada() {
  const opcaoImagemSelecionada = document
    .querySelector('[name="opcao-imagem"]:checked')
    .id.charAt(0);

  numImagemSelecionada = opcaoImagemSelecionada;

  imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-azul-inverno/imagem-${numImagemSelecionada}.jpeg`;
}

//atualizarTamanho();
