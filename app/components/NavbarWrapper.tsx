// components/NavbarWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar_vn from "./Navbar_vn";
import Navbar_en from "./Navbar_en";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en"); // Check for English instead

  return isEnglish ? <Navbar_en /> : <Navbar_vn />; // Default to Vietnamese
}
