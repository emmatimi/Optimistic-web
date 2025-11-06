
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { useAuth } from '../../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const LeafIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const WishlistIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);

const HamburgerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const NavItem: React.FC<{ to: string, children: React.ReactNode, onClick?: () => void }> = ({ to, children, onClick }) => (
    <NavLink 
        to={to} 
        onClick={onClick}
        className={({ isActive }) => 
            `block md:inline-block px-3 py-2 text-sm font-medium transition-colors duration-300 border-b-2 ${isActive ? 'border-brand-primary text-brand-primary font-semibold' : 'border-transparent text-brand-dark hover:text-brand-primary'}`
        }
    >
        {children}
    </NavLink>
);

const Header: React.FC = () => {
    const { cartCount } = useCart();
    const { wishlistCount } = useWishlist();
    const { isAuthenticated, user, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        setIsMenuOpen(false);
        navigate('/');
    };

    const navLinks = [
        { to: '/', text: 'Home' },
        { to: '/shop', text: 'Shop' },
        { to: '/about', text: 'About' },
        { to: '/gallery', text: 'Results' },
        { to: '/blog', text: 'Blog' },
        { to: '/testimonials', text: 'Testimonials' },
    ];
    
    return (
        <header className="bg-brand-secondary/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-2">
                            <LeafIcon />
                            <span className="font-serif text-xl font-bold text-brand-primary">Optimistics Naturals</span>
                        </Link>
                    </div>
                    <nav className="hidden sm:flex items-center">
                        <div className="ml-4 md:ml-10 flex items-baseline space-x-1 md:space-x-4">
                            {navLinks.map(link => (
                                <NavItem key={link.to} to={link.to}>{link.text}</NavItem>
                            ))}
                            {isAuthenticated && <NavItem to="/account">My Account</NavItem>}
                        </div>
                    </nav>
                    <div className="flex items-center">
                        {isAuthenticated ? (
                             <div className="hidden sm:flex items-center space-x-2 md:space-x-4 ml-2">
                                <span className="text-sm hidden lg:inline">Hi, {user?.name?.split(' ')[0]}</span>
                                <Button onClick={handleLogout} variant="outline" className="text-xs px-3 py-1">Logout</Button>
                            </div>
                        ) : (
                            <div className="hidden sm:block ml-4">
                               <Button to="/login" variant="primary" className="text-xs px-4 py-2">Login</Button>
                            </div>
                        )}
                        <Link to="/wishlist" className="relative text-brand-dark hover:text-brand-primary p-2 ml-2">
                            <WishlistIcon />
                            {wishlistCount > 0 && (
                                <motion.span 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-brand-accent text-white text-xs flex items-center justify-center"
                                >
                                    {wishlistCount}
                                </motion.span>
                            )}
                        </Link>
                        <Link to="/cart" className="relative text-brand-dark hover:text-brand-primary p-2">
                            <CartIcon />
                            {cartCount > 0 && (
                                <motion.span 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-brand-accent text-white text-xs flex items-center justify-center"
                                >
                                    {cartCount}
                                </motion.span>
                            )}
                        </Link>
                        <div className="sm:hidden ml-2">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-brand-dark hover:text-brand-primary focus:outline-none">
                                {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
             <AnimatePresence>
            {isMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="sm:hidden bg-brand-secondary"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => (
                            <NavItem key={link.to} to={link.to} onClick={() => setIsMenuOpen(false)}>{link.text}</NavItem>
                        ))}
                        <div className="border-t my-2 mx-3"></div>
                        {isAuthenticated ? (
                            <>
                                <NavItem to="/account" onClick={() => setIsMenuOpen(false)}>My Account</NavItem>
                                <div className="px-3 py-2 text-sm">Hi, {user?.name}</div>
                                <button onClick={handleLogout} className="w-full text-left block px-3 py-2 rounded-md text-sm font-medium text-brand-dark hover:text-brand-primary">Logout</button>
                            </>
                        ) : (
                            <NavItem to="/login" onClick={() => setIsMenuOpen(false)}>Login</NavItem>
                        )}
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
