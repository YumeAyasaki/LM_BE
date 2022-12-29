const Sach = require('../model/Sach');

let currentId;

Sach.find(function (err, db) {
    if (err) return console.error(err);
    if (db.length == 0) currentId = 0;
    else currentId = db[db.length - 1].id;
});


const themSach =async (req,res) =>{

    currentId ++;
    let sach = new Sach(req.body);
    sach.id = currentId;
    try {
        const savedSach = await sach.save();
        res.json(savedSach);
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = {themSach}