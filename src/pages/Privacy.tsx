import SEO from 'components/SEO'
import { contactInfo, getCurrentYear } from 'config'

export default function Privacy() {
  return (
    <div className="bg-white">
      <SEO
        title="Privacy Policy"
        description={`Privacy Policy for ${contactInfo.business.name}. Learn how we collect, use, and protect your personal information.`}
      />

      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-4 text-lg text-gray-600">
            Last updated: January 1, {getCurrentYear()}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
            <p className="mt-4 text-gray-600">
              {contactInfo.business.name} ("we," "our," or "us") is committed
              to protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or use our services.
            </p>
            <p className="mt-4 text-gray-600">
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              site or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Information We Collect
            </h2>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Personal Information
            </h3>
            <p className="mt-4 text-gray-600">
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>Register for an account</li>
              <li>Fill out a contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Make a purchase</li>
              <li>Communicate with us</li>
            </ul>
            <p className="mt-4 text-gray-600">
              This information may include your name, email address, phone
              number, mailing address, payment information, and any other
              information you choose to provide.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Automatically Collected Information
            </h3>
            <p className="mt-4 text-gray-600">
              We automatically collect certain information when you visit, use,
              or navigate our website. This information may include:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Click-stream data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">
              How We Use Your Information
            </h2>
            <p className="mt-4 text-gray-600">
              We use the information we collect or receive to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>Provide, operate, and maintain our services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our services</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Communicate with you for customer service, updates, and
                marketing
              </li>
              <li>Process your transactions and manage your orders</li>
              <li>Send you newsletters and promotional materials</li>
              <li>Find and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Disclosure of Your Information
            </h2>
            <p className="mt-4 text-gray-600">
              We may share information we have collected about you in certain
              situations:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Service Providers:</strong> We may share your
                information with third-party service providers who perform
                services for us, such as payment processing, data analysis,
                email delivery, and customer service.
              </li>
              <li>
                <strong>Business Transfers:</strong> We may share or transfer
                your information in connection with a merger, sale, acquisition,
                or other business transaction.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your
                information if required by law or in response to valid requests
                by public authorities.
              </li>
              <li>
                <strong>Protection of Rights:</strong> We may disclose your
                information to protect and defend our rights, property, or
                safety, or that of our users or others.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Cookies and Tracking Technologies
            </h2>
            <p className="mt-4 text-gray-600">
              We use cookies and similar tracking technologies to track activity
              on our website and store certain information. You can instruct
              your browser to refuse all cookies or to indicate when a cookie is
              being sent. However, if you do not accept cookies, you may not be
              able to use some portions of our service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
            <p className="mt-4 text-gray-600">
              We use administrative, technical, and physical security measures
              to protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that no security measures are perfect or
              impenetrable, and no method of data transmission can be guaranteed
              against any interception or other type of misuse.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
            <p className="mt-4 text-gray-600">
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Access:</strong> You can request access to the personal
                information we hold about you.
              </li>
              <li>
                <strong>Correction:</strong> You can request that we correct any
                inaccurate or incomplete information.
              </li>
              <li>
                <strong>Deletion:</strong> You can request that we delete your
                personal information.
              </li>
              <li>
                <strong>Opt-Out:</strong> You can opt out of receiving
                marketing communications from us.
              </li>
              <li>
                <strong>Data Portability:</strong> You can request a copy of
                your data in a structured, machine-readable format.
              </li>
            </ul>
            <p className="mt-4 text-gray-600">
              To exercise these rights, please contact us at{' '}
              <a
                href={`mailto:${contactInfo.contact.email}`}
                className="text-indigo-600 hover:text-indigo-800"
              >
                {contactInfo.contact.email}
              </a>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Children's Privacy
            </h2>
            <p className="mt-4 text-gray-600">
              Our services are not intended for children under the age of 13. We
              do not knowingly collect personal information from children under
              13. If you become aware that a child has provided us with personal
              information, please contact us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Changes to This Privacy Policy
            </h2>
            <p className="mt-4 text-gray-600">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date. You are advised to review
              this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-gray-600">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>
                By email:{' '}
                <a
                  href={`mailto:${contactInfo.contact.email}`}
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  {contactInfo.contact.email}
                </a>
              </li>
              <li>By phone: {contactInfo.contact.phone}</li>
              {contactInfo.address.street && (
                <li>
                  By mail:{' '}
                  {[
                    contactInfo.address.street,
                    `${contactInfo.address.city}, ${contactInfo.address.state} ${contactInfo.address.zipCode}`,
                    contactInfo.address.country
                  ]
                    .filter(Boolean)
                    .join(', ')}
                </li>
              )}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
