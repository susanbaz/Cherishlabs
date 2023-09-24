const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const SALT_COUNT = 10;
const { signupUser, loginUser, logoutUser, getUserByUsername, getUsers,updateUser, deleteUser } = require('../db/users');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

//get the user from the database
router.get('/', async (req, res, next) => {
  try {
    const usersData = await getUsers();
    res.json(usersData);
  } catch (error) {
    next(error);
  }
});

// User Signup
router.post('/signup', async (req, res, next) => {
  try {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({ message: 'Missing fields' });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

    // Call the signupUser function from db/users.js to create a new user
    const newUser = await signupUser({ username, password: hashedPassword, email });

    // Generate a JWT token for the newly created user
    const token = jwt.sign(
      { id: newUser.id, username: newUser.username },
      JWT_SECRET,
      { expiresIn: '1w' }
    );

    res.status(201).json({ user: newUser, token, message: 'User created' });
  } catch (err) {
    next(err);
  }
});

// User Login
router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Missing fields' });
    }

    // Call the loginUser function from db/users.js to login the user
    const user = await loginUser({ username, password }, res);

    res.status(200).json({ user, message: 'User logged in' });
  } catch (err) {
    next(err);
  }
});

// User Logout
router.post('/logout', async (req, res, next) => {
  try {
    // Call the logoutUser function from db/users.js to clear the session token cookie
    await logoutUser(req, res);

    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    next(error);
  }
});

// User Profile Update
router.put('/update/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const { username, email } = req.body;

    // Call the updateUser function from db/users.js to update the user's profile
    const updatedUser = await updateUser(userId, { username, email });

    res.status(200).json({ user: updatedUser, message: 'User profile updated' });
  } catch (error) {
    next(error);
  }
});

// User Account Deletion
router.delete('/delete/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId;

    // Call the deleteUser function from db/users.js to delete the user's account
    await deleteUser(userId);

    res.status(200).json({ message: 'User account deleted' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
