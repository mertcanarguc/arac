const express = require('express');
const router = express.Router();
const adminController = require("../controllers/adminController")
const  uyeController = require("../controllers/uyeController")

/* GET home page. */
router.get('/',adminController.admin);

//UYELER
router.get('/uyeler',uyeController.list)
router.get('/delete/:id',uyeController.delete)
router.post('/update/:id',uyeController.update)

module.exports = router;
