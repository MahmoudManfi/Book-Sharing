"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBooks = exports.findOneBook = exports.booksCount = exports.addUserId = exports.findById = exports.addBook = void 0;
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
function addUserId(_id, userId) {
    return Book_1.Book.findByIdAndUpdate(_id, { $push: { userIds: userId } }, { returnNewDocument: true });
}
exports.addUserId = addUserId;
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
//# sourceMappingURL=book.js.map