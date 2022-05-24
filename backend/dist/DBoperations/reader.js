"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllReaders = exports.findOneReader = exports.readersCount = exports.addReaderId = exports.findById = exports.addReader = void 0;
const Reader_1 = require("@src/models/Reader");
function addReader(readerData) {
    const user = new Reader_1.Reader(Object.assign({}, readerData));
    return user.save();
}
exports.addReader = addReader;
function findById(_id) {
    return Reader_1.Reader.findById(_id)
        .then((reader) => {
        if (!reader) {
            throw Error('user not found' + _id);
        }
        return reader;
    });
}
exports.findById = findById;
function addReaderId(_id, bookId) {
    return Reader_1.Reader.findByIdAndUpdate(_id, { $push: { bookIds: bookId } }, { returnNewDocument: true });
}
exports.addReaderId = addReaderId;
function readersCount() {
    return Reader_1.Reader.countDocuments();
}
exports.readersCount = readersCount;
function findOneReader(filter) {
    return Reader_1.Reader.findOne(filter)
        .then((user) => {
        if (!user)
            throw Error('user not found');
        return user;
    });
}
exports.findOneReader = findOneReader;
function getAllReaders(filter) {
    return Reader_1.Reader.find(filter);
}
exports.getAllReaders = getAllReaders;
//# sourceMappingURL=reader.js.map