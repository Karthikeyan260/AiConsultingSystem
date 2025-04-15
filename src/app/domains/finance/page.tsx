'use client';

import Chatbot from '@/components/chatbot';

const DOMAIN = 'Finance';
const FINANCE_IMAGE_URL = 'https://picsum.photos/50/50';

export default function FinancePage() {
  return <Chatbot domain={DOMAIN} domainImage={FINANCE_IMAGE_URL} />;
}
