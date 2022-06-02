const express = require("express");
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, `config/.env.${process.env.NODE_ENV.trim()}`),
});

require("./db/mongoose");

const userRouter = require("./routers/user.router");
const productRouter = require("./routers/product.router");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(productRouter);

module.exports = app;
