const mongoose  = require("mongoose");
const Schema = mongoose.Schema

const vehicleSchema = new Schema({
	user:Object,
	title:{type:String,required:true},
	desc:{type:String,required:true},
	sehir:{type:String,required:true},
	ilce:{type:String,required:true},
	adres:{type:String,required:true},
	konum:{type:String,required:true},
	kapak:{type:String,required:true},
	fotos:{type:Array},
	kat:{type:Number,required:true},
	apkat:{type:Number,required:true},
	isitma:{type:String,required:true},
	emlaktip:{type:String,required:true},
	kimden:{type:String,required:true},
	satkir:{type:String,required:true},
	net:{type:Number,required:true},
	brut:{type:Number,required:true},
	oda:{type:String,required:true},
	cephe:{type:String,required:true},
	balkon:{type:String,required:true},
	esyali:{type:String,required:true},
	durumu:{type:String,required:true},
	takas:{type:String,required:true}, //satılıklarda geçerli
	site:{type:String,required:true}
})

module.exports = mongoose.model("Vehicle",vehicleSchema)