import React, { useState, useRef, useEffect } from 'react';
import '../styles/Messages.css';

interface Message {
  text: string;
  timestamp: string;
}

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (input.trim() === '') return;

    const now = new Date();
    const newMessage: Message = {
      text: input,
      timestamp: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="messages-container">
      <h1>Messages</h1>

      <div className="chat-box">
        {messages.length === 0 ? (
          <p className="empty">No messages yet.</p>
        ) : (
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div className="message" key={idx}>
                <img src="https://via.placeholder.com/40" alt="User" className="avatar" />
                <div className="message-content">
                  <span className="message-text">{msg.text}</span>
                  <span className="timestamp">{msg.timestamp}</span>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
        )}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Messages;

