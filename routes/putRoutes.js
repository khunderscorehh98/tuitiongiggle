const express = require('express');
const router = express.Router();
const db = require('../config.js');

// Update an announcement by ID
router.put('/announcement/:id', function (req, res) {
    const { id } = req.params;
    const { tutionID, title, announcement, date_of_announcement } = req.body;
    db.query(
        'UPDATE announcement SET tutionID = ?, title = ?, announcement = ?, date_of_announcement = ? WHERE id = ?',
        [tutionID, title, announcement, date_of_announcement, id],
        function (error, results) {
            if (error) throw error;
            res.send('Announcement updated successfully');
        }
    );
});

// Update a class by ID
router.put('/class/:id', function (req, res) {
    const { id } = req.params;
    const { tutionID, classroom, subject, time_of_room } = req.body;
    db.query(
        'UPDATE class SET tutionID = ?, classroom = ?, subject = ?, time_of_room = ? WHERE id = ?',
        [tutionID, classroom, subject, time_of_room, id],
        function (error, results) {
            if (error) throw error;
            res.send('Class updated successfully');
        }
    );
});

// Update a complaint by ID
router.put('/complaints/:id', function (req, res) {
    const { id } = req.params;
    const { tutionID, role, fullName, phoneNumber, title, feedback } = req.body;
    db.query(
        'UPDATE complaints SET tutionID = ?, role = ?, fullName = ?, phoneNumber = ?, title = ?, feedback = ? WHERE id = ?',
        [tutionID, role, fullName, phoneNumber, title, feedback, id],
        function (error, results) {
            if (error) throw error;
            res.send('Complaint updated successfully');
        }
    );
});

// Update an emergency contact by ID
router.put('/emergencycontacts/:id', function (req, res) {
    const { id } = req.params;
    const { tutionID, studentID, fullName, phoneNumber, relationship, email, address } = req.body;
    db.query(
        'UPDATE emergencycontacts SET tutionID = ?, studentID = ?, fullName = ?, phoneNumber = ?, relationship = ?, email = ?, address = ? WHERE id = ?',
        [tutionID, studentID, fullName, phoneNumber, relationship, email, address, id],
        function (error, results) {
            if (error) throw error;
            res.send('Emergency contact updated successfully');
        }
    );
});

// Update feedback by ID
router.put('/feedback/:id', function (req, res) {
    const { id } = req.params;
    const { tutionID, studentID, subject, feedback, teacherName } = req.body;
    db.query(
        'UPDATE feedback SET tutionID = ?, studentID = ?, subject = ?, feedback = ?, teacherName = ? WHERE id = ?',
        [tutionID, studentID, subject, feedback, teacherName, id],
        function (error, results) {
            if (error) throw error;
            res.send('Feedback updated successfully');
        }
    );
});

// Update a fee by ID
router.put('/fees/:id', function (req, res) {
    const { id } = req.params;
    const { tutionID, studentID, amount } = req.body;
    db.query(
        'UPDATE fees SET tutionID = ?, studentID = ?, amount = ? WHERE id = ?',
        [tutionID, studentID, amount, id],
        function (error, results) {
            if (error) throw error;
            res.send('Fee updated successfully');
        }
    );
});

// Update a parent by ID
router.put('/parents/:id', function (req, res) {
    const { id } = req.params;
    const { tutionID, studentID, fullName, phoneNumber, email, address } = req.body;
    db.query(
        'UPDATE parents SET tutionID = ?, studentID = ?, fullName = ?, phoneNumber = ?, email = ?, address = ? WHERE id = ?',
        [tutionID, studentID, fullName, phoneNumber, email, address, id],
        function (error, results) {
            if (error) throw error;
            res.send('Parent updated successfully');
        }
    );
});

// Update a student group by ID
router.put('/studentgroups/:id', function (req, res) {
    const { id } = req.params;
    const { tutionID, studentID, classID } = req.body;
    db.query(
        'UPDATE studentgroups SET tutionID = ?, studentID = ?, classID = ? WHERE id = ?',
        [tutionID, studentID, classID, id],
        function (error, results) {
            if (error) throw error;
            res.send('Student group updated successfully');
        }
    );
});

// Update a student by ID
router.put('/students/:id', function (req, res) {
    const { id } = req.params;
    const { tutionID, username, password, fullName, year, date_of_birth, address, date_of_register } = req.body;
    db.query(
        'UPDATE students SET tutionID = ?, username = ?, password = ?, fullName = ?, year = ?, date_of_birth = ?, address = ?, date_of_register = ? WHERE id = ?',
        [tutionID, username, password, fullName, year, date_of_birth, address, date_of_register, id],
        function (error, results) {
            if (error) throw error;
            res.send('Student updated successfully');
        }
    );
});

// Update a teacher by ID
router.put('/teachers/:id', function (req, res) {
    const { id } = req.params;
    const { tutionID, username, password, fullName, subject, phoneNumber, email, address } = req.body;
    db.query(
        'UPDATE teachers SET tutionID = ?, username = ?, password = ?, fullName = ?, subject = ?, phoneNumber = ?, email = ?, address = ? WHERE id = ?',
        [tutionID, username, password, fullName, subject, phoneNumber, email, address, id],
        function (error, results) {
            if (error) throw error;
            res.send('Teacher updated successfully');
        }
    );
});

// Update a timetable by ID
router.put('/timetable/:id', function (req, res) {
    const { id } = req.params;
    const { tutionID, studentID, year, classroom, subject, time_of_room, day } = req.body;
    db.query(
        'UPDATE timetable SET tutionID = ?, studentID = ?, year = ?, classroom = ?, subject = ?, time_of_room = ?, day = ? WHERE id = ?',
        [tutionID, studentID, year, classroom, subject, time_of_room, day, id],
        function (error, results) {
            if (error) throw error;
            res.send('Timetable updated successfully');
        }
    );
});

// Update a tuition by ID
router.put('/tuition/:id', function (req, res) {
    const { id } = req.params;
    const { username, password, name, email, address, phoneNumber } = req.body;
    db.query(
        'UPDATE tuition SET username = ?, password = ?, name = ?, email = ?, address = ?, phoneNumber = ? WHERE id = ?',
        [username, password, name, email, address, phoneNumber, id],
        function (error, results) {
            if (error) throw error;
            res.send('Tuition updated successfully');
        }
    );
});

module.exports = router;
