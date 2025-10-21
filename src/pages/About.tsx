import SEO from 'components/SEO'
import { contactInfo } from 'config'
import { useMobile } from 'hooks'

export default function About() {
  const { isMobile } = useMobile()

  const stats = [
    { label: 'Founded', value: '2020' },
    { label: 'Employees', value: '50+' },
    { label: 'Customers', value: '10,000+' },
    { label: 'Countries', value: '25+' }
  ]

  const values = [
    {
      name: 'Innovation',
      description:
        "We constantly push the boundaries of what's possible, bringing cutting-edge solutions to our customers."
    },
    {
      name: 'Quality',
      description:
        'We never compromise on quality. Every product we deliver meets the highest standards of excellence.'
    },
    {
      name: 'Customer First',
      description:
        'Our customers are at the heart of everything we do. Their success is our success.'
    },
    {
      name: 'Integrity',
      description:
        'We operate with honesty and transparency, building trust with our customers and partners.'
    }
  ]

  const team = [
    {
      name: 'Jane Doe',
      role: 'CEO & Founder',
      image: 'https://via.placeholder.com/400x400',
      bio: 'Jane founded the company with a vision to transform the industry.'
    },
    {
      name: 'John Smith',
      role: 'CTO',
      image: 'https://via.placeholder.com/400x400',
      bio: 'John leads our technical team with over 15 years of experience.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Design',
      image: 'https://via.placeholder.com/400x400',
      bio: 'Sarah brings creativity and user-centered design to every project.'
    },
    {
      name: 'Michael Brown',
      role: 'Head of Sales',
      image: 'https://via.placeholder.com/400x400',
      bio: 'Michael builds relationships that drive business growth.'
    }
  ]

  return (
    <div className="bg-white">
      <SEO
        title="About Us"
        description={`Learn more about ${contactInfo.business.name}. ${contactInfo.business.tagline}`}
      />

      {/* Hero Section */}
      <div className="bg-indigo-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About {contactInfo.business.name}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-indigo-100">
              {contactInfo.business.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Mission
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            {contactInfo.business.description} We&apos;re committed to
            exceptional value to our customers through innovative solutions and
            outstanding service.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16">
          <div
            className={`${
              isMobile
                ? 'grid grid-cols-2 gap-6'
                : 'grid grid-cols-2 gap-8 lg:grid-cols-4'
            }`}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg bg-indigo-50 px-4 py-6 text-center"
              >
                <dt className="text-sm font-medium text-gray-600">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-3xl font-bold text-indigo-600">
                  {stat.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              These core values guide everything we do.
            </p>
          </div>

          <div
            className={`mt-12 ${
              isMobile
                ? 'space-y-8'
                : 'grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'
            }`}
          >
            {values.map((value) => (
              <div key={value.name} className="rounded-lg bg-white p-6 shadow">
                <h3 className="text-lg font-semibold text-gray-900">
                  {value.name}
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            The talented people behind our success.
          </p>
        </div>

        <div
          className={`mt-12 ${
            isMobile
              ? 'space-y-12'
              : 'grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4'
          }`}
        >
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto size-40 rounded-full object-cover"
              />
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-indigo-600">{member.role}</p>
              <p className="mt-3 text-sm text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-indigo-100">
              Join thousands of satisfied customers using our platform.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block rounded-md bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
