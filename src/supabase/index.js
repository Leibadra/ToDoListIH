import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ohralbaoxvzwigzwssmv.supabase.co';
const supabaseAnonToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ocmFsYmFveHZ6d2lnendzc212Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIzODgzMzgsImV4cCI6MTk3Nzk2NDMzOH0.p5VfjNyFIgY4DG8IZ19USGvY_15qZQyB6jU7zeCc02k';

export default createClient(supabaseUrl, supabaseAnonToken);
