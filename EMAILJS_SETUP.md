# EmailJS Setup Guide

This guide will help you configure EmailJS to receive contact form submissions directly in your email inbox.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Note down the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the following template structure:

**Subject:** New Contact Form Submission from {{name}}

**Content:**
```
Hello,

You have received a new message from your website contact form.

Name: {{name}}
Email: {{email}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from your website contact form.
```

4. In the template settings, set:
   - **To Email:** `vinaychauhan1352002@gmail.com`
   - **From Name:** `{{from_name}}`
   - **From Email:** `{{from_email}}`

5. Note down the **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. Copy this key (you'll need this later)

## Step 5: Configure Environment Variables

1. In your project root, create a file named `.env` (if it doesn't exist)
2. Add the following lines to the `.env` file:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual:
   - Service ID (from Step 2)
   - Template ID (from Step 3)
   - Public Key (from Step 4)

**Example:**
```
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

## Step 6: Restart Your Development Server

After adding the `.env` file:
1. Stop your development server (Ctrl+C)
2. Start it again with `npm run dev`
3. The environment variables will now be loaded

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox (`vinaychauhan1352002@gmail.com`)
4. You should receive the form submission as an email

## Troubleshooting

- **"EmailJS credentials not configured" error:** Make sure your `.env` file is in the project root and contains all three variables
- **Emails not arriving:** Check your EmailJS dashboard for error logs
- **Service connection issues:** Reconnect your email service in EmailJS dashboard
- **Template variables not working:** Make sure your template uses the exact variable names: `{{name}}`, `{{email}}`, `{{phone}}`, `{{message}}`

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic email templates
- Standard support

For higher limits, consider upgrading to a paid plan.

## Security Note

The `.env` file should be added to `.gitignore` to keep your credentials secure. Never commit your EmailJS credentials to version control.

