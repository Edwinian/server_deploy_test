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

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
