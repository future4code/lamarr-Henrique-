function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let valorTotal = 0
  if (quantidade >= 12){
    valorTotal = quantidade * 1
  }else{
    valorTotal = quantidade * 1.30
  }
  return valorTotal
}