// Import the dotenv module at the top
require('dotenv').config();


const client = require('./client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env; 
const SALT_COUNT = 10;

// Get all users from the database
async function getUsers() {
  try {
    const result = await client.query('SELECT * FROM users');
    return result.rows;
  } catch (error) {
    throw error;
  }
}

// User signup
async function signupUser({ username, password, email }) {
  try {
    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(SALT_COUNT);
    const hashPassword = await bcrypt.hash(password, salt);

    const { rows: [user] } = await client.query(
      `
      INSERT INTO users(username, password, email)
      VALUES($1, $2, $3)
      ON CONFLICT (username) DO NOTHING
      RETURNING *;
      `,
      [username, hashPassword, email]
    );

    return user;
  } catch (error) {
    throw error;
  }
}

// User login
async function loginUser({ username, password }, res) {
  try {
    const { rows: [user] } = await client.query(
      `
      SELECT * FROM users
      WHERE username = $1;
      `,
      [username]
    );

    if (!user) {
      throw new Error('User not found');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      const resetPasswordError = new Error('Incorrect password. Please reset your password.');
      resetPasswordError.code = 'RESET_PASSWORD_REQUIRED';
      throw resetPasswordError;
    }

    // Create a session token and set it as a cookie that expires in 7 days
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '7d' });
    res.cookie('sessionToken', token, { httpOnly: true, secure: true, maxAge: 1000 * 60 * 60 * 24 * 7 });

    return user;
  } catch (error) {
    throw error;
  }
}

// User Logout (Clear the session token cookie)
async function logoutUser(req, res) {
  try {
    res.clearCookie('sessionToken');
  } catch (error) {
    throw error;
  }
}

// Function to get a user by username
async function getUserByUsername(username) {
  try {
    const result = await client.query('SELECT * FROM users WHERE username = $1', [username]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Function to update user profile by user ID
async function updateUser(userId, { username, email }) {
  try {
    const result = await client.query(
      'UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING *',
      [username, email, userId]
    );

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Function to delete a user by user ID
async function deleteUser(userId) {
  try {
    await client.query('DELETE FROM users WHERE id = $1', [userId]);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  signupUser,
  loginUser,
  logoutUser,
  getUserByUsername,
  getUserById,
  updateUser,
  deleteUser,
  getUsers,
};
