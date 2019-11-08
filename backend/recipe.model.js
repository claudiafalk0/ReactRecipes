const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Recipe = new Schema({
    recipe_name: {type: String},
    recipe_ingredients: {type: Array},
    recipe_steps: {type: Array}
});
module.exports = mongoose.model('Recipe', Recipe);