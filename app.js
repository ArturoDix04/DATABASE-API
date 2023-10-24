const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const router = require('./routes/route');
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(morgan('dev'));

var accessLogStream = fs.createWriteStream(path.join(__dirname, '/logs/access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = 3001;

app.listen(port, () => {
    console.log(`Server started on: ` + port);
})