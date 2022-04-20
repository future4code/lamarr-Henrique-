/* exercicio de interpretação

exercicio 1


let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)
*/

/*
a. undefined
b. null
c. 11
d. 3 => tive que executar para saber
e. (11) [3,19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9
*/

/*     exercicio 2    

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

 Resposta =   SUBI NUM ÔNIBUS EM MIRROCOS  27*/


 //              EXERCÍCIO DE ESCRITA DE CÓDIGO   ///

//  EXERCÍCIO 1
/*
let usuario = prompt("Digite seu usuario: ")
let email = prompt("Digite seu e-mail: ")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem vindo(a) ${usuario}!`)
*/

//   ECERCÍCIO 2

/*
let minhasComidas = [ "churrasco", "feijoada", "pudim", "lasanha", "brigadeiro" ]

console.log(minhasComidas)

console.log("Essas são minhas comidas favoritas: ")
console.log(minhasComidas[0])
console.log(minhasComidas[1])
console.log(minhasComidas[2])
console.log(minhasComidas[3])
console.log(minhasComidas[4])

let comidaUsuario = prompt("Digite sua comida favorita: ")

minhasComidas.splice(1, 1, comidaUsuario)

console.log(minhasComidas)
*/

// ECERCÍCIO 3
/*
let listaDeTarefas = []
let t1 = prompt("Digite uma tarefa: ")
let t2 = prompt("Digite outra tarefa: ")
let t3 = prompt("Digite outra tarefa: ")

listaDeTarefas.push(t1)
listaDeTarefas.push(t2)
listaDeTarefas.push(t3)

console.log(listaDeTarefas)

tarefaFeita = prompt("Digite o indice da tarefa realizada: ")

listaDeTarefas.splice(tarefaFeita, 1)

console.log(listaDeTarefas)
*/