const express = require("express");
const router = express.Router();
const userService = require("../Service/userService")


router.get("/addUser",userService.getUser)
router.post("/addUser",userService.addUser)
router.get("/userDetailView",userService.userDetailView)

module.exports = router;
