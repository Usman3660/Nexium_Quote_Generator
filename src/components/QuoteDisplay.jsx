import React, { useEffect, useRef } from 'react';

const QuoteDisplay = ({ quotes }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Quote copied to clipboard!');
    }).catch(err => {
      alert('Failed to copy quote: ' + err);
    });
  };

  const quoteRefs = useRef([]);

  useEffect(() => {
    // Reset all refs to remove active class before new animation
    quoteRefs.current.forEach(ref => {
      if (ref) ref.classList.remove('active');
    });

    // Apply active class with delay
    const timeoutIds = quoteRefs.current.map((ref, index) => {
      if (ref) {
        return setTimeout(() => {
          ref.classList.add('active');
        }, index * 500);
      }
      return null;
    });

    // Cleanup timeouts on unmount or quotes change
    return () => timeoutIds.forEach(id => id && clearTimeout(id));
  }, [quotes]);

  return (
    <div>
      {quotes.map((quote, index) => (
        <div
          key={index}
          ref={el => (quoteRefs.current[index] = el)}
          className="mb-2 quote-transition"
        >
          <p>{quote.text}</p>
          <p className="text-right italic">- {quote.author}</p>
          <button
            onClick={() => copyToClipboard(quote.text)}
            className="mt-2 px-3 py-1 text-black rounded"
            style={{ backgroundColor: '#a78bfa' }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#9579e5')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#a78bfa')}
          >
            Copy Quote
          </button>
        </div>
      ))}
      
      {quotes.length > quoteRefs.current.length && (quoteRefs.current = quotes.map(() => null))}
    </div>
  );
};

export default QuoteDisplay;