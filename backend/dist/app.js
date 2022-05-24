"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const database_1 = require("./config/database");
const reader_1 = __importDefault(require("./routes/reader"));
const book_1 = __importDefault(require("./routes/book"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/reader', reader_1.default);
app.use('/book', book_1.default);
mongoose_1.default.connect(database_1.MONGODB_URI)
    .then(() => {
    console.log('Database is connected');
})
    .catch(err => console.error('MongoDB connection error', err.message));
exports.default = app;
//# sourceMappingURL=app.js.map