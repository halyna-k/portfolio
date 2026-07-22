export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Here you would typically save the contact message to a database or send an email

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
} 
