const { urlencoded } = require("body-parser");
const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const colors = require("colors");
const mongoose = require("mongoose");
const { createProxyMiddleware } = require("http-proxy-middleware");
const port = 3000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

mongoose.set("strictQuery", true);
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//here are the api's
app.use("/api/users", require("./routers/userRouter"));
app.use("/api/preferences", require("./routers/preferencesRouter"));

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) =>
  res.sendFile(
    path.resolve(__dirname, "../", "frontend", "build", "index.html")
  )
);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on PORT ${port}`);
});
