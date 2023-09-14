var button = document.querySelector("button")

button.addEventListener("click", () => {
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)

    var h2 = document.querySelector('h2')

    if (num1 % num2 == 0 || num2 % num1 == 0) {
        h2.innerHTML = `O número ${num1} e ${num2} são multiplos`
    } else {
        h2.innerHTML = `O número ${num1} e ${num2} não são multiplos`
    }
})
