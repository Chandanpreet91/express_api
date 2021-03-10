const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

app.get('/', (req,res) => {
    res.send('Hello World!')
})

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },() => {console.log('connected to DB!')
})

app.listen(3000, () => {
    console.log(`listening on Port 3000`)
})