const Sach = require('../model/Sach');

let currentId;

Sach.find(function (err, db) {
    if (err) return console.error(err);
    if (db.length == 0) currentId = 0;
    else currentId = db[db.length - 1].id;
});


const themSach =async (req,res) =>{

    currentId ++;
    const sach = new Sach({
        id: currentId,
        tenSach: req.body.tenSach,
        theLoai: req.body.theLoai,
        tacGia:  req.body.tacGia,
        namXuatBan: req.body.namXuatBan,
        nhaXuatBan: req.body.nhaXuatBan,
        ngayNhap: req.body.ngayNhap,
        triGia: req.body.triGia,
        nguoiTiepNhan: req.body.nguoiTiepNhan
    });
    try {
        const savedSach = await sach.save();
        res.json(savedSach);
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = {themSach}