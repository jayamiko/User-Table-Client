import React from "react";

function Button(props) {
  return (
    <button
      style={{ background: props.disabled ? "grey" : props.color }}
      className={`${
        props.disabled ? "opacity-75" : "opacity-100"
      } px-5 text-center py-1 font-bold text-white capitalize rounded-md`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}

export default Button;
