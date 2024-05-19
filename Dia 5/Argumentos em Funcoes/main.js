function price(num1, num2) {
    return num1 + num2
}
console.log(price(5, 10))

// Argumentos em Função:

function priceArg() { // não é preciso definir a qtde de argumentos
    let total = 0
    for (let value of arguments) {
        total += value
    } 
    return total
}
console.log(priceArg(5, 10, 20, 30))