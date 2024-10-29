const express = require("express");
const { body, validationResult } = require("express-validator");
const userModel = require('../models/userModel.js')
const router = express.Router();

router.get("/register", (req, res) => {
  res.render("register");
});

router.post(
  "/register",
  body("username").trim().isLength({ min: 5 }),
  body("email").trim().isEmail().isLength({ min: 12 }),
  body("password").trim().isLength({ min: 5 }),
  async (req, res) => {
    // const {username, email, password} = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Invalid Data",
      });
    }

    const { username, email, password} = req.body;
    
    const newUser = await userModel.create({
      username,
      email,
      password
    })

    res.json(newUser)

  });

module.exports = router;
