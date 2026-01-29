import express from "express";
import "dotenv/config";
import connectDB from "./DB/connectDB.js";
import cors from "cors";
import userRoute from "./routes/user.route.js";

const app = express();
app.use(express.json(), cors());
app.use("/api/user", userRoute);

connectDB();
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})