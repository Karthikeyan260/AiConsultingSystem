'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Textarea} from '@/components/ui/textarea';
import {useState, useRef, useEffect} from 'react';
import {useToast} from '@/hooks/use-toast';
import {Bot, Send, User} from 'lucide-react';
import {DEFAULT_GEMINI_MODEL} from '@/lib/gemini-models';

interface ChatMessage {
  text: string;
  isUser: boolean;
}

interface ChatbotProps {
  domain: string;
  domainImage: string;
}

async function getResponse(domain: string, query: string) {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      domain: domain,
      query: query,
      userNeed: 'General Consulting',
      model: DEFAULT_GEMINI_MODEL,
    }),
  });

  if (!response.ok) {
    let errorMessage = 'Failed to generate response';
    try {
      const errorData = await response.json();
      errorMessage = errorData.error || errorMessage;
    } catch {
      // If JSON parsing fails, use the default error message
    }
    throw new Error(errorMessage);
  }

  const data = await response.json();
  return data.adaptedResponse;
}

function getWelcomeMessage(domain: string): string {
  const welcomeMessages = {
    Education: "Hi there! Welcome to our Education Consulting service! I'm here to help you with educational strategies, learning methodologies, curriculum development, and any questions about the education sector. How can I assist you today?",
    Healthcare: "Hello! Welcome to our Healthcare Consulting service! I'm specialized in healthcare management, medical technologies, patient care optimization, and healthcare industry insights. What would you like to know about healthcare?",
    Finance: "Hi! Welcome to our Finance Consulting service! I can help you with investment strategies, financial planning, market analysis, risk management, and all things finance-related. What financial topic would you like to explore?",
    Retail: "Hello there! Welcome to our Retail Consulting service! I'm here to assist with retail strategies, customer experience, inventory management, market trends, and retail operations. How can I help optimize your retail business?"
  };
  
  return welcomeMessages[domain as keyof typeof welcomeMessages] || 
    `Hi! Welcome to our ${domain} Consulting service! I'm here to help you with any questions or guidance you need in this domain. How can I assist you today?`;
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
  const scrollAnchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    textareaRef.current?.focus();
    const welcomeMessage = getWelcomeMessage(domain);
    setMessages([{ text: welcomeMessage, isUser: false }]);
  }, [domain]);

  useEffect(() => {
    scrollAnchorRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    setIsLoading(true);
    setShowSuggestions(false);
    setMessages(prevMessages => [...prevMessages, { text, isUser: true }]);
    setQuery('');

    try {
      const botResponse = await getResponse(domain, text);
      setMessages(prevMessages => [...prevMessages, { text: botResponse, isUser: false }]);
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
    sendMessage(suggestion);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(query);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {domain} Consulting
          </h1>
          <p className="text-muted-foreground">Ask anything about {domain}</p>
        </div>

        <Card className="w-full max-w-2xl mx-auto border border-border shadow-lg overflow-hidden py-0 gap-0">
          <CardHeader className="bg-secondary border-b border-border py-4">
            <CardTitle className="flex items-center gap-3 text-foreground text-base">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Bot className="h-5 w-5" />
              </span>
              <span className="flex flex-col">
                <span className="font-semibold leading-tight">AI Consulting Assistant</span>
                <span className="text-xs font-normal text-muted-foreground">Online &middot; Usually replies instantly</span>
              </span>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-4 p-4">
            <div className="h-96 rounded-lg bg-background overflow-y-auto flex flex-col gap-3 pr-1">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-end gap-2 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!message.isUser && (
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary border border-border">
                      <Bot className="h-4 w-4 text-foreground" />
                    </span>
                  )}
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground rounded-br-sm'
                        : 'bg-secondary text-foreground rounded-bl-sm border border-border'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                  </div>
                  {message.isUser && (
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-border">
                      <User className="h-4 w-4 text-foreground" />
                    </span>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex items-end gap-2 justify-start">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary border border-border">
                    <Bot className="h-4 w-4 text-foreground" />
                  </span>
                  <div className="flex items-center gap-1 px-4 py-3 rounded-2xl rounded-bl-sm bg-secondary border border-border">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce" />
                  </div>
                </div>
              )}

              <div ref={scrollAnchorRef} />
            </div>

            {showSuggestions && (
              <div className="flex flex-wrap gap-2">
                {getSuggestedQuestions(domain).map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    disabled={isLoading}
                    className="text-left px-3 py-2 text-sm bg-secondary hover:bg-secondary/70 rounded-full transition-colors border border-border hover:border-primary/50 text-foreground disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex gap-2 items-end">
              <Textarea
                ref={textareaRef}
                placeholder={`Ask about ${domain}...`}
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                className="flex-grow rounded-lg border border-border focus-visible:ring-primary focus-visible:border-primary resize-none min-h-11"
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !query.trim()}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
