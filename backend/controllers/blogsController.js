const {Blogs: BlogsModel } = require("../models/blogs")

const blogsController = {

  create: async(req,res) => {
    try {
      
      const blogs = {
        image: req.body.image,
        title:  req.body.title,
        base:  req.body.base,
        description: req.body.description,
      }


      const response = await BlogsModel.create(blogs);
      res.status(201).json({response, msg:"Blog cadastrado com sucesso."});
      console.log(response)
      
    } catch (error) {
      console.log(error)
    }
  },

  getAll: async(req,res) => {
    try {
      const blogs = await BlogsModel.find();
      res.json(blogs);
    } catch (error) {
      console.log(error)
    }
  },

  get: async(req,res) =>{
    try {
      const id = req.params.id
      const blogs = await BlogsModel.findById(id);
      
      if(!blogs){
        res.status(404).json({msg:"Blog não encontrada."})
        return;
      }
      res.json(blogs)
    } catch (error) {
      console.log(error)
    }
  },

  delete: async(req,res) => {
    try {
      const id = req.params.id
      const blogs = await BlogsModel.findById(id);

      if(!blogs){
        res.status(404).json({msg:"Blog não encontrada."})
        return;
      }

      const deletedblogs = await BlogsModel.findByIdAndDelete(id)
      res.status(200).json({deletedblogs, msg: "Blog excluida com sucesso!"})

    } catch (error) {
      console.log(error)
    }
  },

  update: async (req,res) => {

    try {
      
      const id = req.params.id;

      const blogs = {
        image: req.body.image,
        title:  req.body.title,
        base:  req.body.base,
        description: req.body.description,
      };

      const updatedblogs = await BlogsModel.findByIdAndUpdate(id, blogs)

      if(!updatedblogs){
        res.status(404).json({msg:"Blog não encontrada."})
        return;
      }
      
      res.status(200).json({blogs, msg: "Blog atualizado com sucesso!"})

    } catch (error) {
      console.log(error)
    }

  }

}

module.exports = blogsController;