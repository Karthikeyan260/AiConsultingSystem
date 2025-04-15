'use client';

import Chatbot from '@/components/chatbot';

const DOMAIN = 'Education';
const EDUCATION_IMAGE_URL = 'https://picsum.photos/50/50';

export default function EducationPage() {
  return <Chatbot domain={DOMAIN} domainImage={EDUCATION_IMAGE_URL} />;
}
