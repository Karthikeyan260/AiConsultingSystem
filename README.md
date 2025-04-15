# 🧠 AI-Driven Consulting System

An intelligent expert system that provides domain-specific consulting across **Education, Healthcare, Finance**, and **Retail** using AI-powered chatbots. Built with **React.js** for the frontend and **Flask** for the backend, the system leverages NLP and machine learning models to provide real-time, context-aware responses to user queries.

## 🌐 Live Demo
🚀 *[Coming Soon]*

---

## 📌 Features

- ✨ User-friendly homepage with title and authentication (Sign In / Sign Up)
- 📊 Four expert domains: Education, Healthcare, Finance, Retail
- 💬 Domain-specific AI chatbot for real-time interaction
- 🧠 NLP + ML-powered chatbot trained using TensorFlow and scikit-learn
- 🛠️ Feedback system to improve model accuracy
- 🔐 JWT-based authentication
- 📚 MongoDB integration for user data and chat logs

---

## 🧱 Tech Stack

### Frontend
- **React.js**
- **Redux**
- **Tailwind CSS**

### Backend
- **Flask**
- **Flask-RESTful**
- **JWT Authentication**

### Database
- **MongoDB (MongoDB Atlas)**

### AI Models
- **TensorFlow**
- **scikit-learn**
- **NLTK / spaCy (for NLP tasks)**

---

## 📁 Project Structure

ai-consulting-system/ │ ├── client/ # React Frontend │ ├── public/ │ └── src/ │ ├── components/ │ ├── pages/ │ └── redux/ │ ├── server/ # Flask Backend │ ├── app/ │ │ ├── models/ │ │ ├── routes/ │ │ ├── services/ │ │ └── ai_models/ │ └── main.py │ ├── .env ├── README.md └── requirements.txt



---

## 🚀 Getting Started

### Prerequisites

- Node.js
- Python 3.8+
- MongoDB Atlas account

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-consulting-system.git
cd ai-consulting-system
2. Setup Frontend (React)

cd client
npm install
npm dev run 
4. Environment Variables
Create a .env file in both client/ and server/ directories to store API URLs, JWT secrets, DB connection strings, etc.

💡 How It Works
User lands on the homepage → signs in or signs up.

Selects a domain → redirected to chatbot.


Feedback system helps fine-tune responses.



✨ Acknowledgements

Tailwind CSS

📬 Contact
Developer: Karthikeyan
📧 kartji005@gmail.com
📱 9345766900
