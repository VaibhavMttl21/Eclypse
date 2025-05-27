"use client";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface InputOTPProps {
  value: string;
  onChange: (value: string) => void;
  length?: number;
  autoFocus?: boolean;
  className?: string;
  inputClassName?: string;
}

export const InputOTP = ({
  value,
  onChange,
  length = 6,
  autoFocus = false,
  className,
  inputClassName,
}: InputOTPProps) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if ((e.target as HTMLInputElement).value === "") {
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
          handleChange(index - 1, "");
        }
      } else {
        handleChange(index, "");
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = e.target.value.slice(-1);
    handleChange(index, newValue);

    if (newValue && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleChange = (index: number, newValue: string) => {
    const newOTP = value.split("");
    newOTP[index] = newValue;
    onChange(newOTP.join(""));
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, length);
    
    if (pastedData.match(/^[0-9]+$/)) {
      onChange(pastedData.padEnd(length, "").slice(0, length));
      
      if (inputRefs.current[pastedData.length]) {
        inputRefs.current[pastedData.length - 1]?.focus();
      } else {
        inputRefs.current[length - 1]?.focus();
      }
    }
  };

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className={cn("flex gap-2", className)}>
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={value[index] || ""}
          onChange={(e) => handleInput(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          onClick={() => handleClick(index)}
          className={cn(
            "w-9 h-10 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 transition-all",
            selectedIndex === index && "border-blue-500",
            inputClassName
          )}
        />
      ))}
    </div>
  );
};
