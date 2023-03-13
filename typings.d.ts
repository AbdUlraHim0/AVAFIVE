export interface IUser extends Document {
  firstName: string;
  lastName: string;
  nationality: string;
  location: string;
  email: string;
  password: string;
  mobileNumber: number;
}
