import dotenv from 'dotenv';
import fs from 'fs';

if (fs.existsSync('.env')) {
  console.log('Using .env file to supply config environment variables');
  dotenv.config({ path: '.env' });
} else {
  console.error('.env file doesn\'t exist');
  process.exit(1);
}

export const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  console.error('No mongo connection string. Set MONGODB_URI environment variable.');
  process.exit(1);
}
