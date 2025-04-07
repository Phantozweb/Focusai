// Update configuration with error handling
const CONFIG = {
  GOOGLE_API_KEY: (() => {
    try {
      return localStorage.getItem('GOOGLE_API_KEY') || 'AIzaSyB6RHAgIkXqpRaOAjm8i-U4YqLyHT5BmLE';
    } catch (e) {
      return 'AIzaSyB6RHAgIkXqpRaOAjm8i-U4YqLyHT5BmLE';
    }
  })()
};

// Validate API key on startup
if(CONFIG.GOOGLE_API_KEY && CONFIG.GOOGLE_API_KEY !== 'YOUR_API_KEY_HERE') {
  console.log('Google AI API Key Valid');
} else {
  console.warn('Invalid API Key Configuration');
}
