const express = require('express');  
const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
//const mob-challenge = require(‘./lib/mob-challenge.js’); 
const fileUpload = require('express-fileupload');

app.use(fileUpload())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParse.json())
app.use(express.static(path.join(__dirname, 'public'))

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}))

app.set('view engine', '.hbs' );


app.get('/', async (req, res) => {
    res.render('index')
})

app.post('/upload', async (req, res) => {
    let file = req.files.foo;
    res.render('upload', {file});
    
})


app.listen(3000, () => {
    console.log('Server of the year!')
})

