import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const dbConnect = async () => {

    const dbUrl = process.env.DB_URL;

    try {

        await mongoose.connect(dbUrl);

        console.log('[dbConnect] connection successfully');

    } catch (error) {

        console.error(`[dbConnect] ${error}`);
        process.exit();
    }

}

export default dbConnect;