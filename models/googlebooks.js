const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: Number,
    title: {type: String, required: true},
    authors:{type: [String], required: true},
    description: String,
    image: String,
    bookLink: String, 
});

const GoogleBooks = mongoose.model("Book", bookSchema);

module.exports = GoogleBooks; 