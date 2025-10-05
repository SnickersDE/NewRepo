import { useState } from "react";
import { format } from "date-fns";

export default function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    if (!note.trim()) return;
    console.log("Notiz gespeichert:", { date: selectedDate, note });
    setNote("");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-between p-4">
      <header className="text-2xl font-bold text-red-800 mt-4">
        LERNSYNC (MVP)
      </header>

      <main className="flex-1 w-full max-w-md mt-6">
        {/* Kalender */}
        <div className="border rounded-2xl p-4 shadow">
          <h2 className="text-lg font-semibold mb-2 text-center">
            {format(selectedDate, "PPP")}
          </h2>
          <input
            type="date"
            value={format(selectedDate, "yyyy-MM-dd")}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
            className="w-full border rounded-lg p-2 text-center"
          />
        </div>

        {/* Eingabefeld */}
        <div className="flex mt-6 border rounded-2xl shadow overflow-hidden">
          <input
            type="text"
            placeholder="Notiz eingeben..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="flex-1 p-3 outline-none"
          />
          <button
            onClick={handleSubmit}
            className="bg-red-700 text-white px-4 font-semibold"
          >
            ➤
          </button>
        </div>
      </main>

      <footer className="text-xs text-gray-400 mb-2">
        © 2025 LernSync – Beta Interface
      </footer>
    </div>
  );
}

