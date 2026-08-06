"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Info, Mail, Trophy, Users } from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/tournaments", label: "Tournaments", icon: Trophy },
  { href: "/community", label: "Community", icon: Users },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-2 z-50 flex w-full justify-center px-4">
      <div className="hidden items-center gap-x-10 rounded-full border border-white/10 bg-gray-900/60 px-8 py-3 backdrop-blur-md md:flex">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-gray-300 transition hover:text-white"
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-x-2 rounded-full border border-white/10 bg-gray-900/70 p-2 backdrop-blur-md md:hidden">
        {links.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center overflow-hidden rounded-full transition-all duration-300 ease-out ${isActive
                ? "gap-x-2 bg-cyan-500 px-5 py-2.5 text-gray-950"
                : "px-3 py-2.5 text-gray-400 hover:text-white"
                }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} className="shrink-0" />
              <span
                className={`whitespace-nowrap text-sm font-semibold transition-all duration-300 ${isActive ? "max-w-32 opacity-100" : "max-w-0 opacity-0"
                  }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav >
  );
}