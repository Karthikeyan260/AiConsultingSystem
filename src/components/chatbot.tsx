'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Textarea} from '@/components/ui/textarea';
import {useState, useRef, useEffect} from 'react';
import {useToast} from '@/hooks/use-toast';
import {ArrowLeft, Bot, Currency, GraduationCap, Heart, Send, ShoppingCart, User} from 'lucide-react';
import Link from 'next/link';
import {motion, AnimatePresence} from 'framer-motion';
import {DEFAULT_GEMINI_MODEL} from '@/lib/gemini-models';

interface ChatMessage {
  text: string;
  isUser: boolean;
}

interface ChatbotProps {
  domain: string;
  domainImage: string;
}

interface DomainTheme {
  icon: typeof Bot;
  gradient: string;
  bubble: string;
  ring: string;
  chipHover: string;
  glow: string;
}

const DOMAIN_THEMES: Record<string, DomainTheme> = {
  Education: {
    icon: GraduationCap,
    gradient: 'from-blue-500 to-indigo-600',
    bubble: 'bg-blue-600',
    ring: 'focus-visible:ring-blue-500 focus-visible:border-blue-500',
    chipHover: 'hover:border-blue-400',
    glow: 'bg-blue-500/20',
  },
  Healthcare: {
    icon: Heart,
    gradient: 'from-rose-500 to-pink-600',
    bubble: 'bg-rose-600',
    ring: 'focus-visible:ring-rose-500 focus-visible:border-rose-500',
    chipHover: 'hover:border-rose-400',
    glow: 'bg-rose-500/20',
  },
  Finance: {
    icon: Currency,
    gradient: 'from-emerald-500 to-teal-600',
    bubble: 'bg-emerald-600',
    ring: 'focus-visible:ring-emerald-500 focus-visible:border-emerald-500',
    chipHover: 'hover:border-emerald-400',
    glow: 'bg-emerald-500/20',
  },
  Retail: {
    icon: ShoppingCart,
    gradient: 'from-amber-500 to-orange-600',
    bubble: 'bg-amber-600',
    ring: 'focus-visible:ring-amber-500 focus-visible:border-amber-500',
    chipHover: 'hover:border-amber-400',
    glow: 'bg-amber-500/20',
  },
};

const DEFAULT_THEME: DomainTheme = {
  icon: Bot,
  gradient: 'from-primary to-primary/70',
  bubble: 'bg-primary',
  ring: 'focus-visible:ring-primary focus-visible:border-primary',
  chipHover: 'hover:border-primary/50',
  glow: 'bg-primary/20',
};

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
  const theme = DOMAIN_THEMES[domain] ?? DEFAULT_THEME;
  const DomainIcon = theme.icon;

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
        <motion.div
          initial={{opacity: 0, y: -8}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4}}
          className="max-w-2xl mx-auto mb-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Domains
          </Link>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: -8}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4, delay: 0.05}}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {domain} Consulting
          </h1>
          <p className="text-muted-foreground">Ask anything about {domain}</p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 16, scale: 0.98}}
          animate={{opacity: 1, y: 0, scale: 1}}
          transition={{duration: 0.4, delay: 0.1}}
          className="max-w-2xl mx-auto"
        >
        <Card className="w-full border border-border shadow-lg overflow-hidden py-0 gap-0">
          <CardHeader className={`bg-gradient-to-r ${theme.gradient} border-b border-border py-4`}>
            <CardTitle className="flex items-center gap-3 text-white text-base">
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <span className={`absolute inset-0 rounded-full ${theme.glow} animate-ping`} />
                <DomainIcon className="h-5 w-5 relative" />
              </span>
              <span className="flex flex-col">
                <span className="font-semibold leading-tight">{domain} Consulting Assistant</span>
                <span className="text-xs font-normal text-white/80">Online &middot; Usually replies instantly</span>
              </span>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-4 p-4">
            <div className="h-96 rounded-lg bg-background overflow-y-auto flex flex-col gap-3 pr-1">
              <AnimatePresence initial={false}>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.25}}
                    className={`flex items-end gap-2 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!message.isUser && (
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${theme.gradient} text-white`}>
                        <DomainIcon className="h-4 w-4" />
                      </span>
                    )}
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        message.isUser
                          ? `${theme.bubble} text-white rounded-br-sm`
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
                  </motion.div>
                ))}
              </AnimatePresence>

              {isLoading && (
                <motion.div
                  initial={{opacity: 0, y: 10}}
                  animate={{opacity: 1, y: 0}}
                  className="flex items-end gap-2 justify-start"
                >
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${theme.gradient} text-white`}>
                    <DomainIcon className="h-4 w-4" />
                  </span>
                  <div className="flex items-center gap-1 px-4 py-3 rounded-2xl rounded-bl-sm bg-secondary border border-border">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce" />
                  </div>
                </motion.div>
              )}

              <div ref={scrollAnchorRef} />
            </div>

            {showSuggestions && (
              <div className="flex flex-wrap gap-2">
                {getSuggestedQuestions(domain).map((suggestion, index) => (
                  <motion.button
                    key={index}
                    initial={{opacity: 0, y: 8}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.25, delay: 0.15 + index * 0.08}}
                    onClick={() => handleSuggestionClick(suggestion)}
                    disabled={isLoading}
                    className={`text-left px-3 py-2 text-sm bg-secondary hover:bg-secondary/70 rounded-full transition-colors border border-border ${theme.chipHover} text-foreground disabled:opacity-50 disabled:pointer-events-none`}
                  >
                    {suggestion}
                  </motion.button>
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
                className={`flex-grow rounded-lg border border-border resize-none min-h-11 ${theme.ring}`}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !query.trim()}
                className={`bg-gradient-to-r ${theme.gradient} hover:opacity-90 text-white shrink-0`}
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
        </motion.div>
      </div>
    </div>
  );
}
