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

    // Überprüfung, ob Eingabe eine Zahl ist
    if (isNaN(pagesInput)) {
        window.alert("Please enter a number for the pages");
        return;
    }

    let alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (!alphanumericRegex.test(titleInput) || !alphanumericRegex.test(authorInput)) {
        window.alert("Please enter a valid title and author (letters and numbers only)");
        return;
    }
    let readCheckbox = document.querySelector('#add_form input[type="checkbox"]').checked;

    let newBook = new Book(titleInput, authorInput, pagesInput, readCheckbox);
    console.log(newBook.info());

    let bookshelf = document.getElementById("bookshelf");
    let book = document.createElement("div");
    book.className = "book";
    bookshelf.appendChild(book);

    let title = document.createElement("h2");
    title.textContent = newBook.title;
    book.appendChild(title);

    let author = document.createElement("h3");
    author.textContent = newBook.autor;
    book.appendChild(author);

    let pages = document.createElement("p");
    pages.textContent = newBook.pages;
    book.appendChild(pages);

    let read = document.createElement("p");
    read.textContent = newBook.read ? "Read" : ""; 
    book.appendChild(read);

    let removeButton = document.createElement("remove_button");
    removeButton.className = "remove_button";
    removeButton.textContent = "delete";
    removeButton.addEventListener("click", function() {
        book.remove();
    });
    book.appendChild(removeButton);

    clearForm();
    hideForm(); // Das Formular wird nach dem Hinzufügen des Buches ausgeblendet
}

function clearForm() {
    let titleInput = document.querySelector('#add_form input:nth-of-type(1)').value = "";
    let authorInput = document.querySelector('#add_form input:nth-of-type(2)').value = "";
    let pagesInput = document.querySelector('#add_form input:nth-of-type(3)').value = "";
    let readCheckbox = document.querySelector('[type="checkbox"]').checked = false; // readCheckbox auf false setzen
}

function showForm() {
    let form = document.getElementById("add_form");
    form.style.display = "block";
}

function hideForm() {
    let form = document.getElementById("add_form");
    form.style.display = "none";
}



