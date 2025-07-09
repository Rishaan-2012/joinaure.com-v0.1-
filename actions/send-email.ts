"use server"

export async function sendContactEmail(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const companyName = formData.get("companyName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const description = formData.get("description") as string

  // Email configuration
  const emailData = {
    to: "rishaan804@gmail.com",
    subject: "New Contact Form Submission - Aure",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #d5b36e; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
        </div>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${description}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
          <p>Submitted at: ${new Date().toLocaleString()}</p>
          <p>This email was sent from the Aure contact form.</p>
        </div>
      </div>
    `,
  }

  try {
    // In a real application, you would use a service like Resend, SendGrid, or Nodemailer
    // Here's how you would implement it with Resend (recommended for Next.js):

    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const { data, error } = await resend.emails.send({
      from: 'Aure Contact Form <noreply@yourdomain.com>',
      to: [emailData.to],
      subject: emailData.subject,
      html: emailData.html,
    });
    
    if (error) {
      console.error('Email sending error:', error);
      return { success: false, message: "Failed to send email" };
    }
    */

    // For now, we'll simulate the email sending and log the data
    console.log("Email would be sent to:", emailData.to)
    console.log("Subject:", emailData.subject)
    console.log("Content:", emailData.html)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error processing contact form:", error)
    return {
      success: false,
      message: "There was an error sending your message. Please try again.",
    }
  }
}
