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
  }

  displayBooks() {
    this.displayBk.style.display = 'block';
    this.addBk.style.display = 'none';
    this.contact.style.display = 'none';
  }

  displayAddBooks() {
    this.displayBk.style.display = 'none';
    this.addBk.style.display = 'block';
    this.contact.style.display = 'none';
  }

  displayContact() {
    this.displayBk.style.display = 'none';
    this.addBk.style.display = 'none';
    this.contact.style.display = 'block';
  }
}