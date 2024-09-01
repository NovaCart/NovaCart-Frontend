import React from "react";

interface MyButtonProps {
  bgColor?: string;
  textColor?: string;
  text?: string;
  onClick?: () => void;
}

const Button: React.FC<MyButtonProps> = ({
  bgColor = "bg-black",
  textColor = "text-white",
  text = "Buy Now",
  onClick,
}) => {
  return (
    <button
      className={`${bgColor} ${textColor} font-bold py-2 px-4 rounded-2xl border-[2px]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
