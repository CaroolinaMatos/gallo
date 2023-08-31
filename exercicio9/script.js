// Elaborar um algoritmo que efetue a apresentação do valor da conversão em real (R$) de um valor lido em 
// dólar (US$). O algoritmo deverá solicitar o valor da cotação do dólar e também a quantidade de dólares 
// disponíveis com o usuário.

var cotacao = 4.87
var totalReais = 100

var totalDolares = totalReais * cotacao

console.log(`Você tem: ${totalDolares}`)