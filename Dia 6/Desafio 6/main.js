const colors = ['red', 'blue', 'yellow', 'purple', 'green']
const button = document.getElementById('btn')
const colorName = document.querySelector('.color') // arquivo css

button.addEventListener('click', function() {
    const radomColor = getRandomColor()
    document.body.style.background = colors[radomColor]
    colorName.textContent = colors[radomColor] // add o nome da cor no HTML
})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length)     
}