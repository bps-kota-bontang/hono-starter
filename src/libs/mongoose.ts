import { MONGO_URI } from "@/configs/constant";
import * as mongoose from "mongoose";

const connectDB = async (): Promise<typeof mongoose> => {
  console.log("Connecting Database....");
  try {
 
    if (!MONGO_URI) {
      throw "Please set mongo URI";
    }

    console.log("URI Database:", MONGO_URI);

    const connection = await mongoose.connect(MONGO_URI, {
      autoIndex: true,
    });

    console.log(`MongoDB Connected: ${connection.connection.host}`);

    return connection;
  } catch (err: any) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;