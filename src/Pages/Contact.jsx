import React, { useState } from 'react';
import Button from '../components/UI/Button';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { isDarkMode } = useTheme();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div 
        className="min-h-screen py-28 flex items-center justify-center"
        style={{
          background: isDarkMode 
            ? '#0D0C1D' 
            : 'linear-gradient(135deg, #9333ea 0%, #7c3aed 50%, #2563eb 100%)'
        }}
      >
        <div className="max-w-7xl  mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-12 border border-white border-opacity-20">
              <div className="text-6xl mb-6">✅</div>
              <h1 className="text-4xl font-bold text-white mb-4">Thank You!</h1>
              <p className="text-xl text-purple-200 mb-8">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
              <Button onClick={() => setSubmitted(false)}>
                Send Another Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen py-28"
      style={{
        background: isDarkMode 
          ? '#0D0C1D' 
          : 'linear-gradient(135deg, #9333ea 0%, #7c3aed 50%, #2563eb 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Have questions about our AI platform? We're here to help you get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                >
                  <option value="" className="text-gray-800">Select a subject</option>
                  <option value="sales" className="text-gray-800">Sales Inquiry</option>
                  <option value="support" className="text-gray-800">Technical Support</option>
                  <option value="partnership" className="text-gray-800">Partnership</option>
                  <option value="other" className="text-gray-800">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-vertical"
                  placeholder="Tell us about your project or question..."
                ></textarea>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                size="lg"
                className="w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="text-2xl mr-4">📧</div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-purple-200">support@murtihub.co.in</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4">📞</div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-purple-200">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4">🏢</div>
                  <div>
                    <h3 className="text-white font-semibold">Office</h3>
                    <p className="text-purple-200">
                      123 AI Street<br/>
                      Tech City, TC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="text-2xl mr-4">⏰</div>
                  <div>
                    <h3 className="text-white font-semibold">Business Hours</h3>
                    <p className="text-purple-200">
                      Monday - Friday: 9AM - 6PM EST<br/>
                      Saturday: 10AM - 4PM EST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
              <h2 className="text-2xl font-bold text-white mb-6">Quick Links</h2>
              
              <div className="space-y-4">
                <a href="/help" className="block text-purple-200 hover:text-white transition-colors duration-200">
                  📚 Help Center & Documentation
                </a>
                <a href="/status" className="block text-purple-200 hover:text-white transition-colors duration-200">
                  🔄 System Status Page
                </a>
                <a href="/api" className="block text-purple-200 hover:text-white transition-colors duration-200">
                  🔗 API Documentation
                </a>
                <a href="/community" className="block text-purple-200 hover:text-white transition-colors duration-200">
                  💬 Community Forum
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;