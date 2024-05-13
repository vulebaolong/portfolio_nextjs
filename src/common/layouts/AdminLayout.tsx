import { ReactNode } from "react";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import Image from "next/image";

const basePath = `/images/layout/`;

type TProps = {
   children: ReactNode;
};

export default function AdminLayout({ children }: TProps) {
   return <div>{children}</div>;
}
