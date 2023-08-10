import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/index.js";


const app = express();
const PORT = process.env.PORT || 5001;

//MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//ROUTES
app.use("/api",router)

const start = async() => {
    try{
        await mongoose.connect(process.env.DB_URL)
        .then(() => {
            console.log("DB ok");
        }).catch(e => {
            console.log(e);
        })
        app.listen(PORT,(e) => {
            if(e) throw e
            console.log(`Server started on ${PORT} port`);
        })
    }catch(e) {
        console.log(e);
    }
}

start()