var button = document.querySelector("button")

button.addEventListener("click", () => {
    var ano = Number(document.getElementById("ano").value)
    var h2 = document.querySelector('h2')

    if (ano % 4 == 0) {
        h2.innerHTML = `${ano} é um ano bissexto`
    } else {
        h2.innerHTML = `${ano} não é um ano bissexto`
    }
})