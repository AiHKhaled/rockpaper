class Book {
  constructor(title, author, pages, desc, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.desc = desc;
    this.read = read;
  }
}
class Library {
  constructor() {
    this.books = [];
  }
}

function addBook(newBook) {
  if (!this.isInLibrary(newBook)) {
    this.books.push(newBook);
  }
}

function removeBook(title) {
  return (this.books = this.books.filter((book) => book.title !== title));
}
