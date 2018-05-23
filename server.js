const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users').default;
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

// db Config from 
const db = require('./config/keys').mongoURI;

// Connect to mongoDB

mongoose
    .connect(db)
    .then((() => {
        console.log('------------------------------------');
        console.log('connection to mongoDB is done successfully');
        console.log('------------------------------------');
    }))
    .catch(err => {
        console.log('------------------------------------');
        console.log(err);
        console.log('------------------------------------');
    });

const app = express();

// Use Routes 

app.use('/api/users', users)



app.us('/api/profile', profile);
app.use('/api/posts', posts);

app.get('/', (req, res) => res.send('Hello hari!!'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running port ${port}`))