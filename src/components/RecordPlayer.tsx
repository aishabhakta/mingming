"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function RecordPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/audio/inside-out-clip.mp3");
    audioRef.current.loop = true;
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;

    if (!playing) {
      try {
        await a.play();
        setPlaying(true);
        setHasStarted(true);
      } catch {
        // ignored
      }
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="card recordWrap">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src="/song/record-player.png"
          alt="Record player"
          width={700}
          height={700}
          className={`recordBtn ${playing ? "spin" : ""}`}
          onClick={toggle}
          priority
        />

        {/* play button UNDER record */}
        <button
          onClick={toggle}
          aria-label={playing ? "Pause music" : "Play music"}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            marginTop: 12,
          }}
        >
          <img
            src="/stickers/play-music.png"
            alt={playing ? "Pause" : "Play"}
            style={{
              width: 140,
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 12px 16px rgba(0,0,0,0.12))",
            }}
          />
        </button>

        {/* cover + title ONLY after first click */}
        {hasStarted && (
          <div
            style={{
              marginTop: 14,
              display: "grid",
              gap: 10,
              placeItems: "center",
            }}
          >
            <Image
              src="/song/cover.png"
              alt="Song cover"
              width={120}
              height={120}
              style={{ borderRadius: 18 }}
            />
            <div style={{ fontWeight: 700, fontSize: 18 }}>
              Inside Out — keshi
            </div>
          </div>
        )}

        <div className="smallText">You are the sweet music in my life :)</div>
      </div>
    </div>
  );
}
