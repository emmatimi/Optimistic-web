
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

// Mock order data
const mockOrders = [
    { id: 'ORD-12345', date: '2023-10-26', total: 15290, status: 'Delivered', items: ['Castor Oil', 'Coconut Oil'] },
    { id: 'ORD-12346', date: '2023-11-15', total: 5000, status: 'Processing', items: ['Radiant Glow Face Shea Butter'] },
];

const AccountPage: React.FC = () => {
    const { user, logout } = useAuth();

    return (
        <div className="bg-brand-light min-h-screen py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.h1 
                        className="text-4xl font-serif font-bold text-brand-dark"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        My Account
                    </motion.h1>
                    <motion.p 
                        className="text-gray-600 mt-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Welcome back, {user?.name}!
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* User Details */}
                    <motion.div 
                        className="md:col-span-1 bg-white p-6 rounded-lg shadow-md h-fit"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-xl font-semibold text-brand-dark mb-4">Account Details</h2>
                        <div className="space-y-3">
                            <div>
                                <p className="text-sm text-gray-500">Name</p>
                                <p className="font-medium">{user?.name}</p>
                            </div>
                             <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium">{user?.email}</p>
                            </div>
                        </div>
                        <Button onClick={logout} variant="outline" className="w-full mt-6">Log Out</Button>
                    </motion.div>

                    {/* Order History */}
                    <motion.div 
                        className="md:col-span-2 bg-white p-6 rounded-lg shadow-md"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-xl font-semibold text-brand-dark mb-4">Order History</h2>
                        <div className="space-y-4">
                            {mockOrders.length > 0 ? mockOrders.map(order => (
                                <div key={order.id} className="border p-4 rounded-md">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-bold text-brand-primary">{order.id}</p>
                                            <p className="text-sm text-gray-500">Date: {order.date}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">{order.total.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</p>
                                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                {order.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-2 text-sm text-gray-600">
                                        <p>Items: {order.items.join(', ')}</p>
                                    </div>
                                </div>
                            )) : (
                                <p className="text-gray-600">You have not placed any orders yet.</p>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
