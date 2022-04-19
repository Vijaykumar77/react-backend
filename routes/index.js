const express = require("express");
const categoryRouter = require("./category");

const router = express.Router();

router.use("/blog", categoryRouter);


module.exports = router;


