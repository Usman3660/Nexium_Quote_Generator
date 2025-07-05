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
      .sort(() => Math.random() - 0.5);
    let resultQuotes = filteredQuotes.slice(0, 3);
    // If fewer than 3 quotes are found, fill with random quotes from the full list
    if (resultQuotes.length < 3) {
      const remainingCount = 3 - resultQuotes.length;
      const availableQuotes = quotes.filter(q => !resultQuotes.includes(q));
      const additionalQuotes = availableQuotes.sort(() => Math.random() - 0.5).slice(0, remainingCount);
      resultQuotes = [...resultQuotes, ...additionalQuotes].slice(0, 3);
    }
    setQuotesState(resultQuotes);
  };

  const handleClear = () => {
    setQuotesState([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      <header className="w-full text-center py-4 mb-6">
        <h1 className="text-3xl font-bold mb-4 text-white">Motivational Quote Generator</h1>
      </header>
      <main className="w-full max-w-2xl flex-grow">
        <QuoteForm onSubmit={handleSubmit} onClear={handleClear} />
        <QuoteDisplay quotes={quotesState} />
      </main>
      <footer className="w-full text-center py-4 text-white">
        <p>© 2025 Nexium. All rights reserved. Devloped by Usman Anwar</p>
      </footer>
    </div>
  );
}

export default App;