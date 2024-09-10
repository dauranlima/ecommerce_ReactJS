const mongoose = require("mongoose")


const { Schema } = mongoose;

const catSchema = new Schema({
  tvAndAudio:{
    type: String,
  },
  tvBox:{
    type: String,
  },
  powerTools:{
    type: String,
  },
  headphones:{
    type: String,
  },
  cellPhones:{
    type: String,
  },
  smartWatches:{
    type: String,
  },
  gameAndVideo:{
    type: String,
  },
  robotClean:{
    type: String,
  },
  sportWatches:{
    type: String,
  },
  tablets:{
    type: String,
  },
  computersAndLaptop:{
    type: String,
  },
  camerasAndPhotos:{
    type: String,
  },
}, { timestamps: true}
);

const Cat = mongoose.model("Cat", catSchema)

module.exports = {
  Cat,
  catSchema,
}