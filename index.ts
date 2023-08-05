import PageNavigation from './modules/pagenavigation.js';
import BooksInterface from './modules/booksinterface.js';
import Storage from './modules/storage.js';

window.onload = () => {
  if (Storage.getBooksArray() === null) {
    Storage.setBooksArray([]);
  }
  const pageNav = new PageNavigation();
  pageNav.displayBooks();
  const booksUi = new BooksInterface();
  booksUi.loadBooksList();
};

console.log('loaded');