import React, { useState } from 'react';
import QuoteForm from './components/QuoteForm';
import QuoteDisplay from './components/QuoteDisplay';
import { quotes } from './data/quotes.js';
import './App.css';

function App() {
  const [quotesState, setQuotesState] = useState([]);

  const handleSubmit = (topic) => {
    const filteredQuotes = quotes
      .filter(quote => quote.tags.includes(topic.toLowerCase()))
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    setQuotesState(filteredQuotes);
  };

  const handleClear = () => {
    setQuotesState([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <header className="w-full text-center py-2">
        <h1>Motivational Quote Generator</h1>
      </header>
      <main className="flex-1 w-full max-w-2xl p-6">
        <QuoteForm onSubmit={handleSubmit} onClear={handleClear} />
        <QuoteDisplay quotes={quotesState} />
      </main>
      <footer className="w-full text-center py-2">
        <p>© 2025 Nexium. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;