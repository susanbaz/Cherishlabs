// Import the dotenv module at the top
require('dotenv').config();

const { Client } = require('pg');

const dbName = 'cherishlab';
const dbUser = 'cherishlab';       // User role name
const dbPassword = 'CRxaGJkgGHGYEoow'; // User password (if applicable)
const connectionString = postgres://cherishlab:CRxaGJkgGHGYEoow@cherishlab-owsf4-postgresql.external.kinsta.app:31885/cherishlab ;



const sslConfig =
  process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined;

const client = new Client({
  connectionString,
  ssl: sslConfig,
});

// client.connect();

module.exports = client;
