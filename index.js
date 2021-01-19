const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer');
require('dotenv').config();
require('./src/models')
const path = require('path');


const { PORT } = require('./src/configs')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('Hello World')
})
require('./src/routers/index')(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
