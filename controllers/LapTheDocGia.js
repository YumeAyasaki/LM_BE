const DocGia = require('../model/docGia');

let currentId;

DocGia.find(function (err, db) {
    if (err) return console.error(err);
    if (db.length == 0) currentId = 0;
    else currentId = db[db.length - 1].id;
});


const lapThe =async (req,res) =>{

    currentId ++;
    const docGia = new DocGia({
        id: currentId,
        hoVaTen: req.body.hoVaTen,
        loai: req.body.loai,
        ngaySinh: req.body.ngaySinh,
        email: req.body.email,
        diaChi: req.body.diaChi,
        ngayLapThe: req.body.ngayLapThe,
        nguoiLapThe: req.body.nguoiLapThe
    });
    try {
        const savedDocGia = await docGia.save();
        res.json(savedDocGia);
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = {lapThe}