import Sky from "@/components/Sky";
import BackButton from "@/components/BackButton";
import PhotoStrip from "@/components/PhotoStrip";
import StickerLayer from "@/components/StickerLayer";

export default function PhotoboothPage() {
  return (
    <Sky>
      <BackButton />
      <h1 className="kawaiiTitle">Welcome to Bibble&apos;s Photobooth!</h1>
      <p className="kawaiiSub">Click on a square to reveal the picture!</p>
      <PhotoStrip />
      <StickerLayer
        stickers={[
          {
            src: "/stickers/sticker-7.png",
            top: 90,
            left: 20,
            rotate: -8,
            size: 110,
          },
          {
            src: "/stickers/sticker-8.png",
            bottom: 30,
            right: 25,
            rotate: 10,
            size: 130,
          },
        ]}
      />
    </Sky>
  );
}
