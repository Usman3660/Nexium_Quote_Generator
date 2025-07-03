Motivational Quote Generator
A React-based web app that generates motivational quotes based on a user-entered topic. Built with Tailwind CSS for styling and deployable to Vercel.
Features

Enter a topic (e.g., "success", "happiness") to see 3 random motivational quotes.
Click-to-copy quotes with toast feedback.
Animated gradient background and smooth transitions.
Responsive design with a modern navbar.

Setup

Clone the repository:git clone https://github.com/Usman3660/Nexium_Quote_Generator.git
cd quote-generator


Install dependencies:npm install


Run locally:npm start

Open http://localhost:3000 in your browser.

Deployment to Vercel

Push to GitHub:git add .
git commit -m "Initial commit"
git push origin main


Deploy:
Log in to Vercel (vercel.com).
Import your GitHub repository.
Vercel will detect the React app and deploy it, providing a URL (e.g., https://quote-generator.vercel.app).



Technologies

React 18
Tailwind CSS
JavaScript (ES6+)

Directory Structure
assignment-1/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── QuoteForm.jsx
│   │   └── QuoteDisplay.jsx
│   ├── data/
│   │   └── quotes.js
│   ├── App.jsx
│   ├── index.js
│   └── App.css
├── package.json
└── README.md
