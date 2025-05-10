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

export default function Chatbot({domain, domainImage}: ChatbotProps) {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const {toast} = useToast();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Focus the textarea when the component mounts
    textareaRef.current?.focus();
  }, []);

  const sendMessage = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
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
