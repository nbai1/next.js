"use client";
import { useState } from "react";
import styles from "./board.module.css";

const initialBoard = [
  ["r","n","b","a","k","a","b","n","r"],
  ["","","","","","","","",""],
  ["","c","","","","","","c",""],
  ["p","","p","","p","","p","","p"],
  ["","","","","","","","",""],
  ["","","","","","","","",""],
  ["P","","P","","P","","P","","P"],
  ["","C","","","","","","C",""],
  ["","","","","","","","",""],
  ["R","N","B","A","K","A","B","N","R"],
];

export default function Home() {
  const [board, setBoard] = useState(initialBoard);
  const handleClick = (x: number, y: number) => {
    console.log("Clicked", x, y);
  };

  return (
    <div className={styles.container}>
      <h1>NL象棋 Demo</h1>
      <div className={styles.board}>
        {board.map((row, y) => (
          <div key={y} className={styles.row}>
            {row.map((piece, x) => (
              <div
                key={x}
                className={styles.cell}
                onClick={() => handleClick(x, y)}
              >
                {piece}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
