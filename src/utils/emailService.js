import emailjs from '@emailjs/browser'

// EmailJS configuration
const getEmailJSConfig = () => {
  return {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_0xgnagf',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_x223x13',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'ka8bEEzx2SZwojr9c'
  }
}

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data containing name, email, phone, message
 * @param {Object} options - Additional options like subject, source page, etc.
 * @returns {Promise} - Promise that resolves when email is sent
 */
export const sendEmail = async (formData, options = {}) => {
  const { serviceId, templateId, publicKey } = getEmailJSConfig()

  // Validate that credentials are set
  if (!serviceId || !templateId || !publicKey || 
      serviceId === 'YOUR_SERVICE_ID' || 
      templateId === 'YOUR_TEMPLATE_ID' || 
      publicKey === 'YOUR_PUBLIC_KEY') {
    throw new Error('EmailJS credentials not configured. Please check your .env file and restart the development server.')
  }

  // Prepare template parameters
  const templateParams = {
    to_email: 'vinaychauhan1352002@gmail.com',
    from_name: formData.name || 'Website Visitor',
    from_email: formData.email || 'no-email@example.com',
    phone: formData.phone || 'Not provided',
    message: formData.message || 'No message provided',
    name: formData.name || 'Not provided',
    email: formData.email || 'Not provided',
    // Additional fields
    source_page: options.sourcePage || 'Contact Form',
    subject: options.subject || `New Contact Form Submission from ${formData.name || 'Website Visitor'}`,
  }

  // Send email using EmailJS
  return await emailjs.send(serviceId, templateId, templateParams, publicKey)
}

