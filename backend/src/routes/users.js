const mongoose=require("mongoose");
const plm=require("passport-local-mongoose");

mongoose.connect("mongodb://localhost:27017/instagramData");

const userSchema=mongoose.Schema({
  username:String,
  name:String,
  email:String,
  password:String,
  profileImage:String,
  bio:String,
  posts:[{type:mongoose.Schema.Types.ObjectId,ref:"post"}],
})
//this create serilized and deserialized users
userSchema.plugin(plm);

module.exports=mongoose.model("user",userSchema);
