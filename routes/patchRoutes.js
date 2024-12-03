const express = require('express');
const router = express.Router();
const db = require('../config.js');

// Partially update an announcement by ID
router.patch('/announcement/:id', function (req, res) {
    const { id } = req.params;
    const updates = req.body;
    db.query('UPDATE announcement SET ? WHERE id = ?', [updates, id], function (error, results) {
        if (error) throw error;
        res.send('Announcement updated successfully');
    });
});

// Partially update a class by ID
router.patch('/class/:id', function (req, res) {
    const { id } = req.params;
    const updates = req.body;
    db.query('UPDATE class SET ? WHERE id = ?', [updates, id], function (error, results) {
        if (error) throw error;
        res.send('Class updated successfully');
    });
});

// Partially update a complaint by ID
router.patch('/complaints/:id', function (req, res) {
    const { id } = req.params;
    const updates = req.body;
    db.query('UPDATE complaints SET ? WHERE id = ?', [updates, id], function (error, results) {
        if (error) throw error;
        res.send('Complaint updated successfully');
    });
});

// Partially update an emergency contact by ID
router.patch('/emergencycontacts/:id', function (req, res) {
    const { id } = req.params;
    const updates = req.body;
    db.query('UPDATE emergencycontacts SET ? WHERE id = ?', [updates, id], function (error, results) {
        if (error) throw error;
        res.send('Emergency contact updated successfully');
    });
});

// Partially update feedback by ID
router.patch('/feedback/:id', function (req, res) {
    const { id } = req.params;
    const updates = req.body;
    db.query('UPDATE feedback SET ? WHERE id = ?', [updates, id], function (error, results) {
        if (error) throw error;
        res.send('Feedback updated successfully');
    });
});

// Partially update a fee by ID
router.patch('/fees/:id', function (req, res) {
    const { id } = req.params;
    const updates = req.body;
    db.query('UPDATE fees SET ? WHERE id = ?', [updates, id], function (error, results) {
        if (error) throw error;
        res.send('Fee updated successfully');
    });
});

// Partially update a parent by ID
router.patch('/parents/:id', function (req, res) {
    const { id } = req.params;
    const updates = req.body;
    db.query('UPDATE parents SET ? WHERE id = ?', [updates, id], function (error, results) {
        if (error) throw error;
        res.send('Parent updated successfully');
    });
});

// Partially update a student group by ID
router.patch('/studentgroups/:id', function (req, res) {
    const { id } = req.params;
    const updates = req.body;
    db.query('UPDATE studentgroups SET ? WHERE id = ?', [updates, id], function (error, results) {
        if (error) throw error;
        res.send('Student group updated successfully');
    });
});

// Partially update a student by ID
router.patch('/students/:id', function (req, res) {
    const { id } = req.params;
    const updates = req.body;
    db.query('UPDATE students SET ? WHERE id = ?', [updates, id], function (error, results) {
        if (error) throw error;
        res.send('Student updated successfully');
    });
});

// Partially update a teacher by ID
router.patch('/teachers/:id', function (req, res) {
    const { id } = req.params;
    const updates = req.body;
    db.query('UPDATE teachers SET ? WHERE id = ?', [updates, id], function (error, results) {
        if (error) throw error;
        res.send('Teacher updated successfully');
    });
});

// Partially update a timetable by ID
router.patch('/timetable/:id', function (req, res) {
    const { id } = req.params;
    const updates = req.body;
    db.query('UPDATE timetable SET ? WHERE id = ?', [updates, id], function (error, results) {
        if (error) throw error;
        res.send('Timetable updated successfully');
    });
});

// Partially update tuition by ID
router.patch('/tuition/:id', function (req, res) {
    const { id } = req.params;
    const updates = req.body;
    db.query('UPDATE tuition SET ? WHERE id = ?', [updates, id], function (error, results) {
        if (error) throw error;
        res.send('Tuition updated successfully');
    });
});

module.exports = router;
