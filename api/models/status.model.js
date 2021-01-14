const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const statusSchema = new Schema({
    value: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        lowercase: true,
    },
    color: {
        type: String,
        reqired: true,
        trim: true,
        lowercase: true,
        minlength: 7,
        maxlength: 7,
    },
});

const Status = mongoose.model('Status', statusSchema);
module.exports = Status;