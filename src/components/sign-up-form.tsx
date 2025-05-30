'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {useState} from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {useToast} from '@/hooks/use-toast';
import {useRouter} from 'next/navigation';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export function SignUpForm() {
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
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      toast({
        title: 'Sign up successful!',
        description: 'You have successfully signed up.',
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
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your Name"
              type="text"
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
            />
          </div>
           <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="Your Phone Number"
              type="tel"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Button disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </Button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
           <p className="mt-4 text-sm text-muted-foreground">
            Or sign up with Gmail
          </p>
      </CardContent>
    </Card>
  );
}
