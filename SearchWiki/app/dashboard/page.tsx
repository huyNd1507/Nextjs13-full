import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dasboard Pages",
  description: "this is description",
};

export default function Dasboard() {
  // throw new Error("Dasboard Error");
  return <h1>Dasboard page</h1>;
}
