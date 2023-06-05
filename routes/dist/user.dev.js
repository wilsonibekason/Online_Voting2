"use strict";

var express = require("express");

var router = express.Router();

var mongoose = require("mongoose");

var User = mongoose.model("User");

var nodemailer = require("nodemailer");

var sendGridTransport = require("nodemailer-sendgrid-transport");

var bcrypt = require("bcryptjs");

var jwt = require("jsonwebtoken");

var _require = require("../keys"),
    JWT_SECRET = _require.JWT_SECRET;

var requireLogin = require("../middleware/requireLogin");

var validator = require("validator");

var crypto = require("crypto");

var _require2 = require("../hook/validatepassword"),
    validatePassword = _require2.validatePassword;

var _require3 = require("../hook/convertemail"),
    convertEmail = _require3.convertEmail;

var transporter2 = nodemailer.createTransport(sendGridTransport({
  auth: {
    api_key: "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"
  }
})); // Configure nodemailer transporter

var transporter = nodemailer.createTransport({
  service: "gmail",
  //your-email-service-provider
  auth: {
    user: "wilsonibekason@gmail.com",
    //your-email-username
    pass: "mrocyrjlxnsdnmau" // your-email-password

  },
  tls: {
    rejectUnauthorized: false
  }
});
router.post("/signup2", function (req, res) {
  var _req$body = req.body,
      firstname = _req$body.firstname,
      lastname = _req$body.lastname,
      stateName = _req$body.stateName,
      email = _req$body.email,
      password = _req$body.password,
      pic = _req$body.pic,
      mobile = _req$body.mobile,
      city = _req$body.city,
      branch = _req$body.branch; // Check for required fields

  if (!email || !password || !firstname || !mobile || !city || !branch) {
    return res.status(422).json({
      error: "Please fill in all the required fields"
    });
  } // Validate email format


  if (!validator.isEmail(email)) {
    return res.status(422).json({
      error: "Invalid email address"
    });
  } // Hash the password


  bcrypt.hash(password, 12).then(function (hashedpassword) {
    var user = new User({
      email: email,
      mobile: mobile,
      city: city,
      branch: branch,
      password: hashedpassword,
      firstname: firstname,
      lastname: lastname,
      stateName: stateName,
      pic: pic
    }); // Save the user to the database

    user.save().then(function (user) {
      // Send email confirmation
      transporter.sendMail({
        from: "mahenmondal111@gmail.com",
        // Sender address
        to: user.email,
        // Recipient address
        subject: "E-voting Registration",
        // Subject line
        html: "You have successfully completed your registration for E-voting." // HTML body

      });
      res.json({
        message: "Registration successful"
      });
    })["catch"](function (err) {
      console.log(err);
      res.status(500).json({
        error: "An error occurred while saving the user"
      });
    });
  })["catch"](function (err) {
    console.log(err);
    res.status(500).json({
      error: "An error occurred while hashing the password"
    });
  });
});
router.post("/signup", function (req, res) {
  var _req$body2 = req.body,
      firstname = _req$body2.firstname,
      lastname = _req$body2.lastname,
      stateName = _req$body2.stateName,
      email = _req$body2.email,
      password = _req$body2.password,
      pic = _req$body2.pic,
      mobile = _req$body2.mobile,
      city = _req$body2.city,
      branch = _req$body2.branch; // Check for required fields

  if (!email || !password || !firstname || !mobile || !city || !branch) {
    return res.status(422).json({
      error: "Please fill in all the required fields"
    });
  } // Validate email format


  if (!validator.isEmail(email)) {
    return res.status(422).json({
      error: "Invalid email address"
    });
  }

  User.findOne({
    email: email
  }).then(function (existingUser) {
    if (existingUser) {
      return res.status(422).json({
        error: "User already exists with that email"
      });
    } // Generate verification token


    var verificationToken = crypto.randomBytes(20).toString("hex");
    bcrypt.hash(password, 12).then(function (hashedpassword) {
      var user = new User({
        email: email,
        mobile: mobile,
        city: city,
        branch: branch,
        password: hashedpassword,
        firstname: firstname,
        lastname: lastname,
        stateName: stateName,
        pic: pic,
        verificationToken: verificationToken,
        verificationTokenExpiry: Date.now() + 3600000 // Token expires in 1 hour

      }); // Save the user to the database

      user.save().then(function (user) {
        // Send email verification link
        var mailOptions = {
          from: "wilsonibekason@gmail.com",
          //your-email-address
          to: user.email,
          subject: "Email Verification",
          html: "\n<!-- Header -->\n<div style=\"background-color: #007bff; padding: 20px; text-align: center;\">\n  <img src=\"https://clintonel.org/wp-content/uploads/2022/05/cropped-CIC-logo-main-Cropped-2.jpg\" alt=\"Company Logo\" style=\"max-width: 100px;\">\n</div>\n\n<!-- Content Starts -->\n<div style=\"margin-top: 5rem; text-align: center; font-family: Arial, sans-serif; font-size: 16px;\">\n  <div style=\"max-width: 350px; margin: 0 auto;\">\n    <h2 style=\"font-size: 24px; margin-bottom: 20px;\">Account Verification</h2>\n    <p>Dear User,</p>\n    <p>Thank you for registering with our voting platform. Please confirm your email address by clicking the button below.</p>\n    \n    <!-- Button -->\n    <div style=\"margin-top: 30px;\">\n      <a href=\"http://localhost:3000/verify/".concat(verificationToken, "\"  style=\"display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 20px;\">Verify your email</a>\n    </div>\n    <!-- Button -->\n    \n    <p>If you do not verify your account, you won't be able to vote. This step is essential for security purposes.</p>\n    <p>Happy Voting!</p>\n    <p>The CIC Team</p>\n  </div>\n</div>\n<!-- Content End -->\n\n<!-- Footer -->\n<footer style=\"background-color: #f5f5f5; padding: 10px; text-align: center; font-family: Arial, sans-serif; font-size: 12px;\">\n  <p>Any questions or inquiries?</p>\n  <p>12 Umuatako Road, Aba</p>\n</footer>\n\n")
        };
        transporter.sendMail(mailOptions).then(function () {
          res.json({
            message: "Registration successful. Verification email sent."
          });
        })["catch"](function (err) {
          console.log(err);
          res.status(500).json({
            error: "An error occurred while sending the verification email"
          });
        });
      })["catch"](function (err) {
        console.log(err);
        res.status(500).json({
          error: "An error occurred while saving the user"
        });
      });
    })["catch"](function (err) {
      console.log(err);
      res.status(500).json({
        error: "An error occurred while hashing the password"
      });
    });
  })["catch"](function (err) {
    console.log(err);
    res.status(500).json({
      error: "An error occurred while checking for existing users"
    });
  });
});
router.post("/signups", function (req, res) {
  var _req$body3 = req.body,
      firstname = _req$body3.firstname,
      lastname = _req$body3.lastname,
      stateName = _req$body3.stateName,
      email = _req$body3.email,
      password = _req$body3.password,
      pic = _req$body3.pic,
      mobile = _req$body3.mobile,
      city = _req$body3.city,
      branch = _req$body3.branch; //   console.log(req.body )

  if (!email || !password || !firstname || !mobile || !city || !branch) {
    return res.status(422).json({
      error: "please add all the fields"
    });
  }

  User.findOne({
    email: email
  }).then(function (savedUser) {
    if (savedUser) {
      return res.status(422).json({
        error: "user already exists with that email"
      });
    }

    bcrypt.hash(password, 12).then(function (hashedpassword) {
      var user = new User({
        email: email,
        mobile: mobile,
        city: city,
        branch: branch,
        password: hashedpassword,
        firstname: firstname,
        lastname: lastname,
        stateName: stateName,
        pic: pic
      });
      user.save().then(function (user) {
        transporter.sendMail({
          from: "mahenmondal111@gmail.com",
          // sender address
          to: user.email,
          // list of receivers
          subject: "E-voting Registration",
          // Subject line
          html: " You sucessfully complete Your  registration for E-voting." // html body

        });
        res.json({
          message: "saved successfully"
        });
      })["catch"](function (err) {
        console.log(err);
        res.status(500).json({
          error: "An error occurred while hashing the password"
        });
      });
    });
  })["catch"](function (err) {
    console.log(err);
  });
});
router.get("/verify/:token", function (req, res) {
  var token = req.params.token; // Find the user with the matching verification token

  User.findOne({
    verificationToken: token,
    verificationTokenExpiry: {
      $gt: Date.now()
    }
  }).then(function (user) {
    if (!user) {
      return res.status(400).json({
        error: "Invalid or expired verification token"
      });
    } // Update the user's verification status and clear the verification token fields


    user.verified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiry = undefined;
    user.save().then(function () {
      res.json({
        message: "Email verification successful",
        userId: user._id
      });
    })["catch"](function (err) {
      console.log(err);
      res.status(500).json({
        error: "An error occurred while saving the user"
      });
    });
  })["catch"](function (err) {
    console.log(err);
    res.status(500).json({
      error: "An error occurred while verifying the email"
    });
  });
});
router.post("/verifyemail", function (req, res) {
  var _req$body4 = req.body,
      isEmailVerified = _req$body4.isEmailVerified,
      userId = _req$body4._id; // Assuming you have the user's ID stored in a variable named `userId`

  User.findByIdAndUpdate(userId, {
    isEmailVerified: true
  }).then(function () {
    var mailOptions = {
      from: "wilsonibekason@gmail.com",
      to: user.email,
      subject: "Email Verification",
      html: "\n        <!-- Header -->\n        <div style=\"background-color: #007bff; padding: 20px; text-align: center;\">\n          <img src=\"https://clintonel.org/wp-content/uploads/2022/05/cropped-CIC-logo-main-Cropped-2.jpg\" alt=\"Company Logo\" style=\"max-width: 100px;\">\n        </div>\n        <div style=\"margin-top: 5rem; text-align: center; font-family: Arial, sans-serif; font-size: 16px;\">\n        <div style=\"max-width: 350px; margin: 0 auto;\">\n          <h2 style=\"font-size: 24px; margin-bottom: 20px;\">Your Account Has Been  Verifed</h2>\n          <p>Well done, now you can log in and vote for your favourite Team </p>\n          </div></div>\n        <!-- Footer -->\n    <footer style=\"background-color: #f5f5f5; padding: 10px; text-align: center; font-family: Arial, sans-serif; font-size: 12px;\">\n      <p>Any questions or inquiries?</p>\n      <p>12 Umuatako Road, Aba</p>\n    </footer>\n        "
    };
    transporter.sendMail(mailOptions).then(function () {
      res.json({
        message: "Verification successful"
      });
    })["catch"](function (err) {
      console.log(err);
      res.status(500).json({
        error: "An error occurred while sending the verification email"
      });
    });
  })["catch"](function (err) {
    console.log(err);
    res.status(500).json({
      error: "An error occurred while updating the user"
    });
  });
});
router.post("/signin", function (req, res) {
  var _req$body5 = req.body,
      email = _req$body5.email,
      password = _req$body5.password;
  console.log(req.body);

  if (!email || !password) {
    return res.status(422).json({
      error: "please add email or password"
    });
  }

  User.findOne({
    email: email
  }).then(function (savedUser) {
    if (!savedUser) {
      return res.status(422).json({
        error: "Invalid Email or password"
      });
    } // Check if the user's email is verified


    if (!savedUser.isEmailVerified) {
      return res.status(401).json({
        error: "Please verify your email before signing in"
      });
    }

    bcrypt.compare(password, savedUser.password).then(function (doMatch) {
      if (doMatch) {
        // res.json({message:"successfully signed in"})
        var token = jwt.sign({
          _id: savedUser._id
        }, JWT_SECRET);
        var _id = savedUser._id,
            firstname = savedUser.firstname,
            lastname = savedUser.lastname,
            stateName = savedUser.stateName,
            _email = savedUser.email,
            pic = savedUser.pic,
            mobile = savedUser.mobile,
            city = savedUser.city,
            branch = savedUser.branch,
            isAdmin = savedUser.isAdmin;
        res.json({
          token: token,
          user: {
            _id: _id,
            firstname: firstname,
            lastname: lastname,
            stateName: stateName,
            email: _email,
            pic: pic,
            mobile: mobile,
            city: city,
            branch: branch,
            isAdmin: isAdmin
          }
        });
      } else {
        return res.status(422).json({
          error: "Invalid Email or password"
        });
      }
    })["catch"](function (err) {
      console.log(err);
      res.status(500).json({
        error: "An error occurred while attempting to log in"
      });
    });
  });
}); // UPDATE PROFILE PICS

router.put("/updatepic", requireLogin, function (req, res) {
  User.findByIdAndUpdate(req.user._id, {
    $set: {
      pic: req.body.pic
    }
  }, {
    "new": true
  }, function (err, result) {
    if (err) {
      return res.status(422).json({
        error: "pic canot post"
      });
    }

    res.json(result);
  });
}); // RESET PASSWORD

router.post("/password-reset-verification", function (req, res, next) {
  var email = req.body.email; // check if email field is provided

  if (!email) {
    return res.status(422).json({
      error: "Please provide an email"
    });
  } // Generate verification token


  var verificationToken = crypto.randomBytes(20).toString("hex");
  User.findOne({
    email: email
  }).then(function (existingUser) {
    if (existingUser) {
      var mailOptions = {
        from: "wilsonibekason@gmail.com",
        to: existingUser.email,
        subject: "Email Verification",
        html: "\n        <!-- Header -->\n        <div style=\"background-color: #007bff; padding: 20px; text-align: center;\">\n          <img src=\"https://clintonel.org/wp-content/uploads/2022/05/cropped-CIC-logo-main-Cropped-2.jpg\" alt=\"Company Logo\" style=\"max-width: 100px;\">\n        </div>\n        <div style=\"margin-top: 5rem; text-align: center; font-family: Arial, sans-serif; font-size: 16px;\">\n          <div style=\"max-width: 350px; margin: 0 auto;\">\n            <h2 style=\"font-size: 24px; margin-bottom: 20px;\">Your Account Has Been Verified</h2>\n            <p>Well done, now click the link to reset your account password </p>\n          </div>\n        </div>\n        <!-- Button -->\n        <div style=\"margin-top: 30px;\">\n          <a href=\"http://localhost:3000/reset-password-verify/".concat(verificationToken, "\"  style=\"display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 20px;\">Reset your password</a>\n        </div>\n        <!-- Button -->\n        </div>\n        </div>\n        <!-- Footer -->\n        <footer style=\"background-color: #f5f5f5; padding: 10px; text-align: center; font-family: Arial, sans-serif; font-size: 12px;\">\n          <p>Any questions or inquiries?</p>\n          <p>12 Umuatako Road, Aba</p>\n        </footer>\n        ")
      }; // Update user's verification token and token expiry

      User.findByIdAndUpdate(existingUser._id, {
        verificationToken: verificationToken,
        verificationTokenExpiry: Date.now() + 3600000 // Token expires in 1 hour

      }); // Send the email for verification

      transporter.sendMail(mailOptions).then(function () {
        var convertedMail = convertEmail(existingUser.email);
        return res.status(200).json({
          message: "We sent an email to ".concat(convertedMail, " to reset your password")
        });
      })["catch"](function (err) {
        return res.status(500).json({
          error: err
        });
      });
    }
  });
}); // RESET PASSWORD

router.post("/reset-password-verify/:token", function _callee(req, res) {
  var _req$body6, password, email, confirmPassword, token, _user, mailOptions;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body6 = req.body, password = _req$body6.password, email = _req$body6.email, confirmPassword = _req$body6.confirmPassword;
          token = req.params.token; // Check if email, password, and confirmPassword fields are provided

          if (!(!email || !password || !confirmPassword)) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", res.status(403).json({
            error: "Please provide email, password, and confirmPassword"
          }));

        case 5:
          if (validator.isEmail(email)) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(422).json({
            error: "Invalid email address"
          }));

        case 7:
          if (validatePassword(password)) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            error: "Invalid password format"
          }));

        case 9:
          if (!(password !== confirmPassword)) {
            _context.next = 11;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            error: "Password and confirmPassword do not match"
          }));

        case 11:
          _context.next = 13;
          return regeneratorRuntime.awrap(User.findOne({
            verificationToken: token,
            verificationTokenExpiry: {
              $gt: Date.now()
            }
          }));

        case 13:
          _user = _context.sent;

          if (_user) {
            _context.next = 16;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            error: "Invalid or expired verification token"
          }));

        case 16:
          // Update the user's verification status and clear the verification token fields
          _user.verified = true;
          _user.verificationToken = undefined;
          _user.verificationTokenExpiry = undefined;
          _context.next = 21;
          return regeneratorRuntime.awrap(_user.save());

        case 21:
          // Reset the user's password
          _user.password = password;
          _context.next = 24;
          return regeneratorRuntime.awrap(_user.save());

        case 24:
          // Send an email for password reset verification
          mailOptions = {
            from: "wilsonibekason@gmail.com",
            to: _user.email,
            subject: "Email Verification",
            html: "\n        <!-- Header -->\n        <div style=\"background-color: #007bff; padding: 20px; text-align: center;\">\n          <img src=\"https://clintonel.org/wp-content/uploads/2022/05/cropped-CIC-logo-main-Cropped-2.jpg\" alt=\"Company Logo\" style=\"max-width: 100px;\">\n        </div>\n        <div style=\"margin-top: 5rem; text-align: center; font-family: Arial, sans-serif; font-size: 16px;\">\n          <div style=\"max-width: 350px; margin: 0 auto;\">\n            <h2 style=\"font-size: 24px; margin-bottom: 20px;\">Your Account Has Been Verified</h2>\n            <p>Your password has been reset</p>\n          </div>\n        </div>\n        <!-- Footer -->\n        <footer style=\"background-color: #f5f5f5; padding: 10px; text-align: center; font-family: Arial, sans-serif; font-size: 12px;\">\n          <p>Any questions or inquiries?</p>\n          <p>12 Umuatako Road, Aba</p>\n        </footer>\n      "
          };
          _context.next = 27;
          return regeneratorRuntime.awrap(transporter.sendMail(mailOptions));

        case 27:
          return _context.abrupt("return", res.status(200).json({
            message: "Password reset successfully"
          }));

        case 30:
          _context.prev = 30;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(500).json({
            error: "An error occurred"
          }));

        case 34:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 30]]);
});
module.exports = router;