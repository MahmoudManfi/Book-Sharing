import { Book, bookDocument } from '@src/models/Book';
import { FilterQuery } from 'mongoose';

export function addBook (title: string): Promise<bookDocument> {
  const book: bookDocument = new Book({
    title
  });
  return book.save();
}

export function findById (_id: string): Promise<bookDocument> {
  return Book.findById(_id)
    .then((book: bookDocument | null) => {
      if (!book) {
        throw Error('book not found' + _id);
      }
      return book;
    });
}

export function addReaderId (_id: string, readerId: string) {
  return Book.findByIdAndUpdate(_id, { $push: { userIds: readerId } }, { returnNewDocument: true });
}

export function booksCount () {
  return Book.countDocuments();
}

export function findOneBook (filter: FilterQuery<bookDocument>): Promise<bookDocument> {
  return Book.findOne(filter)
    .then((book: bookDocument|null) => {
      if (!book) throw Error('user not found');
      return book;
    });
}

export function getAllBooks (filter: FilterQuery<bookDocument>) {
  return Book.find(filter);
}

export function deleteAllBooks (filter: FilterQuery<bookDocument>) {
  return Book.deleteMany(filter);
}
