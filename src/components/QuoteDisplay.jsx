import React, { useState } from 'react';

const QuoteDisplay = ({ quotes }) => {
  const gradients = [
    "from-blue-100 to-blue-300",
    "from-green-100 to-green-300",
    "from-pink-100 to-pink-300",
  ];
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (quotes.length === 0) {
    return (
      <p className="text-gray-700 mt-6 text-lg">
        Enter a topic and click 'Get Quotes' to see motivational quotes.
      </p>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {quotes.map((quote, index) => (
        <div
          key={index}
          className={`p-5 bg-gradient-to-r ${gradients[index % gradients.length]} shadow-lg rounded-lg quote-card slide-in cursor-pointer relative`}
          onClick={() => handleCopy(quote.text, index)}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <p className="text-lg italic text-gray-800">"{quote.text}"</p>
          <p className="text-right text-gray-600 mt-3 font-semibold">- {quote.author}</p>
          {copiedIndex === index && (
            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm toast">
              Copied!
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuoteDisplay;