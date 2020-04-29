let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
}
const book = new Book("author","title","pages","false");

console.log(book.info());

function addBookToLibrary(){
    let author = prompt("Enter the Name of the Author");
    let title = prompt("Enter the title of the book");
    let pages = prompt("Enter the number of pages");
    let read = prompt("Have you read the book? Enter true or false").toLowerCase() == "true" ? true: false;

    const newBook = new Book(author,title,pages,read);
    myLibrary.push(newBook);
}

function render(){
    myLibrary.forEach((book) => {
        console.log(book.info());
    });
}

