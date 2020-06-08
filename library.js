let myLibrary = [];

class Book{
    constructor(title, author,pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
    }
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
    myLibrary.forEach((book, i) => {
        const newBook = document.createElement("div");
        newBook.className = "book";
        newBook.setAttribute("data-pos",`${i}`);

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

        const remove = document.createElement("button");
        remove.className = "remove";
        remove.innerText = "delete";

        const toggleRead = document.createElement("button");
        toggleRead.className = "toggle";
        toggleRead.innerText = "read/not read";

        toggleRead.addEventListener('click',toggleStatus)
        remove.addEventListener('click', removeBook)

        newBook.appendChild(author);
        newBook.appendChild(title);
        newBook.appendChild(pages);
        newBook.appendChild(read);
        newBook.appendChild(remove);
        newBook.appendChild(toggleRead);
        library.appendChild(newBook);

    });
}
function toggleStatus(){
    const pos = this.parentNode.getAttribute("data-pos");
    myLibrary[pos].read = myLibrary[pos].read ? false: true;
    render();
}
function removeBook(){
    const pos = this.parentNode.getAttribute("data-pos");
    myLibrary.splice(Number(pos),1);
    this.parentNode.remove();
    render();

}
const addBook = document.querySelector('#add-book');

addBook.addEventListener('click',addBookToLibrary);

const book1 = new Book("Maxe elk","tyler huff",30,false);
const book2 = new Book("elkman","jordan carr",30,false);
const book3 = new Book("Maxe elk","kyle starht",30,false);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

render();
