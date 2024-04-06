import React from "react";
import { useState, useEffect } from "react";

export function Ticker({ message }) {
  const [letters, setLetters] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      setLetters((prev) => {
        if (prev.length === message.length) {
          clearInterval(id);
          return message;
        } else {
          return prev + message[prev.length];
        }
      });
    }, 1000);

    return () => clearInterval(id);
  }, [message]);

  return <h3>{letters}</h3>;
}
