const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    service: 'MurtiHub Frontend',
    timestamp: new Date().toISOString()
  });
});

// Serve the main HTML file for all routes (SPA behavior)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🎨 MurtiHub Frontend running on port ${PORT}`);
  console.log(`🌐 Serving beautiful HTML design`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
});
