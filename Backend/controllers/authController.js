const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token valid for 30 days
  });
};

// Register User
exports.registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    console.log('🔐 Registering User:', { username, password });

    // Check if the user already exists
    const userExists = await User.findOne({ username });
    if (userExists) {
      console.log('❌ User already exists');
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password before saving
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log('🛡️ Hashed Password:', hashedPassword);

    // Create new user
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();
    console.log('✅ User Registered');
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('❌ Registration Error:', error.message);
    res.status(500).json({ message: 'Registration failed' });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    console.log('🔍 Login request received:', { username, password });

    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      console.log('❌ User not found');
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    console.log('👤 User found:', user);
    console.log('🔍 Password Entered:', password);
console.log('🔐 Hashed Password from DB:', user.password);


    // Compare the entered password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('🔑 Password Match:', isMatch);

    if (isMatch) {
      console.log('✅ Login Successful');
      res.json({
        _id: user.id,
        username: user.username,
        token: generateToken(user.id),
      });
    } else {
      console.log('❌ Incorrect password');
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('❌ Login Error:', error.message);
    res.status(500).json({ message: 'Login failed' });
  }
};
