import { IUser, User, userDocument } from '@src/models/User';

export function addBook (userData: IUser): Promise<userDocument> {
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
