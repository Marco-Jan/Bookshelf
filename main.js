function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = generateUniqueId();
  }
  
  function generateUniqueId() {
    // Diese Funktion generiert eine eindeutige ID für jedes Buch
    return '_' + Math.random().toString(36).substr(2, 9);
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
  
      let bookshelf = document.getElementById("bookshelf");
      let book = document.createElement("div");
      book.className = "book";
      book.dataset.id = newBook.id; // Weisen Sie die ID als Datensatzattribut zu
  
      bookshelf.appendChild(book);
  
      let title = document.createElement("h2");
      title.textContent = newBook.title;
      book.appendChild(title);
  
      let author = document.createElement("h3");
      author.textContent = newBook.author;
      book.appendChild(author);
  
      let pages = document.createElement("p");
      pages.className = "pages";
      pages.textContent = newBook.pages;
      book.appendChild(pages);
  
      let read = document.createElement("p");
      read.className = "read";
      read.textContent = newBook.read ? "read" : "no read";
      book.appendChild(read);
  
      let readText = document.createElement("span");
      readText.className = "read_text";
      readText.textContent = "read or not read";
      book.appendChild(readText);
  
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = "modi_checkbox";
      checkbox.checked = newBook.read;
      checkbox.addEventListener("change", function () {
        if (this.checked) {
          read.textContent = "read";
        } else {
          read.textContent = "not read";
        }
      });
      book.appendChild(checkbox);
  
      let removeButton = document.createElement("button");
      removeButton.className = "remove_button";
      removeButton.textContent = "delete";
      removeButton.addEventListener("click", function () {
        book.remove();
      });
      book.appendChild(removeButton);
  
      showForm();
      clearForm();
  
      form.style.display = "none";
  
      saveBooksToLocalStorage(); // Speichern Sie die Bücher im Local Storage
    }
  }
  
  function saveBooksToLocalStorage() {
    let books = getBooksFromLocalStorage(); // Holen Sie sich alle Bücher aus dem Local Storage
    let bookElements = document.querySelectorAll('.book');
  
    // Iterieren Sie über die Buchelemente und fügen Sie sie zur Bücherliste hinzu
    bookElements.forEach(function (bookElement) {
      let bookId = bookElement.dataset.id;
      books[bookId] = {
        title: bookElement.querySelector("h2").textContent,
        author: bookElement.querySelector("h3").textContent,
        pages: bookElement.querySelector(".pages").textContent,
        read: bookElement.querySelector(".read").textContent === "read"
      };
    });
  
    localStorage.setItem('books', JSON.stringify(books)); // Speichern Sie die Bücherliste im Local Storage
  }
  
  function getBooksFromLocalStorage() {
    let books = localStorage.getItem('books');
    return books ? JSON.parse(books) : {}; // Parset die gespeicherten Bücher, falls vorhanden
  }
  
  function loadBooksFromLocalStorage() {
    let books = getBooksFromLocalStorage();
  
    for (let bookId in books) {
      let bookData = books[bookId];
  
      let book = document.createElement("div");
      book.className = "book";
      book.dataset.id = bookId;
  
      let title = document.createElement("h2");
      title.textContent = bookData.title;
      book.appendChild(title);
  
      let author = document.createElement("h3");
      author.textContent = bookData.author;
      book.appendChild(author);
  
      let pages = document.createElement("p");
      pages.className = "pages";
      pages.textContent = bookData.pages;
      book.appendChild(pages);
  
      let read = document.createElement("p");
      read.className = "read";
      read.textContent = bookData.read ? "read" : "no read";
      book.appendChild(read);
  
      let readText = document.createElement("span");
      readText.className = "read_text";
      readText.textContent = "read or not read";
      book.appendChild(readText);
  
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = "modi_checkbox";
      checkbox.checked = bookData.read;
      checkbox.addEventListener("change", function () {
        if (this.checked) {
          read.textContent = "read";
        } else {
          read.textContent = "not read";
        }
      });
      book.appendChild(checkbox);
  
      let removeButton = document.createElement("button");
      removeButton.className = "remove_button";
      removeButton.textContent = "delete";
      removeButton.addEventListener("click", function () {
        book.remove();
        saveBooksToLocalStorage(); // Speichern Sie die Änderungen im Local Storage
      });
      book.appendChild(removeButton);
  
      document.getElementById("bookshelf").appendChild(book);
    }
  }
  
  function clearForm() {
    document.querySelector('#add_form input:nth-of-type(1)').value = "";
    document.querySelector('#add_form input:nth-of-type(2)').value = "";
    document.querySelector('#add_form input:nth-of-type(3)').value = "";
    document.querySelector('#add_form input[type="checkbox"]').checked = false;
  }
  
  function showForm() {
    let form = document.getElementById("add_form");
    form.style.display = "flex";
  }
  
  // Rufen Sie die Funktion zum Laden der Bücher aus dem Local Storage auf
  loadBooksFromLocalStorage();
  