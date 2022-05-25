import express from 'express';
import { StatusCodes } from 'http-status-codes';
import login from './login';

const router = express.Router();

router.post('/login', (req, res) => {
  console.log(req.body)
  login(req.body)
    .then(token => {
      res.status(StatusCodes.OK).json(token);
    })
    .catch(err => res.status(StatusCodes.NOT_FOUND).json({ error: err.message }));
});

export default router;
