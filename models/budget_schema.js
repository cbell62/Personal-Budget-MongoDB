const mongoose = require("mongoose")

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true,
        minlength: 6
    }
}, {collection: 'budget'})

module.exports = mongoose.model('budget', budgetSchema)