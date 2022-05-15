// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  function ordenarArray(a, b) {
    return  a - b;
  }
 return array.sort(ordenarArray)
}
// EXERCÍCIO 04
function retornaNumerosPares(array) {
   numeroPar = []
   for (let i = 0; i < array.length; i++){
     if(array[i] % 2 === 0){
       numeroPar.push(array[i])
     }
   }
   return numeroPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  numeroParElevado2 = []
   for (let i = 0; i < array.length; i++){
     if(array[i] % 2 === 0){
       numeroParElevado2.push(array[i] * array[i])
     }
   }
   return numeroParElevado2
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNum = 0
  for (let i = 0; i < array.length; i++){
    if(array[i] > maiorNum){
      maiorNum = array[i]
    }
  }
  return maiorNum
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let menorNum = 0
  let comparacaoObjeto = {
  maiorNumero: 0,
  maiorDivisivelPorMenor: 0,
  diferenca: 0
}
if(num1 > num2){
  comparacaoObjeto.maiorNumero = num1
}else{
  comparacaoObjeto.maiorNumero = num2
}
if(num1 < num2){
  menorNum = num1
}else{
  menorNum = num2
}
comparacaoObjeto.maiorDivisivelPorMenor = (comparacaoObjeto.maiorNumero % menorNum === 0)
comparacaoObjeto.diferenca = (comparacaoObjeto.maiorNumero - menorNum)
return comparacaoObjeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numPares = []
  for(let i = 0; i != (n * 2); i++){
    if(i % 2 === 0){
      numPares.push(i)
    }
  }
  return numPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
         if((ladoA !== ladoB) && (ladoA !== ladoC) && (ladoB !== ladoC)){
        return "Escaleno"
       }else if((ladoA === ladoB) && (ladoB=== ladoC)){
          return "Equilátero"
        }else{
         return "Isósceles"
       }
      
   }


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

let segundoMaiorMenor = []

  function ordenarNumerosArray(a, b){
  return a - b
}  
array.sort(ordenarNumerosArray)
segundoMaiorMenor.push(array[array.length - 2], array[1])
return segundoMaiorMenor
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

 // return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores }.`
 

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  pessoa.nome = "ANÔNIMO"
  return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}