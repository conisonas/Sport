import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://qlpbbydumzipjtugzblq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFscGJieWR1bXppcGp0dWd6YmxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUzMjQyMTYsImV4cCI6MTk5MDkwMDIxNn0.Az9wvss0JKw8fzJHVY6Gwu8YaMHxygl_6w8Q8lPDUYQ')