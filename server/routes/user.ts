import express, { Response, Request } from "express";
import SendmailTransport from "nodemailer/lib/sendmail-transport";
import sendGridTransport from "nodemailer-sendgrid-transport";

const router = express.Router();
import nodemailer, { createTransport } from "nodemailer";
console.log(nodemailer);

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key:
        "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",
    },
  })
);
