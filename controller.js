const express = require('express')
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

// ini buat render file hbs
app.set('view engine', 'hbs');

// ini buat change default folder views
app.use(express.static(path.join(__dirname, 'views')));
// app.set("views", path.join(__dirname, "views"));

//pages
app.get('/', (req, res) => {
   res.render('home')
})

app.get('/about', (req, res) => {
   res.render('About')
})

app.get('/contact', (req, res) => {
   res.render('Contact')
})

app.get('/menu', (req, res) => {
   res.render('menu')
})

 app.get('/reservation', (req, res) => {
    res.render('Reservation')
 })

app.get('*', (req, res) => {
  res.send('Page tidak ketemu')
})
  
app.listen(process.env.PORT || 8000, () => {
  console.log('8000')
})