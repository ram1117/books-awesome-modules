export default class Storage {
  static getBooksArray() {
    return JSON.parse(localStorage.getItem('book-list') || '');
  }

  static setBooksArray(array: Object[]) {
    localStorage.setItem('book-list', JSON.stringify(array));
  }
}
