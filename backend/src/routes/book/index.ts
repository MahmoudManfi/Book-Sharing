import express from 'express';
import { addBook, getAllBooks } from '@src/DBoperations/book';
import { bookDocument, IBook } from '@src/models/Book';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

router.get('/allBooks', async (req, res) => {
  const books: IBook[] = await getAllBooks({});
  res.status(StatusCodes.OK).json(books);
});

router.post('/addBook', async (req, res) => {
  const book: bookDocument = await addBook(req.body.title);
  if (!book) throw res.status(StatusCodes.NOT_FOUND).json({ Error: 'can\'t add new book' });

  res.status(StatusCodes.OK).json(book);
});

export default router;
