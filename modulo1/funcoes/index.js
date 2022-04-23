///////// ECERCÍCIOS DE INTERPRETAÇÃO

////////Exercício 1
/*
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a. 10
   50

b. provavelmente faria a mesma conta, mas sem escrever no console.
*/

//////////Exercício 2

/*

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Essa função transforma todo o texto para minusculo e verifica se no texto tem a palavra cenoura.
Pode ser usado para validar dados.
b. true
   true
   true
*/

///////////////EXERCÍCIOS DE ESCRITA DE CÓDIGO

//////Exercício 1
// A

/*
imprimeApresentacao = function () {
 
minhaApresentacao = ("Eu sou Henrique, tenho 27 anos, moro em São Paulo e sou estudante.")
console.log(minhaApresentacao)
}

imprimeApresentacao()
*/

// B

/*
function informacoesPessoais(nome, idade, endereco, profissao){

const imprimeInformacoes = ("Eu sou " + nome + ", tenho " + idade + ", moro em "+ endereco + " e sou " + profissao + ".")

console.log(imprimeInformacoes)

return informacoesPessoais
}

informacoesPessoais("Mayara", "24", "Ilhabela", "atendente")
*/

////////Exercício 2

// A

/*
function soma(num1, num2){
const somar = num1 + num2
console.log(somar)
return somar 

}

soma(1,2)

*/

// B

/*
function booleano(num1, num2){
igualOuMaior = num1 >= num2
console.log(igualOuMaior)
return booleano

}
booleano(5, 2)
*/

// C

/*
function numPar(numero){
const par = (numero % 2) === 0

    return par

}
numPar(2)
*/

// D
/*
function frase(string){
const fraseRecebida = (string.length, string.toUpperCase())
console.log(fraseRecebida) 
return frase

}
frase("Eu estou cansado!")
*/

///////////////Exercício 3


/*
function adicao(num1,num2){
console.log("Soma: ", num1 + num2)
return adicao
}

function subtracao(num1,num2){
console.log("Diferença: ", num1 - num2)

}

function multiplicacao(num1,num2){
console.log("MULtiplicação: ", num1 * num2)
    
}

function divisao(num1,num2){
console.log("Divisão ", num1 / num2)
    
}


const operacoes = Number(prompt("digite um número: "))
const operacoes2 = Number(prompt("digite outro número: "))

adicao(operacoes, operacoes2)
subtracao(operacoes, operacoes2)
multiplicacao(operacoes, operacoes2)
divisao(operacoes, operacoes2)
*/