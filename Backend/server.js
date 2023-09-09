require('dotenv').config({path:'./config.env'});
const app = require('./app');
const mongoose = require('mongoose');
const PORT = 8000 | process.env.PORT;
const DB = process.env.URL_DB.replace('<password>', process.env.PASSWORD_DB);
const connecting = async ()=>{
    try{
        await mongoose.connect(DB, {
            useNewUrlParser: true,
        });
        app.listen(PORT , ()=>{
            console.log('connecting to DB',`\nServer Listening on PORT: ${PORT}`);
        })
    }catch(err){
        console.log(err)
        process.exit();
    }
}

connecting();
