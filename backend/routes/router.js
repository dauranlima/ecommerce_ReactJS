const router = require("express").Router()

const productRouter = require("./product")
const categoriesRouter = require("./categories")
const catRouter = require("./cat")
const highlightsRouter = require("./highlights")
const blogsRouter = require("./blogs")


router.use("/", productRouter);
router.use("/", categoriesRouter);
router.use("/", catRouter);
router.use("/", highlightsRouter);
router.use("/", blogsRouter);

module.exports = router;
