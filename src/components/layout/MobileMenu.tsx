"use client";

import React from "react";
import { NavItem } from "@/data/siteConfig";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items?: NavItem[];
}

export default function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  return (
    <div className="mobile-menu-container">
      {/* MobileMenu scaffolded stub */}
    </div>
  );
}
