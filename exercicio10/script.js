// Analisando a fórmula "Prestação = valor + (valor * (taxa/100) * tempo)", crie um algoritmo para efetuar o 
// cálculo do valor de uma prestação em atraso. (Você deverá ler o VALOR da prestação, a TAXA de juros 
// imposta pelo banco, e o número de dias em ATRASO.

var valor = 100
var taxa = 40
var tempo = 10

var prestacao = valor + (valor * (taxa/100) * tempo)

console.log('O valor da prestação é: ', prestacao)