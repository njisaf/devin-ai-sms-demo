# SMS Sender Demo

A simple React application that sends SMS messages using Twilio. Built with React, Vite, shadcn/ui, and Tailwind CSS.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with your Twilio credentials:
```env
VITE_TWILIO_ACCOUNT_SID=your_account_sid_here
VITE_TWILIO_AUTH_TOKEN=your_auth_token_here
VITE_TWILIO_PHONE_NUMBER=your_twilio_phone_number_here
```

3. Start the development server:
```bash
npm run dev
```

## Usage

1. Open the application in your browser (default: http://localhost:5173)
2. Enter a phone number in the input field
3. Click the "Send SMS" button to send a message
4. The app will display the status of the SMS sending process:
   - Loading state while sending
   - Success message when sent successfully
   - Error message if sending fails

## Live Demo


You can try the demo version at: https://twilio-sms-app-bm6rrs2t.devinapps.com

Note: The demo version currently uses a mock implementation. To send real SMS messages, you need to set up the app with your Twilio credentials.
