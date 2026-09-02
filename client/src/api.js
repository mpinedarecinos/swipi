const API_URL = import.meta.env.VITE_API_URL;

export async function createRoom(displayName) {
  const res = await fetch(`${API_URL}/api/rooms`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ displayName }),
  });

  if (!res.ok) {
    throw new Error("Failed to create room");
  }
  return res.json();
}
