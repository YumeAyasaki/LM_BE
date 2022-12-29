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

module.exports = {create}