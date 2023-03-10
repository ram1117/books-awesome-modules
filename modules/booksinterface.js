import Book from './book.js';
import Storage from './storage.js';

export default class BooksInterface {
  constructor() {
    this.displaySection = document.querySelector('.display-book-container');
    this.displaySection.onclick = (event) => this.removeBook(event.target);

    this.bookForm = document.getElementById('form-book-submit');
    this.bTitle = document.getElementById('book-title');
    this.bAuthor = document.getElementById('book-author');
    this.bookForm.onsubmit = (event) => this.addBook(event);
    this.alertDiv = document.querySelector('.fade-add-message');
  }

  addBook(event) {
    event.preventDefault();
    const arr = Storage.getBooksArray();
    const bk = new Book(Math.floor(Math.random() * 100000), this.bTitle.value, this.bAuthor.value);
    arr.push(bk);
    Storage.setBooksArray(arr);
    this.bookForm.reset();
    this.loadBooksList();

    this.alertDiv.classList.toggle('fade-add-message-show');
    window.setTimeout(() => { this.alertDiv.classList.toggle('fade-add-message-show'); }, 1000);
  }

  removeBook(target) {
    if (target.tagName === 'BUTTON') {
      const divId = target.id.substring(target.id.indexOf('-') + 1);
      const divElement = document.getElementById(divId);
      divElement.parentNode.removeChild(divElement);
      const arr = Storage.getBooksArray();
      arr.forEach((item) => {
        if (item.id === parseInt(divId, 10)) {
          arr.splice(arr.indexOf(item), 1);
        }
      });
      Storage.setBooksArray(arr);
    }
    this.loadBooksList();
  }

  loadBooksList() {
    while (this.displaySection.firstChild) {
      this.displaySection.removeChild(this.displaySection.firstChild);
    }
    let i = 1;
    Storage.getBooksArray().forEach((book) => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book-card');
      bookDiv.id = book.id;
      if (i % 2 === 0) { bookDiv.classList.add('book-card-grey'); }
      i += 1;
      bookDiv.innerHTML = `<div class='text-content'>
        <h4>"${book.title}"</h2>
        <h4>by ${book.author}</h3>
        </div>
      `;
      const removeButton = document.createElement('button');
      removeButton.classList.add('button-remove');
      removeButton.textContent = 'Remove';
      removeButton.id = `button-${book.id}`;
      bookDiv.appendChild(removeButton);
      this.displaySection.appendChild(bookDiv);
    });
  }
}