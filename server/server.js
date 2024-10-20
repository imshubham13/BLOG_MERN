const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const routesUrl = require("./routes/blog_route");

const app = express();

mongoose.connect("mongodb://localhost:27017/blogsfor");

app.use(express.json());
app.use(cors());

app.use("/api", routesUrl);

app.listen(5000, (req, res) => {
  console.log("Server is running =============> ");
});
