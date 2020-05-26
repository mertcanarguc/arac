const express = require('express');
const router = express.Router();
const mainController = require("../controllers/mainController")

router.get("/test",function (req,res,next) {
	res.render("front/index2")
})

router.get("/ana",function (req,res,next) {
	res.render("front/index2")
})

router.get('/',mainController.anasayfa)
router.get('/tasit',mainController.tasit)


router.get('/satisyap',mainController.satisyap)
router.post('/onay',mainController.onay)

router.get('/contact',mainController.contact)
router.get('/about',mainController.about)
router.get('/sss',mainController.sss)
router.get('/fav',mainController.favoriler)

router.get('/test',function (req,res,next) {
	res.render("front/test",{
		apikey:"AIzaSyBFNulffCakiRjKtsjOIUjYQsHlkNypTVo",
	})
})

router.get("/paketler",function (req,res,next) {
	res.render("front/paketler")
})

router.get("/bireysel",function (req,res,next) {
	res.render("front/sozlesme/bireysel")
})

router.get("/kisisel",function (req,res,next) {
	res.render("front/sozlesme/kisisel")
})

router.get("/kullanim",function (req,res,next) {
	res.render("front/sozlesme/kullanim")
})

router.get("/musteri",function (req,res,next) {
	res.render("front/sozlesme/musteri")
})

module.exports = router;
