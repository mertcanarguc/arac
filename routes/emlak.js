const express = require('express');
const router = express.Router();
const emlakController = require("../controllers/emlakController")

router.get("/ekle",emlakController.insert)

module.exports = router;
