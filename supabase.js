<script src="https://unpkg.com/@supabase/supabase-js@2"></script>
<script>
  // Supabase configuration
  const SUPABASE_URL = "https://ipecphnepjvaogyxxqfh.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwZWNwaG5lcGp2YW9neXh4cWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0MzA1MTIsImV4cCI6MjA3NTAwNjUxMn0.D9ySAcvy6V_Mf2HxHjGpLzbyespaPB0ckS2ZgvdwtYc";

  // Create a global Supabase client
  window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
</script>
