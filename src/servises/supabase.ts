import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ijgbxgdoqzoqjhgpvnna.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqZ2J4Z2RvcXpvcWpoZ3B2bm5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MzgzMDUsImV4cCI6MjA3NDMxNDMwNX0.bz44QZYe7KazOI-F1QJUQMAZvAjKshEtAxfXgjJjCxY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
