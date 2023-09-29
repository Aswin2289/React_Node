const user = require("../models/User");
const Video = require("../models/Video");
const bcrypt = require("bcryptjs");
const tokenUtil = require("../util/tokenUtil");
const uploads = require("../util/videoUploadUtil");
const multer = require("multer");

const getUser = async (req, res, next) => {
  try {
    const userData = await user.find();
    res.json(userData);
  } catch (err) {
    res.send("error" + err);
  }
};

const addUser = async (req, res, next) => {
  let cryptPassword = await bcrypt.hash(req.body.password, 8);
  const getUserData = new user({
    name: req.body.name,
    email: req.body.email,
    password: cryptPassword,
    status: 1,
  });
  try {
    const userResponseData = await getUserData.save();
    res.json(userResponseData);
  } catch (err) {
    res.send("error" + err);
  }
};

const userDetailView = async (req, res) => {
  const query = { email: req.body.email };
  const options = { email: 1, password: 1 };
  try {
    const userView = await user.findOne(query,options);
    if (!userView) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    console.log("user ===> ", userView.email);
    res.status(200).json({
      userView,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  const query = { email: req.body.email };
  try {
    const userView = await user.findOne(query);
    if (!userView) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const token = tokenUtil.tokenGenerate(userView);

    const refreshToken = tokenUtil.generateRefreshToken(userView);

    res.status(200).json({
      userView,
      token,
      refreshToken,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const currentUser = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return next(
        res.status(401).json({
          message: "UnAuthorized",
        })
      );
    }

    const userDetails = tokenUtil.verify(req);
    res.status(200).json({
      userDetails,
    });
  } catch (error) {
    return next(res.status(401).json({ message: "UnAuthorized" }));
  }
};

const videoUpload = async (req, res, next) => {
  try {
    console.log("-->", req.file.path);
    const { title, description } = req.body;

    const video = new Video({
      title,
      description,
      videoPath: req.file.path,
    });
    await video.save();
    res.status(201).send("Video uploaded successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getUser,
  addUser,
  userDetailView,
  login,
  currentUser,
  videoUpload,
};
