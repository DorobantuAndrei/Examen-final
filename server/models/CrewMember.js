const Sequelize = require('sequelize');
const db = require('../sequelize');
const Ship = require('./ships');

const CrewMember = db.define(
    'crewMembers',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        nume:{
            type:Sequelize.STRING,
            allowNull:false,
            validate:{
                min:5
            }
        },
        rol:{
            type:Sequelize.STRING
        }
    }
)

Ship.hasMany(CrewMember,{foreignKey:'shipId'});
CrewMember.belongsTo(Ship,{foreignKey:'shipId'});
module.exports = CrewMember;