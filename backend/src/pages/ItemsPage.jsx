import { useEffect, useState } from "react";
import { api } from "../api";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");

  const load = () => api.getItems().then(setItems);

  useEffect(() => {
    load();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await api.createItem(title);
    setTitle("");
    load();
  };

  return (
    <div>
      <h1>Items</h1>
      <form onSubmit={submit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((it) => (
          <li key={it.id}>{it.title}</li>
        ))}
      </ul>
    </div>
  );
}
