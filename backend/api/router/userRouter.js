const express = require("express");
const router = express.Router();
const userService = require("../Service/userService")
const headers=require("../middleware/requestHeader")
const upload=require("../util/videoUploadUtil")
const token=require("../util/tokenUtil")


router.get("/addUser",userService.getUser)
router.post("/addUser",userService.addUser)
router.get("/userDetailView",userService.userDetailView)
router.post("/login",userService.login)

router.get("/currentUser",headers.app_json,userService.currentUser)

router.post("/upload",headers.multipart,token.tokenVerify,upload.upload.single("video"),userService.videoUpload)


module.exports = router;
