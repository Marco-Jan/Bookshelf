function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = generateUniqueId();
  }

  //Id ersteller
  let counter = 1;
  
  function generateUniqueId() {
    const uniqueId = `book-${counter}`;
    counter++;
    return uniqueId;
  }
  function addBook() {
    const titleInput = document.querySelector('#add_form input:nth-of-type(1)').value;
    const authorInput = document.querySelector('#add_form input:nth-of-type(2)').value;
    const pagesInput = document.querySelector('#add_form input:nth-of-type(3)').value;
  
    const pagestest = /^[0-9]+$/;
    const alphanumerictest = /^[a-zA-Z0-9!?.:()+-;" "]+$/;
  
    if (!pagestest.test(pagesInput)) {
      window.alert("Please enter a number for the pages");
    } else if (!alphanumerictest.test(titleInput) || !alphanumerictest.test(authorInput)) {
      window.alert("Please enter a valid title and author");
    } else {
      const form = document.getElementById("add_form");
      const readCheckbox = document.querySelector('#add_form input[type="checkbox"]').checked;
      const newBook = new Book(titleInput, authorInput, pagesInput, readCheckbox);
  
      const bookshelf = document.getElementById("bookshelf");
      const book = document.createElement("div");
      book.className = "book";

      //  ID zuweisung
      book.dataset.id = newBook.id;
  
      bookshelf.appendChild(book);
  
      //bau des buches
      const title = document.createElement("h2");
      title.textContent = newBook.title;
      book.appendChild(title);
  
      const author = document.createElement("h3");
      author.textContent = newBook.author;
      book.appendChild(author);
  
      const pages = document.createElement("p");
      pages.className = "pages";
      pages.textContent = newBook.pages;
      book.appendChild(pages);
  
      const read = document.createElement("p");
      read.className = "read";
      read.textContent = newBook.read ? "read" : "no read";
      book.appendChild(read);
  
      const readText = document.createElement("span");
      readText.className = "read_text";
      readText.textContent = "read or not read";
      book.appendChild(readText);
  
      const checkbox = document.createElement("input");
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
      //remove btn
      const removeButton = document.createElement("button");
      removeButton.className = "remove_button";
      removeButton.textContent = "delete";
      removeButton.addEventListener("click", function () {
        book.remove();
      });
      book.appendChild(removeButton);
  
      showForm();
      clearForm();
  
      form.style.display = "none";
  
      saveBooksToLocalStorage(); 
    }
  }
  //speicherung im local.storage
  function saveBooksToLocalStorage() {
    const books = getBooksFromLocalStorage(); 
    const bookElements = document.querySelectorAll('.book');
  
    
    bookElements.forEach(function (bookElement) {
      const bookId = bookElement.dataset.id;
      books[bookId] = {
        title: bookElement.querySelector("h2").textContent,
        author: bookElement.querySelector("h3").textContent,
        pages: bookElement.querySelector(".pages").textContent,
        read: bookElement.querySelector(".read").textContent === "read"
      };
    });
  
    localStorage.setItem('books', JSON.stringify(books)); 
  }
  //holen vom local.storage
  function getBooksFromLocalStorage() {
    const books = localStorage.getItem('books');
    return books ? JSON.parse(books) : {};
  }
  
  function loadBooksFromLocalStorage() {
    const books = getBooksFromLocalStorage();
  
    for (const bookId in books) {
      const bookData = books[bookId];
  
      const book = document.createElement("div");
      book.className = "book";
      book.dataset.id = bookId;
  
      const title = document.createElement("h2");
      title.textContent = bookData.title;
      book.appendChild(title);
  
      const author = document.createElement("h3");
      author.textContent = bookData.author;
      book.appendChild(author);
  
      const pages = document.createElement("p");
      pages.className = "pages";
      pages.textContent = bookData.pages;
      book.appendChild(pages);
  
      const read = document.createElement("p");
      read.className = "read";
      read.textContent = bookData.read ? "read" : "no read";
      book.appendChild(read);
  
      const readText = document.createElement("span");
      readText.className = "read_text";
      readText.textContent = "read or not read";
      book.appendChild(readText);
  
      const checkbox = document.createElement("input");
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
        saveBooksToLocalStorage(); 
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
    const form = document.getElementById("add_form");
    form.style.display = "flex";
  }
  loadBooksFromLocalStorage();
  