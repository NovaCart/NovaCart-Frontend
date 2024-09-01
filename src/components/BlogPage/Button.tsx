import React from "react";

interface MyButtonProps {
  bgColor?: string;
  textColor?: string;
  text?: string;
  onClick?: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({
  bgColor = "bg-black",
  textColor = "text-white",
  text = "Buy Now",
  onClick,
}) => {
  return (
    <button
      className={`${bgColor} ${textColor} font-bold py-2 px-4 rounded-3xl border-[2px]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default MyButton;
