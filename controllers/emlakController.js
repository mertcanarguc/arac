const async = require("async")
const Emlak = require("../models/ads")
const cloudinary = require("cloudinary")
const cloudinaryStorage = require('multer-storage-cloudinary');

exports.emlak = async(req,res,next)=>{
	
}

exports.list = async(req,res,next)=>{

}

exports.update = async(req,res,next)=>{

}

exports.delete = async(req,res,next)=>{

}

exports.insert = async(req,res,next)=>{
	res.render("front/ads/addestate",{
		user:req.user
	})
}

exports.detail = async(req,res,next)=>{
	
}