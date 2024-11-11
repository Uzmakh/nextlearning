"use client";

import { useState } from "react";
import FetchDataExample from "../components/FetchDataExample"
import CounterExample from "../components/CounterExample"
import styles from "./page.module.css";



export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${inputValue}`)
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home Page</h1>

        {/* Form Event */}
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} placeholder="Enter your name"
            onChange={(e)=>setInputValue(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      </main>

      {/* Fetch API Data */}
      <FetchDataExample />

      {/* Counter Example */}
      <CounterExample/>
    </div>
  );
}
