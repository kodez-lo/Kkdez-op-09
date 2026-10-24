import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './components/Layout.jsx'
import UpcomingPage from './components/UpcomingPage.jsx'
import Loader from './components/Loader.jsx'
import { pageTransition } from './utils/animations.js'

// Dynamic import — Home is code-split into its own chunk so the initial
// bundle stays small on first paint (important on a 4GB RAM machine).
const Home = lazy(() => import('./pages/Home.jsx'))

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Suspense fallback={<Loader />}><PageWrapper><Home /></PageWrapper></Suspense>} />
          <Route path="/shop" element={<PageWrapper><UpcomingPage title="Shop" step="Full catalog, search, filters and sorting — Step 3" /></PageWrapper>} />
          <Route path="/categories" element={<PageWrapper><UpcomingPage title="Categories" step="Banarasi, Silk, Cotton, Bridal, Designer, Festive, Party Wear — Step 3" /></PageWrapper>} />
          <Route path="/product/:id" element={<PageWrapper><UpcomingPage title="Product Details" step="Gallery, zoom, reviews, related products — Step 4" /></PageWrapper>} />
          <Route path="/wishlist" element={<PageWrapper><UpcomingPage title="Wishlist" step="Your saved sarees, powered by Local Storage — Step 5" /></PageWrapper>} />
          <Route path="/cart" element={<PageWrapper><UpcomingPage title="Cart" step="Full cart page — Step 5" /></PageWrapper>} />
          <Route path="/checkout" element={<PageWrapper><UpcomingPage title="Checkout" step="Address, delivery & fake payment — Step 6" /></PageWrapper>} />
          <Route path="/order-success" element={<PageWrapper><UpcomingPage title="Order Confirmed" step="Success animation — Step 6" /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><UpcomingPage title="About Krishna Collections" step="Brand story, mission & quality promise — Step 7" /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><UpcomingPage title="Contact" step="Contact form & map — Step 7" /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><UpcomingPage title="FAQ" step="Step 7" /></PageWrapper>} />
          <Route path="/privacy-policy" element={<PageWrapper><UpcomingPage title="Privacy Policy" step="Step 7" /></PageWrapper>} />
          <Route path="/terms" element={<PageWrapper><UpcomingPage title="Terms & Conditions" step="Step 7" /></PageWrapper>} />
          <Route path="/return-policy" element={<PageWrapper><UpcomingPage title="Return Policy" step="Step 7" /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><UpcomingPage title="404 — Page Not Found" step="Custom luxury 404 — Step 7" /></PageWrapper>} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
