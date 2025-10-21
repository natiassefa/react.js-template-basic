import SEO from 'components/SEO'
import { contactInfo, getCurrentYear, getFullBusinessName } from 'config'

export default function Terms() {
  return (
    <div className="bg-white">
      <SEO
        title="Terms of Service"
        description={`Terms of Service for ${contactInfo.business.name}. Read our terms and conditions for using our services.`}
      />

      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Last updated: January 1, {getCurrentYear()}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Agreement to Terms
            </h2>
            <p className="mt-4 text-gray-600">
              These Terms of Service ("Terms") govern your access to and use of
              the website and services provided by {getFullBusinessName()}{' '}
              ("Company," "we," "our," or "us"). By accessing or using our
              services, you agree to be bound by these Terms.
            </p>
            <p className="mt-4 text-gray-600">
              If you do not agree to these Terms, you may not access or use our
              services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Use of Services
            </h2>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Eligibility
            </h3>
            <p className="mt-4 text-gray-600">
              You must be at least 18 years old to use our services. By using
              our services, you represent and warrant that you meet this age
              requirement.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Account Registration
            </h3>
            <p className="mt-4 text-gray-600">
              To access certain features, you may need to register for an
              account. You agree to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly update your information if it changes</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Prohibited Uses
            </h3>
            <p className="mt-4 text-gray-600">
              You agree not to use our services to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful code or malware</li>
              <li>Engage in fraudulent or deceptive practices</li>
              <li>Harass, abuse, or harm others</li>
              <li>Interfere with or disrupt the services</li>
              <li>Attempt unauthorized access to our systems</li>
              <li>Use automated systems to access the services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Intellectual Property
            </h2>
            <p className="mt-4 text-gray-600">
              Our services and all content, features, and functionality are
              owned by {getFullBusinessName()} and are protected by
              international copyright, trademark, and other intellectual
              property laws.
            </p>
            <p className="mt-4 text-gray-600">
              You are granted a limited, non-exclusive, non-transferable license
              to access and use our services for personal or internal business
              purposes. This license does not include the right to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>Modify or copy the materials</li>
              <li>Use for commercial purposes</li>
              <li>Remove copyright or proprietary notices</li>
              <li>Transfer materials to another person</li>
              <li>Reverse engineer any software</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">
              User Content
            </h2>
            <p className="mt-4 text-gray-600">
              You may be able to submit, post, or upload content to our
              services. You retain ownership of your content, but by submitting
              content, you grant us a worldwide, non-exclusive, royalty-free
              license to use, reproduce, modify, and distribute your content in
              connection with our services.
            </p>
            <p className="mt-4 text-gray-600">
              You represent and warrant that you own or have the necessary
              rights to your content and that it does not violate any third-party
              rights or applicable laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Payment and Billing
            </h2>
            <p className="mt-4 text-gray-600">
              If you purchase products or services from us, you agree to provide
              current, complete, and accurate purchase and account information.
              You agree to promptly update your account and payment information
              as necessary.
            </p>
            <p className="mt-4 text-gray-600">
              All fees are non-refundable unless otherwise stated. We reserve
              the right to change our pricing at any time, with notice provided
              for subscription services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Disclaimer of Warranties
            </h2>
            <p className="mt-4 text-gray-600">
              Our services are provided "as is" and "as available" without
              warranties of any kind, either express or implied, including but
              not limited to warranties of merchantability, fitness for a
              particular purpose, or non-infringement.
            </p>
            <p className="mt-4 text-gray-600">
              We do not warrant that our services will be uninterrupted,
              error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Limitation of Liability
            </h2>
            <p className="mt-4 text-gray-600">
              To the maximum extent permitted by law, {getFullBusinessName()}{' '}
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including loss of profits,
              data, or other intangible losses, resulting from:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>Your access to or use of (or inability to use) our services</li>
              <li>Any conduct or content of third parties on our services</li>
              <li>Unauthorized access or alterations of your data</li>
              <li>Any other matter relating to our services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Indemnification</h2>
            <p className="mt-4 text-gray-600">
              You agree to indemnify, defend, and hold harmless{' '}
              {getFullBusinessName()}, its officers, directors, employees, and
              agents from any claims, liabilities, damages, losses, and expenses
              arising from your violation of these Terms or your use of our
              services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Termination</h2>
            <p className="mt-4 text-gray-600">
              We may terminate or suspend your account and access to our
              services immediately, without prior notice or liability, for any
              reason, including breach of these Terms.
            </p>
            <p className="mt-4 text-gray-600">
              Upon termination, your right to use our services will immediately
              cease. All provisions of these Terms that by their nature should
              survive termination shall survive.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Governing Law</h2>
            <p className="mt-4 text-gray-600">
              These Terms shall be governed by and construed in accordance with
              the laws of {contactInfo.address.state},{' '}
              {contactInfo.address.country}, without regard to its conflict of
              law provisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Changes to Terms
            </h2>
            <p className="mt-4 text-gray-600">
              We reserve the right to modify these Terms at any time. We will
              provide notice of material changes by posting the updated Terms on
              this page and updating the "Last updated" date.
            </p>
            <p className="mt-4 text-gray-600">
              Your continued use of our services after changes become effective
              constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-gray-600">
              If you have any questions about these Terms of Service, please
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
