import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen bg-blue-950 flex flex-col items-center justify-center p-4">
      <div
        className={`w-72 bg-slate-900 border rounded-3xl p-6 flex flex-col items-center shadow-2xl transition-all duration-300 ${count > 0 ? "border-emerald-500/30" : count < 0 ? "border-rose-500/30" : "border-slate-700/50"}`}
      >
        <div
          className={`h-32 flex items-center justify-center text-7xl font-black font-mono transition-all duration-300 ${count > 0 ? "text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0,3)]" : count < 0 ? "text-rose-400 drop-shadow-[0_0_12px_rgba(251,113,133,0.3)]" : "text-white"}`}
        >
          {count}
        </div>
        <div className="w-full grid grid-cols-2 gap-3 mb-6">
          <button
            className="bg-slate-800 border border-slate-700 hover:border-emerald-500/40 hover:bg-emerald-950/20 text-slate-400 hover:text-emerald-400 font-bold py-2 rounded-2xl transition transform  hover:scale-105 active:scale-95"
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>
          <button
            className="bg-slate-800 border border-slate-700 hover:border-rose-500/40 hover:bg-rose-950/20 text-slate-400 hover:text-rose-400 font-bold py-2 rounded-2xl transition transform  hover:scale-105 active:scale-95"
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
