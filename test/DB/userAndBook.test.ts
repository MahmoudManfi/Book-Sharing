import mongoose from 'mongoose';
import { addBook } from '../../src/DBoperations/book';
import { addUser, usersCount } from '../../src/DBoperations/user';
import { IUser } from '../../src/models/User';
require('dotenv').config();

// eslint-disable-next-line no-unused-vars
/* global test expect */

test('connectDatabase', () => {
  return mongoose.connect(process.env.MONGO_URI);
}, 100000000);

test('add book', () => {
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

test('count of users', async () => {
  const count = await usersCount();
  expect(count).toBe(1);
});
