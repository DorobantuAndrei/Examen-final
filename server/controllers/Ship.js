const Ship = require('../models/ships');
const CrewMember = require('../models/CrewMember');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const getAllShips = async(req,res) => {
    try{
        const result = await Ship.findAll();
        return res.status(200).json(result);

    }catch(err){
        return res.status(500).json(err)
    }
}


const postShip = async(req,res)=>{
    try {
        console.log(req.body);
        const newShip = await Ship.create(req.body);
        return res.status(200).json(newShip);
    }catch(err){
        return res.status(500).json(err);
    }
}


const updateShip = async(req,res) => {
    try {
        const result = await Ship.update({
            nume:req.body.nume,
            displacement :req.body.displacement 

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


const deleteShip = async(req,res) => {
    try{
        const result = await Ship.destroy({
            where:{
                id:req.params.id
            }
        });
        return res.status(200).json({message:"Stergere efectuata cu succes"});

    }catch(err){
        return res.status(500).json(err);
    }


}


const searchShip = async (req, res) => {
    try {
        const searchBy = req.query.searchTerm || '';
        const order = req.query.order || 'ASC';
        const ships = await Ship.findAll({
            where: {
                [Op.or]: [{
                    nume: {
                        [Op.like]: `%${searchBy}%`
                    }
                }, {
                    displacement : {
                        [Op.like]: `%${searchBy}`
                    }
                }]
            },
            order: [
                ['id', order] // 'ASC' OR 'DESC'
            ]
        });

        return res.status(200).json(ships);
    } catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}


module.exports = {
    getAllShips,
    postShip,
    updateShip,
    deleteShip,
    searchShip
}