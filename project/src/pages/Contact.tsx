import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: 'repair'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      serviceType: 'repair'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Contact Us - Get Your Laptop Repaired Today | Laptop Workshop</title>
        <meta name="description" content="Contact Laptop Workshop for professional laptop repair services in Sylhet, Bangladesh. Call +8801713413131 or email abusaeeid@gmail.com for free diagnostic." />
        <meta name="keywords" content="laptop repair contact Sylhet, computer repair phone number Bangladesh, laptop service center contact" />
        <meta property="og:title" content="Contact Laptop Workshop - Professional Repair Services" />
        <meta property="og:description" content="Get in touch for professional laptop repair services and technical support." />
        <meta property="og:url" content="https://www.laptopws.com/contact" />
        <link rel="canonical" href="https://www.laptopws.com/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Ready to get your laptop fixed? Have questions about our services? We're here to help!
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone Number</h3>
                  <p className="text-gray-600">+8801713413131</p>
                  <p className="text-sm text-gray-500">Call us for immediate assistance</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Address</h3>
                  <p className="text-gray-600">abusaeeid@gmail.com</p>
                  <p className="text-sm text-gray-500">Send us your technical questions</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Workshop Location</h3>
                  <p className="text-gray-600">Laptop Workshop Service Center</p>
                  <p className="text-gray-600">Sylhet, Bangladesh</p>
                  <p className="text-sm text-gray-500">Visit us for in-person consultations</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>Monday - Thursday: 10:30 AM - 9:00 PM</p>
                    <p>Saturday - Sunday: 10:30 AM - 9:00 PM</p>
                    <p>Friday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Facebook className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Facebook Page</h3>
                <a 
                  href="https://www.facebook.com/laptopworkshopbd.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  @laptopworkshopbd.tech
                </a>
                <p className="text-sm text-gray-500">Follow us for updates and tips</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-900 mb-4">Find Us Here</h3>
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Google Maps Integration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            {isSubmitted && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <p className="text-green-700">Thank you! Your message has been sent successfully.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Type */}
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="repair">Laptop Repair</option>
                  <option value="download">Download Support</option>
                  <option value="consultation">Technical Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please provide details about your laptop issue or inquiry..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                For urgent repair needs, please call us directly at{' '}
                <span className="font-semibold text-blue-600">+8801713413131</span>
              </p>
            </div>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl text-center">
            <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Call Us Now</h3>
            <p className="text-gray-600 mb-3">Get immediate phone support</p>
            <a href="tel:+8801713413131" className="text-blue-600 font-medium hover:underline">
              +8801713413131
            </a>
          </div>

          <div className="bg-green-50 p-6 rounded-xl text-center">
            <Mail className="h-8 w-8 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-600 mb-3">Send us detailed inquiries</p>
            <a href="mailto:abusaeeid@gmail.com" className="text-green-600 font-medium hover:underline">
              abusaeeid@gmail.com
            </a>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl text-center">
            <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Visit Our Shop</h3>
            <p className="text-gray-600 mb-3">In-person consultations available</p>
            <span className="text-purple-600 font-medium">Sylhet, Bangladesh</span>
          </div>
        </div>

        {/* Social Media CTA */}
        <div className="mt-12 bg-blue-50 p-6 rounded-xl text-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Stay Connected</h3>
          <p className="text-blue-700 mb-4">
            Follow us on Facebook for the latest updates, repair tips, and special offers!
          </p>
          <a
            href="https://www.facebook.com/laptopworkshopbd.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            <Facebook className="h-5 w-5" />
            <span>Follow on Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;