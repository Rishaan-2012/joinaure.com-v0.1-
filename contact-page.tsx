import { useState, useEffect } from "react"

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xqabvrow", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSuccess(true)
        form.reset()
      } else {
        console.error("Submission failed")
      }
    } catch (err) {
      console.error("Unexpected error", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-32 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`space-y-4 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-1000`}>
            <h1 className="text-4xl font-normal text-gray-900 leading-tight">Get in touch</h1>
            <p className="text-gray-600 leading-relaxed max-w-lg">
              Running a business is hard enough. Don't lose momentum chasing capital when you could be building what
              matters. Aure gives you the modern financing support you need.
            </p>
          </div>

          <div className={`bg-white rounded-2xl shadow-lg p-6 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-1000`}>
            <p className="text-gray-600 mb-6 text-sm">
              Please fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                />
              </div>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                required
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
              />
              <textarea
                name="description"
                placeholder="Description"
                rows={3}
                required
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {success && (
                <p className="text-green-600 text-sm pt-2">
                  ✅ Your message was sent successfully. We'll get back to you shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


