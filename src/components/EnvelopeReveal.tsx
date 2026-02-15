"use client";

import Image from "next/image";
import { useState } from "react";

export default function EnvelopeReveal() {
  const [flying, setFlying] = useState(false);
  const [opened, setOpened] = useState(false);

  const onOpen = () => {
    if (flying) return;
    setOpened(true); // reveal immediately (behind envelope)
    setFlying(true); // envelope flies away
  };

  return (
    <div className="envelopeWrap">
      {/* floating decor stickers */}
      <div className="floating">
        <Image
          className="floatSticker"
          src="/letter/decor1.png"
          alt=""
          width={54}
          height={54}
          style={{ top: 70, left: 10 }}
        />
        <Image
          className="floatSticker"
          src="/letter/decor2.png"
          alt=""
          width={54}
          height={54}
          style={{ top: 64, right: 10, animationDelay: "0.5s" }}
        />
      </div>

      <div className="letterStage">
        {opened && (
          <Image
            src="/letter/letter.png"
            alt="Letter"
            width={900}
            height={1200}
            className="letterUnder"
            priority
          />
        )}

        <Image
          src="/letter/envelope.png"
          alt="Envelope"
          width={520}
          height={520}
          className={`envelopeBtn ${flying ? "fly" : ""}`}
          onClick={onOpen}
          priority
        />
      </div>
    </div>
  );
}
