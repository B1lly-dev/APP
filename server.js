const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'public')));
// Create or open the SQLite database
const dbPath = path.join(__dirname, 'database.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});

// Create tables
db.serialize(() => {
    // Create Users table first
    db.run(`
        CREATE TABLE IF NOT EXISTS Users (
            user_id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            user_first TEXT NOT NULL,
            user_last TEXT NOT NULL,
            user_email TEXT UNIQUE,
            user_pass TEXT NOT NULL
        )
    `, (err) => {
        if (err) {
            console.error('Error creating Users table:', err.message);
        } else {
            console.log('Users table created successfully.');
        }
    });

    // Create Mood_logs table
    db.run(`
        CREATE TABLE IF NOT EXISTS Mood_logs (
            mood_id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            mood_value INTEGER NOT NULL,
            notes TEXT,
            FOREIGN KEY (user_id) REFERENCES Users(user_id)
        )
    `, (err) => {
        if (err) {
            console.error('Error creating Mood_logs table:', err.message);
        } else {
            console.log('Mood_logs table created successfully.');
        }
    });

    // Create Journal table
    db.run(`
        CREATE TABLE IF NOT EXISTS journal (
            journal_id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            journal_entry TEXT,
            FOREIGN KEY (user_id) REFERENCES Users(user_id)
        )
    `, (err) => {
        if (err) {
            console.error('Error creating Journal table:', err.message);
        } else {
            console.log('Journal table created successfully.');
        }
    });

    // Create Quotes table
    db.run(`
        CREATE TABLE IF NOT EXISTS quotes (
            quote_id INTEGER PRIMARY KEY AUTOINCREMENT,
            quote_text TEXT NOT NULL,
            user_id INTEGER,
            FOREIGN KEY (user_id) REFERENCES Users(user_id)
        )
    `, (err) => {
        if (err) {
            console.error('Error creating Quotes table:', err.message);
        } else {
            console.log('Quotes table created successfully.');
        }
    });

    // Create Points table
    db.run(`
        CREATE TABLE IF NOT EXISTS points (
            point_id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            point_earn INTEGER NOT NULL DEFAULT 0,
            FOREIGN KEY (user_id) REFERENCES Users(user_id)
        )
    `, (err) => {
        if (err) {
            console.error('Error creating Points table:', err.message);
        } else {
            console.log('Points table created successfully.');
        }
    });

    console.log('Tables created successfully.');
});

// Simple route
app.get('/', (req, res) => {
    res.send('Welcome to the Wellness App Server!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Close the database connection when the process exits
process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            console.error('Error closing database:', err.message);
        } else {
            console.log('Database connection closed.');
        }
        process.exit(0);
    });
});