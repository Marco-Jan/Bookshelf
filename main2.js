
//book objekt (kontruktor)
function Book(title, author, pages, read, bookId) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.bookId = bookId;

}

//funktion um die book id hochzuzählen
function bookaddid() {
    let bookId = "a"+1;
    let book = document.querySelectorAll(".book");
    for (let i = 0; i < book.length; i++) {
      book[i].id = bookId;
      bookId++;
    }
  }



/* bucheinbinde  */
function addBook(newbook) {
    let titleInput = document.querySelector('#add_form input:nth-of-type(1)').value;
    let authorInput = document.querySelector('#add_form input:nth-of-type(2)').value;
    let pagesInput = document.querySelector('#add_form input:nth-of-type(3)').value;

    let pagestest = /^[0-9]+$/;


    let alphanumerictest = /^[a-zA-Z0-9!?.:()+-;" "]+$/;
    if (!pagestest.test(pagesInput)) {
        window.alert("Please enter a number for the pages");
    }
    else if (!alphanumerictest.test(titleInput) || !alphanumerictest.test(authorInput)) {
        window.alert("Please enter a valid title and author");

    } else {let bookIdCounter = 1;
        let form = document.getElementById("add_form");

        let readCheckbox = document.querySelector('#add_form input[type="checkbox"]').checked;
        let newBook = new Book(titleInput, authorInput, pagesInput, readCheckbox);


        let bookshelf = document.getElementById("bookshelf");
        let book = document.createElement("div");
        book.className = "book"

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
        read.className = "let bookIdCounter = 1;read";
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

        bookaddid();
        showForm();
        clearForm();
        

        function Bookshelf() {
            this.books = [];
            
        }
        
        Bookshelf.prototype.addBook = function(book){
            this.books.push(book);
            localStorage.setItem('library', JSON.stringify(this.books))
        }
        
        const bookShelf = new Bookshelf()

        form.style.display = "none";
        console.log("#2");

        
    }
}




/* 
const booksarray = [];

function addtoarr(arr, newbook) {
  arr.push(newbook);
}


addtoarr(booksarray, newbook);

console.log(booksarray);

 */


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



