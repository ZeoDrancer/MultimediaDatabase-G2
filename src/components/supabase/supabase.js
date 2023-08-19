import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cgocxzmjrrqtjxygwino.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnb2N4em1qcnJxdGp4eWd3aW5vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjM4MTE0NywiZXhwIjoyMDA3OTU3MTQ3fQ.XmEwz8Id2PMTC6bzN41JDsXrq1xG_AKME0YKWaUOazQ'

export const supabase = createClient(supabaseUrl, supabaseKey)