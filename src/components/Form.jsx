import React, { useReducer } from "react";

const initialState = {
  errors: {
    firstName: "",
  },
  data: {
    firstName: "",
  },
};

const Form = () => {
  const reducer = (state, action) => {
    if (action.type === "firstName") {
      return {
        data: { ...state.data, firstName: action?.value },
        errors: {
          ...state.errors,
          firstName:
            action.value.trim().length <= 4
              ? "firstname should be atleast 5 characters"
              : "",
        },
      };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = () => {};
  const handleChange = (e) => {
    dispatch({ type: "firstName", value: e.target.value });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">User Form</h2>

        <div className="flex flex-col gap-4">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Enter your name"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {state?.errors?.firstName && (
            <p>firstName must be atleast 5 characters</p>
          )}

          <button
            onClick={handleSubmit}
            className="bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
