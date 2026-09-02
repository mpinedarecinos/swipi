import { useState } from "react";
import { createRoom } from "../api";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();

  async function handleCreate() {
    const room = await createRoom(displayName);
    navigate(`/room/${room.code}`);
  }
  return (
    <>
      <h1>Swipi</h1>

      <input
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder="Your name"
      />

      <button onClick={handleCreate}>Start a room</button>
    </>
  );
}
