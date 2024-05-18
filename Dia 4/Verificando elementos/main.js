const tempLondon = [18, 13, 8, -2]

// Verificar se são positivas:
const tempPositive = tempLondon.every(function(value) {
    return value >= 0
})

console.log(tempPositive)

// Arrow Function

const tempPositiveArrow = tempLondon.every(value => value >= 0)

console.log(tempPositiveArrow)