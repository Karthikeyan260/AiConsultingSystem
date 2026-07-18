'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Textarea} from '@/components/ui/textarea';
import {useState, useRef, useEffect} from 'react';
import {useToast} from '@/hooks/use-toast';
import {ScrollArea} from "@/components/ui/scroll-area";
import Image from 'next/image';
import {GEMINI_MODELS, DEFAULT_GEMINI_MODEL} from '@/lib/gemini-models';

interface ChatMessage {
  text: string;
  isUser: boolean;
}

interface ChatbotProps {
  domain: string;
  domainImage: string;
}

async function getResponse(domain: string, query: string, model: string) {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      domain: domain,
      query: query,
      userNeed: 'General Consulting',
      model: model,
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
  const [selectedModel, setSelectedModel] = useState(DEFAULT_GEMINI_MODEL);
  const {toast} = useToast();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current?.focus();
    const welcomeMessage = getWelcomeMessage(domain);
    setMessages([{ text: welcomeMessage, isUser: false }]);
  }, [domain]);

  const sendMessage = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setShowSuggestions(false);
    const userMessage = { text: query, isUser: true };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setQuery('');

    try {
      const botResponse = await getResponse(domain, query, selectedModel);
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
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {domain} Consulting
          </h1>
          <p className="text-muted-foreground">Ask anything about {domain}</p>
        </div>
        
        <Card className="w-full max-w-2xl mx-auto border border-border">
          <CardHeader className="bg-secondary border-b border-border">
            <CardTitle className="text-foreground">AI Consulting Assistant</CardTitle>
            <div className="flex flex-col gap-3 mt-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Select Model
                </label>
                <Select value={selectedModel} onValueChange={setSelectedModel}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a model" />
                  </SelectTrigger>
                  <SelectContent>
                    {GEMINI_MODELS.map((m) => (
                      <SelectItem
                        key={m.id}
                        value={m.id}
                        aria-label={`${m.label}: ${m.description}`}
                      >
                        <div className="flex flex-col">
                          <span className="font-medium">{m.label}</span>
                          <span className="text-xs text-muted-foreground">{m.description}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="flex flex-col gap-4">
            <ScrollArea className="h-[400px] border border-border rounded-lg p-4 bg-background">
              <div className="flex flex-col space-y-3">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isUser
                          ? 'bg-primary text-primary-foreground rounded-br-none'
                          : 'bg-secondary text-foreground rounded-bl-none border border-border'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            {showSuggestions && (
              <div className="bg-secondary p-4 rounded-lg border border-border">
                <p className="text-sm font-medium text-foreground mb-3">Suggested Questions</p>
                <div className="flex flex-col gap-2">
                  {getSuggestedQuestions(domain).map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-left p-3 text-sm bg-card hover:bg-card/80 rounded-lg transition-colors border border-border hover:border-primary/50 text-foreground"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Textarea
                ref={textareaRef}
                placeholder={`Ask about ${domain}...`}
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                className="flex-grow rounded-lg border border-border focus:ring-primary focus:border-primary resize-none"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap"
              >
                {isLoading ? 'Sending...' : 'Send'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
