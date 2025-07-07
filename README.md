Nexium Quote Generator
Welcome to the Nexium Quote Generator, a React-based web application that delivers motivational quotes tailored to user-selected topics. This project showcases modern web development practices, including state management, CSS transitions, and seamless deployment.
Features

Generate up to three quotes based on topics like "success", "happiness", "sad", "hope", or "motivation".
Sequential fade-in and slide-up transitions for an engaging quote display.
"Copy Quote" button to copy individual quotes to the clipboard.
"Get Quotes" and "Clear Quotes" buttons with a consistent purple theme (#a78bfa).
Responsive, centered layout with a header, main content, and footer.

Technologies Used

Framework: Create React App (CRA) with react-app-rewired for customizations.
Styling: ShadCN and Tailwind CSS for responsive design.
Deployment: Vercel for hosting.
Dependencies: React, React DOM, React Scripts, Tailwind CSS.

Project Structure
Nexium_Quote_Generator/
├── public/              # Entry HTML and favicon
│   ├── index.html
│   └── favicon.ico
├── src/                 # Source code
│   ├── index.js         # App entry point
│   ├── App.jsx          # Main component
│   ├── components/      # Reusable components
│   │   ├── QuoteForm.jsx
│   │   ├── QuoteDisplay.jsx
│   │   └── ui/          # Styled UI elements
│   │       ├── input.jsx
│   │       └── button.jsx
│   ├── data/            # Quote data
│   │   └── quotes.js    # Over 60 quotes
│   ├── App.css          # Global styles with transitions
│   ├── lib/             # Utility functions
│   │   └── utils.js
│   └── config-overrides.js # Webpack customization
├── package.json         # Project metadata and scripts
├── .gitignore           # Excluded files
├── tailwind.config.js   # Tailwind configuration
├── components.json      # Component imports
├── jsconfig.json        # JavaScript configuration
└── README.md            # This file

Installation

Clone the Repository:
git clone https://github.com/Usman3660/Nexium_Quote_Generator.git
cd Nexium_Quote_Generator


Install Dependencies:
npm install


Start the Development Server:
npm start


Open http://localhost:3000 to view the app.
Live Website at https://nexium-quote-generator-uagk.vercel.app


Build for Production:
npm run build


Generates a build folder for deployment.



Deployment

Platform: Vercel
Steps:
Push changes to the main branch on GitHub.
Link the repository to Vercel and deploy.
Access the live URL provided by Vercel.


Settings:
Framework Preset: "Create React App"
Build Command: npm run build
Output Directory: build



Usage

Enter a topic (e.g., "success", "sad") in the input field.
Click "Get Quotes" to display three quotes with animated transitions.
Click "Copy Quote" on any quote to copy it to your clipboard.
Click "Clear Quotes" to reset the display.

Contributing
Feel free to fork this repository and submit pull requests. Suggestions for new quotes, features, or improvements are welcome!
License
This project is open-source under the MIT License.
Acknowledgments

Inspired by motivational quote generators.
Built with guidance from xAI's Grok.
