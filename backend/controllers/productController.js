const {Product: ProductModel } = require("../models/product")

const productController = {

  create: async(req,res) => {
    try {
      
      const product = {
        name:  req.body.name,
        images: req.body.images,
        description: req.body.description,
        regularPrice:  req.body.regularPrice,
        discountedPrice:  req.body.discountedPrice,
        quantity:  req.body.quantity,
        rating:  req.body.rating,
        reviews:  req.body.reviews,
        category:  req.body.category,
        colors:  req.body.colors,
        brand:  req.body.brand,
        isStock:  req.body.isStock,
        overView:  req.body.overView,
        isNewy: req.body.isNewy,
      }


      const response = await ProductModel.create(product);
      res.status(201).json({response, msg:"produto cadastrado com sucesso."});
      console.log(response)
      
    } catch (error) {
      console.log(error)
    }
  },

  getAll: async(req,res) => {
    try {
      const product = await ProductModel.find();
      res.json(product);
    } catch (error) {
      console.log(error)
    }
  },

  get: async(req,res) =>{
    try {
      const id = req.params.id
      const product = await ProductModel.findById(id);
      
      if(!product){
        res.status(404).json({msg:"Produto não encontrado."})
        return;
      }
      res.json(product)
    } catch (error) {
      console.log(error)
    }
  },

  delete: async(req,res) => {
    try {
      const id = req.params.id
      const product = await ProductModel.findById(id);

      if(!product){
        res.status(404).json({msg:"Produto não encontrado."})
        return;
      }

      const deletedProduct = await ProductModel.findByIdAndDelete(id)
      res.status(200).json({deletedProduct, msg: "Produto excluido com sucesso!"})

    } catch (error) {
      console.log(error)
    }
  },

  update: async (req,res) => {

    try {
      
      const id = req.params.id;

      const product = {
        name:  req.body.name,
        images: req.body.images,
        description: req.body.description,
        regularPrice:  req.body.regularPrice,
        discountedPrice:  req.body.discountedPrice,
        quantity:  req.body.quantity,
        rating:  req.body.rating,
        reviews:  req.body.reviews,
        category:  req.body.category,
        colors:  req.body.colors,
        brand:  req.body.brand,
        isStock:  req.body.isStock,
        overView:  req.body.overView,
        isNewy: req.body.isNewy,
      };

      const updatedProduct = await ProductModel.findByIdAndUpdate(id, product)

      if(!updatedProduct){
        res.status(404).json({msg:"Serviço não encontrado."})
        return;
      }
      
      res.status(200).json({product, msg: "Produto atualizado com sucesso!"})

    } catch (error) {
      console.log(error)
    }

  }

}

module.exports = productController;