import * as React from 'react';

interface IEmailTemplateProps {
  fullName?: string;
  email?: string;
  message?: string;
}

export const EmailTemplate: React.FC<Readonly<IEmailTemplateProps>> = ({fullName, email, message}) => (
  <div>
    <p>New message from {fullName} ({email})</p>
    <p>Message:</p>
    <p>{message}</p>
  </div>
);