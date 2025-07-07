import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error : ${error.message}`);
    process.exit(1); //process code 1 code means exit with failure, 0 means success
  }
};

export default connectDB;
