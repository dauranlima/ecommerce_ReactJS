const {Categories: CategoriesModel } = require("../models/categories")

const categoriesController = {

  create: async(req,res) => {
    try {
      
      const categories = {
        name:  req.body.name,
        image: req.body.image,
        description: req.body.description,
        _base: req.body._base
      }


      const response = await CategoriesModel.create(categories);
      res.status(201).json({response, msg:"Categoria cadastrada com sucesso."});
      console.log(response)
      
    } catch (error) {
      console.log(error)
    }
  },

  getAll: async(req,res) => {
    try {
      const categories = await CategoriesModel.find();
      res.json(categories);
    } catch (error) {
      console.log(error)
    }
  },

  get: async(req,res) =>{
    try {
      const id = req.params.id
      const categories = await CategoriesModel.findById(id);
      
      if(!categories){
        res.status(404).json({msg:"Categoria não encontrada."})
        return;
      }
      res.json(categories)
    } catch (error) {
      console.log(error)
    }
  },

  delete: async(req,res) => {
    try {
      const id = req.params.id
      const categories = await CategoriesModel.findById(id);

      if(!categories){
        res.status(404).json({msg:"Categoria não encontrada."})
        return;
      }

      const deletedcategories = await CategoriesModel.findByIdAndDelete(id)
      res.status(200).json({deletedcategories, msg: "Categoria excluida com sucesso!"})

    } catch (error) {
      console.log(error)
    }
  },

  update: async (req,res) => {

    try {
      
      const id = req.params.id;

      const categories = {
        name:  req.body.name,
        image: req.body.image,
        description: req.body.description,
        _base: req.body._base
      };

      const updatedcategories = await CategoriesModel.findByIdAndUpdate(id, categories)

      if(!updatedcategories){
        res.status(404).json({msg:"Categoria não encontrada."})
        return;
      }
      
      res.status(200).json({categories, msg: "Categoria atualizado com sucesso!"})

    } catch (error) {
      console.log(error)
    }

  }

}

module.exports = categoriesController;