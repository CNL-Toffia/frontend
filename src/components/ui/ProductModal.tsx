"use client";

import React from "react";
import { Product } from "@/data/products";

export interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({
  product,
  isOpen,
  onClose,
}: ProductModalProps) {
  return (
    <div className="product-modal-container">
      {/* ProductModal scaffolded stub */}
    </div>
  );
}
