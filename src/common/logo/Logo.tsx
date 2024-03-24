import Link from "next/link";
import Image from "next/image";

const basePath = `/images/`;

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image src={`${basePath}logo.svg`} width={150} height={35} alt={`logo.svg`} />
    </Link>
  );
}
