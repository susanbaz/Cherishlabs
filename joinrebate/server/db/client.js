// Import the dotenv module at the top
require('dotenv').config();

const { Client } = require('pg');

const dbName = 'cherishlab';
const dbUser = 'postgres';       // User role name
const dbPassword = 'Tsq83226$'; // User password (if applicable)
const connectionString = process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`;



const sslConfig =
  process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined;

const client = new Client({
  connectionString,
  ssl: sslConfig,
});

// client.connect();

module.exports = client;
