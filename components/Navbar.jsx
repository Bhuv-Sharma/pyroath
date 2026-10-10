
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        My To-Do List
      </Link>

      <div className="nav-links">
        <Link
          href="/"
          className={pathname === "/" ? "active" : ""}
        >
          Home
        </Link>

        <Link
          href="/tasks"
          className={pathname === "/tasks" ? "active" : ""}
        >
          Tasks
        </Link>

        <Link
          href="/about"
          className={pathname === "/about" ? "active" : ""}
        >
          About
        </Link>
      </div>
    </nav>
  );
}
