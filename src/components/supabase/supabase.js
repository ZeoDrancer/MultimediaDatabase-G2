import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qklmbyyrhzxxhpyhcfst.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrbG1ieXlyaHp4eGhweWhjZnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA0MDYzOTYsImV4cCI6MjAwNTk4MjM5Nn0.UrG5A6wuTrR7Ga7maLkDCRsCW0SvjZLWR_llRbSunK0'

export const supabase = createClient(supabaseUrl, supabaseKey)