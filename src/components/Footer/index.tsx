import { useMobile } from 'hooks'
import {
  navigationLinks,
  getSocialLinks,
  getFullBusinessName,
  getCurrentYear
} from 'config'

export default function Footer() {
  const { isMobile } = useMobile()
  const socialLinks = getSocialLinks()

  return (
    <footer className="bg-gray-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div
          className={`${
            isMobile ? 'space-y-8' : 'grid grid-cols-2 gap-8 lg:grid-cols-4'
          }`}
        >
          {/* Product Section */}
          {navigationLinks.product && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Product
              </h3>
              <ul className="space-y-3">
                {navigationLinks.product.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Company Section */}
          {navigationLinks.company && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Company
              </h3>
              <ul className="space-y-3">
                {navigationLinks.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Legal Section */}
          {navigationLinks.legal && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Legal
              </h3>
              <ul className="space-y-3">
                {navigationLinks.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Subscribe to our newsletter
            </h3>
            <p className="text-base text-gray-600">
              Get the latest updates and news.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder:text-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:placeholder:text-gray-400 sm:max-w-xs"
                placeholder="Enter your email"
              />
              <div className={`${isMobile ? 'mt-3 w-full' : 'ml-4 shrink-0'}`}>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`mt-12 border-t border-gray-200 pt-8 ${
            isMobile
              ? 'space-y-4'
              : 'md:flex md:items-center md:justify-between'
          }`}
        >
          <div className="flex space-x-6">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="size-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p
            className={`text-base text-gray-400 ${
              isMobile ? 'mt-4' : 'mt-8 md:mt-0'
            }`}
          >
            &copy; {getCurrentYear()} {getFullBusinessName()}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
