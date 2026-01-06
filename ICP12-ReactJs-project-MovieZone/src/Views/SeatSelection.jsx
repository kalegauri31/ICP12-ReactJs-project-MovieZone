import { useState } from "react";

const seatsData = [
  ["A1", "A2", "A3", "A4", "A5"],
  ["B1", "B2", "B3", "B4", "B5"],
  ["C1", "C2", "C3", "C4", "C5"],
];

const bookedSeats = ["A3", "B2"];
const pricePerSeat = 150;

function SeatSelection() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;

    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-4">
          🎬 Select Your Seats
        </h2>

        {/* Screen */}
        <div className="bg-gray-300 text-black text-center py-2 rounded mb-6">
          SCREEN
        </div>

        {/* Seats */}
        <div className="space-y-3">
          {seatsData.map((row, i) => (
            <div key={i} className="flex justify-center gap-3">
              {row.map((seat) => {
                const isBooked = bookedSeats.includes(seat);
                const isSelected = selectedSeats.includes(seat);

                return (
                  <button
                    key={seat}
                    onClick={() => toggleSeat(seat)}
                    disabled={isBooked}
                    className={`
                      w-12 h-12 rounded-md font-semibold
                      transition duration-200
                      ${
                        isBooked
                          ? "bg-red-500 cursor-not-allowed"
                          : isSelected
                          ? "bg-green-500"
                          : "bg-gray-600 hover:bg-gray-500"
                      }
                    `}
                  >
                    {seat}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-6 text-center">
          <p className="mb-2">
            Selected Seats:
            <span className="font-semibold">
              {" "}
              {selectedSeats.join(", ") || "None"}
            </span>
          </p>

          <p className="mb-4 text-lg">
            Total Price:
            <span className="font-bold text-green-400">
              {" "}
              ₹{selectedSeats.length * pricePerSeat}
            </span>
          </p>

          <button
            disabled={selectedSeats.length === 0}
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg disabled:bg-gray-500"
          >
            Book Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default SeatSelection;