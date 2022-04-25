// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ----------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = Number(prompt("Qual é a altura? "))
const largura =Number(prompt("Qual é a largura? "))
console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = Number(prompt("Qual é o ano atual? "))
let anoNascimento =Number(prompt("Qual é seu ano de nascimento? "))
let idade = anoAtual - anoNascimento
console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

const imc = peso / ( altura * altura )
return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("Qual é o seu nome? ")
const idade = Number(prompt("Qual é sua idade? "))
const email = prompt("Qual é seu email? ")
console.log("Meu nome é " + nome +", tenho " + idade+ " anos, e o meu email é " + email+("."))
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cor1 = prompt("Digite sua cor favorita: ")
let cor2 = prompt("Digite outra cor favorita: ")
let cor3 = prompt("Digite outra cor favorita: ")
let coresFavoritas = [cor1, cor2, cor3]
console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
let palavra = string.toUpperCase()
return palavra

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let ingressos = (custo / valorIngresso)
return ingressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
string1 = (string1.length)
string2 = (string2.length)
return string1 === string2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const primeiro = array[0]
return primeiro

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
let ultimoElemento = array.length
return array[ultimoElemento - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
/*
let ultimo = (array.length - 1)
array.splice( ultimo , 1, array.splice(0 , 1)[0])
return array
*/

  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
string1 = string1.toLowerCase()
string2 = string2.toLowerCase()
  return string1 === string2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  
let anoAtual = Number(prompt("Digite o ano atual: "))
let anoNascimento = Number(prompt("Digite o seu ano de nascimento: "))
let emissaoRg = Number(prompt("Digite o ano de emissão do seu RG: "))
const idade = anoAtual - anoNascimento
const tempoEmissao = anoAtual - emissaoRg
//const terceiraFaixa = (idade >= 20 || )
const validacao = ((idade <= 20 && (tempoEmissao >= 5)) || (idade > 20 || idade <= 50) &&  (emissaoRg >= 10 ) || (idade > 51 && emissaoRg >= 15))
return validacao

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

const anoBisexto = (ano % 400 == 0 || (ano % 4 === 0 && ano % 100 > 0))
return anoBisexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

const maiorIdade = prompt("Você tem mais de 18 anos? ")
const ensinoMedio = prompt("Você possui ensino médio completo? ")
const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
const validacao = ((maiorIdade === "sim") && (ensinoMedio === "sim")) && (disponibilidade === "sim")
console.log(validacao)
return validacao
}