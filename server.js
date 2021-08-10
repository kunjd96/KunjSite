const express= require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path:'./config/config.env'});

const app = express();
app.use(express.static(__dirname + '/dist/kunjsite'));

const port = process.env.PORT || 5000;
app.get('/*' , (req , res)=>{

   res.sendFile(path.join(__dirname));

});
app.get('*',(req,res) =>{
    res.sendFile(path.join(__dirname));
});

app.listen(port, console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`))
