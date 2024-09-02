import React, { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center transition-colors bg-black/40"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white p-6 rounded-xl shadow transition-all
    ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
