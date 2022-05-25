import 'module-alias/register';
import app from './app';
import { StatusCodes } from 'http-status-codes';

app.use((req, res) => {
  console.log(req);
  const meg = 'Not found page';
  console.error(meg);
  res.status(StatusCodes.NOT_FOUND).json({ error: meg });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('listen to port: ' + PORT);
});
