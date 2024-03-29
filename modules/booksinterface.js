/* eslint-disable */
// Object.defineProperty(exports, "__esModule", { value: true });
import book_js_1 from './book.js';
import storage_js_1 from './storage.js';

const BooksInterface = /** @class */ (function () {
  class BooksInterface {
    constructor() {
      const _this = this;
      this.displaySection = document.querySelector('.display-book-container');
      if (this.displaySection) {
        this.displaySection.onclick = function (event) {
          return _this.removeBook(event.target);
        };
      }
      this.bookForm = document.getElementById('form-book-submit');
      this.bTitle = document.getElementById('book-title');
      this.bAuthor = document.getElementById('book-author');
      if (this.bookForm) {
        this.bookForm.onsubmit = function (event) { return _this.addBook(event); };
      }
      this.alertDiv = document.querySelector('.fade-add-message');
    }

    addBook(event) {
      const _this = this;
      event.preventDefault();
      const arr = storage_js_1.getBooksArray();
      if (this.bTitle && this.bAuthor) {
        const bk = new book_js_1(Math.floor(Math.random() * 100000), this.bTitle.value, this.bAuthor.value);
        arr.push(bk);
      }
      storage_js_1.setBooksArray(arr);
      if (this.bookForm) {
        this.bookForm.reset();
      }
      this.loadBooksList();
      if (this.alertDiv) {
        this.alertDiv.classList.toggle('fade-add-message-show');
        window.setTimeout(() => {
          if (_this.alertDiv) {
            _this.alertDiv.classList.toggle('fade-add-message-show');
          }
        }, 1000);
      }
    }

    removeBook(target) {
      if (target.tagName === 'BUTTON') {
        const divId_1 = target.id.substring(target.id.indexOf('-') + 1);
        const divElement = document.getElementById(divId_1);
        if (divElement && divElement.parentNode) {
          divElement.parentNode.removeChild(divElement);
        }
        const arr_1 = storage_js_1.getBooksArray();
        arr_1.forEach((item) => {
          if (item.id === parseInt(divId_1, 10)) {
            arr_1.splice(arr_1.indexOf(item), 1);
          }
        });
        storage_js_1.setBooksArray(arr_1);
      }
      this.loadBooksList();
    }

    loadBooksList() {
      const _this = this;
      if (this.displaySection) {
        while (this.displaySection.firstChild) {
          this.displaySection.removeChild(this.displaySection.firstChild);
        }
      }
      let i = 1;
      storage_js_1.getBooksArray().forEach((book) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book-card');
        bookDiv.id = ''.concat(book.id);
        if (i % 2 === 0) {
          bookDiv.classList.add('book-card-grey');
        }
        i += 1;
        bookDiv.innerHTML = "<div class='text-content'>\n        <h4>\"".concat(book.title, '"</h2>\n        <h4>by ').concat(book.author, '</h3>\n        </div>\n      ');
        const removeButton = document.createElement('button');
        removeButton.classList.add('button-remove');
        removeButton.textContent = 'Remove';
        removeButton.id = 'button-'.concat(book.id);
        bookDiv.appendChild(removeButton);
        if (_this.displaySection) {
          _this.displaySection.appendChild(bookDiv);
        }
      });
    }
  }
  return BooksInterface;
}());
const _default = BooksInterface;
export { _default as default };
