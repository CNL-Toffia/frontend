"use client";

import React from "react";
import { NavItem } from "@/data/siteConfig";

export interface NavbarProps {
  currentPath?: string;
  transparent?: boolean;
}

export default function Navbar({ currentPath, transparent }: NavbarProps) {
  return (
    <header className="w-full">
      {/* Navbar scaffolded stub */}
    </header>
  );
}
