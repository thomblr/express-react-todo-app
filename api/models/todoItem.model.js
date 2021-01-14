const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoItemSchema = new Schema({
    item: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    status: {

    },
    owners: {

    },
    deadline: {

    },
    color: {

    },
    group: {

    },
}, {
    timestamp: true,
});

const TodoItem = mongoose.model('TodoItem', todoItemSchema);

module.exports = TodoItem;