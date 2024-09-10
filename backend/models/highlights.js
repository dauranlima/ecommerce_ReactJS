const mongoose = require("mongoose")


const { Schema } = mongoose;

const highlightsProdsSchema = new Schema({
  name:{
    type: String,
  },
  title:{
    type: String,
  },
  buttonTitle:{
    type: String,
  },
  image:{
    type: String,
  },
  base:{
    type: String,
  },
  color:{
    type: String,
  }
  
}, { timestamps: true}
);

const Highlights = mongoose.model("Highlights", highlightsProdsSchema)

module.exports = {
  highlightsProdsSchema,
  Highlights
}