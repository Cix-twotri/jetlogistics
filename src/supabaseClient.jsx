
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://icafoblpjhigbojjlzuc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljYWZvYmxwamhpZ2JvampsenVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzNzQ5MjQsImV4cCI6MjAzNzk1MDkyNH0.-5eK-u_k_3BbGYQwpWjU9w2LECi6WSp3iUaQWlT_aEM'
export const supabase = createClient(supabaseUrl, supabaseKey)