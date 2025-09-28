import React from 'react';
import Button from '../components/UI/Button';
import { useTheme } from '../contexts/ThemeContext';

const Pricing = () => {
  const { isDarkMode } = useTheme();
  
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: 'per month',
      description: 'Perfect for small businesses getting started with AI automation',
      features: [
        'Up to 2 AI bots',
        '10,000 API calls/month',
        'Basic analytics',
        'Email support',
        'Standard templates',
        'Community access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: 'per month',
      description: 'Ideal for growing businesses that need more power and flexibility',
      features: [
        'Up to 10 AI bots',
        '100,000 API calls/month',
        'Advanced analytics',
        'Priority support',
        'Custom templates',
        'API access',
        'Webhook integrations',
        'A/B testing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large organizations with specific requirements and high volume needs',
      features: [
        'Unlimited AI bots',
        'Unlimited API calls',
        'Custom analytics',
        'Dedicated support',
        'White-label solution',
        'On-premise deployment',
        'SLA guarantee',
        'Custom integrations'
      ],
      popular: false
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
          <h1 className="text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 ${
                plan.popular ? 'ring-2 ring-yellow-400 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-yellow-300">{plan.price}</span>
                  {plan.period !== 'contact us' && (
                    <span className="text-purple-200 ml-2">/{plan.period.split(' ')[1]}</span>
                  )}
                </div>
                <p className="text-purple-200 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-purple-200">
                    <span className="text-green-400 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? 'primary' : 'secondary'} 
                className="w-full"
                size="lg"
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 mb-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Can I change plans anytime?</h3>
              <p className="text-purple-200">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Is there a free trial?</h3>
              <p className="text-purple-200">We offer a 14-day free trial for all plans with full access to features.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-purple-200">We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer refunds?</h3>
              <p className="text-purple-200">Yes, we offer a 30-day money-back guarantee for all paid plans.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your AI Journey?</h2>
            <p className="text-purple-200 mb-6">
              Join thousands of businesses already using MurtiHub to automate their operations.
            </p>
            <Button size="lg">Start Your Free Trial</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;