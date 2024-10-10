import mongoose from "mongoose";

export const connectDB = async () => {
    const mySecret = process.env.MONGO_URI;
    console.log(mySecret, "MongoDB URI");
    

    try {
        console.log("Attempting to connect to MongoDB...");
        const conn = await mongoose.connect(mySecret);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`); 
        process.exit(1); 
    }
};
