const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoGroupSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamp: true,
});

const TodoGroup = mongoose.model('TodoGroup', todoGroupSchema);

module.exports = TodoGroup;