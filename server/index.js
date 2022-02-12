"use strict"

const express = require('express');
const database = require('./sequelize');
const cors = require('cors');
const router = require('./router/router');
const port = 7000;

const app = express();
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json());
app.use(cors());
app.use('/api',router);

app.listen(port, async ()=>{
    console.log('Server started');
    try{
        await database.authenticate().then(()=>{
            console.log('Database created');
        })
    }catch(err){
        console.log(err);
    }
})