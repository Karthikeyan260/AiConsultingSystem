'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {useState} from 'react';
<<<<<<< HEAD
import {useToast} from '@/hooks/use-toast';
import {useRouter} from 'next/navigation';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {supabase} from '@/lib/supabase';

export function SignUpForm() {
  const [name, setName] = useState('');
=======
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {useToast} from '@/hooks/use-toast';
import {useRouter} from 'next/navigation';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export function SignUpForm() {
>>>>>>> fd1795c59ce09a105dfb25311ff747fa1d479d68
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
<<<<<<< HEAD
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });

      if (error) throw error;

      toast({
        title: 'Sign up successful!',
        description: 'Please check your email to confirm your account.',
      });
      router.push('/sign-in'); // Redirect to sign-in page after successful sign-up
=======
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      toast({
        title: 'Sign up successful!',
        description: 'You have successfully signed up.',
      });
      router.push('/'); // Redirect to home page after successful sign-up
>>>>>>> fd1795c59ce09a105dfb25311ff747fa1d479d68
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

<<<<<<< HEAD
  const handleGoogleSignUp = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
      if (error) throw error;
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Google sign up failed!',
        description: err.message,
      });
    }
  };

=======
>>>>>>> fd1795c59ce09a105dfb25311ff747fa1d479d68
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
<<<<<<< HEAD
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
=======
           <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your Name"
              type="text"
>>>>>>> fd1795c59ce09a105dfb25311ff747fa1d479d68
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
<<<<<<< HEAD
              required
=======
            />
          </div>
           <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="Your Phone Number"
              type="tel"
>>>>>>> fd1795c59ce09a105dfb25311ff747fa1d479d68
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
<<<<<<< HEAD
              required
=======
>>>>>>> fd1795c59ce09a105dfb25311ff747fa1d479d68
            />
          </div>
          <Button disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </Button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
<<<<<<< HEAD
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">Or sign up with</p>
          <Button
            variant="outline"
            className="w-full"
            onClick={handleGoogleSignUp}
          >
            Google
          </Button>
        </div>
=======
           <p className="mt-4 text-sm text-muted-foreground">
            Or sign up with Gmail
          </p>
>>>>>>> fd1795c59ce09a105dfb25311ff747fa1d479d68
      </CardContent>
    </Card>
  );
}
