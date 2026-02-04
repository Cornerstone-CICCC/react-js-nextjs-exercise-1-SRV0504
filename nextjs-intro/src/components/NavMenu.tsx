import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function NavMenu() {
  return (
    <header className="border-b">
      <nav className="mx-auto max-w-4xl px-4 py-4 flex gap-4">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
