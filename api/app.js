const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


/*
*   Connect to DB
*/
const uri = process.env.URI;
mongoose.connect(uri, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});


/*
*   Handling Routes
*/
const userRoute = require('./routes/users');
const statusRoute = require('./routes/status');
const todoItemRoute = require('./routes/todoItem');
const todoGroupRoute = require('./routes/todoGroup');

app.use('/api/users', userRoute);
app.use('/api/status', statusRoute);
app.use('/api/todoitems', todoItemRoute);
app.use('/api/todogroups', todoGroupRoute);


/*
*   Starting the app
*/
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});