import { useEffect, useRef, useState } from "react";
import { api } from "../api";

export default function LivePage() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const wsRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket(api.wsUrl);
    ws.onmessage = (e) => setMessages((m) => [...m, e.data]);
    wsRef.current = ws;
    return () => ws.close();
  }, []);

  const send = (e) => {
    e.preventDefault();
    if (!text.trim() || !wsRef.current) return;
    wsRef.current.send(text);
    setText("");
  };

  return (
    <div>
      <h1>Live</h1>
      <form onSubmit={send}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      <ul>
        {messages.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </div>
  );
}
