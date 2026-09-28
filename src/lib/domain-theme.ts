import {Bot, Currency, GraduationCap, Heart, ShoppingCart} from 'lucide-react';

export interface DomainTheme {
  icon: typeof Bot;
  gradient: string;
  solidBg: string;
  solidText: string;
  hoverBorder: string;
  bubble: string;
  ring: string;
  glow: string;
}

export const DOMAIN_THEMES: Record<string, DomainTheme> = {
  Education: {
    icon: GraduationCap,
    gradient: 'from-blue-500 to-indigo-600',
    solidBg: 'bg-blue-500/10',
    solidText: 'text-blue-600',
    hoverBorder: 'hover:border-blue-400/50',
    bubble: 'bg-blue-600',
    ring: 'focus-visible:ring-blue-500 focus-visible:border-blue-500',
    glow: 'bg-blue-500/20',
  },
  Healthcare: {
    icon: Heart,
    gradient: 'from-rose-500 to-pink-600',
    solidBg: 'bg-rose-500/10',
    solidText: 'text-rose-600',
    hoverBorder: 'hover:border-rose-400/50',
    bubble: 'bg-rose-600',
    ring: 'focus-visible:ring-rose-500 focus-visible:border-rose-500',
    glow: 'bg-rose-500/20',
  },
  Finance: {
    icon: Currency,
    gradient: 'from-emerald-500 to-teal-600',
    solidBg: 'bg-emerald-500/10',
    solidText: 'text-emerald-600',
    hoverBorder: 'hover:border-emerald-400/50',
    bubble: 'bg-emerald-600',
    ring: 'focus-visible:ring-emerald-500 focus-visible:border-emerald-500',
    glow: 'bg-emerald-500/20',
  },
  Retail: {
    icon: ShoppingCart,
    gradient: 'from-amber-500 to-orange-600',
    solidBg: 'bg-amber-500/10',
    solidText: 'text-amber-600',
    hoverBorder: 'hover:border-amber-400/50',
    bubble: 'bg-amber-600',
    ring: 'focus-visible:ring-amber-500 focus-visible:border-amber-500',
    glow: 'bg-amber-500/20',
  },
};

export const DEFAULT_DOMAIN_THEME: DomainTheme = {
  icon: Bot,
  gradient: 'from-primary to-primary/70',
  solidBg: 'bg-primary/10',
  solidText: 'text-primary',
  hoverBorder: 'hover:border-primary/50',
  bubble: 'bg-primary',
  ring: 'focus-visible:ring-primary focus-visible:border-primary',
  glow: 'bg-primary/20',
};
