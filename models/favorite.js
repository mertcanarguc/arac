const mongoose = require("async")
const Schema = mongoose.Schema

const favSchema = new Schema({
	user:String,
	ads:{
		title:String,
		desc:String,
		kapak:String
	},
	
})

module.exports = mongoose.model("Fav",favSchema)