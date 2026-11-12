"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductPhoto } from "@/data/products";

export function ProductGallery({ photos }: { photos: ProductPhoto[] }) {
  const [index, setIndex] = useState(0);
  const current = photos[index];

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white ring-1 ring-brand-night/10">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="(min-width: 768px) 420px, 100vw"
          className="object-contain p-4"
        />
      </div>
      {photos.length > 1 && (
        <ul className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
          {photos.map((photo, i) => (
            <li key={photo.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ver foto ${i + 1} de ${photos.length}: ${photo.alt}`}
                aria-pressed={i === index}
                className={`relative block size-20 overflow-hidden rounded-lg bg-white ring-2 transition ${
                  i === index ? "ring-machine" : "ring-transparent hover:ring-brand-night/30"
                }`}
              >
                <Image src={photo.src} alt="" fill sizes="80px" className="object-contain p-1" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
