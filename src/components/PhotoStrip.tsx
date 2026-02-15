"use client";

import Image from "next/image";
import { useState } from "react";

const photos = [
  "/photos/booth1.jpeg",
  "/photos/booth2.jpeg",
  "/photos/booth3.jpeg",
];

export default function PhotoStrip() {
  const [revealed, setRevealed] = useState([false, false, false]);

  return (
    <div
      style={{ position: "relative", width: "fit-content", margin: "0 auto" }}
    >
      {/* Corner stickers */}
      <div
        style={{
          position: "absolute",
          top: -24,
          left: -24,
          width: 70,
          height: 70,
          zIndex: 5,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/stickers/sticker-1.png"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: -24,
          right: -24,
          width: 70,
          height: 70,
          zIndex: 5,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/stickers/sticker-2.png"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: -24,
          left: -24,
          width: 70,
          height: 70,
          zIndex: 5,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/stickers/sticker-3.png"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: -24,
          right: -24,
          width: 70,
          height: 70,
          zIndex: 5,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/stickers/sticker-4.png"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="card strip">
        {photos.map((src, i) => (
          <div
            key={src}
            className="square"
            onClick={() =>
              setRevealed((prev) =>
                prev.map((v, idx) => (idx === i ? true : v)),
              )
            }
            role="button"
            tabIndex={0}
          >
            <Image
              src={src}
              alt={`Photobooth photo ${i + 1}`}
              fill
              sizes="360px"
            />
            <div className={`cover ${revealed[i] ? "hidden" : ""}`}>
              Click to reveal ✨
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
