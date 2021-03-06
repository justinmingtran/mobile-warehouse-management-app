const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const ItemSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    tags: {
        type: Array,
        required: true
    }
})

ItemSchema.plugin(passportLocalMongoose)
module.exports = Item = mongoose.model('item', ItemSchema)