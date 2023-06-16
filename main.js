'use strict';

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return `${this.title} von ${this.author}, ${this.pages} Seiten, ${this.read}`;
    };
}

function addBook() {
    let titleInput = document.querySelector('#add_form input:nth-of-type(1)').value;
    let authorInput = document.querySelector('#add_form input:nth-of-type(2)').value;
    let pagesInput = document.querySelector('#add_form input:nth-of-type(3)').value;

    let pagestest = /^[0-9]+$/;
    let alphanumerictest = /^[a-zA-Z0-9!?.:()+-;" "]+$/;

    if (!pagestest.test(pagesInput)) {
        window.alert("Please enter a number for the pages");
    } else if (!alphanumerictest.test(titleInput) || !alphanumerictest.test(authorInput)) {
        window.alert("Please enter a valid title and author");
    } else {
        let form = document.getElementById("add_form");

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

        let author = document.createElement("p");
        author.textContent = newBook.author;
        book.appendChild(author);

        let pages = document.createElement("p");
        pages.textContent = newBook.pages + " pages";
        book.appendChild(pages);

        let readStatus = document.createElement("p");
        readStatus.textContent = newBook.read ? "Read" : "Not Read";
        book.appendChild(readStatus);

        clearForm();
    }
}

function clearForm() {
    let form = document.getElementById("add_form");
    let inputs = form.querySelectorAll("input[type='text']");
    let checkbox = form.querySelector("input[type='checkbox']");
    
    for (let input of inputs) {
        input.value = '';
    }
    
    checkbox.checked = false;

    form.style.display = "none";
}

function showForm() {
    let form = document.getElementById("add_form");
    form.style.display = "flex";
}
