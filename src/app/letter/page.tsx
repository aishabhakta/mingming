import Sky from "@/components/Sky";
import BackButton from "@/components/BackButton";
import EnvelopeReveal from "@/components/EnvelopeReveal";
import StickerLayer from "@/components/StickerLayer";

export default function LetterPage() {
  return (
    <Sky>
      <BackButton />
      <h1 className="kawaiiTitle">Dear Bibble...</h1>
      <p className="kawaiiSub">Tap the envelope to reveal the letter!</p>
      <EnvelopeReveal />
      <StickerLayer
        stickers={[
          {
            src: "/stickers/sticker-5.png",
            top: 90,
            left: 20,
            rotate: -8,
            size: 110,
          },
          {
            src: "/stickers/sticker-6.png",
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
