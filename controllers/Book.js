const Book = require('../model/Book');

const create =async (req,res) =>{
    try {   
        let book = new Book(req.body);
        const savedBook = await book.save();
        res.json(savedBook);
    } catch (error) {
        res.json({message:error});
    }
}


const findByName = async(req, res) =>{
    try {
        let regex = new RegExp(`${req.body.name}`);
        const bookList = await Book.find({ name: regex });
        res.status(200).json(bookList);
    } catch (error) {
        console.log("error");
        res.json({message:error});
    }
}


const findById = async(req, res) =>{
    try {
        const book = await Book.find({ _id: req.params._id});
        res.status(200).json(book);
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = {findByName, create, findById}