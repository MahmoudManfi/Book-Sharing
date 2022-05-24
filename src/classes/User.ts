import { Schema } from 'mongoose';
import { IUser } from '../models/User';

class User implements IUser {
  name: string;
  email:string;
  password:string;
  phoneNumber:string;
  address:string;
  bookIds: Schema.Types.ObjectId[];

  constructor (name:string, email:string, password:string, phoneNumber:string, address:string, bookIds: Schema.Types.ObjectId[]) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.bookIds = bookIds;
  }

  login (user:string, password:string) {
  }

  logout () {
  }
}

module.exports = User;
