// Elabore um algoritmo que leia um número inteiro e mostre o valor deste número elevado ao quadrado.

function Calcular(){
    var numero1 = document.getElementById("num01").value
    var elevado = Number(numero1) ** 2

    var presult = document.getElementById("resultado")
    presult.innerText = elevado
}