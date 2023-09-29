const multer = require('multer');
const video=require("../models/Video")


const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
const upload = multer({ storage });

module.exports={upload}