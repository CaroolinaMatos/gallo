// Escreva um algoritmo que calcule a quantidade de latas de tinta necessárias e o custo para pintar tanques 
// cilíndricos de combustível, onde são fornecidos a altura (h) e o raio (r) desse cilindro. Sabe-se que a lata de 
// tinta anticorrosiva custa R$ 40.00, cada lata contem 5 litros e cada litro pinta 3 metros quadrados na média. 
// Para que fique bem coberto de tinta, há necessidade de 2 demãos.
// Portanto:
// 1) A lata de tinta custa 40,00;
// 2) Cada lata contém 5 litros;
// 3) A cada litro de tinta pinta 3 metros quadrados. Dados de entrada: altura (H) e raio (R).
// Dados de saída: custo (C) e quantidade (QTDE). 
// Utilizando o planejamento reverso, sabemos que:
// • Custo é dado por quantidade de latas * 40,00;
// • Quantidade de latas é dada por quantidade total de litros/5;
// • A quantidade total de litros é dada por área do cilindro/3 * 2;
// • Área do cilindro é dada por área da base + área lateral;
// • Área da base é (P1 * EXP(R,2));
// • A área lateral é altura * comprimento: (2 * P1 * R * H);
// • Sendo que R (raio) e H (altura) são dados de entrada e P1 é urna constante de valor conhecido: 3,14
// Fornecer os valores de raio e altura aqui
var raio = 2.5;
var altura = 5.0;

const P1 = 3.14;
var precoLata = 40.00;
var litrosPorLata = 5;
var metrosQuadradosPorLitro = 3;
var demaos = 2;

var areaBase = P1 * Math.pow(raio, 2);
var areaLateral = 2 * P1 * raio * altura;
var areaTotal = areaBase + areaLateral;

var quantidadeTotalLitros = (areaTotal / metrosQuadradosPorLitro) * demaos;
var quantidadeLatas = Math.ceil(quantidadeTotalLitros / litrosPorLata);
var custoTotal = quantidadeLatas * precoLata;

console.log(`Quantidade de Latas: ${quantidadeLatas}`);
console.log(`Custo Total: R$ ${custoTotal.toFixed(2)}`);
