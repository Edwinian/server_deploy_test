import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Endpoint } from "./types/endpoint.enum";
import { ErrorCode } from "./types/errorCode.enum";
dotenv.config();

const fs = require("fs/promises");
const app = express();
app.use(cors());
const port = process.env.PORT;

app.get(Endpoint.users, async (req, res) => {
  try {
    const data = await fs.readFile("data.json");
    const parseData = JSON.parse(data);

    return res.send(parseData);
  } catch (error) {
    res.status(ErrorCode.getUsersError).send(error);
  }
});

app.listen(port, () => console.log(`Express app running on port ${port}`));
