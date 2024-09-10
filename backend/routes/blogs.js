const router = require("express").Router()


const blogsController = require("../controllers/blogsController");

router.route("/blogs").post((req, res) => blogsController.create(req,res));

router.route("/blogs").get((req,res) => blogsController.getAll(req,res));

router.route("/blogs/:id").get((req,res) => blogsController.get(req,res));

router.route("/blogs/:id").delete((req,res) => blogsController.delete(req,res));

router.route("/blogs/:id").put((req,res) => blogsController.update(req,res));


module.exports = router;