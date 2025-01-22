import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

function ChatBot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm your disaster management assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  const getBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    if (input.includes('flood')) {
      return "In case of flooding, move to higher ground immediately. Keep emergency supplies ready and follow local authorities' instructions.";
    } else if (input.includes('earthquake')) {
      return "During an earthquake: Drop, Cover, and Hold On. Stay away from windows and exterior walls.";
    } else if (input.includes('emergency kit')) {
      return "An emergency kit should include: Water, non-perishable food, flashlight, first aid supplies, batteries, and important documents.";
    }
    return "I'm here to help with disaster-related questions. Could you please be more specific about what information you need?";
  };

  return (
    <div className="fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl">
      <div className="flex justify-between items-center p-4 border-b">
        <h3 className="font-semibold">Disaster Management Assistant</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="h-96 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${message.isBot ? 'text-left' : 'text-right'}`}
          >
            <div
              className={`inline-block p-3 rounded-lg ${
                message.isBot
                  ? 'bg-gray-100 text-gray-800'
                  : 'bg-blue-600 text-white'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;