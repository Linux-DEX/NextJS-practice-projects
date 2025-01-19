const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

require("dotenv").config();

const app = express();

let corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:3000"],
};

app.use(cors(corsOptions));
app.use(express.json());

const users = [];

app.get("/", (req, res) => {
  // res.json({ message: "Login, signUp & MFA NextJS project." });
  res.status(200).json({ users: users });
});

// Register a new user (for demonstration purposes)
app.post("/register", async (req, res) => {
  const { username, usermail, password } = req.body;
  console.log(req.body);
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = { username, usermail, password: hashedPassword };
  users.push(newUser);
  res.status(201).json({ message: "User registered successfully" });
});

// Login route (authenticate user and return JWT token)
app.post("/login", async (req, res) => {
  const { usermail, password } = req.body;

  const user = users.find((user) => user.usermail === usermail);
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ usermail: user.usermail }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

// Middleware to authenticate the JWT token
const authenticateJWT = (req, res, next) => {
  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
  if (!token) {
    return res.sendStatus(403);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

// Protected route (requires authentication)
app.get("/protected", authenticateJWT, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening to ${port}.`);
});
