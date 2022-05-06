//////////////////////EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO//////////////////

////////exercício 1
/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

a) O que vai ser impresso no console?

Não entendi muito bem porque imprimiu dessa forma.


*/

////////exercício 2

/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)

a) O que vai ser impresso no console?

Vai imprimir só os nomes da array.
*/


/////////exercício 3

/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)

a) O que vai ser impresso no console?

Pensei que iria imprimir apenas os apelidos que eram diferentes de "chijo", 
mas imprimiu nome e apelidos que eram diferentes de "chijo".
  
  */


////////////////////EXERCÍCIOS DE ESCRITA DE CÓDIGO//////////////

///////////exercício 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]


 /*

 a) Crie um novo array que contenha apenas o nome dos doguinhos


 const nomePets = pets.map((item, index, array) => {

    return item.nome
 })

 console.log(nomePets)

 /*

 b) Crie um novo array apenas com os cachorros salsicha

 

 function nomeSalsicha(tipo){
    
    return tipo.raca === "Salsicha"

 }
let petSalsicha = pets.filter(nomeSalsicha) 
 console.log(petSalsicha)

 
*/
 /*
 c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
 A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"


 const desconto = pets.filter((item) => {
      return item.raca === "Poodle"

 })

const mensagem1 = desconto.map((item) => {
       return (`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)

}) 
console.log(mensagem1)
*/

////////exercício 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

/*

 a) Crie um novo array que contenha apenas o nome de cada item



const nomesProdutos = produtos.map((item) => {

    return item.nome
})
console.log(nomesProdutos)

*/

/*
 b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
 aplicando 5% de desconto em todos eles



const desconto = produtos.map((valor) => {
    return {nome:valor.nome, preco:(valor.preco*0.95)}

})
console.log(desconto)

*/


/*

 c) Crie um novo array que contenha apenas os objetos da categoria Bebidas



const apenasBebidas = produtos.filter((tipo) => {
    return tipo.categoria === "Bebidas"

})
console.log(apenasBebidas)

*/

/*

 d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"


const limpeza = produtos.filter((item) => {
     return item.nome.includes("Ypê")

})

console.log(limpeza)

*/

/*

 e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
 Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"



 const limpeza2 = produtos.filter((item) => {
    return item.nome.includes("Ypê")

 })

 const mensagem = limpeza2.map((item) => {

    return (`Compre ${item.nome} por ${item.preco}`)
 })

 console.log(mensagem)
 */