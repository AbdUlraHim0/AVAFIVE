import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from '../typings';

const UserSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastname: { type: String, required: true },
  nationality: { type: String, required: true },
  location: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobileNumber: { type: String, required: true },
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
