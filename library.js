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
    render();
}

function render(){
    const library = document.querySelector("#library");

    library.innerHTML = "";
    myLibrary.forEach((book) => {
        const newBook = document.createElement("div");
        newBook.className = "book";

        const author = document.createElement("p");
        author.className = "author";
        author.textContent = `author: ${book.author}`;

        const title = document.createElement("p");
        title.className = "title";
        title.textContent = `title: ${book.title}`;

        const pages = document.createElement("p");
        pages.className = "pages";
        pages.textContent = `${book.pages} pages`;

        const read = document.createElement("p");
        read.className = "read";
        read.textContent = book.read ? "read": "not read";

        newBook.appendChild(author);
        newBook.appendChild(title);
        newBook.appendChild(pages);
        newBook.appendChild(read);
        library.appendChild(newBook);

    });
}

const addBook = document.querySelector('#add-book');

addBook.addEventListener('click',addBookToLibrary);

