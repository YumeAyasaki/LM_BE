const Employee = require('../model/Employee');

const create =async (req,res) =>{
    try {
        let employee = new Employee(req.body);
        const savedEmployee = await employee.save();
        res.json(savedEmployee);
    } catch (error) {
        res.json({message:error});
    }
}



module.exports = {create}