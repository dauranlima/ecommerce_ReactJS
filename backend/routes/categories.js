const router = require("express").Router()


const categoriesController = require("../controllers/categoriesController");

router.route("/categorias").post((req, res) => categoriesController.create(req,res));

router.route("/categorias").get((req,res) => categoriesController.getAll(req,res));

router.route("/categorias/:id").get((req,res) => categoriesController.get(req,res));

router.route("/categorias/:id").delete((req,res) => categoriesController.delete(req,res));

router.route("/categorias/:id").put((req,res) => categoriesController.update(req,res));


module.exports = router;