import mongoose, { Schema } from 'mongoose';
const passportLocalMongoose = require('passport-local-mongoose');

export const options = {
  timestamps: true,
  discriminatorKey: 'kind'
};

export interface IUser {
  name: string;
  password: string;
  email: string;
  phoneNumber: string;
  address: string;
  kind?: string;
  bookIds?: Schema.Types.ObjectId[];
}

export type userDocument = mongoose.Document & IUser;

const UserSchema = new Schema<userDocument>({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String
  },
  bookIds: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
}, options);

UserSchema.plugin(passportLocalMongoose);
export const User = mongoose.model('User', UserSchema);
