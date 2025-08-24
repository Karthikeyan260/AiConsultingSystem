'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { getCurrentUser, signOut, UserSession } from '@/services/authentication';

export function AuthNav() {
  const [user, setUser] = useState<UserSession | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Get initial user session
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setLoading(false);

    // Set up interval to check for authentication changes
    const checkAuthInterval = setInterval(() => {
      const currentUser = getCurrentUser();
      setUser(currentUser);
    }, 1000); // Check every second

    return () => clearInterval(checkAuthInterval);
  }, []);

  const handleSignOut = async () => {
    signOut();
    setUser(null);
    router.push('/');
  };

  if (loading) {
    return null;
  }

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm">
          Welcome, {user.fullName || user.email}
        </span>
        <Button
          variant="ghost"
          onClick={handleSignOut}
          className="hover:bg-primary/10 hover:text-primary"
        >
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <div className="space-x-4">
      <Button
        variant="ghost"
        className="hover:bg-primary/10 hover:text-primary"
        onClick={() => router.push("/sign-in")}
      >
        Sign In
      </Button>
      <Button
        className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
        onClick={() => router.push("/sign-up")}
      >
        Sign Up
      </Button>
    </div>
  );
} 