import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function QuoteForm({ onSubmit, onClear }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const topic = e.target.topic.value.trim();
    if (topic) onSubmit(topic);
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          name="topic"
          placeholder="Enter a topic (e.g., success )"
          className="w-full"
        />
      </div>
      <div className="flex gap-2">
        <Button type="submit">Get Quotes</Button>
        <Button type="button" variant="secondary" onClick={onClear}>
          Clear Quotes
        </Button>
      </div>
    </form>
  );
}