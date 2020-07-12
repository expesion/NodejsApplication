const request = require('request');


fetchWeather = (location,output) => {
    const url = `http://api.weatherstack.com/current?access_key=0274be5cb2f9dae9e7d1560363a62b4d&query=${location}`;
    request({ url: url, json: true }, (_error, response) => {
         console.log(`It's currently ${response.body.current.temperature} celcius and has a ${response.body.current.precip} of rain`);
         const obj={location:location,message:`It's currently ${response.body.current.temperature} celcius and has a ${response.body.current.precip} of rain`}
         output(obj);
    });
}
module.exports = fetchWeather;