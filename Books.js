const { default: mongoose } = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    author: { type: String }

})
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;