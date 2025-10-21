import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Home, About, Contact, Privacy, Terms } from 'pages'

/**
 * Main routing configuration for the application
 *
 * All routes are wrapped with Header and Footer components for consistent layout
 */
export default function AppRoutes() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* Catch-all route for 404 - redirects to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
