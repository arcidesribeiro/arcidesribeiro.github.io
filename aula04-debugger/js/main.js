//Definição das variáveis
//Conexão com os elementos HTML
//Campos de entrada
let entradas = document.querySelectorAll('input');
//Botão somar
let btnSomar = document.querySelector('#btnSomar');
//Parágrafo de resposta
let resposta = document.querySelector('.resposta')
 
//Definindo o número 1 e número 2
let num1 = entradas[0];
let num2 = entradas[1];
 
//Funções para pegar os valores
function pegarNum1() {
   return num1.value;
}
function pegarNum2() {
   return num2.value;
}
 
//Verificando se as entradas estão vazias
function verificarEntradasVazias() {
   //Se num1 ou num2 estiverem vazios
   if(pegarNum1() === '' || pegarNum2() === ''){
       return true; //Retorna verdadeiro
   }else{ //Senão
       return false; //Retorna Falso
   }
}
 
//Função Somar
function somar(){
    if(verificarEntradasVazias()){
        atualizaResposta();
    }else{
        atualizaResposta();
    }
}

//Escuta de evento click do mouse
btnSomar.addEventListener('click' ,somar);

//Atualizar o campo de resposta de acordo com a função
function atualizaResposta(){
    if(verificarEntradasVazias()){
        resposta.classList.remove('certa');
        resposta.classList.add('errada');
        //debugger;
        resposta.textContent = "Erro: Preencha os dois números!"
    }else{
        resposta.classList.remove('errada');
        resposta.classList.add('certa');
        let numero1 = pegarNum1();
        numero1 = parseFloat(numero1);
        let numero2 = pegarNum2();
        numero2 = parseFloat(numero2);
        let soma = numero1 + numero2;
        resposta.textContent = `${numero1} + ${numero2} = ${soma}`;
    }
}