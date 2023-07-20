import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "./Search";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-300 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <Search />
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/posts"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/users"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Users
                </Link>
              </li>
            </ul>
            Search
          </div>
        </div>
      </nav>
    </>
  );
}
