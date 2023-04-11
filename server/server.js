import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();
import signup from './routes/signup';
import signin from './routes/signin';
import mongoose from "mongoose";

const app = express();
app.use(express.json());
mongoose.connect()




app.use("/signup", signup);
app.use("/signin", signin);




const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`)
})


