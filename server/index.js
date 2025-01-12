import express from "express";
import dotenv from "dotenv"
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js"
import courseRoute from "./routes/course.route.js"
import cookieParser from "cookie-parser";
import mediaRoute from "./routes/media.route.js"
import purchaseRoute from "./routes/purchaseController.route.js"
import courseProgressRoute from "./routes/courseProgress.route.js"
import cors from "cors";

dotenv.config({});
connectDB()
const app = express();

const PORT = process.env.PORT ||3000;
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

//api
app.use("/api/v1/media" , mediaRoute)
app.use("/api/v1/user" , userRoute)
app.use("/api/v1/course" , courseRoute)
app.use("/api/v1/purchase" , purchaseRoute)
app.use("/api/v1/progress" , courseProgressRoute)

app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);   
})