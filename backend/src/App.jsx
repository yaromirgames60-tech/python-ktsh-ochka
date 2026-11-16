import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ItemsPage from "./pages/ItemsPage";
import LivePage from "./pages/LivePage";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/">Home</Link> | <Link to="/items">Items</Link> |{" "}
        <Link to="/live">Live</Link>
      </nav>
      <main style={{ padding: "10px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/live" element={<LivePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
