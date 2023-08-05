import { DateTime } from './luxon.js';

export default class PageNavigation {
  listbtn: HTMLElement | null;
  addBookBtn: HTMLElement | null;
  contactBtn: HTMLElement | null;
  displayBk: HTMLElement | null;
  addBk: HTMLElement | null;
  contact: HTMLElement | null;
  dateDisplay: HTMLElement | null;
  constructor() {
    this.listbtn = document.getElementById('list-books-link');
    this.addBookBtn = document.getElementById('add-books-link');
    this.contactBtn = document.getElementById('contact-link');
    if (this.listbtn) {
      this.listbtn.onclick = () => this.displayBooks();
    }
    if ((this, this.addBookBtn)) {
      this.addBookBtn.onclick = () => {
        console.log("clicked");
        this.displayAddBooks()
      };
    }
    if (this.contactBtn) {
      this.contactBtn.onclick = () => this.displayContact();
    }

    this.displayBk = document.querySelector('.display-book');
    this.addBk = document.querySelector('.add-book');
    this.contact = document.querySelector('.contact-section');

    this.dateDisplay = document.querySelector('.date-display');
  }

  displayBooks() {
    this.displayTime();
    if (this.displayBk) {
      this.displayBk.style.display = 'block';
    }
    if (this.addBk) {
      this.addBk.style.display = 'none';
    }
    if (this.contact) {
      this.contact.style.display = 'none';
    }
  }

  displayAddBooks() {
    this.displayTime();
    if (this.displayBk) {
      this.displayBk.style.display = 'none';
    }
    if (this.addBk) {
      this.addBk.style.display = 'block';
    }
    if (this.contact) {
      this.contact.style.display = 'none';
    }
  }

  displayContact() {
    this.displayTime();
    if (this.displayBk) {
      this.displayBk.style.display = 'none';
    }
    if (this.addBk) {
      this.addBk.style.display = 'none';
    }
    if (this.contact) {
      this.contact.style.display = 'block';
    }
  }

  displayTime() {
    const dt = DateTime.now();
    if (this.dateDisplay) {
      this.dateDisplay.textContent = dt.toLocaleString(DateTime.DATETIME_MED);
    }
  }
}
