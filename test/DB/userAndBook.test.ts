import mongoose from 'mongoose';
import { addBook, findOneBook, addUserId,booksCount } from '../../src/DBoperations/book';
import { addReader, addReaderId, findOneReader, readersCount } from '../../src/DBoperations/reader';
import { bookDocument } from '../../src/models/Book';
import { IReader, readerDocument } from '../../src/models/Reader';
import { MONGODB_URI } from '../../src/config/database';
import { assert } from 'console';
require('dotenv').config();

// eslint-disable-next-line no-unused-vars
/* global test expect */




/* **************IMPORTANT********************
For those test to pass, make sure that the following conditions are satisfied
  1- The book relation(table) is empty
  2- The user relation doesn't contains users with the following e-mails:
       User1@gmail.com,User2@gmail.com,User3@gmail.com
*/




test('connectDatabase', () => {
  return mongoose.connect(MONGODB_URI);
}, 10000);



// Adding the necessary users and books to our database 
// First add some books to the database 



test('add book 1 ', () => {
  return addBook('TestDummyBook1');
}, 10000);
test('add book 2', () => {
  return addBook('TestDummyBook2');
}, 10000);
test('add book 3 ', () => {
  return addBook('TestDummyBook3');
}, 10000);
test('add book 4 ', () => {
  return addBook('TestDummyBook4');
}, 10000);
test('add book 5', () => {
  return addBook('TestDummyBook5');
}, 10000);

// Count the number of the books in the database 
test('Count the number of book in the database', () =>{

  booksCount().then(function(value: any) {
    expect(value).toBe(5);
  });
})

// Make three dummy users

test('create user 1', async () => {
  const user: IReader = {
    name: 'User1',
    password: '123456789',
    email: 'User1@gmail.com',
    address: 'Bitash, Agami',
    phoneNumber: '023456789',
    bookIds: []
  };
  return addReader(user);
}, 10000);
test('create user 2', async () => {

  const user: IReader = {
    name: 'User2',
    password: '123456789',
    email: 'User2@gmail.com',
    address: 'Bitash, Agami',
    phoneNumber: '013456789',
    bookIds: []
  };
  return addReader(user);
}, 10000);
test('create user 3', async () => {
  // const book: bookDocument|null = await findOneBook({ title: 'zayady love hamza' });

  const user: IReader = {
    name: 'User3',
    password: '123456789',
    email: 'User3@gmail.com',
    address: 'Bitash, Agami',
    phoneNumber: '012456789',
    bookIds: []
  };
  return addReader(user);
}, 10000);




// check that the three users exist and books exist
let user1: readerDocument;
let user2: readerDocument ;
let user3: readerDocument;

let book1: bookDocument;
let book2: bookDocument;

test('Get the Users objects and the books objects ', async () => {
   user1 = await findOneReader({ email: 'User1@gmail.com' });
   user2 = await findOneReader({ email: 'User2@gmail.com' });
   user3 = await findOneReader({ email: 'User3@gmail.com' });

   book1 = await findOneBook({ title: 'TestDummyBook1' });
   book2 = await findOneBook({ title: 'TestDummyBook2' });

  console.log(book1);
  console.log(user1);

}, 10000);

test('Check that all users exist ', () => {
  expect(user1).not.toBe(null);
  expect(user2).not.toBe(null);
  expect(user3).not.toBe(null);
}, 10000);

test('Check that all books exist ', () => {
  expect(book1).not.toBe(null);
  expect(book2).not.toBe(null);
}, 10000);


// Connect User1 with book1
test('Add book1 to User1', async () =>{
   
  let value_book = await addUserId(book1._id, user1._id);
  let value_user = await addReaderId(user1._id, book1._id);

  expect(value_book).not.toBe(null);
  expect(value_user).not.toBe(null);

  book1 = await findOneBook({ title: 'TestDummyBook1' });
  user1 = await findOneReader({ email: 'User1@gmail.com' });

  // console.log(user1);
  // console.log(book1);
  
},1000)

// Connect User1 with book2
test('Add book2 to User1', async () =>{   
  let value_book = await addUserId(book2._id, user1._id);
  let value_user = await addReaderId(user1._id, book2._id);

  expect(value_book).not.toBe(null);
  expect(value_user).not.toBe(null);

  book2 = await findOneBook({ title: 'TestDummyBook2' });
  user1 = await findOneReader({ email: 'User1@gmail.com' });

  // console.log(user1);
  // console.log(book1);

},1000)

//  Get all books that User1 owns and assert that they are 2
test('Get all books that user 1 owns ', () => {
  let books_user1_owns = user1.bookIds;
  if(books_user1_owns){
    expect(books_user1_owns?.length).toBe(2);
  }else{
    expect(false);
  }    
}, 10000);


// Connect User2 to book1

test('Add book1 to User2', async () =>{
   
  let value_book = await addUserId(book1._id, user2._id);
  let value_user = await addReaderId(user2._id, book1._id);

  expect(value_book).not.toBe(null);
  expect(value_user).not.toBe(null);

  book1 = await findOneBook({ title: 'TestDummyBook1' });
  user2 = await findOneReader({ email: 'User2@gmail.com' });

  // console.log(user1);
  // console.log(book1);
  
},1000)


// Connect User3 to book1

test('Add book1 to User3', async () =>{
   
  let value_book = await addUserId(book1._id, user3._id);
  let value_user = await addReaderId(user3._id, book1._id);

  expect(value_book).not.toBe(null);
  expect(value_user).not.toBe(null);

  book1 = await findOneBook({ title: 'TestDummyBook1' });
  user3 = await findOneReader({ email: 'User3@gmail.com' });

  // console.log(user1);
  // console.log(book1);
  
},1000)


//Get all books that User2 owns and assert that they are 1
test('Get all books that user 2 owns ', () => {
  let books_user2_owns = user2.bookIds;
  if(books_user2_owns){
    expect(books_user2_owns?.length).toBe(1);
  }else{
    expect(false);
  }    
}, 10000);




// Get all  users that own book1 and assert that they are User1, User2 and User3 
test('Check that all users own book1 ', () => {
  let users_that_own_book1 = book1.userIds;
  if(users_that_own_book1){
    expect(users_that_own_book1?.length).toBe(3);
  }else{
    expect(false);
  }    
}, 10000);


// check that only one user own book2
test('Check that only one user own book2 ', () => {
  let users_that_own_book2 = book2.userIds;
    if(users_that_own_book2){
      expect(users_that_own_book2?.length).toBe(1);
    }else{
      expect(false);
    }    

}, 10000);

// check that user3 owns only one book
test('check that user3 owns only one book', () => {
  let books = user3.bookIds;
  expect(books?.length).toBe(1);
}, 10000);



// test('find one book', () => {
//   return findOneBook({ title: 'zayady love hamza' });
// }, 10000);



// test('count of users', async () => {
//   const count = await readersCount();
//   expect(count).toBe(1);
// });
