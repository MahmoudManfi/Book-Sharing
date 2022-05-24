import 'module-alias/register';
import app from './app';

app.use((req, res) => {
  const meg = 'Not found page';
  console.error(meg);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('listen to port: ' + PORT);
});
