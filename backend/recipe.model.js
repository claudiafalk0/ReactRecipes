const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Recipe = new Schema({
    'name': String,
    'ingredients': [{type: String}],
    'steps': [{type: String}]
});
module.exports = mongoose.model('Recipe', Recipe);