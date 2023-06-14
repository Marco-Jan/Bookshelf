// books create
function Book(title, autor, pages, read) {
    this.title = title;
    this.autor = autor;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} von ${this.autor}, ${this.pages} Seiten, ${this.read}`;
    }
}

// let book1 = new Book('Die Zeuginnen', 'Margaret Atwood', 576, 'noch nicht gelesen');
// let book2 = new Book('Der Heinz', 'Gustaf', 276, 'gelesen')
// console.log(book1.info(), book2.info());

function addBook() {
    let titleInput = document.querySelector('#add_form input:nth-of-type(1)').value;
    let authorInput = document.querySelector('#add_form input:nth-of-type(2)').value;
    let pagesInput = document.querySelector('#add_form input:nth-of-type(3)').value;
    let readCheckbox = document.querySelector('#add_form input[type="checkbox"]').checked;

    let newBook = new Book(titleInput, authorInput, pagesInput, readCheckbox);
    console.log(newBook.info());

    // Hier kannst du den Code zum Hinzufügen des Buches zum Buchregal implementieren. buch soll wie ein buch auch ausehen
    let bookshelf = document.getElementById("bookshelf");
    let book = document.createElement("div");
    book.className = "book";
    bookshelf.appendChild(book);

    let title = document.createElement("h2");
    title.textContent = newBook.title;
    book.appendChild(title);

    let author = document.createElement("h3");
    author.textContent = newBook.autor;

    let pages = document.createElement("p");
    pages.textContent = newBook.pages;

    let read = document.createElement("p");
    read.textContent = newBook.read;

    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(read);

    let removeButton = document.createElement("remove_button");
    removeButton.textContent = "delete";
    removeButton.addEventListener("click", function () {
        book.remove();
    }
    );

    book.appendChild(removeButton);
}

// funtion um den input des vormulares vor dem schließen zu löschen
function clearForm() {
    let titleInput = document.querySelector('#add_form input:nth-of-type(1)').value = "";
    let authorInput = document.querySelector('#add_form input:nth-of-type(2)').value = "";
    let pagesInput = document.querySelector('#add_form input:nth-of-type(3)').value = "";
    let readCheckbox = document.querySelector('#add_form input[type="checkbox"]').checked = false;
}




function showForm() {
    let form = document.getElementById("add_form");
    form.style.display = "block";
}



function hideForm() {
    let form = document.getElementById("add_form");
    form.style.display = "none";
}


