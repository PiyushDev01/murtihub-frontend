import React from 'react';
import Button from '../components/UI/Button';
import { useTheme } from '../contexts/ThemeContext';

const Features = () => {
  const { isDarkMode } = useTheme();
  
  const features = [
    {
      icon: '🎯',
      title: 'Plug & Play Deployment',
      description: 'Deploy AI bots instantly with zero configuration. Our platform handles all the infrastructure complexity.'
    },
    {
      icon: '⚡',
      title: 'Auto-Scaling',
      description: 'Automatically scale your bots based on demand. Built on Google Cloud Platform for enterprise reliability.'
    },
    {
      icon: '🤖',
      title: 'Intelligent Agents',
      description: 'Advanced AI agents powered by state-of-the-art language models and machine learning algorithms.'
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Monitor performance, track usage, and optimize your bots with comprehensive analytics dashboard.'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-grade security with SSL encryption, data privacy compliance, and secure API endpoints.'
    },
    {
      icon: '🌐',
      title: 'Global Distribution',
      description: 'Deploy your bots globally with our CDN network for low-latency responses worldwide.'
    }
  ];

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
          <h1 className="text-5xl font-bold text-white mb-6">Platform Features</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Discover the powerful capabilities that make MurtiHub the leading AI Agentic Bots Platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-400 bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-slate-300 border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-purple-200">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-purple-200 mb-6">
              Join thousands of businesses already using our AI platform to automate their operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">Start Free Trial</Button>
              <Button variant="secondary" size="lg">Schedule Demo</Button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Features;