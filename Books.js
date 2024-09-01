const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    author: { type: String }

})
const Book = mongoose.model("Book", userSchema);
module.exports = Book;