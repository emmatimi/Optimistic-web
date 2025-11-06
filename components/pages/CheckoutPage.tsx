
import React, { useEffect, useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    fullWidth?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, fullWidth = false, ...props }) => (
    <div className={fullWidth ? 'col-span-2' : ''}>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
        <input
            id={id}
            name={id}
            {...props}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-brand-primary focus:border-brand-primary disabled:bg-gray-100"
        />
    </div>
);


const CheckoutPage: React.FC = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');

    useEffect(() => {
        if(user) {
            setEmail(user.email);
        }
    }, [user]);

    const handleCheckout = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your order! (This is a mock checkout)');
        clearCart();
        navigate('/');
    };

    if (cartItems.length === 0) {
        // This case is handled by the protected route, but as a fallback:
        return (
             <div className="text-center py-20">
                <h2 className="text-xl">Your cart is empty.</h2>
                <Button to="/shop" className="mt-4">Go to Shop</Button>
            </div>
        );
    }
    
    return (
        <div className="bg-brand-light min-h-screen py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-serif font-bold text-brand-dark mb-8 text-center">Checkout</h1>
                <form onSubmit={handleCheckout}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Shipping and Payment Forms */}
                        <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
                            <div className="grid grid-cols-2 gap-6">
                                <InputField label="First Name" id="firstName" type="text" required />
                                <InputField label="Last Name" id="lastName" type="text" required />
                                <InputField 
                                    label="Email Address" 
                                    id="email" 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={!!user}
                                    required 
                                    fullWidth 
                                />
                                <InputField label="Address" id="address" type="text" required fullWidth />
                                <InputField label="City" id="city" type="text" required />
                                <InputField label="State / Province" id="state" type="text" required />
                                <InputField label="Zip / Postal Code" id="zip" type="text" required />
                                <InputField label="Country" id="country" type="text" required />
                            </div>

                            <h2 className="text-xl font-semibold mt-10 mb-6">Payment Details</h2>
                            <div className="grid grid-cols-2 gap-6">
                                <InputField label="Card Number" id="cardNumber" type="text" placeholder="**** **** **** ****" required fullWidth />
                                <InputField label="Name on Card" id="cardName" type="text" required fullWidth />
                                <InputField label="Expiration Date (MM/YY)" id="expiry" type="text" placeholder="MM/YY" required />
                                <InputField label="CVC" id="cvc" type="text" placeholder="123" required />
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="md:col-span-1">
                            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                                <h2 className="text-xl font-semibold mb-4 border-b pb-4">Your Order</h2>
                                <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
                                    {cartItems.map(item => (
                                        <div key={item.id} className="flex justify-between items-center text-sm">
                                            <div className="flex items-center">
                                                <img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover rounded-md mr-3" />
                                                <div>
                                                    <p className="font-semibold">{item.name}</p>
                                                    <p className="text-gray-500">Qty: {item.quantity}</p>
                                                </div>
                                            </div>
                                            <p>{(item.price * item.quantity).toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-2 border-t pt-4">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>{cartTotal.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Shipping</span>
                                        <span className="text-green-600">FREE</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-lg border-t pt-4 mt-2">
                                        <span>Total</span>
                                        <span>{cartTotal.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</span>
                                    </div>
                                </div>
                                <Button type="submit" variant="primary" className="w-full mt-6">
                                    Place Order
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;
