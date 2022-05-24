import mongoose, { Schema } from 'mongoose';

export const options = {
  timestamps: true
};

export interface IBook {
  title: string;
  userIds: string[];
  ISBN?: string;
}

export type bookDocument = mongoose.Document & IBook;

const BookSchema = new Schema<bookDocument>({
  title: {
    type: String,
    required: true
  },
  ISBN: {
    type: String,
    unique: true
  },
  userIds: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]

}, options);

export const Book = mongoose.model<bookDocument>('Book', BookSchema);
