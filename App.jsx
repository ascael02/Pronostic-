import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ padding: 20, background: "#0f172a", minHeight: "100vh", color: "white" }}>
      <h1>Plateforme de pronostics</h1>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setPage("home")}>Accueil</button>
        <button onClick={() => setPage("vip")} style={{ marginLeft: 10 }}>VIP</button>
      </div>

      <div style={{ marginTop: 20 }}>
        {page === "home" && <p>Bienvenue 👋</p>}
        {page === "vip" && <p>Section VIP 🔒</p>}
      </div>
    </div>
  );
}
