'use client';

import Chatbot from '@/components/chatbot';

const DOMAIN = 'Retail';
const RETAIL_IMAGE_URL = 'https://picsum.photos/50/50';

export default function RetailPage() {
  return <Chatbot domain={DOMAIN} domainImage={RETAIL_IMAGE_URL} />;
}
