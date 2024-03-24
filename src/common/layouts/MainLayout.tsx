import Image from "next/image";
import { ReactNode } from "react";
import Header from "../header/Header";
import Nav from "../nav/Nav";

const basePath = `/images/`;

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
        style={{ verticalAlign: "middle", position: "absolute", zIndex: "-1", objectFit: "cover" }}
      />
      <Nav />
      <Header />
      <main>{children}</main>
    </div>
  );
}
