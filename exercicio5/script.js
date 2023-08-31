// Considerando que para um consórcio, sabe-se o número total de prestações, a quantidade de prestações 
// pagas e o valor atual da prestação, escreva um algoritmo que determine o total pago pelo consorciado e o 
// saldo devedor.

var totalPretacoes = 10
var quantidadePagas = 3
var valorPretacao = 150

var totalPago = quantidadePagas * valorPretacao
var faltaPagar = (totalPretacoes - quantidadePagas) * valorPretacao

console.log('Valor já pago: ', totalPago)
console.log('Falta pagar: ', faltaPagar)
