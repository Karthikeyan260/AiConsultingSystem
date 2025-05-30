'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';

export function AuthNav() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) {
    return null;
  }

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm">
          Welcome, {user.user_metadata.full_name || user.email}
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