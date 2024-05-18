const book = {
    bookTitle: 'Atomic Habits',
    bookAuthor: 'James Clear',
    bookPages: 306,
    bookChapters: {
        chap1: 'Fundamentals',
        chap2: '1st low',
        chap3: '2nd low'
    },
    printBook: function() {
        console.log('printing...')
    }
}

book.printBook()

/*
function printBook() {
    console.log('printing...')
}

printBook()
*/