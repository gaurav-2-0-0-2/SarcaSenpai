import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();
import signup from './routes/signup.js';
import signin from './routes/signin.js';
import mongoose from "mongoose";

const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGO_URL);
app.use(cors());

app.use("/signup", signup);
app.use("/signin", signin);




const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`)
})


