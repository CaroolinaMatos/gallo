// Elaborar um algoritmo que calcule a equação do 2º grau.

var A = 10
var B = 5
var C = 3

var delta = (B ** 2) - (4 * A * C)

var x1 = ((B * -1) + Math.sqrt(delta)) / 2
var x2 = ((B * -1) - Math.sqrt(delta)) / 2

console.log('X1: ', x1)
console.log('X2: ', x2)