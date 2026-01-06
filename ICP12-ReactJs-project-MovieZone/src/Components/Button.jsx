import React from "react";

const Button = ({
  text = "Click Me",
  onClick,
  type = "button",
  variant = "primary",
}) => {
  const styles = {
    primary: {
      backgroundColor: "#456882",
      color: "#ffffff",
    },
   
    outline: {
      backgroundColor: "transparent",
      color: "#456882",
      border: "2px solid #456882",
    },
    disabled:{
        backgroundColor:"#9fb5bf",
        color:"#ffffff",
        cursor:"not allowed",
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "10px 20px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        margin: "5px",
        ...styles[variant],
      }}
    >
      {text}
    </button>
  );
};

export default Button;