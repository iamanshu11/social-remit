/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.html',
    './src/sign-up.html',
    './src/login.html',
    './src/verify-email.html',
    './src/country-residence.html',
    './src/profile-setup.html',
    './src/contact-details.html',
    './src/factor-auth.html',
    './src/factor-auth-code.html',
    './src/enter-pin.html',
    './src/dashboard.html',
    './src/your-recipient.html',
    './src/your-recipient-add.html',
    './src/your-recipient-delivery.html',
    './src/your-recipient-delivery-add.html',
    './src/your-recipient-delivery-added-recipient.html',
    './src/your-recipient-delivery-added-recipient-profile.html',
    './src/your-trans.html',
    './src/send-money.html',
    './src/send-money-add.html',
  ],
  theme: {
    extend: {
      spacing: {
        '120': '120px', // Add custom padding-top 120px
      },
      colors: {
        'blue-primary': '#29DDE0',
        'purple-secondary': '#8B1EC4',
      },
      backgroundImage: {
        'custom-image': "url('/images/hero-bg.png')",
      },
      boxShadow: {
        'left-right-gray': '-4px 0 10px rgba(128, 128, 128, 0.3), 4px 0 10px rgba(128, 128, 128, 0.3)',
      },
    },
  },
  plugins: [],
}

