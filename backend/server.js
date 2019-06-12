'use strict'
const authRoutes = require('./auth/auth.routes')
const express = require('express');
const propierties = require('./config/properties');
const DB = require('./config/db');
//init DB
DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use('/api', router);
authRoutes(router);
router.get('/', (req, res) => {
    res.send('Hello there');
});
app.use(router);
app.listen(propierties.PORT, () => console.log(`Servidor corriendo en el puerto: ${propierties.PORT}`));