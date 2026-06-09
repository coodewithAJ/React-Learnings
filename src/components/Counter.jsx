import React, { useReducer } from "react";

const reducer = (state, action) => {
  if ((action.type === "INC")) return state + 1;
  if ((action.type === "DEC")) return state - 1;
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const handleInc = () => {
    dispatch({ type: "INC" });
  };
  const handleDec = () => {
    dispatch({ type: "DEC" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-96 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Counter App</h1>

        <div className="text-7xl font-extrabold text-indigo-600 mb-8">
          {state}
        </div>

        <div className="flex justify-center gap-7">
          <button
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-md transition duration-200 active:scale-95"
            onClick={handleDec}
          >
            −
          </button>

          <button
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-md transition duration-200 active:scale-95"
            onClick={handleInc}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
