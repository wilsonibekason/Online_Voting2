const router = require("express").Router();
const bcrypt = require("bcrypt");
const validator = require("validator");
const User = require("../models/user");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "your-email-service-provider",
  auth: {
    user: "your-email-username",
    pass: "your-email-password",
  },
});

router.post("/signup", (req, res) => {
  const {
    firstname,
    lastname,
    stateName,
    email,
    password,
    pic,
    mobile,
    city,
    branch,
  } = req.body;

  // Check for required fields
  if (!email || !password || !firstname || !mobile || !city || !branch) {
    return res
      .status(422)
      .json({ error: "Please fill in all the required fields" });
  }

  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(422).json({ error: "Invalid email address" });
  }

  User.findOne({ email: email })
    .then((existingUser) => {
      if (existingUser) {
        return res
          .status(422)
          .json({ error: "User already exists with that email" });
      }

      // Generate verification token
      const verificationToken = crypto.randomBytes(20).toString("hex");

      bcrypt
        .hash(password, 12)
        .then((hashedpassword) => {
          const user = new User({
            email,
            mobile,
            city,
            branch,
            password: hashedpassword,
            firstname,
            lastname,
            stateName,
            pic,
            verificationToken,
            verificationTokenExpiry: Date.now() + 3600000, // Token expires in 1 hour
          });

          // Save the user to the database
          user
            .save()
            .then((user) => {
              // Send email verification link
              const mailOptions = {
                from: "your-email-address",
                to: user.email,
                subject: "Email Verification",
                html: `
                  <h3>Thank you for signing up!</h3>
                  <p>Please click the following link to verify your email:</p>
                  <a href="http://your-app-domain/verify/${verificationToken}">Verify Email</a>
                `,
              };

              transporter
                .sendMail(mailOptions)
                .then(() => {
                  res.json({
                    message:
                      "Registration successful. Verification email sent.",
                  });
                })
                .catch((err) => {
                  console.log(err);
                  res.status(500).json({
                    error:
                      "An error occurred while sending the verification email",
                  });
                });
            })
            .catch((err) => {
              console.log(err);
              res
                .status(500)
                .json({ error: "An error occurred while saving the user" });
            });
        })
        .catch((err) => {
          console.log(err);
          res
            .status(500)
            .json({ error: "An error occurred while hashing the password" });
        });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ error: "An error occurred while checking for existing users" });
    });
});

module.exports = router;
