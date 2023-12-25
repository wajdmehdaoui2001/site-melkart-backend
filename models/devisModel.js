const mongoose = require("mongoose");
const devisSchema=mongoose.Schema({
    name: {
        type: String,
        required: [true, "please add the name"],
    },
    dateOfBirth: {
        type: Date,
        required: [true, "please add the date of birth"], 
    },
    phone: {
        type: String,
        required: [true, "please add the phone number"], 
    },
    gender: {
        type: String,
        enum: ['homme', 'femme', 'autre'] // Permet seulement ces valeurs spécifiées
      },
      adress: {
        type: String,
        required: [true, "please add the adress"],
    },
    projectName: {
        type: String,
        required: [true, "please add the project name"],
    },
    projectPurpose: {
        type: String,
        
    },
    otherWebsites: {
        type: String,
        
    },
    coordonnees: {
        type: String
    },
    caracteristics: {
        type: String
       
    },
    cible: {
        type: String
       
    },
    Host: {
        type: String
       
    },
    SEO: {
        type: String
       
    },
    description: {
        type: String
       
    },
    services: {
        type: String
       
    },
    startDate: {
        type: Date
       
    },
    endDate: {
        type: Date
       
    },
    questOne: {
        type: String
       
    },
    questTwo: {
        type: String
       
    },
    extraComments: {
        type: String
       
    },


},
{
    timestamps:true,
});
module.exports=mongoose.model("Devis", devisSchema);