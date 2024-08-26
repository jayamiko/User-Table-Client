import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonBack() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/")}
      className="bg-orange-500 px-4 py-1 rounded-md font-bold text-white"
    >
      {" < "}Button Back
    </button>
  );
}

export default ButtonBack;
