const router = require("express").Router()


const catController = require("../controllers/catController");

router.route("/cat").post((req, res) => catController.create(req,res));

router.route("/cat").get((req,res) => catController.getAll(req,res));

router.route("/cat/:id").get((req,res) => catController.get(req,res));

router.route("/cat/:id").delete((req,res) => catController.delete(req,res));

router.route("/cat/:id").put((req,res) => catController.update(req,res));


module.exports = router;