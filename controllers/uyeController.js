const async = require("async")
const Uye = require("../models/user")
const Log = require("../models/log")

exports.list = async(req,res,next)=>{
    let uye = await Uye.find({ })

    res.render("back/uyeler",{
        title:"Uyeler yönetimi",
        uye:uye
    })
}

exports.delete = async(req,res,next)=>{
    let uye = await Uye.findById({"_id":req.params.id})

    uye.remove((err,data)=>{
        if (err) {
            new Log({log:err}).save()
        } else {
            res.redirect("/admin/uyeler")
        }
    })
}

exports.update = async(req,res,next)=>{
    let uye  = await Uye.findById({"_id":req.params.id})

    uye.update(req.body,(err,data)=>{
        if (err) {
            new Log({log:err}).save()
        } else {
            
        }
    })
}