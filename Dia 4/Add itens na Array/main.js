const num = [7, 8, 9]
console.log(num)

// Add valores no final da Array:
num.push(10, 11, 12)
console.log(num)

// Add valores no início da Array:
num.unshift(1, 2, 3)
console.log(num)

// Add valores no meio da Array:
num.splice(3, 0, 4, 5, 6) // index(inicio(3)) & delete(qtos deletar(0))
console.log(num)