"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function AnimatedStack({ stacks }: { stacks: string[] }) {
  const [text] = useTypewriter({
    words: stacks,
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className=" flex items-center justify-start gap-1 text-blue-600 dark:text-cyan-600 font-semibold w-[50%] md:w-[40%]">
      <span>{text}</span>
      <Cursor />
    </div>
  );
}
