import Image from "next/image";
import Link from "next/link";
import Sky from "@/components/Sky";

function JourneyIcon({
  href,
  src,
  label,
  alt,
}: {
  href: string;
  src: string;
  label: string;
  alt: string;
}) {
  return (
    <Link href={href} className="iconLink">
      <div className="heartBG">
        <div className="iconLinkInner">
          <Image
            className="iconImg"
            src={src}
            alt={alt}
            width={260}
            height={260}
            priority
          />
          <div className="floatLabel">{label}</div>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <Sky>
      <div className="calendarSticker">
        <Image
          src="/stickers/calendar.png"
          alt="Calendar sticker"
          width={120}
          height={120}
          priority
        />
      </div>

      <h1 className="kawaiiTitle">Happy Valentine&apos;s Day Ming Ming!</h1>
      <p className="kawaiiSub">Choose your journey:</p>

      <div className="iconGrid">
        <JourneyIcon
          href="/photobooth"
          src="/icons/camera.png"
          label="Photobooth"
          alt="Camera icon"
        />
        <JourneyIcon
          href="/letter"
          src="/icons/envelope.png"
          label="Letter"
          alt="Envelope icon"
        />
        <JourneyIcon
          href="/song"
          src="/icons/record.png"
          label="Song"
          alt="Record player icon"
        />
      </div>
      <div className="loveContainer">
        <div className="loveFloat">
          <img className="loveSticker" src="/stickers/sticker-9.png" alt="" />
          <div className="loveMessage">I love you! Love, Bibble</div>
          <img className="loveSticker" src="/stickers/sticker-10.png" alt="" />
        </div>
      </div>
    </Sky>
  );
}
