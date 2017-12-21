const mongoose = require('mongoose').connect('mongodb://localhost:27017/movie');
const Schema = mongoose.Schema

const movieSchema = new Schema({
 	poster_path: String,
    overview: String,
    title     : String,
    popularity: Number,
    tag: Array
})

const movieModel = mongoose.model('movie', movieSchema);

module.exports = movieModel