const router = require("express").Router()

const productRouter = require("./product")
const categoriesRouter = require("./categories")


router.use("/", productRouter);
router.use("/", categoriesRouter);

module.exports = router;
