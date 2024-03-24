import Image from "next/image";

const basePath = `/images/home/`;

export default function Home() {
  return (
    <div>
      <Image
        width={400}
        height={400}
        src={`${basePath}top-left.png`}
        alt={`top-left.png`}
        priority
        style={{
          top: "0",
          left: "0",
          verticalAlign: "middle",
          position: "fixed",
          zIndex: "-1",
          objectFit: "cover",
          mixBlendMode: "color-dodge",
          opacity: ".5",
        }}
      />
    </div>
  );
}
