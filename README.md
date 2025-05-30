Perfect! I've now updated the README with your actual **Netlify deploy badge** link. Here's the final version:

---

# 🧠 AI-Driven Consulting System

![AI-Driven Consulting Banner](https://github.com/Karthikeyan260/AiConsultingSystem/blob/main/ChatGPT%20Image%20May%205,%202025,%2010_48_45%20AM.png?raw=true)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a731616a-b485-43b2-85d3-1aa35b028bab/deploy-status)](https://app.netlify.com/sites/aiconsultingsystem/deploys)

An intelligent expert system that provides domain-specific consulting across **Education, Healthcare, Finance**, and **Retail** using AI-powered chatbots. Built with **Next.js** for the frontend and **Gemini API** for backend intelligence, the system leverages natural language understanding to provide real-time, context-aware responses to user queries.

---

## 🌐 Live Demo

🚀 [https://aiconsultingsystem.netlify.app](https://aiconsultingsystem.netlify.app)

---

## 📌 Features

* ✨ User-friendly homepage with title and authentication (Sign In / Sign Up)
* 📊 Four expert domains: Education, Healthcare, Finance, Retail
* 💬 Domain-specific AI chatbot for real-time interaction
* 🧠 Gemini API-powered chatbot for accurate, dynamic responses
* 🛠️ Feedback system to improve answer quality
* 🔐 JWT-based authentication
* 📚 MongoDB integration for user data and chat logs

---

## 🧱 Tech Stack

### Frontend

* **Next.js**
* **Redux**
* **Tailwind CSS**

### Backend

* **Gemini API (Google AI)**
* **JWT Authentication**

### Database

* **MongoDB (MongoDB Atlas)**

---

## 📁 Project Structure

```
ai-consulting-system/
├── client/               # Next.js Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── redux/
├── server/               # Gemini API integration
│   ├── services/
│   └── ai_models/
├── .env
├── README.md
└── requirements.txt
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js
* Google Cloud account with access to Gemini API
* MongoDB Atlas account

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-consulting-system.git
cd ai-consulting-system
```

### 2. Setup Frontend (Next.js)

```bash
cd client
npm install
npm run dev
```

### 3. Environment Variables

Create a `.env` file in both `client/` and `server/` directories to store:

* Gemini API keys
* MongoDB connection string
* JWT secrets
* API endpoints

---

## 💡 How It Works

1. User lands on the homepage → signs in or signs up
2. Selects a consulting domain
3. Interacts with the AI chatbot powered by Gemini API
4. Feedback system logs responses for future fine-tuning

---

## ✨ Acknowledgements

* Tailwind CSS
* Google Gemini API
* MongoDB Atlas

---

## 📬 Contact

**Developer:** Karthikeyan
📧 [kartji005@gmail.com](mailto:kartji005@gmail.com)
📱 9345766900

---

