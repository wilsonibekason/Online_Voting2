import express, { Express, Response, Request } from "express";
import { config } from "dotenv";
import type { DotenvConfigOptions, DotenvParseOutput } from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

config();
const PORT = process.env.PORT || "9000";
const app = express();

mongoose.connect(process.env.MONGO_URL_MAIN as string, {});

mongoose.connection.on("connected", () => console.log("MongoDB is Connected"));

///  USE METHOD TRIGGERS
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  console.log("Testing the Online Voting System");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
