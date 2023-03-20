import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://aquehqrgdzbgexbqkztq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxdWVocXJnZHpiZ2V4YnFrenRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NjY4MjQsImV4cCI6MTk5MzQ0MjgyNH0.vRRqlYZ5o-KX3vDK921M_JZDp1CriTHJ2dImiiu7POQ'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')

  for (let book of books) {
    let row = document.getElementById('books');
    row.innerHTML += `<td>${book.title}</td>
                      <td>${book.author}</td>
                      <td>${book.isbn}</td>
                      <td>${book.description}</td>`;
  }
}

getBooks();

