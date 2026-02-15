import Sky from "@/components/Sky";
import BackButton from "@/components/BackButton";
import RecordPlayer from "@/components/RecordPlayer";
import StickerLayer from "@/components/StickerLayer";

export default function SongPage() {
  return (
    <Sky>
      <BackButton />
      <h1 className="kawaiiTitle">Our song!</h1>
      <p className="kawaiiSub">
        Click the record player to play a sweet tune...
      </p>
      <RecordPlayer />
      <StickerLayer
        stickers={[
          {
            src: "/stickers/sticker-1.png",
            top: 90,
            left: 20,
            rotate: -8,
            size: 110,
          },
          {
            src: "/stickers/sticker-2.png",
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
