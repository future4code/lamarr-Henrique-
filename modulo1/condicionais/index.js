//////////////////////// EXERCÍCIOS DE INTERPRETAÇÃO /////////////////////////

////////exercício 1
/* 
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
 */
/*

A - Pedi para o usuario um numero e pedi o resto da divisão desse número e compara se ele é igual a 0.

B - Todos os numeros acima de 2 que são pares.

C - Todos os numeros impares.
*/

////////exercício 2

/*
 let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
} 
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/
/*
A - Pedi para o usuario digitar uma fruta e vai imprimir o valor.

B - O preço da fruta Maçã é R$ 2.25

C - O preço da fruta Pêra é R$ 5
*/


//////////exercício 3
/* 
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"

}

console.log(mensagem)
 */
/*
A - Está pedindo para usuario digitarum número e "convertendo" de string para Number.

B - 10 = Esse número passou no teste. -10 = Não vai imprimir nada.

C - acredito que precisaria de uma função ou deixar a variavel mensagem fora do if.

*/




/////////////////////////////////////////EXERCÍCIOS DE ESCRITA DE CÓDIGO ////////////////////////////////


///////////exercício 1
/* 
let idadeUsuario = Number(prompt("Digite sua idade: "))

if(idadeUsuario >= 18){ 
    console.log("Você pode dirigir.")

}else{
    console.log("Você não pode dirigir.")
}
 */

///////////exercício 2
/*
let turnoEstudo = prompt("Digite o turno que você estuda: ")

    if(turnoEstudo === "M"){
console.log("Bom dia!")

    }else if(turnoEstudo === "V"){
console.log("Boa tarde!")

        }else if(turnoEstudo === "N"){
console.log("Boa noite!")

            }else{
console.log("valor incorreto.")

    
}

*/

/////////exercício 3 
/* 
let turnoDeEstudo = prompt("Digite o turno que você estuda: ")

switch(turnoDeEstudo){


    case "M":
        console.log("Bom dia!")
        break
    case "V": 
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("valor incorreto.")     

}
 */


////////exercício 4
/* 
let generoFilme = prompt("Qual genêro do filme?")
let valorIngresso = Number(prompt("Qual valor do ingresso?"))


if ((generoFilme === "fantasia") && (valorIngresso <= 15)){
    console.log("Bom filme!")
    
} else{
    console.log("Escolha outro filme :(")

} */