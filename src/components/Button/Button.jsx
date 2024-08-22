import React from "react";

function Button(props) {
  return (
    <button
      style={{ background: props.color }}
      className="px-3 text-center py-1 font-bold text-white capitalize rounded-md"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
