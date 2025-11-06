import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const LoyaltyPage: React.FC = () => {
    return (
        <div className="bg-brand-light min-h-screen">
            <div className="bg-brand-secondary text-center py-16">
                <motion.h1 
                    className="text-4xl md:text-5xl font-serif font-bold text-brand-primary"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Optimistics Rewards
                </motion.h1>
                <motion.p 
                    className="mt-4 text-lg text-brand-dark max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Get rewarded for your loyalty. The more you glow, the more you earn!
                </motion.p>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">How It Works</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Joining is easy and free! Create an account to start earning points on every purchase, and redeem them for exclusive discounts.
                        </p>
                    </motion.div>

                    {/* Tiers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center mb-12">
                        <motion.div 
                            className="bg-white p-6 rounded-lg shadow-md"
                             initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h3 className="text-xl font-semibold text-brand-primary mb-2">1. Earn Points</h3>
                            <p className="text-gray-600">Get 10 points for every ₦1,000 you spend. Plus, earn points for signing up, following us on social media, and on your birthday!</p>
                        </motion.div>
                         <motion.div 
                            className="bg-white p-6 rounded-lg shadow-md"
                             initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-xl font-semibold text-brand-primary mb-2">2. Unlock Tiers</h3>
                            <p className="text-gray-600">As your points grow, you'll move up our tiers: from 'Seedling' to 'Blossom' and finally 'Radiant', unlocking better perks along the way.</p>
                        </motion.div>
                         <motion.div 
                            className="bg-white p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-1"
                             initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="text-xl font-semibold text-brand-primary mb-2">3. Redeem Rewards</h3>
                            <p className="text-gray-600">Use your points to get discounts on your favorite products. Every 1000 points = ₦1000 off your order.</p>
                        </motion.div>
                    </div>

                    <div className="text-center">
                        <Button to="/register" variant="primary">Join for Free & Grab 200 Points</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoyaltyPage;