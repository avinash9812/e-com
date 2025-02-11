import React, { useState } from 'react';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('https://api.your-ecommerce-site.com/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setMessage('Subscribed successfully!');
                setEmail('');
            } else {
                setMessage('Failed to subscribe. Please try again.');
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                setMessage(`An error occurred: ${error.message}. Please try again.`);
            } else {
                setMessage('An unknown error occurred. Please try again.');
            }
        }
    };

    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-4">Company</h3>
                    <ul>
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <li><a href="/team" className="hover:underline">Our Team</a></li>
                        <li><a href="/careers" className="hover:underline">Careers</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Support</h3>
                    <ul>
                        <li><a href="/help" className="hover:underline">Help Center</a></li>
                        <li><a href="/faq" className="hover:underline">FAQ</a></li>
                        <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
                        <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Services</h3>
                    <ul>
                        <li><a href="/shipping" className="hover:underline">Shipping</a></li>
                        <li><a href="/returns" className="hover:underline">Returns</a></li>
                        <li><a href="/order-tracking" className="hover:underline">Order Tracking</a></li>
                        <li><a href="/warranty" className="hover:underline">Warranty</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                    <ul className="flex space-x-4">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto mt-10 text-center">
                <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row items-center justify-center w-full max-w-md mx-auto">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="p-2 rounded-l-md text-black flex-grow"
                        required
                    />
                    <button type="submit" className="bg-blue-500 p-2 rounded-r-md text-white hover:bg-blue-700 flex-shrink-0">
                        Subscribe
                    </button>
                </form>
                {message && <p className="mt-4">{message}</p>}
                <p className="mt-4">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

