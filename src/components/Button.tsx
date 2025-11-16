"use client";

import { useState } from "react";

export default function Button({
  size,
  isSelected,
}: {
  size: string;
  isSelected: boolean;
}) {
  const handleSelectSize = (e: React.MouseEvent<HTMLButtonElement>) => {
    // e.currentTarget.classList.toggle("bg-gray-900");
    // e.currentTarget.classList.toggle("bg-gray-100");
  };
  return (
    <button
      onClick={(e) => handleSelectSize(e)}
      key={size}
      className="px-4 py-2 border-2 border-gray-300 hover:bg-gray-100 rounded hover:border-gray-900 transition uppercase text-sm font-semibold"
    >
      {size}
    </button>
  );
}
