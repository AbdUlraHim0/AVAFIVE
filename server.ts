import http from 'http';
import app from './app';
import dotenv from 'dotenv';
import connectDB from './config/db';
import helmet from 'helmet';

dotenv.config();

connectDB();

const server = http.createServer(app);
app.use(helmet());

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Listing on Port ${PORT}`);
});
