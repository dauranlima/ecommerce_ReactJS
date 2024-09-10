const mongoose = require("mongoose")


const { Schema } = mongoose;

const categoriesSchema = new Schema({
  name:{
    type: String,
  },
  image:{
    type: String,
  },
  description:{
    type: String,
  },
  _base:{
    type: String,
  },
}, { timestamps: true}
);

const Categories = mongoose.model("Categories", categoriesSchema)

module.exports = {
  Categories,
  categoriesSchema,
}