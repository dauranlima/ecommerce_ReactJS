const router = require("express").Router()


const highlightsController = require("../controllers/highlightsController");

router.route("/highlights").post((req, res) => highlightsController.create(req,res));

router.route("/highlights").get((req,res) => highlightsController.getAll(req,res));

router.route("/highlights/:id").get((req,res) => highlightsController.get(req,res));

router.route("/highlights/:id").delete((req,res) => highlightsController.delete(req,res));

router.route("/highlights/:id").put((req,res) => highlightsController.update(req,res));


module.exports = router;