const NhanVien = require('../model/NhanVien');

let currentId;

NhanVien.find(function (err, db) {
    if (err) return console.error(err);
    if (db.length == 0) currentId = 0;
    else currentId = db[db.length - 1].id;
});


const themNhanVien =async (req,res) =>{

    currentId ++;
    let nhanVien = new NhanVien(req.body);
    nhanVien.id = currentId;
    try {
        const savedNhanVien = await nhanVien.save();
        res.json(savedNhanVien);
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = {themNhanVien}