/*
exercicio 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

o que será impresso na ordem

a. false

b. false

c. true

d. true

exercicio 2

let primeiroNumero = prompt("Digite um numero!")    supondo que digite 2
let segundoNumero = prompt("Digite outro numero!")  supondo que digite 2

const soma = primeiroNumero + segundoNumero

console.log(soma)

irá imprimir 22

exercicio 3

tem que mudar string para number

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(segundoNumero)
const soma = primeiroNumero + segundoNumero

console.log(soma)

*/

/*                     ESCRITA DE CODIGOS  

exercicio 1

*/
/*

idadeUsuario = prompt("Qual é a sua idade? ")
idadeAmigo = prompt("Qual é a idade do seu melhor amigo ou amiga? ")

idadeUsuario = Number(idadeUsuario)
idadeAmigo = Number(idadeAmigo)

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeAmigo)
console.log("A diferença de idade entre vocês são: ", idadeUsuario - idadeAmigo)

*/

/*
exercicio 2

*/
/*

let numeroPar = prompt("Digite um número par: ")

numeroPar = Number(numeroPar)

console.log("resto da divisão: ", numeroPar % 2)


como está sempre dividindo um numero par por 2 o resultado sempre será 0.
quando colocar um numero impar para dividir por 2 sempre terá o resto da divisão.
*/

/*
exercício 3
*/

/*
idade = prompt("Qual é a sua idade? ")
idade = Number(idade)

idadeEmMeses = idade * 12
idadeEmDias = idadeEmMeses * 30
idadeEmHoras = idadeEmDias * 24

console.log("A idade do usuário em meses: ", idadeEmMeses)

console.log("A idade do usuário em dias: ", idadeEmDias)

console.log("A idade do usuário em horas: ", idadeEmHoras)
*/

/*
exercicio 4
*/

/*

primeiro = 20
segundo = 10

console.log("O primeiro numero é maior que segundo? ", primeiro > segundo )
console.log("O primeiro numero é igual ao segundo? ", primeiro === segundo)
console.log("O primeiro numero é divisível pelo segundo? ", (primeiro % segundo) === 0)
console.log("O segundo numero é divisível pelo primeiro? ", (segundo % primeiro) === 0)


*/