import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import 'tailwindcss/tailwind.css'
import App from 'components/App'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
)
