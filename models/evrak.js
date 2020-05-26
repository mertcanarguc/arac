const mongoose = require("mongoose");
const Schema = mongoose.Schema

const evrakSchema = new Schema({
	userid:String,
	evrak:Array,
	createdAt:{
		type:Date,
		default:Date.now
	}
})

module.exports = mongoose.model("Evrak",evrakSchema)