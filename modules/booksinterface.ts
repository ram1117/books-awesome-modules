import Book from './book.js';
import Storage from './storage.js';

export default class BooksInterface {
  displaySection: HTMLDivElement | null;
  bookForm: HTMLFormElement | null;
  bTitle: HTMLInputElement | null;
  bAuthor: HTMLInputElement | null;
  alertDiv: HTMLDivElement | null;

  constructor() {
    this.displaySection = document.querySelector('.display-book-container');
    if (this.displaySection) {
      this.displaySection.onclick = (event: Event) =>
        this.removeBook(event.target as HTMLElement);
    }

    this.bookForm = document.getElementById(
      'form-book-submit'
    ) as HTMLFormElement;
    this.bTitle = document.getElementById('book-title') as HTMLInputElement;
    this.bAuthor = document.getElementById('book-author') as HTMLInputElement;
    if (this.bookForm) {
      this.bookForm.onsubmit = (event) => this.addBook(event);
    }
    this.alertDiv = document.querySelector('.fade-add-message');
  }

  addBook(event: Event) {
    event.preventDefault();
    const arr: Book[] = Storage.getBooksArray();
    if (this.bTitle && this.bAuthor) {
      const bk: Book = new Book(
        Math.floor(Math.random() * 100000),
        this.bTitle.value,
        this.bAuthor.value
      );
      arr.push(bk);
    }

    Storage.setBooksArray(arr);
    if (this.bookForm) {
      this.bookForm.reset();
    }
    this.loadBooksList();
    if (this.alertDiv) {
      this.alertDiv.classList.toggle('fade-add-message-show');
      window.setTimeout(() => {
        if (this.alertDiv) {
          this.alertDiv.classList.toggle('fade-add-message-show');
        }
      }, 1000);
    }
  }

  removeBook(target: HTMLElement) {
    if (target.tagName === 'BUTTON') {
      const divId = target.id.substring(target.id.indexOf('-') + 1);
      const divElement: HTMLElement | null = document.getElementById(divId);
      if (divElement && divElement.parentNode) {
        divElement.parentNode.removeChild(divElement);
      }

      const arr: Book[] = Storage.getBooksArray();
      arr.forEach((item: Book) => {
        if (item.id === parseInt(divId, 10)) {
          arr.splice(arr.indexOf(item), 1);
        }
      });
      Storage.setBooksArray(arr);
    }
    this.loadBooksList();
  }

  loadBooksList() {
    if (this.displaySection) {
      while (this.displaySection.firstChild) {
        this.displaySection.removeChild(this.displaySection.firstChild);
      }
    }
    let i: number = 1;
    Storage.getBooksArray().forEach((book: Book) => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book-card');
      bookDiv.id = `${book.id}`;
      if (i % 2 === 0) {
        bookDiv.classList.add('book-card-grey');
      }
      i += 1;
      bookDiv.innerHTML = `<div class='text-content'>
        <h4>"${book.title}"</h2>
        <h4>by ${book.author}</h3>
        </div>
      `;
      const removeButton: HTMLButtonElement = document.createElement('button');
      removeButton.classList.add('button-remove');
      removeButton.textContent = 'Remove';
      removeButton.id = `button-${book.id}`;
      bookDiv.appendChild(removeButton);
      if (this.displaySection) {
        this.displaySection.appendChild(bookDiv);
      }
    });
  }
}
