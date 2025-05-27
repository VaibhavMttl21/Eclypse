"use client";

import { useEffect, useRef, useState } from "react";

export const TextGenerateEffect = ({
  words,
  className = "",
}: {
  words: string;
  className?: string;
}) => {
  const [renderedText, setRenderedText] = useState("");
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    let index = 0;
    setRenderedText("");

    intervalRef.current = window.setInterval(() => {
      if (index < words.length) {
        setRenderedText((prev) => prev + words[index]);
        index++;
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 30);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [words]);

  return (
    <span className={className}>
      {renderedText}
      {renderedText.length < words.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};
