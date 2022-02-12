const Sequelize = require('sequelize');
const db = require('../sequelize');

const Ship = db.define(
    'Ships',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:true
        },
        nume:{
            type:Sequelize.STRING,
            allowNull:false,
            validate:{
                len:[3,100]
            }
        },
        displacement :{
            type:Sequelize.INTEGER,
            validate:{
                min:50
            }
        }
    }
)

module.exports = Ship;