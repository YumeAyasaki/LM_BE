const Book = require('../model/Book');

let currentId;

Book.find(function (err, db) {
    if (err) return console.error(err);
    if (db.length == 0) currentId = 0;
    else currentId = db[db.length - 1].id;
});


const create =async (req,res) =>{
    try {   
        currentId ++;
        let book = new Book(req.body);
        book.id = currentId;
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
        const book = await Book.find({ id: req.params.id});
        res.status(200).json(book);
    } catch (error) {
        console.log("error");
        res.json({message:error});
    }
}

module.exports = {findByName, create, findById}