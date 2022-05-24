import { IBook } from '../models/Book';

class Book implements IBook {
  title: string;
  constructor (title: string) {
    this.title = title;
  }
}

module.exports = Book;
