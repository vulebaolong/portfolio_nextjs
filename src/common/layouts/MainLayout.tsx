import { ReactNode } from "react";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import Image from "next/image";

const basePath = `/images/layout/`;

type TProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: TProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Image
        fill
        src={`${basePath}bg.svg`}
        alt={`bg.svg`}
        priority
        style={{
          verticalAlign: "middle",
          position: "absolute",
          objectFit: "cover",
          zIndex: `-1`,
        }}
      />
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
          position: "absolute",
          objectFit: "cover",
          mixBlendMode: "color-dodge",
          opacity: ".5",
          zIndex: `-1`,
        }}
      />

      <Nav />
      <Header />
      <main>{children}</main>
    </div>
  );
}
