const mongoose = require("mongoose");
const DoubtSchema = new mongoose.Schema(
  {
    title:{
      type:String,
      required: true,
      default:"",
    },
    desc: {
      type: String,
      required: true,
      
    },
    image: {
      type: String,
      required: true,
     
    },
    creator: {
      type: String,
      required: true,
      default:""
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doubt", DoubtSchema);