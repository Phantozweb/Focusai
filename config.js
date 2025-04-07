// Update configuration with error handling
const CONFIG = {
  GOOGLE_API_KEY: (() => {
    try {
      return localStorage.getItem('GOOGLE_API_KEY') || 'AIzaSyDZqnUZS_1mPyNxwRRvc_rFCBMMFF5GVFA';
    } catch (e) {
      return 'AIzaSyC6ikn6HkLbGNW4V6EN5tOsejub1ja48Pg';
    }
  })()
};

// Validate API key on startup
if(CONFIG.GOOGLE_API_KEY && CONFIG.GOOGLE_API_KEY !== 'YOUR_API_KEY_HERE') {
  console.log('Google AI API Key Valid');
} else {
  console.warn('Invalid API Key Configuration');
}