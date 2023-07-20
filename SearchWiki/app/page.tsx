"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [couter, setCouter] = useState(0);

  return (
    <>
      <h1 className="text-2xl">{couter}</h1>
      <button onClick={() => setCouter(couter + 1)}>Click me!</button>
      <br />
      <Link href="/users">User</Link>
    </>
  );
}
