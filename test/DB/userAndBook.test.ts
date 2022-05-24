import mongoose from 'mongoose';
import { addBook } from '../../src/DBoperations/book';
import { addUser } from '../../src/DBoperations/user';
import { IUser } from '../../src/models/User';
require('dotenv').config();

// eslint-disable-next-line no-unused-vars
/* global test expect */

test('connectDatabase', async () => {
  await mongoose.connect(process.env.MONGO_URI);
  return addBook('zayady love hamza');
}, 10000);

test('create user', async () => {
  const user: IUser = {
    name: 'Manfy',
    password: '021335431',
    email: 'hi@gmail.com',
    address: 'gnb hamza',
    phoneNumber: '21363',
    bookIds: []
  };
  return addUser(user);
}, 10000);
