const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const multer = require("multer");
const userRouter = require("./router/userRouter");
const app = express();
dotenv.config();
let port = process.env.port;
let url = process.env.url;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on("open", () => {
  console.log("connected...");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(express.json());

// const upload = multer({ dest: "uploads1/" });

// app.post("/upload_files", uploadFiles);
// function uploadFiles(req, res) {
//     console.log(req.body);
// }
// app.post("/upload_files", upload.array("files"), uploadFiles);

// function uploadFiles(req, res) {
//   console.log("------>inside upload files");
//   console.log("++++", req.body);
//   console.log(req.files[0].path);

//   res.json({ message: "Successfully uploaded files" });
// }
app.use("/", userRouter);
