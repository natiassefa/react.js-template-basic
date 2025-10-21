import SEO from 'components/SEO'
import { useMobile } from 'hooks'
import {
  contactInfo,
  getFormattedPhone,
  getFormattedAddress,
  getSocialLinks
} from 'config'

export default function Contact() {
  const { isMobile } = useMobile()
  const socialLinks = getSocialLinks()

  return (
    <div className="bg-white">
      <SEO
        title="Contact Us"
        description={`Get in touch with ${contactInfo.business.name}. Email: ${contactInfo.contact.email}, Phone: ${contactInfo.contact.phone}`}
      />

      {/* Header Section */}
      <div className="bg-indigo-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-indigo-100">
              We&apos;d love to hear from you. Get in touch with our team.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information & Form Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div
          className={`${
            isMobile
              ? 'space-y-12'
              : 'grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24'
          }`}
        >
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-600">
              {contactInfo.business.description}
            </p>

            <dl className="mt-8 space-y-6">
              {/* Email */}
              <div className="flex">
                <div className="shrink-0">
                  <svg
                    className="size-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <dt className="text-sm font-medium text-gray-900">Email</dt>
                  <dd className="mt-1 text-base text-gray-600">
                    <a
                      href={`mailto:${contactInfo.contact.email}`}
                      className="hover:text-indigo-600"
                    >
                      {contactInfo.contact.email}
                    </a>
                  </dd>
                  {contactInfo.contact.supportEmail && (
                    <dd className="mt-1 text-sm text-gray-500">
                      Support:{' '}
                      <a
                        href={`mailto:${contactInfo.contact.supportEmail}`}
                        className="hover:text-indigo-600"
                      >
                        {contactInfo.contact.supportEmail}
                      </a>
                    </dd>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="flex">
                <div className="shrink-0">
                  <svg
                    className="size-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <dt className="text-sm font-medium text-gray-900">Phone</dt>
                  <dd className="mt-1 text-base text-gray-600">
                    <a
                      href={`tel:${contactInfo.contact.phone.replace(
                        /\D/g,
                        ''
                      )}`}
                      className="hover:text-indigo-600"
                    >
                      {getFormattedPhone()}
                    </a>
                  </dd>
                </div>
              </div>

              {/* Address */}
              {contactInfo.address.street && (
                <div className="flex">
                  <div className="shrink-0">
                    <svg
                      className="size-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <dt className="text-sm font-medium text-gray-900">
                      Address
                    </dt>
                    <dd className="mt-1 whitespace-pre-line text-base text-gray-600">
                      {getFormattedAddress()}
                    </dd>
                  </div>
                </div>
              )}

              {/* Business Hours */}
              {contactInfo.hours && (
                <div className="flex">
                  <div className="shrink-0">
                    <svg
                      className="size-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <dt className="text-sm font-medium text-gray-900">
                      Business Hours ({contactInfo.hours.timezone})
                    </dt>
                    {contactInfo.hours.weekdays && (
                      <dd className="mt-1 text-base text-gray-600">
                        {contactInfo.hours.weekdays}
                      </dd>
                    )}
                    {contactInfo.hours.weekends && (
                      <dd className="text-base text-gray-600">
                        {contactInfo.hours.weekends}
                      </dd>
                    )}
                    {contactInfo.hours.note && (
                      <dd className="mt-2 text-sm text-indigo-600">
                        {contactInfo.hours.note}
                      </dd>
                    )}
                  </div>
                </div>
              )}
            </dl>

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900">Follow Us</h3>
                <div className="mt-4 flex space-x-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-indigo-600"
                    >
                      <span className="sr-only">{social.name}</span>
                      <social.icon className="size-6" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 px-6 py-8 sm:px-8 sm:py-10">
            <h3 className="text-2xl font-bold text-gray-900">
              Send us a message
            </h3>
            <form className="mt-6 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="mt-2 block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="mt-2 block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-900"
                >
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="mt-2 block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="mt-2 block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-2 block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
