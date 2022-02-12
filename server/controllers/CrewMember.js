const CrewMember = require('../models/CrewMember');
const { Op } = require('sequelize');
const roluri = ["Capitan","General","Bucatar"];

const getAllCrewMembers = async(req,res)=>{
    try{
        const members = await CrewMember.findAll();
        return res.status(200).json(members);
    }catch(err){
        return res.status(500).json({message:"getAllCrewMembers error"})
    }
}


const addCrewMember = async(req,res)=>{
    try{
        if(req.body.rol==="Bucatar" || req.body.rol==="Capitan" || req.body.rol==="General" ){
            const member = await CrewMember.create(req.body);
            return res.status(201).json(member);
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"addMember error"});
    }
}


const deleteMember = async(req,res) => {
    try{
        const result = await CrewMember.destroy({
            where:{
                id:req.params.id
            }
        });
        return res.status(200).json({message:"Stergere efectuata cu succes"});

    }catch(err){
        return res.status(500).json(err);
    }


}


const updateCrewMember = async(req,res) => {
    try {
        const result = await CrewMember.update({
            nume:req.body.nume,
            rol:req.body.rol

        }, {
            where: {
                id: req.params.id
            }
        })
        return res.status(200).json(result);

    }catch(err){
        return res.status(500).json(err);
    }
}



module.exports = {getAllCrewMembers,addCrewMember,deleteMember,updateCrewMember};