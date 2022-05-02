//////////////////////////////////////////INTERPRETAÇÃO DE CÓDIGO////////////////////////////


////////////////// EXERCÍCIO 1
/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])



A - Matheus Nachtergaele
    Virginia Cavendish
    Globo 14h

*/


///////////////////EXERCÍCIO 2
/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)


A - {nome: "Juca", 
	idade: 3, 
	raca: "SRD"}

    {nome: "Juba", 
	idade: 3, 
	raca: "SRD"}
    
    {nome: "Juco", 
	idade: 3, 
	raca: "SRD"}


B - Carrega as informações do objeto citado.
*/
 


///////////////EXERCÍCIO 3

/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))




R -    Precisei imprimir no console e não entendi muito bem a lógica


*/

//////////////////////////////////////////ESCRITA DE CÓDIGO///////////////////////////////////////

//////////EXERCÍCIO 1

/*
function imprimir() {
const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
 return imprimir
 
}
imprimir()


*/



/////////////EXERCÍCIO 2

/*

const pessoa1 = {
	nome: "Bruno", 
  idade: 23, 
	profissao: "Instrutor"
}

const pessoa2 = {
	nome: "Mayara", 
  idade: 24, 
	profissao: "Estudante"
}

function minhaFuncao(objeto){

    const array = [objeto.nome, objeto.length, objeto.idade, objeto.profissao, objeto.profissao.length]

return array
}
console.log(pessoa1)
console.log(pessoa2)

*/

/////////////EXERCÍCIO 3
/*
const carrinho = []

const fruta1 = {
nome: "banana",
disponibilidade: true


}

const fruta2 = {
    nome: "laranja",
    disponibilidade: true
    
    
    }

const fruta3 = {
        nome: "mamão",
        disponibilidade: true
        
        
        }

        function adicionarNoCarrinho(fruta){
    carrinho.push(fruta)
    

        }

adicionarNoCarrinho(fruta1)
adicionarNoCarrinho(fruta2)
adicionarNoCarrinho(fruta3)

console.log(carrinho)

*/



