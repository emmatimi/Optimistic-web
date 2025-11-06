
import React from 'react';
import { HashRouter, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion, type Transition } from 'framer-motion';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import ShopPage from './components/pages/ShopPage';
import ProductDetailPage from './components/pages/ProductDetailPage';
import AboutPage from './components/pages/AboutPage';
import GalleryPage from './components/pages/GalleryPage';
import BlogPage from './components/pages/BlogPage';
import TestimonialsPage from './components/pages/TestimonialsPage';
import CartPage from './components/pages/CartPage';
import CheckoutPage from './components/pages/CheckoutPage';
import PolicyPage from './components/pages/PolicyPage';
import WishlistPage from './components/pages/WishlistPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import WhatsAppButton from './components/ui/WhatsAppButton';
import ContactPage from './components/pages/ContactPage';
import FAQPage from './components/pages/FAQPage';
import AccountPage from './components/pages/AccountPage';
import LoyaltyPage from './components/pages/LoyaltyPage';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

const pageTransition: Transition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
                <Route path="/shop" element={<PageWrapper><ShopPage /></PageWrapper>} />
                <Route path="/product/:id" element={<PageWrapper><ProductDetailPage /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
                <Route path="/gallery" element={<PageWrapper><GalleryPage /></PageWrapper>} />
                <Route path="/blog" element={<PageWrapper><BlogPage /></PageWrapper>} />
                <Route path="/testimonials" element={<PageWrapper><TestimonialsPage /></PageWrapper>} />
                <Route path="/cart" element={<PageWrapper><CartPage /></PageWrapper>} />
                <Route 
                    path="/checkout" 
                    element={
                        <ProtectedRoute>
                            <PageWrapper><CheckoutPage /></PageWrapper>
                        </ProtectedRoute>
                    } 
                />
                <Route path="/policy" element={<PageWrapper><PolicyPage /></PageWrapper>} />
                <Route path="/wishlist" element={<PageWrapper><WishlistPage /></PageWrapper>} />
                <Route path="/login" element={<PageWrapper><LoginPage /></PageWrapper>} />
                <Route path="/register" element={<PageWrapper><RegisterPage /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
                <Route path="/faq" element={<PageWrapper><FAQPage /></PageWrapper>} />
                <Route path="/loyalty" element={<PageWrapper><LoyaltyPage /></PageWrapper>} />
                <Route 
                    path="/account"
                    element={
                        <ProtectedRoute>
                            <PageWrapper><AccountPage /></PageWrapper>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};

const PageWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
    >
        {children}
    </motion.div>
);

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <HashRouter>
            <div className="bg-brand-light font-sans text-brand-dark min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
                <AnimatedRoutes />
              </main>
              <Footer />
              <WhatsAppButton />
            </div>
          </HashRouter>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;