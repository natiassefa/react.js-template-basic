import { useState } from 'react'
import { useMobile } from 'hooks'
import { contactInfo, navigationLinks } from 'config'

export default function Header() {
  const { isMobile } = useMobile()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-gray-200 py-4 lg:border-none">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-indigo-600">
              {contactInfo.business.name}
            </a>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="ml-10 space-x-8">
              {navigationLinks.main &&
                navigationLinks.main.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-gray-700 hover:text-indigo-600"
                  >
                    {link.name}
                  </a>
                ))}
            </div>
          )}

          <div className="ml-auto flex items-center space-x-4">
            {/* Mobile menu button */}
            {isMobile && (
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!mobileMenuOpen ? (
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                ) : (
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMobile && mobileMenuOpen && (
          <div className="space-y-1 pb-3 pt-2">
            {navigationLinks.main &&
              navigationLinks.main.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:border-indigo-600 hover:bg-gray-50 hover:text-indigo-600"
                >
                  {link.name}
                </a>
              ))}
          </div>
        )}
      </nav>
    </header>
  )
}
