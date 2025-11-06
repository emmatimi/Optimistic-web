
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-accent transition-colors">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-secondary border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="font-serif text-lg font-bold text-brand-primary mb-4">Optimistics Naturals</h3>
                        <p className="text-sm text-gray-600">Pure, potent, and plant-based oils for your natural radiance.</p>
                        <div className="flex space-x-4 mt-4">
                           <SocialIcon href="https://instagram.com">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.5,3.5c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5s1.5-0.672,1.5-1.5S15.328,3.5,14.5,3.5z M10,14.5c0-2.485,2.015-4.5,4.5-4.5S19,12.015,19,14.5S16.985,19,14.5,19S10,16.985,10,14.5z M4,5c-1.105,0-2,0.895-2,2v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V7c0-1.105-0.895-2-2-2H4z M14.5,7c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5S18.642,7,14.5,7z"/></svg>
                            </SocialIcon>
                            <SocialIcon href="https://facebook.com">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                            </SocialIcon>
                             <SocialIcon href="https://pinterest.com">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 8a4 4 0 100-8 4 4 0 000 8zm0 2.667C3.582 10.667 0 14.248 0 18.667V24h16v-5.333C16 14.248 12.418 10.667 8 10.667zM24 12.5c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 3.535 2.29 6.533 5.333 7.583V24h5.334v-3.917c3.043-1.05 5.333-4.048 5.333-7.583z" /></svg>
                            </SocialIcon>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/shop" className="text-gray-600 hover:text-brand-primary">Shop All</Link></li>
                            <li><Link to="/about" className="text-gray-600 hover:text-brand-primary">Our Story</Link></li>
                            <li><Link to="/blog" className="text-gray-600 hover:text-brand-primary">Blog</Link></li>
                            <li><Link to="/policy" className="text-gray-600 hover:text-brand-primary">Shipping & Returns</Link></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-semibold text-gray-800 mb-4">Customer Care</h3>
                        <ul className="space-y-2 text-sm">
                             <li><Link to="/contact" className="text-gray-600 hover:text-brand-primary">Contact Us</Link></li>
                            <li><Link to="/faq" className="text-gray-600 hover:text-brand-primary">FAQs</Link></li>
                             <li><Link to="/account" className="text-gray-600 hover:text-brand-primary">My Account</Link></li>
                             <li><Link to="/loyalty" className="text-gray-600 hover:text-brand-primary">Loyalty Program</Link></li>
                        </ul>
                    </div>
                    <div>
                         <h3 className="font-semibold text-gray-800 mb-4">Newsletter</h3>
                         <p className="text-sm text-gray-600 mb-4">Get 10% off your first order and stay up to date on new products and tips.</p>
                         <form onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input type="email" placeholder="Your email" className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary"/>
                                <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
                            </div>
                         </form>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Optimistics Naturals. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
