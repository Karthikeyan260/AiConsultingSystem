# 🧠 AI Consulting System

![AI Consulting System Banner](https://github.com/Karthikeyan260/AiConsultingSystem/blob/main/ai-consulting-system-banner.png?raw=true)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a731616a-b485-43b2-85d3-1aa35b028bab/deploy-status)](https://app.netlify.com/sites/aiconsultingsystem/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org/)

> An intelligent AI-powered consulting platform that provides expert guidance across Education, Healthcare, Finance, and Retail domains using Google's Gemini AI technology.

## 🌐 Live Demo

🚀 **[https://aiconsultingsystem.netlify.app](https://aiconsultingsystem.netlify.app)**

## ✨ Features

- 🏠 **Modern Homepage** - Clean, responsive design with smooth animations
- 🔐 **Secure Authentication** - Powered by Clerk for seamless user management
- 🎯 **Four Expert Domains** - Specialized AI consultants for Education, Healthcare, Finance, and Retail
- 🤖 **AI-Powered Chatbots** - Domain-specific intelligent assistants using Google Gemini 2.0 Flash
- 💾 **Data Persistence** - Firebase integration for real-time data storage
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX** - Built with Radix UI components and Tailwind CSS
- ⚡ **Performance Optimized** - Fast loading with Next.js 15 and optimized builds
- 🌙 **Dark/Light Mode** - Automatic theme switching based on user preference

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[React Hook Form](https://react-hook-form.com/)** - Form validation

### Backend & AI
- **[Google Gemini AI](https://ai.google.dev/)** - Advanced AI model (Gemini 2.0 Flash)
- **[Genkit](https://firebase.google.com/docs/genkit)** - AI development framework
- **[Firebase](https://firebase.google.com/)** - Backend-as-a-Service
- **[Clerk](https://clerk.com/)** - Authentication and user management

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks

## 📁 Project Structure

```
AiConsultingSystem/
├── public/                 # Static assets
├── src/
│   ├── ai/                # AI configuration and flows
│   │   ├── ai-instance.ts # Genkit AI setup
│   │   ├── dev.ts         # Development configuration
│   │   └── flows/         # AI conversation flows
│   ├── app/               # Next.js App Router pages
│   │   ├── domains/       # Domain-specific pages
│   │   │   ├── education/
│   │   │   ├── healthcare/
│   │   │   ├── finance/
│   │   │   └── retail/
│   │   ├── sign-in/       # Authentication pages
│   │   ├── sign-up/
│   │   └── page.tsx       # Homepage
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base UI components (Radix UI)
│   │   └── auth-nav.tsx  # Authentication navigation
│   ├── firebase/         # Firebase configuration
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── services/         # API services
├── docs/                 # Documentation
├── components.json       # Shadcn UI configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── next.config.ts        # Next.js configuration
└── package.json          # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn**
- **Google Cloud Account** (for Gemini AI API)
- **Firebase Account** (for backend services)
- **Clerk Account** (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Karthikeyan260/AiConsultingSystem.git
   cd AiConsultingSystem
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Google Gemini AI
   GOOGLE_GENAI_API_KEY=your_gemini_api_key

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
   ```

4. **Configure Firebase**
   - Create a new Firebase project
   - Enable Firestore Database
   - Add your domain to authorized domains

5. **Configure Clerk**
   - Create a new Clerk application
   - Set up authentication providers
   - Configure redirect URLs

6. **Set up Google Gemini AI**
   - Create a Google Cloud project
   - Enable the Gemini AI API
   - Generate an API key

### Development

```bash
# Start the development server
npm run dev

# Start AI development server (optional)
npm run genkit:dev

# Type checking
npm run typecheck

# Linting
npm run lint
```

The application will be available at `http://localhost:9002` (custom port configured).

### Building for Production

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## 🎯 Domain Specializations

### 📚 Education
- Personalized learning strategies
- Curriculum development guidance
- Educational technology recommendations
- Student assessment methodologies

### 🏥 Healthcare
- Medical consultation insights
- Treatment recommendation analysis
- Healthcare technology integration
- Patient care optimization

### 💰 Finance
- Investment strategy guidance
- Risk assessment and management
- Financial planning recommendations
- Market analysis and trends

### 🛒 Retail
- Customer experience optimization
- Inventory management strategies
- Sales analytics and insights
- E-commerce best practices

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

### Core Developers

- **[Karthikeyan](https://github.com/Karthikeyan260)** - Full Stack Developer & Project Lead
- **[Gokul](https://github.com/GokulOfStarwars)** - Data Scientist & AI Specialist
- **Murugadass** - UI/UX Designer

## 📞 Contact & Support

- 📧 **Email**: [kartji005@gmail.com](mailto:kartji005@gmail.com)
- 📱 **Phone**: +91 9345766900
- 🔗 **LinkedIn**: [Karthikeyan K](https://linkedin.com/in/karthikeyan-k-b41509258)
- 🐙 **GitHub**: [@Karthikeyan260](https://github.com/Karthikeyan260)

## 🙏 Acknowledgments

- **Google Gemini AI** - For providing advanced AI capabilities
- **Vercel** - For Next.js framework and hosting solutions
- **Radix UI** - For accessible component primitives
- **Tailwind CSS** - For utility-first CSS framework
- **Clerk** - For authentication services
- **Firebase** - For backend infrastructure

---

<div align="center">
  <p>Made with ❤️ by the AI Consulting System Team</p>
  <p>© 2024 AI Consulting System. All rights reserved.</p>
</div>