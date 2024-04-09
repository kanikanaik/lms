"use client";
import React from "react";
import toast from "react-hot-toast";

function CopyClip({ text }: { text: string }) {
  return (
    <div>
      <p
        onClick={() => {
          navigator.clipboard.writeText(text);
          toast.success("Copied to clipboard");
        }}
        className="cursor-pointer"
      >
        {text}
      </p>
    </div>
  );
}

export default CopyClip;
