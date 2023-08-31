var button = document.querySelector("button")

button.addEventListener("click", () => {
    var num1 = Number(document.getElementById('num1').value)
    var h2 = document.querySelector('h2')

    if (num1 % 2 == 0) {
        h2.innerHTML = "O número é par"
    } else {
        h2.innerHTML = "O número é impar"
    }
})