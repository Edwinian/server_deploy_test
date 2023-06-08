require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors);
// let the react app to handle any unknown routes
// serve up the index.html if express does'nt recognize the route
const path = require("path");
app.get("/test", (req, res) => {
  res.send("server connected");
});

app.listen(process.env.PORT, () =>
  console.log(`Express app running on PORT ${process.env.PORT}`)
);
