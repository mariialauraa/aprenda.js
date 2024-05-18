function createBook(title, author, pages) {
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function() {
            console.log('printing...')
        }
    }
    return book
}

const book1 = createBook('The Da Vinci Code', 'Dan Brown', 540)
const book2 = createBook('Angels & Demons', 'Dan Brown', 480)
console.log(book1)
console.log(book2)