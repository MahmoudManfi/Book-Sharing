import { Reader, readerDocument } from '@src/models/Reader';

interface loginElements {
  email: string;
  password: string;
}

export default async function login (body: loginElements): Promise<readerDocument> {
  const {
    email,
    password
  } = body;

  console.log('In login function');

  const user: readerDocument | null = await Reader.findOne({ email });

  if (!user) throw Error('Incorect Email');

  if (password !== user.password) throw Error('Incorect Password');

  return user;
}
