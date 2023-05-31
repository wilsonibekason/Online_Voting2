import express, { Response, Request, NextFunction } from "express";
import SendmailTransport from "nodemailer/lib/sendmail-transport";
import sendGridTransport from "nodemailer-sendgrid-transport";
import bcrypt from "bcrypt";
import path from "path";
import fs from "fs";
import jwt from "jsonwebtoken";
import nodemailer, { createTransport } from "nodemailer";
import mongoose from "mongoose";
import { ISavedUser, TUser, UUser } from "../types/types";
import User from "../models/user";
import type { Document } from "mongoose";

const router = express.Router();

// const User = mongoose.model("User");

console.log(nodemailer);

const JWT_SAVED_TOKEN = process.env.JWT_SECRET as string;

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key:
        "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",
    },
  })
);

router.post("/signup", (req: Request, res: Response) => {
  const {
    firstname,
    lastname,
    email,
    password,
    branch,
    city,
    mobile,
    stateName,
    pic,
  } = req.body;

  if (
    !firstname ||
    !lastname ||
    !email ||
    !password ||
    !branch ||
    !mobile ||
    !stateName ||
    !city
  )
    return res
      .status(422)
      .json({ error: "Please fill in all fields, they are required" });
  // @ts-ignore
  User.findOne({ email: email }).then((savedUser: ISavedUser) => {
    if (savedUser) {
      return res.status(422).json({
        error: `User already exists with that email ${savedUser.email}`,
      });
    }
    bcrypt.hash(password, 12).then((hashedpassword) => {
      // create new user with updated hashed Password
      const user = new User({
        firstname,
        lastname,
        email,
        password: hashedpassword,
        branch,
        city,
        mobile,
        stateName,
        pic,
      });
      // save the updated user to database
      user
        .save()
        // @ts-ignore
        .then((user: ISavedUser) => {
          // READ THE HTML TEMPLATE
          const templatePath = path.join(
            __dirname,
            "../",
            "public",
            "email.html"
          );
          fs.readFile(templatePath, "utf8", (err: any, data: string) => {
            if (err) throw err;
            /// Replace place holder with actual data
            const htmlTemplate = data
              .replace(` ${firstname} `, user.firstname)
              .replace(` ${lastname} `, user.lastname);
            ///  send email with updated HTML content
            transporter.sendMail({
              from: "mahenmonhdal111@gmail.com",
              to: user.email,
              subject: "E-Voting Registration",
              html: htmlTemplate,
              // html: "you have been registered",
            });
            res.json({
              message:
                "Success!!!!, message has been sent to " +
                user.email +
                " " +
                "successfully",
            });
          });
        })
        .catch((err: any) => console.error(err));
    });
  });
});

router.post("/signin", (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ error: `please add email and password, the are required` });
  // @ts-ignore
  User.findOne({ email: email }).then((savedUser: ISavedUser) => {
    if (!savedUser) {
      {
        return res.status(404).json({ error: "User not found" });
      }
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          const token = jwt.sign(
            { _id: savedUser._id },
            process.env.JWT_SECRET as string
          );
          const {
            firstname,
            lastname,
            email,
            password,
            branch,
            city,
            mobile,
            stateName,
            pic,
            isAdmin,
          } = savedUser;
          res.json({
            firstname,
            lastname,
            email,
            password,
            branch,
            city,
            mobile,
            stateName,
            pic,
            isAdmin,
          });
        }
      })
      .catch((errors: unknown) => res.status(500).json({ error: errors }));
  });
});

router.put("/updatepic", (req: any, res: Response, next: NextFunction) => {
  const updatedPics = User.findByIdAndUpdate(
    req.user._id,
    { $set: { pic: req.body.pic } },
    { new: true }
  ).catch((errors: unknown) => res.status(500).json({ error: errors }));

  if (updatedPics) {
    res.json(updatedPics);
  }
});

export default router;
