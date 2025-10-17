const imagemVisualizacao = document.querySelector('#visualizacao img');
const tituloProduto = document.querySelector('#titulo-produto');
const nomeCorSelecionada = document.querySelector('#nome-cor-selecionada');
const imagemMiniatura0 = document.querySelector('[for="0-imagem"] img')
const imagemMiniatura1 = document.querySelector('[for="1-imagem"] img')
const imagemMiniatura2 = document.querySelector('[for="2-imagem"] img')

const opcoesTamanho = ['41 mm', '45 mm']
const opcoesCores = [
  'Verde-cipreste',
  'Azul-inverno',
  'Meia-noite',
  'Estelar',
  'Rosa-claro',
]

let numImagemSelecionada = 1;
let numtamanhoSelecionado = 1;
let numCorSelecionado = 1;


function atualizarImagemSelecionada() {
  const opcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0);

  numImagemSelecionada = opcaoSelecionada;

  imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-" + opcoesCores[numCorSelecionado].toLowerCase() + "/imagem-" + numImagemSelecionada + ".jpeg";
}

function atualizarTamanho() {
  const opcaoTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0);

  numtamanhoSelecionado = opcaoTamanhoSelecionado;

  const tamanhoCaixa = opcoesTamanho[numtamanhoSelecionado]

  tituloProduto.textContent = 'Pulseira loop esportiva ' + opcoesCores[numCorSelecionado].toLowerCase() + ' para caixa de ' + tamanhoCaixa;

  if (tamanhoCaixa === '41 mm') {
    imagemVisualizacao.classList.add('caixa-pequena')

  } else {
    imagemVisualizacao.classList.remove('caixa-pequena')
  }
}

function atualizarCorSelecionada() {
  const opcaoCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0);
  numCorSelecionado = opcaoCorSelecionada;

  const corSelecionada = opcoesCores[numCorSelecionado];

  tituloProduto.innerHTML = 'Pulseira loop esportiva ' + corSelecionada.toLowerCase() + ' para caixa de ' + opcoesTamanho[numImagemSelecionada]

  nomeCorSelecionada.innerText = 'Cor - ' + corSelecionada

  imagemVisualizacao.src = './imagens/opcoes-cores/imagens-' + corSelecionada.toLowerCase() + '/imagem-' + numImagemSelecionada + '.jpeg';

  imagemMiniatura0.src = './imagens/opcoes-cores/imagens-' + corSelecionada.toLowerCase() + '/imagem-0.jpeg';
  imagemMiniatura1.src = './imagens/opcoes-cores/imagens-' + corSelecionada.toLowerCase() + '/imagem-1.jpeg';
  imagemMiniatura2.src = './imagens/opcoes-cores/imagens-' + corSelecionada.toLowerCase() + '/imagem-2.jpeg';
}         
