const tempLondon = [18, 13, 8, -2, 0, -5]

// Verificar se são positivas:
const tempPositive = tempLondon.filter(function(value) {
    return value >= 0
})

console.log(tempPositive)

// Arrow Function
const tempPositiveArrow = tempLondon.filter(value => value >= 0)

console.log(tempPositiveArrow)