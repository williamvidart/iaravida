"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface Props {
  images: { src: string; alt: string }[];
}

export default function ObraCarousel({ images }: Props) {
  const [idx, setIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (next: number) => {
      setIdx(((next % images.length) + images.length) % images.length);
    },
    [images.length]
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => go(idx + 1), 3000);
  }, [go, idx]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [resetTimer]);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      go(dx < 0 ? idx + 1 : idx - 1);
    }
    touchStartX.current = null;
  }

  return (
    <div
      className="relative aspect-[4/5] w-full overflow-hidden rounded-sm"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === idx ? 1 : 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 50vw, 250px"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Foto ${i + 1}`}
            onClick={() => { go(i); }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === idx ? "w-4 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
