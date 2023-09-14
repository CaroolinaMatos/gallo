
var numeroAleatorio = Math.floor(Math.random() * 100)
var h2 = document.querySelector('h2')


document.getElementById("btn-reiniciar").addEventListener("click", function () {
    numeroAleatorio = Math.floor(Math.random() * 100)
    h2.innerHTML = "";
});

function Comparar() {
    let numero = Number(document.getElementById('numero').value)

    if (numero == numeroAleatorio) {
        h2.innerHTML = "Você acertou o número!"
    } else if (numero < numeroAleatorio) {
        h2.innerHTML = "Você chutou muito baixo!"
    } else {
        h2.innerHTML = "Você chutou muito alto!"
    }
}
