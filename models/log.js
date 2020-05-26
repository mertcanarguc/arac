const mongoose = require("mongoose")
const Schema = mongoose.Schema

const logSchema = new Schema({
    log:{type:String},
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Log",logSchema)