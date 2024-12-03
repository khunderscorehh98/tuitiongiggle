const express = require('express');
const router = express.Router();
const db = require('../config.js');

// GET all announcements
router.get('/announcement', (req, res) => {
    console.log('GET /announcement accessed');
    db.query('SELECT * FROM announcement', function (error, results) {
        if (error) {
            console.error('Database query error:', error);
            res.status(500).send('Database error');
        } else {
            res.json(results);
        }
    });
});


// GET announcement by ID
router.get('/announcement/:id', function (req, res) {
    const { id } = req.params;
    db.query('SELECT * FROM announcement WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET all classes
router.get('/class', function (req, res) {
    db.query('SELECT * FROM class', function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET class by ID
router.get('/class/:id', function (req, res) {
    const { id } = req.params;
    db.query('SELECT * FROM class WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET all complaints
router.get('/complaints', function (req, res) {
    db.query('SELECT * FROM complaints', function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET complaint by ID
router.get('/complaints/:id', function (req, res) {
    const { id } = req.params;
    db.query('SELECT * FROM complaints WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET all emergency contacts
router.get('/emergencycontacts', function (req, res) {
    db.query('SELECT * FROM emergencycontacts', function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET emergency contact by ID
router.get('/emergencycontacts/:id', function (req, res) {
    const { id } = req.params;
    db.query('SELECT * FROM emergencycontacts WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET all feedback
router.get('/feedback', function (req, res) {
    db.query('SELECT * FROM feedback', function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET feedback by ID
router.get('/feedback/:id', function (req, res) {
    const { id } = req.params;
    db.query('SELECT * FROM feedback WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET all fees
router.get('/fees', function (req, res) {
    db.query('SELECT * FROM fees', function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET fee by ID
router.get('/fees/:id', function (req, res) {
    const { id } = req.params;
    db.query('SELECT * FROM fees WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET all parents
router.get('/parents', function (req, res) {
    db.query('SELECT * FROM parents', function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET parent by ID
router.get('/parents/:id', function (req, res) {
    const { id } = req.params;
    db.query('SELECT * FROM parents WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET all student groups
router.get('/studentgroups', function (req, res) {
    db.query('SELECT * FROM studentgroups', function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET student group by ID
router.get('/studentgroups/:id', function (req, res) {
    const { id } = req.params;
    db.query('SELECT * FROM studentgroups WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET all students
router.get('/students', function (req, res) {
    db.query('SELECT * FROM students', function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET student by ID
router.get('/students/:id', function (req, res) {
    const { id } = req.params;
    db.query('SELECT * FROM students WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET all teachers
router.get('/teachers', function (req, res) {
    db.query('SELECT * FROM teachers', function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET teacher by ID
router.get('/teachers/:id', function (req, res) {
    const { id } = req.params;
    db.query('SELECT * FROM teachers WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET all timetables
router.get('/timetable', function (req, res) {
    db.query('SELECT * FROM timetable', function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET timetable by ID
router.get('/timetable/:id', function (req, res) {
    const { id } = req.params;
    db.query('SELECT * FROM timetable WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET all tuitions
router.get('/tuition', function (req, res) {
    db.query('SELECT * FROM tuition', function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

// GET tuition by ID
router.get('/tuition/:id', function (req, res) {
    const { id } = req.params;
    db.query('SELECT * FROM tuition WHERE id = ?', [id], function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

module.exports = router;
