const express = require('express');
const app = express();
const Book = require('./Books')
const mongoose = require('mongoose');
app.use(express.json())
const port = 3008;

mongoose.connect("mongodb://localhost:27017/books");
app.post('/book/create', async (req, res) => {
    const user = new Book(req.body);
    user.save();
    res.send(user);
})
app.get('/book/create', async (req, res) => {
    const user = await Book.find();
    res.send(user);
})
app.delete('/book/delete/:id', async (req, res) => {
    const user = await Book.findByIdAndDelete(req.params.id, req.body);
    res.send(user);
})
app.put('/book/update/:id', async (req, res) => {
    const user = await Book.findByIdAndUpdate(req.params.id);
    res.send(user);
})
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
