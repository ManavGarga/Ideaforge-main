import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.DATABASE_URL, { dbName: process.env.DATABASE_NAME })
  .then(() => { console.log("Connected"); process.exit(0); })
  .catch(err => { console.error("Error:", err.message); process.exit(1); });
