const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./sqlite/examen.db'
})

sequelize.sync({alter:true}).then(()=>{
    console.log('All models were syncronized ');
})

module.exports = sequelize;