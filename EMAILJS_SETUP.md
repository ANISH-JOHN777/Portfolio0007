# EmailJS Setup Guide

Your contact form is now configured to send emails directly to **anishjohn0007@gmail.com**. Follow these steps to activate it:

## Step 1: Create a Free EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com)
2. Click "Sign Up Free"
3. Create an account using your email

## Step 2: Add Gmail Service

1. In the dashboard, click **"Add Service"**
2. Select **Gmail**
3. Click **"Connect Account"** and authorize your Gmail account (anishjohn0007@gmail.com)
4. Give it a name like **"Gmail Service"**
5. **Copy your Service ID** - should look like `service_xxxxxxxx`

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the left menu
2. Click **"Create New Template"**
3. Name it **`template_contact`** (must match the code)
4. Use this template structure:

```
Subject: New message from {{from_name}}

From: {{from_name}} <{{from_email}}>

Message:
{{message}}
```

5. In the settings, set **"To Email"** to: `{{to_email}}`
6. Save the template
7. **Copy your Template ID** - should look like `template_xxxxxxxx`

## Step 4: Get Your Public Key

1. Go to **Account Settings** (gear icon)
2. Find **"Public Key"**
3. **Copy it** - should look like `xxxxxxxxxxxxxxx_xxxxxxxxx`

## Step 5: Update Contact.jsx

In `src/components/Contact.jsx`, find these lines and replace with your IDs:

```javascript
// Line 17 - Replace YOUR_EMAILJS_PUBLIC_KEY
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

// Line 42 - Replace service_contact with your Service ID
await emailjs.send(
    'service_xxxxxxxx',  // Your Service ID here
    'template_xxxxxxxx', // Your Template ID here
    {
        to_email: 'anishjohn0007@gmail.com',
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
        reply_to: formState.email
    }
);
```

## Example (After Setup)

```javascript
emailjs.init('k1a2b3c4d5e6f7g8h9i0j1k2l3m4n5p6');

await emailjs.send(
    'service_abc123def456',
    'template_xyz789uvw012',
    {
        to_email: 'anishjohn0007@gmail.com',
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
        reply_to: formState.email
    }
);
```

## Step 6: Test It

1. Run `npm run dev`
2. Go to the contact form
3. Fill in the form and submit
4. Check your Gmail inbox for the message!

## Troubleshooting

**"Auth failed" error:**
- Make sure your Public Key is correct in Contact.jsx
- Verify your Gmail account is authorized in EmailJS

**Email not arriving:**
- Check your Service ID and Template ID match exactly
- Check the template variable names match (from_name, from_email, message, to_email)
- Check your spam folder in Gmail

**Rate limiting:**
- Free plan allows 200 emails/month. Should be plenty for a portfolio!

## Need Help?

Visit [EmailJS Documentation](https://www.emailjs.com/docs/) for more details.
