// backend/models/data.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    header: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    pinned: {
        type: Boolean,
        default: false,
    },
    pinnedAt: {
        type: Date,
        required: false,
    },
});

const Data = mongoose.model('Data', DataSchema);
module.exports = Data;
