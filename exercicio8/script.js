// Escrever um algoritmo que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por 
// ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, 
// informar o seu nome, o salário fixo e salário no final do mês.

var nome = 'Carol'
var salarioFixo = 1500
var totalVendas = 30000

var comissao = 0.15 * 30000

var salarioFinal = salarioFixo + comissao

console.log(`${nome} tem o salário fixo de: ${salarioFinal}, mas com a comissão, ele foi para: ${salarioFinal}`)