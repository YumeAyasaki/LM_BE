const DocGia = require('../model/DocGia');

let currentId;

DocGia.find(function (err, db) {
    if (err) return console.error(err);
    if (db.length == 0) currentId = 0;
    else currentId = db[db.length - 1].id;
});


const lapThe =async (req,res) =>{

    currentId ++;
    let docGia = new DocGia(req.body);
    docGia.id = currentId;
    try {
        const savedDocGia = await docGia.save();
        res.json(savedDocGia);
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = {lapThe}