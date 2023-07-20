import Link from "next/link";

export default function ThankYou() {
  return (
    <main>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        <Link href="/">Back to home</Link>
      </button>
      <h1 className="text-3xl grid place-content-center min-h-screen">
        Thank you for your feedback!
      </h1>
    </main>
  );
}
