const express = require('express');
const router = express.Router();
const db = require('../config.js');

// Delete an announcement by ID
router.delete('/announcement/:id', function (req, res) {
    const { id } = req.params;
    db.query('DELETE FROM announcement WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.send('Announcement deleted successfully');
    });
});

// Delete a class by ID
router.delete('/class/:id', function (req, res) {
    const { id } = req.params;
    db.query('DELETE FROM class WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.send('Class deleted successfully');
    });
});

// Delete a complaint by ID
router.delete('/complaints/:id', function (req, res) {
    const { id } = req.params;
    db.query('DELETE FROM complaints WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.send('Complaint deleted successfully');
    });
});

// Delete an emergency contact by ID
router.delete('/emergencycontacts/:id', function (req, res) {
    const { id } = req.params;
    db.query('DELETE FROM emergencycontacts WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.send('Emergency contact deleted successfully');
    });
});

// Delete feedback by ID
router.delete('/feedback/:id', function (req, res) {
    const { id } = req.params;
    db.query('DELETE FROM feedback WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.send('Feedback deleted successfully');
    });
});

// Delete a fee by ID
router.delete('/fees/:id', function (req, res) {
    const { id } = req.params;
    db.query('DELETE FROM fees WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.send('Fee deleted successfully');
    });
});

// Delete a parent by ID
router.delete('/parents/:id', function (req, res) {
    const { id } = req.params;
    db.query('DELETE FROM parents WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.send('Parent deleted successfully');
    });
});

// Delete a student group by ID
router.delete('/studentgroups/:id', function (req, res) {
    const { id } = req.params;
    db.query('DELETE FROM studentgroups WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.send('Student group deleted successfully');
    });
});

// Delete a student by ID
router.delete('/students/:id', function (req, res) {
    const { id } = req.params;
    db.query('DELETE FROM students WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.send('Student deleted successfully');
    });
});

// Delete a teacher by ID
router.delete('/teachers/:id', function (req, res) {
    const { id } = req.params;
    db.query('DELETE FROM teachers WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.send('Teacher deleted successfully');
    });
});

// Delete a timetable by ID
router.delete('/timetable/:id', function (req, res) {
    const { id } = req.params;
    db.query('DELETE FROM timetable WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.send('Timetable deleted successfully');
    });
});

// Delete a tuition by ID
router.delete('/tuition/:id', function (req, res) {
    const { id } = req.params;
    db.query('DELETE FROM tuition WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.send('Tuition deleted successfully');
    });
});

module.exports = router;
