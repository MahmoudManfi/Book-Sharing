import mongoose, { Schema } from 'mongoose';

export const options = {
  timestamps: true
};

export interface IReader {
  name: string;
  password: string;
  email: string;
  phoneNumber: string;
  address: string;
  bookIds?: Schema.Types.ObjectId[];
}

export type readerDocument = mongoose.Document & IReader;

const readerSchema = new Schema<readerDocument>({
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

export const Reader = mongoose.model('Reader', readerSchema);
