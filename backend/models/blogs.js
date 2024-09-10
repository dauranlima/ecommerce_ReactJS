const mongoose = require("mongoose")


const { Schema } = mongoose;

const blogsSchema = new Schema({
  image:{
    type: String,
  },
  title:{
    type: String,
  },
  base:{
    type: String,
  },
  description:{
    type: String,
  },
}, { timestamps: true}
);

const Blogs = mongoose.model("Blogs", blogsSchema)

module.exports = {
  Blogs,
  blogsSchema,
}