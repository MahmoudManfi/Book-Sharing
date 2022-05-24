import { IUser, User, userDocument } from '@src/models/User';
import { FilterQuery } from 'mongoose';

export function addUser (userData: IUser): Promise<userDocument> {
  const user: userDocument = new User({
    ...userData
  });
  return user.save();
}

export function findById (_id: string): Promise<userDocument> {
  return User.findById(_id)
    .then((user: userDocument|null) => {
      if (!user) {
        throw Error('user not found' + _id);
      }
      return user;
    });
}

export function addBookId (_id: string, bookId: string) {
  return User.findByIdAndUpdate(_id, { $push: { bookIds: bookId } }, { returnNewDocument: true });
}

export function usersCount () {
  return User.countDocuments();
}

export function findOneUser (filter: FilterQuery<userDocument>): Promise<userDocument> {
  return User.findOne(filter)
    .then((user: userDocument|null) => {
      if (!user) throw Error('user not found');
      return user;
    });
}

export function getAllUsers (filter: FilterQuery<userDocument>) {
  return User.find(filter);
}
