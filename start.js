function Book(name, author, pages, read, bookId) {
    this.bookId = bookId;
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.changeRead = function() {
    if(this.read === false) {
        this.read = true;
    }else {
        this.read = false;
    }
}

Book.prototype.changeBookId = function (){
    this.bookId = 1;
    console.log (bookId)
}





function Bookshelf() {
    this.books = [];
    
}

Bookshelf.prototype.addBook = function(book){
    this.books.push(book);
    localStorage.setItem('library', JSON.stringify(this.books))
}

const bookShelf = new Bookshelf()



