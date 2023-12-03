const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
// const Employee = require("../models/Employee");
const cookie = require("cookie");

require("dotenv").config();

const generateToken = (user) => {
  const secretKey =
    user.userType === 'manager'
      ? process.env.JWT_SECRET_KEY_MANAGER
      : process.env.JWT_SECRET_KEY_EMPLOYEE;

  return jwt.sign({ userId: user._id, userType: user.userType }, secretKey, {
    expiresIn: '1h',
  });
};

exports.signupUser = async (req, res) => {
  try {
    const { username, password, userType } = req.body;

    const UserModel = userType === "manager" ? Manager : Employee;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      username,
      password: hashedPassword,
    });

    const token = generateToken(newUser);

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        maxAge: 3600,
        sameSite: "strict",
      })
    );
    res.status(201).json({ token, message: "Successfully signed up" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username, password, userType } = req.body;
    const userModel = userType === "manager" ? Manager : Employee;

    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "USERNAME does not exist" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = generateToken(user);

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        maxAge: 3600,
        sameSite: "strict",
      })
    );
    res.json({ token, message: "Successfully logged in" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
