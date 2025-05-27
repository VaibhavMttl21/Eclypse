"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  className?: string;
  children?: React.ReactNode;
}

export const GridPattern = ({
  width = 100,
  height = 100,
  x = 12,
  y = 12,
  className,
  children,
}: GridPatternProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    if (!ref.current) return;
  }, []);

  if (!isMounted) return null;

  return (
    <div
      ref={ref}
      className={cn("relative h-full w-full", className)}
    >
      <svg
        className="absolute inset-0 h-full w-full stroke-gray-700/20 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="pattern-grid"
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            x={x}
            y={y}
          >
            <path
              d={`M ${height} 0 L 0 0 0 ${width}`}
              fill="none"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#pattern-grid)"
        />
      </svg>
      {children}
    </div>
  );
};
