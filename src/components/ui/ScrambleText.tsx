import React, { useState, useEffect, useRef } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  trigger?: "load" | "hover" | "controlled";
  isHovered?: boolean;
  speed?: number;
  delay?: number;
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = "",
  trigger = "load",
  isHovered = false,
  speed = 30,
  delay = 0,
}) => {
  const [displayText, setDisplayText] = useState(
    trigger === "load" ? "" : text,
  );
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$*&_%";
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startScramble = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            if (char === " ") return " ";
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join(""),
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current!);
      }

      iteration += 1 / 3;
    }, speed);
  };

  useEffect(() => {
    if (trigger === "load") {
      const timeout = setTimeout(() => {
        startScramble();
      }, delay);
      return () => clearTimeout(timeout);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [trigger, text, delay, speed]);

  useEffect(() => {
    if (trigger === "controlled" && isHovered) {
      startScramble();
    }
  }, [isHovered, trigger]);

  return (
    <span
      className={className}
      onMouseEnter={trigger === "hover" ? startScramble : undefined}
    >
      {trigger === "load" && !displayText
        ? "\u00A0".repeat(text.length)
        : displayText}
    </span>
  );
};
