let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; 

// função que exibe coisas na tela
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;    
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

// função sem parâmetro e sem retorno
function verificarChute() {
    let chute = document.querySelector("input") .value;   // função para pegar um valor

    if (chute == numeroSecreto) {
      exibirTextoNaTela ("h1", "acertou miseravi!");
      let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}! Tu é burrinho hein chaparral`;
      exibirTextoNaTela("p", mensagemTentativas);
      document.getElementById("reiniciar").removeAttribute("disabled");  //desabilidar o atributo desabilitar no html, logo habilitando o botão
    } else {
      if (chute>numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor que o chute");
    } else {
      if (chute<numeroSecreto) {
        exibirTextoNaTela("p", "O número secreto é maior que o chute");
      }
    }
      tentativas++;
      limparCampo();
  }

}

function limparCampo() {
  chute = document.querySelector("input");   // serve para pegar apenas o campo
  chute.value = " ";  // ação de limpar o campo
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

// O parseInt transforma em número inteiro. O return retorna o número gerado para a variável criada para guardá-lo
function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);  //função para gerar número aleatório. 
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
      listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) { //pede para que um novo número seja gerado caso já esteja na lista
      return gerarNumeroAleatorio();
    } else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log (listaDeNumerosSorteados);
      return numeroEscolhido;
    }
}













// EXERCÍCIOS

function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let media = calcularMedia(4, 7, 10);
  console.log(media);


function calcularDobro(numero) {
    return numero * 2;
  }
  
  let resultadoDobro = calcularDobro(5);
  console.log(resultadoDobro);


function calculaIMC(altura, peso){
    return peso / (altura * altura);
  }
  let ResultadoImc = calculaIMC(2, 100);
  console.log(ResultadoImc);
  



  function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i = i + 1) {
      fatorial = fatorial * i;
    }
  /*
  numero=3
  fatorial=1
  i=2
  i <= numero
  2 <= 3
  fatorial = 1 * 2
  fatorial = 2

  i = 3
  3 <= 3
  fatorial = 2 * 3
  fatorial = 5
  i=4
  4 <= 3
  fim
  */
    return fatorial;
  }
  
  // Exemplo de uso
  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);