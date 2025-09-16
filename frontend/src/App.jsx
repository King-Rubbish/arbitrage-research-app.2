import React, { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  async function search() {
    const res = await fetch("http://localhost:4000/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    });
    const data = await res.json();
    setResult(data);
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Arbitrage Research</h1>
      <div className="flex gap-2">
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter product name or link"
          className="flex-1 border p-2 rounded"
        />
        <button onClick={search} className="bg-blue-600 text-white px-4 rounded">
          Search
        </button>
      </div>

      {result && (
        <div className="mt-6 bg-white border rounded p-4">
          <h2 className="font-semibold">{result.product?.name || query}</h2>
          <p>Avg Sell Price: ${result.avg_sell_price ?? "N/A"}</p>
          <p>Net Profit: ${result.net_profit ?? "N/A"}</p>
        </div>
      )}
    </div>
  );
}
