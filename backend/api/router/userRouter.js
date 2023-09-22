const express = require("express");
const router = express.Router();
const userService = require("../Service/userService")
const headers=require("../middleware/requestHeader")


router.get("/addUser",userService.getUser)
router.post("/addUser",userService.addUser)
router.get("/userDetailView",userService.userDetailView)
router.post("/login",userService.login)

router.get("/currentUser",headers.app_json,userService.currentUser)


module.exports = router;
