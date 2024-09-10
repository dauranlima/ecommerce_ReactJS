const {Cat: CatModel } = require("../models/cat")

const catController = {

  create: async(req,res) => {
    try {
      
      const cat = {
        tvAndAudio:  req.body.tvAndAudio,
        tvBox: req.body.tvBox,
        powerTools:  req.body.powerTools,
        headphones: req.body.headphones,
        cellPhones: req.body.cellPhones,
        smartWatches:  req.body.smartWatches,
        gameAndVideo: req.body.gameAndVideo,
        robotClean: req.body.robotClean,
        sportWatches:  req.body.sportWatches,
        tablets: req.body.tablets,
        computersAndLaptop: req.body.computersAndLaptop,
        camerasAndPhotos: req.body.camerasAndPhotos
      }


      const response = await CatModel.create(cat);
      res.status(201).json({response, msg:"Cat cadastrada com sucesso."});
      console.log(response)
      
    } catch (error) {
      console.log(error)
    }
  },

  getAll: async(req,res) => {
    try {
      const cat = await CatModel.find();
      res.json(cat);
    } catch (error) {
      console.log(error)
    }
  },

  get: async(req,res) =>{
    try {
      const id = req.params.id
      const cat = await CatModel.findById(id);
      
      if(!cat){
        res.status(404).json({msg:"Cat não encontrada."})
        return;
      }
      res.json(cat)
    } catch (error) {
      console.log(error)
    }
  },

  delete: async(req,res) => {
    try {
      const id = req.params.id
      const cat = await CatModel.findById(id);

      if(!cat){
        res.status(404).json({msg:"Cat não encontrada."})
        return;
      }

      const deletedcat = await CatModel.findByIdAndDelete(id)
      res.status(200).json({deletedcat, msg: "Cat excluida com sucesso!"})

    } catch (error) {
      console.log(error)
    }
  },

  update: async (req,res) => {

    try {
      
      const id = req.params.id;

      const cat = {
        tvAndAudio:  req.body.tvAndAudio,
        tvBox: req.body.tvBox,
        powerTools:  req.body.powerTools,
        headphones: req.body.headphones,
        cellPhones: req.body.cellPhones,
        smartWatches:  req.body.smartWatches,
        gameAndVideo: req.body.gameAndVideo,
        robotClean: req.body.robotClean,
        sportWatches:  req.body.sportWatches,
        tablets: req.body.tablets,
        computersAndLaptop: req.body.computersAndLaptop,
        camerasAndPhotos: req.body.camerasAndPhotos,
      };

      const updatedcat = await CatModel.findByIdAndUpdate(id, cat)

      if(!updatedcat){
        res.status(404).json({msg:"Cat não encontrada."})
        return;
      }
      
      res.status(200).json({cat, msg: "Cat atualizado com sucesso!"})

    } catch (error) {
      console.log(error)
    }

  }

}

module.exports = catController;