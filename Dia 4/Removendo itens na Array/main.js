const num = [5, 6, 7, 8]

// Remove o último item da Array:
const final = num.pop()

console.log(num)
console.log(final) // Removeu o 8

// Remove o primeiro item da Array:
const result = num.shift()

console.log(num)
console.log(result) // Removeu o 5

// Removendo elementos no meio da Array:
const numeros = [5, 6, 7, 8, 9]

const resultado = numeros.splice(1, 2) // Remover 6 e 7

console.log(numeros)
console.log(resultado) // Removeu o 6 e 7

