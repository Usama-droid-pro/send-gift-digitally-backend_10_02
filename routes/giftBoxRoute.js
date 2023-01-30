const express = require('express');
const router = express.Router();
const controller = require("../controllers/giftBoxController")
const upload = require("../middlewares/giftBoxMulter")

router.post("/createGiftBox" , upload.single("image"), controller.createGiftBox)
router.get("/getAllGiftboxes" , controller.getAllGiftBoxes)
router.get("/getGiftBoxByUserId" , controller.getGiftBoxesByUserId)
router.put("/updateGiftBox",upload.single("image"), controller.updateGiftBox)
router.delete("/deleteGiftBox/:giftBoxId", controller.deleteGiftBoxes)

module.exports= router;