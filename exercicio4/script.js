function Calcular(){

    var saldo = 500
    var valor = document.getElementById("num01").value

    saldo = saldo + Number(valor)

    var p = document.getElementById("resultado")
    p.innerText = saldo
}