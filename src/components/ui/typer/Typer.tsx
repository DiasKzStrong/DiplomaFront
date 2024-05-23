"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typer = ({
  text,
  className,
}: {
  text: (string | number)[];
  className?: string;
}) => {
  return (
    <TypeAnimation
      sequence={text}
      wrapper="span"
      speed={50}
      className={className}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default Typer;
