import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const QuoteForm = ({ onSubmit, onClear }) => {
  const [topic, setTopic] = useState('');

  const handleInputChange = (e) => {
    setTopic(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic.trim()) {
      onSubmit(topic.trim());
      setTopic('');
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    onClear();
    setTopic('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-x-2">
        <Input
          type="text"
          value={topic}
          onChange={handleInputChange}
          placeholder="Enter a topic (e.g., success, happiness)"
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          className="mt-2 px-3 py-1 text-black rounded"
          style={{ backgroundColor: '#a78bfa' }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#9579e5')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#a78bfa')}
        >
          Get Quotes
        </Button>
        <Button
          onClick={handleClear}
          className="mt-2 px-3 py-1 text-black rounded"
          style={{ backgroundColor: '#a78bfa' }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#9579e5')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#a78bfa')}
        >
          Clear Quotes
        </Button>
      </div>
    </form>
  );
};

export default QuoteForm;