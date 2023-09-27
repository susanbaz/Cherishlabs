// Import the dotenv module at the top
require('dotenv').config();

const { Client } = require('pg');

const dbName = 'cherishlab';
const dbUser = 'cherishlab';       // User role name
const dbPassword = 'CRxaGJkgGHGYEoow'; // User password (if applicable)
const connectionString = process.env.DATABASE_URL || `postgres:cherishlab-owsf4-postgresql.external.kinsta.app/${dbName}`;



const sslConfig =
  process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined;

const client = new Client({
  connectionString,
  ssl: sslConfig,
});

// client.connect();

module.exports = client;
