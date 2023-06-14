import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import requestLogger from "./middlewares/requestLogger";
import connectDB from "./connectDB";
dotenv.config();

const routes = require("./routes");
const app = express();
const port = process.env.PORT;

// connectDB();

app.use(cors());
app.use(requestLogger);
app.use(routes);
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Express app running on port ${port}`));
