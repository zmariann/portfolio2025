import { useState, useEffect } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;
  delay?: number;
};

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 100,
  delay = 2000,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    index < text.length;
    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      setIndex((prev) => prev + 1);
    }, speed);
    return () => clearTimeout(timeout);
  }, [index, text, speed, delay]);

  return <h1 className="text-left">{displayedText}</h1>;
};

export default Typewriter;
