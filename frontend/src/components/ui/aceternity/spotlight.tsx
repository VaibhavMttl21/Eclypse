"use client";
import { cn } from "@/lib/utils";
import { useRef, useState, useEffect } from "react";

interface SpotlightProps {
  className?: string;
  children: React.ReactNode;
}

export function Spotlight({
  children,
  className = "",
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mousePositionRef.current = { x, y };
        
        if (containerRef.current) {
          containerRef.current.style.setProperty("--mouse-x", `${x}px`);
          containerRef.current.style.setProperty("--mouse-y", `${y}px`);
        }
      }
    };

    if (isMounted && containerRef.current) {
      containerRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isMounted]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden w-full bg-slate-950 rounded-md",
        className
      )}
    >
      {isMounted && (
        <div
          className="pointer-events-none absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(120, 100, 255, 0.1), transparent 40%)",
          }}
        />
      )}
      {children}
    </div>
  );
}
