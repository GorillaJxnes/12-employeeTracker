const inquirer = require('inquirer')
const express = require('express')
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const openQ = [
    {
        message: 'Navigate to?',
        type: 'list',
        name: 'selection',
        choices: [
            'View Departments',
            'View 1 Department',
            'View Roles',
            'View 1 Role ',
            'View Employees',
            'View 1 Employee',
        ]
    },
]
const db = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'position_db'
    },
    console.log(`Connected to position_db.`)
);

app.get('/api/dept', (req, res) => {
    const sql = `SELECT * FROM dept`;
    db.query(sql, (err, rows) => {
    if (err) {
        res.status(500).json({error: err.message});
        return;
    }
    res.json({
        message: 'success',
        data: rows
    });
    });
});
app.get('/api/employee', (req, res) => {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => {
    if (err) {
        res.status(500).json({error: err.message});
        return;
    }
    res.json({
        message: 'success',
        data: rows
    });
    });
});
app.get('/api/roles', (req, res) => {
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, rows) => {
    if (err) {
        res.status(500).json({error: err.message});
        return;
    }
    res.json({
        message: 'success',
        data: rows
    });
    });
});
app.use((req, res) => {
    res.status(404).end();
});
app.listen(PORT, () => {
    console.log(`Server port ${PORT}`);
});
inquirer
.prompt(openQ)
.then((data) => {
    if (data.selection == openQ[0].choices[0]) {
        const sql = `SELECT * FROM dept`;
    db.query(sql, (err, rows) => {
    if (err) {
        return;
        }
    console.table(rows)
        })
    }
    if (data.selection == openQ[0].choices[1]) {
        const sql = `SELECT * FROM roles`;
    db.query(sql, (err, rows) => {
    if (err) {
        return;
        }
    console.table(rows)
        })
    }
    if (data.selection == openQ[0].choices[2]) {
        const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => {
    if (err) {
        return;
        }
    console.table(rows)
        })
    }
    if (data.selection == openQ[0].choices[3]) {
        const sql = `SELECT * FROM dept`;
    db.query(sql, (err, rows) => {
    if (err) {
        return;
        }
    console.table(rows)
        })
    }})