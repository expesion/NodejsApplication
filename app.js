const express = require('express');
const path = require('path');
const hbs = require('hbs')

const fetchWeather = require('./server')
const port =process.env.PORT

const viewsPath = path.join(__dirname, 'templates/views')
const partialsPath = path.join(__dirname, 'templates/partials')

const app = express();
const directory = path.join(__dirname)

hbs.registerPartials(partialsPath)
app.set('views', viewsPath)

app.set('view engine', 'hbs')
    //Static resource to serve
app.use(express.static(directory));

app.get('', (req, res) => {
    res.render('index', { title: 'Weather App', header: 'Welcome Welcome', name: 'thaha' })
})
app.get('/about', (req, res) => {
    res.render('about', { title: 'mamamia', desc: 'This is a weather app', name: 'thaha' })
})
app.get('/weather', (req, res) => {
    if (!req.query.location) {
        return res.send({ error: 'Please specifiy a location' })
    }
    fetchWeather(req.query.location,(output)=>{
        res.send({ location: output.location, weather: output.message })
    })
    
})

app.get('/help', (req, res) => {
    res.send('help page');
})
app.get('*', (req, res) => {
    res.render('error', { message: 'This page cannot be found', redirect: 'about', title: 'Weather App', header: 'Welcome Welcome', name: 'thaha' })
})
app.listen(port, () => {
    console.log('Server is running')
});