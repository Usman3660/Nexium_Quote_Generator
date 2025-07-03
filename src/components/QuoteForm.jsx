import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const QuoteForm = ({ onSubmit, onClear }) => {
  const [topic, setTopic] = useState('');

  const handleSubmit = () => {
    onSubmit(topic);
    setTopic('');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <Input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter a topic (e.g., success, happiness)"
        className="w-full sm:w-80 bg-white/80 backdrop-blur-sm"
      />
      <Button
        onClick={handleSubmit}
        className="bg-purple-600 hover:bg-purple-700 hover:scale-105 transition transform"
      >
        Get Quotes
      </Button>
      <Button
        variant="secondary"
        onClick={onClear}
        className="bg-gray-600 hover:bg-gray-700 hover:scale-105 transition transform"
      >
        Clear Quotes
      </Button>
    </div>
  );
};

export default QuoteForm;