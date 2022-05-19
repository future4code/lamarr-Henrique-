function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
let comissaoCemReais = qtdeCarrosVendidos * 100
let comissaoVariavel = valorTotalVendas * 0.05
let salario = (comissaoCemReais + comissaoVariavel) + 2000
return salario
}