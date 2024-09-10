const {Highlights: HighlightsModel } = require("../models/highlights")

const highlightsModelController = {

  create: async(req,res) => {
    try {
      
      const highlights = {
        name:  req.body.name,
        title:  req.body.title,
        buttonTitle:  req.body.buttonTitle,
        image: req.body.image,
        base:  req.body.base,
        color: req.body.color,
      }


      const response = await HighlightsModel.create(highlights);
      res.status(201).json({response, msg:"highlights cadastrada com sucesso."});
      console.log(response)
      
    } catch (error) {
      console.log(error)
    }
  },

  getAll: async(req,res) => {
    try {
      const highlights = await HighlightsModel.find();
      res.json(highlights);
    } catch (error) {
      console.log(error)
    }
  },

  get: async(req,res) =>{
    try {
      const id = req.params.id
      const highlights = await HighlightsModel.findById(id);
      
      if(!highlights){
        res.status(404).json({msg:"highlights não encontrada."})
        return;
      }
      res.json(highlights)
    } catch (error) {
      console.log(error)
    }
  },

  delete: async(req,res) => {
    try {
      const id = req.params.id
      const highlights = await HighlightsModel.findById(id);

      if(!highlights){
        res.status(404).json({msg:"highlights não encontrada."})
        return;
      }

      const deletedhighlights = await HighlightsModel.findByIdAndDelete(id)
      res.status(200).json({deletedhighlights, msg: "highlights excluida com sucesso!"})

    } catch (error) {
      console.log(error)
    }
  },

  update: async (req,res) => {

    try {
      
      const id = req.params.id;

      const highlights = {
        name:  req.body.name,
        title:  req.body.title,
        buttonTitle:  req.body.buttonTitle,
        image: req.body.image,
        base:  req.body.base,
        color: req.body.color,
      };

      const updatedhighlights = await HighlightsModel.findByIdAndUpdate(id, highlights)

      if(!updatedhighlights){
        res.status(404).json({msg:"highlights não encontrada."})
        return;
      }
      
      res.status(200).json({highlights, msg: "highlights atualizado com sucesso!"})

    } catch (error) {
      console.log(error)
    }

  }

}

module.exports = highlightsModelController;