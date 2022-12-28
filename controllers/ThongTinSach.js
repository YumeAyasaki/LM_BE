const Sach = require('../model/Sach');

count = 0;
const themSach =async (req,res) =>{
    count ++;
    const sach = new Sach({
        id: count,
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