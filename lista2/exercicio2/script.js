var button = document.querySelector("button")

button.addEventListener("click", () => {
    var nota1 = Number(document.getElementById('nota1').value)
    var nota2 = Number(document.getElementById('nota2').value)
    var nota3 = Number(document.getElementById('nota3').value)

    var media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10

    var h2 = document.querySelector("h2")

    if (media >= 7) {
        h2.innerHTML = `Média ${media}: Aprovado`
    } else if (media > 5 && media < 7) {
        h2.innerHTML = `Média ${media}: Recuperação`
    } else {
        h2.innerHTML = `Média ${media}: Reprovado`
    }
})
