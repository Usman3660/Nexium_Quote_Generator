import React, { useState } from 'react';

const QuoteForm = ({ onSubmit, onClear }) => {
  const [topic, setTopic] = useState('');

  const handleSubmit = () => {
    onSubmit(topic);
    setTopic('');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter a topic (e.g., success, happiness)"
        className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-80 bg-white/80 backdrop-blur-sm"
      />
      <button
        onClick={handleSubmit}
        className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 hover:scale-105 transition transform shadow-sm"
      >
        Get Quotes
      </button>
      <button
        onClick={onClear}
        className="bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 hover:scale-105 transition transform shadow-sm"
      >
        Clear Quotes
      </button>
    </div>
  );
};

export default QuoteForm;