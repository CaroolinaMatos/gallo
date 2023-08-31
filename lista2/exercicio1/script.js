var button = document.querySelector("button")

button.addEventListener("click", () => {
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)

    var maior

    if (num1 >= num2) {
        maior = num1
    } else {
        maior = num2
    }

    var h2 = document.querySelector("h2")
    h2.innerHTML = maior
})
