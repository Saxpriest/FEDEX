<script src="https://unpkg.com/@supabase/supabase-js@2"></script>
<script>
const SUPABASE_URL = "https://ogzzwegtifhtjygnsuxr.supabase.co";

const SUPABASE_ANON_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nenp3ZWd0aWZodGp5Z25zdXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxOTEwMzIsImV4cCI6MjA4ODc2NzAzMn0.Hp7F2GDqfBeHxXKek3BkN_P1HAuqhab5jEogbaKygB8";

window.supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
</script>
