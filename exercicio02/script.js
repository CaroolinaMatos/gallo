// Faça um algoritmo que leia 2 números e ao final mostre a soma, subtração, multiplicação e divisão do primeiro
// // pelo segundo.

function Calcular() {
    var numero1 = document.getElementById("num01").value
    var numero2 = document.getElementById("num02").value

    var soma = Number(numero1) + Number(numero2)
    var sub = Number(numero1) - Number(numero2)
    var multi = Number(numero1) * Number(numero2)
    var divi = Number(numero1) / Number(numero2)

    var psoma = document.getElementById('soma')
    psoma.innerText = soma

    var psub = document.getElementById('sub')
    psub.innerText = sub

    var pmulti = document.getElementById('multi')
    pmulti.innerText = multi

    var pdivi = document.getElementById('divi')
    pdivi.innerText = divi
}