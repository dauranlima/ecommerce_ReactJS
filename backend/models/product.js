const mongoose = require("mongoose")


const { Schema } = mongoose;

const productSchema = new Schema({
  name:{
    type: String,
  },
  images:{
    type: Array,
  },
  description:{
    type: String,
  },
  regularPrice:{
    type: Number,
  },
  discountedPrice:{
    type: Number,
  },
  quantity:{
    type: Number,
  },
  rating:{
    type: Number,
  },
  reviews:{
    type: Number,
  },
  category:{
    type: String,
  },
  colors:{
    type: Array,
  },
  brand:{
    type: String,
  },
  isStock:{
    type: Boolean,
  },
  overView:{
    type: String,
  },
  isNewy:{
    type: Boolean,
  },
  
}, { timestamps: true}
);

const Product = mongoose.model("Product", productSchema)

module.exports = {
  Product,
  productSchema,
}