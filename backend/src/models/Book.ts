import mongoose, { Schema } from 'mongoose';

export const options = {
  timestamps: true
};

export interface IBook {
  title: string;
  userIds?: Schema.Types.ObjectId[];
}

export type bookDocument = mongoose.Document & IBook;

const BookSchema = new Schema<bookDocument>({
  title: {
    type: String,
    required: true
  },
  userIds: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]

}, options);

export const Book = mongoose.model('Book', BookSchema);
