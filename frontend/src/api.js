const BASE = "http://localhost:8000";

export const api = {
  getItems: () => fetch(`${BASE}/items/`).then((r) => r.json()),
  createItem: (title) =>
    fetch(`${BASE}/items/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    }).then((r) => r.json()),
  wsUrl: "ws://localhost:8000/ws",
};
