import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCounter, decreaseCounter } from "../features/countSlice";

const Counter = () => {
  const count = useSelector((state) => state.count.countValue);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increaseCounter());
  };
  const handleDecrement = () => {
    dispatch(decreaseCounter());
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-4">Count value is: {count}</h1>
        <div className="space-x-4">
          <button
            onClick={handleDecrement}
            className="px-4 py-2 bg-red-500 text-white "
          >
            Decrement
          </button>
          <button
            onClick={handleIncrement}
            className="px-4 py-2 bg-green-500 text-white"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
