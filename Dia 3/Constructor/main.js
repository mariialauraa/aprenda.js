function CreateBook(title, author, pages) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages
}

const book1 = new CreateBook('The Da Vinci Code', 'Dan Brown', 540)
const book2 = new CreateBook('Angels & Demons', 'Dan Brown', 480)
console.log(book1)
console.log(book2)