import Image from "next/image";

type Sticker = {
  src: string;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  size?: number;
  rotate?: number;
  z?: number;
  opacity?: number;
};

export default function StickerLayer({
  stickers,
  safeTop = 110,
}: {
  stickers: Sticker[];
  safeTop?: number;
}) {
  return (
    <>
      {stickers.map((s, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            top: s.top !== undefined ? s.top + safeTop : undefined,
            left: s.left,
            right: s.right,
            bottom: s.bottom,
            width: s.size ?? 90,
            height: s.size ?? 90,
            transform: `rotate(${s.rotate ?? 0}deg)`,
            zIndex: s.z ?? 3,
            opacity: s.opacity ?? 1,
            pointerEvents: "none",
          }}
        >
          <Image src={s.src} alt="" fill style={{ objectFit: "contain" }} />
        </div>
      ))}
    </>
  );
}
