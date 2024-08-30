import React from "react";

interface CircularProgressProps {
  percentage: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width="120" height="120" className="rotate-[-90deg]">
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#E6E6E6"
        strokeWidth="10"
        fill="transparent"
      />
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#06402b"
        strokeWidth="10"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="black"
        dy=".3em"
        className="text-2xl font-bold"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default CircularProgress;
