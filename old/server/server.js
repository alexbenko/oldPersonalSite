const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const router = require('./router.js');

const app = express();
const port = process.env.PORT || 4242 ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/', router);


app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
