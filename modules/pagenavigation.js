import { DateTime } from '../modules/luxon.js';

export default class PageNavigation {
  constructor() {
    this.listbtn = document.getElementById('list-books-link');
    this.addBookBtn = document.getElementById('add-books-link');
    this.contactBtn = document.getElementById('contact-link');

    this.listbtn.onclick = () => this.displayBooks();
    this.addBookBtn.onclick = () => this.displayAddBooks();
    this.contactBtn.onclick = () => this.displayContact();

    this.displayBk = document.querySelector('.display-book');
    this.addBk = document.querySelector('.add-book');
    this.contact = document.querySelector('.contact-section');

    this.dateDisplay = document.querySelector('.date-display');
  }

  displayBooks() {
    this.displayTime();
    this.displayBk.style.display = 'block';
    this.addBk.style.display = 'none';
    this.contact.style.display = 'none';
  }

  displayAddBooks() {
    this.displayTime();
    this.displayBk.style.display = 'none';
    this.addBk.style.display = 'block';
    this.contact.style.display = 'none';
  }

  displayContact() {
    this.displayTime();
    this.displayBk.style.display = 'none';
    this.addBk.style.display = 'none';
    this.contact.style.display = 'block';
  }

  displayTime() {
    const dt = DateTime.now();
    this.dateDisplay.textContent = dt.toLocaleString(DateTime.DATETIME_MED);
  }
}