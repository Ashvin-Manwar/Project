import express, { Router } from "express";
import mongoose from "mongoose";
import router from "../backend/routes/user-routes.js";
const app = express();

app.use("/api/user", router);

mongoose
  .connect(
    "mongodb+srv://admin:Rbl8eXy2VawEencB@cluster1.dtv7rvt.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => {
    console.log("Connected to Database and Listening to Localhost 5000");
  })
  .catch((err) => console.log(err));
