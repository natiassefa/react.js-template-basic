import Avatar from 'components/Avatar'
import SEO from 'components/SEO'
import { contactInfo } from 'config'
import logo from 'assets/logo.svg'

export default function Home() {
  const features = [
    {
      name: 'Fast Performance',
      description:
        'Built with modern technologies for lightning-fast load times and smooth user experience.',
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      )
    },
    {
      name: 'Mobile Responsive',
      description:
        'Fully responsive design that works perfectly on all devices, from mobile phones to desktop computers.',
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      )
    },
    {
      name: 'Easy to Customize',
      description:
        'Simple configuration system lets you update all business information from one central location.',
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      )
    },
    {
      name: 'SEO Optimized',
      description:
        'Built with best practices for search engine optimization to help your business get discovered.',
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      )
    }
  ]

  return (
    <div className="bg-white">
      <SEO
        title="Home"
        description={`${contactInfo.business.description} - ${contactInfo.business.tagline}`}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <Avatar size="large" src={logo} responsive />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">{contactInfo.business.name}</span>
              <span className="block text-indigo-600">
                {contactInfo.business.tagline}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-500">
              {contactInfo.business.description}
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a
                href="/contact"
                className="rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Get Started
              </a>
              <a
                href="/about"
                className="rounded-md bg-white px-8 py-3 text-base font-medium text-indigo-600 ring-1 ring-inset ring-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything you need
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Our platform provides all the tools and features you need to
              succeed.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="rounded-lg bg-white p-6 shadow">
                <div className="flex size-12 items-center justify-center rounded-lg bg-indigo-600 text-white">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-white">10K+</p>
              <p className="mt-2 text-base text-indigo-100">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">99.9%</p>
              <p className="mt-2 text-base text-indigo-100">Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">24/7</p>
              <p className="mt-2 text-base text-indigo-100">Support</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">50+</p>
              <p className="mt-2 text-base text-indigo-100">Integrations</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-12 text-center sm:px-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
              Join thousands of satisfied customers using our platform to grow
              their business.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block rounded-md bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
