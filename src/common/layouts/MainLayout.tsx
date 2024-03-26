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
      <Nav />
      <Header />
      <main>{children}</main>
    </div>
  );
}
