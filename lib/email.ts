import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactNotificationEmail(data: EmailData) {
  try {
    const result = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'duonghb1577@gmail.com',
      replyTo: data.email,
      subject: `New Contact Form Submission from ${data.name}`,
      html: generateEmailHTML(data),
    });

    if (result.error) {
      console.error('Email send error:', result.error);
      return { success: false, error: result.error };
    }

    return { success: true, data: result.data };
  } catch (error) {
    console.error('Email service error:', error);
    return { success: false, error };
  }
}

function generateEmailHTML(data: EmailData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9fafb;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
            color: white;
            padding: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          .content {
            padding: 30px;
          }
          .field {
            margin-bottom: 25px;
          }
          .label {
            font-weight: 600;
            color: #1f2937;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
            display: block;
          }
          .value {
            background-color: #f3f4f6;
            padding: 12px;
            border-radius: 4px;
            word-break: break-word;
            color: #374151;
          }
          .message-value {
            white-space: pre-wrap;
            line-height: 1.6;
          }
          .footer {
            background-color: #f9fafb;
            padding: 20px 30px;
            border-top: 1px solid #e5e7eb;
            font-size: 12px;
            color: #6b7280;
            text-align: center;
          }
          .reply-info {
            background-color: #eff6ff;
            border-left: 4px solid #3B82F6;
            padding: 12px;
            margin-top: 20px;
            font-size: 13px;
            color: #1e40af;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 New Contact Form Submission</h1>
          </div>

          <div class="content">
            <div class="field">
              <span class="label">From</span>
              <div class="value">${escapeHtml(data.name)}</div>
            </div>

            <div class="field">
              <span class="label">Email</span>
              <div class="value">
                <a href="mailto:${escapeHtml(data.email)}" style="color: #3B82F6; text-decoration: none;">
                  ${escapeHtml(data.email)}
                </a>
              </div>
            </div>

            <div class="field">
              <span class="label">Message</span>
              <div class="value message-value">${escapeHtml(data.message)}</div>
            </div>

            <div class="reply-info">
              💡 <strong>Reply Tip:</strong> Click the email above to reply directly, or use your email client's reply function.
            </div>
          </div>

          <div class="footer">
            <p>This is an automated notification from your portfolio contact form.</p>
            <p style="margin: 10px 0 0 0;">
              Submitted on ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
