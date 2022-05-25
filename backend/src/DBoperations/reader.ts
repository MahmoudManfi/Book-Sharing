import { IReader, Reader, readerDocument } from '@src/models/Reader';
import { FilterQuery } from 'mongoose';

export function addReader (readerData: IReader): Promise<readerDocument> {
  const user: readerDocument = new Reader({
    ...readerData
  });
  return user.save();
}

export function findById (_id: string): Promise<readerDocument> {
  return Reader.findById(_id)
    .then((reader: readerDocument|null) => {
      if (!reader) {
        throw Error('user not found' + _id);
      }
      return reader;
    });
}

export function addBookId (_id: string, bookId: string) {
  return Reader.findByIdAndUpdate(_id, { $push: { bookIds: bookId } }, { returnNewDocument: true });
}

export function readersCount () {
  return Reader.countDocuments();
}

export function findOneReader (filter: FilterQuery<readerDocument>): Promise<readerDocument> {
  return Reader.findOne(filter)
    .then((user: readerDocument|null) => {
      if (!user) throw Error('user not found');
      return user;
    });
}

export function getAllReaders (filter: FilterQuery<readerDocument>) {
  return Reader.find(filter);
}

export function deleteAllReaders (filter: FilterQuery<readerDocument>) {
  return Reader.deleteMany(filter);
}
