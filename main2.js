
let form = document.getElementById('add_form');
let add_btn_form = document.getElementById('add_btn2');
let read_btn = document.getElementsByClassName('text_field');
let open_form = document.getElementById('add_btn');

// Event Listener hinzufügen
open_form.addEventListener("click", showForm);
add_btn_form.addEventListener("click", addBook);




function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
   
}

function showForm() {
    console.log("Sie haben geklickt");
    form.style.display = "block";
}

function addBook() {
    let titleInput = document.querySelector('#add_form input:nth-of-type(1)').value;
    let authorInput = document.querySelector('#add_form input:nth-of-type(2)').value;
    let pagesInput = document.querySelector('#add_form input:nth-of-type(3)').value;



    let newBook = new Book(titleInput, authorInput, pagesInput);

        console.log(titleInput);

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
        read.className = "read";
        read.textContent = newBook.read ? "read" : "no read";
        book.appendChild(read);


        // ende
        clearForm();
        form.style.display = "none";

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


