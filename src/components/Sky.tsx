import Image from "next/image";

export default function Sky({ children }: { children: React.ReactNode }) {
  return (
    <div className="page">
      <div className="cloudLayer">
        <div className="cloudImg slow" style={{ top: "10%" }}>
          <Image
            src="/bg/cloud.png"
            alt=""
            fill
            className="cloudPng"
            priority
          />
        </div>
        <div className="cloudImg med" style={{ top: "22%" }}>
          <Image
            src="/bg/cloud.png"
            alt=""
            fill
            className="cloudPng"
            priority
          />
        </div>
        <div className="cloudImg fast" style={{ top: "36%" }}>
          <Image
            src="/bg/cloud.png"
            alt=""
            fill
            className="cloudPng"
            priority
          />
        </div>
        <div className="cloudImg slow" style={{ top: "52%" }}>
          <Image
            src="/bg/cloud.png"
            alt=""
            fill
            className="cloudPng"
            priority
          />
        </div>
        <div className="cloudImg med" style={{ top: "68%" }}>
          <Image
            src="/bg/cloud.png"
            alt=""
            fill
            className="cloudPng"
            priority
          />
        </div>
      </div>

      <div className="centerWrap">{children}</div>
    </div>
  );
}
