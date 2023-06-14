import express from "express";
import { Endpoint } from "./types/endpoint.enum";
import { ErrorCode } from "./types/errorCode.enum";
import requireJsonContent from "./middlewares/requireJsonContent";
const router = express.Router();
const fs = require("fs/promises");

// use express' json middleware and
// Set the body size limit of JSON payload 100 bytes
router.use(express.json({ limit: 100 }));

router.get(Endpoint.users, requireJsonContent, async (req, res) => {
  try {
    const data = await fs.readFile("data.json");
    const parseData = JSON.parse(data);

    return res.send(parseData);
  } catch (error) {
    res.status(ErrorCode.getUsersError).send(error);
  }
});

module.exports = router;
