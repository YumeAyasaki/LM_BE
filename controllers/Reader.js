const Reader = require('../model/Reader');

let currentId;

Reader.find(function (err, db) {
    if (err) return console.error(err);
    if (db.length == 0) currentId = 0;
    else currentId = db[db.length - 1].id;
});


const create =async (req,res) =>{
    try {
        currentId ++;
        let reader = new Reader(req.body);
        reader.id = currentId;
        const savedReader = await reader.save();
        res.json(savedReader);
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = {create}