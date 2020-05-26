const async = require("async")

exports.admin = async(req,res,next)=>{
	res.render("back/layout")
}

exports.iletisim = async(req,res,next)=>{
	res.json({
		test:"Ok"
	})
}

exports.ilanlar = async(req,res,next)=>{
	res.json({
		test:"Ok"
	})
}

exports.uyeler = async(req,res,next)=>{
	res.json({
		test:"Ok"
	})
}