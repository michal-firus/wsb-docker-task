import { useState } from "react";

function App() {
  const [koszyk, setKoszyk] = useState([]);
  const produkty = ["Smartphone", "Glosnik", "Ladowarka"];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sklep</h1>

      {produkty.map((p) => (
        <button key={p} onClick={() => setKoszyk([...koszyk, p])}>
          {p}
        </button>
      ))}

      <hr />

      <button onClick={() => setKoszyk([])} style={{ color: "red" }}>
        Wyczyść
      </button>

      <ul>
        {koszyk.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
