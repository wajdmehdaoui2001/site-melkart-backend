const express=require("express");
const router=express.Router();
const {getDevis, createDevis,getDevisById}=require("../controllers/devisController");
router.get("/", getDevis).post("/", createDevis);
  
  router.get("/:id",getDevisById);

module.exports=router;