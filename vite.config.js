// vite.config.js
export default {
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000, // Use Render's port or fallback to 3000
  },
};
