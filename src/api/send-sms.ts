import { Twilio } from 'twilio'

export async function sendSMS(phoneNumber: string) {
  // Validate request method
  if (!phoneNumber) {
    throw new Error('Phone number is required')
  }

  try {
    // Initialize Twilio client
    const client = new Twilio(
      import.meta.env.VITE_TWILIO_ACCOUNT_SID,
      import.meta.env.VITE_TWILIO_AUTH_TOKEN
    )

    // Send SMS
    const message = await client.messages.create({
      body: 'Hello from Devin! This is a test message.',
      to: phoneNumber,
      from: import.meta.env.VITE_TWILIO_PHONE_NUMBER,
    })

    return { success: true, messageId: message.sid }
  } catch (error) {
    console.error('Error sending SMS:', error)
    throw error
  }
}
