import { useState } from 'react'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'

function App() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const sendSMS = async () => {
    setStatus('sending')
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      const isSuccess = Math.random() > 0.3
      if (!isSuccess) {
        throw new Error('Mock SMS failure')
      }
      setStatus('success')
      setPhoneNumber('')
    } catch (error) {
      console.error('Error sending SMS:', error)
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">Send SMS Message</h1>
        <div className="space-y-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              disabled={status === 'sending'}
            />
          </div>
          <Button
            className="w-full"
            onClick={sendSMS}
            disabled={!phoneNumber || status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send SMS'}
          </Button>
          {status === 'success' && (
            <p className="text-green-600 text-sm text-center">SMS sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-sm text-center">Failed to send SMS. Please try again.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
