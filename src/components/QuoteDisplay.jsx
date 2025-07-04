import React from 'react';

export default function QuoteDisplay({ quotes }) {
  return (
    <div className="space-y-4">
      {quotes.length > 0 ? (
        quotes.map((quote, index) => (
          <div key={index} className="quote-card pop-up">
            <p className="text-lg italic">"{quote.text}"</p>
            <p className="text-right font-semibold">- {quote.author}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No quotes available. Try a different topic!</p>
      )}
    </div>
  );
}