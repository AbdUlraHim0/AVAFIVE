import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;

    if (!mongoUrl) {
      throw new Error('MONGO_URL environment variable is not defined');
    }

    const conn = await mongoose.connect(mongoUrl);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${(error as Error).message}`);
    process.exit(1);
  }
};

export default connectDB;
