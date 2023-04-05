import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../mail-provider";
import nodemailer from "nodemailer";


export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail;
  
  constructor(){
    this.transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '02bc0c6b8e08a8',
        pass: '045eefce99b29e'
      }
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }

}