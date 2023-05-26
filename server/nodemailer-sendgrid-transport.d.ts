declare module "nodemailer-sendgrid-transport" {
  import { TransportOptions } from "nodemailer";

  interface SendGridOptions extends TransportOptions {
    auth: {
      api_key: string;
    };
  }

  function sendgrid(options: SendGridOptions): any;

  export = sendgrid;
}
