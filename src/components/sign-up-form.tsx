'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {useState} from 'react';
import {useToast} from '@/hooks/use-toast';
import {useRouter} from 'next/navigation';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {signUp} from '@/services/authentication';
import Link from 'next/link';

export function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {toast} = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await signUp(email, password, name, phone);

      if (!result.success) {
        throw new Error(result.error || 'Sign up failed');
      }

      toast({
        title: 'Sign up successful!',
        description: 'Welcome to AI Consulting System!',
      });
      router.push('/'); // Redirect to home page after successful sign-up
    } catch (err: any) {
      setError(err.message);
      toast({
        variant: 'destructive',
        title: 'Sign up failed!',
        description: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
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
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="+1234567890"
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
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
            {loading ? 'Signing Up...' : 'Sign Up'}
          </Button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link 
              href="/sign-in" 
              className="text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
