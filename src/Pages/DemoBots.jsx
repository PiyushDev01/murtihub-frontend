import React from 'react';
import Button from '../components/UI/Button';
import CountUp from '../components/UI/CountUp';
import { useTheme } from '../contexts/ThemeContext';

const DemoBots = () => {
  const { isDarkMode } = useTheme();
  
  const demoBots = [
    {
      name: 'Data Classification System',
      description: 'Intelligent data classification bot that automatically categorizes and classifies your business data using advanced machine learning algorithms and business rules.',
      status: 'Available',
      features: ['Automated data attribute classification', 'Multi-method classification approach', 'Confidence scoring and validation', 'Interactive review workflows', 'Real-time analytics and reporting', 'Excel/CSV file processing'],
      demoUrl: 'https://gen-ai-production-03ba.up.railway.app/demos/classification.html'
    },
    {
      name: 'Perplexity AI Assistant',
      description: 'Advanced conversational AI bot powered by Perplexity\'s real-time web search capabilities, providing up-to-date information and intelligent responses.',
      status: 'Available', 
      features: ['Real-time web search integration', 'Source citations and references', 'Multiple AI model options', 'Customizable response parameters', 'Related question suggestions', 'Chat history and analytics'],
      demoUrl: 'https://gen-ai-production-03ba.up.railway.app/demos/perplexity.html'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
        return 'bg-green-500 animate-pulse';
      case 'Beta':
        return 'bg-yellow-500';
      case 'Coming Soon':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

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
          <h1 className="text-5xl font-bold text-white mb-6">Interactive Demo Bots</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
           Experience the power of our AI platform with these fully functional demo applications
          </p>
        </div>

        {/* Demo Bots Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {demoBots.map((bot, index) => (
            <div 
              key={index}
              className="bg-slate-400 bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{bot.name}</h3>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(bot.status)} mr-2`}></div>
                  <span className="text-sm text-purple-200">{bot.status}</span>
                </div>
              </div>
              
              <p className="text-purple-200 mb-6">{bot.description}</p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {bot.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-purple-200">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                {bot.demoUrl ? (
                  <>
                    <Button 
                      size="sm"
                      onClick={() => window.open(bot.demoUrl, '_blank')}
                      className={isDarkMode ? 'bg-purple-600 hover:bg-purple-700' : ' '}
                    >
                      Try Demo
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="sm"
                    >
                      View Code
                    </Button>
                  </>
                ) : (
                  <Button 
                    size="sm" 
                    disabled
                  >
                    Coming Soon
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Platform Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <CountUp 
                end={2} 
                duration={2000}
                className="text-3xl font-bold text-yellow-300"
              />
              <div className="text-purple-200">Active Demo Bots</div>
            </div>
            <div>
              
              <div className="flex items-center justify-center"><CountUp 
                end="24/7" 
                duration={2000}
                className="text-3xl font-bold text-yellow-300"
              /> <span  className="text-3xl font-bold text-yellow-300">/7hr</span></div>
              <div className="text-purple-200">Availability</div>
            </div>
            <div>
              <CountUp 
                end={1} 
                duration={2000}
                className="text-3xl font-bold text-yellow-300"
              />
              <div className="text-purple-200">Beta Bot</div>
            </div>
            <div>
              <CountUp 
                end={99} 
                suffix="%" 
                duration={2000}
                className="text-3xl font-bold text-yellow-300"
              />
              <div className="text-purple-200">Uptime</div>
            </div>
          </div>
        </div>

        {/* CTA */}
       
      </div>
    </div>
  );
};

export default DemoBots;