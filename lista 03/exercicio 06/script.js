var numero = parseInt(prompt("Digite um valor: "))

var soma = 0

for (let i = 0; i <= numero; i++) {
    if (i%2 == 0){
        soma+=i
    }
}

console.log(soma)