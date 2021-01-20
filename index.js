const express = require('express')
const bodyParser = require('body-parser')
const errorHandler = require('./src/middlewares/errorHandler');

require('dotenv').config();
require('./src/models')


const { PORT } = require('./src/configs')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('Hello World')
})
require('./src/routers/index')(app);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
