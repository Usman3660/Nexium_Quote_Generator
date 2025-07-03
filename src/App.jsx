import React, { useState } from 'react';
import QuoteForm from './components/QuoteForm';
import QuoteDisplay from './components/QuoteDisplay';
import quotes from './data/quotes';

const getRandomQuotes = (quoteArray, num = 3) => {
  const shuffled = [...quoteArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const App = () => {
  const [displayQuotes, setDisplayQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (topic) => {
    setIsLoading(true);
    setTimeout(() => {
      const normalizedTopic = topic.toLowerCase().trim();
      let selectedQuotes;
      if (quotes[normalizedTopic]) {
        selectedQuotes = getRandomQuotes(quotes[normalizedTopic]);
      } else {
        const allQuotes = Object.values(quotes).flat();
        selectedQuotes = getRandomQuotes(allQuotes);
      }
      setDisplayQuotes(selectedQuotes);
      setIsLoading(false);
    }, 500);
  };

  const handleClear = () => {
    setDisplayQuotes([]);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-pulse flex flex-col items-center p-6 pt-20">
      <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white p-4 shadow-lg z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Quote Generator</h1>
          <div className="flex gap-4">
            <a href="https://example.com" className="relative text-white hover:text-purple-300 transition after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-300 after:transition-all after:duration-300 hover:after:w-full">
              Quote Source
            </a>
            <a href="https://example.com/about" className="relative text-white hover:text-purple-300 transition after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-300 after:transition-all after:duration-300 hover:after:w-full">
              About
            </a>
          </div>
        </div>
      </nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-8 drop-shadow-md">
        Motivational Quote Generator
      </h1>
      <QuoteForm onSubmit={handleSubmit} onClear={handleClear} />
      {isLoading ? (
        <div className="mt-8 flex justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-purple-500"></div>
        </div>
      ) : (
        <QuoteDisplay quotes={displayQuotes} />
      )}
    </div>
  );
};

export default App;