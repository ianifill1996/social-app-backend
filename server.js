import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./config/connection.js";
import usersRouter from "./routes/users.js"
import postsRouter from './routes/post.js';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({origin: "http://localhost:5173"}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/post", postsRouter);


db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});