const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
const userRouter = require("./routers/userRouter");
dotenv.config();

const server = async function () {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
    mongoose.set("debug", true);

    app.use("/user", userRouter);
  } catch (error) {
    console.log({ error: "에러" });
  }
};
server();
app.listen(4000, function () {
  console.log("4000port connected");
});
