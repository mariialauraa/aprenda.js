const num = [6, 7, 8, 9]
console.log(num.indexOf(8))
console.log(num.includes(8))

console.log(num.indexOf(18))
console.log(num.includes(18))

// Array de referencia:
const movies = [
    {id: 1, movieName: 'Homem-Aranha'},
    {id: 2, movieName: 'Homem de Ferro'},
    {id: 3, movieName: 'Homem Formiga'}
]

console.log(movies.find(function(findMovie) {
    return findMovie.movieName == 'Homem-Aranha'

}))
