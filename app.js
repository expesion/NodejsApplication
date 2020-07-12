const request = require('request');
const express =require('express');
const path =require('path');

const path1=path.join(__dirname+'/public')
const port = process.env.PORT
console.log(path1);
const app = express();
app.use(express.static(path1));
app.get('',(res,req)=>{
    req.send('index')
})
app.listen(port);
 /* const url =`http://api.weatherstack.com/current?access_key=0274be5cb2f9dae9e7d1560363a62b4d&query=Bangalore&units=m`;
request({url:url,json:true},(error,response)=>{
    console.log(`It's currently ${response.body.current.temperature} celcius and has a ${response.body.current.precip} of rain`);
}); */ 