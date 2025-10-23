declare module 'zeptomail' {
  export interface ZeptoMailConfig {
    url: string;
    token: string;
  }

  export interface EmailAddress {
    address: string;
    name: string;
  }

  export interface EmailRecipient {
    email_address: EmailAddress;
  }

  export interface SendMailParams {
    from: EmailAddress;
    to: EmailRecipient[];
    reply_to?: EmailAddress[];
    subject: string;
    htmlbody: string;
    textbody?: string;
  }

  export class SendMailClient {
    constructor(config: ZeptoMailConfig);
    sendMail(params: SendMailParams): Promise<any>;
  }
}
