const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrcHVsdXN1MEBnbWFpbC5jb20iLCJleHAiOjE3NTE1Mjc5MTgsImlhdCI6MTc1MTUyNzAxOCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjVhMjQ4OGEyLWY1NmQtNDRkMi1hZWZiLWY4ZmJkY2I1YmQxZSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InB1bHVzdSBrYXJ0aGlrIiwic3ViIjoiNGRiOTJhMjItMDA1MC00M2M5LWI5ZWEtMTIwZDNkMGIxYjRiIn0sImVtYWlsIjoia3B1bHVzdTBAZ21haWwuY29tIiwibmFtZSI6InB1bHVzdSBrYXJ0aGlrIiwicm9sbE5vIjoiMjJ3ajhhMDVwMiIsImFjY2Vzc0NvZGUiOiJQYm1WQVQiLCJjbGllbnRJRCI6IjRkYjkyYTIyLTAwNTAtNDNjOS1iOWVhLTEyMGQzZDBiMWI0YiIsImNsaWVudFNlY3JldCI6ImdhUG14dWJNc1ZoWm5HUWcifQ.M-RiWqCTdfnDxfh7EL9fpaTB7C78i2Tz2UHE9k_9oW8";

export async function Log(stack, level, pkg, message) {
  const url = "http://20.244.56.144/evaluation-service/logs";

  const payload = {
    stack: stack.toLowerCase(),
    level: level.toLowerCase(),
    package: pkg.toLowerCase(),
    message: message
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TOKEN}`
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Logging API failed:", errorText);
    } else {
      console.log("Log sent:", payload);
    }
  } catch (error) {
    console.error("Log error:", error.message);
  }
}
