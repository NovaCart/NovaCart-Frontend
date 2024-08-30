import React from "react";

interface CircularProgressProps {
  percentage: number;
  size?: number;
}

const Circlefeedback: React.FC<CircularProgressProps> = ({
  percentage,
  size = 200,
}) => {
  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#426B1F"
        strokeWidth="10"
        fill="transparent"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#6B1F1F"
        strokeWidth="10"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="black"
        dy=".3em"
        className="text-3xl font-bold"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default Circlefeedback;
