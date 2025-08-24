/**
 * Represents user authentication information.
 */
export interface AuthResult {
  /**
   * Whether the authentication was successful.
   */
  success: boolean;
  /**
   * An optional user ID, if authentication was successful.
   */
  userId?: string;
  /**
   * An optional error message, if authentication failed.
   */
  error?: string;
}

/**
 * Represents a user in the system.
 */
export interface User {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  password: string;
}

/**
 * Represents the current user session.
 */
export interface UserSession {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string;
}

// Helper functions for localStorage management
const USERS_KEY = 'ai_consulting_users';
const CURRENT_USER_KEY = 'ai_consulting_current_user';

function getStoredUsers(): User[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(USERS_KEY);
  return stored ? JSON.parse(stored) : [];
}

function storeUsers(users: User[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentSession(): UserSession | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(CURRENT_USER_KEY);
  return stored ? JSON.parse(stored) : null;
}

function setCurrentSession(session: UserSession | null): void {
  if (typeof window === 'undefined') return;
  if (session) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(session));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}

/**
 * Asynchronously signs up a new user.
 *
 * @param email The email for the new user.
 * @param password The password for the new user.
 * @param fullName The full name of the user.
 * @param phoneNumber The phone number of the user.
 * @returns A promise that resolves to an AuthResult indicating the success or failure of the signup.
 */
export async function signUp(
  email: string, 
  password: string, 
  fullName: string, 
  phoneNumber: string
): Promise<AuthResult> {
  try {
    // Validate input
    if (!email || !password || !fullName) {
      return {
        success: false,
        error: 'Email, password, and full name are required.',
      };
    }

    if (password.length < 6) {
      return {
        success: false,
        error: 'Password must be at least 6 characters long.',
      };
    }

    // Check if user already exists
    const users = getStoredUsers();
    const existingUser = users.find(user => user.email.toLowerCase() === email.toLowerCase());
    
    if (existingUser) {
      return {
        success: false,
        error: 'A user with this email already exists.',
      };
    }

    // Create new user
    const newUser: User = {
      id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      email: email.toLowerCase(),
      fullName,
      phoneNumber,
      password, // In a real app, this would be hashed
    };

    // Store user
    users.push(newUser);
    storeUsers(users);

    // Create session
    const session: UserSession = {
      id: newUser.id,
      email: newUser.email,
      fullName: newUser.fullName,
      phoneNumber: newUser.phoneNumber,
    };
    setCurrentSession(session);

    return {
      success: true,
      userId: newUser.id,
    };
  } catch (error) {
    return {
      success: false,
      error: 'An unexpected error occurred during sign up.',
    };
  }
}

/**
 * Asynchronously signs in an existing user.
 *
 * @param email The email of the user.
 * @param password The password of the user.
 * @returns A promise that resolves to an AuthResult indicating the success or failure of the signin.
 */
export async function signIn(email: string, password: string): Promise<AuthResult> {
  try {
    // Validate input
    if (!email || !password) {
      return {
        success: false,
        error: 'Email and password are required.',
      };
    }

    // Find user
    const users = getStoredUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (!user) {
      return {
        success: false,
        error: 'Invalid email or password.',
      };
    }

    // Check password
    if (user.password !== password) {
      return {
        success: false,
        error: 'Invalid email or password.',
      };
    }

    // Create session
    const session: UserSession = {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      phoneNumber: user.phoneNumber,
    };
    setCurrentSession(session);

    return {
      success: true,
      userId: user.id,
    };
  } catch (error) {
    return {
      success: false,
      error: 'An unexpected error occurred during sign in.',
    };
  }
}

/**
 * Signs out the current user.
 */
export function signOut(): void {
  setCurrentSession(null);
}

/**
 * Gets the current user session.
 */
export function getCurrentUser(): UserSession | null {
  return getCurrentSession();
}

/**
 * Checks if a user is currently signed in.
 */
export function isSignedIn(): boolean {
  return getCurrentSession() !== null;
}
