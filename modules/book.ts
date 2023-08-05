export default class Book {
  id: number;
  title: string;
  author: string;
  constructor(id: number, bktitle: string, bkauthor: string) {
    this.id = id;
    this.title = bktitle;
    this.author = bkauthor;
  }
}
