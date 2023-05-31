import express, { Express, Response, Request } from "express";
import { config } from "dotenv";
import type { DotenvConfigOptions, DotenvParseOutput } from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/user";
import fs from "fs";
import path from "path";

config();
const PORT = process.env.PORT || "9000";
const app = express();

// mongoose.connect(process.env.MONGO_URL as string, {});

// mongoose.connection.on("connected", () => console.log("MongoDB is Connected"));

///  USE METHOD TRIGGERS
app.use(cors());
app.use(express.json());

app.use(userRoutes);

app.get("/", (req: Request, res: Response) => {
  console.log("Testing the Online Voting System");
  let filePath = path.join(__dirname, "public", "hello.html");
  return res.sendFile(filePath);
});

app.listen(PORT, () => {
  mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((res) => {
      console.log("MongoDB is connected", res);
      console.log(`App listening on port ${PORT}`);
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
});
