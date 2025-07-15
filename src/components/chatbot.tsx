'use client';

import {adaptResponseToNeed} from '@/ai/flows/adapt-response-to-need';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Textarea} from '@/components/ui/textarea';
import {useState, useRef, useEffect} from 'react';
import {useToast} from '@/hooks/use-toast';
import {ScrollArea} from "@/components/ui/scroll-area";
import Image from 'next/image';

interface ChatMessage {
  text: string;
  isUser: boolean;
}

interface ChatbotProps {
  domain: string;
  domainImage: string;
}

async function getResponse(domain: string, query: string) {
  const response = await adaptResponseToNeed({
    domain: domain,
    query: query,
    userNeed: 'General Consulting', // Default user need
  });
  return response.adaptedResponse;
}

function getWelcomeMessage(domain: string): string {
  const welcomeMessages = {
    Education: "👋 Hi there! Welcome to our Education Consulting service! I'm here to help you with educational strategies, learning methodologies, curriculum development, and any questions about the education sector. How can I assist you today?",
    Healthcare: "👋 Hello! Welcome to our Healthcare Consulting service! I'm specialized in healthcare management, medical technologies, patient care optimization, and healthcare industry insights. What would you like to know about healthcare?",
    Finance: "👋 Hi! Welcome to our Finance Consulting service! I can help you with investment strategies, financial planning, market analysis, risk management, and all things finance-related. What financial topic would you like to explore?",
    Retail: "👋 Hello there! Welcome to our Retail Consulting service! I'm here to assist with retail strategies, customer experience, inventory management, market trends, and retail operations. How can I help optimize your retail business?"
  };
  
  return welcomeMessages[domain as keyof typeof welcomeMessages] || 
    `👋 Hi! Welcome to our ${domain} Consulting service! I'm here to help you with any questions or guidance you need in this domain. How can I assist you today?`;
}

function getSuggestedQuestions(domain: string): string[] {
  const suggestions = {
    Education: [
      "What are the latest trends in online learning?",
      "How can I improve student engagement?",
      "What's the best way to implement technology in classrooms?"
    ],
    Healthcare: [
      "What are emerging trends in telemedicine?",
      "How can hospitals improve patient satisfaction?",
      "What are the benefits of AI in healthcare?"
    ],
    Finance: [
      "What's a good investment strategy for beginners?",
      "How do I assess market risk?",
      "What are the current fintech trends?"
    ],
    Retail: [
      "How can I improve customer retention?",
      "What are effective inventory management strategies?",
      "How do I optimize my e-commerce conversion rates?"
    ]
  };
  
  return suggestions[domain as keyof typeof suggestions] || [
    "What services do you offer?",
    "How can you help my business?",
    "What are the current industry trends?"
  ];
}

export default function Chatbot({domain, domainImage}: ChatbotProps) {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const {toast} = useToast();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Focus the textarea when the component mounts
    textareaRef.current?.focus();
    
    // Add welcome message when component mounts
    const welcomeMessage = getWelcomeMessage(domain);
    setMessages([{ text: welcomeMessage, isUser: false }]);
  }, [domain]);

  const sendMessage = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setShowSuggestions(false); // Hide suggestions after first message
    const userMessage = { text: query, isUser: true };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setQuery('');

    try {
      const botResponse = await getResponse(domain, query);
      const botMessage = { text: botResponse, isUser: false };
      setMessages(prevMessages => [...prevMessages, botMessage]);
      toast({
        title: 'Response Generated',
        description: 'The chatbot has generated a response.',
      });
    } catch (error: any) {
      console.error('Error generating response:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'Failed to generate response.',
      });
    } finally {
      setIsLoading(false);
      textareaRef.current?.focus();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setTimeout(() => {
      sendMessage();
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-primary text-center mb-4">
        <Image src="https://github.com/Karthikeyan260/AiConsultingSystem/blob/main/src/public/logo.png?raw=true" alt={`${domain} Logo`} width={50} height={50} className="inline-block mr-2" />
        {domain} Consulting
      </h1>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Ask me anything about {domain}!</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col">
          <ScrollArea className="h-[400px] mb-4">
            <div className="flex flex-col space-y-2">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`chat-message ${message.isUser ? 'user-message' : 'bot-message'}`}
                >
                  <div className="message-content">
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          {/* Suggested Questions */}
          {showSuggestions && (
            <div className="mb-4">
              <p className="text-sm font-medium text-muted-foreground mb-2">💡 Try asking:</p>
              <div className="flex flex-col gap-2">
                {getSuggestedQuestions(domain).map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-left p-2 text-sm bg-secondary hover:bg-secondary/80 rounded-md transition-colors border border-border/50 hover:border-primary/30"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Textarea
              ref={textareaRef}
              placeholder={`Enter your question about ${domain} here...`}
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              className="flex-grow rounded-md border shadow-sm focus:ring-primary focus:border-primary"
            />
            <Button type="submit" disabled={isLoading} onClick={handleSubmit}>
              {isLoading ? 'Generating...' : 'Send'}
            </Button>
          </form>
        </CardContent>
      </Card>
      <style jsx>{`
        .chat-message {
          display: flex;
          margin-bottom: 8px;
        }
        .user-message {
          justify-content: flex-end;
        }
        .bot-message {
          justify-content: flex-start;
        }
        .message-content {
          max-width: 80%;
          padding: 10px 15px;
          border-radius: 20px;
          color: white;
        }
        .user-message .message-content {
          background-color: #3498db; /* Blue for user messages */
        }
        .bot-message .message-content {
          background-color: #2ecc71; /* Green for bot messages */
        }
      `}</style>
    </div>
  );
}
