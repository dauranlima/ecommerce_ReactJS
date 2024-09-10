const mongoose = require("mongoose")

async function main(){
  try {
    await mongoose.connect("mongodb+srv://dauranlima:auclm722@cluster0.el7cayl.mongodb.net/?retryWrites=true&w=majority&appName=ecomm_db")
    console.log("db_connected!!!")
  } catch (error) {
    console.log(`Error:${error}`)
  }
}

module.exports = main