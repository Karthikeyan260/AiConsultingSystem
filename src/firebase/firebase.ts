import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAuth, type Auth } from "firebase/auth";

// Import the necessary Firebase modules

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check if all required Firebase configuration properties are present
const isFirebaseConfigValid = Boolean(
    firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.storageBucket &&
    firebaseConfig.messagingSenderId &&
    firebaseConfig.appId
);

// Initialize Firebase only if configuration is valid and not already initialized
let app: FirebaseApp | undefined;
let db: Firestore | undefined;
let auth: Auth | undefined;

if (isFirebaseConfigValid) {
    try {
        // Check if Firebase is already initialized
        if (getApps().length === 0) {
            app = initializeApp(firebaseConfig);
        } else {
            app = getApps()[0];
        }
        
        // Initialize Firestore
        db = getFirestore(app);
        
        // Initialize Firebase Authentication
        auth = getAuth(app);
    } catch (error) {
        console.error("Failed to initialize Firebase:", error);
    }
} else if (typeof window !== 'undefined') {
    // Only log warning on client side to avoid build-time noise
    console.warn("Firebase configuration is incomplete. Please set all required environment variables.");
}

// Export the initialized services
export { app, db, auth };