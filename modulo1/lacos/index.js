///////////////////////////EXERCÍCIOS DE INTERPRETAÇÃO /////////////////////////////////

////////////exercício 1
/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)



R - Está fazendo o teste se o (i) é menor que 5 e depois somando o valor de (i) com a variavel (valor).

*/


////////////exercício 2

/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

A - Todos os numeros maiores que 18.

B - Sim, ele confere todos os indices.

*/


////////////////exercício 3

/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

R - *
    **
    ***
    ****

    precisei rodar para entender
*/


////////////////////////////////EXERCÍCIO DE ESCRITA DE CÓDIGO ////////////////////////

///////////exercício 1

/*
let numPet = Number(prompt("Quantos Pets você tem? "))
let i = 0
let arrayPet = []

if (numPet > 0){

while ( i < numPet){
    let nomePet = prompt("Digite o nome de um Pet: ")
    arrayPet.push(nomePet)

    i++
}
console.log(arrayPet)

    } else {
        console.log("Você pode adotar um Pet!")

    }
*/


/////////exercício 2


const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]


/*

A - 


function imprimiArray (array){

console.log(array)

}
imprimiArray(arrayOriginal)
*/

/*

B - 


function dividePorDez(array){

for(let divisao of arrayOriginal){
    
 divisao = (divisao / 10)

 console.log(divisao)
}

}

dividePorDez(arrayOriginal)

*/

/*

C - 


let arrayPar = []
function imprimiPar(array){

for(let numPar of array){
   

if( numPar % 2 === 0){
    arrayPar.push(numPar)
}

}
    return arrayPar
}
console.log(imprimiPar(arrayOriginal))

*/

/*

D - 


let arrayString = []

let i = 0

function imprimiString(array){

for(let string of array){

    

    arrayString.push(`O elemento do índex ${i} é ${string}`)

    i++
}
    return arrayString
}

console.log(imprimiString(arrayOriginal))
*/

let valorMaximo = 0
let valorMinimo = 0

function valorMaxMin (array) {

    for (let num of array){

        if(valorMaximo <= num){
            valorMaximo = num
        }
    }
    for (let num2 of array){
        if( ){
            valorMinimo = num2
        }
    
    }
return console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)


}

valorMaxMin(arrayOriginal)