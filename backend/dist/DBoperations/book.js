"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllBooks = exports.getAllBooks = exports.findOneBook = exports.booksCount = exports.addReaderId = exports.findById = exports.addBook = void 0;
const Book_1 = require("@src/models/Book");
function addBook(title) {
    const book = new Book_1.Book({
        title
    });
    return book.save();
}
exports.addBook = addBook;
function findById(_id) {
    return Book_1.Book.findById(_id)
        .then((book) => {
        if (!book) {
            throw Error('book not found' + _id);
        }
        return book;
    });
}
exports.findById = findById;
function addReaderId(_id, readerId) {
    return Book_1.Book.findByIdAndUpdate(_id, { $push: { userIds: readerId } }, { returnNewDocument: true });
}
exports.addReaderId = addReaderId;
function booksCount() {
    return Book_1.Book.countDocuments();
}
exports.booksCount = booksCount;
function findOneBook(filter) {
    return Book_1.Book.findOne(filter)
        .then((book) => {
        if (!book)
            throw Error('user not found');
        return book;
    });
}
exports.findOneBook = findOneBook;
function getAllBooks(filter) {
    return Book_1.Book.find(filter);
}
exports.getAllBooks = getAllBooks;
function deleteAllBooks(filter) {
    return Book_1.Book.deleteMany(filter);
}
exports.deleteAllBooks = deleteAllBooks;
//# sourceMappingURL=book.js.map