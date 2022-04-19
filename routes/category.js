const express=require("express")
const handler=require("../controllers/detail")
const router=express.Router()

router.route("/:category").get(handler.categoryHandler)
router.route("/:category/:id").get(handler.idHandler)

module.exports=router



