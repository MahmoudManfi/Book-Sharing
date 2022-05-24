import mongoose from 'mongoose';
import { addBook, findOneBook } from '../../src/DBoperations/book';
import { addReader, readersCount } from '../../src/DBoperations/reader';
import { bookDocument } from '../../src/models/Book';
import { IReader } from '../../src/models/Reader';
import { MONGODB_URI } from '../../src/config/database';
require('dotenv').config();

// eslint-disable-next-line no-unused-vars
/* global test expect */

test('connectDatabase', () => {
  return mongoose.connect(MONGODB_URI);
}, 100000000);

test('add book', () => {
  return addBook('zayady love hamza');
}, 10000);

test('find one book', () => {
  return findOneBook({ title: 'zayady love hamza' });
}, 10000);

test('create user', async () => {
  const book: bookDocument|null = await findOneBook({ title: 'zayady love hamza' });

  const user: IReader = {
    name: 'Manfy',
    password: '021335431',
    email: 'hisssdfsdsdf34f@gmail.com',
    address: 'gnb hamza',
    phoneNumber: '21sdsdsdf3344f363',
    bookIds: [book._id]
  };
  return addReader(user);
}, 10000);

test('count of users', async () => {
  const count = await readersCount();
  expect(count).toBe(1);
});
