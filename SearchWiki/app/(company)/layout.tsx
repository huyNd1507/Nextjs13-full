import Link from "next/link";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="container flex">
        <div className="overflow-y-auto border-r border-gray-200">
          <nav className="flex flex-col">
            <ul role="list" className="flex flex-1 flex-col gay-y-4">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <main className="grow ml-12 p-6 bg-gray-50">{children}</main>
      </div>
    </section>
  );
}
