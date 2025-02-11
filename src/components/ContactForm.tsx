import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!name) newErrors.name = 'Name is required';
        if (!email) newErrors.email = 'Email is required';
        if (!phone) newErrors.phone = 'Phone number is required';
        if (!message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSubmitting(true);
            setSuccessMessage('');
            setErrorMessage('');
            emailjs.sendForm('service_uxevhvr', 'template_1jeimno', event.target as HTMLFormElement, '4qAOQUytvAZnafxTT_ZiZ')
                .then((result) => {
                    console.log(result.text);
                    setSuccessMessage('Form submitted successfully!');
                    setName('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                }, (error) => {
                    console.log(error.text);
                    setErrorMessage('Failed to submit the form. Please try again.');
                })
                .finally(() => setIsSubmitting(false));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg transform transition-all duration-500 hover:scale-105">
            <h2 className="text-4xl font-extrabold mb-8 text-center text-white drop-shadow-lg">Contact Us</h2>
            {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
            <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                Name
            </label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
            />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
            </div>
            <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Email
            </label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>
            <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">
                Phone
            </label>
            <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
            />
            {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
            </div>
            <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                Message
            </label>
            <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
            />
            {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
            </div>
            <button
            type="submit"
            className={`bg-white text-blue-500 font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
            >
            {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
}

export default ContactForm;
