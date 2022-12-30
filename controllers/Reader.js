const Reader = require('../model/Reader');


const create =async (req,res) =>{
    try {
        let reader = new Reader(req.body);
        const savedReader = await reader.save();
        res.json(savedReader);
    } catch (error) {
        res.json({message:error});
    }
}

const getReaderById = async(req, res) =>{
    try {
        console.log(req.params);
        let reader = await Reader.findOne({_id: req.params._id});
        res.status(200).json(reader);
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = {create, getReaderById}