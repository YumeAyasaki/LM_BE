const BookLoan = require('../model/BookLoan');
const Book = require('../model/Book');
require("core-js/actual/array/group-by");




const loan =async (req,res) =>{
    try {   
        let bookLoan = new BookLoan(req.body);
        const savedBookLoan = await bookLoan.save();
        const savedBook = await Book.findOneAndUpdate({_id: req.body.book}, {state: false});
        res.json([savedBookLoan,  savedBook]);
    } catch (error) {
        res.json({message:error});
    }
}


const viewByReaderId = async(req,res) =>{
    try {   
        let bookLoan = await BookLoan.find({reader_id: req.params.id, returnDate: null}).populate('book', '_id name genres author');
        for (i = 0 ; i < bookLoan.length ; i ++){
            bookLoan[i] = bookLoan[i].book;
        }
        res.status(200).json(bookLoan);
    } catch (error) {
        res.json({message:error});
    }
}

const returnBook = async(req,res) =>{

}


module.exports = {loan, viewByReaderId, returnBook}