"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_1 = require("@src/DBoperations/book");
const http_status_codes_1 = require("http-status-codes");
const router = express_1.default.Router();
router.get('/allBooks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield (0, book_1.getAllBooks)({});
    res.status(http_status_codes_1.StatusCodes.OK).json(books);
}));
router.post('/addBook', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield (0, book_1.addBook)(req.body.title);
    if (!book)
        throw res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ Error: 'can\'t add new book' });
    res.status(http_status_codes_1.StatusCodes.OK).json(book);
}));
exports.default = router;
//# sourceMappingURL=index.js.map