// Mostrar CHAVE e VALOR

const myCar = {
    model: 'BMW',
    year: 2023,
    color: 'black'
}

for (let i in myCar) {
    console.log(i, myCar[i])
}