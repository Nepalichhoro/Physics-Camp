var mongoose=require("mongoose");

// SCHEMA SETUP
var physicsgroundSchema=new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

module.exports=mongoose.model("Physicsground", physicsgroundSchema);
