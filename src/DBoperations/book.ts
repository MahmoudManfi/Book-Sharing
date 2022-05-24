import { Book, bookDocument } from '@src/models/Book';

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

export function addUserId (_id: string, userId: string) {
  return Book.findByIdAndUpdate(_id, { $push: { userIds: userId } }, { returnNewDocument: true });
}
