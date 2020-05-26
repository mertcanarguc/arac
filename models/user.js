var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    ad:String,
    soyad:String,
    mail:String,
    sehir:String,
    ilce:String,
    tel:String,
    adres:String,
    username: String,
    password: String,
    tip:{type:Number,default:2},
    createdAt:{
        type:Date,
        default:Date.now
    }
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);