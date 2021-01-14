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
        type: Schema.Types.ObjectId,
        ref: 'Status',
    },
    owners: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    deadline: {
        type: Date,
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: 'TodoGroup',
    },
}, {
    timestamp: true,
});

const TodoItem = mongoose.model('TodoItem', todoItemSchema);
module.exports = TodoItem;