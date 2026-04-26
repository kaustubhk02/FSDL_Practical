const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/studentDB'); 

// schema
const studentSchema = new mongoose.Schema({
    name: String,
    roll: String,
    branch: String
});

const Student = mongoose.model('Student', studentSchema, 'students');

// add student
app.post('/add', async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send("Student Saved");
});

// get students
app.get('/students', async (req, res) => {
    const data = await Student.find();
    res.json(data);
});

app.listen(3000, () => console.log("Server running on port 3000"));