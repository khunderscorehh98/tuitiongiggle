const express = require('express');
const router = express.Router();
const db = require('../config.js');

// Add a new announcement
router.post('/announcement', function (req, res) {
    const { tutionID, title, announcement, date_of_announcement } = req.body;
    db.query(
        'INSERT INTO announcement (tutionID, title, announcement, date_of_announcement) VALUES (?, ?, ?, ?)',
        [tutionID, title, announcement, date_of_announcement],
        function (error, results) {
            if (error) throw error;
            res.send('Announcement added successfully');
        }
    );
});

// Add a new class
router.post('/class', function (req, res) {
    const { tutionID, classroom, subject, time_of_room } = req.body;
    db.query(
        'INSERT INTO class (tutionID, classroom, subject, time_of_room) VALUES (?, ?, ?, ?)',
        [tutionID, classroom, subject, time_of_room],
        function (error, results) {
            if (error) throw error;
            res.send('Class added successfully');
        }
    );
});

// Add a new complaint
router.post('/complaints', function (req, res) {
    const { tutionID, role, fullName, phoneNumber, title, feedback } = req.body;
    db.query(
        'INSERT INTO complaints (tutionID, role, fullName, phoneNumber, title, feedback) VALUES (?, ?, ?, ?, ?, ?)',
        [tutionID, role, fullName, phoneNumber, title, feedback],
        function (error, results) {
            if (error) throw error;
            res.send('Complaint added successfully');
        }
    );
});

// Add a new emergency contact
router.post('/emergencycontacts', function (req, res) {
    const { tutionID, studentID, fullName, phoneNumber, relationship, email, address } = req.body;
    db.query(
        'INSERT INTO emergencycontacts (tutionID, studentID, fullName, phoneNumber, relationship, email, address) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [tutionID, studentID, fullName, phoneNumber, relationship, email, address],
        function (error, results) {
            if (error) throw error;
            res.send('Emergency contact added successfully');
        }
    );
});

// Add new feedback
router.post('/feedback', function (req, res) {
    const { tutionID, studentID, subject, feedback, teacherName } = req.body;
    db.query(
        'INSERT INTO feedback (tutionID, studentID, subject, feedback, teacherName) VALUES (?, ?, ?, ?, ?)',
        [tutionID, studentID, subject, feedback, teacherName],
        function (error, results) {
            if (error) throw error;
            res.send('Feedback added successfully');
        }
    );
});

// Add a new fee
router.post('/fees', function (req, res) {
    const { tutionID, studentID, amount } = req.body;
    db.query(
        'INSERT INTO fees (tutionID, studentID, amount) VALUES (?, ?, ?)',
        [tutionID, studentID, amount],
        function (error, results) {
            if (error) throw error;
            res.send('Fee added successfully');
        }
    );
});

// Add a new parent
router.post('/parents', function (req, res) {
    const { tutionID, studentID, fullName, phoneNumber, email, address } = req.body;
    db.query(
        'INSERT INTO parents (tutionID, studentID, fullName, phoneNumber, email, address) VALUES (?, ?, ?, ?, ?, ?)',
        [tutionID, studentID, fullName, phoneNumber, email, address],
        function (error, results) {
            if (error) throw error;
            res.send('Parent added successfully');
        }
    );
});

// Add a new student group
router.post('/studentgroups', function (req, res) {
    const { tutionID, studentID, classID } = req.body;
    db.query(
        'INSERT INTO studentgroups (tutionID, studentID, classID) VALUES (?, ?, ?)',
        [tutionID, studentID, classID],
        function (error, results) {
            if (error) throw error;
            res.send('Student group added successfully');
        }
    );
});

// Add a new student
router.post('/students', function (req, res) {
    const { tutionID, username, password, fullName, year, date_of_birth, address, date_of_register } = req.body;
    db.query(
        'INSERT INTO students (tutionID, username, password, fullName, year, date_of_birth, address, date_of_register) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [tutionID, username, password, fullName, year, date_of_birth, address, date_of_register],
        function (error, results) {
            if (error) throw error;
            res.send('Student added successfully');
        }
    );
});

// Add a new teacher
router.post('/teachers', function (req, res) {
    const { tutionID, username, password, fullName, subject, phoneNumber, email, address } = req.body;
    db.query(
        'INSERT INTO teachers (tutionID, username, password, fullName, subject, phoneNumber, email, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [tutionID, username, password, fullName, subject, phoneNumber, email, address],
        function (error, results) {
            if (error) throw error;
            res.send('Teacher added successfully');
        }
    );
});

// Add a new timetable
router.post('/timetable', function (req, res) {
    const { tutionID, studentID, year, classroom, subject, time_of_room, day } = req.body;
    db.query(
        'INSERT INTO timetable (tutionID, studentID, year, classroom, subject, time_of_room, day) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [tutionID, studentID, year, classroom, subject, time_of_room, day],
        function (error, results) {
            if (error) throw error;
            res.send('Timetable added successfully');
        }
    );
});

// Add a new tuition
router.post('/tuition', function (req, res) {
    const { username, password, name, email, address, phoneNumber } = req.body;
    db.query(
        'INSERT INTO tuition (username, password, name, email, address, phoneNumber) VALUES (?, ?, ?, ?, ?, ?)',
        [username, password, name, email, address, phoneNumber],
        function (error, results) {
            if (error) throw error;
            res.send('Tuition added successfully');
        }
    );
});

module.exports = router;
