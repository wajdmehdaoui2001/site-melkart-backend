
const asyncHandler =require("express-async-handler");
const Devis=require("../models/devisModel");

const getDevis=asyncHandler(async(req, res) => {
    const devis=await Devis.find();
    res.status(200).json(devis);
  });


const createDevis= asyncHandler(async (req, res) => {
    
    console.log(req.body);
    const{name, dateOfBirth,phone,gender,adress,projectName}=req.body;
    if(!name || !dateOfBirth || !phone || !gender || !adress || !projectName){
        res.status(400);
        throw new Error("champs obligatoires !");
    }
    const devis = await Devis.create({
        name,
        dateOfBirth,
        phone,
        gender,
        adress,
        projectName,


    });
    res.status(201).json(devis);
  });

  const getDevisById= asyncHandler(async(req, res) => {
    const devis = await Devis.findById(req.params.id);
    if(!devis){
        res.status(404);
        throw new Error("Devis not found");
    }
    res.status(200).json(devis);
  });

  module.exports={getDevis,createDevis,getDevisById};