'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {useState} from 'react';
import {useToast} from '@/hooks/use-toast';
import {useRouter} from 'next/navigation';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {supabase} from '@/lib/supabase';
import Link from 'next/link';

export function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {toast} = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast({
        title: 'Sign in successful!',
        description: 'You have successfully signed in.',
      });
      router.push('/'); // Redirect to home page after successful sign-in
    } catch (err: any) {
      setError(err.message);
      toast({
        variant: 'destructive',
        title: 'Sign in failed!',
        description: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Enter your email and password to sign in</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="example@example.com"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <Button disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Link 
              href="/sign-up" 
              className="text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
