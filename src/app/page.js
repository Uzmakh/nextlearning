"use client";

import { useState } from "react";
import FetchDataExample from "../components/FetchDataExample"
import CounterExample from "../components/CounterExample"
import FormEvents from "@/components/FormEvents";
import Link from "next/link"
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import "./globals.css"



export default function Home() {
  const router = useRouter();

  // Alternatively, use navigation
  const navigation = (name) => {
    router.push(name);
  }
console.log("Router :", router)
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Linking</h1>
        <ul>
          <h2>Through Link</h2>
          <li>
            <Link href={"/about"}>Go to About Page</Link>
          </li>
          <li>
            <Link href={"/contact"}>Go to Contact Page</Link>
          </li>
        </ul>

        <div>
          <h2>Through useRouter Hook</h2>
          {/* <button onClick={() => router.push("/about")}>Go to About Page</button>
          <button onClick={() => router.push("/contact")}>Go to Contact Page</button> */}

          {/* Alternatively */}
          <button onClick={() => navigation("/about")}>Go to About Page</button>
          <button onClick={() => navigation("/contact")}>Go to Contact Page</button>
    </div>
      </main>

      {/* Handling Events */}
      {/* < FormEvents/> */}

      {/* Fetch API Data */}
      {/* <FetchDataExample /> */}

      {/* Counter Example */}
      {/* <CounterExample/> */}
    </div>
  );
}
