function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let contador = 0
  let mensagem = 0
  for(i = 0; i < arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] === numeroEscolhido){
       contador ++
    }
  }
  if(contador >= 1){
    mensagem = (`O número ${numeroEscolhido} aparece ${contador}x`)
    
  }else{
    mensagem =  (`Número não encontrado`)
  }
  return mensagem
}