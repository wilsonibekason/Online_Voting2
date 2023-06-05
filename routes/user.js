const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const requireLogin = require("../middleware/requireLogin");
const validator = require("validator");
const crypto = require("crypto");
const { validatePassword } = require("../hook/validatepassword");
const { convertEmail } = require("../hook/convertemail");

const transporter2 = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key:
        "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",
    },
  })
);

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail", //your-email-service-provider
  auth: {
    user: "wilsonibekason@gmail.com", //your-email-username
    pass: "mrocyrjlxnsdnmau", // your-email-password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

router.post("/signup2", (req, res) => {
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

  // Hash the password
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
      });

      // Save the user to the database
      user
        .save()
        .then((user) => {
          // Send email confirmation
          transporter.sendMail({
            from: "mahenmondal111@gmail.com", // Sender address
            to: user.email, // Recipient address
            subject: "E-voting Registration", // Subject line
            html: "You have successfully completed your registration for E-voting.", // HTML body
          });

          res.json({ message: "Registration successful" });
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
                from: "wilsonibekason@gmail.com", //your-email-address
                to: user.email,
                subject: "Email Verification",
                html: `
<!-- Header -->
<div style="background-color: #007bff; padding: 20px; text-align: center;">
  <img src="https://clintonel.org/wp-content/uploads/2022/05/cropped-CIC-logo-main-Cropped-2.jpg" alt="Company Logo" style="max-width: 100px;">
</div>

<!-- Content Starts -->
<div style="margin-top: 5rem; text-align: center; font-family: Arial, sans-serif; font-size: 16px;">
  <div style="max-width: 350px; margin: 0 auto;">
    <h2 style="font-size: 24px; margin-bottom: 20px;">Account Verification</h2>
    <p>Dear User,</p>
    <p>Thank you for registering with our voting platform. Please confirm your email address by clicking the button below.</p>
    
    <!-- Button -->
    <div style="margin-top: 30px;">
      <a href="http://localhost:3000/verify/${verificationToken}"  style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 20px;">Verify your email</a>
    </div>
    <!-- Button -->
    
    <p>If you do not verify your account, you won't be able to vote. This step is essential for security purposes.</p>
    <p>Happy Voting!</p>
    <p>The CIC Team</p>
  </div>
</div>
<!-- Content End -->

<!-- Footer -->
<footer style="background-color: #f5f5f5; padding: 10px; text-align: center; font-family: Arial, sans-serif; font-size: 12px;">
  <p>Any questions or inquiries?</p>
  <p>12 Umuatako Road, Aba</p>
</footer>

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

router.post("/signups", (req, res) => {
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
  //   console.log(req.body )
  if (!email || !password || !firstname || !mobile || !city || !branch) {
    return res.status(422).json({ error: "please add all the fields" });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "user already exists with that email" });
      }
      bcrypt.hash(password, 12).then((hashedpassword) => {
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
        });

        user
          .save()
          .then((user) => {
            transporter.sendMail({
              from: "mahenmondal111@gmail.com", // sender address
              to: user.email, // list of receivers
              subject: "E-voting Registration", // Subject line
              html: " You sucessfully complete Your  registration for E-voting.", // html body
            });
            res.json({ message: "saved successfully" });
          })
          .catch((err) => {
            console.log(err);
            res
              .status(500)
              .json({ error: "An error occurred while hashing the password" });
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/verify/:token", (req, res) => {
  const token = req.params.token;

  // Find the user with the matching verification token
  User.findOne({
    verificationToken: token,
    verificationTokenExpiry: { $gt: Date.now() },
  })
    .then((user) => {
      if (!user) {
        return res
          .status(400)
          .json({ error: "Invalid or expired verification token" });
      }

      // Update the user's verification status and clear the verification token fields
      user.verified = true;
      user.verificationToken = undefined;
      user.verificationTokenExpiry = undefined;

      user
        .save()
        .then(() => {
          res.json({
            message: "Email verification successful",
            userId: user._id,
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
        .json({ error: "An error occurred while verifying the email" });
    });
});

router.post("/verifyemail", (req, res) => {
  const { isEmailVerified, _id: userId } = req.body;
  // Assuming you have the user's ID stored in a variable named `userId`
  User.findByIdAndUpdate(userId, { isEmailVerified: true })
    .then(() => {
      const mailOptions = {
        from: "wilsonibekason@gmail.com",
        to: user.email,
        subject: "Email Verification",
        html: `
        <!-- Header -->
        <div style="background-color: #007bff; padding: 20px; text-align: center;">
          <img src="https://clintonel.org/wp-content/uploads/2022/05/cropped-CIC-logo-main-Cropped-2.jpg" alt="Company Logo" style="max-width: 100px;">
        </div>
        <div style="margin-top: 5rem; text-align: center; font-family: Arial, sans-serif; font-size: 16px;">
        <div style="max-width: 350px; margin: 0 auto;">
          <h2 style="font-size: 24px; margin-bottom: 20px;">Your Account Has Been  Verifed</h2>
          <p>Well done, now you can log in and vote for your favourite Team </p>
          </div></div>
        <!-- Footer -->
    <footer style="background-color: #f5f5f5; padding: 10px; text-align: center; font-family: Arial, sans-serif; font-size: 12px;">
      <p>Any questions or inquiries?</p>
      <p>12 Umuatako Road, Aba</p>
    </footer>
        `,
      };

      transporter
        .sendMail(mailOptions)
        .then(() => {
          res.json({ message: "Verification successful" });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: "An error occurred while sending the verification email",
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ error: "An error occurred while updating the user" });
    });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.status(422).json({ error: "please add email or password" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid Email or password" });
    }
    // Check if the user's email is verified
    if (!savedUser.isEmailVerified) {
      return res
        .status(401)
        .json({ error: "Please verify your email before signing in" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          // res.json({message:"successfully signed in"})
          const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
          const {
            _id,
            firstname,
            lastname,
            stateName,
            email,
            pic,
            mobile,
            city,
            branch,
            isAdmin,
          } = savedUser;
          res.json({
            token,
            user: {
              _id,
              firstname,
              lastname,
              stateName,
              email,
              pic,
              mobile,
              city,
              branch,
              isAdmin,
            },
          });
        } else {
          return res.status(422).json({ error: "Invalid Email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .json({ error: "An error occurred while attempting to log in" });
      });
  });
});

// UPDATE PROFILE PICS
router.put("/updatepic", requireLogin, (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    { $set: { pic: req.body.pic } },
    { new: true },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: "pic canot post" });
      }
      res.json(result);
    }
  );
});

// RESET PASSWORD
router.post("/password-reset-verification", (req, res, next) => {
  const { email } = req.body;
  // check if email field is provided
  if (!email) {
    return res.status(422).json({ error: "Please provide an email" });
  }

  // Generate verification token
  const verificationToken = crypto.randomBytes(20).toString("hex");

  User.findOne({ email: email }).then((existingUser) => {
    if (existingUser) {
      const mailOptions = {
        from: "wilsonibekason@gmail.com",
        to: existingUser.email,
        subject: "Email Verification",
        html: `
        <!-- Header -->
        <div style="background-color: #007bff; padding: 20px; text-align: center;">
          <img src="https://clintonel.org/wp-content/uploads/2022/05/cropped-CIC-logo-main-Cropped-2.jpg" alt="Company Logo" style="max-width: 100px;">
        </div>
        <div style="margin-top: 5rem; text-align: center; font-family: Arial, sans-serif; font-size: 16px;">
          <div style="max-width: 350px; margin: 0 auto;">
            <h2 style="font-size: 24px; margin-bottom: 20px;">Your Account Has Been Verified</h2>
            <p>Well done, now click the link to reset your account password </p>
          </div>
        </div>
        <!-- Button -->
        <div style="margin-top: 30px;">
          <a href="http://localhost:3000/reset-password-verify/${verificationToken}"  style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 20px;">Reset your password</a>
        </div>
        <!-- Button -->
        </div>
        </div>
        <!-- Footer -->
        <footer style="background-color: #f5f5f5; padding: 10px; text-align: center; font-family: Arial, sans-serif; font-size: 12px;">
          <p>Any questions or inquiries?</p>
          <p>12 Umuatako Road, Aba</p>
        </footer>
        `,
      };

      // Update user's verification token and token expiry
      User.findByIdAndUpdate(existingUser._id, {
        verificationToken,
        verificationTokenExpiry: Date.now() + 3600000, // Token expires in 1 hour
      });

      // Send the email for verification
      transporter
        .sendMail(mailOptions)
        .then(() => {
          const convertedMail = convertEmail(existingUser.email);
          return res.status(200).json({
            message: `We sent an email to ${convertedMail} to reset your password`,
          });
        })
        .catch((err) => {
          return res.status(500).json({ error: err });
        });
    }
  });
});

// RESET PASSWORD
router.post("/reset-password-verify/:token", async (req, res) => {
  try {
    const { password, email, confirmPassword } = req.body;
    const token = req.params.token;

    // Check if email, password, and confirmPassword fields are provided
    if (!email || !password || !confirmPassword) {
      return res
        .status(403)
        .json({ error: "Please provide email, password, and confirmPassword" });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(422).json({ error: "Invalid email address" });
    }

    // Validate password format
    if (!validatePassword(password)) {
      return res.status(400).json({ error: "Invalid password format" });
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: "Password and confirmPassword do not match" });
    }

    // Find the user with the matching verification token
    const user = await User.findOne({
      verificationToken: token,
      verificationTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ error: "Invalid or expired verification token" });
    }

    // Update the user's verification status and clear the verification token fields
    user.verified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiry = undefined;

    await user.save();

    // Reset the user's password
    user.password = password;
    await user.save();

    // Send an email for password reset verification
    const mailOptions = {
      from: "wilsonibekason@gmail.com",
      to: user.email,
      subject: "Email Verification",
      html: `
        <!-- Header -->
        <div style="background-color: #007bff; padding: 20px; text-align: center;">
          <img src="https://clintonel.org/wp-content/uploads/2022/05/cropped-CIC-logo-main-Cropped-2.jpg" alt="Company Logo" style="max-width: 100px;">
        </div>
        <div style="margin-top: 5rem; text-align: center; font-family: Arial, sans-serif; font-size: 16px;">
          <div style="max-width: 350px; margin: 0 auto;">
            <h2 style="font-size: 24px; margin-bottom: 20px;">Your Account Has Been Verified</h2>
            <p>Your password has been reset</p>
          </div>
        </div>
        <!-- Footer -->
        <footer style="background-color: #f5f5f5; padding: 10px; text-align: center; font-family: Arial, sans-serif; font-size: 12px;">
          <p>Any questions or inquiries?</p>
          <p>12 Umuatako Road, Aba</p>
        </footer>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
