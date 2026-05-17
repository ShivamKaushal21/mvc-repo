const Student = require("../models/Student");


// CREATE
const createStudent = async (req, res) => {

    try {

        const student = await Student.create(req.body);

        res.status(201).json(student);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// GET ALL
const getStudents = async (req, res) => {

    try {

        const students = await Student.find();

        res.json(students);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// GET SINGLE
const getStudentById = async (req, res) => {

    try {

        const student = await Student.findById(req.params.id);

        res.json(student);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// UPDATE
const updateStudent = async (req, res) => {

    try {

        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(student);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// DELETE
const deleteStudent = async (req, res) => {

    try {

        await Student.findByIdAndDelete(req.params.id);

        res.json({
            message: "Student Deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


module.exports = {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};