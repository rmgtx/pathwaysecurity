import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import VCISO from './pages/services/VCISO'
import RiskManagement from './pages/services/RiskManagement'
import Compliance from './pages/services/Compliance'
import InformationSecurity from './pages/services/InformationSecurity'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/vciso" element={<VCISO />} />
          <Route path="/risk-management" element={<RiskManagement />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/information-security" element={<InformationSecurity />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
