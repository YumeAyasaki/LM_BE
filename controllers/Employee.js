const Employee = require('../model/Employee');

let currentId;

Employee.find(function (err, db) {
    if (err) return console.error(err);
    if (db.length == 0) currentId = 0;
    else currentId = db[db.length - 1].id;
});


const create =async (req,res) =>{
    try {
        currentId ++;
        let employee = new Employee(req.body);
        employee.id = currentId;
        const savedEmployee = await employee.save();
        res.json(savedEmployee);
    } catch (error) {
        res.json({message:error});
    }
}



module.exports = {create}