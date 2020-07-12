const request = require('request');
const yargs= require("yargs");

yargs.version('1.1.0');

/* yargs.command({
    command:'city',
    describe:'Name of the city',
    builder:{
        name1:{
            describe:'Name of the city'
        }
    },
    handler: function(argv){
        console.log(argv);
    }
}) */

 const url =`http://api.weatherstack.com/current?access_key=0274be5cb2f9dae9e7d1560363a62b4d&query=${process.argv[2]}&units=m`;
request({url:url,json:true},(error,response)=>{
    console.log(`It's currently ${response.body.current.temperature} celcius and has a ${response.body.current.precip} of rain`);
}); 