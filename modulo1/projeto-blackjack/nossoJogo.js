/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de Blackjack!")

    if(confirm("Quer iniciar uma nova rodada?")) {
      

   } else {
      
      console.log("O jogo acabou.")
   }

   console.log("Cartas usuário")

let i = 0

let pontuacao = 0

   while (i < 2){
   const carta = comprarCarta(); 
 
   
   console.log(carta.texto) 
 
   pontuacao = pontuacao + (carta.valor)

    

   i++
   }
   
   console.log("Pontuação", pontuacao)
  

console.log("Cartas compurador")

   i = 0

let pontuacaoComputador = 0

   while (i < 2){
   const carta = comprarCarta(); 
 
   
   console.log(carta.texto) 
 
   pontuacaoComputador = pontuacaoComputador + (carta.valor)

    

   i++
   }
   
   console.log("Pontuação", pontuacaoComputador)

   if (pontuacao === pontuacaoComputador){
      console.log("Empate!")
   }else {
    if(pontuacao > pontuacaoComputador){
       console.log("O usuário ganhou!")
    }else {
   if (pontuacao < pontuacaoComputador){
       console.log("O computador ganhou!")
   }

    }

   }