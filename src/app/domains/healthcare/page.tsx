'use client';

import Chatbot from '@/components/chatbot';

const DOMAIN = 'Healthcare';
const HEALTHCARE_IMAGE_URL = 'https://picsum.photos/50/50';

export default function HealthcarePage() {
  return <Chatbot domain={DOMAIN} domainImage={HEALTHCARE_IMAGE_URL} />;
}
