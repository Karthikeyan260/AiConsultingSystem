import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create client conditionally for development
export const supabase = supabaseUrl && supabaseAnonKey && !supabaseUrl.includes('placeholder') 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;